// 디테일 유사도 클러스터링 리포트 — 머지는 안 함, 리뷰용 출력만.
//
// 사용: node tools/dedupe_details.js [threshold]
//   threshold: 0~1, 기본 0.8 (bigram Jaccard).
//
// 입력:  data/cards.all.json (먼저 `node tools/dump_cards.js` 실행 필요)
// 출력:
//   data/dedupe_report.json — 머신 리더블 (cluster_id, primary, members[])
//   data/dedupe_report.md   — 사람이 훑어볼 multi-member 클러스터 목록
//
// 알고리즘:
//   1) 모든 detail을 primary_tag(= 시대명 제외, 등록 키워드인 첫 tag)별로 그룹.
//   2) 그룹 안에서 description을 정규화(공백·구두점 제거) → 문자 bigram set.
//   3) Jaccard 유사도 ≥ threshold 인 쌍을 union-find로 묶음.
//   4) 멤버 2개 이상인 클러스터만 리포트.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IN_PATH = path.join(ROOT, 'data', 'cards.all.json');
const OUT_JSON = path.join(ROOT, 'data', 'dedupe_report.json');
const OUT_MD   = path.join(ROOT, 'data', 'dedupe_report.md');

const args = process.argv.slice(2);
const STRIP_TAIL = args.includes('--strip-tail');
const numArg = args.find(a => !a.startsWith('--'));
const THRESHOLD = parseFloat(numArg || '0.8');
if (Number.isNaN(THRESHOLD) || THRESHOLD <= 0 || THRESHOLD > 1) {
  console.error('threshold는 0~1 사이여야 합니다.');
  process.exit(1);
}
if (STRIP_TAIL) console.log('--strip-tail: 마지막 어절(동사)을 떼고 비교');

// 시대명 목록 — primary_tag 후보에서 제외.
const ERA_NAMES = new Set([
  '선사·고조선','삼국시대','통일신라·발해','고려 전기','고려 후기',
  '조선 전기','조선 중기','조선 후기','개항기','일제강점기','현대',
  // raw era (혹시 cardEra 매핑 누락 대비)
  '선사시대','고조선','신라시대','고려시대','조선시대','근대',
]);

// ===== Load =====
if (!fs.existsSync(IN_PATH)) {
  console.error(`${IN_PATH} 없음. 먼저 \`node tools/dump_cards.js\` 실행.`);
  process.exit(1);
}
const all = JSON.parse(fs.readFileSync(IN_PATH, 'utf8'));
const keywords = all.filter(c => c.kind === 'keyword');
const details = all.filter(c => c.kind === 'detail');
const validTitles = new Set(keywords.map(k => k.title));

// ===== Primary tag picker =====
function primaryTag(detail) {
  const tags = detail.tags || [];
  for (const t of tags) {
    if (ERA_NAMES.has(t)) continue;
    if (validTitles.has(t)) return t;
  }
  // fallback: era 아닌 첫 tag (등록 안 됐어도 그룹은 형성)
  for (const t of tags) if (!ERA_NAMES.has(t)) return t;
  return '(태그없음)';
}

// ===== Normalization & bigram =====
function stripTail(s) {
  // 끝 구두점 제거 후 마지막 어절(공백 기준) 떼기. 한 어절짜리면 그대로 둠.
  const cleaned = (s || '').replace(/[.。!?]+\s*$/, '').trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length <= 1) return cleaned;
  return parts.slice(0, -1).join(' ');
}
function normalize(s) {
  const base = STRIP_TAIL ? stripTail(s) : (s || '');
  return base
    .replace(/[\s.,·\-。．、!?()\[\]"'「」『』~∼…•:;]+/g, '')
    .toLowerCase();
}
function bigrams(s) {
  const n = normalize(s);
  const out = new Set();
  for (let i = 0; i < n.length - 1; i++) out.add(n.slice(i, i + 2));
  return out;
}
function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return inter / union;
}

// ===== Group → cluster =====
const groups = new Map();
for (const d of details) {
  const pk = primaryTag(d);
  if (!groups.has(pk)) groups.set(pk, []);
  groups.get(pk).push(d);
}

class UF {
  constructor(n) { this.p = Array.from({ length: n }, (_, i) => i); }
  find(x) { while (this.p[x] !== x) { this.p[x] = this.p[this.p[x]]; x = this.p[x]; } return x; }
  union(a, b) { a = this.find(a); b = this.find(b); if (a !== b) this.p[a] = b; }
}

const clusters = []; // { primary, members: [detail], maxSim }
let comparisons = 0;
let unionsMade = 0;

for (const [pk, members] of groups) {
  if (members.length < 2) {
    clusters.push({ primary: pk, members, maxSim: null });
    continue;
  }
  const bigs = members.map(m => bigrams(m.description || m.title));
  const uf = new UF(members.length);
  const simEdges = []; // [i, j, sim] for max-sim tracking
  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      comparisons++;
      const sim = jaccard(bigs[i], bigs[j]);
      if (sim >= THRESHOLD) {
        uf.union(i, j);
        unionsMade++;
        simEdges.push([i, j, sim]);
      }
    }
  }
  // collect components
  const compMap = new Map();
  for (let i = 0; i < members.length; i++) {
    const r = uf.find(i);
    if (!compMap.has(r)) compMap.set(r, []);
    compMap.get(r).push(i);
  }
  for (const [, idxs] of compMap) {
    let maxSim = null;
    for (const [i, j, s] of simEdges) {
      if (idxs.includes(i) && idxs.includes(j)) {
        if (maxSim == null || s > maxSim) maxSim = s;
      }
    }
    clusters.push({
      primary: pk,
      members: idxs.map(i => members[i]),
      maxSim: maxSim == null ? null : Number(maxSim.toFixed(3)),
    });
  }
}

// ===== Filter / sort =====
const multi = clusters.filter(c => c.members.length >= 2);
multi.sort((a, b) => b.members.length - a.members.length || (b.maxSim || 0) - (a.maxSim || 0));

// ===== JSON output =====
const jsonOut = {
  generated_at: new Date().toISOString(),
  threshold: THRESHOLD,
  stats: {
    total_details: details.length,
    total_groups: groups.size,
    multi_member_clusters: multi.length,
    duplicates_to_merge: multi.reduce((s, c) => s + (c.members.length - 1), 0),
    comparisons,
    unions: unionsMade,
  },
  clusters: multi.map((c, idx) => ({
    cluster_id: idx + 1,
    primary_keyword: c.primary,
    member_count: c.members.length,
    max_similarity: c.maxSim,
    members: c.members.map(m => ({
      id: m.id,
      era: m.era,
      description: m.description,
      _source: m._source,
      _src: m._src,
      difficulty: m.difficulty,
      tags: m.tags,
    })),
  })),
};
fs.writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2), 'utf8');

// ===== Markdown output =====
const lines = [];
lines.push(`# 디테일 중복 클러스터 리포트`);
lines.push('');
lines.push(`- 생성: ${jsonOut.generated_at}`);
lines.push(`- 임계 (bigram Jaccard): **${THRESHOLD}**`);
lines.push(`- 총 디테일: ${jsonOut.stats.total_details}`);
lines.push(`- 키워드 그룹: ${jsonOut.stats.total_groups}`);
lines.push(`- 다중 멤버 클러스터: **${jsonOut.stats.multi_member_clusters}개**`);
lines.push(`- 머지 시 줄어드는 디테일 수: **${jsonOut.stats.duplicates_to_merge}개**`);
lines.push('');
lines.push('---');
lines.push('');

for (const c of jsonOut.clusters) {
  lines.push(`## #${c.cluster_id} · ${c.primary_keyword} (${c.member_count}개, sim≥${c.max_similarity ?? '-'})`);
  lines.push('');
  for (const m of c.members) {
    const srcTag = m._src ? ` *(${m._src})*` : '';
    lines.push(`- \`${m.id}\` [${m._source}${srcTag}] (난이도 ${m.difficulty}, ${m.era})`);
    lines.push(`  - ${m.description}`);
  }
  lines.push('');
}

fs.writeFileSync(OUT_MD, lines.join('\n'), 'utf8');

console.log(`✓ ${path.relative(ROOT, OUT_JSON)} — ${multi.length} multi-member clusters`);
console.log(`✓ ${path.relative(ROOT, OUT_MD)}`);
console.log(`  · 임계 ${THRESHOLD} 적용, 머지 시 -${jsonOut.stats.duplicates_to_merge} 디테일`);
console.log(`  · ${comparisons.toLocaleString()} 쌍 비교, ${unionsMade} 합집합`);
