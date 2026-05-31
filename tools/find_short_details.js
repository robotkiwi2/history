// 짧은(단일 단어/어절) 디테일 리스트업.
// 사용: node tools/find_short_details.js
//
// 기준:
//   - 어절 수 (whitespace 기준) ≤ 3
//   - 문장 종결(다/음/ㅁ/세요/했음/하다 등 동사 어미) 없음 → 사실 서술 아닌 파편
//   - 출력은 어절 수 → 길이 순으로 정렬

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IN_PATH = path.join(ROOT, 'data', 'cards.all.json');
const OUT_PATH = path.join(ROOT, 'data', 'short_details_report.md');

if (!fs.existsSync(IN_PATH)) {
  console.error('data/cards.all.json 없음. 먼저 `node tools/dump_cards.js`.');
  process.exit(1);
}
const all = JSON.parse(fs.readFileSync(IN_PATH, 'utf8'));
const details = all.filter(c => c.kind === 'detail');

// 한국어 종결 어미 패턴 (구어/평서/존대 모두)
const VERB_ENDING = /(다|음|함|됨|었음|였음|하였다|하다|되다|되었다|하였음|하였습니다|하였어요|이다|이었다|있다|있었다|없다|없었다|되었다|되었음|시켰다|이루었다|에요|어요|냐|니|네|되었어요|이루어졌다|발표되었다|체결되었다|반포되었다|설치되었다|제정되었다|폐지되었다|개최되었다|건립되었다|파견됨)[.。、!?]?$/;

// 어절 수 계산
function wordCount(s) {
  return (s || '').trim().split(/\s+/).filter(Boolean).length;
}

const candidates = [];
for (const d of details) {
  const desc = (d.description || '').trim();
  const wc = wordCount(desc);
  const charLen = desc.replace(/\s+/g, '').length;
  // 어절 ≤3 또는 한 글자 길이 ≤ 8: 의심
  const isShort = wc <= 3 || charLen <= 8;
  const hasVerbEnding = VERB_ENDING.test(desc);
  if (isShort && !hasVerbEnding) {
    candidates.push({
      id: d.id,
      source: d._source,
      src: d._src,
      tags: d.tags,
      era: d.era,
      description: desc,
      wc,
      charLen,
    });
  }
}

// 정렬: 어절 수 → 길이
candidates.sort((a, b) => a.wc - b.wc || a.charLen - b.charLen);

// === Markdown report ===
const lines = [];
lines.push(`# 짧은(파편형) 디테일 리스트`);
lines.push('');
lines.push(`- 총 디테일: ${details.length}`);
lines.push(`- 의심(어절≤3 또는 글자≤8 & 동사어미 없음): **${candidates.length}개**`);
lines.push('');
lines.push('| # | 어절 | 글자 | description | 정답 tag | source |');
lines.push('|---|---|---|---|---|---|');
candidates.forEach((c, i) => {
  const tag = (c.tags && c.tags[0]) || '';
  const src = c.src ? `${c.source} (${c.src})` : c.source;
  lines.push(`| ${i+1} | ${c.wc} | ${c.charLen} | ${c.description} | ${tag} | ${src} |`);
});
fs.writeFileSync(OUT_PATH, lines.join('\n'), 'utf8');

// === Console summary ===
console.log(`✓ ${path.relative(ROOT, OUT_PATH)} — ${candidates.length}개`);
const byWc = candidates.reduce((acc, c) => { acc[c.wc] = (acc[c.wc] || 0) + 1; return acc; }, {});
console.log('어절 수별 분포:');
Object.keys(byWc).sort((a,b) => +a - +b).forEach(wc => {
  console.log(`  ${wc} 어절: ${byWc[wc]}개`);
});
