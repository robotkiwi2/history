// 조선 시대 카드 샘플 — 새 스키마(id/type/tags) 검토용
// 모든 타입 시연: 국가/왕/인물/전쟁/기관/유물/관직
// 태그는 다른 카드의 명칭. 이 샘플에 없는 명칭은 data.js의 기존 카드(예: '한양 천도') 참조.
// 검토 후 data.js로 이주 예정.

const JOSEON_SAMPLE = [
  // ===== 국가 =====
  {
    type: '국가',
    title: '조선',
    description: '이성계가 1392년 위화도 회군 후 건국한 왕조. 1897년 대한제국 선포 전까지 약 500년 존속',
    startYear: 1392, endYear: 1897,
    difficulty: 1,
    era: '조선시대',
    tags: ['고려', '대한제국', '한양 천도', '조선 태조'],
  },

  // ===== 왕 (재위 기간) =====
  {
    type: '왕',
    title: '조선 태조',
    description: '본명 이성계. 위화도 회군과 과전법 시행으로 권력을 잡고 조선을 건국한 첫 임금',
    startYear: 1392, endYear: 1398, // 재위
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '정도전', '한양 천도', '위화도 회군', '1차 왕자의 난'],
  },
  {
    type: '왕',
    title: '조선 세종',
    description: '훈민정음 창제, 4군 6진 개척, 측우기 발명 등 문화·과학 황금기를 연 임금',
    startYear: 1418, endYear: 1450,
    difficulty: 1,
    era: '조선시대',
    tags: ['조선', '훈민정음 창제', '훈민정음 반포', '훈민정음 해례본', '측우기', '4군 6진 완성', '갑인자 주조'],
  },
  {
    type: '왕',
    title: '조선 세조',
    description: '수양대군 시절 계유정난을 일으켜 조카 단종을 폐하고 즉위. 직전법·6조 직계제 부활',
    startYear: 1455, endYear: 1468,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '계유정난', '직전법 시행', '6조 직계제'],
  },
  {
    type: '왕',
    title: '조선 선조',
    description: '임진왜란을 겪은 임금. 사림 등용과 붕당 정치의 시작',
    startYear: 1567, endYear: 1608,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '임진왜란', '이순신', '권율', '정유재란', '한산도 대첩', '행주대첩'],
  },
  {
    type: '왕',
    title: '조선 영조',
    description: '탕평책으로 붕당 갈등을 완화하고 균역법 시행. 사도세자를 뒤주에 가둔 사건으로 유명',
    startYear: 1724, endYear: 1776,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '영조 탕평책', '균역법 시행', '사도세자 죽음'],
  },
  {
    type: '왕',
    title: '조선 정조',
    description: '규장각·장용영을 설치하고 수원 화성을 축조한 개혁 군주. 사도세자의 아들',
    startYear: 1776, endYear: 1800,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '규장각', '규장각 설치', '수원 화성', '수원 화성 완공', '정약용'],
  },

  // ===== 인물 (생몰) =====
  {
    type: '인물',
    title: '정도전',
    description: '조선 건국의 핵심 사상가·정치가. 한양 도성 설계와 조선경국전 편찬. 1차 왕자의 난으로 사망',
    startYear: 1342, endYear: 1398,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '조선 태조', '한양 천도', '1차 왕자의 난'],
  },
  {
    type: '인물',
    title: '이순신',
    description: '임진왜란 당시 조선 수군을 이끌고 한산도·명량 등에서 일본 수군을 격파한 명장',
    startYear: 1545, endYear: 1598,
    difficulty: 1,
    era: '조선시대',
    tags: ['조선', '조선 선조', '임진왜란', '한산도 대첩', '정유재란'],
  },
  {
    type: '인물',
    title: '권율',
    description: '임진왜란 당시 도원수로 조선 육군을 총괄. 행주대첩의 명장',
    startYear: 1537, endYear: 1599,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '조선 선조', '임진왜란', '행주대첩'],
  },
  {
    type: '인물',
    title: '정약용',
    description: '조선 후기 실학자. 거중기를 만들어 수원 화성 축조에 기여, 목민심서·경세유표 등 저술',
    startYear: 1762, endYear: 1836,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '조선 정조', '수원 화성', '수원 화성 완공', '신유박해'],
  },
  {
    type: '인물',
    title: '흥선대원군',
    description: '본명 이하응. 고종의 아버지로 섭정하며 경복궁 중건, 서원 정리, 통상수교거부 정책 추진',
    startYear: 1820, endYear: 1898,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '흥선대원군 집권', '경복궁 중건', '병인양요', '신미양요', '병인박해'],
  },

  // ===== 전쟁 =====
  {
    type: '전쟁',
    title: '임진왜란',
    description: '도요토미 히데요시의 일본이 조선을 침공한 7년 전쟁. 이순신·권율·의병의 활약으로 격퇴',
    startYear: 1592, endYear: 1598,
    difficulty: 1,
    era: '조선시대',
    tags: ['조선', '조선 선조', '이순신', '권율', '한산도 대첩', '행주대첩', '정유재란', '임진왜란 발발'],
  },
  {
    type: '전쟁',
    title: '정묘호란',
    description: '1627년 후금이 조선을 침공한 전쟁. 강화 후 형제 관계를 맺음',
    startYear: 1627, endYear: 1627,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '인조반정', '병자호란'],
  },
  {
    type: '전쟁',
    title: '병자호란',
    description: '1636년 청 태종이 조선을 침공해 인조가 삼전도에서 항복한 전쟁',
    startYear: 1636, endYear: 1637,
    difficulty: 1,
    era: '조선시대',
    tags: ['조선', '정묘호란', '인조반정'],
  },

  // ===== 기관 (설치~혁파) =====
  {
    type: '기관',
    title: '성균관',
    description: '조선의 최고 교육 기관. 한양에 설치된 국립 대학으로 유교 경전을 가르침',
    startYear: 1398, endYear: 1894, // 갑오개혁으로 변화
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '한양 천도', '갑오개혁'],
  },
  {
    type: '기관',
    title: '의금부',
    description: '왕명을 받들어 죄인을 추국하던 국왕 직속 사법 기관. 반역·강상죄 등을 다룸',
    startYear: 1414, endYear: 1894,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '갑오개혁'],
  },
  {
    type: '기관',
    title: '규장각',
    description: '정조가 즉위와 함께 설치한 왕실 도서관 겸 학술·정책 자문 기관',
    startYear: 1776, endYear: 1910,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선', '조선 정조', '규장각 설치', '정약용'],
  },

  // ===== 유물 =====
  {
    type: '유물',
    title: '측우기',
    description: '1441년 세종 때 발명된 세계 최초의 강우량 측정 기구',
    startYear: 1441, endYear: 1441,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '조선 세종', '측우기 발명'],
  },
  {
    type: '유물',
    title: '훈민정음 해례본',
    description: '1446년 반포된 한글 창제 원리와 사용법을 해설한 책. 유네스코 세계기록유산',
    startYear: 1446, endYear: 1446,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '조선 세종', '훈민정음 창제', '훈민정음 반포'],
  },
  {
    type: '유물',
    title: '수원 화성',
    description: '정조가 정약용 등에게 명해 1796년 완공한 신도시 성곽. 유네스코 세계문화유산',
    startYear: 1796, endYear: 1796,
    difficulty: 2,
    era: '조선시대',
    tags: ['조선', '조선 정조', '정약용', '수원 화성 완공'],
  },

  // ===== 관직 =====
  {
    type: '관직',
    title: '영의정',
    description: '의정부의 최고 관직. 정1품으로 좌의정·우의정과 함께 삼정승을 이루며 국정을 총괄',
    startYear: 1400, endYear: 1894,
    difficulty: 4,
    era: '조선시대',
    tags: ['조선', '갑오개혁'],
  },
  {
    type: '관직',
    title: '도승지',
    description: '승정원의 수장 정3품 관직. 왕명 출납을 담당',
    startYear: 1405, endYear: 1894,
    difficulty: 5,
    era: '조선시대',
    tags: ['조선', '갑오개혁'],
  },
];
