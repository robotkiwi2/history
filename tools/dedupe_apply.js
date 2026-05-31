// dedupe_report.json의 클러스터를 자동 머지. 반복 호출 안전 (idempotent).
// 사용:
//   node tools/dedupe_apply.js                    # 모든 클러스터 머지
//   node tools/dedupe_apply.js --skip=2,12,36     # 특정 cluster_id 제외
//
// 흐름:
//   1) 기존 data/dedupe_decisions.json 로드 (있으면)
//   2) 현재 data/dedupe_report.json의 클러스터 중 skip된 것 제외, 캐노니컬 자동 선택
//      - 우선순위: 손쓴 source > sample_exam, 그 안에서 가장 긴 description
//   3) 새 결정을 기존 decisions에 병합 (canonical_id 기준 aggregate)
//      - 같은 canonical_id 있으면 merged 리스트 확장
//      - frequency 재계산: 1 + len(merged)
//   4) 모든 source .js 파일을 brace-counting으로 in-place 수정:
//      - 캐노니컬: `frequency: N` 필드 삽입/갱신
//      - 머지된 디테일: 블록 삭제 (이미 없으면 pass)
//   5) decisions.json 저장 (idempotent 상태)

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

// ===== argv: --skip=ID,ID =====
const skipSet = new Set();
for (const a of process.argv.slice(2)) {
  if (a.startsWith('--skip=')) {
    a.slice(7).split(',').map(s => parseInt(s, 10)).filter(n => !Number.isNaN(n)).forEach(n => skipSet.add(n));
  }
}
if (skipSet.size) console.log(`skip cluster_id: ${[...skipSet].sort((a,b)=>a-b).join(', ')}`);

// ===== 1. 기존 decisions 로드 =====
let prior = { decisions: [], thresholds_applied: [] };
if (fs.existsSync(DECISIONS_PATH)) {
  try { prior = JSON.parse(fs.readFileSync(DECISIONS_PATH, 'utf8')); }
  catch (e) { console.warn('⚠ 기존 decisions.json 파싱 실패 — 새로 시작:', e.message); }
}
const byCanonical = new Map();
for (const d of (prior.decisions || [])) {
  byCanonical.set(d.canonical_id, d);
}
const priorCount = byCanonical.size;

// ===== 2. 새 report에서 결정 생성 =====
if (!fs.existsSync(REPORT_PATH)) {
  console.error(`${REPORT_PATH} 없음. 먼저 \`node tools/dedupe_details.js [threshold]\` 실행.`);
  process.exit(1);
}
const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
const now = new Date().toISOString();
let appendedCount = 0;
let extendedCount = 0;
let skippedCount = 0;

for (const c of report.clusters) {
  if (skipSet.has(c.cluster_id)) { skippedCount++; continue; }
  const sorted = [...c.members].sort((a, b) => {
    const pa = SOURCE_PRIORITY.indexOf(a._source);
    const pb = SOURCE_PRIORITY.indexOf(b._source);
    const pas = pa === -1 ? 99 : pa;
    const pbs = pb === -1 ? 99 : pb;
    if (pas !== pbs) return pas - pbs;
    const la = (a.description || '').length;
    const lb = (b.description || '').length;
    if (la !== lb) return lb - la;
    return (a.id || '').localeCompare(b.id || '');
  });
  const canonical = sorted[0];
  const newMerged = sorted.slice(1).map(m => ({
    id: m.id,
    source: m._source,
    description: m.description,
  }));

  if (byCanonical.has(canonical.id)) {
    const existing = byCanonical.get(canonical.id);
    const seen = new Set(existing.merged.map(m => m.id));
    let added = 0;
    for (const m of newMerged) if (!seen.has(m.id)) { existing.merged.push(m); added++; }
    if (added > 0) { existing.updated_at = now; extendedCount++; }
  } else {
    byCanonical.set(canonical.id, {
      canonical_id: canonical.id,
      canonical_source: canonical._source,
      canonical_description: canonical.description,
      primary_keyword: c.primary_keyword,
      merged: newMerged,
      added_at: now,
    });
    appendedCount++;
  }
}

// ===== 3. frequency 재계산 + cluster_id 재부여 =====
const allDecisions = [...byCanonical.values()];
allDecisions.forEach((d, i) => {
  d.cluster_id = i + 1;
  d.frequency = 1 + d.merged.length;
});

// ===== 4. decisions.json 저장 =====
const thresholdsApplied = Array.from(new Set([
  ...(prior.thresholds_applied || []),
  report.threshold,
])).sort((a, b) => b - a);

fs.writeFileSync(DECISIONS_PATH, JSON.stringify({
  generated_at: now,
  thresholds_applied: thresholdsApplied,
  decisions: allDecisions,
}, null, 2), 'utf8');
console.log(`✓ ${path.relative(ROOT, DECISIONS_PATH)} — ${allDecisions.length} 결정 (기존 ${priorCount} + 신규 ${appendedCount}, 확장 ${extendedCount}, skip ${skippedCount})`);

// ===== 5. 파일별 ops 집계 =====
const ops = new Map();
function ensure(file) {
  if (!ops.has(file)) ops.set(file, { toDelete: new Set(), toAddFreq: new Map() });
  return ops.get(file);
}
let mappingMisses = 0;
for (const d of allDecisions) {
  const cf = SOURCE_TO_FILE[d.canonical_source];
  if (cf) ensure(cf).toAddFreq.set(d.canonical_id, d.frequency);
  else mappingMisses++;
  for (const m of d.merged) {
    const mf = SOURCE_TO_FILE[m.source];
    if (mf) ensure(mf).toDelete.add(m.id);
    else mappingMisses++;
  }
}
if (mappingMisses) console.warn(`⚠ source→file 매핑 누락: ${mappingMisses}건`);

// ===== 6. brace-counting in-place 편집 =====
function scanAndEdit(text, op) {
  const out = [];
  let i = 0;
  let deletedCount = 0;
  let freqAddCount = 0;
  let freqUpdateCount = 0;

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

    if (id && op.toDelete.has(id)) {
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
      const freq = op.toAddFreq.get(id);
      const isJson = /"id"/.test(block);
      const keyName = isJson ? '"frequency"' : 'frequency';
      const freqLine = `${keyName}: ${freq}`;

      const existing = block.match(/(['"]?frequency['"]?)\s*:\s*(\d+)/);
      if (existing) {
        const currentVal = parseInt(existing[2], 10);
        if (currentVal !== freq) {
          out.push(block.replace(/(['"]?frequency['"]?)\s*:\s*(\d+)/, `$1: ${freq}`));
          freqUpdateCount++;
        } else {
          out.push(block);
        }
      } else {
        const closeMatch = block.match(/\n([ \t]*)}$/);
        const closeIndent = closeMatch ? closeMatch[1] : '';
        const innerIndent = closeIndent + '  ';
        const beforeClose = block.slice(0, block.lastIndexOf('}')).replace(/\s+$/, '');
        const needComma = !beforeClose.endsWith(',');
        const newBlock = beforeClose
          + (needComma ? ',' : '')
          + '\n' + innerIndent + freqLine
          + '\n' + closeIndent + '}';
        out.push(newBlock);
        freqAddCount++;
      }
      i = j;
      continue;
    }

    out.push(block);
    i = j;
  }

  return { text: out.join(''), deletedCount, freqAddCount, freqUpdateCount };
}

// ===== 7. 실행 =====
const summary = [];
for (const [file, op] of ops) {
  const fpath = path.join(ROOT, file);
  const original = fs.readFileSync(fpath, 'utf8');
  const result = scanAndEdit(original, op);
  fs.writeFileSync(fpath, result.text, 'utf8');
  summary.push({ file, ...result });
}

console.log('');
console.log('파일별 변경:');
for (const s of summary) {
  console.log(`  ${s.file}  -  삭제: ${s.deletedCount}, freq 추가: ${s.freqAddCount}, freq 갱신: ${s.freqUpdateCount}`);
}
console.log('');
console.log(`총 삭제: ${summary.reduce((s, x) => s + x.deletedCount, 0)}`);
console.log(`총 frequency 추가: ${summary.reduce((s, x) => s + x.freqAddCount, 0)}`);
console.log(`총 frequency 갱신: ${summary.reduce((s, x) => s + x.freqUpdateCount, 0)}`);
