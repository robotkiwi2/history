// 한능검 기출 CSV → prototype/sample_exam78.js 변환 스크립트.
// 사용: node tools/import_exam_csv.js
//
// 입력: exams/한능검 기출근거 디테일.csv
// 출력: prototype/sample_exam78.js  (EXAM78_KEYWORDS + EXAM78_DETAILS const)
//
// CSV 컬럼: 회차, 구분, 문항, 배점, 가중치, 질문 대상, 디테일(역사적 사태), 정답여부, 실제 대상
//   - 질문 대상: 한능검 출제의 (가) 자리에 해당하는 키워드
//   - 정답여부: O (정답) | X (오답·distractor) | O(부적절) (부적절 정답)
//   - 실제 대상: 사용자가 분류한 그 디테일의 실제 키워드 (O면 질문 대상과 동일, X면 다른 키워드)
//
// 처리:
//   - 모든 행을 디테일로 변환 (O+X 모두)
//   - 태그 = 실제 대상
//   - 키워드는 KEYWORD_META 매핑 기반 생성. 없으면 자동 추정 (era만 결정, 나머지 fallback)
//   - 배점 매핑: 한능검 1→우리 2 / 2→3 / 3→4

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CSV_PATH = path.join(ROOT, 'exams', '한능검 기출근거 디테일.csv');
const OUT_PATH = path.join(ROOT, 'sample_exam.js');

// 알려진 키워드 메타 — 풍부한 정보 제공
const KEYWORD_META = {
  // 선사·고조선
  '구석기 시대':       { type: '시대',  era: '선사시대', startYear: -700000, endYear: -8000 },
  '신석기 시대':       { type: '시대',  era: '선사시대', startYear: -8000, endYear: -1500 },
  '청동기 시대':       { type: '시대',  era: '선사시대', startYear: -1500, endYear: -500 },
  '철기 시대':         { type: '시대',  era: '선사시대', startYear: -500, endYear: 0 },
  '고조선':            { type: '국가',  era: '고조선',   startYear: -2333, endYear: -108 },
  // (고조선의 변천 → 고조선으로 alias)
  // 삼국·가야
  '삼한/부여':         { type: '국가',  era: '삼국시대', startYear: -200,  endYear: 562   },
  '옥저':              { type: '국가',  era: '삼국시대', startYear: -200,  endYear: 285   },
  '동예':              { type: '국가',  era: '삼국시대', startYear: -200,  endYear: 313   },
  '가야':              { type: '국가',  era: '삼국시대', startYear: 42,    endYear: 562   },
  '고구려':            { type: '국가',  era: '삼국시대', startYear: -37,   endYear: 668   },
  '고구려 고국천왕':   { type: '왕',    era: '삼국시대', startYear: 179,   endYear: 197   },
  '광개토대왕':        { type: '왕',    era: '삼국시대', startYear: 391,   endYear: 413   },
  '신라':              { type: '국가',  era: '삼국시대', startYear: -57,   endYear: 935   },
  '신라 진흥왕':       { type: '왕',    era: '삼국시대', startYear: 540,   endYear: 576   },
  '신라 지증왕':       { type: '왕',    era: '삼국시대', startYear: 500,   endYear: 514   },
  '신라 법흥왕':       { type: '왕',    era: '삼국시대', startYear: 514,   endYear: 540   },
  '신라 진평왕':       { type: '왕',    era: '삼국시대', startYear: 579,   endYear: 632   },
  '신라 선덕여왕':     { type: '왕',    era: '삼국시대', startYear: 632,   endYear: 647   },
  '백제':              { type: '국가',  era: '삼국시대', startYear: -18,   endYear: 660   },
  '백제 사비기':       { type: '시대',  era: '삼국시대', startYear: 538,   endYear: 660   },
  '백제 문주왕':       { type: '왕',    era: '삼국시대', startYear: 475,   endYear: 477   },
  '백제 무령왕':       { type: '왕',    era: '삼국시대', startYear: 501,   endYear: 523   },
  '백제 무왕':         { type: '왕',    era: '삼국시대', startYear: 600,   endYear: 641   },
  '백제 근초고왕':     { type: '왕',    era: '삼국시대', startYear: 346,   endYear: 375   },
  '살수대첩':          { type: '전쟁',  era: '삼국시대', startYear: 612,   endYear: 612   },
  '삼국 통일 과정':    { type: '사건',  era: '삼국시대', startYear: 645,   endYear: 676   },
  // 통일신라·발해
  '통일신라':          { type: '국가',  era: '신라시대', startYear: 676,   endYear: 935   },
  '신라 신문왕':       { type: '왕',    era: '신라시대', startYear: 681,   endYear: 692   },
  '신라 하대':         { type: '시대',  era: '신라시대', startYear: 780,   endYear: 935   },
  '발해':              { type: '국가',  era: '신라시대', startYear: 698,   endYear: 926   },
  // 고려
  '고려 태조':         { type: '왕',    era: '고려시대', startYear: 918,   endYear: 943   },
  '고려 정종':         { type: '왕',    era: '고려시대', startYear: 945,   endYear: 949   },
  '고려 광종':         { type: '왕',    era: '고려시대', startYear: 949,   endYear: 975   },
  '고려 성종':         { type: '왕',    era: '고려시대', startYear: 981,   endYear: 997   },
  '고려 예종':         { type: '왕',    era: '고려시대', startYear: 1105,  endYear: 1122  },
  '고려 공민왕':       { type: '왕',    era: '고려시대', startYear: 1351,  endYear: 1374  },
  '고려 우왕':         { type: '왕',    era: '고려시대', startYear: 1374,  endYear: 1388  },
  '고려 충렬왕':       { type: '왕',    era: '고려시대', startYear: 1274,  endYear: 1308  },
  // (고려의 경제 / 고려의 사회 → 고려로 alias)
  '고려 후기':         { type: '시대',  era: '고려시대', startYear: 1170,  endYear: 1392  },
  // (고려 의학 → SKIP)
  '여진 대응':         { type: '사건',  era: '고려시대', startYear: 1104,  endYear: 1108  },
  '거란 2차 침입':     { type: '전쟁',  era: '고려시대', startYear: 1010,  endYear: 1011  },
  '몽골 침입':         { type: '전쟁',  era: '고려시대', startYear: 1231,  endYear: 1259  },
  '삼별초 항쟁':       { type: '운동',  era: '고려시대', startYear: 1270,  endYear: 1273  },
  '만적의 난':         { type: '운동',  era: '고려시대', startYear: 1198,  endYear: 1198  },
  '망이·망소이의 난':  { type: '운동',  era: '고려시대', startYear: 1176,  endYear: 1177  },
  '이자겸/묘청':       { type: '운동',  era: '고려시대', startYear: 1126,  endYear: 1136  },
  '고려 의천':         { type: '인물',  era: '고려시대', startYear: 1055,  endYear: 1101  },
  '일연':              { type: '인물',  era: '고려시대', startYear: 1206,  endYear: 1289  },
  '요세':              { type: '인물',  era: '고려시대', startYear: 1163,  endYear: 1245  },
  '혜심':              { type: '인물',  era: '고려시대', startYear: 1178,  endYear: 1234  },
  '균여':              { type: '인물',  era: '고려시대', startYear: 923,   endYear: 973   },
  '최승로':            { type: '인물',  era: '고려시대', startYear: 927,   endYear: 989   },
  '최무선':            { type: '인물',  era: '고려시대', startYear: 1325,  endYear: 1395  },
  '강조':              { type: '인물',  era: '고려시대', startYear: 1009,  endYear: 1010  },
  '최충':              { type: '인물',  era: '고려시대', startYear: 984,   endYear: 1068  },
  '최충헌':            { type: '인물',  era: '고려시대', startYear: 1149,  endYear: 1219  },
  '김사미·효심의 난':  { type: '운동',  era: '고려시대', startYear: 1193,  endYear: 1194  },
  // 조선
  '조선 세조':         { type: '왕',    era: '조선시대', startYear: 1455,  endYear: 1468  },
  '조선 인조':         { type: '왕',    era: '조선시대', startYear: 1623,  endYear: 1649  },
  '조선 세종':         { type: '왕',    era: '조선시대', startYear: 1418,  endYear: 1450  },
  '조선 선조':         { type: '왕',    era: '조선시대', startYear: 1567,  endYear: 1608  },
  '조선 명종':         { type: '왕',    era: '조선시대', startYear: 1545,  endYear: 1567  },
  '조선 숙종':         { type: '왕',    era: '조선시대', startYear: 1674,  endYear: 1720  },
  '조선 경종':         { type: '왕',    era: '조선시대', startYear: 1720,  endYear: 1724  },
  '조선 영조':         { type: '왕',    era: '조선시대', startYear: 1724,  endYear: 1776  },
  '조선 정조':         { type: '왕',    era: '조선시대', startYear: 1776,  endYear: 1800  },
  '경신환국':          { type: '사건',  era: '조선시대', startYear: 1680,  endYear: 1680  },
  '기묘사화':          { type: '사건',  era: '조선시대', startYear: 1519,  endYear: 1519  },
  '기축옥사':          { type: '사건',  era: '조선시대', startYear: 1589,  endYear: 1589  },
  '한성부':            { type: '기관',  era: '조선시대', startYear: 1394,  endYear: 1894  },
  '관상감':            { type: '기관',  era: '조선시대', startYear: 1466,  endYear: 1894  },
  '규장각':            { type: '기관',  era: '조선시대', startYear: 1776,  endYear: 1910  },
  '홍문관':            { type: '기관',  era: '조선시대', startYear: 1463,  endYear: 1894  },
  '조선 의금부':       { type: '기관',  era: '조선시대', startYear: 1414,  endYear: 1894  },
  '조선 신숙주':       { type: '인물',  era: '조선시대', startYear: 1417,  endYear: 1475  },
  '주세붕':            { type: '인물',  era: '조선시대', startYear: 1495,  endYear: 1554  },
  '송시열':            { type: '인물',  era: '조선시대', startYear: 1607,  endYear: 1689  },
  '이이':              { type: '인물',  era: '조선시대', startYear: 1536,  endYear: 1584  },
  '김장생':            { type: '인물',  era: '조선시대', startYear: 1548,  endYear: 1631  },
  '임진왜란':          { type: '전쟁',  era: '조선시대', startYear: 1592,  endYear: 1598  },
  '정묘호란':          { type: '전쟁',  era: '조선시대', startYear: 1627,  endYear: 1627  },
  '병자호란':          { type: '전쟁',  era: '조선시대', startYear: 1636,  endYear: 1637  },
  '4군 6진':           { type: '사건',  era: '조선시대', startYear: 1433,  endYear: 1449  },
  '조선 후기 경제':    { type: '시대',  era: '조선시대', startYear: 1700,  endYear: 1876  },
  '조선 후기 사회':    { type: '시대',  era: '조선시대', startYear: 1700,  endYear: 1876  },
  // 근대
  '강화도 조약':       { type: '조약',  era: '근대',     startYear: 1876,  endYear: 1876  },
  '조프 수호 통상 조약': { type: '조약', era: '근대',   startYear: 1886,  endYear: 1886  },
  '조미수호통상조약':  { type: '조약',  era: '근대',     startYear: 1882,  endYear: 1882  },
  '제물포 조약':       { type: '조약',  era: '근대',     startYear: 1882,  endYear: 1882  },
  '조청상민수륙무역장정': { type: '조약', era: '근대',   startYear: 1882,  endYear: 1882  },
  '시모노세키 조약':   { type: '조약',  era: '근대',     startYear: 1895,  endYear: 1895  },
  '갑신정변':          { type: '운동',  era: '근대',     startYear: 1884,  endYear: 1884  },
  '갑오개혁':          { type: '개혁',  era: '근대',     startYear: 1894,  endYear: 1896  },
  '병인양요':          { type: '전쟁',  era: '근대',     startYear: 1866,  endYear: 1866  },
  '신미양요':          { type: '전쟁',  era: '근대',     startYear: 1871,  endYear: 1871  },
  '임오군란':          { type: '운동',  era: '근대',     startYear: 1882,  endYear: 1882  },
  '근대 교육 기관':    { type: '기관',  era: '근대',     startYear: 1883,  endYear: 1910  },
  '신민회':            { type: '기관',  era: '근대',     startYear: 1907,  endYear: 1911  },
  '이화학당':          { type: '기관',  era: '근대',     startYear: 1886,  endYear: 1945  },
  '동문학':            { type: '기관',  era: '근대',     startYear: 1883,  endYear: 1886  },
  '화폐 정리 사업':    { type: '개혁',  era: '근대',     startYear: 1905,  endYear: 1909  },
  '삼국 간섭':         { type: '사건',  era: '근대',     startYear: 1895,  endYear: 1895  },
  '임술농민봉기':      { type: '운동',  era: '조선시대', startYear: 1862,  endYear: 1862  },
  '독립협회':          { type: '기관',  era: '근대',     startYear: 1896,  endYear: 1898  },
  '독립신문':          { type: '기관',  era: '근대',     startYear: 1896,  endYear: 1899  },
  '대한자강회':        { type: '기관',  era: '근대',     startYear: 1906,  endYear: 1907  },
  '보안회':            { type: '기관',  era: '근대',     startYear: 1904,  endYear: 1904  },
  '동학 농민 운동':    { type: '운동',  era: '근대',     startYear: 1894,  endYear: 1895  },
  '정미의병 배경':     { type: '사건',  era: '근대',     startYear: 1907,  endYear: 1907  },
  '미쓰야 협정':       { type: '조약',  era: '근대',     startYear: 1925,  endYear: 1925  },
  '거문도 사건':       { type: '사건',  era: '근대',     startYear: 1885,  endYear: 1887  },
  '경술국치':          { type: '사건',  era: '근대',     startYear: 1910,  endYear: 1910  },
  '기유각서':          { type: '조약',  era: '근대',     startYear: 1909,  endYear: 1909  },
  '대한매일신보':      { type: '기관',  era: '근대',     startYear: 1904,  endYear: 1910  },
  '동아일보':          { type: '기관',  era: '근대',     startYear: 1920,  endYear: 1940  },
  '만세보':            { type: '기관',  era: '근대',     startYear: 1906,  endYear: 1907  },
  '한성주보':          { type: '기관',  era: '근대',     startYear: 1886,  endYear: 1888  },
  '안창호 활동':       { type: '인물',  era: '근대',     startYear: 1878,  endYear: 1938  },
  '대한광복회':        { type: '기관',  era: '근대',     startYear: 1915,  endYear: 1918  },
  '박은식':            { type: '인물',  era: '근대',     startYear: 1859,  endYear: 1925  },
  '신채호':            { type: '인물',  era: '근대',     startYear: 1880,  endYear: 1936  },
  '헤이그 특사':       { type: '사건',  era: '근대',     startYear: 1907,  endYear: 1907  },
  '1910년대':          { type: '시대',  era: '근대',     startYear: 1910,  endYear: 1919  },
  '치안유지법':        { type: '제도',  era: '근대',     startYear: 1925,  endYear: 1945  },
  '대한제국':          { type: '국가',  era: '근대',     startYear: 1897,  endYear: 1910  },
  '1920년대':          { type: '시대',  era: '근대',     startYear: 1920,  endYear: 1929  },
  '민족말살통치기':    { type: '시대',  era: '근대',     startYear: 1937,  endYear: 1945  },
  '농민 운동':         { type: '운동',  era: '근대',     startYear: 1920,  endYear: 1935  },
  '광무개혁':          { type: '개혁',  era: '근대',     startYear: 1897,  endYear: 1904  },
  '회사령':            { type: '제도',  era: '근대',     startYear: 1910,  endYear: 1920  },
  '농광 회사':         { type: '기관',  era: '근대',     startYear: 1904,  endYear: 1904  },
  '조선 물산 공진회':  { type: '사건',  era: '근대',     startYear: 1915,  endYear: 1915  },
  '국채 보상 운동':    { type: '운동',  era: '근대',     startYear: 1907,  endYear: 1908  },
  '3·1 운동':          { type: '운동',  era: '근대',     startYear: 1919,  endYear: 1919  },
  '6·10 만세 운동':    { type: '운동',  era: '근대',     startYear: 1926,  endYear: 1926  },
  '광주학생항일운동':  { type: '운동',  era: '근대',     startYear: 1929,  endYear: 1930  },
  '형평 운동':         { type: '운동',  era: '근대',     startYear: 1923,  endYear: 1935  },
  '원산 총파업':       { type: '운동',  era: '근대',     startYear: 1929,  endYear: 1929  },
  '105인 사건':        { type: '사건',  era: '근대',     startYear: 1911,  endYear: 1911  },
  '근우회':            { type: '기관',  era: '근대',     startYear: 1927,  endYear: 1931  },
  '진단학회':          { type: '기관',  era: '근대',     startYear: 1934,  endYear: 1945  },
  '국문연구소':        { type: '기관',  era: '근대',     startYear: 1907,  endYear: 1910  },
  '조선어 연구회':     { type: '기관',  era: '근대',     startYear: 1921,  endYear: 1931  },
  '조선의용대':        { type: '기관',  era: '근대',     startYear: 1938,  endYear: 1942  },
  '청산리 전투':       { type: '전쟁',  era: '근대',     startYear: 1920,  endYear: 1920  },
  '동북 항일 연군':    { type: '기관',  era: '근대',     startYear: 1936,  endYear: 1940  },
  '한국독립군':        { type: '기관',  era: '근대',     startYear: 1930,  endYear: 1935  },
  '조선혁명군':        { type: '기관',  era: '근대',     startYear: 1929,  endYear: 1938  },
  // (근대 사회상 → 일제강점기로 alias)
  // 현대
  '현대':              { type: '시대',  era: '현대',     startYear: 1945,  endYear: 2025  },
  '5·10 총선거':       { type: '사건',  era: '근대',     startYear: 1948,  endYear: 1948  },
  '6·3 시위':          { type: '운동',  era: '근대',     startYear: 1964,  endYear: 1964  },
  '발췌 개헌':         { type: '제도',  era: '근대',     startYear: 1952,  endYear: 1952  },
  '1985년 총선':       { type: '사건',  era: '근대',     startYear: 1985,  endYear: 1985  },
  '유신헌법':          { type: '제도',  era: '근대',     startYear: 1972,  endYear: 1980  },
  '6·25 전쟁':         { type: '전쟁',  era: '근대',     startYear: 1950,  endYear: 1953  },
  '애치슨 라인':       { type: '사건',  era: '근대',     startYear: 1950,  endYear: 1950  },
  '한미 상호 방위 조약': { type: '조약', era: '근대',   startYear: 1953,  endYear: 1953  },
  '여수 순천 사건':    { type: '사건',  era: '근대',     startYear: 1948,  endYear: 1948  },
  '모스크바 3국 외상회의': { type: '사건', era: '근대', startYear: 1945,  endYear: 1945  },
  '4·19 혁명':         { type: '운동',  era: '근대',     startYear: 1960,  endYear: 1960  },
  '유신 체제':         { type: '제도',  era: '근대',     startYear: 1972,  endYear: 1980  },
  '5·18 광주민주화운동': { type: '운동', era: '근대',   startYear: 1980,  endYear: 1980  },
  '부마민주항쟁':      { type: '운동',  era: '근대',     startYear: 1979,  endYear: 1979  },
  '6월 민주항쟁':      { type: '운동',  era: '근대',     startYear: 1987,  endYear: 1987  },
  '박정희 정부 경제':  { type: '시대',  era: '근대',     startYear: 1961,  endYear: 1979  },
  '김대중 정부 경제':  { type: '시대',  era: '근대',     startYear: 1998,  endYear: 2003  },
  '제5공화국 헌법':    { type: '제도',  era: '근대',     startYear: 1980,  endYear: 1987  },
  '사사오입 개헌':     { type: '제도',  era: '근대',     startYear: 1954,  endYear: 1954  },
  '3선 개헌':          { type: '제도',  era: '근대',     startYear: 1969,  endYear: 1969  },
  '제2공화국 헌법':    { type: '제도',  era: '근대',     startYear: 1960,  endYear: 1961  },
  '문재인 정부':       { type: '시대',  era: '근대',     startYear: 2017,  endYear: 2022  },
  '박정희 정부 통일':  { type: '시대',  era: '근대',     startYear: 1961,  endYear: 1979  },
  '노태우 정부 통일':  { type: '시대',  era: '근대',     startYear: 1988,  endYear: 1993  },
  '전두환 정부 통일':  { type: '시대',  era: '근대',     startYear: 1980,  endYear: 1988  },
  // (부산 지역 역사 → SKIP)
  '탄금대 전투':       { type: '전쟁',  era: '조선시대', startYear: 1592,  endYear: 1592  },
  '2·28 민주 운동':    { type: '운동',  era: '근대',     startYear: 1960,  endYear: 1960  },
  'YH 무역 사건':      { type: '운동',  era: '근대',     startYear: 1979,  endYear: 1979  },

  // ===== 77회 기본 추가 키워드 =====
  // 왕·통치자
  '고구려 소수림왕':   { type: '왕',    era: '삼국시대', startYear: 371,   endYear: 384   },
  '고구려 장수왕':     { type: '왕',    era: '삼국시대', startYear: 413,   endYear: 491   },
  '백제 성왕':         { type: '왕',    era: '삼국시대', startYear: 523,   endYear: 554   },
  '통일신라 원성왕':   { type: '왕',    era: '신라시대', startYear: 785,   endYear: 798   },
  '조선 성종':         { type: '왕',    era: '조선시대', startYear: 1469,  endYear: 1494  },
  // 신라 승려·인물
  '의상':              { type: '인물',  era: '신라시대', startYear: 625,   endYear: 702   },
  '원효':              { type: '인물',  era: '신라시대', startYear: 617,   endYear: 686   },
  '원광':              { type: '인물',  era: '삼국시대', startYear: 542,   endYear: 640   },
  '유정':              { type: '인물',  era: '조선시대', startYear: 1544,  endYear: 1610  },
  '혜초':              { type: '인물',  era: '신라시대', startYear: 704,   endYear: 787   },
  // 고려 인물·기관
  '궁예':              { type: '왕',    era: '신라시대', startYear: 901,   endYear: 918   },
  '후백제 견훤':       { type: '왕',    era: '신라시대', startYear: 900,   endYear: 936   },
  '신라 경순왕':       { type: '왕',    era: '신라시대', startYear: 927,   endYear: 935   },
  '발해 무왕':         { type: '왕',    era: '신라시대', startYear: 719,   endYear: 737   },
  '상평창':            { type: '기관',  era: '고려시대', startYear: 993,   endYear: 1392  },
  '어사대':            { type: '기관',  era: '고려시대', startYear: 918,   endYear: 1392  },
  '식목도감':          { type: '기관',  era: '고려시대', startYear: 1095,  endYear: 1392  },
  '고려 화폐':         { type: '유물',  era: '고려시대', startYear: 996,   endYear: 1392  },
  '중국 화폐':         { type: '유물',  era: '선사시대', startYear: -300,  endYear: 200   },
  '직지심체요절':      { type: '유물',  era: '고려시대', startYear: 1377,  endYear: 1377  },
  '삼국사기':          { type: '유물',  era: '고려시대', startYear: 1145,  endYear: 1145  },
  '팔만대장경':        { type: '유물',  era: '고려시대', startYear: 1236,  endYear: 1251  },
  '삼국유사':          { type: '유물',  era: '고려시대', startYear: 1281,  endYear: 1281  },
  '지눌':              { type: '인물',  era: '고려시대', startYear: 1158,  endYear: 1210  },
  '황산벌 전투':       { type: '전쟁',  era: '삼국시대', startYear: 660,   endYear: 660   },
  '과전법':            { type: '제도',  era: '고려시대', startYear: 1391,  endYear: 1466  },
  '전시과':            { type: '제도',  era: '고려시대', startYear: 976,   endYear: 1391  },
  '초조대장경':        { type: '유물',  era: '고려시대', startYear: 1011,  endYear: 1087  },
  '당의 안동도호부 설치': { type: '사건', era: '신라시대', startYear: 668,  endYear: 668   },
  '매소성·기벌포 전투': { type: '전쟁', era: '신라시대', startYear: 675,  endYear: 676   },
  // 조선 인물
  '정도전':            { type: '인물',  era: '조선시대', startYear: 1342,  endYear: 1398  },
  '조광조':            { type: '인물',  era: '조선시대', startYear: 1482,  endYear: 1519  },
  '박제가':            { type: '인물',  era: '조선시대', startYear: 1750,  endYear: 1805  },
  '채제공':            { type: '인물',  era: '조선시대', startYear: 1720,  endYear: 1799  },
  // 조선 기관·건축
  '종묘':              { type: '유물',  era: '조선시대', startYear: 1394,  endYear: 1394  },
  '성균관':            { type: '기관',  era: '조선시대', startYear: 1398,  endYear: 1894  },
  '사직단':            { type: '유물',  era: '조선시대', startYear: 1395,  endYear: 1395  },
  '소수 서원':         { type: '기관',  era: '조선시대', startYear: 1543,  endYear: 1894  },
  '승정원':            { type: '기관',  era: '조선시대', startYear: 1405,  endYear: 1894  },
  '춘추관':            { type: '기관',  era: '조선시대', startYear: 1392,  endYear: 1894  },
  '의정부':            { type: '기관',  era: '조선시대', startYear: 1400,  endYear: 1894  },
  // 조선 후기·근대
  '조선 후기':         { type: '시대',  era: '조선시대', startYear: 1700,  endYear: 1876  },
  '영정법':            { type: '제도',  era: '조선시대', startYear: 1635,  endYear: 1894  },
  '암태도 소작쟁의':   { type: '운동',  era: '근대',     startYear: 1923,  endYear: 1924  },
  // 의병
  '을미의병':          { type: '운동',  era: '근대',     startYear: 1895,  endYear: 1896  },
  '을사의병':          { type: '운동',  era: '근대',     startYear: 1905,  endYear: 1906  },
  '정미의병':          { type: '운동',  era: '근대',     startYear: 1907,  endYear: 1908  },
  // 근대 문물·건축물
  '광화문':            { type: '유물',  era: '조선시대', startYear: 1395,  endYear: 1395  },
  '독립문':            { type: '유물',  era: '근대',     startYear: 1897,  endYear: 1897  },
  '대한문':            { type: '유물',  era: '근대',     startYear: 1906,  endYear: 1906  },
  '숭례문':            { type: '유물',  era: '조선시대', startYear: 1398,  endYear: 1398  },
  '별기군':            { type: '기관',  era: '근대',     startYear: 1881,  endYear: 1882  },
  '육영공원':          { type: '기관',  era: '근대',     startYear: 1886,  endYear: 1894  },
  '기기창':            { type: '기관',  era: '근대',     startYear: 1883,  endYear: 1894  },
  '홍경래의 난':       { type: '운동',  era: '조선시대', startYear: 1811,  endYear: 1812  },
  // 일제강점기·인물
  '대한제국 시기':     { type: '시대',  era: '근대',     startYear: 1897,  endYear: 1910  },
  '조선어학회':        { type: '기관',  era: '근대',     startYear: 1931,  endYear: 1942  },
  '경성방송국':        { type: '기관',  era: '근대',     startYear: 1927,  endYear: 1945  },
  '영화 아리랑':       { type: '유물',  era: '근대',     startYear: 1926,  endYear: 1926  },
  '브나로드 운동':     { type: '운동',  era: '근대',     startYear: 1931,  endYear: 1934  },
  '민립 대학 설립 운동': { type: '운동', era: '근대',   startYear: 1923,  endYear: 1925  },
  '흥사단':            { type: '기관',  era: '근대',     startYear: 1913,  endYear: 1945  },
  '독립의군부':        { type: '기관',  era: '근대',     startYear: 1912,  endYear: 1914  },
  '안중근':            { type: '인물',  era: '근대',     startYear: 1879,  endYear: 1910  },
  '윤봉길':            { type: '인물',  era: '근대',     startYear: 1908,  endYear: 1932  },
  '이회영':            { type: '인물',  era: '근대',     startYear: 1867,  endYear: 1932  },
  '최재형':            { type: '인물',  era: '근대',     startYear: 1860,  endYear: 1920  },
  '이상화':            { type: '인물',  era: '근대',     startYear: 1901,  endYear: 1943  },
  '이육사':            { type: '인물',  era: '근대',     startYear: 1904,  endYear: 1944  },
  '윤동주':            { type: '인물',  era: '근대',     startYear: 1917,  endYear: 1945  },
  '한용운':            { type: '인물',  era: '근대',     startYear: 1879,  endYear: 1944  },
  '한인 애국단':       { type: '기관',  era: '근대',     startYear: 1931,  endYear: 1935  },
  '중광단':            { type: '기관',  era: '근대',     startYear: 1911,  endYear: 1920  },
  '황국 중앙 총상회':  { type: '기관',  era: '근대',     startYear: 1898,  endYear: 1898  },
  '전환국':            { type: '기관',  era: '근대',     startYear: 1883,  endYear: 1904  },
  '대한민국 임시정부': { type: '기관',  era: '근대',     startYear: 1919,  endYear: 1948  },
  '일제강점기':        { type: '시대',  era: '근대',     startYear: 1910,  endYear: 1945  },
  '새마을 운동':       { type: '운동',  era: '근대',     startYear: 1970,  endYear: 1985  },
  // 현대 정치·경제
  '닉슨 독트린':       { type: '조약',  era: '근대',     startYear: 1969,  endYear: 1969  },
  '브라운 각서':       { type: '조약',  era: '근대',     startYear: 1966,  endYear: 1966  },
  '조선 건국 동맹':    { type: '기관',  era: '근대',     startYear: 1944,  endYear: 1945  },
  '비례 대표제':       { type: '제도',  era: '근대',     startYear: 1963,  endYear: 2024  },
  '전두환 정부':       { type: '시대',  era: '근대',     startYear: 1980,  endYear: 1988  },
  '노태우 정부':       { type: '시대',  era: '근대',     startYear: 1988,  endYear: 1993  },
  '김영삼 정부':       { type: '시대',  era: '근대',     startYear: 1993,  endYear: 1998  },
  '김대중 정부 통일':  { type: '시대',  era: '근대',     startYear: 1998,  endYear: 2003  },
  '노무현 정부':       { type: '시대',  era: '근대',     startYear: 2003,  endYear: 2008  },
  '김대중 정부':       { type: '시대',  era: '근대',     startYear: 1998,  endYear: 2003  },
  '1950년대':          { type: '시대',  era: '근대',     startYear: 1950,  endYear: 1959  },
  '1980년대':          { type: '시대',  era: '근대',     startYear: 1980,  endYear: 1989  },
  // 해양 인물
  '이순신':            { type: '인물',  era: '조선시대', startYear: 1545,  endYear: 1598  },
  '이사부':            { type: '인물',  era: '삼국시대', startYear: 480,   endYear: 562   },
  '장보고':            { type: '인물',  era: '신라시대', startYear: 787,   endYear: 846   },
  '최무선':            { type: '인물',  era: '고려시대', startYear: 1325,  endYear: 1395  },

  // ===== 누락 보강 =====
  '거란 1차 침입':     { type: '전쟁',  era: '고려시대', startYear: 993,   endYear: 994   },
  '고려':              { type: '국가',  era: '고려시대', startYear: 918,   endYear: 1392  },
  '대동법':            { type: '제도',  era: '조선시대', startYear: 1608,  endYear: 1894  },
  '균역법':            { type: '제도',  era: '조선시대', startYear: 1750,  endYear: 1894  },
  '흥선대원군':        { type: '인물',  era: '조선시대', startYear: 1820,  endYear: 1898  },
  '항일 의병':         { type: '운동',  era: '근대',     startYear: 1895,  endYear: 1908  },
  '5·18 민주화 운동':  { type: '운동',  era: '근대',     startYear: 1980,  endYear: 1980  },

  // ===== 77회 심화 추가 키워드 =====
  // 삼국·통일신라
  '백제 침류왕':       { type: '왕',    era: '삼국시대', startYear: 384,   endYear: 385   },
  '백제 동성왕':       { type: '왕',    era: '삼국시대', startYear: 479,   endYear: 501   },
  '고구려 미천왕':     { type: '왕',    era: '삼국시대', startYear: 300,   endYear: 331   },
  '신라 문무왕':       { type: '왕',    era: '신라시대', startYear: 661,   endYear: 681   },
  // 고려
  '서희':              { type: '인물',  era: '고려시대', startYear: 942,   endYear: 998   },
  '김부식':            { type: '인물',  era: '고려시대', startYear: 1075,  endYear: 1151  },
  '안향':              { type: '인물',  era: '고려시대', startYear: 1243,  endYear: 1306  },
  '고려 충선왕':       { type: '왕',    era: '고려시대', startYear: 1308,  endYear: 1313  },
  '화통도감':          { type: '기관',  era: '고려시대', startYear: 1377,  endYear: 1389  },
  '진관 체제':         { type: '제도',  era: '조선시대', startYear: 1457,  endYear: 1894  },
  // 조선 전·중기
  '조선 태종':         { type: '왕',    era: '조선시대', startYear: 1400,  endYear: 1418  },
  '사간원':            { type: '기관',  era: '조선시대', startYear: 1401,  endYear: 1894  },
  '승문원':            { type: '기관',  era: '조선시대', startYear: 1410,  endYear: 1894  },
  '이황':              { type: '인물',  era: '조선시대', startYear: 1501,  endYear: 1570  },
  '류성룡':            { type: '인물',  era: '조선시대', startYear: 1542,  endYear: 1607  },
  '광해군':            { type: '왕',    era: '조선시대', startYear: 1608,  endYear: 1623  },
  '조선 효종':         { type: '왕',    era: '조선시대', startYear: 1649,  endYear: 1659  },
  // 조선 후기
  '정상기':            { type: '인물',  era: '조선시대', startYear: 1678,  endYear: 1752  },
  '정약용':            { type: '인물',  era: '조선시대', startYear: 1762,  endYear: 1836  },
  '김정희':            { type: '인물',  era: '조선시대', startYear: 1786,  endYear: 1856  },
  '조선 순조':         { type: '왕',    era: '조선시대', startYear: 1800,  endYear: 1834  },
  '신유박해':          { type: '사건',  era: '조선시대', startYear: 1801,  endYear: 1801  },
  '이괄의 난':         { type: '운동',  era: '조선시대', startYear: 1624,  endYear: 1624  },
  // (충주 지역 역사 → SKIP)
  '최익현':            { type: '인물',  era: '조선시대', startYear: 1833,  endYear: 1906  },
  // 개항기
  '병인박해':          { type: '사건',  era: '근대',     startYear: 1866,  endYear: 1866  },
  '오페르트 사건':     { type: '사건',  era: '근대',     startYear: 1868,  endYear: 1868  },
  '통리기무아문':      { type: '기관',  era: '근대',     startYear: 1880,  endYear: 1882  },
  '조선책략':          { type: '유물',  era: '근대',     startYear: 1880,  endYear: 1880  },
  '박문국':            { type: '기관',  era: '근대',     startYear: 1883,  endYear: 1888  },
  '원산학사':          { type: '기관',  era: '근대',     startYear: 1883,  endYear: 1894  },
  '을미개혁':          { type: '개혁',  era: '근대',     startYear: 1895,  endYear: 1896  },
  // 일제강점기
  '동제사':            { type: '기관',  era: '근대',     startYear: 1912,  endYear: 1917  },
  '대조선 국민 군단':  { type: '기관',  era: '근대',     startYear: 1914,  endYear: 1917  },
  '대한 광복군 정부':  { type: '기관',  era: '근대',     startYear: 1914,  endYear: 1914  },
  '2·8 독립 선언':     { type: '운동',  era: '근대',     startYear: 1919,  endYear: 1919  },
  '의열단':            { type: '기관',  era: '근대',     startYear: 1919,  endYear: 1947  },
  '산미 증식 계획':    { type: '제도',  era: '근대',     startYear: 1920,  endYear: 1934  },
  '신간회':            { type: '기관',  era: '근대',     startYear: 1927,  endYear: 1931  },
  '농촌 진흥 운동':    { type: '운동',  era: '근대',     startYear: 1932,  endYear: 1940  },
  '민족 혁명당':       { type: '기관',  era: '근대',     startYear: 1935,  endYear: 1947  },
  '조소앙':            { type: '인물',  era: '근대',     startYear: 1887,  endYear: 1958  },
  '여운형':            { type: '인물',  era: '근대',     startYear: 1886,  endYear: 1947  },
  // 현대
  '신한 공사':         { type: '기관',  era: '근대',     startYear: 1948,  endYear: 1948  },
  '농지 개혁':         { type: '개혁',  era: '근대',     startYear: 1949,  endYear: 1950  },
  '이승만 정부':       { type: '시대',  era: '근대',     startYear: 1948,  endYear: 1960  },

  // ===== data.js / sample 카드에서 참조되지만 META에 누락되어 있던 키워드 보강 =====
  '무오사화':          { type: '사건',  era: '조선시대', startYear: 1498,  endYear: 1498  },
  '을사늑약':          { type: '조약',  era: '근대',     startYear: 1905,  endYear: 1905  },
  '정미7조약':         { type: '조약',  era: '근대',     startYear: 1907,  endYear: 1907  },
  '토지조사사업':      { type: '제도',  era: '근대',     startYear: 1912,  endYear: 1918  },
  '박정희 정부':       { type: '시대',  era: '근대',     startYear: 1961,  endYear: 1979  },
  '광복군 창설':       { type: '기관',  era: '근대',     startYear: 1940,  endYear: 1945  },
  '청일전쟁 발발':     { type: '전쟁',  era: '근대',     startYear: 1894,  endYear: 1895  },

  // ===== 76회 심화 추가 키워드 =====
  // 고려
  '고려 숙종':         { type: '왕',    era: '고려시대', startYear: 1095,  endYear: 1105  },
  '최우':              { type: '인물',  era: '고려시대', startYear: 1219,  endYear: 1249  },
  // (개경 지역 역사 → SKIP)
  // 조선
  '연산군':            { type: '왕',    era: '조선시대', startYear: 1494,  endYear: 1506  },
  '이익':              { type: '인물',  era: '조선시대', startYear: 1681,  endYear: 1763  },
  '홍대용':            { type: '인물',  era: '조선시대', startYear: 1731,  endYear: 1783  },
  '박지원':            { type: '인물',  era: '조선시대', startYear: 1737,  endYear: 1805  },
  '유수원':            { type: '인물',  era: '조선시대', startYear: 1694,  endYear: 1755  },
  // 일제강점기
  '물산 장려 운동':    { type: '운동',  era: '근대',     startYear: 1920,  endYear: 1932  },
  // 현대
  '제주 4·3 사건':     { type: '사건',  era: '근대',     startYear: 1948,  endYear: 1949  },
  '박근혜 정부':       { type: '시대',  era: '근대',     startYear: 2013,  endYear: 2017  },

  // ===== 75회 심화 추가 키워드 =====
  '위화도 회군':       { type: '사건',  era: '고려시대', startYear: 1388,  endYear: 1388  },
  '사헌부':            { type: '기관',  era: '조선시대', startYear: 1392,  endYear: 1894  },
  '비변사':            { type: '기관',  era: '조선시대', startYear: 1517,  endYear: 1865  },
  '러일전쟁':          { type: '전쟁',  era: '근대',     startYear: 1904,  endYear: 1905  },
  '숭무 학교':         { type: '기관',  era: '근대',     startYear: 1910,  endYear: 1913  },
  '한성 전기 회사':    { type: '기관',  era: '근대',     startYear: 1898,  endYear: 1909  },

  // ===== 74회 심화 추가 키워드 =====
  '백남운':            { type: '인물',  era: '근대',     startYear: 1894,  endYear: 1979  },
  '봉오동 전투':       { type: '전쟁',  era: '근대',     startYear: 1920,  endYear: 1920  },

  // ===== 73회 심화 추가 키워드 =====
  '조선 철종':         { type: '왕',    era: '조선시대', startYear: 1849,  endYear: 1864  },
  '경재소':            { type: '기관',  era: '조선시대', startYear: 1392,  endYear: 1603  },

  // ===== 75회 기본 추가 키워드 =====
  '최영':              { type: '인물',  era: '고려시대', startYear: 1316,  endYear: 1388  },
  '대한인 국민회':     { type: '기관',  era: '근대',     startYear: 1909,  endYear: 1945  },
  '전형필':            { type: '인물',  era: '근대',     startYear: 1906,  endYear: 1962  },

  // ===== 72회 심화 추가 키워드 =====
  '집현전':            { type: '기관',  era: '조선시대', startYear: 1420,  endYear: 1456  },

  // ===== 단일 단어 디테일 → 자체 키워드 등록 (보수적 일괄 추가, 33개) =====
  // 디테일이 한 단어이면서 정답 후보로 가치 있는 항목 (저서·기관·인물·유물·화폐·사건·사신)
  '9서당':             { type: '기관',  era: '신라시대', startYear: 687,   endYear: 935   },
  '갑자사화':          { type: '사건',  era: '조선시대', startYear: 1504,  endYear: 1504  },
  '건원중보':          { type: '유물',  era: '고려시대', startYear: 996,   endYear: 996   },
  '계유정난':          { type: '사건',  era: '조선시대', startYear: 1453,  endYear: 1453  },
  '교정청':            { type: '기관',  era: '근대',     startYear: 1894,  endYear: 1894  },
  '권업회':            { type: '기관',  era: '근대',     startYear: 1911,  endYear: 1914  },
  '금동관':            { type: '유물',  era: '삼국시대', startYear: 400,   endYear: 562   },
  '기해예송':          { type: '사건',  era: '조선시대', startYear: 1659,  endYear: 1659  },
  '도방':              { type: '기관',  era: '고려시대', startYear: 1179,  endYear: 1270  },
  '동사강목':          { type: '유물',  era: '조선시대', startYear: 1778,  endYear: 1778  },
  '명도전':            { type: '유물',  era: '선사시대', startYear: -500,  endYear: 0     },
  '목민심서':          { type: '유물',  era: '조선시대', startYear: 1818,  endYear: 1818  },
  '박상진':            { type: '인물',  era: '근대',     startYear: 1884,  endYear: 1921  },
  '반계수록':          { type: '유물',  era: '조선시대', startYear: 1670,  endYear: 1670  },
  '반량전':            { type: '유물',  era: '선사시대', startYear: -300,  endYear: -100  },
  '삼별초':            { type: '기관',  era: '고려시대', startYear: 1232,  endYear: 1273  },
  '상평통보':          { type: '유물',  era: '조선시대', startYear: 1678,  endYear: 1894  },
  '석주명':            { type: '인물',  era: '근대',     startYear: 1908,  endYear: 1950  },
  '성학십도':          { type: '유물',  era: '조선시대', startYear: 1568,  endYear: 1568  },
  '송죽회':            { type: '기관',  era: '근대',     startYear: 1913,  endYear: 1919  },
  '수신사':            { type: '기관',  era: '근대',     startYear: 1876,  endYear: 1882  },
  '안창호':            { type: '인물',  era: '근대',     startYear: 1878,  endYear: 1938  },
  '연행사':            { type: '기관',  era: '조선시대', startYear: 1637,  endYear: 1894  },
  '영선사':            { type: '기관',  era: '근대',     startYear: 1881,  endYear: 1882  },
  '응방':              { type: '기관',  era: '고려시대', startYear: 1274,  endYear: 1311  },
  '이규보':            { type: '인물',  era: '고려시대', startYear: 1168,  endYear: 1241  },
  '장용영':            { type: '기관',  era: '조선시대', startYear: 1793,  endYear: 1802  },
  '정방':              { type: '기관',  era: '고려시대', startYear: 1225,  endYear: 1270  },
  '주시경':            { type: '인물',  era: '근대',     startYear: 1876,  endYear: 1914  },
  '중방':              { type: '기관',  era: '고려시대', startYear: 1170,  endYear: 1270  },
  '칠지도':            { type: '유물',  era: '삼국시대', startYear: 369,   endYear: 369   },
  '통신사':            { type: '기관',  era: '조선시대', startYear: 1607,  endYear: 1811  },
  '훈련도감':          { type: '기관',  era: '조선시대', startYear: 1593,  endYear: 1882  },
};

function mapDifficulty(score) {
  if (score === 1) return 2;
  if (score === 2) return 3;
  return 4;
}

// 분야 변형 키워드 → base로 통합 (예: '박정희 정부 통일' → '박정희 정부').
// 런타임(index.html)의 KEYWORD_ALIAS_TO_BASE와 동일하게 유지할 것.
const KEYWORD_ALIAS_TO_BASE = {
  // 정부 + 분야 variant
  '박정희 정부 경제': '박정희 정부',
  '박정희 정부 통일': '박정희 정부',
  '전두환 정부 통일': '전두환 정부',
  '노태우 정부 통일': '노태우 정부',
  '김대중 정부 경제': '김대중 정부',
  '김대중 정부 통일': '김대중 정부',
  '문재인 정부 통일': '문재인 정부',
  // 시대 + 분야 variant
  '조선 후기 경제': '조선 후기',
  '조선 후기 사회': '조선 후기',
  '대한제국 시기': '대한제국',
  '고조선의 변천': '고조선',
  '고려의 경제': '고려',
  '고려의 사회': '고려',
  // 시기 묶음 (분야 prefix 제거)
  '1910년대 통치': '1910년대',
  '1920년대 사회운동': '1920년대',
  '1950년대 경제': '1950년대',
  '1980년대 경제': '1980년대',
  '일제강점기 사회상': '일제강점기',
  '근대 사회상': '일제강점기',
  '현대 사회상': '현대',
  // 시대 시작 사건 → 시대 자체
  '신석기 시대 시작': '신석기 시대',
  '청동기 시대 시작': '청동기 시대',
  '철기 시대 시작': '철기 시대',
  '신라 하대 시작': '신라 하대',
  // 표기 동일 entity
  '의금부': '조선 의금부',
};
const applyAlias = (s) => KEYWORD_ALIAS_TO_BASE[s] || s;

// 질문 대상/실제 대상 컬럼에 등장하지만 한국사 키워드가 아닌 출제 카테고리성 묶음.
// 키워드 카드 생성 안 함 + 해당 행도 skip (디테일의 정답을 매칭할 수 없으므로).
// 예: 77회 기본 Q48 "해양 인물" — 보기 4개가 이순신·이사부·최무선·장보고 등 서로 다른 시대 인물
const SKIP_SUBJECTS = new Set([
  '해양 인물',
  '충주 지역 역사',
  '부산 지역 역사',
  '개경 지역 역사',
  '고려 의학',
]);

// CSV의 디테일이 이 단어 중 하나면 (단일 단어 정답 후보), 실제 대상을 자기자신으로 retag.
// 예: 디테일="상평통보", 실제 대상="조선 후기 경제" → 실제 대상을 "상평통보"로 교체.
const SINGLE_WORD_KEYWORDS = new Set([
  '9서당', '갑자사화', '건원중보', '계유정난', '교정청', '권업회',
  '금동관', '기해예송', '도방', '동사강목', '명도전', '목민심서',
  '박상진', '반계수록', '반량전', '삼별초', '상평통보', '석주명',
  '성학십도', '송죽회', '수신사', '안창호', '연행사', '영선사',
  '응방', '의금부', '이규보', '장용영', '정방', '주시경',
  '중방', '칠지도', '통신사', '훈련도감',
]);

function toSlug(s) {
  return s.replace(/[\s/·.]+/g, '_').replace(/[\(\)\[\]]/g, '');
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  const header = lines[0].split(',');
  return lines.slice(1).map(line => {
    const cells = line.split(',');
    const obj = {};
    header.forEach((h, i) => { obj[h.trim()] = (cells[i] || '').trim(); });
    return obj;
  });
}

function main() {
  const text = fs.readFileSync(CSV_PATH, 'utf8');
  const rows = parseCSV(text);

  // 1) 모든 키워드 후보 수집 (질문 대상 + 실제 대상). 분야 변형은 base로 통합. 카테고리성 묶음은 skip.
  // 단일 단어 디테일이 신규 키워드면 그것도 후보에 포함.
  const subjects = new Set();
  rows.forEach(r => {
    const q = r['질문 대상'];
    if (q && !SKIP_SUBJECTS.has(q)) subjects.add(applyAlias(q));
    const real = r['실제 대상'];
    if (real && !SKIP_SUBJECTS.has(real)) subjects.add(applyAlias(real));
    const dt = (r['디테일(역사적 사태)'] || '').trim();
    if (SINGLE_WORD_KEYWORDS.has(dt)) subjects.add(applyAlias(dt));
  });

  // 2) 키워드 카드 생성
  const keywords = [];
  const unmapped = [];
  subjects.forEach(subject => {
    const meta = KEYWORD_META[subject];
    if (!meta) {
      unmapped.push(subject);
      // fallback: 최소한의 정보로 키워드 생성 (era 추정 어려우면 그대로 두기)
      keywords.push({
        type: '사건',
        kind: 'keyword',
        title: subject,
        description: '(자동 생성 — meta 정보 누락)',
        startYear: 1900,
        endYear: 1900,
        difficulty: 3,
        era: '근대',
        tags: [],
      });
      return;
    }
    keywords.push({
      type: meta.type,
      kind: 'keyword',
      title: subject,
      description: '',
      startYear: meta.startYear,
      endYear: meta.endYear,
      difficulty: 3,
      era: meta.era,
      tags: [],
    });
  });

  // 3) 디테일 카드 생성 (모든 행 — O / X / O(부적절))
  // 정제:
  //   - "(가)/(나)/(다)/(라)/(마) - " 보기 라벨 prefix 제거 (한능검 4지선다 옵션 표기 잔재)
  //   - 정제 후 디테일 텍스트가 정답 키워드와 동일하면 제외 (보기가 그냥 이름인 경우 — 매칭 무의미)
  const LABEL_PREFIX_RE = /^\([가-마]\)\s*-\s*/;
  const details = [];
  let skippedNoContent = 0;
  let strippedLabel = 0;
  let skippedDup = 0;
  // 중복 제거 — 같은 정답 태그 + description 첫 8자(공백·구두점 제거) 동일 시 첫 번째만 keep
  const seenDedupKey = new Set();
  const dedupKey = (text, tag) => tag + '|' + text.replace(/[\s.,!?·()\[\]"']/g, '').slice(0, 8);
  rows.forEach((r, idx) => {
    const rawSubject = r['실제 대상'] || r['질문 대상'];
    if (!rawSubject) return;
    const rawDetailTrim = (r['디테일(역사적 사태)'] || '').trim();
    // 단일 단어 디테일이 신규 키워드면 자기자신을 실제 대상으로 retag
    const baseSubject = SINGLE_WORD_KEYWORDS.has(rawDetailTrim) ? rawDetailTrim : rawSubject;
    if (SKIP_SUBJECTS.has(baseSubject)) return; // 카테고리성 묶음 — 매칭 키워드 없음
    const realSubject = applyAlias(baseSubject);  // 디테일의 정답 태그도 base로 통합
    const rawDetailText = r['디테일(역사적 사태)'];
    if (!rawDetailText) return;
    const hadLabel = LABEL_PREFIX_RE.test(rawDetailText);
    const detailText = rawDetailText.replace(LABEL_PREFIX_RE, '').trim();
    if (hadLabel) strippedLabel++;
    if (!detailText) return;
    // 공백 무시 비교 — '6월 민주 항쟁' vs '6월 민주항쟁' 같은 띄어쓰기 차이도 skip
    const norm = s => s.replace(/\s+/g, '');
    const dn = norm(detailText);
    const rn = norm(realSubject);
    if (dn === rn) {
      skippedNoContent++;
      return;
    }
    // tag로 시작 + 나머지 ≤10자면 컨텍스트 부족 (예: "발췌 개헌에 따라 이루어졌다." → "**에 따라 이루어졌다."
    // — 마스킹 후 generic 동사만 남아 변별 불가)
    if (dn.startsWith(rn) && dn.length - rn.length <= 10) {
      skippedNoContent++;
      return;
    }
    // 8자 dedup — 같은 정답 + 앞 8자 같으면 거의 동일 변형으로 간주
    const k = dedupKey(detailText, realSubject);
    if (seenDedupKey.has(k)) {
      skippedDup++;
      return;
    }
    seenDedupKey.add(k);
    const meta = KEYWORD_META[realSubject] || { era: '근대', startYear: 1900, endYear: 1900 };

    const round = r['회차'];
    const qNum = r['문항'];
    const isCorrect = r['정답여부'].startsWith('O');
    const sourceTag = isCorrect ? 'O' : 'X';

    details.push({
      id: `${round}_q${qNum}_${idx}`,
      type: '사건',
      kind: 'detail',
      title: detailText.slice(0, 30) + (detailText.length > 30 ? '...' : ''),
      description: detailText,
      startYear: meta.startYear,
      endYear: meta.endYear,
      difficulty: mapDifficulty(parseInt(r['배점'], 10)),
      era: meta.era,
      tags: [realSubject],
      _src: `${round} ${r['구분']} Q${qNum} ${sourceTag}`,
    });
  });

  const out = `// 한능검 기출 자동 변환 — tools/import_exam_csv.js. 직접 수정하지 마세요.
// 생성: 키워드 ${keywords.length}개 / 디테일 ${details.length}개 (보기 옵션만 있던 ${skippedNoContent}행 제외, 라벨 prefix ${strippedLabel}행 정제, 중복 변형 ${skippedDup}행 제외)
// 매핑 누락 키워드(fallback meta 사용 — 보강 권장): ${unmapped.length}개
${unmapped.length ? '//   ' + unmapped.join(', ') + '\n' : ''}
const EXAM_KEYWORDS = ${JSON.stringify(keywords, null, 2)};

const EXAM_DETAILS = ${JSON.stringify(details, null, 2)};
`;

  fs.writeFileSync(OUT_PATH, out, 'utf8');
  console.log(`✓ 생성: ${OUT_PATH}`);
  console.log(`  키워드 ${keywords.length}개, 디테일 ${details.length}개`);
  if (unmapped.length) {
    console.log(`  ⚠ 매핑 누락 (자동 생성): ${unmapped.join(', ')}`);
  }
}

main();
