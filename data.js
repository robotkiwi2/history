// 카드 데이터.
// 통합 스키마: { type?, kind?, title, description, startYear, endYear, era?, difficulty?, tags?, id? }
//
// - title: 카드의 유일 식별자 (keyword/detail 공통, dedupe last-wins)
// - type: 12개 (국가/왕/전쟁/조약/운동/개혁/사건/인물/제도/기관/문화/유물/관직) — 의미 라벨
// - kind: 'keyword' (Level 1, 출제 대상) | 'detail' (Level 2, 매칭 대상). 생략시 'keyword'
// - tags: 다른 카드의 title 참조 (다중)
// - startYear / endYear: 같으면 점, 다르면 기간. 정렬·채점은 startYear 기준
// - era: raw 시대명 (선사시대/고조선/삼국시대/신라시대/고려시대/조선시대/근대). cardEra() 가 세분 매핑
// - difficulty: 1(한능검 기본 단골) ~ 5(킬러/매우 구체적)
// - id: detail만 보유 (matched 추적용 안정 식별자). keyword는 title이 곧 id.
//
// 현재 이 파일의 카드들은 대부분 type/kind 미지정 → default ('keyword' + type 무시) 동작.
// 점진 마이그레이션: 명백히 keyword/detail 분류되는 카드부터 type/kind 명시.
// 기준 카드(INITIAL_BG)는 description, era, difficulty 없음 (start=end).
// (사건 정렬 모드의 ROUNDS는 아직 { text, year } 형식 유지 — 추후 통일 예정)

// 시대 분류 (한능검 출제 분량 반영 — 10개로 세분화).
// 카드의 era 필드는 raw 값(예: '조선시대') 그대로 두고, JS의 cardEra()가 startYear로 세분 매핑.
// 세분 기준:
//   - 선사·고조선: 합쳐서 1개 (출제 비중 적음)
//   - 삼국시대: 1개
//   - 통일신라·발해: 1개 (현재 '신라시대' era)
//   - 고려: 무신정변(1170) 기준 전기·후기 2분할
//   - 조선: 1500/1700 기준 전기·중기·후기 3분할 (출제 비중 가장 큼)
//   - 근대: 경술국치(1910) 기준 개항기·일제강점기 2분할
const ERAS = [
  '선사·고조선',
  '삼국시대',
  '통일신라·발해',
  '고려 전기',
  '고려 후기',
  '조선 전기',
  '조선 중기',
  '조선 후기',
  '개항기',
  '일제강점기',
  '현대',
];

// 연도 모드의 기준 카드 — 초기 타임라인 뼈대
const INITIAL_BG = [
  { title: '기원전 2000년', startYear: -2000, endYear: -2000 },
  { title: '기원전 1500년', startYear: -1500, endYear: -1500 },
  { title: '기원전 1000년', startYear: -1000, endYear: -1000 },
  { title: '기원전 500년',  startYear: -500,  endYear: -500  },
  { title: '0년',           startYear: 0,     endYear: 0     },
  { title: '500년',         startYear: 500,   endYear: 500   },
  { title: '1000년',        startYear: 1000,  endYear: 1000  },
  { title: '1500년',        startYear: 1500,  endYear: 1500  },
  { title: '2000년',        startYear: 2000,  endYear: 2000  },
];

// 연도 모드의 문제 카드
const YEAR_QUESTIONS = [
  // ===== 선사시대 =====
  { title: '한반도 구석기 시작', era: '선사시대', difficulty: 4, description: '한반도에서 인류가 본격적으로 거주를 시작한 시기',          startYear: -50000, endYear: -50000 },
  { title: '신석기 시대 시작',   era: '선사시대', difficulty: 3, description: '간석기·토기 사용, 정착 생활이 시작된 시기',                startYear: -8000,  endYear: -8000  },
  { title: '빗살무늬토기 사용',  era: '선사시대', difficulty: 2, description: '한반도 신석기를 대표하는 V자형 무늬 토기',                  startYear: -5000,  endYear: -5000  },
  { title: '농경 본격화',        era: '선사시대', difficulty: 3, description: '조·피 등 잡곡 농경과 가축 사육의 본격적 시작',             startYear: -3000,  endYear: -3000  },
  { title: '청동기 시대 시작',   era: '선사시대', difficulty: 2, description: '한반도에 금속 사용이 시작되며 계급 사회가 형성',           startYear: -1500,  endYear: -1500  },
  { title: '비파형동검 사용',    era: '선사시대', difficulty: 4, description: '고조선 영역에서 출토된 청동기 시대의 대표 무기',           startYear: -1000,  endYear: -1000  },
  { title: '철기 시대 시작',     era: '선사시대', difficulty: 3, description: '한반도에 철기가 사용되기 시작한 시기',                     startYear: -500,   endYear: -500   },

  // ===== 고조선 =====
  { title: '단군조선 건국',  era: '고조선', difficulty: 1, description: '단군왕검이 아사달에 도읍을 정하고 세웠다는 한민족 최초의 국가', startYear: -2333, endYear: -2333 },
  { title: '부여 건국',      era: '고조선', difficulty: 4, description: '만주 송화강 일대에 등장한 한국 고대 국가 중 하나',              startYear: -200,  endYear: -200  },
  { title: '위만의 망명',    era: '고조선', difficulty: 5, description: '연나라 출신 위만이 무리를 이끌고 고조선으로 망명',             startYear: -195,  endYear: -195  },
  { title: '위만조선 성립',  era: '고조선', difficulty: 2, description: '위만이 준왕을 몰아내고 세운 고조선의 후기 정권',               startYear: -194,  endYear: -194  },
  { title: '우거왕 즉위',    era: '고조선', difficulty: 5, description: '위만조선의 마지막 왕, 한과의 갈등이 격화된 시기',               startYear: -141,  endYear: -141  },
  { title: '한 무제 침입',   era: '고조선', difficulty: 4, description: '한 무제가 고조선을 침공해 본격 전쟁이 시작됨',                 startYear: -109,  endYear: -108  },
  { title: '왕검성 함락',    era: '고조선', difficulty: 4, description: '수도 왕검성이 함락되며 위만조선이 멸망',                        startYear: -108,  endYear: -108  },
  { title: '한사군 설치',    era: '고조선', difficulty: 3, description: '고조선 멸망 후 한이 옛 영토에 낙랑·진번·임둔·현도를 설치',     startYear: -108,  endYear: -108  },

  // ===== 삼국시대 =====
  { title: '신라 건국',           era: '삼국시대', difficulty: 2, description: '박혁거세가 진한 일대에 세운 삼국 중 하나',                 startYear: -57, endYear: -57 },
  { title: '고구려 건국',         era: '삼국시대', difficulty: 2, description: '주몽이 졸본에 세운 삼국 중 하나, 압록강 일대에서 시작',     startYear: -37, endYear: -37 },
  { title: '백제 건국',           era: '삼국시대', difficulty: 2, description: '온조가 한강 유역에 세운 삼국 중 하나',                     startYear: -18, endYear: -18 },
  { title: '고구려 태조왕 즉위',  era: '삼국시대', difficulty: 4, description: '고구려가 본격적인 중앙집권 국가 체제를 갖춘 왕',           startYear: 53,  endYear: 53  },
  { title: '진대법 시행',         era: '삼국시대', difficulty: 3, description: '고구려 고국천왕이 빈민 구휼을 위해 봄에 식량을 빌려준 제도', startYear: 194, endYear: 194 },
  { title: '신라 김씨 왕통 확립', era: '삼국시대', difficulty: 5, description: '내물왕 이후 김씨가 신라 왕위를 독점 세습',                 startYear: 356, endYear: 356 },
  { title: '백제 근초고왕 즉위',  era: '삼국시대', difficulty: 3, description: '백제 전성기를 이끈 왕의 즉위',                              startYear: 346, endYear: 346 },
  { title: '백제 평양성 공격',    era: '삼국시대', difficulty: 4, description: '근초고왕이 고구려 평양성을 공격해 고국원왕을 전사시킴',     startYear: 371, endYear: 371 },
  { title: '고구려 불교 공인',    era: '삼국시대', difficulty: 3, description: '소수림왕이 전진으로부터 불교를 공식 수용',                 startYear: 372, endYear: 372 },
  { title: '백제 불교 수용',      era: '삼국시대', difficulty: 4, description: '침류왕이 동진으로부터 불교를 받아들임',                     startYear: 384, endYear: 384 },
  { title: '광개토대왕 즉위',     era: '삼국시대', difficulty: 2, description: '고구려의 영토를 최대로 확장한 왕의 즉위',                   startYear: 391, endYear: 391 },
  { title: '광개토대왕비 건립',   era: '삼국시대', difficulty: 3, description: '장수왕이 부왕의 업적을 기리기 위해 세운 비석',              startYear: 414, endYear: 414 },
  { title: '장수왕 평양 천도',    era: '삼국시대', difficulty: 3, description: '고구려가 도읍을 국내성에서 평양으로 옮김',                 startYear: 427, endYear: 427 },
  { title: '고구려 한성 함락',    era: '삼국시대', difficulty: 3, description: '장수왕이 백제 한성을 함락, 한강 유역 확보',                startYear: 475, endYear: 475 },
  { title: '부여 멸망',           era: '삼국시대', difficulty: 5, description: '고구려에 흡수되며 부여가 멸망',                              startYear: 494, endYear: 494 },
  { title: '신라 지증왕 즉위',    era: '삼국시대', difficulty: 4, description: '국호를 신라로 정하고 왕호를 사용하기 시작',                 startYear: 500, endYear: 500 },
  { title: '백제 무령왕 즉위',    era: '삼국시대', difficulty: 4, description: '백제 중흥을 이룬 왕, 무령왕릉으로 유명',                    startYear: 501, endYear: 501 },
  { title: '우산국 정복',         era: '삼국시대', difficulty: 3, description: '이사부가 지금의 울릉도 일대를 신라에 복속',                 startYear: 512, endYear: 512 },
  { title: '신라 법흥왕 즉위',    era: '삼국시대', difficulty: 3, description: '율령 반포·불교 공인 등 체제 정비를 단행한 왕',              startYear: 514, endYear: 514 },
  { title: '신라 율령 반포',      era: '삼국시대', difficulty: 4, description: '법흥왕이 법령 체계를 정비',                                  startYear: 520, endYear: 520 },
  { title: '신라 불교 공인',      era: '삼국시대', difficulty: 2, description: '이차돈의 순교를 계기로 법흥왕이 불교를 공인',               startYear: 527, endYear: 527 },
  { title: '백제 사비 천도',      era: '삼국시대', difficulty: 3, description: '성왕이 도읍을 웅진에서 사비(부여)로 옮김',                  startYear: 538, endYear: 538 },
  { title: '신라 진흥왕 즉위',    era: '삼국시대', difficulty: 3, description: '신라의 영토를 크게 확장한 정복 군주',                       startYear: 540, endYear: 540 },
  { title: '단양 적성비 건립',    era: '삼국시대', difficulty: 5, description: '진흥왕이 한강 상류로 진출한 사실을 새긴 비석',             startYear: 550, endYear: 550 },
  { title: '신라 한강 차지',      era: '삼국시대', difficulty: 3, description: '진흥왕이 백제와 동맹을 깨고 한강 유역을 차지',             startYear: 553, endYear: 553 },
  { title: '대가야 멸망',         era: '삼국시대', difficulty: 4, description: '이사부 등이 대가야를 정복해 가야 연맹이 완전 해체',         startYear: 562, endYear: 562 },
  { title: '고구려 영양왕 즉위',  era: '삼국시대', difficulty: 5, description: '수의 침입을 격퇴한 시기의 고구려 왕',                       startYear: 590, endYear: 590 },
  { title: '백제 무왕 즉위',      era: '삼국시대', difficulty: 5, description: '익산 미륵사 창건으로 유명한 백제 왕',                       startYear: 600, endYear: 600 },
  { title: '살수대첩',            era: '삼국시대', difficulty: 2, description: '을지문덕이 수나라 군을 살수에서 대파한 전투',              startYear: 612, endYear: 612 },
  { title: '안시성 전투',         era: '삼국시대', difficulty: 2, description: '고구려 안시성이 당 태종의 군을 격퇴한 전투',                startYear: 645, endYear: 645 },
  { title: '황산벌 전투',         era: '삼국시대', difficulty: 3, description: '계백이 신라 김유신 군과 싸우다 전사한 백제 최후의 전투',    startYear: 660, endYear: 660 },
  { title: '백제 멸망',           era: '삼국시대', difficulty: 2, description: '나당 연합군의 공격으로 의자왕 시기 백제 멸망',              startYear: 660, endYear: 660 },
  { title: '고구려 멸망',         era: '삼국시대', difficulty: 2, description: '나당 연합군에 의해 평양성이 함락되며 고구려 멸망',          startYear: 668, endYear: 668 },

  // ===== 신라시대 (통일신라·발해) =====
  { title: '신라 삼국통일',      era: '신라시대', difficulty: 2, description: '신라가 당과 연합해 백제·고구려를 멸하고 한반도를 통일',     startYear: 676, endYear: 676 },
  { title: '신문왕 즉위',        era: '신라시대', difficulty: 4, description: '통일신라의 전제왕권을 확립한 왕',                            startYear: 681, endYear: 681 },
  { title: '김흠돌의 난',        era: '신라시대', difficulty: 5, description: '왕권에 도전한 진골 귀족 세력의 반란',                       startYear: 681, endYear: 681 },
  { title: '9주 5소경 정비',     era: '신라시대', difficulty: 3, description: '통일신라의 지방 행정 체제 완성',                            startYear: 685, endYear: 685 },
  { title: '발해 건국',          era: '신라시대', difficulty: 2, description: '대조영이 고구려 유민을 모아 동모산에서 건국',                startYear: 698, endYear: 698 },
  { title: '발해 무왕 즉위',     era: '신라시대', difficulty: 5, description: '발해의 영토를 크게 확장한 왕',                                startYear: 719, endYear: 719 },
  { title: '정전 지급',          era: '신라시대', difficulty: 4, description: '성덕왕이 백성에게 토지를 지급한 제도',                       startYear: 722, endYear: 722 },
  { title: '발해 문왕 즉위',     era: '신라시대', difficulty: 5, description: '당과 친선 외교를 펼치고 문물 정비를 한 왕',                  startYear: 737, endYear: 737 },
  { title: '경덕왕 즉위',        era: '신라시대', difficulty: 4, description: '통일신라 전성기 끝자락을 이끈 왕',                            startYear: 742, endYear: 742 },
  { title: '경덕왕 한화 정책',   era: '신라시대', difficulty: 5, description: '지방 행정 명칭을 중국식으로 바꾼 정책',                       startYear: 757, endYear: 757 },
  { title: '신라 하대 시작',     era: '신라시대', difficulty: 4, description: '혜공왕 시해 후 시작된 진골 귀족의 권력 다툼 시기',            startYear: 780, endYear: 780 },
  { title: '발해 선왕 즉위',     era: '신라시대', difficulty: 5, description: '발해의 최대 영토 확장과 해동성국의 토대를 다진 왕',          startYear: 818, endYear: 818 },
  { title: '김헌창의 난',        era: '신라시대', difficulty: 4, description: '신라 왕위 계승에 불만을 품은 김헌창의 반란',                  startYear: 822, endYear: 822 },
  { title: '청해진 설치',        era: '신라시대', difficulty: 3, description: '장보고가 완도에 설치한 해상 무역·군사 기지',                 startYear: 828, endYear: 828 },
  { title: '진성여왕 즉위',      era: '신라시대', difficulty: 4, description: '통일신라 말 혼란기를 통치한 여왕',                            startYear: 887, endYear: 887 },
  { title: '원종·애노의 난',     era: '신라시대', difficulty: 4, description: '통일신라 말 농민들의 대규모 봉기',                            startYear: 889, endYear: 889 },
  { title: '최치원 시무 10여조', era: '신라시대', difficulty: 4, description: '당에서 귀국한 최치원이 진성여왕에게 올린 개혁안',             startYear: 894, endYear: 894 },
  { title: '후백제 건국',        era: '신라시대', difficulty: 3, description: '견훤이 완산주에 세운 후삼국 중 하나',                         startYear: 900, endYear: 900 },
  { title: '후고구려 건국',      era: '신라시대', difficulty: 3, description: '궁예가 송악에 세운 후삼국 중 하나',                            startYear: 901, endYear: 901 },
  { title: '발해 멸망',          era: '신라시대', difficulty: 3, description: '거란의 침입으로 발해가 멸망',                                  startYear: 926, endYear: 926 },
  { title: '신라 경순왕 항복',   era: '신라시대', difficulty: 3, description: '신라 마지막 왕 경순왕이 고려에 항복',                         startYear: 935, endYear: 935 },
  { title: '후백제 멸망',        era: '신라시대', difficulty: 3, description: '왕건이 후백제를 멸망시키고 후삼국 통일 완성',                 startYear: 936, endYear: 936 },

  // ===== 고려시대 =====
  { title: '고려 건국',           era: '고려시대', difficulty: 1, description: '왕건이 후삼국을 통일하기 시작한 새 왕조의 시작',             startYear: 918,  endYear: 918  },
  { title: '발해 유민 수용',      era: '고려시대', difficulty: 5, description: '고려가 발해 멸망 후 유민을 받아들임',                         startYear: 934,  endYear: 934  },
  { title: '광종 즉위',           era: '고려시대', difficulty: 3, description: '고려 초 왕권 강화의 기틀을 마련한 왕',                        startYear: 949,  endYear: 949  },
  { title: '노비안검법',          era: '고려시대', difficulty: 3, description: '광종이 부당하게 노비된 자를 양인으로 해방시킨 법',            startYear: 956,  endYear: 956  },
  { title: '과거제 도입',         era: '고려시대', difficulty: 2, description: '쌍기의 건의로 광종이 시행한 인재 등용 제도',                  startYear: 958,  endYear: 958  },
  { title: '성종 즉위',           era: '고려시대', difficulty: 4, description: '최승로의 시무 28조를 받아들여 유교 체제를 정비',              startYear: 981,  endYear: 981  },
  { title: '최승로 시무 28조',    era: '고려시대', difficulty: 3, description: '성종에게 올린 유교적 정치 개혁안',                            startYear: 982,  endYear: 982  },
  { title: '거란 1차 침입',       era: '고려시대', difficulty: 2, description: '서희의 외교 담판으로 강동 6주를 확보한 사건',                 startYear: 993,  endYear: 993  },
  { title: '거란 2차 침입',       era: '고려시대', difficulty: 4, description: '강조의 정변을 빌미로 거란이 침입, 개경 함락',                 startYear: 1010, endYear: 1011 },
  { title: '거란 3차 침입',       era: '고려시대', difficulty: 4, description: '10만 거란 대군이 침입했으나 강감찬에게 격파됨',               startYear: 1018, endYear: 1019 },
  { title: '귀주대첩',            era: '고려시대', difficulty: 3, description: '강감찬이 거란군 10만을 귀주에서 섬멸한 전투',                  startYear: 1019, endYear: 1019 },
  { title: '천리장성 완공',       era: '고려시대', difficulty: 4, description: '거란·여진 방어를 위해 압록강~동해를 잇는 성벽 완성',          startYear: 1044, endYear: 1044 },
  { title: '별무반 편성',         era: '고려시대', difficulty: 4, description: '윤관이 여진 정벌을 위해 신기군·신보군·항마군으로 편성',       startYear: 1104, endYear: 1104 },
  { title: '동북 9성 설치',       era: '고려시대', difficulty: 4, description: '윤관이 여진을 정벌하고 9성을 쌓아 영토 확장',                 startYear: 1107, endYear: 1107 },
  { title: '이자겸의 난',         era: '고려시대', difficulty: 3, description: '외척 이자겸이 왕권을 위협한 반란',                            startYear: 1126, endYear: 1126 },
  { title: '묘청의 서경 천도',    era: '고려시대', difficulty: 3, description: '묘청이 서경 천도와 칭제 건원을 주장하다 일으킨 반란',          startYear: 1135, endYear: 1136 },
  { title: '무신정변',            era: '고려시대', difficulty: 2, description: '정중부 등 무신들이 문신을 제거하고 정권을 장악',              startYear: 1170, endYear: 1170 },
  { title: '망이·망소이의 난',    era: '고려시대', difficulty: 4, description: '공주 명학소에서 일어난 천민 신분 해방 운동',                  startYear: 1176, endYear: 1177 },
  { title: '최충헌 정권 장악',    era: '고려시대', difficulty: 3, description: '이의민을 제거하고 60여 년 최씨 무신정권을 시작',              startYear: 1196, endYear: 1196 },
  { title: '만적의 난',           era: '고려시대', difficulty: 3, description: '노비 만적이 일으키려다 사전 발각된 신분 해방 봉기',           startYear: 1198, endYear: 1198 },
  { title: '몽골 1차 침입',       era: '고려시대', difficulty: 3, description: '몽골 사신 살해를 빌미로 몽골이 고려 침입 시작',                startYear: 1231, endYear: 1232 },
  { title: '강화도 천도',         era: '고려시대', difficulty: 3, description: '최우가 몽골에 항전하기 위해 도읍을 강화로 옮김',              startYear: 1232, endYear: 1232 },
  { title: '팔만대장경 조성 시작', era: '고려시대', difficulty: 3, description: '몽골 침입을 부처의 힘으로 막고자 대장경 다시 새김',          startYear: 1236, endYear: 1251 },
  { title: '몽골과 강화',         era: '고려시대', difficulty: 4, description: '장기 항쟁 끝에 고려가 몽골과 강화를 맺음',                    startYear: 1259, endYear: 1259 },
  { title: '개경 환도',           era: '고려시대', difficulty: 4, description: '몽골과의 강화 이후 도읍을 강화에서 개경으로 옮김',            startYear: 1270, endYear: 1270 },
  { title: '삼별초 항쟁',         era: '고려시대', difficulty: 3, description: '강화에서 진도·제주로 옮기며 대몽 항쟁을 계속한 군대',          startYear: 1270, endYear: 1273 },
  { title: '여몽 1차 일본 원정',  era: '고려시대', difficulty: 4, description: '여몽 연합군이 일본을 침공한 1차 원정',                        startYear: 1274, endYear: 1274 },
  { title: '충렬왕 즉위',         era: '고려시대', difficulty: 5, description: '원의 부마국 시대 첫 왕, 원의 간섭 본격화',                    startYear: 1274, endYear: 1274 },
  { title: '여몽 2차 일본 원정',  era: '고려시대', difficulty: 4, description: '여몽 연합군의 2차 일본 원정, 태풍으로 실패',                  startYear: 1281, endYear: 1281 },
  { title: '공민왕 즉위',         era: '고려시대', difficulty: 2, description: '원의 간섭에서 벗어나려 반원 자주 정책을 펼친 왕',              startYear: 1351, endYear: 1351 },
  { title: '쌍성총관부 수복',     era: '고려시대', difficulty: 3, description: '공민왕이 무력으로 쌍성총관부를 수복',                          startYear: 1356, endYear: 1356 },
  { title: '홍건적 침입',         era: '고려시대', difficulty: 4, description: '홍건적이 개경까지 침입, 공민왕이 안동까지 피란',              startYear: 1361, endYear: 1362 },
  { title: '신돈 등용',           era: '고려시대', difficulty: 4, description: '공민왕이 신돈을 등용해 전민변정도감 설치',                    startYear: 1365, endYear: 1365 },
  { title: '위화도 회군',         era: '고려시대', difficulty: 2, description: '이성계가 요동 정벌 도중 회군해 정권을 장악',                  startYear: 1388, endYear: 1388 },
  { title: '과전법 시행',         era: '고려시대', difficulty: 3, description: '이성계 일파가 추진한 토지 개혁, 신진사대부 경제 기반',         startYear: 1391, endYear: 1391 },

  // ===== 조선시대 =====
  { title: '조선 건국',         era: '조선시대', difficulty: 1, description: '이성계가 위화도 회군 후 새 왕조를 세움',                     startYear: 1392, endYear: 1392 },
  { title: '한양 천도',         era: '조선시대', difficulty: 2, description: '조선이 개경에서 한양(서울)으로 도읍을 옮김',                 startYear: 1394, endYear: 1394 },
  { title: '1차 왕자의 난',     era: '조선시대', difficulty: 4, description: '이방원이 정도전 등을 제거하고 권력 장악',                    startYear: 1398, endYear: 1398 },
  { title: '2차 왕자의 난',     era: '조선시대', difficulty: 5, description: '박포의 난이라고도 함, 이방원이 즉위 기반 다짐',              startYear: 1400, endYear: 1400 },
  { title: '태종 즉위',         era: '조선시대', difficulty: 3, description: '이방원이 조선 3대 왕으로 즉위',                                startYear: 1400, endYear: 1400 },
  { title: '6조 직계제',        era: '조선시대', difficulty: 4, description: '태종이 6조를 의정부 거치지 않고 왕에게 직보고하게 함',        startYear: 1414, endYear: 1414 },
  { title: '세종 즉위',         era: '조선시대', difficulty: 2, description: '조선의 문화·과학 황금기를 연 왕의 즉위',                     startYear: 1418, endYear: 1418 },
  { title: '갑인자 주조',       era: '조선시대', difficulty: 5, description: '세종 시기 주조된 활자, 인쇄 기술 발전',                       startYear: 1434, endYear: 1434 },
  { title: '4군 6진 완성',      era: '조선시대', difficulty: 3, description: '최윤덕·김종서가 압록강·두만강 일대에 설치한 군사 행정 구역',   startYear: 1433, endYear: 1449 },
  { title: '측우기 발명',       era: '조선시대', difficulty: 3, description: '장영실 등이 발명한 강우량 측정 기구',                          startYear: 1441, endYear: 1441 },
  { title: '훈민정음 창제',     era: '조선시대', difficulty: 2, description: '세종대왕이 한글을 만든 시점',                                  startYear: 1443, endYear: 1443 },
  { title: '훈민정음 반포',     era: '조선시대', difficulty: 1, description: '세종대왕이 한글을 백성에게 공식 공포',                        startYear: 1446, endYear: 1446 },
  { title: '계유정난',          era: '조선시대', difficulty: 3, description: '수양대군이 김종서 등을 제거하고 권력 장악한 정변',             startYear: 1453, endYear: 1453 },
  { title: '세조 즉위',         era: '조선시대', difficulty: 3, description: '수양대군이 단종을 폐위시키고 즉위',                            startYear: 1455, endYear: 1455 },
  { title: '직전법 시행',       era: '조선시대', difficulty: 4, description: '세조가 과전법을 폐지하고 현직 관료에게만 토지 지급',           startYear: 1466, endYear: 1466 },
  { title: '경국대전 완성',     era: '조선시대', difficulty: 3, description: '성종 시기 완성된 조선 최고 법전',                              startYear: 1485, endYear: 1485 },
  { title: '무오사화',          era: '조선시대', difficulty: 3, description: '사림이 처음으로 화를 입은 사화, 김일손의 사초가 발단',         startYear: 1498, endYear: 1498 },
  { title: '갑자사화',          era: '조선시대', difficulty: 4, description: '연산군이 어머니 폐비 윤씨 사건에 연루된 신하들을 처벌',        startYear: 1504, endYear: 1504 },
  { title: '중종반정',          era: '조선시대', difficulty: 3, description: '박원종 등이 연산군을 폐위시키고 중종을 옹립',                  startYear: 1506, endYear: 1506 },
  { title: '기묘사화',          era: '조선시대', difficulty: 3, description: '조광조 등 사림이 훈구파에 의해 숙청된 사화',                   startYear: 1519, endYear: 1519 },
  { title: '을사사화',          era: '조선시대', difficulty: 4, description: '외척 윤원형 일파가 일으킨 정쟁 사화',                          startYear: 1545, endYear: 1545 },
  { title: '임진왜란 발발',     era: '조선시대', difficulty: 1, description: '도요토미 히데요시의 일본이 조선을 침공한 7년 전쟁',           startYear: 1592, endYear: 1592 },
  { title: '한산도 대첩',       era: '조선시대', difficulty: 3, description: '이순신이 한산도 앞바다에서 일본 수군을 격파',                  startYear: 1592, endYear: 1592 },
  { title: '행주대첩',          era: '조선시대', difficulty: 3, description: '권율이 행주산성에서 일본군을 격파한 전투',                    startYear: 1593, endYear: 1593 },
  { title: '정유재란',          era: '조선시대', difficulty: 3, description: '강화 협상 결렬 후 일본이 재침입한 임진왜란 후반전',           startYear: 1597, endYear: 1598 },
  { title: '광해군',            era: '조선시대', difficulty: 3, description: '임진왜란 후 전후 복구와 중립 외교를 펼친 왕',                  startYear: 1608, endYear: 1608 },
  { title: '대동법',            era: '조선시대', difficulty: 3, description: '공물을 쌀로 통일해 받는 제도, 경기도 시범 실시(1608)',         startYear: 1608, endYear: 1608 },
  { title: '인조반정',          era: '조선시대', difficulty: 3, description: '서인이 광해군을 폐위시키고 인조를 옹립',                       startYear: 1623, endYear: 1623 },
  { title: '정묘호란',          era: '조선시대', difficulty: 3, description: '후금이 조선을 침공, 형제 관계 맺고 물러남',                    startYear: 1627, endYear: 1627 },
  { title: '병자호란',          era: '조선시대', difficulty: 1, description: '청 태종이 조선을 침공해 인조가 삼전도에서 항복',              startYear: 1636, endYear: 1637 },
  { title: '효종 즉위',         era: '조선시대', difficulty: 4, description: '북벌 정책을 추진한 왕',                                        startYear: 1649, endYear: 1649 },
  { title: '1차 예송논쟁',      era: '조선시대', difficulty: 4, description: '효종 사망 후 자의대비 복상 기간을 두고 일어난 예학 논쟁',     startYear: 1659, endYear: 1659 },
  { title: '경신환국',          era: '조선시대', difficulty: 4, description: '남인이 몰락하고 서인이 정권 장악한 환국',                      startYear: 1680, endYear: 1680 },
  { title: '갑술환국',          era: '조선시대', difficulty: 5, description: '노론·소론 세력이 다시 집권한 환국',                            startYear: 1694, endYear: 1694 },
  { title: '영조 즉위',         era: '조선시대', difficulty: 3, description: '탕평책으로 붕당 갈등을 완화한 왕',                            startYear: 1724, endYear: 1724 },
  { title: '영조 탕평책',       era: '조선시대', difficulty: 3, description: '당파의 균형 등용을 추진한 인사 정책',                          startYear: 1742, endYear: 1742 },
  { title: '균역법 시행',       era: '조선시대', difficulty: 3, description: '군포 부담을 1필로 줄이고 결작 등으로 보충',                    startYear: 1750, endYear: 1750 },
  { title: '사도세자 죽음',     era: '조선시대', difficulty: 4, description: '영조가 사도세자를 뒤주에 가두어 사망에 이르게 한 사건',         startYear: 1762, endYear: 1762 },
  { title: '정조 즉위',         era: '조선시대', difficulty: 2, description: '규장각·장용영을 두고 개혁 정책을 펼친 왕',                    startYear: 1776, endYear: 1776 },
  { title: '규장각 설치',       era: '조선시대', difficulty: 3, description: '정조가 즉위와 함께 설치한 학술·정책 자문 기관',                startYear: 1776, endYear: 1776 },
  { title: '수원 화성 완공',    era: '조선시대', difficulty: 3, description: '정조가 정약용 등을 동원해 축성한 신도시 성곽',                startYear: 1796, endYear: 1796 },
  { title: '세도정치 시작',     era: '조선시대', difficulty: 4, description: '정조 사후 외척 세도 가문이 권력을 독점한 정치 형태',           startYear: 1800, endYear: 1863 },
  { title: '신유박해',          era: '조선시대', difficulty: 3, description: '순조 즉위 직후 천주교 신자 대규모 박해',                       startYear: 1801, endYear: 1801 },
  { title: '홍경래의 난',       era: '조선시대', difficulty: 3, description: '평안도 일대에서 일어난 대규모 농민·상인 봉기',                 startYear: 1811, endYear: 1812 },
  { title: '임술농민봉기',      era: '조선시대', difficulty: 3, description: '삼정 문란에 분노한 농민들의 전국적 봉기',                      startYear: 1862, endYear: 1862 },
  { title: '흥선대원군 집권',   era: '조선시대', difficulty: 2, description: '고종 즉위 후 대원군이 섭정으로 개혁 단행',                    startYear: 1863, endYear: 1873 },
  { title: '경복궁 중건',       era: '조선시대', difficulty: 4, description: '임진왜란 때 불탄 경복궁을 흥선대원군이 재건',                  startYear: 1865, endYear: 1872 },
  { title: '병인박해',          era: '조선시대', difficulty: 4, description: '천주교 신자와 프랑스 신부 대규모 박해 사건',                  startYear: 1866, endYear: 1866 },
  { title: '병인양요',          era: '조선시대', difficulty: 2, description: '병인박해 보복으로 프랑스가 강화도 침입',                       startYear: 1866, endYear: 1866 },
  { title: '신미양요',          era: '조선시대', difficulty: 3, description: '제너럴셔먼호 사건을 빌미로 미국이 강화도 침입',                startYear: 1871, endYear: 1871 },

  // ===== 근대 =====
  { title: '강화도 조약',         era: '근대', difficulty: 1, description: '운요호 사건 이후 일본과 체결한 최초의 근대적 불평등 조약',     startYear: 1876, endYear: 1876 },
  { title: '임오군란',            era: '근대', difficulty: 3, description: '구식 군대의 차별 대우에 분노한 군인들의 봉기',                 startYear: 1882, endYear: 1882 },
  { title: '조미수호통상조약',    era: '근대', difficulty: 4, description: '조선이 서양 국가와 처음으로 맺은 조약',                        startYear: 1882, endYear: 1882 },
  { title: '갑신정변',            era: '근대', difficulty: 2, description: '김옥균 등 개화파가 일으킨 근대적 개혁 시도',                   startYear: 1884, endYear: 1884 },
  { title: '동학농민운동',        era: '근대', difficulty: 2, description: '전봉준이 이끈 농민들의 대규모 사회 개혁 운동',                 startYear: 1894, endYear: 1894 },
  { title: '갑오개혁',            era: '근대', difficulty: 2, description: '동학농민운동을 계기로 추진된 조선의 근대적 개혁',              startYear: 1894, endYear: 1896 },
  { title: '청일전쟁 발발',       era: '근대', difficulty: 3, description: '조선의 종주권을 놓고 청과 일본이 벌인 전쟁',                   startYear: 1894, endYear: 1895 },
  { title: '시모노세키 조약',     era: '근대', difficulty: 4, description: '청일전쟁 종결 조약, 청이 조선을 자주국으로 인정',              startYear: 1895, endYear: 1895 },
  { title: '을미사변',            era: '근대', difficulty: 2, description: '일본 낭인들이 명성황후를 시해한 사건',                          startYear: 1895, endYear: 1895 },
  { title: '을미개혁',            era: '근대', difficulty: 3, description: '단발령·태양력 채택 등이 포함된 일본 주도 개혁',                startYear: 1895, endYear: 1896 },
  { title: '아관파천',            era: '근대', difficulty: 3, description: '고종이 러시아 공사관으로 거처를 옮긴 사건',                    startYear: 1896, endYear: 1897 },
  { title: '독립협회 창립',       era: '근대', difficulty: 3, description: '서재필 등이 자주 독립·민권 신장을 위해 창립',                  startYear: 1896, endYear: 1898 },
  { title: '독립신문 창간',       era: '근대', difficulty: 3, description: '서재필이 발행한 한국 최초의 한글 신문',                        startYear: 1896, endYear: 1896 },
  { title: '대한제국 수립',       era: '근대', difficulty: 2, description: '고종이 황제로 즉위하고 국호를 대한제국으로 선포',              startYear: 1897, endYear: 1897 },
  { title: '광무개혁',            era: '근대', difficulty: 3, description: '대한제국 시기 추진된 근대화 개혁',                              startYear: 1897, endYear: 1904 },
  { title: '만민공동회 개최',     era: '근대', difficulty: 4, description: '독립협회가 주도한 민중 정치 집회',                              startYear: 1898, endYear: 1898 },
  { title: '을사늑약',            era: '근대', difficulty: 1, description: '일본이 대한제국 외교권을 박탈한 조약',                          startYear: 1905, endYear: 1905 },
  { title: '통감부 설치',         era: '근대', difficulty: 3, description: '일본이 한국 통치를 위해 서울에 설치한 식민 기구',              startYear: 1906, endYear: 1910 },
  { title: '헤이그 특사 파견',    era: '근대', difficulty: 2, description: '고종이 만국평화회의에 이준 등을 파견한 사건',                  startYear: 1907, endYear: 1907 },
  { title: '정미7조약',           era: '근대', difficulty: 4, description: '일본이 한국의 내정을 장악한 조약',                              startYear: 1907, endYear: 1907 },
  { title: '군대 해산',           era: '근대', difficulty: 3, description: '정미7조약 이후 대한제국 군대가 강제 해산됨',                    startYear: 1907, endYear: 1907 },
  { title: '안중근 의거',         era: '근대', difficulty: 2, description: '안중근이 하얼빈에서 이토 히로부미를 사살',                      startYear: 1909, endYear: 1909 },
  { title: '경술국치',            era: '근대', difficulty: 1, description: '한일 강제 병합으로 대한제국이 일본에 강점됨',                  startYear: 1910, endYear: 1910 },
  { title: '105인 사건',          era: '근대', difficulty: 4, description: '데라우치 총독 암살 음모를 빌미로 한 독립운동가 탄압',          startYear: 1911, endYear: 1911 },
  { title: '토지조사사업',        era: '근대', difficulty: 3, description: '일제가 시행한 식민지 토지 수탈 정책',                          startYear: 1910, endYear: 1918 },
  { title: '3·1 운동',            era: '근대', difficulty: 1, description: '일제 강점기, 전국적으로 일어난 민족 독립 만세 운동',           startYear: 1919, endYear: 1919 },
  { title: '대한민국 임시정부 수립', era: '근대', difficulty: 2, description: '3·1 운동 후 상하이에 세워진 망명 임시 정부',                  startYear: 1919, endYear: 1919 },
  { title: '봉오동 전투',         era: '근대', difficulty: 2, description: '홍범도 부대가 봉오동에서 일본군을 격파한 전투',                startYear: 1920, endYear: 1920 },
  { title: '청산리 전투',         era: '근대', difficulty: 2, description: '김좌진·홍범도 부대가 청산리에서 일본군 대파',                  startYear: 1920, endYear: 1920 },
  { title: '6·10 만세운동',       era: '근대', difficulty: 2, description: '순종 인산일에 일어난 학생 중심의 만세 운동',                   startYear: 1926, endYear: 1926 },
  { title: '신간회 창립',         era: '근대', difficulty: 3, description: '민족주의·사회주의가 연합한 독립운동 단체',                      startYear: 1927, endYear: 1931 },
  { title: '광주학생항일운동',    era: '근대', difficulty: 3, description: '광주에서 시작된 학생 항일 운동',                                startYear: 1929, endYear: 1929 },
  { title: '한국독립당 결성',     era: '근대', difficulty: 5, description: '임시정부 중심의 민족주의 독립운동 정당',                        startYear: 1930, endYear: 1930 },
  { title: '만주사변',            era: '근대', difficulty: 3, description: '일본 관동군이 만주를 점령한 사건',                              startYear: 1931, endYear: 1931 },
  { title: '한인애국단 조직',     era: '근대', difficulty: 3, description: '김구가 상하이에서 조직한 독립운동 비밀 결사',                   startYear: 1931, endYear: 1931 },
  { title: '이봉창 의거',         era: '근대', difficulty: 3, description: '이봉창이 도쿄에서 일왕에게 폭탄 투척',                          startYear: 1932, endYear: 1932 },
  { title: '윤봉길 의거',         era: '근대', difficulty: 2, description: '윤봉길이 상하이 홍커우 공원에서 폭탄 의거',                    startYear: 1932, endYear: 1932 },
  { title: '중일전쟁 발발',       era: '근대', difficulty: 3, description: '일본이 중국 본토를 침략하며 시작된 전쟁',                      startYear: 1937, endYear: 1937 },
  { title: '국가총동원법',        era: '근대', difficulty: 4, description: '일제가 인적·물적 자원을 총동원하기 위해 제정한 법',            startYear: 1938, endYear: 1938 },
  { title: '광복군 창설',         era: '근대', difficulty: 3, description: '임시정부가 충칭에서 조직한 정규 군대',                          startYear: 1940, endYear: 1940 },
  { title: '창씨개명 강요',       era: '근대', difficulty: 3, description: '조선인의 성과 이름을 일본식으로 강요한 정책',                  startYear: 1940, endYear: 1940 },
  { title: '조선어학회 사건',     era: '근대', difficulty: 3, description: '한글 연구 학자들을 일제가 탄압한 사건',                        startYear: 1942, endYear: 1942 },
  { title: '카이로 회담',         era: '근대', difficulty: 4, description: '한국 독립을 처음 국제적으로 약속한 회담',                      startYear: 1943, endYear: 1943 },
  { title: '광복',                era: '근대', difficulty: 1, description: '일본의 항복으로 한국이 35년 만에 독립',                        startYear: 1945, endYear: 1945 },
  { title: '모스크바 3국 외상회의', era: '근대', difficulty: 3, description: '한반도 신탁통치안이 결정된 회의',                              startYear: 1945, endYear: 1945 },
];

// 사건 정렬 모드의 라운드 데이터 (시대별 사건 묶음)
// 아직 { text, year } 형식 — 추후 통일 예정
const ROUNDS = [
  {
    era: '개항기',
    events: [
      { text: '강화도 조약 체결', year: 1876 },
      { text: '임오군란',         year: 1882 },
      { text: '갑신정변',         year: 1884 },
      { text: '동학농민운동',     year: 1894 },
      { text: '을미사변',         year: 1895 },
    ],
  },
  {
    era: '대한제국~국권피탈',
    events: [
      { text: '대한제국 수립',       year: 1897 },
      { text: '을사늑약',            year: 1905 },
      { text: '헤이그 특사 파견',    year: 1907 },
      { text: '안중근 의거',         year: 1909 },
      { text: '경술국치',            year: 1910 },
    ],
  },
  {
    era: '일제강점기',
    events: [
      { text: '3·1 운동',            year: 1919 },
      { text: '봉오동 전투',         year: 1920 },
      { text: '6·10 만세운동',       year: 1926 },
      { text: '광주학생항일운동',    year: 1929 },
      { text: '한인애국단 조직',     year: 1931 },
    ],
  },
];
