// dedupe_report.json의 클러스터를 자동 머지.
// 사용: node tools/dedupe_apply.js
//
// 흐름:
//   1) data/dedupe_report.json 읽어 클러스터별 캐노니컬 자동 선택.
//      - 우선순위: 손쓴 source > sample_exam, 그 안에서 가장 긴 description
//   2) data/dedupe_decisions.json 에 결정 기록 (재import 시 import_exam_csv.js가 참조).
//   3) 각 source .js 파일을 brace-counting으로 in-place 수정:
//      - 캐노니컬: `frequency: N` 필드 삽입
//      - 머지된 디테일: 블록 통째로 삭제 (뒤따르는 콤마/개행 포함)
//   4) 결과 콘솔에 요약.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPORT_PATH = path.join(ROOT, 'data', 'dedupe_report.json');
const DECISIONS_PATH = path.join(ROOT, 'data', 'dedupe_decisions.json');

const SOURCE_PRIORITY = [
  'sample_prehistoric',
  'sample_late_joseon',
  'sample_details',
  'sample_joseon',
  'sample_exam',
];
const SOURCE_TO_FILE = {
  'sample_prehistoric': 'sample_prehistoric.js',
  'sample_late_joseon': 'sample_late_joseon.js',
  'sample_details':     'sample_details.js',
  'sample_joseon':      'sample_joseon.js',
  'sample_exam':        'sample_exam.js',
};

// ===== 1. 결정 생성 =====
const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
const decisions = [];
for (const c of report.clusters) {
  const sorted = [...c.members].sort((a, b) => {
    const pa = SOURCE_PRIORITY.indexOf(a._source);
    const pb = SOURCE_PRIORITY.indexOf(b._source);
    if (pa !== pb) return (pa === -1 ? 99 : pa) - (pb === -1 ? 99 : pb);
    const la = (a.description || '').length;
    const lb = (b.description || '').length;
    if (la !== lb) return lb - la;
    return (a.id || '').localeCompare(b.id || '');
  });
  const canonical = sorted[0];
  const merged = sorted.slice(1);
  decisions.push({
    cluster_id: c.cluster_id,
    primary_keyword: c.primary_keyword,
    canonical_id: canonical.id,
    canonical_source: canonical._source,
    canonical_description: canonical.description,
    frequency: c.member_count,
    merged: merged.map(m => ({ id: m.id, source: m._source, description: m.description })),
  });
}

fs.writeFileSync(DECISIONS_PATH, JSON.stringify({
  generated_at: new Date().toISOString(),
  threshold: report.threshold,
  decisions,
}, null, 2), 'utf8');
console.log(`✓ ${path.relative(ROOT, DECISIONS_PATH)} — ${decisions.length} 결정`);

// ===== 2. 파일별 ops 집계 =====
const ops = new Map();
function ensure(file) {
  if (!ops.has(file)) ops.set(file, { toDelete: new Set(), toAddFreq: new Map() });
  return ops.get(file);
}
let skippedNoFile = 0;
for (const d of decisions) {
  const cf = SOURCE_TO_FILE[d.canonical_source];
  if (cf) ensure(cf).toAddFreq.set(d.canonical_id, d.frequency);
  else skippedNoFile++;
  for (const m of d.merged) {
    const mf = SOURCE_TO_FILE[m.source];
    if (mf) ensure(mf).toDelete.add(m.id);
    else skippedNoFile++;
  }
}
if (skippedNoFile) console.warn(`⚠ source→file 매핑 없는 항목: ${skippedNoFile}건 (data/data(demoted) 등)`);

// ===== 3. brace-counting 기반 in-place 편집 =====
function scanAndEdit(text, op) {
  const out = [];
  let i = 0;
  let deletedCount = 0;
  let freqCount = 0;

  while (i < text.length) {
    if (text[i] !== '{') { out.push(text[i]); i++; continue; }

    // { 발견 — 매칭 } 찾기 (문자열 안의 brace는 무시)
    const start = i;
    let depth = 1;
    let inStr = null; // null | '"' | "'"
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
    const block = text.slice(start, j); // '{' ... '}'

    // id 추출 (JSON 또는 JS 스타일)
    const idMatch = block.match(/['"]?id['"]?\s*:\s*['"]([^'"]+)['"]/);
    const id = idMatch ? idMatch[1] : null;

    if (id && op.toDelete.has(id)) {
      // 블록 + 뒤따르는 , 와 개행 1개까지 제거
      let k = j;
      if (text[k] === ',') k++;
      while (k < text.length && (text[k] === ' ' || text[k] === '\t')) k++;
      if (text[k] === '\r') k++;
      if (text[k] === '\n') k++;
      i = k;
      deletedCount++;
      continue;
    }

    if (id && op.toAddFreq.has(id)) {
      // 이미 frequency 필드가 있으면 값만 갱신
      const freq = op.toAddFreq.get(id);
      const isJson = /"id"/.test(block);
      const keyName = isJson ? '"frequency"' : 'frequency';
      const freqLine = `${keyName}: ${freq}`;

      const existing = block.match(/(['"]?frequency['"]?)\s*:\s*(\d+)/);
      if (existing) {
        const updated = block.replace(/(['"]?frequency['"]?)\s*:\s*(\d+)/, `$1: ${freq}`);
        out.push(updated);
      } else {
        // 마지막 property 라인의 indent로 frequency 삽입.
        // 닫는 } 의 indent + 2(JS) / + 2(JSON) 로 가정.
        const closeMatch = block.match(/\n([ \t]*)}$/);
        const closeIndent = closeMatch ? closeMatch[1] : '';
        const innerIndent = closeIndent + '  ';
        // 닫는 } 직전에 콤마(필요시) + 새 줄 + frequency 삽입
        // block 끝 = '}', 그 직전을 가져옴
        const beforeClose = block.slice(0, block.lastIndexOf('}')).replace(/\s+$/, '');
        const needComma = !beforeClose.endsWith(',');
        const newBlock = beforeClose
          + (needComma ? ',' : '')
          + '\n' + innerIndent + freqLine
          + '\n' + closeIndent + '}';
        out.push(newBlock);
      }
      i = j;
      freqCount++;
      continue;
    }

    // 통과
    out.push(block);
    i = j;
  }

  return { text: out.join(''), deletedCount, freqCount };
}

// ===== 4. 실행 =====
const summary = [];
for (const [file, op] of ops) {
  const fpath = path.join(ROOT, file);
  const original = fs.readFileSync(fpath, 'utf8');
  const { text, deletedCount, freqCount } = scanAndEdit(original, op);
  fs.writeFileSync(fpath, text, 'utf8');
  summary.push({ file, deletedCount, freqCount });
}

console.log('');
console.log('파일별 변경:');
for (const s of summary) {
  console.log(`  ${s.file}  -  삭제: ${s.deletedCount}, frequency 추가: ${s.freqCount}`);
}
const totalDel = summary.reduce((s, x) => s + x.deletedCount, 0);
const totalFreq = summary.reduce((s, x) => s + x.freqCount, 0);
console.log('');
console.log(`총 디테일 삭제: ${totalDel}`);
console.log(`총 frequency 필드 추가: ${totalFreq}`);
