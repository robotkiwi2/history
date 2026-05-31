// 짧은(파편형) 디테일 일괄 삭제.
// 사용: node tools/remove_short_details.js
//
// 기준 = tools/find_short_details.js 와 동일:
//   - 어절 ≤ 3 또는 공백제거 글자 ≤ 8
//   - 한국어 동사 종결 어미 없음
// 처리:
//   - 모든 source .js 파일을 brace-counting으로 in-place 수정 (해당 id 디테일 블록 삭제)
//   - decisions.json에는 추가하지 않음 (별도 메커니즘 — import_exam_csv.js가 같은 필터 자체 적용)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IN_PATH = path.join(ROOT, 'data', 'cards.all.json');

const SOURCE_TO_FILE = {
  'sample_prehistoric': 'sample_prehistoric.js',
  'sample_late_joseon': 'sample_late_joseon.js',
  'sample_details':     'sample_details.js',
  'sample_joseon':      'sample_joseon.js',
  'sample_exam':        'sample_exam.js',
};

// 동사 종결 어미 패턴 (find_short_details.js와 동일)
const VERB_ENDING = /(다|음|함|됨|었음|였음|하였다|하다|되다|되었다|하였음|하였습니다|하였어요|이다|이었다|있다|있었다|없다|없었다|되었다|되었음|시켰다|이루었다|에요|어요|냐|니|네|되었어요|이루어졌다|발표되었다|체결되었다|반포되었다|설치되었다|제정되었다|폐지되었다|개최되었다|건립되었다|파견됨)[.。、!?]?$/;

function wordCount(s) {
  return (s || '').trim().split(/\s+/).filter(Boolean).length;
}
function isShortFragment(desc) {
  const d = (desc || '').trim();
  if (!d) return true;
  const wc = wordCount(d);
  const charLen = d.replace(/\s+/g, '').length;
  const isShort = wc <= 3 || charLen <= 8;
  const hasVerbEnding = VERB_ENDING.test(d);
  return isShort && !hasVerbEnding;
}

if (!fs.existsSync(IN_PATH)) {
  console.error('data/cards.all.json 없음. 먼저 `node tools/dump_cards.js`.');
  process.exit(1);
}
const all = JSON.parse(fs.readFileSync(IN_PATH, 'utf8'));
const details = all.filter(c => c.kind === 'detail');

// 파일별 삭제 대상 id 집계
const opsBySource = new Map();
function ensure(file) {
  if (!opsBySource.has(file)) opsBySource.set(file, new Set());
  return opsBySource.get(file);
}
let total = 0;
for (const d of details) {
  if (!isShortFragment(d.description)) continue;
  const file = SOURCE_TO_FILE[d._source];
  if (!file) continue;
  if (!d.id) continue;
  ensure(file).add(d.id);
  total++;
}
console.log(`삭제 대상: ${total}개 디테일`);

function scanAndDelete(text, idSet) {
  const out = [];
  let i = 0;
  let deletedCount = 0;

  while (i < text.length) {
    if (text[i] !== '{') { out.push(text[i]); i++; continue; }

    const start = i;
    let depth = 1;
    let inStr = null;
    let j = i + 1;
    while (j < text.length && depth > 0) {
      const ch = text[j];
      if (inStr) {
        if (ch === '\\') { j += 2; continue; }
        if (ch === inStr) inStr = null;
        j++;
      } else {
        if (ch === '"' || ch === "'") inStr = ch;
        else if (ch === '{') depth++;
        else if (ch === '}') depth--;
        j++;
      }
    }
    const block = text.slice(start, j);
    const idMatch = block.match(/['"]?id['"]?\s*:\s*['"]([^'"]+)['"]/);
    const id = idMatch ? idMatch[1] : null;

    if (id && idSet.has(id)) {
      let k = j;
      if (text[k] === ',') k++;
      while (k < text.length && (text[k] === ' ' || text[k] === '\t')) k++;
      if (text[k] === '\r') k++;
      if (text[k] === '\n') k++;
      i = k;
      deletedCount++;
      continue;
    }

    out.push(block);
    i = j;
  }
  return { text: out.join(''), deletedCount };
}

let grandTotal = 0;
for (const [file, idSet] of opsBySource) {
  const fpath = path.join(ROOT, file);
  const original = fs.readFileSync(fpath, 'utf8');
  const { text, deletedCount } = scanAndDelete(original, idSet);
  fs.writeFileSync(fpath, text, 'utf8');
  console.log(`  ${file}: ${deletedCount} 삭제`);
  grandTotal += deletedCount;
}
console.log(`총 ${grandTotal} 디테일 삭제 완료`);
