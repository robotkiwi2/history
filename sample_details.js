// Detail 카드 샘플 — 주요 대상 카드에 딸린 세부 사실(주로 사건/제도/조항).
// 매칭 퀴즈 보기 후보로 활용. 타임라인 게임에선 primary 카드만 노출 (kind='detail' 필터).
//
// 패턴: 대상 카드 (예: 강화도 조약) 1개 + 그에 딸린 detail 카드 N개.
// detail 카드의 태그에 대상 카드의 명칭을 포함시켜 역참조 가능하게 함.
// description 안에 부모 태그 명칭을 명시적으로 언급 → 문제 생성 시 마스킹 가능.
// detail 카드의 startYear/endYear는 부모와 같은 경우가 대부분 (이벤트 발생 시점).

const DETAILS_SAMPLE = [
  // ===== 강화도 조약 (1876) — 6개 detail =====
  {
    id: '강화도조약_조선_자주국_명시',
    type: '사건',
    kind: 'detail',
    title: '조선 자주국 명시',
    description: '강화도 조약 제1관에서 조선이 자주국임을 명시 — 청과의 종속 관계를 부정하려는 일본의 의도',
    startYear: 1876, endYear: 1876,
    difficulty: 3,
    era: '근대',
    tags: ['강화도 조약', '조선', '조선 고종', '일본', '청'],
  },
  {
    id: '강화도조약_3개항_개항',
    type: '사건',
    kind: 'detail',
    title: '부산·원산·인천 개항',
    description: '강화도 조약에 따라 부산(1876)을 시작으로 원산(1880)·인천(1883) 3개 항구가 차례로 개항됨',
    startYear: 1876, endYear: 1883,
    difficulty: 2,
    era: '근대',
    tags: ['강화도 조약', '조선', '조선 고종', '일본'],
  },
  {
    id: '강화도조약_해안측량권',
    type: '사건',
    kind: 'detail',
    title: '일본의 해안 측량권 인정',
    description: '강화도 조약 결과 조선 해안에 대한 일본의 자유로운 측량권을 인정 — 군사·경제적 침투의 토대',
    startYear: 1876, endYear: 1876,
    difficulty: 3,
    era: '근대',
    tags: ['강화도 조약', '조선', '조선 고종', '일본'],
  },
  {
    id: '강화도조약_치외법권',
    type: '사건',
    kind: 'detail',
    title: '일본인 치외법권 인정',
    description: '조선 내에서 죄를 범한 일본인을 일본 영사가 재판하도록 한 영사재판권(치외법권) — 대표적 불평등 조항',
    startYear: 1876, endYear: 1876,
    difficulty: 2,
    era: '근대',
    tags: ['강화도 조약', '조선', '조선 고종', '일본'],
  },
  {
    id: '강화도조약_무관세_무역',
    type: '사건',
    kind: 'detail',
    title: '무관세 무역 허용',
    description: '강화도 조약의 부속 조약(통상장정)에서 일본 상품에 대한 무관세 무역을 허용 — 조선 시장 잠식 시작',
    startYear: 1876, endYear: 1876,
    difficulty: 4,
    era: '근대',
    tags: ['강화도 조약', '조선', '조선 고종', '일본'],
  },
  {
    id: '강화도조약_일본_화폐_유통',
    type: '사건',
    kind: 'detail',
    title: '일본 화폐 유통 허용',
    description: '강화도 조약 부속 조약으로 개항장에서 일본 화폐의 유통을 허용 — 일본 금융권의 조선 진출 통로',
    startYear: 1876, endYear: 1876,
    difficulty: 5,
    era: '근대',
    tags: ['강화도 조약', '조선', '조선 고종', '일본'],
  },

  // ===== 임진왜란 detail =====
  {
    id: '명량해전',
    type: '사건',
    kind: 'detail',
    title: '명량해전',
    description: '정유재란 당시 이순신이 명량 해협에서 12척의 배로 일본 수군 133척을 격파한 전투',
    startYear: 1597, endYear: 1597,
    difficulty: 2,
    era: '조선시대',
    tags: ['정유재란', '임진왜란', '이순신', '조선', '조선 선조'],
  },
  {
    id: '거북선',
    type: '유물',
    kind: 'detail',
    title: '거북선',
    description: '임진왜란 당시 이순신이 활용한 조선의 돌격용 전함 — 한산도 대첩 등에서 활약',
    startYear: 1592, endYear: 1592,
    difficulty: 2,
    era: '조선시대',
    tags: ['이순신', '임진왜란', '조선', '조선 선조', '한산도 대첩'],
  },
  {
    id: '곽재우_의병',
    type: '사건',
    kind: 'detail',
    title: '곽재우 의병 활동',
    description: '임진왜란 발발 직후 경상도 의령에서 일어난 곽재우 의병이 일본군을 격파하며 의병 봉기의 시작이 됨',
    startYear: 1592, endYear: 1592,
    difficulty: 3,
    era: '조선시대',
    tags: ['임진왜란', '곽재우', '조선', '조선 선조'],
  },

  // ===== 병자호란 detail =====
  {
    id: '삼전도_굴욕',
    type: '사건',
    kind: 'detail',
    title: '삼전도의 굴욕',
    description: '병자호란 끝에 인조가 삼전도에서 청 태종에게 세 번 절하고 아홉 번 머리를 조아린 항복 의식',
    startYear: 1637, endYear: 1637,
    difficulty: 2,
    era: '조선시대',
    tags: ['병자호란', '조선', '인조반정', '청'],
  },

  // ===== 흥선대원군 detail =====
  {
    id: '호포제_시행',
    type: '제도',
    kind: 'detail',
    title: '호포제 시행',
    description: '흥선대원군이 양반에게도 군포를 부과한 제도 — 양반 사대부의 반발이 큼',
    startYear: 1871, endYear: 1871,
    difficulty: 3,
    era: '조선시대',
    tags: ['흥선대원군', '조선', '흥선대원군 집권'],
  },
  {
    id: '서원_철폐',
    type: '사건',
    kind: 'detail',
    title: '서원 철폐',
    description: '흥선대원군이 47개소만 남기고 전국 서원 약 600여 개를 정리한 정책 — 양반 세력 약화 의도',
    startYear: 1871, endYear: 1871,
    difficulty: 2,
    era: '조선시대',
    tags: ['흥선대원군', '조선', '흥선대원군 집권'],
  },

  // ===== 조선 세종 detail =====
  {
    id: '앙부일구',
    type: '유물',
    kind: 'detail',
    title: '앙부일구',
    description: '조선 세종 때 장영실 등이 만든 해시계 — 한양 종묘 앞 등에 설치되어 백성도 시간을 알 수 있게 함',
    startYear: 1434, endYear: 1434,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선 세종', '조선', '장영실'],
  },
  {
    id: '칠정산_편찬',
    type: '사건',
    kind: 'detail',
    title: '칠정산 편찬',
    description: '조선 세종 때 한양을 기준으로 한 독자적 역법서 칠정산이 편찬됨 — 내편·외편으로 구성',
    startYear: 1442, endYear: 1442,
    difficulty: 4,
    era: '조선시대',
    tags: ['조선 세종', '조선'],
  },

  // ===== 조선 정조 detail =====
  {
    id: '장용영_설치',
    type: '기관',
    kind: 'detail',
    title: '장용영 설치',
    description: '조선 정조가 왕권 강화를 위해 설치한 친위 부대 — 수원 화성 축조와 연계되어 핵심 군사력으로 활용',
    startYear: 1793, endYear: 1802, // 정조 사후 폐지(1802)
    difficulty: 3,
    era: '조선시대',
    tags: ['조선 정조', '조선', '수원 화성'],
  },

  // ===== 조선 세조 detail =====
  {
    id: '단종_복위_운동',
    type: '사건',
    kind: 'detail',
    title: '단종 복위 운동',
    description: '조선 세조 즉위 후 성삼문 등 사육신이 단종 복위를 모의했으나 발각되어 처형됨',
    startYear: 1456, endYear: 1456,
    difficulty: 3,
    era: '조선시대',
    tags: ['조선 세조', '조선', '계유정난', '사육신'],
  },
];
