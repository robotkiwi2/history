// 디테일 중복 분석 스크립트
const fs = require('fs');

const all = JSON.parse(fs.readFileSync('data/cards.all.json', 'utf8'));
const details = all.filter(c => c.kind === 'detail');

// 1) 정규화: 공백·구두점 통일, 옵션 라벨 접두사(if 잔존), 어미 통일
function normalize(s) {
  return s
    .replace(/^\([가-마]\)\s*-\s*/, '')  // (가) - 잔재
    .replace(/^[①②③④⑤]\s*/, '')        // 옵션 번호 잔재
    .replace(/[\s.,·\-。．、]+/g, '')      // 공백·구두점·중점
    .replace(/(이?다|었다|있었다|되었다|하였다|했다|이었다)\.?$/u, '$1')  // 어미 stub
    .trim();
}

// 2) Jaccard similarity on char trigrams
function trigrams(s) {
  const set = new Set();
  const t = s.replace(/\s+/g, '');
  for (let i = 0; i < t.length - 2; i++) set.add(t.slice(i, i + 3));
  return set;
}
function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

// 3) 그룹화: 정확 일치 먼저
const exactGroups = new Map();
details.forEach((d, idx) => {
  const k = normalize(d.description || d.title);
  if (!exactGroups.has(k)) exactGroups.set(k, []);
  exactGroups.get(k).push({ idx, d });
});

const exactDups = [...exactGroups.values()].filter(g => g.length > 1);
console.log(`\n=== 1) 정확 일치 그룹 (정규화 후 동일) ===`);
console.log(`그룹 수: ${exactDups.length}, 총 디테일: ${exactDups.reduce((s, g) => s + g.length, 0)}`);

// 같은 태그끼리 vs 다른 태그
let sameTagExact = 0, diffTagExact = 0;
exactDups.forEach(g => {
  const tags = new Set(g.flatMap(x => x.d.tags));
  if (tags.size === 1) sameTagExact++;
  else diffTagExact++;
});
console.log(`  - 같은 태그: ${sameTagExact}개 그룹`);
console.log(`  - 다른 태그: ${diffTagExact}개 그룹 (분류 충돌 가능성)`);

// 다른 태그로 분류된 정확 일치 (가장 우려스러운 케이스)
console.log(`\n--- 다른 태그로 분류된 정확 일치 (top 15) ---`);
const diffTagSamples = exactDups.filter(g => new Set(g.flatMap(x => x.d.tags)).size > 1).slice(0, 15);
diffTagSamples.forEach(g => {
  const desc = (g[0].d.description || g[0].d.title).slice(0, 60);
  const tagList = g.map(x => `${x.d.tags.join('/')} [${x.d._src || x.d._source}]`).join(' | ');
  console.log(`  "${desc}"`);
  console.log(`    → ${tagList}`);
});

// 4) 거의 일치 (정확 일치는 제외, jaccard >= 0.75)
console.log(`\n=== 2) 거의 일치 (Jaccard ≥ 0.75, 정확 일치 제외) ===`);
const exactKeys = new Set(exactGroups.keys());
// 정확 일치는 첫 항목만 남기고 비교에서 제외
const reps = [...exactGroups.values()].map(g => g[0]);
console.log(`비교 대상(대표): ${reps.length}개`);

const trigramCache = reps.map(r => trigrams((r.d.description || r.d.title)));
const nearDups = [];

// 같은 태그 그룹 안에서만 비교 (성능 + 의미)
const byTag = new Map();
reps.forEach((r, i) => {
  (r.d.tags || ['(no-tag)']).forEach(t => {
    if (!byTag.has(t)) byTag.set(t, []);
    byTag.get(t).push(i);
  });
});

for (const [tag, idxs] of byTag) {
  for (let i = 0; i < idxs.length; i++) {
    for (let j = i + 1; j < idxs.length; j++) {
      const a = trigramCache[idxs[i]];
      const b = trigramCache[idxs[j]];
      const sim = jaccard(a, b);
      if (sim >= 0.75) {
        nearDups.push({ tag, i: idxs[i], j: idxs[j], sim });
      }
    }
  }
}

// dedupe pairs
nearDups.sort((a, b) => b.sim - a.sim);
console.log(`거의 일치 pair: ${nearDups.length}개`);
console.log(`\n--- 거의 일치 top 25 (같은 태그 내) ---`);
nearDups.slice(0, 25).forEach(p => {
  const a = reps[p.i].d, b = reps[p.j].d;
  console.log(`  [${p.tag}] sim=${p.sim.toFixed(2)}`);
  console.log(`    A: ${a.description.slice(0, 70)} [${a._src}]`);
  console.log(`    B: ${b.description.slice(0, 70)} [${b._src}]`);
});

// 5) 핵심 명사구 기반 — 같은 사실 다른 표현
console.log(`\n=== 3) 같은 핵심 명사구 포함 (다른 표현이지만 같은 사실 가능성) ===`);
const KEY_PHRASES = [
  '묘청의 난', '광주 학생', '관산성', '신유박해', '대성 학교',
  '훈민정음', '훈련도감', '집강소', '동학', '윤봉길', '이봉창',
  '봉오동', '청산리', '한산도', '행주', '대마도', '쓰시마',
  '강동 6주', '동북 9성', '별무반', '귀주', '살수',
  '4·19', '5·18', '6월 민주', '유신', 'YH', '부마',
];
const phraseGroups = {};
details.forEach(d => {
  const desc = d.description || d.title;
  KEY_PHRASES.forEach(p => {
    if (desc.includes(p)) {
      if (!phraseGroups[p]) phraseGroups[p] = [];
      phraseGroups[p].push(d);
    }
  });
});

Object.entries(phraseGroups).filter(([p, list]) => list.length >= 3).forEach(([p, list]) => {
  console.log(`\n  "${p}" 포함 디테일: ${list.length}개`);
  // unique by normalized text
  const seen = new Set();
  list.slice(0, 5).forEach(d => {
    const key = normalize(d.description || d.title);
    if (seen.has(key)) return;
    seen.add(key);
    console.log(`    - ${d.description.slice(0, 65)} → ${d.tags.join('/')}`);
  });
  if (list.length > 5) console.log(`    ... (그 외 ${list.length - 5}개)`);
});

console.log(`\n=== 요약 ===`);
console.log(`총 디테일: ${details.length}`);
console.log(`정확 일치 그룹: ${exactDups.length}개 (관여 디테일 ${exactDups.reduce((s, g) => s + g.length, 0)}개)`);
console.log(`  - 같은 태그(정상): ${sameTagExact}`);
console.log(`  - 다른 태그(검토 필요): ${diffTagExact}`);
console.log(`거의 일치 pair: ${nearDups.length}개`);
