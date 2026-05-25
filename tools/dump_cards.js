// 5개 *.js 데이터 파일을 머지·정규화해서 단일 JSON으로 덤프.
// 사용: node tools/dump_cards.js
//
// 출력:
//   data/cards.all.json     — flat array, _source/_kind 태그, startYear 정렬
//   data/cards.summary.json — type/era/source 별 카운트

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'data');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// 각 데이터 파일에서 추출할 const 이름 (실행 순서 = index.html script 로드 순서와 동일)
const FILES = [
  { path: 'data.js',              exports: ['ERAS', 'INITIAL_BG', 'YEAR_QUESTIONS', 'ROUNDS'] },
  { path: 'sample_joseon.js',     exports: ['JOSEON_SAMPLE'] },
  { path: 'sample_details.js',    exports: ['DETAILS_SAMPLE'] },
  { path: 'sample_late_joseon.js',exports: ['LATE_JOSEON_KEYWORDS', 'LATE_JOSEON_DETAILS'] },
  { path: 'sample_exam.js',       exports: ['EXAM_KEYWORDS', 'EXAM_DETAILS'] },
];

// 파일 읽어서 const 선언을 실행한 뒤 지정된 이름들을 반환
function evalFile(filePath, names) {
  const code = fs.readFileSync(path.join(ROOT, filePath), 'utf8');
  const wrapped = `${code}\n; return { ${names.join(', ')} };`;
  return new Function(wrapped)();
}

// ===== runtime의 cardEra() 와 동일 매핑 =====
function cardEra(card) {
  if (!card) return null;
  const y = card.startYear;
  switch (card.era) {
    case '선사시대':
    case '고조선':       return '선사·고조선';
    case '삼국시대':     return '삼국시대';
    case '신라시대':     return '통일신라·발해';
    case '고려시대':     return y < 1170 ? '고려 전기' : '고려 후기';
    case '조선시대':
    case '근대':
      if (y < 1500) return '조선 전기';
      if (y < 1700) return '조선 중기';
      if (y < 1876) return '조선 후기';
      if (y < 1910) return '개항기';
      if (y < 1945) return '일제강점기';
      return '현대';
    case '현대':         return '현대';
    default:             return card.era;
  }
}

// ===== runtime의 EVENT_TO_DETAIL_OF =====
const EVENT_TO_DETAIL_OF = {
  '세종 즉위': '조선 세종', '세조 즉위': '조선 세조',
  '영조 즉위': '조선 영조', '정조 즉위': '조선 정조',
  '신라 진흥왕 즉위': '신라 진흥왕',
  '광종 즉위': '고려 광종', '공민왕 즉위': '고려 공민왕',
  '규장각 설치': '규장각', '수원 화성 완공': '수원 화성', '측우기 발명': '측우기',
  '임진왜란 발발': '임진왜란', '흥선대원군 집권': '흥선대원군',
};

function normalize(card, kind, source) {
  const out = {
    type: card.type || '사건',
    kind,
    title: card.title,
    description: card.description || '',
    startYear: card.startYear,
    endYear: card.endYear,
    era: cardEra(card),
    eraRaw: card.era || null,
    difficulty: card.difficulty || 3,
    tags: card.tags || [],
    _source: source,
    _src: card._src || null,    // sample_exam.js 의 회차/문항 출처 보존
  };
  // detail만 id 유지 (matched 추적용). keyword는 title이 식별자.
  if (kind === 'detail') out.id = card.id || card.title;
  return out;
}

// ===== 데이터 머지 =====
const loaded = {};
FILES.forEach(f => { loaded[f.path] = evalFile(f.path, f.exports); });

// 1) Keyword 카드 — runtime allPrimaryCards() 와 동일 흐름
const primaryAccum = [];
const pushKw = (cards, source) => {
  cards.forEach(c => {
    if (c.kind === 'detail') return;
    if (EVENT_TO_DETAIL_OF[c.title]) return; // event 중복 → detail로 강등 (아래에서 처리)
    primaryAccum.push(normalize(c, 'keyword', source));
  });
};
pushKw(loaded['sample_exam.js'].EXAM_KEYWORDS, 'sample_exam');
pushKw(loaded['data.js'].YEAR_QUESTIONS,        'data');
pushKw(loaded['sample_joseon.js'].JOSEON_SAMPLE,'sample_joseon');
pushKw(loaded['sample_late_joseon.js'].LATE_JOSEON_KEYWORDS, 'sample_late_joseon');

// Dedupe by title (last wins)
const byTitle = new Map();
primaryAccum.forEach(c => byTitle.set(c.title, c));
const keywords = [...byTitle.values()];

// 2) Detail 카드
const details = [];
loaded['sample_details.js'].DETAILS_SAMPLE.forEach(c => {
  details.push(normalize(c, 'detail', 'sample_details'));
});
loaded['sample_late_joseon.js'].LATE_JOSEON_DETAILS.forEach(c => {
  details.push(normalize(c, 'detail', 'sample_late_joseon'));
});
loaded['sample_exam.js'].EXAM_DETAILS.forEach(c => {
  details.push(normalize(c, 'detail', 'sample_exam'));
});
// EVENT_TO_DETAIL_OF 매핑된 event 카드를 detail로 흡수
loaded['data.js'].YEAR_QUESTIONS.forEach(c => {
  const parent = EVENT_TO_DETAIL_OF[c.title];
  if (!parent) return;
  details.push(normalize({ ...c, tags: [parent], type: '사건' }, 'detail', 'data(demoted)'));
});

// ===== 정렬 + 출력 =====
const all = [...keywords, ...details].sort((a, b) => {
  if (a.kind !== b.kind) return a.kind === 'keyword' ? -1 : 1; // keyword 먼저
  return (a.startYear ?? 0) - (b.startYear ?? 0);
});

fs.writeFileSync(path.join(OUT_DIR, 'cards.all.json'), JSON.stringify(all, null, 2), 'utf8');

// ===== 요약 =====
function tally(arr, keyFn) {
  const m = {};
  arr.forEach(c => { const k = keyFn(c) || '(없음)'; m[k] = (m[k] || 0) + 1; });
  // 정렬: count desc
  return Object.fromEntries(Object.entries(m).sort((a, b) => b[1] - a[1]));
}

const summary = {
  total: { keywords: keywords.length, details: details.length, all: all.length },
  keywords: {
    byType:   tally(keywords, c => c.type),
    byEra:    tally(keywords, c => c.era),
    bySource: tally(keywords, c => c._source),
  },
  details: {
    byType:   tally(details, c => c.type),
    byEra:    tally(details, c => c.era),
    bySource: tally(details, c => c._source),
    // tags가 비어있는 디테일 (매칭 정답 없음 — 출제 풀에서 제외됨)
    noTags:   details.filter(c => !c.tags || c.tags.length === 0).length,
  },
};

fs.writeFileSync(path.join(OUT_DIR, 'cards.summary.json'), JSON.stringify(summary, null, 2), 'utf8');

console.log(`✓ data/cards.all.json     — ${all.length}개 카드 (키워드 ${keywords.length} + 디테일 ${details.length})`);
console.log(`✓ data/cards.summary.json — type/era/source 카운트`);
