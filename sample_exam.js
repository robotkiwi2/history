// 한능검 기출 자동 변환 — tools/import_exam_csv.js. 직접 수정하지 마세요.
// 생성: 키워드 348개 / 디테일 1503개 (보기 옵션만 있던 42행 제외, 라벨 prefix 56행 정제)
// 매핑 누락 키워드(fallback meta 사용 — 보강 권장): 0개

const EXAM_KEYWORDS = [
  {
    "type": "시대",
    "kind": "keyword",
    "title": "신석기 시대",
    "description": "",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 3,
    "era": "선사시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "청동기 시대",
    "description": "",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 3,
    "era": "선사시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "구석기 시대",
    "description": "",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 3,
    "era": "선사시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "철기 시대",
    "description": "",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 3,
    "era": "선사시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "고조선의 변천",
    "description": "",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "삼한/부여",
    "description": "",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "옥저",
    "description": "",
    "startYear": -200,
    "endYear": 285,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "신라",
    "description": "",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "고구려",
    "description": "",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "동예",
    "description": "",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 진흥왕",
    "description": "",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 문주왕",
    "description": "",
    "startYear": 475,
    "endYear": 477,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 무령왕",
    "description": "",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 무왕",
    "description": "",
    "startYear": 600,
    "endYear": 641,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 근초고왕",
    "description": "",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "고조선",
    "description": "",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "백제 사비기",
    "description": "",
    "startYear": 538,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "통일신라",
    "description": "",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고구려 고국천왕",
    "description": "",
    "startYear": 179,
    "endYear": 197,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "삼국 통일 과정",
    "description": "",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 지증왕",
    "description": "",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "살수대첩",
    "description": "",
    "startYear": 612,
    "endYear": 612,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "광개토대왕",
    "description": "",
    "startYear": 391,
    "endYear": 413,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "신라 하대",
    "description": "",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 선덕여왕",
    "description": "",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 신문왕",
    "description": "",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 진평왕",
    "description": "",
    "startYear": 579,
    "endYear": 632,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 법흥왕",
    "description": "",
    "startYear": 514,
    "endYear": 540,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 광종",
    "description": "",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 정종",
    "description": "",
    "startYear": 945,
    "endYear": 949,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 성종",
    "description": "",
    "startYear": 981,
    "endYear": 997,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 예종",
    "description": "",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 태조",
    "description": "",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "고려의 경제",
    "description": "",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "조선 후기",
    "description": "",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "가야",
    "description": "",
    "startYear": 42,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "여진 대응",
    "description": "",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "몽골 침입",
    "description": "",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 우왕",
    "description": "",
    "startYear": 1374,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "거란 2차 침입",
    "description": "",
    "startYear": 1010,
    "endYear": 1011,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "고려의 사회",
    "description": "",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "발해",
    "description": "",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 명종",
    "description": "",
    "startYear": 1545,
    "endYear": 1567,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 공민왕",
    "description": "",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "삼별초 항쟁",
    "description": "",
    "startYear": 1270,
    "endYear": 1273,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 충렬왕",
    "description": "",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "만적의 난",
    "description": "",
    "startYear": 1198,
    "endYear": 1198,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "고려 의천",
    "description": "",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "일연",
    "description": "",
    "startYear": 1206,
    "endYear": 1289,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "요세",
    "description": "",
    "startYear": 1163,
    "endYear": 1245,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "혜심",
    "description": "",
    "startYear": 1178,
    "endYear": 1234,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "균여",
    "description": "",
    "startYear": 923,
    "endYear": 973,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "이자겸/묘청",
    "description": "",
    "startYear": 1126,
    "endYear": 1136,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최승로",
    "description": "",
    "startYear": 927,
    "endYear": 989,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최무선",
    "description": "",
    "startYear": 1325,
    "endYear": 1395,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "강조",
    "description": "",
    "startYear": 1009,
    "endYear": 1010,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최충헌",
    "description": "",
    "startYear": 1149,
    "endYear": 1219,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 세조",
    "description": "",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 인조",
    "description": "",
    "startYear": 1623,
    "endYear": 1649,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "경신환국",
    "description": "",
    "startYear": 1680,
    "endYear": 1680,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "기묘사화",
    "description": "",
    "startYear": 1519,
    "endYear": 1519,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "기축옥사",
    "description": "",
    "startYear": 1589,
    "endYear": 1589,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "조선 의금부",
    "description": "",
    "startYear": 1414,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "한성부",
    "description": "",
    "startYear": 1394,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "관상감",
    "description": "",
    "startYear": 1466,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "규장각",
    "description": "",
    "startYear": 1776,
    "endYear": 1910,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "홍문관",
    "description": "",
    "startYear": 1463,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "조선 신숙주",
    "description": "",
    "startYear": 1417,
    "endYear": 1475,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "주세붕",
    "description": "",
    "startYear": 1495,
    "endYear": 1554,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "송시열",
    "description": "",
    "startYear": 1607,
    "endYear": 1689,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이이",
    "description": "",
    "startYear": 1536,
    "endYear": 1584,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "김장생",
    "description": "",
    "startYear": 1548,
    "endYear": 1631,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "임진왜란",
    "description": "",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "정묘호란",
    "description": "",
    "startYear": 1627,
    "endYear": 1627,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "병자호란",
    "description": "",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "4군 6진",
    "description": "",
    "startYear": 1433,
    "endYear": 1449,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 세종",
    "description": "",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 정조",
    "description": "",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 경종",
    "description": "",
    "startYear": 1720,
    "endYear": 1724,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 숙종",
    "description": "",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 선조",
    "description": "",
    "startYear": 1567,
    "endYear": 1608,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 영조",
    "description": "",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최충",
    "description": "",
    "startYear": 984,
    "endYear": 1068,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "고려 후기",
    "description": "",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "망이·망소이의 난",
    "description": "",
    "startYear": 1176,
    "endYear": 1177,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "고려 의학",
    "description": "",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "강화도 조약",
    "description": "",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "조프 수호 통상 조약",
    "description": "",
    "startYear": 1886,
    "endYear": 1886,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "조미수호통상조약",
    "description": "",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "제물포 조약",
    "description": "",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "조청상민수륙무역장정",
    "description": "",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "갑신정변",
    "description": "",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "병인양요",
    "description": "",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "신미양요",
    "description": "",
    "startYear": 1871,
    "endYear": 1871,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "임오군란",
    "description": "",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "개혁",
    "kind": "keyword",
    "title": "갑오개혁",
    "description": "",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "근대 교육 기관",
    "description": "",
    "startYear": 1883,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "신민회",
    "description": "",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "이화학당",
    "description": "",
    "startYear": 1886,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "동문학",
    "description": "",
    "startYear": 1883,
    "endYear": 1886,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "개혁",
    "kind": "keyword",
    "title": "화폐 정리 사업",
    "description": "",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "삼국 간섭",
    "description": "",
    "startYear": 1895,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "임술농민봉기",
    "description": "",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "독립협회",
    "description": "",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "동학 농민 운동",
    "description": "",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "정미의병 배경",
    "description": "",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "미쓰야 협정",
    "description": "",
    "startYear": 1925,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "거문도 사건",
    "description": "",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "경술국치",
    "description": "",
    "startYear": 1910,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "기유각서",
    "description": "",
    "startYear": 1909,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "대한매일신보",
    "description": "",
    "startYear": 1904,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "동아일보",
    "description": "",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "만세보",
    "description": "",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "한성주보",
    "description": "",
    "startYear": 1886,
    "endYear": 1888,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "독립신문",
    "description": "",
    "startYear": 1896,
    "endYear": 1899,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "안창호 활동",
    "description": "",
    "startYear": 1878,
    "endYear": 1938,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "대한광복회",
    "description": "",
    "startYear": 1915,
    "endYear": 1918,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "박은식",
    "description": "",
    "startYear": 1859,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "신채호",
    "description": "",
    "startYear": 1880,
    "endYear": 1936,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "헤이그 특사",
    "description": "",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "1910년대 통치",
    "description": "",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "치안유지법",
    "description": "",
    "startYear": 1925,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "대한제국",
    "description": "",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "1920년대 사회운동",
    "description": "",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "민족말살통치기",
    "description": "",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "농민 운동",
    "description": "",
    "startYear": 1920,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "개혁",
    "kind": "keyword",
    "title": "광무개혁",
    "description": "",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "회사령",
    "description": "",
    "startYear": 1910,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "농광 회사",
    "description": "",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "조선 물산 공진회",
    "description": "",
    "startYear": 1915,
    "endYear": 1915,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "6·10 만세 운동",
    "description": "",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "국채 보상 운동",
    "description": "",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "3·1 운동",
    "description": "",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "광주학생항일운동",
    "description": "",
    "startYear": 1929,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "형평 운동",
    "description": "",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "보안회",
    "description": "",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "대한자강회",
    "description": "",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "원산 총파업",
    "description": "",
    "startYear": 1929,
    "endYear": 1929,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "105인 사건",
    "description": "",
    "startYear": 1911,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "근우회",
    "description": "",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "조선어 연구회",
    "description": "",
    "startYear": 1921,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "진단학회",
    "description": "",
    "startYear": 1934,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "국문연구소",
    "description": "",
    "startYear": 1907,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "조선의용대",
    "description": "",
    "startYear": 1938,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "청산리 전투",
    "description": "",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "동북 항일 연군",
    "description": "",
    "startYear": 1936,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "한국독립군",
    "description": "",
    "startYear": 1930,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "조선혁명군",
    "description": "",
    "startYear": 1929,
    "endYear": 1938,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "근대 사회상",
    "description": "",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "현대 사회상",
    "description": "",
    "startYear": 1950,
    "endYear": 2000,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "5·10 총선거",
    "description": "",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "6·3 시위",
    "description": "",
    "startYear": 1964,
    "endYear": 1964,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "발췌 개헌",
    "description": "",
    "startYear": 1952,
    "endYear": 1952,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "1985년 총선",
    "description": "",
    "startYear": 1985,
    "endYear": 1985,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "유신헌법",
    "description": "",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "6·25 전쟁",
    "description": "",
    "startYear": 1950,
    "endYear": 1953,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "애치슨 라인",
    "description": "",
    "startYear": 1950,
    "endYear": 1950,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "한미 상호 방위 조약",
    "description": "",
    "startYear": 1953,
    "endYear": 1953,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "여수 순천 사건",
    "description": "",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "모스크바 3국 외상회의",
    "description": "",
    "startYear": 1945,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "4·19 혁명",
    "description": "",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "유신 체제",
    "description": "",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "5·18 광주민주화운동",
    "description": "",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "부마민주항쟁",
    "description": "",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "6월 민주항쟁",
    "description": "",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "박정희 정부",
    "description": "",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "김대중 정부",
    "description": "",
    "startYear": 1998,
    "endYear": 2003,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "제5공화국 헌법",
    "description": "",
    "startYear": 1980,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "사사오입 개헌",
    "description": "",
    "startYear": 1954,
    "endYear": 1954,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "3선 개헌",
    "description": "",
    "startYear": 1969,
    "endYear": 1969,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "제2공화국 헌법",
    "description": "",
    "startYear": 1960,
    "endYear": 1961,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "문재인 정부 통일",
    "description": "",
    "startYear": 2017,
    "endYear": 2022,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "노태우 정부",
    "description": "",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "전두환 정부",
    "description": "",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "부산 지역 역사",
    "description": "",
    "startYear": 1900,
    "endYear": 2000,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "탄금대 전투",
    "description": "",
    "startYear": 1592,
    "endYear": 1592,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "2·28 민주 운동",
    "description": "",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "김사미·효심의 난",
    "description": "",
    "startYear": 1193,
    "endYear": 1194,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "YH 무역 사건",
    "description": "",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고구려 소수림왕",
    "description": "",
    "startYear": 371,
    "endYear": 384,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고구려 장수왕",
    "description": "",
    "startYear": 413,
    "endYear": 491,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 성왕",
    "description": "",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "통일신라 원성왕",
    "description": "",
    "startYear": 785,
    "endYear": 798,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "백제",
    "description": "",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "당의 안동도호부 설치",
    "description": "",
    "startYear": 668,
    "endYear": 668,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "매소성·기벌포 전투",
    "description": "",
    "startYear": 675,
    "endYear": 676,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "과전법",
    "description": "",
    "startYear": 1391,
    "endYear": 1466,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "의상",
    "description": "",
    "startYear": 625,
    "endYear": 702,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "원효",
    "description": "",
    "startYear": 617,
    "endYear": 686,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "원광",
    "description": "",
    "startYear": 542,
    "endYear": 640,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "유정",
    "description": "",
    "startYear": 1544,
    "endYear": 1610,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "궁예",
    "description": "",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "후백제 견훤",
    "description": "",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 경순왕",
    "description": "",
    "startYear": 927,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "거란 1차 침입",
    "description": "",
    "startYear": 993,
    "endYear": 994,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "발해 무왕",
    "description": "",
    "startYear": 719,
    "endYear": 737,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "황산벌 전투",
    "description": "",
    "startYear": 660,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "상평창",
    "description": "",
    "startYear": 993,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "어사대",
    "description": "",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "식목도감",
    "description": "",
    "startYear": 1095,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "고려 화폐",
    "description": "",
    "startYear": 996,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "중국 화폐",
    "description": "",
    "startYear": -300,
    "endYear": 200,
    "difficulty": 3,
    "era": "선사시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "직지심체요절",
    "description": "",
    "startYear": 1377,
    "endYear": 1377,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "삼국사기",
    "description": "",
    "startYear": 1145,
    "endYear": 1145,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "팔만대장경",
    "description": "",
    "startYear": 1236,
    "endYear": 1251,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "삼국유사",
    "description": "",
    "startYear": 1281,
    "endYear": 1281,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "지눌",
    "description": "",
    "startYear": 1158,
    "endYear": 1210,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "혜초",
    "description": "",
    "startYear": 704,
    "endYear": 787,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "국가",
    "kind": "keyword",
    "title": "고려",
    "description": "",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "정도전",
    "description": "",
    "startYear": 1342,
    "endYear": 1398,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "조광조",
    "description": "",
    "startYear": 1482,
    "endYear": 1519,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "박제가",
    "description": "",
    "startYear": 1750,
    "endYear": 1805,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "채제공",
    "description": "",
    "startYear": 1720,
    "endYear": 1799,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 성종",
    "description": "",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "성균관",
    "description": "",
    "startYear": 1398,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "종묘",
    "description": "",
    "startYear": 1394,
    "endYear": 1394,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "사직단",
    "description": "",
    "startYear": 1395,
    "endYear": 1395,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "소수 서원",
    "description": "",
    "startYear": 1543,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "승정원",
    "description": "",
    "startYear": 1405,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "춘추관",
    "description": "",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "의정부",
    "description": "",
    "startYear": 1400,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "대동법",
    "description": "",
    "startYear": 1608,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "균역법",
    "description": "",
    "startYear": 1750,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "영정법",
    "description": "",
    "startYear": 1635,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "흥선대원군",
    "description": "",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "초조대장경",
    "description": "",
    "startYear": 1011,
    "endYear": 1087,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "전시과",
    "description": "",
    "startYear": 976,
    "endYear": 1391,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "암태도 소작쟁의",
    "description": "",
    "startYear": 1923,
    "endYear": 1924,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "항일 의병",
    "description": "",
    "startYear": 1895,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "을미의병",
    "description": "",
    "startYear": 1895,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "을사의병",
    "description": "",
    "startYear": 1905,
    "endYear": 1906,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "정미의병",
    "description": "",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "조선어학회",
    "description": "",
    "startYear": 1931,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "경성방송국",
    "description": "",
    "startYear": 1927,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "영화 아리랑",
    "description": "",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "브나로드 운동",
    "description": "",
    "startYear": 1931,
    "endYear": 1934,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "민립 대학 설립 운동",
    "description": "",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "독립문",
    "description": "",
    "startYear": 1897,
    "endYear": 1897,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "광화문",
    "description": "",
    "startYear": 1395,
    "endYear": 1395,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "대한문",
    "description": "",
    "startYear": 1906,
    "endYear": 1906,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "숭례문",
    "description": "",
    "startYear": 1398,
    "endYear": 1398,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "흥사단",
    "description": "",
    "startYear": 1913,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "독립의군부",
    "description": "",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "안중근",
    "description": "",
    "startYear": 1879,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "윤봉길",
    "description": "",
    "startYear": 1908,
    "endYear": 1932,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이회영",
    "description": "",
    "startYear": 1867,
    "endYear": 1932,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최재형",
    "description": "",
    "startYear": 1860,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "기기창",
    "description": "",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "홍경래의 난",
    "description": "",
    "startYear": 1811,
    "endYear": 1812,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "일제강점기 사회상",
    "description": "",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "새마을 운동",
    "description": "",
    "startYear": 1970,
    "endYear": 1985,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "별기군",
    "description": "",
    "startYear": 1881,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "육영공원",
    "description": "",
    "startYear": 1886,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "윤동주",
    "description": "",
    "startYear": 1917,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이상화",
    "description": "",
    "startYear": 1901,
    "endYear": 1943,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이육사",
    "description": "",
    "startYear": 1904,
    "endYear": 1944,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "한용운",
    "description": "",
    "startYear": 1879,
    "endYear": 1944,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "한인 애국단",
    "description": "",
    "startYear": 1931,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "중광단",
    "description": "",
    "startYear": 1911,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "황국 중앙 총상회",
    "description": "",
    "startYear": 1898,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "전환국",
    "description": "",
    "startYear": 1883,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "대한민국 임시정부",
    "description": "",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "닉슨 독트린",
    "description": "",
    "startYear": 1969,
    "endYear": 1969,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "브라운 각서",
    "description": "",
    "startYear": 1966,
    "endYear": 1966,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "조선 건국 동맹",
    "description": "",
    "startYear": 1944,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "비례 대표제",
    "description": "",
    "startYear": 1963,
    "endYear": 2024,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "김영삼 정부",
    "description": "",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "1950년대 경제",
    "description": "",
    "startYear": 1950,
    "endYear": 1959,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "노무현 정부",
    "description": "",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "1980년대 경제",
    "description": "",
    "startYear": 1980,
    "endYear": 1989,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "해양 인물",
    "description": "",
    "startYear": 500,
    "endYear": 1600,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이순신",
    "description": "",
    "startYear": 1545,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이사부",
    "description": "",
    "startYear": 480,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "장보고",
    "description": "",
    "startYear": 787,
    "endYear": 846,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "5·18 민주화 운동",
    "description": "",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 침류왕",
    "description": "",
    "startYear": 384,
    "endYear": 385,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "신라 문무왕",
    "description": "",
    "startYear": 661,
    "endYear": 681,
    "difficulty": 3,
    "era": "신라시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "서희",
    "description": "",
    "startYear": 942,
    "endYear": 998,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "화통도감",
    "description": "",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "진관 체제",
    "description": "",
    "startYear": 1457,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "안향",
    "description": "",
    "startYear": 1243,
    "endYear": 1306,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 태종",
    "description": "",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 충선왕",
    "description": "",
    "startYear": 1308,
    "endYear": 1313,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "김부식",
    "description": "",
    "startYear": 1075,
    "endYear": 1151,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "사간원",
    "description": "",
    "startYear": 1401,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "승문원",
    "description": "",
    "startYear": 1410,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "무오사화",
    "description": "",
    "startYear": 1498,
    "endYear": 1498,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "류성룡",
    "description": "",
    "startYear": 1542,
    "endYear": 1607,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이황",
    "description": "",
    "startYear": 1501,
    "endYear": 1570,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "정상기",
    "description": "",
    "startYear": 1678,
    "endYear": 1752,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "광해군",
    "description": "",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 효종",
    "description": "",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 순조",
    "description": "",
    "startYear": 1800,
    "endYear": 1834,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "정약용",
    "description": "",
    "startYear": 1762,
    "endYear": 1836,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "김정희",
    "description": "",
    "startYear": 1786,
    "endYear": 1856,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최익현",
    "description": "",
    "startYear": 1833,
    "endYear": 1906,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "충주 지역 역사",
    "description": "",
    "startYear": 500,
    "endYear": 1900,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "이괄의 난",
    "description": "",
    "startYear": 1624,
    "endYear": 1624,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "신유박해",
    "description": "",
    "startYear": 1801,
    "endYear": 1801,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "오페르트 사건",
    "description": "",
    "startYear": 1868,
    "endYear": 1868,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "병인박해",
    "description": "",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "유물",
    "kind": "keyword",
    "title": "조선책략",
    "description": "",
    "startYear": 1880,
    "endYear": 1880,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "개혁",
    "kind": "keyword",
    "title": "을미개혁",
    "description": "",
    "startYear": 1895,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "박문국",
    "description": "",
    "startYear": 1883,
    "endYear": 1888,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "통리기무아문",
    "description": "",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "대조선 국민 군단",
    "description": "",
    "startYear": 1914,
    "endYear": 1917,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "2·8 독립 선언",
    "description": "",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "대한 광복군 정부",
    "description": "",
    "startYear": 1914,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "을사늑약",
    "description": "",
    "startYear": 1905,
    "endYear": 1905,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "조약",
    "kind": "keyword",
    "title": "정미7조약",
    "description": "",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "원산학사",
    "description": "",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "의열단",
    "description": "",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "동제사",
    "description": "",
    "startYear": 1912,
    "endYear": 1917,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "토지조사사업",
    "description": "",
    "startYear": 1912,
    "endYear": 1918,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "신간회",
    "description": "",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "농촌 진흥 운동",
    "description": "",
    "startYear": 1932,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "신한 공사",
    "description": "",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "광복군 창설",
    "description": "",
    "startYear": 1940,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "조소앙",
    "description": "",
    "startYear": 1887,
    "endYear": 1958,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "민족 혁명당",
    "description": "",
    "startYear": 1935,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "개혁",
    "kind": "keyword",
    "title": "농지 개혁",
    "description": "",
    "startYear": 1949,
    "endYear": 1950,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "제도",
    "kind": "keyword",
    "title": "산미 증식 계획",
    "description": "",
    "startYear": 1920,
    "endYear": 1934,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "여운형",
    "description": "",
    "startYear": 1886,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "이승만 정부",
    "description": "",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고구려 미천왕",
    "description": "",
    "startYear": 300,
    "endYear": 331,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "백제 동성왕",
    "description": "",
    "startYear": 479,
    "endYear": 501,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "고려 숙종",
    "description": "",
    "startYear": 1095,
    "endYear": 1105,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "최우",
    "description": "",
    "startYear": 1219,
    "endYear": 1249,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "개경 지역 역사",
    "description": "",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "연산군",
    "description": "",
    "startYear": 1494,
    "endYear": 1506,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "이익",
    "description": "",
    "startYear": 1681,
    "endYear": 1763,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "홍대용",
    "description": "",
    "startYear": 1731,
    "endYear": 1783,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "박지원",
    "description": "",
    "startYear": 1737,
    "endYear": 1805,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "유수원",
    "description": "",
    "startYear": 1694,
    "endYear": 1755,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "청일전쟁 발발",
    "description": "",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "운동",
    "kind": "keyword",
    "title": "물산 장려 운동",
    "description": "",
    "startYear": 1920,
    "endYear": 1932,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "제주 4·3 사건",
    "description": "",
    "startYear": 1948,
    "endYear": 1949,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "시대",
    "kind": "keyword",
    "title": "박근혜 정부",
    "description": "",
    "startYear": 2013,
    "endYear": 2017,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "사건",
    "kind": "keyword",
    "title": "위화도 회군",
    "description": "",
    "startYear": 1388,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "사헌부",
    "description": "",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "비변사",
    "description": "",
    "startYear": 1517,
    "endYear": 1865,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "러일전쟁",
    "description": "",
    "startYear": 1904,
    "endYear": 1905,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "한성 전기 회사",
    "description": "",
    "startYear": 1898,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "숭무 학교",
    "description": "",
    "startYear": 1910,
    "endYear": 1913,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "인물",
    "kind": "keyword",
    "title": "백남운",
    "description": "",
    "startYear": 1894,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "전쟁",
    "kind": "keyword",
    "title": "봉오동 전투",
    "description": "",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": []
  },
  {
    "type": "기관",
    "kind": "keyword",
    "title": "경재소",
    "description": "",
    "startYear": 1392,
    "endYear": 1603,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  },
  {
    "type": "왕",
    "kind": "keyword",
    "title": "조선 철종",
    "description": "",
    "startYear": 1849,
    "endYear": 1864,
    "difficulty": 3,
    "era": "조선시대",
    "tags": []
  }
];

const EXAM_DETAILS = [
  {
    "id": "78회_q1_0",
    "type": "사건",
    "kind": "detail",
    "title": "청동 방울 등을 의례 도구로 이용하였다.",
    "description": "청동 방울 등을 의례 도구로 이용하였다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "78회 심화 Q1 X"
  },
  {
    "id": "78회_q1_1",
    "type": "사건",
    "kind": "detail",
    "title": "주먹도끼 등 뗀석기를 만들기 시작하였다.",
    "description": "주먹도끼 등 뗀석기를 만들기 시작하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "78회 심화 Q1 X"
  },
  {
    "id": "78회_q1_2",
    "type": "사건",
    "kind": "detail",
    "title": "거푸집을 사용하여 세형 동검을 제작하였다.",
    "description": "거푸집을 사용하여 세형 동검을 제작하였다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "78회 심화 Q1 X"
  },
  {
    "id": "78회_q1_3",
    "type": "사건",
    "kind": "detail",
    "title": "쟁기 쇠스랑 등의 철제 농기구를 사용하였다.",
    "description": "쟁기 쇠스랑 등의 철제 농기구를 사용하였다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "78회 심화 Q1 X"
  },
  {
    "id": "78회_q1_4",
    "type": "사건",
    "kind": "detail",
    "title": "가락바퀴와 뼈바늘을 이용하여 옷을 만들었다.",
    "description": "가락바퀴와 뼈바늘을 이용하여 옷을 만들었다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "78회 심화 Q1 O"
  },
  {
    "id": "78회_q2_5",
    "type": "사건",
    "kind": "detail",
    "title": "연의 장수 진개가 고조선을 침략하였다.",
    "description": "연의 장수 진개가 고조선을 침략하였다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 4,
    "era": "고조선",
    "tags": [
      "고조선의 변천"
    ],
    "_src": "78회 심화 Q2 X"
  },
  {
    "id": "78회_q2_6",
    "type": "사건",
    "kind": "detail",
    "title": "우거왕이 한 무제가 파견한 군대에 맞서 싸웠다.",
    "description": "우거왕이 한 무제가 파견한 군대에 맞서 싸웠다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 4,
    "era": "고조선",
    "tags": [
      "고조선의 변천"
    ],
    "_src": "78회 심화 Q2 X"
  },
  {
    "id": "78회_q2_7",
    "type": "사건",
    "kind": "detail",
    "title": "위만이 진번과 임둔을 복속시키고 세력을 확장하였다.",
    "description": "위만이 진번과 임둔을 복속시키고 세력을 확장하였다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 4,
    "era": "고조선",
    "tags": [
      "고조선의 변천"
    ],
    "_src": "78회 심화 Q2 X"
  },
  {
    "id": "78회_q3_8",
    "type": "사건",
    "kind": "detail",
    "title": "신성 지역인 소도가 있었다.",
    "description": "신성 지역인 소도가 있었다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "78회 심화 Q3 O"
  },
  {
    "id": "78회_q3_9",
    "type": "사건",
    "kind": "detail",
    "title": "혼인 풍습으로 민며느리제가 있었다.",
    "description": "혼인 풍습으로 민며느리제가 있었다.",
    "startYear": -200,
    "endYear": 285,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "옥저"
    ],
    "_src": "78회 심화 Q3 X"
  },
  {
    "id": "78회_q3_10",
    "type": "사건",
    "kind": "detail",
    "title": "위화부 영객부 등의 관청이 있었다.",
    "description": "위화부 영객부 등의 관청이 있었다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "78회 심화 Q3 X"
  },
  {
    "id": "78회_q3_11",
    "type": "사건",
    "kind": "detail",
    "title": "왕 아래 상가 대로 패자 등의 관직이 있었다.",
    "description": "왕 아래 상가 대로 패자 등의 관직이 있었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "78회 심화 Q3 X"
  },
  {
    "id": "78회_q3_12",
    "type": "사건",
    "kind": "detail",
    "title": "읍락 간의 경계를 중시하는 책화가 있었다.",
    "description": "읍락 간의 경계를 중시하는 책화가 있었다.",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "동예"
    ],
    "_src": "78회 심화 Q3 X"
  },
  {
    "id": "78회_q4_13",
    "type": "사건",
    "kind": "detail",
    "title": "수도를 웅진으로 옮겼다.",
    "description": "수도를 웅진으로 옮겼다.",
    "startYear": 475,
    "endYear": 477,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 문주왕"
    ],
    "_src": "78회 심화 Q4 X"
  },
  {
    "id": "78회_q4_14",
    "type": "사건",
    "kind": "detail",
    "title": "백가의 난을 평정하였다.",
    "description": "백가의 난을 평정하였다.",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 무령왕"
    ],
    "_src": "78회 심화 Q4 X"
  },
  {
    "id": "78회_q4_15",
    "type": "사건",
    "kind": "detail",
    "title": "금마저에 미륵사를 창건하였다.",
    "description": "금마저에 미륵사를 창건하였다.",
    "startYear": 600,
    "endYear": 641,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 무왕"
    ],
    "_src": "78회 심화 Q4 X"
  },
  {
    "id": "78회_q4_16",
    "type": "사건",
    "kind": "detail",
    "title": "고흥에게 서기를 편찬하게 하였다.",
    "description": "고흥에게 서기를 편찬하게 하였다.",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 근초고왕"
    ],
    "_src": "78회 심화 Q4 X"
  },
  {
    "id": "78회_q4_17",
    "type": "사건",
    "kind": "detail",
    "title": "달기를 보내 고구려의 도살성을 점령하였다.",
    "description": "달기를 보내 고구려의 도살성을 점령하였다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "78회 심화 Q4 O"
  },
  {
    "id": "78회_q5_18",
    "type": "사건",
    "kind": "detail",
    "title": "지방의 22담로에 왕족을 파견하였다.",
    "description": "지방의 22담로에 왕족을 파견하였다.",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무령왕"
    ],
    "_src": "78회 심화 Q5 X"
  },
  {
    "id": "78회_q5_19",
    "type": "사건",
    "kind": "detail",
    "title": "태학과 경당을 두어 인재를 양성하였다.",
    "description": "태학과 경당을 두어 인재를 양성하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "78회 심화 Q5 O"
  },
  {
    "id": "78회_q5_20",
    "type": "사건",
    "kind": "detail",
    "title": "10월에 무천이라는 제천 행사를 개최하였다.",
    "description": "10월에 무천이라는 제천 행사를 개최하였다.",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "동예"
    ],
    "_src": "78회 심화 Q5 X"
  },
  {
    "id": "78회_q5_21",
    "type": "사건",
    "kind": "detail",
    "title": "사회 질서를 유지하기 위해 범금 8조를 만들었다.",
    "description": "사회 질서를 유지하기 위해 범금 8조를 만들었다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "78회 심화 Q5 X"
  },
  {
    "id": "78회_q5_22",
    "type": "사건",
    "kind": "detail",
    "title": "물시계인 누각을 만들고 누각박사를 두어 시간을 측정하였...",
    "description": "물시계인 누각을 만들고 누각박사를 두어 시간을 측정하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "78회 심화 Q5 X"
  },
  {
    "id": "78회_q6_23",
    "type": "사건",
    "kind": "detail",
    "title": "서옥제라는 혼인 풍습이 있었다.",
    "description": "서옥제라는 혼인 풍습이 있었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "78회 심화 Q6 X"
  },
  {
    "id": "78회_q6_24",
    "type": "사건",
    "kind": "detail",
    "title": "수도에 서시와 남시를 설치하였다.",
    "description": "수도에 서시와 남시를 설치하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "78회 심화 Q6 X"
  },
  {
    "id": "78회_q6_25",
    "type": "사건",
    "kind": "detail",
    "title": "골품에 따라 관직 승진을 제한하였다.",
    "description": "골품에 따라 관직 승진을 제한하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "78회 심화 Q6 X"
  },
  {
    "id": "78회_q6_26",
    "type": "사건",
    "kind": "detail",
    "title": "6좌평 아래에 달솔 등의 관등이 있었다.",
    "description": "6좌평 아래에 달솔 등의 관등이 있었다.",
    "startYear": 538,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 사비기"
    ],
    "_src": "78회 심화 Q6 O"
  },
  {
    "id": "78회_q6_27",
    "type": "사건",
    "kind": "detail",
    "title": "을파소를 등용하고 진대법을 시행하였다.",
    "description": "을파소를 등용하고 진대법을 시행하였다.",
    "startYear": 179,
    "endYear": 197,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 고국천왕"
    ],
    "_src": "78회 심화 Q6 X"
  },
  {
    "id": "78회_q7_28",
    "type": "사건",
    "kind": "detail",
    "title": "진흥왕이 대가야를 병합하였다.",
    "description": "진흥왕이 대가야를 병합하였다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "78회 심화 Q7 X"
  },
  {
    "id": "78회_q7_29",
    "type": "사건",
    "kind": "detail",
    "title": "이사부가 우산국을 복속시켰다.",
    "description": "이사부가 우산국을 복속시켰다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "78회 심화 Q7 X"
  },
  {
    "id": "78회_q7_30",
    "type": "사건",
    "kind": "detail",
    "title": "을지문덕이 살수에서 대승을 거두었다.",
    "description": "을지문덕이 살수에서 대승을 거두었다.",
    "startYear": 612,
    "endYear": 612,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "살수대첩"
    ],
    "_src": "78회 심화 Q7 X"
  },
  {
    "id": "78회_q7_31",
    "type": "사건",
    "kind": "detail",
    "title": "계백이 이끄는 군대가 황산벌에서 항전하였다.",
    "description": "계백이 이끄는 군대가 황산벌에서 항전하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "78회 심화 Q7 O"
  },
  {
    "id": "78회_q7_32",
    "type": "사건",
    "kind": "detail",
    "title": "광개토 대왕이 신라에 침입한 왜를 격퇴하였다.",
    "description": "광개토 대왕이 신라에 침입한 왜를 격퇴하였다.",
    "startYear": 391,
    "endYear": 413,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "광개토대왕"
    ],
    "_src": "78회 심화 Q7 X"
  },
  {
    "id": "78회_q8_33",
    "type": "사건",
    "kind": "detail",
    "title": "비담과 염종의 난이 진압되었다.",
    "description": "비담과 염종의 난이 진압되었다.",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 선덕여왕"
    ],
    "_src": "78회 심화 Q8 X"
  },
  {
    "id": "78회_q8_34",
    "type": "사건",
    "kind": "detail",
    "title": "김흠돌이 반란을 꾀하다 처형되었다.",
    "description": "김흠돌이 반란을 꾀하다 처형되었다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "78회 심화 Q8 X"
  },
  {
    "id": "78회_q8_35",
    "type": "사건",
    "kind": "detail",
    "title": "김헌창이 웅천주에서 반란을 일으켰다.",
    "description": "김헌창이 웅천주에서 반란을 일으켰다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "78회 심화 Q8 O"
  },
  {
    "id": "78회_q8_36",
    "type": "사건",
    "kind": "detail",
    "title": "원광이 왕명으로 걸사표를 작성하였다.",
    "description": "원광이 왕명으로 걸사표를 작성하였다.",
    "startYear": 579,
    "endYear": 632,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 진평왕"
    ],
    "_src": "78회 심화 Q8 X"
  },
  {
    "id": "78회_q8_37",
    "type": "사건",
    "kind": "detail",
    "title": "이차돈의 순교를 계기로 불교가 공인되었다.",
    "description": "이차돈의 순교를 계기로 불교가 공인되었다.",
    "startYear": 514,
    "endYear": 540,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 법흥왕"
    ],
    "_src": "78회 심화 Q8 X"
  },
  {
    "id": "78회_q11_38",
    "type": "사건",
    "kind": "detail",
    "title": "외침에 대비하여 광군사를 창설하였다.",
    "description": "외침에 대비하여 광군사를 창설하였다.",
    "startYear": 945,
    "endYear": 949,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 정종"
    ],
    "_src": "78회 심화 Q11 X"
  },
  {
    "id": "78회_q11_39",
    "type": "사건",
    "kind": "detail",
    "title": "12목을 설치하고 지방관을 파견하였다.",
    "description": "12목을 설치하고 지방관을 파견하였다.",
    "startYear": 981,
    "endYear": 997,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 성종"
    ],
    "_src": "78회 심화 Q11 X"
  },
  {
    "id": "78회_q11_40",
    "type": "사건",
    "kind": "detail",
    "title": "관학 진흥을 위해 양현고를 설치하였다.",
    "description": "관학 진흥을 위해 양현고를 설치하였다.",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 예종"
    ],
    "_src": "78회 심화 Q11 X"
  },
  {
    "id": "78회_q11_41",
    "type": "사건",
    "kind": "detail",
    "title": "노비안검법을 실시하여 호족 세력을 견제하였다.",
    "description": "노비안검법을 실시하여 호족 세력을 견제하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "78회 심화 Q11 O"
  },
  {
    "id": "78회_q11_42",
    "type": "사건",
    "kind": "detail",
    "title": "정계와 계백료서를 지어 관리의 규범을 제시하였다.",
    "description": "정계와 계백료서를 지어 관리의 규범을 제시하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "78회 심화 Q11 X"
  },
  {
    "id": "78회_q12_43",
    "type": "사건",
    "kind": "detail",
    "title": "덕대의 전문적인 광산 경영이 이루어졌다.",
    "description": "덕대의 전문적인 광산 경영이 이루어졌다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q12 X"
  },
  {
    "id": "78회_q12_44",
    "type": "사건",
    "kind": "detail",
    "title": "고추 담배 등 상품 작물이 재배되었다.",
    "description": "고추 담배 등 상품 작물이 재배되었다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q12 X"
  },
  {
    "id": "78회_q12_45",
    "type": "사건",
    "kind": "detail",
    "title": "벽란도를 통한 국제 무역이 활발하였다.",
    "description": "벽란도를 통한 국제 무역이 활발하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려의 경제"
    ],
    "_src": "78회 심화 Q12 O"
  },
  {
    "id": "78회_q12_46",
    "type": "사건",
    "kind": "detail",
    "title": "덩이쇠 수출을 통해 낙랑과 교역하였다.",
    "description": "덩이쇠 수출을 통해 낙랑과 교역하였다.",
    "startYear": 42,
    "endYear": 562,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "가야"
    ],
    "_src": "78회 심화 Q12 X"
  },
  {
    "id": "78회_q12_47",
    "type": "사건",
    "kind": "detail",
    "title": "청해진을 거점으로 해상 무역을 전개하였다.",
    "description": "청해진을 거점으로 해상 무역을 전개하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "78회 심화 Q12 X"
  },
  {
    "id": "78회_q13_48",
    "type": "사건",
    "kind": "detail",
    "title": "강화도로 도읍을 옮겨 항전하였다.",
    "description": "강화도로 도읍을 옮겨 항전하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "78회 심화 Q13 X"
  },
  {
    "id": "78회_q13_49",
    "type": "사건",
    "kind": "detail",
    "title": "박위가 적의 근거지를 토벌하였다.",
    "description": "박위가 적의 근거지를 토벌하였다.",
    "startYear": 1374,
    "endYear": 1388,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 우왕"
    ],
    "_src": "78회 심화 Q13 X"
  },
  {
    "id": "78회_q13_50",
    "type": "사건",
    "kind": "detail",
    "title": "양규가 곽주성을 급습하여 탈환하였다.",
    "description": "양규가 곽주성을 급습하여 탈환하였다.",
    "startYear": 1010,
    "endYear": 1011,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "거란 2차 침입"
    ],
    "_src": "78회 심화 Q13 X"
  },
  {
    "id": "78회_q13_51",
    "type": "사건",
    "kind": "detail",
    "title": "송문주가 죽주성에서 적군을 격퇴하였다.",
    "description": "송문주가 죽주성에서 적군을 격퇴하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "78회 심화 Q13 X"
  },
  {
    "id": "78회_q13_52",
    "type": "사건",
    "kind": "detail",
    "title": "동북 9성을 축조하고 경계를 알리는 비석을 건립하였다.",
    "description": "동북 9성을 축조하고 경계를 알리는 비석을 건립하였다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "78회 심화 Q13 O"
  },
  {
    "id": "78회_q15_53",
    "type": "사건",
    "kind": "detail",
    "title": "주자감에서 공부하는 학생이 있었다.",
    "description": "주자감에서 공부하는 학생이 있었다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "78회 심화 Q15 X"
  },
  {
    "id": "78회_q15_54",
    "type": "사건",
    "kind": "detail",
    "title": "구황촬요를 읽고 있는 지방관이 있었다.",
    "description": "구황촬요를 읽고 있는 지방관이 있었다.",
    "startYear": 1545,
    "endYear": 1567,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 명종"
    ],
    "_src": "78회 심화 Q15 X"
  },
  {
    "id": "78회_q15_55",
    "type": "사건",
    "kind": "detail",
    "title": "시장을 감독하는 동시전의 관리가 있었다.",
    "description": "시장을 감독하는 동시전의 관리가 있었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "78회 심화 Q15 X"
  },
  {
    "id": "78회_q15_56",
    "type": "사건",
    "kind": "detail",
    "title": "제위보에서 곡식을 지급받는 농민이 있었다.",
    "description": "제위보에서 곡식을 지급받는 농민이 있었다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려의 사회"
    ],
    "_src": "78회 심화 Q15 O"
  },
  {
    "id": "78회_q15_57",
    "type": "사건",
    "kind": "detail",
    "title": "세책가에서 춘향전을 빌리는 부녀자가 있었다.",
    "description": "세책가에서 춘향전을 빌리는 부녀자가 있었다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q15 X"
  },
  {
    "id": "78회_q16_58",
    "type": "사건",
    "kind": "detail",
    "title": "배중손이 진도 용장성에서 항전하였다.",
    "description": "배중손이 진도 용장성에서 항전하였다.",
    "startYear": 1270,
    "endYear": 1273,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "삼별초 항쟁"
    ],
    "_src": "78회 심화 Q16 X"
  },
  {
    "id": "78회_q16_59",
    "type": "사건",
    "kind": "detail",
    "title": "최영이 홍산 전투에서 큰 승리를 거두었다.",
    "description": "최영이 홍산 전투에서 큰 승리를 거두었다.",
    "startYear": 1374,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 우왕"
    ],
    "_src": "78회 심화 Q16 X"
  },
  {
    "id": "78회_q16_60",
    "type": "사건",
    "kind": "detail",
    "title": "유인우 이자춘 등이 쌍성총관부를 수복하였다.",
    "description": "유인우 이자춘 등이 쌍성총관부를 수복하였다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "78회 심화 Q16 O"
  },
  {
    "id": "78회_q16_61",
    "type": "사건",
    "kind": "detail",
    "title": "김방경이 이끄는 군대가 일본 원정에 참여하였다.",
    "description": "김방경이 이끄는 군대가 일본 원정에 참여하였다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "78회 심화 Q16 X"
  },
  {
    "id": "78회_q16_62",
    "type": "사건",
    "kind": "detail",
    "title": "만적이 개경에서 노비를 모아 반란을 모의하였다.",
    "description": "만적이 개경에서 노비를 모아 반란을 모의하였다.",
    "startYear": 1198,
    "endYear": 1198,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "만적의 난"
    ],
    "_src": "78회 심화 Q16 X"
  },
  {
    "id": "78회_q17_63",
    "type": "사건",
    "kind": "detail",
    "title": "불교 설화를 중심으로 삼국유사를 지었다.",
    "description": "불교 설화를 중심으로 삼국유사를 지었다.",
    "startYear": 1206,
    "endYear": 1289,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "일연"
    ],
    "_src": "78회 심화 Q17 X"
  },
  {
    "id": "78회_q17_64",
    "type": "사건",
    "kind": "detail",
    "title": "백화 신앙을 바탕으로 백련 결사를 이끌었다.",
    "description": "백화 신앙을 바탕으로 백련 결사를 이끌었다.",
    "startYear": 1163,
    "endYear": 1245,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "요세"
    ],
    "_src": "78회 심화 Q17 X"
  },
  {
    "id": "78회_q17_65",
    "type": "사건",
    "kind": "detail",
    "title": "선문염송집을 편찬하고 유불 일치설을 주장하였다.",
    "description": "선문염송집을 편찬하고 유불 일치설을 주장하였다.",
    "startYear": 1178,
    "endYear": 1234,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "혜심"
    ],
    "_src": "78회 심화 Q17 X"
  },
  {
    "id": "78회_q17_66",
    "type": "사건",
    "kind": "detail",
    "title": "보현십원가를 지어 불교 교리를 대중에게 전파하였다.",
    "description": "보현십원가를 지어 불교 교리를 대중에게 전파하였다.",
    "startYear": 923,
    "endYear": 973,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "균여"
    ],
    "_src": "78회 심화 Q17 X"
  },
  {
    "id": "78회_q17_67",
    "type": "사건",
    "kind": "detail",
    "title": "이론과 수행을 함께 강조하는 교관겸수를 제시하였다.",
    "description": "이론과 수행을 함께 강조하는 교관겸수를 제시하였다.",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 의천"
    ],
    "_src": "78회 심화 Q17 O"
  },
  {
    "id": "78회_q18_68",
    "type": "사건",
    "kind": "detail",
    "title": "시무 28조를 국왕에게 올렸다.",
    "description": "시무 28조를 국왕에게 올렸다.",
    "startYear": 927,
    "endYear": 989,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최승로"
    ],
    "_src": "78회 심화 Q18 X"
  },
  {
    "id": "78회_q18_69",
    "type": "사건",
    "kind": "detail",
    "title": "화통도감의 설치를 건의하였다.",
    "description": "화통도감의 설치를 건의하였다.",
    "startYear": 1325,
    "endYear": 1395,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최무선"
    ],
    "_src": "78회 심화 Q18 X"
  },
  {
    "id": "78회_q18_70",
    "type": "사건",
    "kind": "detail",
    "title": "정변을 일으켜 목종을 폐위하였다.",
    "description": "정변을 일으켜 목종을 폐위하였다.",
    "startYear": 1009,
    "endYear": 1010,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "강조"
    ],
    "_src": "78회 심화 Q18 X"
  },
  {
    "id": "78회_q18_71",
    "type": "사건",
    "kind": "detail",
    "title": "칭제 건원과 금국 정벌을 주장하였다.",
    "description": "칭제 건원과 금국 정벌을 주장하였다.",
    "startYear": 1126,
    "endYear": 1136,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "이자겸/묘청"
    ],
    "_src": "78회 심화 Q18 O"
  },
  {
    "id": "78회_q18_72",
    "type": "사건",
    "kind": "detail",
    "title": "교정도감이 되어 국정을 장악하였다.",
    "description": "교정도감이 되어 국정을 장악하였다.",
    "startYear": 1149,
    "endYear": 1219,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충헌"
    ],
    "_src": "78회 심화 Q18 X"
  },
  {
    "id": "78회_q19_73",
    "type": "사건",
    "kind": "detail",
    "title": "이징옥이 함길도에서 반란을 일으켰다.",
    "description": "이징옥이 함길도에서 반란을 일으켰다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "78회 심화 Q19 O"
  },
  {
    "id": "78회_q19_74",
    "type": "사건",
    "kind": "detail",
    "title": "이괄이 난을 일으켜 한양을 점령하였다.",
    "description": "이괄이 난을 일으켜 한양을 점령하였다.",
    "startYear": 1623,
    "endYear": 1649,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 인조"
    ],
    "_src": "78회 심화 Q19 X"
  },
  {
    "id": "78회_q19_75",
    "type": "사건",
    "kind": "detail",
    "title": "허적과 윤휴 등 남인이 대거 축출되었다.",
    "description": "허적과 윤휴 등 남인이 대거 축출되었다.",
    "startYear": 1680,
    "endYear": 1680,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "경신환국"
    ],
    "_src": "78회 심화 Q19 X"
  },
  {
    "id": "78회_q19_76",
    "type": "사건",
    "kind": "detail",
    "title": "위훈 삭제를 주장한 조광조 일파가 제거되었다.",
    "description": "위훈 삭제를 주장한 조광조 일파가 제거되었다.",
    "startYear": 1519,
    "endYear": 1519,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "기묘사화"
    ],
    "_src": "78회 심화 Q19 X"
  },
  {
    "id": "78회_q19_77",
    "type": "사건",
    "kind": "detail",
    "title": "정여립 모반 사건을 계기로 기축옥사가 발생하였다.",
    "description": "정여립 모반 사건을 계기로 기축옥사가 발생하였다.",
    "startYear": 1589,
    "endYear": 1589,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "기축옥사"
    ],
    "_src": "78회 심화 Q19 X"
  },
  {
    "id": "78회_q20_78",
    "type": "사건",
    "kind": "detail",
    "title": "수도의 행정과 치안을 담당하였다.",
    "description": "수도의 행정과 치안을 담당하였다.",
    "startYear": 1394,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "한성부"
    ],
    "_src": "78회 심화 Q20 X"
  },
  {
    "id": "78회_q20_79",
    "type": "사건",
    "kind": "detail",
    "title": "천문 지리 기후 등에 관한 사무를 맡았다.",
    "description": "천문 지리 기후 등에 관한 사무를 맡았다.",
    "startYear": 1466,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "관상감"
    ],
    "_src": "78회 심화 Q20 X"
  },
  {
    "id": "78회_q20_80",
    "type": "사건",
    "kind": "detail",
    "title": "제학 직제학 등의 관직 외에 검서관이 있었다.",
    "description": "제학 직제학 등의 관직 외에 검서관이 있었다.",
    "startYear": 1776,
    "endYear": 1910,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "규장각"
    ],
    "_src": "78회 심화 Q20 X"
  },
  {
    "id": "78회_q20_81",
    "type": "사건",
    "kind": "detail",
    "title": "왕에게 경서 등을 강론하는 경연을 주관하였다.",
    "description": "왕에게 경서 등을 강론하는 경연을 주관하였다.",
    "startYear": 1463,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "홍문관"
    ],
    "_src": "78회 심화 Q20 X"
  },
  {
    "id": "78회_q20_82",
    "type": "사건",
    "kind": "detail",
    "title": "국왕 직속 사법 기구로 반역죄 강상죄 등을 다루었다.",
    "description": "국왕 직속 사법 기구로 반역죄 강상죄 등을 다루었다.",
    "startYear": 1414,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 의금부"
    ],
    "_src": "78회 심화 Q20 O"
  },
  {
    "id": "78회_q21_83",
    "type": "사건",
    "kind": "detail",
    "title": "훈민정음 해례본 편찬에 참여하였다.",
    "description": "훈민정음 해례본 편찬에 참여하였다.",
    "startYear": 1417,
    "endYear": 1475,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 신숙주"
    ],
    "_src": "78회 심화 Q21 O"
  },
  {
    "id": "78회_q21_84",
    "type": "사건",
    "kind": "detail",
    "title": "최초의 서원인 백운동 서원을 건립하였다.",
    "description": "최초의 서원인 백운동 서원을 건립하였다.",
    "startYear": 1495,
    "endYear": 1554,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "주세붕"
    ],
    "_src": "78회 심화 Q21 X"
  },
  {
    "id": "78회_q21_85",
    "type": "사건",
    "kind": "detail",
    "title": "기축봉사를 올려 명에 대한 의리를 내세웠다.",
    "description": "기축봉사를 올려 명에 대한 의리를 내세웠다.",
    "startYear": 1607,
    "endYear": 1689,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "송시열"
    ],
    "_src": "78회 심화 Q21 X"
  },
  {
    "id": "78회_q21_86",
    "type": "사건",
    "kind": "detail",
    "title": "해주 향약을 시행하여 향촌 교화를 위해 노력하였다.",
    "description": "해주 향약을 시행하여 향촌 교화를 위해 노력하였다.",
    "startYear": 1536,
    "endYear": 1584,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "이이"
    ],
    "_src": "78회 심화 Q21 X"
  },
  {
    "id": "78회_q21_87",
    "type": "사건",
    "kind": "detail",
    "title": "가례집람을 지어 예학을 조선의 현실에 맞게 정리하였다.",
    "description": "가례집람을 지어 예학을 조선의 현실에 맞게 정리하였다.",
    "startYear": 1548,
    "endYear": 1631,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "김장생"
    ],
    "_src": "78회 심화 Q21 X"
  },
  {
    "id": "78회_q22_88",
    "type": "사건",
    "kind": "detail",
    "title": "정봉수가 용골산성에서 항쟁하였다.",
    "description": "정봉수가 용골산성에서 항쟁하였다.",
    "startYear": 1627,
    "endYear": 1627,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정묘호란"
    ],
    "_src": "78회 심화 Q22 X"
  },
  {
    "id": "78회_q22_89",
    "type": "사건",
    "kind": "detail",
    "title": "김준룡이 광교산 전투에서 승리하였다.",
    "description": "김준룡이 광교산 전투에서 승리하였다.",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "병자호란"
    ],
    "_src": "78회 심화 Q22 X"
  },
  {
    "id": "78회_q22_90",
    "type": "사건",
    "kind": "detail",
    "title": "김종서가 두만강 일대에 6진을 개척하였다.",
    "description": "김종서가 두만강 일대에 6진을 개척하였다.",
    "startYear": 1433,
    "endYear": 1449,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "4군 6진"
    ],
    "_src": "78회 심화 Q22 X"
  },
  {
    "id": "78회_q22_91",
    "type": "사건",
    "kind": "detail",
    "title": "권율이 행주산성에서 적군을 크게 물리쳤다.",
    "description": "권율이 행주산성에서 적군을 크게 물리쳤다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "78회 심화 Q22 O"
  },
  {
    "id": "78회_q22_92",
    "type": "사건",
    "kind": "detail",
    "title": "이종무가 적의 근거지인 대마도를 정벌하였다.",
    "description": "이종무가 적의 근거지인 대마도를 정벌하였다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "78회 심화 Q22 X"
  },
  {
    "id": "78회_q24_93",
    "type": "사건",
    "kind": "detail",
    "title": "연잉군을 왕세제로 책봉하였다.",
    "description": "연잉군을 왕세제로 책봉하였다.",
    "startYear": 1720,
    "endYear": 1724,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 경종"
    ],
    "_src": "78회 심화 Q24 X"
  },
  {
    "id": "78회_q24_94",
    "type": "사건",
    "kind": "detail",
    "title": "청과 국경을 정하는 백두산정계비를 세웠다.",
    "description": "청과 국경을 정하는 백두산정계비를 세웠다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "78회 심화 Q24 X"
  },
  {
    "id": "78회_q24_95",
    "type": "사건",
    "kind": "detail",
    "title": "삼수병으로 구성된 훈련도감을 창설하였다.",
    "description": "삼수병으로 구성된 훈련도감을 창설하였다.",
    "startYear": 1567,
    "endYear": 1608,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 선조"
    ],
    "_src": "78회 심화 Q24 X"
  },
  {
    "id": "78회_q24_96",
    "type": "사건",
    "kind": "detail",
    "title": "탕평 교서를 반포하고 탕평비를 건립하였다.",
    "description": "탕평 교서를 반포하고 탕평비를 건립하였다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "78회 심화 Q24 X"
  },
  {
    "id": "78회_q24_97",
    "type": "사건",
    "kind": "detail",
    "title": "문신을 재교육하기 위한 초계문신제를 시행하였다.",
    "description": "문신을 재교육하기 위한 초계문신제를 시행하였다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "78회 심화 Q24 O"
  },
  {
    "id": "78회_q25_98",
    "type": "사건",
    "kind": "detail",
    "title": "활구라고 불리는 은병이 주조되었다.",
    "description": "활구라고 불리는 은병이 주조되었다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려의 경제"
    ],
    "_src": "78회 심화 Q25 O"
  },
  {
    "id": "78회_q25_99",
    "type": "사건",
    "kind": "detail",
    "title": "관청에 물품을 조달하는 공인이 활동하였다.",
    "description": "관청에 물품을 조달하는 공인이 활동하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q25 X"
  },
  {
    "id": "78회_q25_100",
    "type": "사건",
    "kind": "detail",
    "title": "송상 만상이 대청 무역으로 부를 축적하였다.",
    "description": "송상 만상이 대청 무역으로 부를 축적하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q25 X"
  },
  {
    "id": "78회_q25_101",
    "type": "사건",
    "kind": "detail",
    "title": "보부상이 장시를 돌아다니며 상품을 판매하였다.",
    "description": "보부상이 장시를 돌아다니며 상품을 판매하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q25 X"
  },
  {
    "id": "78회_q25_102",
    "type": "사건",
    "kind": "detail",
    "title": "설점수세제의 시행으로 민간의 광산 개발이 허용되었다.",
    "description": "설점수세제의 시행으로 민간의 광산 개발이 허용되었다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q25 X"
  },
  {
    "id": "78회_q27_103",
    "type": "사건",
    "kind": "detail",
    "title": "최충이 9재 학당을 설립하였다.",
    "description": "최충이 9재 학당을 설립하였다.",
    "startYear": 984,
    "endYear": 1068,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충"
    ],
    "_src": "78회 심화 Q27 X"
  },
  {
    "id": "78회_q27_104",
    "type": "사건",
    "kind": "detail",
    "title": "서얼이 통청 운동을 전개하였다.",
    "description": "서얼이 통청 운동을 전개하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "78회 심화 Q27 O"
  },
  {
    "id": "78회_q27_105",
    "type": "사건",
    "kind": "detail",
    "title": "변발과 호복이 지배층을 중심으로 유행하였다.",
    "description": "변발과 호복이 지배층을 중심으로 유행하였다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "78회 심화 Q27 X"
  },
  {
    "id": "78회_q27_106",
    "type": "사건",
    "kind": "detail",
    "title": "망이 망소이의 난 등 하층민의 봉기가 발생하였다.",
    "description": "망이 망소이의 난 등 하층민의 봉기가 발생하였다.",
    "startYear": 1176,
    "endYear": 1177,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "망이·망소이의 난"
    ],
    "_src": "78회 심화 Q27 X"
  },
  {
    "id": "78회_q27_107",
    "type": "사건",
    "kind": "detail",
    "title": "질병에 대한 처방 등을 소개한 향약구급방이 편찬되었다.",
    "description": "질병에 대한 처방 등을 소개한 향약구급방이 편찬되었다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 의학"
    ],
    "_src": "78회 심화 Q27 X"
  },
  {
    "id": "78회_q28_108",
    "type": "사건",
    "kind": "detail",
    "title": "천주교 포교 허용의 근거가 되었다.",
    "description": "천주교 포교 허용의 근거가 되었다.",
    "startYear": 1886,
    "endYear": 1886,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조프 수호 통상 조약"
    ],
    "_src": "78회 심화 Q28 X"
  },
  {
    "id": "78회_q28_109",
    "type": "사건",
    "kind": "detail",
    "title": "일본 측의 해안 측량권을 인정하였다.",
    "description": "일본 측의 해안 측량권을 인정하였다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "78회 심화 Q28 O"
  },
  {
    "id": "78회_q28_110",
    "type": "사건",
    "kind": "detail",
    "title": "최혜국 대우를 규정한 조항을 담고 있다.",
    "description": "최혜국 대우를 규정한 조항을 담고 있다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "78회 심화 Q28 X"
  },
  {
    "id": "78회_q28_111",
    "type": "사건",
    "kind": "detail",
    "title": "일본 공사관의 경비병 주둔을 명시하였다.",
    "description": "일본 공사관의 경비병 주둔을 명시하였다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "제물포 조약"
    ],
    "_src": "78회 심화 Q28 X"
  },
  {
    "id": "78회_q28_112",
    "type": "사건",
    "kind": "detail",
    "title": "외국 상인의 내지 통상권을 최초로 규정하였다.",
    "description": "외국 상인의 내지 통상권을 최초로 규정하였다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조청상민수륙무역장정"
    ],
    "_src": "78회 심화 Q28 X"
  },
  {
    "id": "78회_q29_113",
    "type": "사건",
    "kind": "detail",
    "title": "한성 조약이 체결되는 계기가 되었다.",
    "description": "한성 조약이 체결되는 계기가 되었다.",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑신정변"
    ],
    "_src": "78회 심화 Q29 O"
  },
  {
    "id": "78회_q29_114",
    "type": "사건",
    "kind": "detail",
    "title": "외규장각 도서가 약탈되는 결과를 가져왔다.",
    "description": "외규장각 도서가 약탈되는 결과를 가져왔다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "병인양요"
    ],
    "_src": "78회 심화 Q29 X"
  },
  {
    "id": "78회_q29_115",
    "type": "사건",
    "kind": "detail",
    "title": "제너럴 셔먼호 사건이 발단이 되어 일어났다.",
    "description": "제너럴 셔먼호 사건이 발단이 되어 일어났다.",
    "startYear": 1871,
    "endYear": 1871,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신미양요"
    ],
    "_src": "78회 심화 Q29 X"
  },
  {
    "id": "78회_q29_116",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 흥선 대원군이 청에 납치되었다.",
    "description": "전개 과정에서 흥선 대원군이 청에 납치되었다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "임오군란"
    ],
    "_src": "78회 심화 Q29 X"
  },
  {
    "id": "78회_q29_117",
    "type": "사건",
    "kind": "detail",
    "title": "홍범 14조를 개혁의 기본 방향으로 제시하였다.",
    "description": "홍범 14조를 개혁의 기본 방향으로 제시하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "78회 심화 Q29 X"
  },
  {
    "id": "78회_q30_118",
    "type": "사건",
    "kind": "detail",
    "title": "신민회가 민족 교육을 실시하였다.",
    "description": "신민회가 민족 교육을 실시하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "78회 심화 Q30 X"
  },
  {
    "id": "78회_q30_119",
    "type": "사건",
    "kind": "detail",
    "title": "관민이 합심하여 원산학사를 세웠다.",
    "description": "관민이 합심하여 원산학사를 세웠다.",
    "startYear": 1883,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "근대 교육 기관"
    ],
    "_src": "78회 심화 Q30 O"
  },
  {
    "id": "78회_q30_120",
    "type": "사건",
    "kind": "detail",
    "title": "교육 입국 조서 반포를 계기로 설립되었다.",
    "description": "교육 입국 조서 반포를 계기로 설립되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "78회 심화 Q30 X"
  },
  {
    "id": "78회_q30_121",
    "type": "사건",
    "kind": "detail",
    "title": "최초의 여성 교육 기관으로 건립되었다.",
    "description": "최초의 여성 교육 기관으로 건립되었다.",
    "startYear": 1886,
    "endYear": 1945,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "이화학당"
    ],
    "_src": "78회 심화 Q30 X"
  },
  {
    "id": "78회_q30_122",
    "type": "사건",
    "kind": "detail",
    "title": "통역관 양성을 위해 설치되었다.",
    "description": "통역관 양성을 위해 설치되었다.",
    "startYear": 1883,
    "endYear": 1886,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "동문학"
    ],
    "_src": "78회 심화 Q30 X"
  },
  {
    "id": "78회_q31_123",
    "type": "사건",
    "kind": "detail",
    "title": "삼국 간섭이 발생한 원인을 분석한다.",
    "description": "삼국 간섭이 발생한 원인을 분석한다.",
    "startYear": 1895,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "삼국 간섭"
    ],
    "_src": "78회 심화 Q31 X"
  },
  {
    "id": "78회_q31_124",
    "type": "사건",
    "kind": "detail",
    "title": "삼정이정청이 설치된 목적을 살펴본다.",
    "description": "삼정이정청이 설치된 목적을 살펴본다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "78회 심화 Q31 X"
  },
  {
    "id": "78회_q31_125",
    "type": "사건",
    "kind": "detail",
    "title": "황국 중앙 총상회가 설립된 배경을 파악한다.",
    "description": "황국 중앙 총상회가 설립된 배경을 파악한다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "78회 심화 Q31 X"
  },
  {
    "id": "78회_q31_126",
    "type": "사건",
    "kind": "detail",
    "title": "재정 고문 메가타가 주도한 정책을 찾아본다.",
    "description": "재정 고문 메가타가 주도한 정책을 찾아본다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "78회 심화 Q31 O"
  },
  {
    "id": "78회_q31_127",
    "type": "사건",
    "kind": "detail",
    "title": "조미 수호 통상 조약이 체결되는 과정을 조사한다.",
    "description": "조미 수호 통상 조약이 체결되는 과정을 조사한다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "78회 심화 Q31 X"
  },
  {
    "id": "78회_q32_128",
    "type": "사건",
    "kind": "detail",
    "title": "농민군이 황토현에서 관군에 승리하였다.",
    "description": "농민군이 황토현에서 관군에 승리하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "78회 심화 Q32 X"
  },
  {
    "id": "78회_q32_129",
    "type": "사건",
    "kind": "detail",
    "title": "개혁을 추진하기 위해 교정청이 설치되었다.",
    "description": "개혁을 추진하기 위해 교정청이 설치되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "78회 심화 Q32 X"
  },
  {
    "id": "78회_q32_130",
    "type": "사건",
    "kind": "detail",
    "title": "남접과 북접의 농민군이 논산에 집결하였다.",
    "description": "남접과 북접의 농민군이 논산에 집결하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "78회 심화 Q32 O"
  },
  {
    "id": "78회_q32_131",
    "type": "사건",
    "kind": "detail",
    "title": "교조 신원을 요구하는 삼례 집회가 개최되었다.",
    "description": "교조 신원을 요구하는 삼례 집회가 개최되었다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "78회 심화 Q32 X"
  },
  {
    "id": "78회_q32_132",
    "type": "사건",
    "kind": "detail",
    "title": "조병갑의 폭정에 항거하여 군민들이 관아를 습격하였다.",
    "description": "조병갑의 폭정에 항거하여 군민들이 관아를 습격하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "78회 심화 Q32 X"
  },
  {
    "id": "78회_q33_133",
    "type": "사건",
    "kind": "detail",
    "title": "미쓰야 협정이 체결되었다.",
    "description": "미쓰야 협정이 체결되었다.",
    "startYear": 1925,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "미쓰야 협정"
    ],
    "_src": "78회 심화 Q33 X"
  },
  {
    "id": "78회_q33_134",
    "type": "사건",
    "kind": "detail",
    "title": "대한 제국의 군대가 해산되었다.",
    "description": "대한 제국의 군대가 해산되었다.",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "정미의병 배경"
    ],
    "_src": "78회 심화 Q33 O"
  },
  {
    "id": "78회_q33_135",
    "type": "사건",
    "kind": "detail",
    "title": "영국이 거문도를 불법으로 점령하였다.",
    "description": "영국이 거문도를 불법으로 점령하였다.",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "거문도 사건"
    ],
    "_src": "78회 심화 Q33 X"
  },
  {
    "id": "78회_q33_136",
    "type": "사건",
    "kind": "detail",
    "title": "데라우치가 초대 총독으로 부임하였다.",
    "description": "데라우치가 초대 총독으로 부임하였다.",
    "startYear": 1910,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "경술국치"
    ],
    "_src": "78회 심화 Q33 X"
  },
  {
    "id": "78회_q33_137",
    "type": "사건",
    "kind": "detail",
    "title": "기유각서가 체결되어 사법권을 박탈당하였다.",
    "description": "기유각서가 체결되어 사법권을 박탈당하였다.",
    "startYear": 1909,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "기유각서"
    ],
    "_src": "78회 심화 Q33 X"
  },
  {
    "id": "78회_q34_138",
    "type": "사건",
    "kind": "detail",
    "title": "브나로드 운동을 주도하였다.",
    "description": "브나로드 운동을 주도하였다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "동아일보"
    ],
    "_src": "78회 심화 Q34 X"
  },
  {
    "id": "78회_q34_139",
    "type": "사건",
    "kind": "detail",
    "title": "천도교의 기관지로 발행되었다.",
    "description": "천도교의 기관지로 발행되었다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "만세보"
    ],
    "_src": "78회 심화 Q34 X"
  },
  {
    "id": "78회_q34_140",
    "type": "사건",
    "kind": "detail",
    "title": "상업 광고를 처음으로 게재하였다.",
    "description": "상업 광고를 처음으로 게재하였다.",
    "startYear": 1886,
    "endYear": 1888,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "한성주보"
    ],
    "_src": "78회 심화 Q34 X"
  },
  {
    "id": "78회_q34_141",
    "type": "사건",
    "kind": "detail",
    "title": "국채 보상 운동의 확산에 기여하였다.",
    "description": "국채 보상 운동의 확산에 기여하였다.",
    "startYear": 1904,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한매일신보"
    ],
    "_src": "78회 심화 Q34 O"
  },
  {
    "id": "78회_q34_142",
    "type": "사건",
    "kind": "detail",
    "title": "순한글로 발행된 최초의 신문이었다.",
    "description": "순한글로 발행된 최초의 신문이었다.",
    "startYear": 1896,
    "endYear": 1899,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "독립신문"
    ],
    "_src": "78회 심화 Q34 X"
  },
  {
    "id": "78회_q35_143",
    "type": "사건",
    "kind": "detail",
    "title": "대한 광복회를 조직하여 친일파를 처단하였다.",
    "description": "대한 광복회를 조직하여 친일파를 처단하였다.",
    "startYear": 1915,
    "endYear": 1918,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한광복회"
    ],
    "_src": "78회 심화 Q35 X"
  },
  {
    "id": "78회_q35_144",
    "type": "사건",
    "kind": "detail",
    "title": "일본의 침략 과정을 담은 한국통사를 저술하였다.",
    "description": "일본의 침략 과정을 담은 한국통사를 저술하였다.",
    "startYear": 1859,
    "endYear": 1925,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박은식"
    ],
    "_src": "78회 심화 Q35 X"
  },
  {
    "id": "78회_q35_145",
    "type": "사건",
    "kind": "detail",
    "title": "대한민국 임시 정부에서 내무총장으로 활동하였다.",
    "description": "대한민국 임시 정부에서 내무총장으로 활동하였다.",
    "startYear": 1878,
    "endYear": 1938,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "안창호 활동"
    ],
    "_src": "78회 심화 Q35 O"
  },
  {
    "id": "78회_q35_146",
    "type": "사건",
    "kind": "detail",
    "title": "의열단의 활동 지침인 조선 혁명 선언을 작성하였다.",
    "description": "의열단의 활동 지침인 조선 혁명 선언을 작성하였다.",
    "startYear": 1880,
    "endYear": 1936,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "신채호"
    ],
    "_src": "78회 심화 Q35 X"
  },
  {
    "id": "78회_q35_147",
    "type": "사건",
    "kind": "detail",
    "title": "헤이그에서 열린 만국 평화 회의에 특사로 파견되었다.",
    "description": "헤이그에서 열린 만국 평화 회의에 특사로 파견되었다.",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "헤이그 특사"
    ],
    "_src": "78회 심화 Q35 X"
  },
  {
    "id": "78회_q36_148",
    "type": "사건",
    "kind": "detail",
    "title": "헌병 경찰제가 실시되었다.",
    "description": "헌병 경찰제가 실시되었다.",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "78회 심화 Q36 O"
  },
  {
    "id": "78회_q36_149",
    "type": "사건",
    "kind": "detail",
    "title": "치안 유지법이 제정되었다.",
    "description": "치안 유지법이 제정되었다.",
    "startYear": 1925,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "치안유지법"
    ],
    "_src": "78회 심화 Q36 X"
  },
  {
    "id": "78회_q36_150",
    "type": "사건",
    "kind": "detail",
    "title": "친위대와 진위대가 설치되었다.",
    "description": "친위대와 진위대가 설치되었다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "78회 심화 Q36 X"
  },
  {
    "id": "78회_q36_151",
    "type": "사건",
    "kind": "detail",
    "title": "조선 여성 동우회가 창립되었다.",
    "description": "조선 여성 동우회가 창립되었다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "78회 심화 Q36 X"
  },
  {
    "id": "78회_q36_152",
    "type": "사건",
    "kind": "detail",
    "title": "조선 사상범 예방 구금령이 시행되었다.",
    "description": "조선 사상범 예방 구금령이 시행되었다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "78회 심화 Q36 X"
  },
  {
    "id": "78회_q37_153",
    "type": "사건",
    "kind": "detail",
    "title": "지계아문이 설치되어 지계가 발급되었다.",
    "description": "지계아문이 설치되어 지계가 발급되었다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "78회 심화 Q37 X"
  },
  {
    "id": "78회_q37_154",
    "type": "사건",
    "kind": "detail",
    "title": "회사 설립을 허가제로 하는 회사령이 제정되었다.",
    "description": "회사 설립을 허가제로 하는 회사령이 제정되었다.",
    "startYear": 1910,
    "endYear": 1920,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "회사령"
    ],
    "_src": "78회 심화 Q37 X"
  },
  {
    "id": "78회_q37_155",
    "type": "사건",
    "kind": "detail",
    "title": "전국 단위 조직인 조선 농민 총연맹이 결성되었다.",
    "description": "전국 단위 조직인 조선 농민 총연맹이 결성되었다.",
    "startYear": 1920,
    "endYear": 1935,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "농민 운동"
    ],
    "_src": "78회 심화 Q37 O"
  },
  {
    "id": "78회_q37_156",
    "type": "사건",
    "kind": "detail",
    "title": "일본의 토지 침탈에 맞서 농광 회사가 설립되었다.",
    "description": "일본의 토지 침탈에 맞서 농광 회사가 설립되었다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "농광 회사"
    ],
    "_src": "78회 심화 Q37 X"
  },
  {
    "id": "78회_q37_157",
    "type": "사건",
    "kind": "detail",
    "title": "경복궁에서 최초로 조선 물산 공진회가 개최되었다.",
    "description": "경복궁에서 최초로 조선 물산 공진회가 개최되었다.",
    "startYear": 1915,
    "endYear": 1915,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "조선 물산 공진회"
    ],
    "_src": "78회 심화 Q37 X"
  },
  {
    "id": "78회_q38_158",
    "type": "사건",
    "kind": "detail",
    "title": "김광제 등의 발의로 본격화되었다.",
    "description": "김광제 등의 발의로 본격화되었다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "국채 보상 운동"
    ],
    "_src": "78회 심화 Q38 X"
  },
  {
    "id": "78회_q38_159",
    "type": "사건",
    "kind": "detail",
    "title": "보국안민 제폭구민을 기치로 내걸었다.",
    "description": "보국안민 제폭구민을 기치로 내걸었다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "78회 심화 Q38 X"
  },
  {
    "id": "78회_q38_160",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 일제가 제암리 학살 등을 자행하였다.",
    "description": "전개 과정에서 일제가 제암리 학살 등을 자행하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "3·1 운동"
    ],
    "_src": "78회 심화 Q38 X"
  },
  {
    "id": "78회_q38_161",
    "type": "사건",
    "kind": "detail",
    "title": "민족 협동 전선 단체인 신간회 결성에 영향을 끼쳤다.",
    "description": "민족 협동 전선 단체인 신간회 결성에 영향을 끼쳤다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "78회 심화 Q38 O"
  },
  {
    "id": "78회_q38_162",
    "type": "사건",
    "kind": "detail",
    "title": "한국인 학생과 일본인 학생 간의 충돌에서 비롯되었다.",
    "description": "한국인 학생과 일본인 학생 간의 충돌에서 비롯되었다.",
    "startYear": 1929,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광주학생항일운동"
    ],
    "_src": "78회 심화 Q38 X"
  },
  {
    "id": "78회_q39_163",
    "type": "사건",
    "kind": "detail",
    "title": "보안회의 활동 내용을 분석한다.",
    "description": "보안회의 활동 내용을 분석한다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "보안회"
    ],
    "_src": "78회 심화 Q39 X"
  },
  {
    "id": "78회_q39_164",
    "type": "사건",
    "kind": "detail",
    "title": "조선 형평사의 창립 목적을 파악한다.",
    "description": "조선 형평사의 창립 목적을 파악한다.",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "형평 운동"
    ],
    "_src": "78회 심화 Q39 O"
  },
  {
    "id": "78회_q39_165",
    "type": "사건",
    "kind": "detail",
    "title": "군국기무처가 설치된 계기를 찾아본다.",
    "description": "군국기무처가 설치된 계기를 찾아본다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "78회 심화 Q39 X"
  },
  {
    "id": "78회_q39_166",
    "type": "사건",
    "kind": "detail",
    "title": "전주 화약이 체결되는 과정을 알아본다.",
    "description": "전주 화약이 체결되는 과정을 알아본다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "78회 심화 Q39 X"
  },
  {
    "id": "78회_q39_167",
    "type": "사건",
    "kind": "detail",
    "title": "대한 자강회가 해산된 배경을 조사한다.",
    "description": "대한 자강회가 해산된 배경을 조사한다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한자강회"
    ],
    "_src": "78회 심화 Q39 X"
  },
  {
    "id": "78회_q40_168",
    "type": "사건",
    "kind": "detail",
    "title": "원산 총파업에 참여하는 노동자",
    "description": "원산 총파업에 참여하는 노동자",
    "startYear": 1929,
    "endYear": 1929,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "원산 총파업"
    ],
    "_src": "78회 심화 Q40 X"
  },
  {
    "id": "78회_q40_169",
    "type": "사건",
    "kind": "detail",
    "title": "105인 사건으로 검거되는 애국지사",
    "description": "105인 사건으로 검거되는 애국지사",
    "startYear": 1911,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "105인 사건"
    ],
    "_src": "78회 심화 Q40 X"
  },
  {
    "id": "78회_q40_170",
    "type": "사건",
    "kind": "detail",
    "title": "근우회 창립 총회에서 취재하는 기자",
    "description": "근우회 창립 총회에서 취재하는 기자",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "근우회"
    ],
    "_src": "78회 심화 Q40 X"
  },
  {
    "id": "78회_q40_171",
    "type": "사건",
    "kind": "detail",
    "title": "황국 신민 서사 암송을 강요받는 학생",
    "description": "황국 신민 서사 암송을 강요받는 학생",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "78회 심화 Q40 O"
  },
  {
    "id": "78회_q40_172",
    "type": "사건",
    "kind": "detail",
    "title": "태화관에서 독립 선언식을 거행하는 민족 대표",
    "description": "태화관에서 독립 선언식을 거행하는 민족 대표",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "3·1 운동"
    ],
    "_src": "78회 심화 Q40 X"
  },
  {
    "id": "78회_q41_173",
    "type": "사건",
    "kind": "detail",
    "title": "학술지인 진단 학보를 발행하였다.",
    "description": "학술지인 진단 학보를 발행하였다.",
    "startYear": 1934,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "진단학회"
    ],
    "_src": "78회 심화 Q41 X"
  },
  {
    "id": "78회_q41_174",
    "type": "사건",
    "kind": "detail",
    "title": "가갸날을 제정하고 기념식을 진행하였다.",
    "description": "가갸날을 제정하고 기념식을 진행하였다.",
    "startYear": 1921,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선어 연구회"
    ],
    "_src": "78회 심화 Q41 O"
  },
  {
    "id": "78회_q41_175",
    "type": "사건",
    "kind": "detail",
    "title": "태극 서관을 설립하여 서적을 보급하였다.",
    "description": "태극 서관을 설립하여 서적을 보급하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "78회 심화 Q41 X"
  },
  {
    "id": "78회_q41_176",
    "type": "사건",
    "kind": "detail",
    "title": "주시경 지석영 등이 중심이 되어 활동하였다.",
    "description": "주시경 지석영 등이 중심이 되어 활동하였다.",
    "startYear": 1907,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "국문연구소"
    ],
    "_src": "78회 심화 Q41 X"
  },
  {
    "id": "78회_q41_177",
    "type": "사건",
    "kind": "detail",
    "title": "영은문이 있던 자리 부근에 독립문을 건립하였다.",
    "description": "영은문이 있던 자리 부근에 독립문을 건립하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "78회 심화 Q41 X"
  },
  {
    "id": "78회_q42_178",
    "type": "사건",
    "kind": "detail",
    "title": "대원 일부가 한국광복군에 합류하였다.",
    "description": "대원 일부가 한국광복군에 합류하였다.",
    "startYear": 1938,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선의용대"
    ],
    "_src": "78회 심화 Q42 O"
  },
  {
    "id": "78회_q42_179",
    "type": "사건",
    "kind": "detail",
    "title": "청산리 사건에서 일본군에 맞서 승리를 거두었다.",
    "description": "청산리 사건에서 일본군에 맞서 승리를 거두었다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "78회 심화 Q42 X"
  },
  {
    "id": "78회_q42_180",
    "type": "사건",
    "kind": "detail",
    "title": "동북 항일 연군으로 개편되어 유격전을 펼쳤다.",
    "description": "동북 항일 연군으로 개편되어 유격전을 펼쳤다.",
    "startYear": 1936,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동북 항일 연군"
    ],
    "_src": "78회 심화 Q42 X"
  },
  {
    "id": "78회_q42_181",
    "type": "사건",
    "kind": "detail",
    "title": "대전자령 전투에서 한중 연합 작전을 전개하였다.",
    "description": "대전자령 전투에서 한중 연합 작전을 전개하였다.",
    "startYear": 1930,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한국독립군"
    ],
    "_src": "78회 심화 Q42 X"
  },
  {
    "id": "78회_q42_182",
    "type": "사건",
    "kind": "detail",
    "title": "조선 혁명당의 군사 조직으로 남만주에서 활약하였다.",
    "description": "조선 혁명당의 군사 조직으로 남만주에서 활약하였다.",
    "startYear": 1929,
    "endYear": 1938,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선혁명군"
    ],
    "_src": "78회 심화 Q42 X"
  },
  {
    "id": "78회_q43_183",
    "type": "사건",
    "kind": "detail",
    "title": "텔레비전 방송이 시작되었다.",
    "description": "텔레비전 방송이 시작되었다.",
    "startYear": 1950,
    "endYear": 2000,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "현대 사회상"
    ],
    "_src": "78회 심화 Q43 O"
  },
  {
    "id": "78회_q43_184",
    "type": "사건",
    "kind": "detail",
    "title": "화학조미료를 활용한 요리법이 확산되었다.",
    "description": "화학조미료를 활용한 요리법이 확산되었다.",
    "startYear": 1950,
    "endYear": 2000,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "현대 사회상"
    ],
    "_src": "78회 심화 Q43 X"
  },
  {
    "id": "78회_q43_185",
    "type": "사건",
    "kind": "detail",
    "title": "새로운 주택 양식인 문화 주택이 등장하였다.",
    "description": "새로운 주택 양식인 문화 주택이 등장하였다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "근대 사회상"
    ],
    "_src": "78회 심화 Q43 X"
  },
  {
    "id": "78회_q43_186",
    "type": "사건",
    "kind": "detail",
    "title": "영화 임자 없는 나룻배가 상영되었다.",
    "description": "영화 임자 없는 나룻배가 상영되었다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "근대 사회상"
    ],
    "_src": "78회 심화 Q43 X"
  },
  {
    "id": "78회_q43_187",
    "type": "사건",
    "kind": "detail",
    "title": "모던 걸 모던 보이가 늘어났다.",
    "description": "모던 걸 모던 보이가 늘어났다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "근대 사회상"
    ],
    "_src": "78회 심화 Q43 X"
  },
  {
    "id": "78회_q44_188",
    "type": "사건",
    "kind": "detail",
    "title": "6·3 시위 이후에 실시되었다.",
    "description": "6·3 시위 이후에 실시되었다.",
    "startYear": 1964,
    "endYear": 1964,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·3 시위"
    ],
    "_src": "78회 심화 Q44 X"
  },
  {
    "id": "78회_q44_189",
    "type": "사건",
    "kind": "detail",
    "title": "발췌 개헌에 따라 이루어졌다.",
    "description": "발췌 개헌에 따라 이루어졌다.",
    "startYear": 1952,
    "endYear": 1952,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "발췌 개헌"
    ],
    "_src": "78회 심화 Q44 X"
  },
  {
    "id": "78회_q44_190",
    "type": "사건",
    "kind": "detail",
    "title": "신한 민주당이 제1 야당이 되었다.",
    "description": "신한 민주당이 제1 야당이 되었다.",
    "startYear": 1985,
    "endYear": 1985,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1985년 총선"
    ],
    "_src": "78회 심화 Q44 X"
  },
  {
    "id": "78회_q44_191",
    "type": "사건",
    "kind": "detail",
    "title": "통일 주체 국민 회의 대의원이 투표하였다.",
    "description": "통일 주체 국민 회의 대의원이 투표하였다.",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "유신헌법"
    ],
    "_src": "78회 심화 Q44 X"
  },
  {
    "id": "78회_q44_192",
    "type": "사건",
    "kind": "detail",
    "title": "김구 김규식 등이 단독 정부 수립에 반대하며 불참하였다...",
    "description": "김구 김규식 등이 단독 정부 수립에 반대하며 불참하였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "78회 심화 Q44 O"
  },
  {
    "id": "78회_q45_193",
    "type": "사건",
    "kind": "detail",
    "title": "애치슨 라인이 발표되었다.",
    "description": "애치슨 라인이 발표되었다.",
    "startYear": 1950,
    "endYear": 1950,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "애치슨 라인"
    ],
    "_src": "78회 심화 Q45 X"
  },
  {
    "id": "78회_q45_194",
    "type": "사건",
    "kind": "detail",
    "title": "한미 상호 방위 조약이 체결되었다.",
    "description": "한미 상호 방위 조약이 체결되었다.",
    "startYear": 1953,
    "endYear": 1953,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "한미 상호 방위 조약"
    ],
    "_src": "78회 심화 Q45 X"
  },
  {
    "id": "78회_q45_195",
    "type": "사건",
    "kind": "detail",
    "title": "여수 순천 10·10 사건이 발생하였다.",
    "description": "여수 순천 10·10 사건이 발생하였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "여수 순천 사건"
    ],
    "_src": "78회 심화 Q45 X"
  },
  {
    "id": "78회_q45_196",
    "type": "사건",
    "kind": "detail",
    "title": "모스크바 3국 외상 회의가 개최되었다.",
    "description": "모스크바 3국 외상 회의가 개최되었다.",
    "startYear": 1945,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "모스크바 3국 외상회의"
    ],
    "_src": "78회 심화 Q45 X"
  },
  {
    "id": "78회_q45_197",
    "type": "사건",
    "kind": "detail",
    "title": "흥남에서 대규모 철수 작전이 전개되었다.",
    "description": "흥남에서 대규모 철수 작전이 전개되었다.",
    "startYear": 1950,
    "endYear": 1953,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6·25 전쟁"
    ],
    "_src": "78회 심화 Q45 O"
  },
  {
    "id": "78회_q46_198",
    "type": "사건",
    "kind": "detail",
    "title": "긴급 조치 철폐를 요구하였다.",
    "description": "긴급 조치 철폐를 요구하였다.",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "유신 체제"
    ],
    "_src": "78회 심화 Q46 X"
  },
  {
    "id": "78회_q46_199",
    "type": "사건",
    "kind": "detail",
    "title": "장면 내각이 출범하는 계기가 되었다.",
    "description": "장면 내각이 출범하는 계기가 되었다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "78회 심화 Q46 O"
  },
  {
    "id": "78회_q46_200",
    "type": "사건",
    "kind": "detail",
    "title": "신군부의 계엄 확대에 반발하여 일어났다.",
    "description": "신군부의 계엄 확대에 반발하여 일어났다.",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·18 광주민주화운동"
    ],
    "_src": "78회 심화 Q46 X"
  },
  {
    "id": "78회_q46_201",
    "type": "사건",
    "kind": "detail",
    "title": "야당 총재의 국회의원직 제명에 반대하였다.",
    "description": "야당 총재의 국회의원직 제명에 반대하였다.",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "부마민주항쟁"
    ],
    "_src": "78회 심화 Q46 X"
  },
  {
    "id": "78회_q46_202",
    "type": "사건",
    "kind": "detail",
    "title": "5년 단임의 대통령 직선제 개헌을 이끌어 냈다.",
    "description": "5년 단임의 대통령 직선제 개헌을 이끌어 냈다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "78회 심화 Q46 X"
  },
  {
    "id": "78회_q47_203",
    "type": "사건",
    "kind": "detail",
    "title": "포항 제철소 1기 설비가 착공되었다.",
    "description": "포항 제철소 1기 설비가 착공되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "78회 심화 Q47 X"
  },
  {
    "id": "78회_q47_204",
    "type": "사건",
    "kind": "detail",
    "title": "국민 기초 생활 보장법이 제정되었다.",
    "description": "국민 기초 생활 보장법이 제정되었다.",
    "startYear": 1998,
    "endYear": 2003,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "김대중 정부"
    ],
    "_src": "78회 심화 Q47 O"
  },
  {
    "id": "78회_q47_205",
    "type": "사건",
    "kind": "detail",
    "title": "마산이 수출 자유 지역으로 지정되었다.",
    "description": "마산이 수출 자유 지역으로 지정되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "78회 심화 Q47 X"
  },
  {
    "id": "78회_q47_206",
    "type": "사건",
    "kind": "detail",
    "title": "베트남 전쟁 파병에 따른 특수를 누렸다.",
    "description": "베트남 전쟁 파병에 따른 특수를 누렸다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "78회 심화 Q47 X"
  },
  {
    "id": "78회_q47_207",
    "type": "사건",
    "kind": "detail",
    "title": "제2차 경제 개발 5개년 계획이 추진되었다.",
    "description": "제2차 경제 개발 5개년 계획이 추진되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "78회 심화 Q47 X"
  },
  {
    "id": "78회_q48_208",
    "type": "사건",
    "kind": "detail",
    "title": "사사오입의 논리로 통과되었다.",
    "description": "사사오입의 논리로 통과되었다.",
    "startYear": 1954,
    "endYear": 1954,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "사사오입 개헌"
    ],
    "_src": "78회 심화 Q48 X"
  },
  {
    "id": "78회_q48_209",
    "type": "사건",
    "kind": "detail",
    "title": "대통령의 3선 연임을 허용하였다.",
    "description": "대통령의 3선 연임을 허용하였다.",
    "startYear": 1969,
    "endYear": 1969,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "3선 개헌"
    ],
    "_src": "78회 심화 Q48 X"
  },
  {
    "id": "78회_q48_210",
    "type": "사건",
    "kind": "detail",
    "title": "3·1 민주 구국 선언에 영향을 주었다.",
    "description": "3·1 민주 구국 선언에 영향을 주었다.",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "유신 체제"
    ],
    "_src": "78회 심화 Q48 X"
  },
  {
    "id": "78회_q48_211",
    "type": "사건",
    "kind": "detail",
    "title": "민의원과 참의원의 양원제를 명시하였다.",
    "description": "민의원과 참의원의 양원제를 명시하였다.",
    "startYear": 1960,
    "endYear": 1961,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "제2공화국 헌법"
    ],
    "_src": "78회 심화 Q48 X"
  },
  {
    "id": "78회_q48_212",
    "type": "사건",
    "kind": "detail",
    "title": "대통령 선거인단에 의한 간선제를 규정하였다.",
    "description": "대통령 선거인단에 의한 간선제를 규정하였다.",
    "startYear": 1980,
    "endYear": 1987,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "제5공화국 헌법"
    ],
    "_src": "78회 심화 Q48 O"
  },
  {
    "id": "78회_q49_213",
    "type": "사건",
    "kind": "detail",
    "title": "7·4 남북 공동 성명을 발표하였다.",
    "description": "7·4 남북 공동 성명을 발표하였다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "78회 심화 Q49 X"
  },
  {
    "id": "78회_q49_214",
    "type": "사건",
    "kind": "detail",
    "title": "평양에서 남북 정상 회담을 개최하였다.",
    "description": "평양에서 남북 정상 회담을 개최하였다.",
    "startYear": 2017,
    "endYear": 2022,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "문재인 정부 통일"
    ],
    "_src": "78회 심화 Q49 O"
  },
  {
    "id": "78회_q49_215",
    "type": "사건",
    "kind": "detail",
    "title": "남북한이 UN에 동시 가입하였다.",
    "description": "남북한이 UN에 동시 가입하였다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "78회 심화 Q49 X"
  },
  {
    "id": "78회_q49_216",
    "type": "사건",
    "kind": "detail",
    "title": "남북 이산가족 고향 방문을 최초 성사시켰다.",
    "description": "남북 이산가족 고향 방문을 최초 성사시켰다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "78회 심화 Q49 X"
  },
  {
    "id": "78회_q49_217",
    "type": "사건",
    "kind": "detail",
    "title": "평창 동계 올림픽에서 남북 단일팀을 구성하였다.",
    "description": "평창 동계 올림픽에서 남북 단일팀을 구성하였다.",
    "startYear": 2017,
    "endYear": 2022,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "문재인 정부 통일"
    ],
    "_src": "78회 심화 Q49 X"
  },
  {
    "id": "78회_q50_218",
    "type": "사건",
    "kind": "detail",
    "title": "신립이 배수의 진을 치고 왜군과 싸웠다.",
    "description": "신립이 배수의 진을 치고 왜군과 싸웠다.",
    "startYear": 1592,
    "endYear": 1592,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "탄금대 전투"
    ],
    "_src": "78회 심화 Q50 X"
  },
  {
    "id": "78회_q50_219",
    "type": "사건",
    "kind": "detail",
    "title": "학생들이 2·28 민주 운동을 주도하였다.",
    "description": "학생들이 2·28 민주 운동을 주도하였다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "2·28 민주 운동"
    ],
    "_src": "78회 심화 Q50 X"
  },
  {
    "id": "78회_q50_220",
    "type": "사건",
    "kind": "detail",
    "title": "김사미가 가혹한 수탈에 맞서 봉기하였다.",
    "description": "김사미가 가혹한 수탈에 맞서 봉기하였다.",
    "startYear": 1193,
    "endYear": 1194,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "김사미·효심의 난"
    ],
    "_src": "78회 심화 Q50 X"
  },
  {
    "id": "78회_q50_221",
    "type": "사건",
    "kind": "detail",
    "title": "YH 무역 노동자들이 농성을 벌였다.",
    "description": "YH 무역 노동자들이 농성을 벌였다.",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "YH 무역 사건"
    ],
    "_src": "78회 심화 Q50 X"
  },
  {
    "id": "78회_q50_222",
    "type": "사건",
    "kind": "detail",
    "title": "박재혁이 경찰서에서 폭탄을 터뜨리는 의거를 일으켰다.",
    "description": "박재혁이 경찰서에서 폭탄을 터뜨리는 의거를 일으켰다.",
    "startYear": 1900,
    "endYear": 2000,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "부산 지역 역사"
    ],
    "_src": "78회 심화 Q50 O"
  },
  {
    "id": "77회_q1_223",
    "type": "사건",
    "kind": "detail",
    "title": "철제 무기를 사용하였다.",
    "description": "철제 무기를 사용하였다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "77회 기본 Q1 X"
  },
  {
    "id": "77회_q1_224",
    "type": "사건",
    "kind": "detail",
    "title": "우경이 널리 보급되었다.",
    "description": "우경이 널리 보급되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "77회 기본 Q1 X"
  },
  {
    "id": "77회_q1_225",
    "type": "사건",
    "kind": "detail",
    "title": "가락바퀴를 이용하여 실을 뽑았다.",
    "description": "가락바퀴를 이용하여 실을 뽑았다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "77회 기본 Q1 O"
  },
  {
    "id": "77회_q1_226",
    "type": "사건",
    "kind": "detail",
    "title": "주먹도끼 등의 뗀석기를 처음 제작하였다.",
    "description": "주먹도끼 등의 뗀석기를 처음 제작하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "77회 기본 Q1 X"
  },
  {
    "id": "77회_q3_227",
    "type": "사건",
    "kind": "detail",
    "title": "태학을 설립하였다.",
    "description": "태학을 설립하였다.",
    "startYear": 371,
    "endYear": 384,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 소수림왕"
    ],
    "_src": "77회 기본 Q3 X"
  },
  {
    "id": "77회_q3_228",
    "type": "사건",
    "kind": "detail",
    "title": "평양으로 도읍을 옮겼다.",
    "description": "평양으로 도읍을 옮겼다.",
    "startYear": 413,
    "endYear": 491,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 장수왕"
    ],
    "_src": "77회 기본 Q3 X"
  },
  {
    "id": "77회_q3_229",
    "type": "사건",
    "kind": "detail",
    "title": "불교를 처음으로 공인하였다.",
    "description": "불교를 처음으로 공인하였다.",
    "startYear": 371,
    "endYear": 384,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 소수림왕"
    ],
    "_src": "77회 기본 Q3 X"
  },
  {
    "id": "77회_q3_230",
    "type": "사건",
    "kind": "detail",
    "title": "영락이라는 연호를 사용하였다.",
    "description": "영락이라는 연호를 사용하였다.",
    "startYear": 391,
    "endYear": 413,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "광개토대왕"
    ],
    "_src": "77회 기본 Q3 O"
  },
  {
    "id": "77회_q4_231",
    "type": "사건",
    "kind": "detail",
    "title": "22담로를 설치하다",
    "description": "22담로를 설치하다",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무령왕"
    ],
    "_src": "77회 기본 Q4 X"
  },
  {
    "id": "77회_q4_232",
    "type": "사건",
    "kind": "detail",
    "title": "독서삼품과를 시행하다",
    "description": "독서삼품과를 시행하다",
    "startYear": 785,
    "endYear": 798,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라 원성왕"
    ],
    "_src": "77회 기본 Q4 X"
  },
  {
    "id": "77회_q4_233",
    "type": "사건",
    "kind": "detail",
    "title": "국호를 남부여로 바꾸다",
    "description": "국호를 남부여로 바꾸다",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 성왕"
    ],
    "_src": "77회 기본 Q4 O"
  },
  {
    "id": "77회_q4_234",
    "type": "사건",
    "kind": "detail",
    "title": "고국원왕을 전사시키다",
    "description": "고국원왕을 전사시키다",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 근초고왕"
    ],
    "_src": "77회 기본 Q4 X"
  },
  {
    "id": "77회_q5_235",
    "type": "사건",
    "kind": "detail",
    "title": "금동 연가 7년명 여래 입상",
    "description": "금동 연가 7년명 여래 입상",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "77회 기본 Q5 X"
  },
  {
    "id": "77회_q5_236",
    "type": "사건",
    "kind": "detail",
    "title": "무령왕 금제 관식",
    "description": "무령왕 금제 관식",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무령왕"
    ],
    "_src": "77회 기본 Q5 X"
  },
  {
    "id": "77회_q5_237",
    "type": "사건",
    "kind": "detail",
    "title": "천마총 금관",
    "description": "천마총 금관",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "77회 기본 Q5 O"
  },
  {
    "id": "77회_q5_238",
    "type": "사건",
    "kind": "detail",
    "title": "금동 대향로",
    "description": "금동 대향로",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "77회 기본 Q5 X"
  },
  {
    "id": "77회_q6_239",
    "type": "사건",
    "kind": "detail",
    "title": "기인 제도를 실시하였다.",
    "description": "기인 제도를 실시하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "77회 기본 Q6 X"
  },
  {
    "id": "77회_q6_240",
    "type": "사건",
    "kind": "detail",
    "title": "전성기에 해동성국이라 불렸다.",
    "description": "전성기에 해동성국이라 불렸다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "77회 기본 Q6 O"
  },
  {
    "id": "77회_q6_241",
    "type": "사건",
    "kind": "detail",
    "title": "중앙군으로 9서당을 설치하였다.",
    "description": "중앙군으로 9서당을 설치하였다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "77회 기본 Q6 X"
  },
  {
    "id": "77회_q6_242",
    "type": "사건",
    "kind": "detail",
    "title": "제가 회의에서 국가 중대사를 결정하였다.",
    "description": "제가 회의에서 국가 중대사를 결정하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "77회 기본 Q6 X"
  },
  {
    "id": "77회_q7_243",
    "type": "사건",
    "kind": "detail",
    "title": "대가야가 신라에 정복되었다.",
    "description": "대가야가 신라에 정복되었다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "77회 기본 Q7 X"
  },
  {
    "id": "77회_q7_244",
    "type": "사건",
    "kind": "detail",
    "title": "당이 안동도호부를 설치하였다.",
    "description": "당이 안동도호부를 설치하였다.",
    "startYear": 668,
    "endYear": 668,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "당의 안동도호부 설치"
    ],
    "_src": "77회 기본 Q7 X"
  },
  {
    "id": "77회_q7_245",
    "type": "사건",
    "kind": "detail",
    "title": "신라가 기벌포에서 당군을 격파하였다.",
    "description": "신라가 기벌포에서 당군을 격파하였다.",
    "startYear": 675,
    "endYear": 676,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "매소성·기벌포 전투"
    ],
    "_src": "77회 기본 Q7 X"
  },
  {
    "id": "77회_q7_246",
    "type": "사건",
    "kind": "detail",
    "title": "고구려가 안시성 전투에서 당군을 물리쳤다.",
    "description": "고구려가 안시성 전투에서 당군을 물리쳤다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "77회 기본 Q7 O"
  },
  {
    "id": "77회_q8_247",
    "type": "사건",
    "kind": "detail",
    "title": "울산항에 아라비아 상인이 왕래했어요.",
    "description": "울산항에 아라비아 상인이 왕래했어요.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "77회 기본 Q8 O"
  },
  {
    "id": "77회_q8_248",
    "type": "사건",
    "kind": "detail",
    "title": "광산을 전문적으로 경영하는 덕대가 출현했어요.",
    "description": "광산을 전문적으로 경영하는 덕대가 출현했어요.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 기본 Q8 X"
  },
  {
    "id": "77회_q8_249",
    "type": "사건",
    "kind": "detail",
    "title": "과전법이 실시됐어요.",
    "description": "과전법이 실시됐어요.",
    "startYear": 1391,
    "endYear": 1466,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "과전법"
    ],
    "_src": "77회 기본 Q8 X"
  },
  {
    "id": "77회_q8_250",
    "type": "사건",
    "kind": "detail",
    "title": "솔빈부의 말을 특산물로 수출했어요.",
    "description": "솔빈부의 말을 특산물로 수출했어요.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "77회 기본 Q8 X"
  },
  {
    "id": "77회_q10_255",
    "type": "사건",
    "kind": "detail",
    "title": "훈요 10조를 남김",
    "description": "훈요 10조를 남김",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "77회 기본 Q10 X"
  },
  {
    "id": "77회_q10_256",
    "type": "사건",
    "kind": "detail",
    "title": "국호를 태봉으로 바꿈",
    "description": "국호를 태봉으로 바꿈",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "77회 기본 Q10 O"
  },
  {
    "id": "77회_q10_257",
    "type": "사건",
    "kind": "detail",
    "title": "공산 전투에서 승리함",
    "description": "공산 전투에서 승리함",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "77회 기본 Q10 X"
  },
  {
    "id": "77회_q10_258",
    "type": "사건",
    "kind": "detail",
    "title": "경주의 사심관으로 임명됨",
    "description": "경주의 사심관으로 임명됨",
    "startYear": 927,
    "endYear": 935,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 경순왕"
    ],
    "_src": "77회 기본 Q10 X"
  },
  {
    "id": "77회_q11_259",
    "type": "사건",
    "kind": "detail",
    "title": "녹읍을 폐지하였다.",
    "description": "녹읍을 폐지하였다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "77회 기본 Q11 X"
  },
  {
    "id": "77회_q11_260",
    "type": "사건",
    "kind": "detail",
    "title": "과거제를 시행하였다.",
    "description": "과거제를 시행하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "77회 기본 Q11 O"
  },
  {
    "id": "77회_q11_261",
    "type": "사건",
    "kind": "detail",
    "title": "교정도감을 설치하였다.",
    "description": "교정도감을 설치하였다.",
    "startYear": 1149,
    "endYear": 1219,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "최충헌"
    ],
    "_src": "77회 기본 Q11 X"
  },
  {
    "id": "77회_q11_262",
    "type": "사건",
    "kind": "detail",
    "title": "쌍성총관부를 공격하였다.",
    "description": "쌍성총관부를 공격하였다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "77회 기본 Q11 X"
  },
  {
    "id": "77회_q12_263",
    "type": "사건",
    "kind": "detail",
    "title": "김흠돌이 반란을 도모하였다.",
    "description": "김흠돌이 반란을 도모하였다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "77회 기본 Q12 X"
  },
  {
    "id": "77회_q12_264",
    "type": "사건",
    "kind": "detail",
    "title": "장문휴가 등주를 공격하였다.",
    "description": "장문휴가 등주를 공격하였다.",
    "startYear": 719,
    "endYear": 737,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해 무왕"
    ],
    "_src": "77회 기본 Q12 X"
  },
  {
    "id": "77회_q12_265",
    "type": "사건",
    "kind": "detail",
    "title": "계백이 황산벌에서 항전하였다.",
    "description": "계백이 황산벌에서 항전하였다.",
    "startYear": 660,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "황산벌 전투"
    ],
    "_src": "77회 기본 Q12 X"
  },
  {
    "id": "77회_q12_266",
    "type": "사건",
    "kind": "detail",
    "title": "강감찬이 귀주에서 대승을 거두었다.",
    "description": "강감찬이 귀주에서 대승을 거두었다.",
    "startYear": 993,
    "endYear": 994,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "거란 1차 침입"
    ],
    "_src": "77회 기본 Q12 O"
  },
  {
    "id": "77회_q13_269",
    "type": "사건",
    "kind": "detail",
    "title": "의금부",
    "description": "의금부",
    "startYear": 1414,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 의금부"
    ],
    "_src": "77회 기본 Q13 X"
  },
  {
    "id": "77회_q15_271",
    "type": "사건",
    "kind": "detail",
    "title": "건원중보",
    "description": "건원중보",
    "startYear": 996,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 화폐"
    ],
    "_src": "77회 기본 Q15 O"
  },
  {
    "id": "77회_q15_272",
    "type": "사건",
    "kind": "detail",
    "title": "상평통보",
    "description": "상평통보",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 기본 Q15 X"
  },
  {
    "id": "77회_q15_273",
    "type": "사건",
    "kind": "detail",
    "title": "반량전",
    "description": "반량전",
    "startYear": -300,
    "endYear": 200,
    "difficulty": 3,
    "era": "선사시대",
    "tags": [
      "중국 화폐"
    ],
    "_src": "77회 기본 Q15 X"
  },
  {
    "id": "77회_q15_274",
    "type": "사건",
    "kind": "detail",
    "title": "명도전",
    "description": "명도전",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 3,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "77회 기본 Q15 X"
  },
  {
    "id": "77회_q16_275",
    "type": "사건",
    "kind": "detail",
    "title": "청주 흥덕사에서 간행하였다.",
    "description": "청주 흥덕사에서 간행하였다.",
    "startYear": 1377,
    "endYear": 1377,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "직지심체요절"
    ],
    "_src": "77회 기본 Q16 O"
  },
  {
    "id": "77회_q16_276",
    "type": "사건",
    "kind": "detail",
    "title": "김부식 등이 왕명을 받아 편찬하였다.",
    "description": "김부식 등이 왕명을 받아 편찬하였다.",
    "startYear": 1145,
    "endYear": 1145,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "삼국사기"
    ],
    "_src": "77회 기본 Q16 X"
  },
  {
    "id": "77회_q16_277",
    "type": "사건",
    "kind": "detail",
    "title": "몽골의 침입을 물리치고자 제작하였다.",
    "description": "몽골의 침입을 물리치고자 제작하였다.",
    "startYear": 1236,
    "endYear": 1251,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "팔만대장경"
    ],
    "_src": "77회 기본 Q16 X"
  },
  {
    "id": "77회_q16_278",
    "type": "사건",
    "kind": "detail",
    "title": "단군의 고조선 건국 이야기가 수록되어 있다.",
    "description": "단군의 고조선 건국 이야기가 수록되어 있다.",
    "startYear": 1281,
    "endYear": 1281,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "삼국유사"
    ],
    "_src": "77회 기본 Q16 X"
  },
  {
    "id": "77회_q17_279",
    "type": "사건",
    "kind": "detail",
    "title": "천태종을 창시하였다.",
    "description": "천태종을 창시하였다.",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 의천"
    ],
    "_src": "77회 기본 Q17 X"
  },
  {
    "id": "77회_q17_280",
    "type": "사건",
    "kind": "detail",
    "title": "삼국유사를 저술하였다.",
    "description": "삼국유사를 저술하였다.",
    "startYear": 1206,
    "endYear": 1289,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "일연"
    ],
    "_src": "77회 기본 Q17 X"
  },
  {
    "id": "77회_q17_281",
    "type": "사건",
    "kind": "detail",
    "title": "왕오천축국전을 지었다.",
    "description": "왕오천축국전을 지었다.",
    "startYear": 704,
    "endYear": 787,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "혜초"
    ],
    "_src": "77회 기본 Q17 X"
  },
  {
    "id": "77회_q17_282",
    "type": "사건",
    "kind": "detail",
    "title": "수선사 결사를 제창하였다.",
    "description": "수선사 결사를 제창하였다.",
    "startYear": 1158,
    "endYear": 1210,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "지눌"
    ],
    "_src": "77회 기본 Q17 O"
  },
  {
    "id": "77회_q18_283",
    "type": "사건",
    "kind": "detail",
    "title": "경당을 설치하였다.",
    "description": "경당을 설치하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "77회 기본 Q18 X"
  },
  {
    "id": "77회_q18_284",
    "type": "사건",
    "kind": "detail",
    "title": "골품제를 실시하였다.",
    "description": "골품제를 실시하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "77회 기본 Q18 X"
  },
  {
    "id": "77회_q18_285",
    "type": "사건",
    "kind": "detail",
    "title": "연등회 팔관회를 개최하였다.",
    "description": "연등회 팔관회를 개최하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "77회 기본 Q18 O"
  },
  {
    "id": "77회_q18_286",
    "type": "사건",
    "kind": "detail",
    "title": "정사암에서 재상을 선출하였다.",
    "description": "정사암에서 재상을 선출하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "77회 기본 Q18 X"
  },
  {
    "id": "77회_q20_291",
    "type": "사건",
    "kind": "detail",
    "title": "집현전이 설치되었다.",
    "description": "집현전이 설치되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "77회 기본 Q20 O"
  },
  {
    "id": "77회_q20_292",
    "type": "사건",
    "kind": "detail",
    "title": "직전법이 실시되었다.",
    "description": "직전법이 실시되었다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "77회 기본 Q20 X"
  },
  {
    "id": "77회_q20_293",
    "type": "사건",
    "kind": "detail",
    "title": "경국대전이 완성되었다.",
    "description": "경국대전이 완성되었다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "77회 기본 Q20 X"
  },
  {
    "id": "77회_q20_294",
    "type": "사건",
    "kind": "detail",
    "title": "백두산정계비가 건립되었다.",
    "description": "백두산정계비가 건립되었다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "77회 기본 Q20 X"
  },
  {
    "id": "77회_q23_303",
    "type": "사건",
    "kind": "detail",
    "title": "군포를 2필에서 1필로 줄였다.",
    "description": "군포를 2필에서 1필로 줄였다.",
    "startYear": 1750,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "균역법"
    ],
    "_src": "77회 기본 Q23 X"
  },
  {
    "id": "77회_q23_304",
    "type": "사건",
    "kind": "detail",
    "title": "공인이 등장하는 배경이 되었다.",
    "description": "공인이 등장하는 배경이 되었다.",
    "startYear": 1608,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "대동법"
    ],
    "_src": "77회 기본 Q23 O"
  },
  {
    "id": "77회_q23_305",
    "type": "사건",
    "kind": "detail",
    "title": "전세를 1결당 4~6두로 고정하였다.",
    "description": "전세를 1결당 4~6두로 고정하였다.",
    "startYear": 1635,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "영정법"
    ],
    "_src": "77회 기본 Q23 X"
  },
  {
    "id": "77회_q23_306",
    "type": "사건",
    "kind": "detail",
    "title": "토지 소유자에게 지계를 발급하였다.",
    "description": "토지 소유자에게 지계를 발급하였다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "77회 기본 Q23 X"
  },
  {
    "id": "77회_q24_307",
    "type": "사건",
    "kind": "detail",
    "title": "박위가 쓰시마섬을 정벌하였다.",
    "description": "박위가 쓰시마섬을 정벌하였다.",
    "startYear": 1374,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 우왕"
    ],
    "_src": "77회 기본 Q24 X"
  },
  {
    "id": "77회_q24_308",
    "type": "사건",
    "kind": "detail",
    "title": "인조가 남한산성으로 피란하였다.",
    "description": "인조가 남한산성으로 피란하였다.",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "병자호란"
    ],
    "_src": "77회 기본 Q24 X"
  },
  {
    "id": "77회_q24_309",
    "type": "사건",
    "kind": "detail",
    "title": "곽재우가 의령에서 의병을 일으켰다.",
    "description": "곽재우가 의령에서 의병을 일으켰다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "77회 기본 Q24 O"
  },
  {
    "id": "77회_q24_310",
    "type": "사건",
    "kind": "detail",
    "title": "김윤후가 처인성 전투에서 승리하였다.",
    "description": "김윤후가 처인성 전투에서 승리하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "77회 기본 Q24 X"
  },
  {
    "id": "77회_q25_311",
    "type": "사건",
    "kind": "detail",
    "title": "탕평비를 건립하였다.",
    "description": "탕평비를 건립하였다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "77회 기본 Q25 X"
  },
  {
    "id": "77회_q25_312",
    "type": "사건",
    "kind": "detail",
    "title": "홍문관을 설치하였다.",
    "description": "홍문관을 설치하였다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "77회 기본 Q25 X"
  },
  {
    "id": "77회_q25_313",
    "type": "사건",
    "kind": "detail",
    "title": "대전회통을 편찬하였다.",
    "description": "대전회통을 편찬하였다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "77회 기본 Q25 X"
  },
  {
    "id": "77회_q25_314",
    "type": "사건",
    "kind": "detail",
    "title": "초계문신제를 실시하였다.",
    "description": "초계문신제를 실시하였다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "77회 기본 Q25 O"
  },
  {
    "id": "77회_q26_315",
    "type": "사건",
    "kind": "detail",
    "title": "탈춤 공연을 벌이는 광대",
    "description": "탈춤 공연을 벌이는 광대",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 기본 Q26 O"
  },
  {
    "id": "77회_q26_316",
    "type": "사건",
    "kind": "detail",
    "title": "초조대장경을 조판하는 장인",
    "description": "초조대장경을 조판하는 장인",
    "startYear": 1011,
    "endYear": 1087,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "초조대장경"
    ],
    "_src": "77회 기본 Q26 X"
  },
  {
    "id": "77회_q26_317",
    "type": "사건",
    "kind": "detail",
    "title": "한글 소설을 읽어주는 전기수",
    "description": "한글 소설을 읽어주는 전기수",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 기본 Q26 O"
  },
  {
    "id": "77회_q26_318",
    "type": "사건",
    "kind": "detail",
    "title": "판소리 춘향가를 부르는 소리꾼",
    "description": "판소리 춘향가를 부르는 소리꾼",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 기본 Q26 O"
  },
  {
    "id": "77회_q27_319",
    "type": "사건",
    "kind": "detail",
    "title": "전시과는 어떻게 변화하였을까?",
    "description": "전시과는 어떻게 변화하였을까?",
    "startYear": 976,
    "endYear": 1391,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "전시과"
    ],
    "_src": "77회 기본 Q27 X"
  },
  {
    "id": "77회_q27_320",
    "type": "사건",
    "kind": "detail",
    "title": "동시전은 어떤 역할을 담당하였을까?",
    "description": "동시전은 어떤 역할을 담당하였을까?",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "77회 기본 Q27 X"
  },
  {
    "id": "77회_q27_321",
    "type": "사건",
    "kind": "detail",
    "title": "벽란도는 국제 무역항으로 어떻게 성장하였을까?",
    "description": "벽란도는 국제 무역항으로 어떻게 성장하였을까?",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려의 경제"
    ],
    "_src": "77회 기본 Q27 X"
  },
  {
    "id": "77회_q27_322",
    "type": "사건",
    "kind": "detail",
    "title": "담배 인삼 등의 상품 작물 재배가 미친 영향은 무엇일까...",
    "description": "담배 인삼 등의 상품 작물 재배가 미친 영향은 무엇일까?",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 기본 Q27 O"
  },
  {
    "id": "77회_q28_323",
    "type": "사건",
    "kind": "detail",
    "title": "주자감에서 공부하는 학생",
    "description": "주자감에서 공부하는 학생",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "77회 기본 Q28 X"
  },
  {
    "id": "77회_q28_324",
    "type": "사건",
    "kind": "detail",
    "title": "삼별초에 소속되어 훈련받는 군인",
    "description": "삼별초에 소속되어 훈련받는 군인",
    "startYear": 1270,
    "endYear": 1273,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "삼별초 항쟁"
    ],
    "_src": "77회 기본 Q28 X"
  },
  {
    "id": "77회_q28_325",
    "type": "사건",
    "kind": "detail",
    "title": "암태도 소작 쟁의에 참여하는 농민",
    "description": "암태도 소작 쟁의에 참여하는 농민",
    "startYear": 1923,
    "endYear": 1924,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "암태도 소작쟁의"
    ],
    "_src": "77회 기본 Q28 X"
  },
  {
    "id": "77회_q28_326",
    "type": "사건",
    "kind": "detail",
    "title": "척화비를 세우기 위해 돌을 다듬는 석공",
    "description": "척화비를 세우기 위해 돌을 다듬는 석공",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "77회 기본 Q28 O"
  },
  {
    "id": "77회_q29_327",
    "type": "사건",
    "kind": "detail",
    "title": "억울하게 시해당한 국모의 원수를 갚자.",
    "description": "억울하게 시해당한 국모의 원수를 갚자.",
    "startYear": 1895,
    "endYear": 1896,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "을미의병"
    ],
    "_src": "77회 기본 Q29 O"
  },
  {
    "id": "77회_q29_328",
    "type": "사건",
    "kind": "detail",
    "title": "을사오적은 만대의 역적이니 마땅히 제거해야 한다!",
    "description": "을사오적은 만대의 역적이니 마땅히 제거해야 한다!",
    "startYear": 1905,
    "endYear": 1906,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "을사의병"
    ],
    "_src": "77회 기본 Q29 O"
  },
  {
    "id": "77회_q29_329",
    "type": "사건",
    "kind": "detail",
    "title": "우리 13도 창의군은 서울까지 진격한다!",
    "description": "우리 13도 창의군은 서울까지 진격한다!",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "77회 기본 Q29 O"
  },
  {
    "id": "77회_q30_330",
    "type": "사건",
    "kind": "detail",
    "title": "비변사를 혁파하였다.",
    "description": "비변사를 혁파하였다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "77회 기본 Q30 X"
  },
  {
    "id": "77회_q30_331",
    "type": "사건",
    "kind": "detail",
    "title": "공사 노비법을 폐지하였다.",
    "description": "공사 노비법을 폐지하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "77회 기본 Q30 O"
  },
  {
    "id": "77회_q30_332",
    "type": "사건",
    "kind": "detail",
    "title": "대한국 국제를 반포하였다.",
    "description": "대한국 국제를 반포하였다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "77회 기본 Q30 X"
  },
  {
    "id": "77회_q30_333",
    "type": "사건",
    "kind": "detail",
    "title": "5군영을 2영으로 통합하였다.",
    "description": "5군영을 2영으로 통합하였다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "77회 기본 Q30 X"
  },
  {
    "id": "77회_q31_334",
    "type": "사건",
    "kind": "detail",
    "title": "경인선 기차 타고 인천 개항장 가기",
    "description": "경인선 기차 타고 인천 개항장 가기",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "77회 기본 Q31 O"
  },
  {
    "id": "77회_q31_335",
    "type": "사건",
    "kind": "detail",
    "title": "조선어 학회의 한글 강습회 참여하기",
    "description": "조선어 학회의 한글 강습회 참여하기",
    "startYear": 1931,
    "endYear": 1942,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "조선어학회"
    ],
    "_src": "77회 기본 Q31 X"
  },
  {
    "id": "77회_q31_336",
    "type": "사건",
    "kind": "detail",
    "title": "경성 방송국에서 송출하는 라디오 방송 듣기",
    "description": "경성 방송국에서 송출하는 라디오 방송 듣기",
    "startYear": 1927,
    "endYear": 1945,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "경성방송국"
    ],
    "_src": "77회 기본 Q31 X"
  },
  {
    "id": "77회_q31_337",
    "type": "사건",
    "kind": "detail",
    "title": "나운규 감독의 영화 아리랑 상영 극장 방문하기",
    "description": "나운규 감독의 영화 아리랑 상영 극장 방문하기",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "영화 아리랑"
    ],
    "_src": "77회 기본 Q31 X"
  },
  {
    "id": "77회_q34_348",
    "type": "사건",
    "kind": "detail",
    "title": "대한 광복회",
    "description": "대한 광복회",
    "startYear": 1915,
    "endYear": 1918,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한광복회"
    ],
    "_src": "77회 기본 Q34 X"
  },
  {
    "id": "77회_q34_349",
    "type": "사건",
    "kind": "detail",
    "title": "독립 의군부",
    "description": "독립 의군부",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "77회 기본 Q34 X"
  },
  {
    "id": "77회_q36_354",
    "type": "사건",
    "kind": "detail",
    "title": "통감부의 탄압으로 실패하였다.",
    "description": "통감부의 탄압으로 실패하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "77회 기본 Q36 X"
  },
  {
    "id": "77회_q36_355",
    "type": "사건",
    "kind": "detail",
    "title": "순종의 인산일을 계기로 일어났다.",
    "description": "순종의 인산일을 계기로 일어났다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "77회 기본 Q36 X"
  },
  {
    "id": "77회_q36_356",
    "type": "사건",
    "kind": "detail",
    "title": "제암리 학살 등 일제의 가혹한 탄압을 받았다.",
    "description": "제암리 학살 등 일제의 가혹한 탄압을 받았다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "3·1 운동"
    ],
    "_src": "77회 기본 Q36 O"
  },
  {
    "id": "77회_q36_357",
    "type": "사건",
    "kind": "detail",
    "title": "신간회에서 진상 조사단을 파견하여 지원하였다.",
    "description": "신간회에서 진상 조사단을 파견하여 지원하였다.",
    "startYear": 1929,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광주학생항일운동"
    ],
    "_src": "77회 기본 Q36 X"
  },
  {
    "id": "77회_q37_358",
    "type": "사건",
    "kind": "detail",
    "title": "강화도 조약의 내용을 살펴본다.",
    "description": "강화도 조약의 내용을 살펴본다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "77회 기본 Q37 X"
  },
  {
    "id": "77회_q37_359",
    "type": "사건",
    "kind": "detail",
    "title": "기기창이 설치된 시기를 검색한다.",
    "description": "기기창이 설치된 시기를 검색한다.",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "기기창"
    ],
    "_src": "77회 기본 Q37 X"
  },
  {
    "id": "77회_q37_360",
    "type": "사건",
    "kind": "detail",
    "title": "조선 형평사의 창립 배경을 알아본다.",
    "description": "조선 형평사의 창립 배경을 알아본다.",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "형평 운동"
    ],
    "_src": "77회 기본 Q37 O"
  },
  {
    "id": "77회_q37_361",
    "type": "사건",
    "kind": "detail",
    "title": "홍경래의 난이 전개된 과정을 조사한다.",
    "description": "홍경래의 난이 전개된 과정을 조사한다.",
    "startYear": 1811,
    "endYear": 1812,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "홍경래의 난"
    ],
    "_src": "77회 기본 Q37 X"
  },
  {
    "id": "77회_q38_362",
    "type": "사건",
    "kind": "detail",
    "title": "소비 문화의 공간인 백화점이 등장했어요.",
    "description": "소비 문화의 공간인 백화점이 등장했어요.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 기본 Q38 O"
  },
  {
    "id": "77회_q38_363",
    "type": "사건",
    "kind": "detail",
    "title": "여성들은 작업복으로 몸뻬를 입도록 강요받았어요.",
    "description": "여성들은 작업복으로 몸뻬를 입도록 강요받았어요.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 기본 Q38 O"
  },
  {
    "id": "77회_q38_364",
    "type": "사건",
    "kind": "detail",
    "title": "사교 문화의 공간인 끽다점이 생겼어요.",
    "description": "사교 문화의 공간인 끽다점이 생겼어요.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 기본 Q38 O"
  },
  {
    "id": "77회_q38_365",
    "type": "사건",
    "kind": "detail",
    "title": "새마을 운동이 진행되면서 초가지붕이 슬레이트 지붕 등으...",
    "description": "새마을 운동이 진행되면서 초가지붕이 슬레이트 지붕 등으로 바뀌었어요.",
    "startYear": 1970,
    "endYear": 1985,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "새마을 운동"
    ],
    "_src": "77회 기본 Q38 X"
  },
  {
    "id": "77회_q39_366",
    "type": "사건",
    "kind": "detail",
    "title": "별기군에서 훈련하는 군인",
    "description": "별기군에서 훈련하는 군인",
    "startYear": 1881,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "별기군"
    ],
    "_src": "77회 기본 Q39 X"
  },
  {
    "id": "77회_q39_367",
    "type": "사건",
    "kind": "detail",
    "title": "태형을 집행하는 헌병 경찰",
    "description": "태형을 집행하는 헌병 경찰",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "77회 기본 Q39 X"
  },
  {
    "id": "77회_q39_368",
    "type": "사건",
    "kind": "detail",
    "title": "육영 공원에서 영어를 가르치는 외국인 교사",
    "description": "육영 공원에서 영어를 가르치는 외국인 교사",
    "startYear": 1886,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "육영공원"
    ],
    "_src": "77회 기본 Q39 X"
  },
  {
    "id": "77회_q39_369",
    "type": "사건",
    "kind": "detail",
    "title": "여자 정신 근로령을 관보에 게재하는 조선 총독부 관리",
    "description": "여자 정신 근로령을 관보에 게재하는 조선 총독부 관리",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "77회 기본 Q39 O"
  },
  {
    "id": "77회_q42_378",
    "type": "사건",
    "kind": "detail",
    "title": "만민 공동회를 개최하였다.",
    "description": "만민 공동회를 개최하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "77회 기본 Q42 X"
  },
  {
    "id": "77회_q42_379",
    "type": "사건",
    "kind": "detail",
    "title": "한국 광복군을 창설하였다.",
    "description": "한국 광복군을 창설하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "77회 기본 Q42 O"
  },
  {
    "id": "77회_q42_380",
    "type": "사건",
    "kind": "detail",
    "title": "105인 사건으로 와해되었다.",
    "description": "105인 사건으로 와해되었다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "77회 기본 Q42 X"
  },
  {
    "id": "77회_q42_381",
    "type": "사건",
    "kind": "detail",
    "title": "고종의 밀지를 받아 조직되었다.",
    "description": "고종의 밀지를 받아 조직되었다.",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "77회 기본 Q42 X"
  },
  {
    "id": "77회_q44_382",
    "type": "사건",
    "kind": "detail",
    "title": "닉슨 독트린이 발표되었다.",
    "description": "닉슨 독트린이 발표되었다.",
    "startYear": 1969,
    "endYear": 1969,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "닉슨 독트린"
    ],
    "_src": "77회 기본 Q44 X"
  },
  {
    "id": "77회_q44_383",
    "type": "사건",
    "kind": "detail",
    "title": "브라운 각서가 체결되었다.",
    "description": "브라운 각서가 체결되었다.",
    "startYear": 1966,
    "endYear": 1966,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "브라운 각서"
    ],
    "_src": "77회 기본 Q44 X"
  },
  {
    "id": "77회_q44_384",
    "type": "사건",
    "kind": "detail",
    "title": "인천 상륙 작전이 전개되었다.",
    "description": "인천 상륙 작전이 전개되었다.",
    "startYear": 1950,
    "endYear": 1953,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·25 전쟁"
    ],
    "_src": "77회 기본 Q44 O"
  },
  {
    "id": "77회_q44_385",
    "type": "사건",
    "kind": "detail",
    "title": "조선 건국 동맹이 결성되었다.",
    "description": "조선 건국 동맹이 결성되었다.",
    "startYear": 1944,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선 건국 동맹"
    ],
    "_src": "77회 기본 Q44 X"
  },
  {
    "id": "77회_q45_386",
    "type": "사건",
    "kind": "detail",
    "title": "비례 대표제가 적용되었다.",
    "description": "비례 대표제가 적용되었다.",
    "startYear": 1963,
    "endYear": 2024,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "비례 대표제"
    ],
    "_src": "77회 기본 Q45 X"
  },
  {
    "id": "77회_q45_387",
    "type": "사건",
    "kind": "detail",
    "title": "우리나라 최초의 보통 선거였다.",
    "description": "우리나라 최초의 보통 선거였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "77회 기본 Q45 O"
  },
  {
    "id": "77회_q45_388",
    "type": "사건",
    "kind": "detail",
    "title": "양원제 국회가 출범하는 결과를 가져왔다.",
    "description": "양원제 국회가 출범하는 결과를 가져왔다.",
    "startYear": 1960,
    "endYear": 1961,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "제2공화국 헌법"
    ],
    "_src": "77회 기본 Q45 X"
  },
  {
    "id": "77회_q45_389",
    "type": "사건",
    "kind": "detail",
    "title": "통일 주체 국민 회의 대의원을 선출하였다.",
    "description": "통일 주체 국민 회의 대의원을 선출하였다.",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "유신헌법"
    ],
    "_src": "77회 기본 Q45 X"
  },
  {
    "id": "77회_q46_390",
    "type": "사건",
    "kind": "detail",
    "title": "삼청 교육대가 운영되었다.",
    "description": "삼청 교육대가 운영되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "77회 기본 Q46 X"
  },
  {
    "id": "77회_q46_391",
    "type": "사건",
    "kind": "detail",
    "title": "경부 고속 도로가 준공되었다.",
    "description": "경부 고속 도로가 준공되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 기본 Q46 X"
  },
  {
    "id": "77회_q46_392",
    "type": "사건",
    "kind": "detail",
    "title": "서울에서 올림픽 대회가 개최되었다.",
    "description": "서울에서 올림픽 대회가 개최되었다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "77회 기본 Q46 X"
  },
  {
    "id": "77회_q46_393",
    "type": "사건",
    "kind": "detail",
    "title": "국민학교가 초등학교로 명칭이 바뀌었다.",
    "description": "국민학교가 초등학교로 명칭이 바뀌었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "77회 기본 Q46 O"
  },
  {
    "id": "77회_q47_394",
    "type": "사건",
    "kind": "detail",
    "title": "경제 협력 개발 기구(OECD) 가입",
    "description": "경제 협력 개발 기구(OECD) 가입",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "77회 기본 Q47 X"
  },
  {
    "id": "77회_q47_395",
    "type": "사건",
    "kind": "detail",
    "title": "미국과 자유 무역 협정(FTA) 체결",
    "description": "미국과 자유 무역 협정(FTA) 체결",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "77회 기본 Q47 X"
  },
  {
    "id": "77회_q47_396",
    "type": "사건",
    "kind": "detail",
    "title": "원조 물자를 가공하는 삼백 산업 발달",
    "description": "원조 물자를 가공하는 삼백 산업 발달",
    "startYear": 1950,
    "endYear": 1959,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1950년대 경제"
    ],
    "_src": "77회 기본 Q47 O"
  },
  {
    "id": "77회_q47_397",
    "type": "사건",
    "kind": "detail",
    "title": "반도체 자동차 등 기술 집약적 산업 성장",
    "description": "반도체 자동차 등 기술 집약적 산업 성장",
    "startYear": 1980,
    "endYear": 1989,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1980년대 경제"
    ],
    "_src": "77회 기본 Q47 X"
  },
  {
    "id": "77회_q48_398",
    "type": "사건",
    "kind": "detail",
    "title": "명량에서 적의 함대를 격파하다",
    "description": "명량에서 적의 함대를 격파하다",
    "startYear": 1545,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이순신"
    ],
    "_src": "77회 기본 Q48 X"
  },
  {
    "id": "77회_q48_399",
    "type": "사건",
    "kind": "detail",
    "title": "우산국을 신라에 복속시키다",
    "description": "우산국을 신라에 복속시키다",
    "startYear": 480,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "이사부"
    ],
    "_src": "77회 기본 Q48 X"
  },
  {
    "id": "77회_q48_400",
    "type": "사건",
    "kind": "detail",
    "title": "진포에서 왜구를 크게 격퇴하다",
    "description": "진포에서 왜구를 크게 격퇴하다",
    "startYear": 1325,
    "endYear": 1395,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최무선"
    ],
    "_src": "77회 기본 Q48 O"
  },
  {
    "id": "77회_q48_401",
    "type": "사건",
    "kind": "detail",
    "title": "청해진을 중심으로 해상 무역을 전개하다",
    "description": "청해진을 중심으로 해상 무역을 전개하다",
    "startYear": 787,
    "endYear": 846,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "장보고"
    ],
    "_src": "77회 기본 Q48 X"
  },
  {
    "id": "77회_q49_403",
    "type": "사건",
    "kind": "detail",
    "title": "6월 민주 항쟁",
    "description": "6월 민주 항쟁",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "77회 기본 Q49 X"
  },
  {
    "id": "77회_q49_404",
    "type": "사건",
    "kind": "detail",
    "title": "부마 민주 항쟁",
    "description": "부마 민주 항쟁",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "부마민주항쟁"
    ],
    "_src": "77회 기본 Q49 X"
  },
  {
    "id": "77회_q49_405",
    "type": "사건",
    "kind": "detail",
    "title": "5·18 민주화 운동",
    "description": "5·18 민주화 운동",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "5·18 광주민주화운동"
    ],
    "_src": "77회 기본 Q49 O"
  },
  {
    "id": "77회_q50_406",
    "type": "사건",
    "kind": "detail",
    "title": "남북 조절 위원회를 구성하였다.",
    "description": "남북 조절 위원회를 구성하였다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 기본 Q50 O"
  },
  {
    "id": "77회_q50_407",
    "type": "사건",
    "kind": "detail",
    "title": "남북한이 유엔에 동시 가입하였다.",
    "description": "남북한이 유엔에 동시 가입하였다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "77회 기본 Q50 X"
  },
  {
    "id": "77회_q50_408",
    "type": "사건",
    "kind": "detail",
    "title": "개성 공업 지구 건설에 합의하였다.",
    "description": "개성 공업 지구 건설에 합의하였다.",
    "startYear": 1998,
    "endYear": 2003,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "김대중 정부"
    ],
    "_src": "77회 기본 Q50 X"
  },
  {
    "id": "77회_q50_409",
    "type": "사건",
    "kind": "detail",
    "title": "판문점에서 남북 정상 회담을 개최하였다.",
    "description": "판문점에서 남북 정상 회담을 개최하였다.",
    "startYear": 2017,
    "endYear": 2022,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "문재인 정부 통일"
    ],
    "_src": "77회 기본 Q50 X"
  },
  {
    "id": "77회_q1_410",
    "type": "사건",
    "kind": "detail",
    "title": "철제 무기로 정복 활동을 벌였다.",
    "description": "철제 무기로 정복 활동을 벌였다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "77회 심화 Q1 X"
  },
  {
    "id": "77회_q1_411",
    "type": "사건",
    "kind": "detail",
    "title": "소를 이용한 깊이갈이가 일반화되었다.",
    "description": "소를 이용한 깊이갈이가 일반화되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "77회 심화 Q1 X"
  },
  {
    "id": "77회_q1_412",
    "type": "사건",
    "kind": "detail",
    "title": "많은 인력을 동원하여 고인돌을 축조하였다.",
    "description": "많은 인력을 동원하여 고인돌을 축조하였다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "77회 심화 Q1 O"
  },
  {
    "id": "77회_q1_413",
    "type": "사건",
    "kind": "detail",
    "title": "주먹도끼·찍개 등의 뗀석기를 처음 제작하였다.",
    "description": "주먹도끼·찍개 등의 뗀석기를 처음 제작하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "77회 심화 Q1 X"
  },
  {
    "id": "77회_q1_414",
    "type": "사건",
    "kind": "detail",
    "title": "가락바퀴와 뼈바늘을 이용하여 옷을 만들기 시작하였다.",
    "description": "가락바퀴와 뼈바늘을 이용하여 옷을 만들기 시작하였다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "77회 심화 Q1 X"
  },
  {
    "id": "77회_q2_415",
    "type": "사건",
    "kind": "detail",
    "title": "민며느리제라는 혼인 풍습이 있었다.",
    "description": "민며느리제라는 혼인 풍습이 있었다.",
    "startYear": -200,
    "endYear": 285,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "옥저"
    ],
    "_src": "77회 심화 Q2 X"
  },
  {
    "id": "77회_q2_416",
    "type": "사건",
    "kind": "detail",
    "title": "국가 중대사를 정사암에서 논의하였다.",
    "description": "국가 중대사를 정사암에서 논의하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "77회 심화 Q2 X"
  },
  {
    "id": "77회_q2_417",
    "type": "사건",
    "kind": "detail",
    "title": "여러 가(加)들이 별도로 사출도를 주관하였다.",
    "description": "여러 가(加)들이 별도로 사출도를 주관하였다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "77회 심화 Q2 X"
  },
  {
    "id": "77회_q2_418",
    "type": "사건",
    "kind": "detail",
    "title": "지방의 여러 성에 욕살·처려근지 등을 두었다.",
    "description": "지방의 여러 성에 욕살·처려근지 등을 두었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "77회 심화 Q2 X"
  },
  {
    "id": "77회_q2_419",
    "type": "사건",
    "kind": "detail",
    "title": "사회 질서를 유지하기 위해 범금 8조를 만들었다.",
    "description": "사회 질서를 유지하기 위해 범금 8조를 만들었다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "77회 심화 Q2 O"
  },
  {
    "id": "77회_q3_420",
    "type": "사건",
    "kind": "detail",
    "title": "진대법의 시행 목적을 파악한다.",
    "description": "진대법의 시행 목적을 파악한다.",
    "startYear": 179,
    "endYear": 197,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 고국천왕"
    ],
    "_src": "77회 심화 Q3 X"
  },
  {
    "id": "77회_q3_421",
    "type": "사건",
    "kind": "detail",
    "title": "책화의 사회적 의미를 조사한다.",
    "description": "책화의 사회적 의미를 조사한다.",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "동예"
    ],
    "_src": "77회 심화 Q3 O"
  },
  {
    "id": "77회_q3_422",
    "type": "사건",
    "kind": "detail",
    "title": "신성 구역인 소도의 기능을 알아본다.",
    "description": "신성 구역인 소도의 기능을 알아본다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "77회 심화 Q3 X"
  },
  {
    "id": "77회_q3_423",
    "type": "사건",
    "kind": "detail",
    "title": "화백 회의의 의사 결정 방식을 살펴본다.",
    "description": "화백 회의의 의사 결정 방식을 살펴본다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "77회 심화 Q3 X"
  },
  {
    "id": "77회_q3_424",
    "type": "사건",
    "kind": "detail",
    "title": "포상 8국 전쟁이 전개되는 과정을 찾아본다.",
    "description": "포상 8국 전쟁이 전개되는 과정을 찾아본다.",
    "startYear": 42,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "가야"
    ],
    "_src": "77회 심화 Q3 X"
  },
  {
    "id": "77회_q5_425",
    "type": "사건",
    "kind": "detail",
    "title": "금마저에 미륵사를 창건하였다.",
    "description": "금마저에 미륵사를 창건하였다.",
    "startYear": 600,
    "endYear": 641,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무왕"
    ],
    "_src": "77회 심화 Q5 X"
  },
  {
    "id": "77회_q5_426",
    "type": "사건",
    "kind": "detail",
    "title": "고흥에게 서기를 편찬하게 하였다.",
    "description": "고흥에게 서기를 편찬하게 하였다.",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 근초고왕"
    ],
    "_src": "77회 심화 Q5 X"
  },
  {
    "id": "77회_q5_427",
    "type": "사건",
    "kind": "detail",
    "title": "지방의 22담로에 왕족을 파견하였다.",
    "description": "지방의 22담로에 왕족을 파견하였다.",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무령왕"
    ],
    "_src": "77회 심화 Q5 O"
  },
  {
    "id": "77회_q5_428",
    "type": "사건",
    "kind": "detail",
    "title": "동진에서 온 마라난타를 통해 불교를 수용하였다.",
    "description": "동진에서 온 마라난타를 통해 불교를 수용하였다.",
    "startYear": 384,
    "endYear": 385,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 침류왕"
    ],
    "_src": "77회 심화 Q5 X"
  },
  {
    "id": "77회_q5_429",
    "type": "사건",
    "kind": "detail",
    "title": "장군 달기를 보내 고구려의 도살성을 점령하였다.",
    "description": "장군 달기를 보내 고구려의 도살성을 점령하였다.",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 성왕"
    ],
    "_src": "77회 심화 Q5 X"
  },
  {
    "id": "77회_q6_430",
    "type": "사건",
    "kind": "detail",
    "title": "을지문덕이 살수에서 대승을 거두었다.",
    "description": "을지문덕이 살수에서 대승을 거두었다.",
    "startYear": 612,
    "endYear": 612,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "살수대첩"
    ],
    "_src": "77회 심화 Q6 X"
  },
  {
    "id": "77회_q6_431",
    "type": "사건",
    "kind": "detail",
    "title": "복신과 도침이 부여풍을 왕으로 추대하였다.",
    "description": "복신과 도침이 부여풍을 왕으로 추대하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "77회 심화 Q6 O"
  },
  {
    "id": "77회_q6_432",
    "type": "사건",
    "kind": "detail",
    "title": "윤충이 군사를 이끌고 대야성을 함락시켰다.",
    "description": "윤충이 군사를 이끌고 대야성을 함락시켰다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "77회 심화 Q6 X"
  },
  {
    "id": "77회_q6_433",
    "type": "사건",
    "kind": "detail",
    "title": "연개소문이 정변을 일으켜 영류왕을 시해하였다.",
    "description": "연개소문이 정변을 일으켜 영류왕을 시해하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "77회 심화 Q6 X"
  },
  {
    "id": "77회_q6_434",
    "type": "사건",
    "kind": "detail",
    "title": "김춘추가 당으로 건너가 군사 연합을 성사시켰다.",
    "description": "김춘추가 당으로 건너가 군사 연합을 성사시켰다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "77회 심화 Q6 X"
  },
  {
    "id": "77회_q7_435",
    "type": "사건",
    "kind": "detail",
    "title": "12월에 영고라는 제천 행사를 열었다.",
    "description": "12월에 영고라는 제천 행사를 열었다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "77회 심화 Q7 X"
  },
  {
    "id": "77회_q7_436",
    "type": "사건",
    "kind": "detail",
    "title": "주자감을 설치하여 인재를 양성하였다.",
    "description": "주자감을 설치하여 인재를 양성하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "77회 심화 Q7 O"
  },
  {
    "id": "77회_q7_437",
    "type": "사건",
    "kind": "detail",
    "title": "군사 조직으로 9서당 10정을 편성하였다.",
    "description": "군사 조직으로 9서당 10정을 편성하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "77회 심화 Q7 X"
  },
  {
    "id": "77회_q7_438",
    "type": "사건",
    "kind": "detail",
    "title": "기인 제도를 실시하여 지방 세력을 견제하였다.",
    "description": "기인 제도를 실시하여 지방 세력을 견제하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "77회 심화 Q7 X"
  },
  {
    "id": "77회_q7_439",
    "type": "사건",
    "kind": "detail",
    "title": "왕족인 부여씨와 8성 귀족이 지배층을 이루었다.",
    "description": "왕족인 부여씨와 8성 귀족이 지배층을 이루었다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "77회 심화 Q7 X"
  },
  {
    "id": "77회_q8_440",
    "type": "사건",
    "kind": "detail",
    "title": "수도에 서시와 남시를 설치하였다.",
    "description": "수도에 서시와 남시를 설치하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "77회 심화 Q8 X"
  },
  {
    "id": "77회_q8_441",
    "type": "사건",
    "kind": "detail",
    "title": "활구라고 불리는 은병을 주조하였다.",
    "description": "활구라고 불리는 은병을 주조하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "77회 심화 Q8 X"
  },
  {
    "id": "77회_q8_442",
    "type": "사건",
    "kind": "detail",
    "title": "집집마다 부경이라는 창고가 있었다.",
    "description": "집집마다 부경이라는 창고가 있었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "77회 심화 Q8 O"
  },
  {
    "id": "77회_q8_443",
    "type": "사건",
    "kind": "detail",
    "title": "관료전을 지급하고 녹읍을 폐지하였다.",
    "description": "관료전을 지급하고 녹읍을 폐지하였다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "77회 심화 Q8 X"
  },
  {
    "id": "77회_q8_444",
    "type": "사건",
    "kind": "detail",
    "title": "풍흉에 따라 9등급으로 전세를 거두었다.",
    "description": "풍흉에 따라 9등급으로 전세를 거두었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "77회 심화 Q8 X"
  },
  {
    "id": "77회_q9_445",
    "type": "사건",
    "kind": "detail",
    "title": "안승을 보덕왕으로 봉하였다.",
    "description": "안승을 보덕왕으로 봉하였다.",
    "startYear": 661,
    "endYear": 681,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 문무왕"
    ],
    "_src": "77회 심화 Q9 X"
  },
  {
    "id": "77회_q9_446",
    "type": "사건",
    "kind": "detail",
    "title": "광평성 등의 정치 기구를 마련하였다.",
    "description": "광평성 등의 정치 기구를 마련하였다.",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "77회 심화 Q9 O"
  },
  {
    "id": "77회_q9_447",
    "type": "사건",
    "kind": "detail",
    "title": "외교 담판으로 강동 6주를 확보하였다.",
    "description": "외교 담판으로 강동 6주를 확보하였다.",
    "startYear": 942,
    "endYear": 998,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "서희"
    ],
    "_src": "77회 심화 Q9 X"
  },
  {
    "id": "77회_q9_448",
    "type": "사건",
    "kind": "detail",
    "title": "김부를 경주의 사심관으로 임명하였다.",
    "description": "김부를 경주의 사심관으로 임명하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "77회 심화 Q9 X"
  },
  {
    "id": "77회_q9_449",
    "type": "사건",
    "kind": "detail",
    "title": "신라를 공격하여 경애왕을 죽게 하였다.",
    "description": "신라를 공격하여 경애왕을 죽게 하였다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "77회 심화 Q9 X"
  },
  {
    "id": "77회_q10_450",
    "type": "사건",
    "kind": "detail",
    "title": "계백료서를 읽고 있는 관리",
    "description": "계백료서를 읽고 있는 관리",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "77회 심화 Q10 X"
  },
  {
    "id": "77회_q10_451",
    "type": "사건",
    "kind": "detail",
    "title": "담배를 밭에 심고 있는 농민",
    "description": "담배를 밭에 심고 있는 농민",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q10 X"
  },
  {
    "id": "77회_q10_452",
    "type": "사건",
    "kind": "detail",
    "title": "조위총의 난을 진압하는 군인",
    "description": "조위총의 난을 진압하는 군인",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "77회 심화 Q10 X"
  },
  {
    "id": "77회_q10_453",
    "type": "사건",
    "kind": "detail",
    "title": "진전사에서 참선하는 선종 승려",
    "description": "진전사에서 참선하는 선종 승려",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "77회 심화 Q10 O"
  },
  {
    "id": "77회_q10_454",
    "type": "사건",
    "kind": "detail",
    "title": "낙랑군과 교역할 덩이쇠를 주조하는 장인",
    "description": "낙랑군과 교역할 덩이쇠를 주조하는 장인",
    "startYear": 42,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "가야"
    ],
    "_src": "77회 심화 Q10 X"
  },
  {
    "id": "77회_q11_455",
    "type": "사건",
    "kind": "detail",
    "title": "별무반을 편성하였다.",
    "description": "별무반을 편성하였다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "77회 심화 Q11 X"
  },
  {
    "id": "77회_q11_456",
    "type": "사건",
    "kind": "detail",
    "title": "화통도감을 설치하였다.",
    "description": "화통도감을 설치하였다.",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "화통도감"
    ],
    "_src": "77회 심화 Q11 X"
  },
  {
    "id": "77회_q11_457",
    "type": "사건",
    "kind": "detail",
    "title": "진관 체제를 실시하였다.",
    "description": "진관 체제를 실시하였다.",
    "startYear": 1457,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "진관 체제"
    ],
    "_src": "77회 심화 Q11 X"
  },
  {
    "id": "77회_q11_458",
    "type": "사건",
    "kind": "detail",
    "title": "초조대장경을 조판하였다.",
    "description": "초조대장경을 조판하였다.",
    "startYear": 1011,
    "endYear": 1087,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "초조대장경"
    ],
    "_src": "77회 심화 Q11 O"
  },
  {
    "id": "77회_q11_459",
    "type": "사건",
    "kind": "detail",
    "title": "동녕부의 반환을 요청하였다.",
    "description": "동녕부의 반환을 요청하였다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "77회 심화 Q11 X"
  },
  {
    "id": "77회_q12_460",
    "type": "사건",
    "kind": "detail",
    "title": "응방의 설치와 매 서식지의 변화",
    "description": "응방의 설치와 매 서식지의 변화",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "77회 심화 Q12 O"
  },
  {
    "id": "77회_q12_461",
    "type": "사건",
    "kind": "detail",
    "title": "시화호의 조성과 갯벌 생태계 파괴",
    "description": "시화호의 조성과 갯벌 생태계 파괴",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "77회 심화 Q12 X"
  },
  {
    "id": "77회_q12_462",
    "type": "사건",
    "kind": "detail",
    "title": "수의 침략과 요하 일대 감염병의 유행",
    "description": "수의 침략과 요하 일대 감염병의 유행",
    "startYear": 612,
    "endYear": 612,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "살수대첩"
    ],
    "_src": "77회 심화 Q12 X"
  },
  {
    "id": "77회_q12_463",
    "type": "사건",
    "kind": "detail",
    "title": "가죽 제품 수요 증가와 독도 강치의 멸종",
    "description": "가죽 제품 수요 증가와 독도 강치의 멸종",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 심화 Q12 X"
  },
  {
    "id": "77회_q12_464",
    "type": "사건",
    "kind": "detail",
    "title": "을축년 대홍수의 피해와 경성부의 대응 양상",
    "description": "을축년 대홍수의 피해와 경성부의 대응 양상",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 심화 Q12 X"
  },
  {
    "id": "77회_q14_465",
    "type": "사건",
    "kind": "detail",
    "title": "신해통공의 단행 배경",
    "description": "신해통공의 단행 배경",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "77회 심화 Q14 X"
  },
  {
    "id": "77회_q14_466",
    "type": "사건",
    "kind": "detail",
    "title": "명의 멸망과 소중화주의의 대두",
    "description": "명의 멸망과 소중화주의의 대두",
    "startYear": 1607,
    "endYear": 1689,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "송시열"
    ],
    "_src": "77회 심화 Q14 X"
  },
  {
    "id": "77회_q14_467",
    "type": "사건",
    "kind": "detail",
    "title": "골품제가 일상생활에 끼친 영향",
    "description": "골품제가 일상생활에 끼친 영향",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "77회 심화 Q14 X"
  },
  {
    "id": "77회_q14_468",
    "type": "사건",
    "kind": "detail",
    "title": "울산항을 통한 아라비아 상인들과의 교류",
    "description": "울산항을 통한 아라비아 상인들과의 교류",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "77회 심화 Q14 X"
  },
  {
    "id": "77회_q14_469",
    "type": "사건",
    "kind": "detail",
    "title": "황제국 표방 사례를 통해 본 외왕내제 의식",
    "description": "황제국 표방 사례를 통해 본 외왕내제 의식",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "77회 심화 Q14 O"
  },
  {
    "id": "77회_q15_470",
    "type": "사건",
    "kind": "detail",
    "title": "제왕운기를 읽고 있는 왕",
    "description": "제왕운기를 읽고 있는 왕",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "77회 심화 Q15 O"
  },
  {
    "id": "77회_q15_471",
    "type": "사건",
    "kind": "detail",
    "title": "만동묘 복구를 건의하는 유생",
    "description": "만동묘 복구를 건의하는 유생",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "77회 심화 Q15 X"
  },
  {
    "id": "77회_q15_472",
    "type": "사건",
    "kind": "detail",
    "title": "동몽선습을 공부하는 서당 학동",
    "description": "동몽선습을 공부하는 서당 학동",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q15 X"
  },
  {
    "id": "77회_q15_473",
    "type": "사건",
    "kind": "detail",
    "title": "독서삼품과 시행을 준비하는 관리",
    "description": "독서삼품과 시행을 준비하는 관리",
    "startYear": 785,
    "endYear": 798,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "통일신라 원성왕"
    ],
    "_src": "77회 심화 Q15 X"
  },
  {
    "id": "77회_q15_474",
    "type": "사건",
    "kind": "detail",
    "title": "주자소에서 계미자를 주조하는 장인",
    "description": "주자소에서 계미자를 주조하는 장인",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "77회 심화 Q15 X"
  },
  {
    "id": "77회_q16_475",
    "type": "사건",
    "kind": "detail",
    "title": "비담과 염종의 반란을 진압하였다.",
    "description": "비담과 염종의 반란을 진압하였다.",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 선덕여왕"
    ],
    "_src": "77회 심화 Q16 X"
  },
  {
    "id": "77회_q16_476",
    "type": "사건",
    "kind": "detail",
    "title": "만권당에서 원의 학자들과 교유하였다.",
    "description": "만권당에서 원의 학자들과 교유하였다.",
    "startYear": 1308,
    "endYear": 1313,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충선왕"
    ],
    "_src": "77회 심화 Q16 X"
  },
  {
    "id": "77회_q16_477",
    "type": "사건",
    "kind": "detail",
    "title": "인사 행정을 담당하던 정방을 폐지하였다.",
    "description": "인사 행정을 담당하던 정방을 폐지하였다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "77회 심화 Q16 X"
  },
  {
    "id": "77회_q16_478",
    "type": "사건",
    "kind": "detail",
    "title": "봉사 10조를 올려 시정 개혁을 건의하였다.",
    "description": "봉사 10조를 올려 시정 개혁을 건의하였다.",
    "startYear": 1149,
    "endYear": 1219,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충헌"
    ],
    "_src": "77회 심화 Q16 O"
  },
  {
    "id": "77회_q16_479",
    "type": "사건",
    "kind": "detail",
    "title": "오월(吳越)에 사신을 보내고 검교태보의 직을 받았다.",
    "description": "오월(吳越)에 사신을 보내고 검교태보의 직을 받았다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "77회 심화 Q16 X"
  },
  {
    "id": "77회_q17_480",
    "type": "사건",
    "kind": "detail",
    "title": "관군을 이끌고 묘청의 난을 진압하였다.",
    "description": "관군을 이끌고 묘청의 난을 진압하였다.",
    "startYear": 1075,
    "endYear": 1151,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "김부식"
    ],
    "_src": "77회 심화 Q17 O"
  },
  {
    "id": "77회_q17_481",
    "type": "사건",
    "kind": "detail",
    "title": "시무 28조를 올려 국가 운영 방안을 제시하였다.",
    "description": "시무 28조를 올려 국가 운영 방안을 제시하였다.",
    "startYear": 927,
    "endYear": 989,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최승로"
    ],
    "_src": "77회 심화 Q17 X"
  },
  {
    "id": "77회_q17_482",
    "type": "사건",
    "kind": "detail",
    "title": "법화 신앙을 바탕으로 백련 결사를 이끌었다.",
    "description": "법화 신앙을 바탕으로 백련 결사를 이끌었다.",
    "startYear": 1163,
    "endYear": 1245,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "요세"
    ],
    "_src": "77회 심화 Q17 X"
  },
  {
    "id": "77회_q17_483",
    "type": "사건",
    "kind": "detail",
    "title": "화폐 발행을 위해 주전도감 설치를 건의하였다.",
    "description": "화폐 발행을 위해 주전도감 설치를 건의하였다.",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 의천"
    ],
    "_src": "77회 심화 Q17 X"
  },
  {
    "id": "77회_q17_484",
    "type": "사건",
    "kind": "detail",
    "title": "(가) (나) - 심성 도야를 강조하고 유불 일치설을 ...",
    "description": "(가) (나) - 심성 도야를 강조하고 유불 일치설을 주장하였다.",
    "startYear": 1178,
    "endYear": 1234,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "혜심"
    ],
    "_src": "77회 심화 Q17 X"
  },
  {
    "id": "77회_q19_485",
    "type": "사건",
    "kind": "detail",
    "title": "사헌부 홍문관과 함께 3사로 불렸다.",
    "description": "사헌부 홍문관과 함께 3사로 불렸다.",
    "startYear": 1401,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "사간원"
    ],
    "_src": "77회 심화 Q19 O"
  },
  {
    "id": "77회_q19_486",
    "type": "사건",
    "kind": "detail",
    "title": "국왕 직속 사법 기구로 반역죄 등을 다루었다.",
    "description": "국왕 직속 사법 기구로 반역죄 등을 다루었다.",
    "startYear": 1414,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 의금부"
    ],
    "_src": "77회 심화 Q19 X"
  },
  {
    "id": "77회_q19_487",
    "type": "사건",
    "kind": "detail",
    "title": "사초와 시정기를 바탕으로 실록을 편찬하였다.",
    "description": "사초와 시정기를 바탕으로 실록을 편찬하였다.",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "춘추관"
    ],
    "_src": "77회 심화 Q19 X"
  },
  {
    "id": "77회_q19_488",
    "type": "사건",
    "kind": "detail",
    "title": "왕의 비서 기관으로 왕명의 출납을 관장하였다.",
    "description": "왕의 비서 기관으로 왕명의 출납을 관장하였다.",
    "startYear": 1405,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "승정원"
    ],
    "_src": "77회 심화 Q19 X"
  },
  {
    "id": "77회_q19_489",
    "type": "사건",
    "kind": "detail",
    "title": "사대교린에 관한 문서를 관장하기 위해 설치되었다.",
    "description": "사대교린에 관한 문서를 관장하기 위해 설치되었다.",
    "startYear": 1410,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "승문원"
    ],
    "_src": "77회 심화 Q19 X"
  },
  {
    "id": "77회_q20_490",
    "type": "사건",
    "kind": "detail",
    "title": "조의제문을 빌미로 무오사화가 일어났다.",
    "description": "조의제문을 빌미로 무오사화가 일어났다.",
    "startYear": 1498,
    "endYear": 1498,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "무오사화"
    ],
    "_src": "77회 심화 Q20 X"
  },
  {
    "id": "77회_q20_491",
    "type": "사건",
    "kind": "detail",
    "title": "세계 지도인 혼일강리역대국도지도가 제작되었다.",
    "description": "세계 지도인 혼일강리역대국도지도가 제작되었다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "77회 심화 Q20 X"
  },
  {
    "id": "77회_q20_492",
    "type": "사건",
    "kind": "detail",
    "title": "예악 질서의 확립을 위한 악학궤범이 완성되었다.",
    "description": "예악 질서의 확립을 위한 악학궤범이 완성되었다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "77회 심화 Q20 X"
  },
  {
    "id": "77회_q20_493",
    "type": "사건",
    "kind": "detail",
    "title": "역대 문물 제도를 정리한 동국문헌비고가 편찬되었다.",
    "description": "역대 문물 제도를 정리한 동국문헌비고가 편찬되었다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "77회 심화 Q20 X"
  },
  {
    "id": "77회_q20_494",
    "type": "사건",
    "kind": "detail",
    "title": "현직 관리에게만 수조권을 지급하는 직전법이 시행되었다.",
    "description": "현직 관리에게만 수조권을 지급하는 직전법이 시행되었다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "77회 심화 Q20 O"
  },
  {
    "id": "77회_q21_495",
    "type": "사건",
    "kind": "detail",
    "title": "기대승과 사단칠정 논쟁을 전개하였다.",
    "description": "기대승과 사단칠정 논쟁을 전개하였다.",
    "startYear": 1501,
    "endYear": 1570,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이황"
    ],
    "_src": "77회 심화 Q21 X"
  },
  {
    "id": "77회_q21_496",
    "type": "사건",
    "kind": "detail",
    "title": "소학의 보급과 현량과 실시를 주장하였다.",
    "description": "소학의 보급과 현량과 실시를 주장하였다.",
    "startYear": 1482,
    "endYear": 1519,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조광조"
    ],
    "_src": "77회 심화 Q21 X"
  },
  {
    "id": "77회_q21_497",
    "type": "사건",
    "kind": "detail",
    "title": "기축봉사를 올려 명에 대한 의리를 내세웠다.",
    "description": "기축봉사를 올려 명에 대한 의리를 내세웠다.",
    "startYear": 1607,
    "endYear": 1689,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "송시열"
    ],
    "_src": "77회 심화 Q21 X"
  },
  {
    "id": "77회_q21_498",
    "type": "사건",
    "kind": "detail",
    "title": "임진왜란의 상황 등을 담은 징비록을 저술하였다.",
    "description": "임진왜란의 상황 등을 담은 징비록을 저술하였다.",
    "startYear": 1542,
    "endYear": 1607,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "류성룡"
    ],
    "_src": "77회 심화 Q21 O"
  },
  {
    "id": "77회_q21_499",
    "type": "사건",
    "kind": "detail",
    "title": "최초로 100리 척을 사용하여 동국지도를 제작하였다.",
    "description": "최초로 100리 척을 사용하여 동국지도를 제작하였다.",
    "startYear": 1678,
    "endYear": 1752,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정상기"
    ],
    "_src": "77회 심화 Q21 X"
  },
  {
    "id": "77회_q22_500",
    "type": "사건",
    "kind": "detail",
    "title": "강홍립 부대가 사르후 전투에 참전하였다.",
    "description": "강홍립 부대가 사르후 전투에 참전하였다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "77회 심화 Q22 X"
  },
  {
    "id": "77회_q22_501",
    "type": "사건",
    "kind": "detail",
    "title": "김종서가 두만강 일대에 6진을 개척하였다.",
    "description": "김종서가 두만강 일대에 6진을 개척하였다.",
    "startYear": 1433,
    "endYear": 1449,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "4군 6진"
    ],
    "_src": "77회 심화 Q22 X"
  },
  {
    "id": "77회_q22_502",
    "type": "사건",
    "kind": "detail",
    "title": "김시민이 진주성 전투에서 크게 승리하였다.",
    "description": "김시민이 진주성 전투에서 크게 승리하였다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "77회 심화 Q22 X"
  },
  {
    "id": "77회_q22_503",
    "type": "사건",
    "kind": "detail",
    "title": "이종무가 왜구의 근거지인 쓰시마섬을 정벌하였다.",
    "description": "이종무가 왜구의 근거지인 쓰시마섬을 정벌하였다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "77회 심화 Q22 X"
  },
  {
    "id": "77회_q22_504",
    "type": "사건",
    "kind": "detail",
    "title": "이완이 어영대장으로 임명되어 북벌을 준비하였다.",
    "description": "이완이 어영대장으로 임명되어 북벌을 준비하였다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "77회 심화 Q22 O"
  },
  {
    "id": "77회_q23_505",
    "type": "사건",
    "kind": "detail",
    "title": "계해약조의 초안을 작성하는 관리",
    "description": "계해약조의 초안을 작성하는 관리",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "77회 심화 Q23 O"
  },
  {
    "id": "77회_q23_506",
    "type": "사건",
    "kind": "detail",
    "title": "까치를 소재로 민화를 그리는 화원",
    "description": "까치를 소재로 민화를 그리는 화원",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q23 X"
  },
  {
    "id": "77회_q23_507",
    "type": "사건",
    "kind": "detail",
    "title": "세책가에서 춘향전을 빌리는 부녀자",
    "description": "세책가에서 춘향전을 빌리는 부녀자",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q23 X"
  },
  {
    "id": "77회_q23_508",
    "type": "사건",
    "kind": "detail",
    "title": "시사(詩社)를 조직하여 활동하는 서리",
    "description": "시사(詩社)를 조직하여 활동하는 서리",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q23 X"
  },
  {
    "id": "77회_q23_509",
    "type": "사건",
    "kind": "detail",
    "title": "송파장에서 산대놀이를 공연하는 광대",
    "description": "송파장에서 산대놀이를 공연하는 광대",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q23 X"
  },
  {
    "id": "77회_q24_510",
    "type": "사건",
    "kind": "detail",
    "title": "문신을 재교육하기 위한 초계문신제를 실시하였다.",
    "description": "문신을 재교육하기 위한 초계문신제를 실시하였다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "77회 심화 Q24 X"
  },
  {
    "id": "77회_q24_511",
    "type": "사건",
    "kind": "detail",
    "title": "각 궁방과 중앙 관서의 공노비 6만여 명을 해방하였다.",
    "description": "각 궁방과 중앙 관서의 공노비 6만여 명을 해방하였다.",
    "startYear": 1800,
    "endYear": 1834,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 순조"
    ],
    "_src": "77회 심화 Q24 X"
  },
  {
    "id": "77회_q24_512",
    "type": "사건",
    "kind": "detail",
    "title": "국왕의 호위와 수도 방어를 위해 금위영을 창설하였다.",
    "description": "국왕의 호위와 수도 방어를 위해 금위영을 창설하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "77회 심화 Q24 O"
  },
  {
    "id": "77회_q24_513",
    "type": "사건",
    "kind": "detail",
    "title": "각지의 농법을 작물별로 정리한 농사직설을 편찬하였다.",
    "description": "각지의 농법을 작물별로 정리한 농사직설을 편찬하였다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "77회 심화 Q24 X"
  },
  {
    "id": "77회_q24_514",
    "type": "사건",
    "kind": "detail",
    "title": "붕당 정치의 폐해를 경계하기 위해 탕평비를 건립하였다.",
    "description": "붕당 정치의 폐해를 경계하기 위해 탕평비를 건립하였다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "77회 심화 Q24 X"
  },
  {
    "id": "77회_q25_515",
    "type": "사건",
    "kind": "detail",
    "title": "관리에게 전지와 시지가 지급되었다.",
    "description": "관리에게 전지와 시지가 지급되었다.",
    "startYear": 976,
    "endYear": 1391,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "전시과"
    ],
    "_src": "77회 심화 Q25 X"
  },
  {
    "id": "77회_q25_516",
    "type": "사건",
    "kind": "detail",
    "title": "솔빈부의 말이 특산품으로 수출되었다.",
    "description": "솔빈부의 말이 특산품으로 수출되었다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "77회 심화 Q25 X"
  },
  {
    "id": "77회_q25_517",
    "type": "사건",
    "kind": "detail",
    "title": "관청에 물품을 조달하는 공인이 활동하였다.",
    "description": "관청에 물품을 조달하는 공인이 활동하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q25 O"
  },
  {
    "id": "77회_q25_518",
    "type": "사건",
    "kind": "detail",
    "title": "당항성 영암이 국제 무역항으로 번성하였다.",
    "description": "당항성 영암이 국제 무역항으로 번성하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "77회 심화 Q25 X"
  },
  {
    "id": "77회_q25_519",
    "type": "사건",
    "kind": "detail",
    "title": "삼한통보 해동통보 등의 화폐가 발행되었다.",
    "description": "삼한통보 해동통보 등의 화폐가 발행되었다.",
    "startYear": 996,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 화폐"
    ],
    "_src": "77회 심화 Q25 X"
  },
  {
    "id": "77회_q26_520",
    "type": "사건",
    "kind": "detail",
    "title": "양명학을 연구하여 강화학파를 형성하였다.",
    "description": "양명학을 연구하여 강화학파를 형성하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q26 X"
  },
  {
    "id": "77회_q26_521",
    "type": "사건",
    "kind": "detail",
    "title": "기기도설을 참고하여 거중기를 설계하였다.",
    "description": "기기도설을 참고하여 거중기를 설계하였다.",
    "startYear": 1762,
    "endYear": 1836,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정약용"
    ],
    "_src": "77회 심화 Q26 X"
  },
  {
    "id": "77회_q26_522",
    "type": "사건",
    "kind": "detail",
    "title": "역대 명필을 연구하여 추사체를 창안하였다.",
    "description": "역대 명필을 연구하여 추사체를 창안하였다.",
    "startYear": 1786,
    "endYear": 1856,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "김정희"
    ],
    "_src": "77회 심화 Q26 X"
  },
  {
    "id": "77회_q26_523",
    "type": "사건",
    "kind": "detail",
    "title": "규장각 검서관으로 무예도보통지 편찬에 참여하였다.",
    "description": "규장각 검서관으로 무예도보통지 편찬에 참여하였다.",
    "startYear": 1750,
    "endYear": 1805,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "박제가"
    ],
    "_src": "77회 심화 Q26 O"
  },
  {
    "id": "77회_q26_524",
    "type": "사건",
    "kind": "detail",
    "title": "지부복궐척화의소를 올려 왜양일체론을 주장하였다.",
    "description": "지부복궐척화의소를 올려 왜양일체론을 주장하였다.",
    "startYear": 1833,
    "endYear": 1906,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "최익현"
    ],
    "_src": "77회 심화 Q26 X"
  },
  {
    "id": "77회_q27_525",
    "type": "사건",
    "kind": "detail",
    "title": "이괄이 반란을 일으킨 근거지를 알아본다.",
    "description": "이괄이 반란을 일으킨 근거지를 알아본다.",
    "startYear": 1624,
    "endYear": 1624,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "이괄의 난"
    ],
    "_src": "77회 심화 Q27 X"
  },
  {
    "id": "77회_q27_526",
    "type": "사건",
    "kind": "detail",
    "title": "김정희가 세한도를 그린 유배지를 검색한다.",
    "description": "김정희가 세한도를 그린 유배지를 검색한다.",
    "startYear": 1786,
    "endYear": 1856,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "김정희"
    ],
    "_src": "77회 심화 Q27 X"
  },
  {
    "id": "77회_q27_527",
    "type": "사건",
    "kind": "detail",
    "title": "정약전이 자산어보를 저술한 곳을 조사한다.",
    "description": "정약전이 자산어보를 저술한 곳을 조사한다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "77회 심화 Q27 X"
  },
  {
    "id": "77회_q27_528",
    "type": "사건",
    "kind": "detail",
    "title": "강주룡이 고공 농성을 벌인 을밀대의 위치를 찾아본다.",
    "description": "강주룡이 고공 농성을 벌인 을밀대의 위치를 찾아본다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "77회 심화 Q27 X"
  },
  {
    "id": "77회_q27_529",
    "type": "사건",
    "kind": "detail",
    "title": "김윤후가 노비 등을 이끌고 몽골군을 격퇴한 장소를 파악...",
    "description": "김윤후가 노비 등을 이끌고 몽골군을 격퇴한 장소를 파악한다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "77회 심화 Q27 O"
  },
  {
    "id": "77회_q28_530",
    "type": "사건",
    "kind": "detail",
    "title": "홍경래 등이 봉기하여 정주성을 점령하였다.",
    "description": "홍경래 등이 봉기하여 정주성을 점령하였다.",
    "startYear": 1811,
    "endYear": 1812,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "홍경래의 난"
    ],
    "_src": "77회 심화 Q28 X"
  },
  {
    "id": "77회_q28_531",
    "type": "사건",
    "kind": "detail",
    "title": "신돈이 중심이 되어 전민변정 사업을 운영하였다.",
    "description": "신돈이 중심이 되어 전민변정 사업을 운영하였다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "77회 심화 Q28 X"
  },
  {
    "id": "77회_q28_532",
    "type": "사건",
    "kind": "detail",
    "title": "삼정의 문란을 시정하고자 삼정이정청이 설치되었다.",
    "description": "삼정의 문란을 시정하고자 삼정이정청이 설치되었다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "77회 심화 Q28 O"
  },
  {
    "id": "77회_q28_533",
    "type": "사건",
    "kind": "detail",
    "title": "기금의 이자로 빈민을 구휼하는 제위보가 만들어졌다.",
    "description": "기금의 이자로 빈민을 구휼하는 제위보가 만들어졌다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "77회 심화 Q28 X"
  },
  {
    "id": "77회_q28_534",
    "type": "사건",
    "kind": "detail",
    "title": "황사영이 외국 군대의 출병을 요청하는 백서를 작성하였다...",
    "description": "황사영이 외국 군대의 출병을 요청하는 백서를 작성하였다.",
    "startYear": 1801,
    "endYear": 1801,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "신유박해"
    ],
    "_src": "77회 심화 Q28 X"
  },
  {
    "id": "77회_q29_535",
    "type": "사건",
    "kind": "detail",
    "title": "운요호가 강화도와 영종도를 공격하였다.",
    "description": "운요호가 강화도와 영종도를 공격하였다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "77회 심화 Q29 X"
  },
  {
    "id": "77회_q29_536",
    "type": "사건",
    "kind": "detail",
    "title": "오페르트가 남연군 묘 도굴을 시도하였다.",
    "description": "오페르트가 남연군 묘 도굴을 시도하였다.",
    "startYear": 1868,
    "endYear": 1868,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "오페르트 사건"
    ],
    "_src": "77회 심화 Q29 X"
  },
  {
    "id": "77회_q29_537",
    "type": "사건",
    "kind": "detail",
    "title": "교조 신원을 요구하는 보은 집회가 열렸다.",
    "description": "교조 신원을 요구하는 보은 집회가 열렸다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "77회 심화 Q29 X"
  },
  {
    "id": "77회_q29_538",
    "type": "사건",
    "kind": "detail",
    "title": "병인박해로 천주교 신부와 신자들이 처형되었다.",
    "description": "병인박해로 천주교 신부와 신자들이 처형되었다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "병인박해"
    ],
    "_src": "77회 심화 Q29 O"
  },
  {
    "id": "77회_q29_539",
    "type": "사건",
    "kind": "detail",
    "title": "김홍집이 가지고 온 조선책략이 조선에 유포되었다.",
    "description": "김홍집이 가지고 온 조선책략이 조선에 유포되었다.",
    "startYear": 1880,
    "endYear": 1880,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선책략"
    ],
    "_src": "77회 심화 Q29 X"
  },
  {
    "id": "77회_q30_540",
    "type": "사건",
    "kind": "detail",
    "title": "박문국을 두어 한성순보를 발행하였다.",
    "description": "박문국을 두어 한성순보를 발행하였다.",
    "startYear": 1883,
    "endYear": 1888,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박문국"
    ],
    "_src": "77회 심화 Q30 X"
  },
  {
    "id": "77회_q30_541",
    "type": "사건",
    "kind": "detail",
    "title": "근대식 무기 제조 시설인 기기창을 설립하였다.",
    "description": "근대식 무기 제조 시설인 기기창을 설립하였다.",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "기기창"
    ],
    "_src": "77회 심화 Q30 X"
  },
  {
    "id": "77회_q30_542",
    "type": "사건",
    "kind": "detail",
    "title": "군제를 개편하여 친위대와 진위대를 설치하였다.",
    "description": "군제를 개편하여 친위대와 진위대를 설치하였다.",
    "startYear": 1895,
    "endYear": 1896,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "을미개혁"
    ],
    "_src": "77회 심화 Q30 O"
  },
  {
    "id": "77회_q30_543",
    "type": "사건",
    "kind": "detail",
    "title": "공사 노비법을 혁파하고 과부의 재가를 허용하였다.",
    "description": "공사 노비법을 혁파하고 과부의 재가를 허용하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "77회 심화 Q30 X"
  },
  {
    "id": "77회_q30_544",
    "type": "사건",
    "kind": "detail",
    "title": "비변사를 혁파하여 의정부와 삼군부의 기능을 회복하였다.",
    "description": "비변사를 혁파하여 의정부와 삼군부의 기능을 회복하였다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "77회 심화 Q30 X"
  },
  {
    "id": "77회_q31_545",
    "type": "사건",
    "kind": "detail",
    "title": "김옥균 등 개화파가 주도하였다.",
    "description": "김옥균 등 개화파가 주도하였다.",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑신정변"
    ],
    "_src": "77회 심화 Q31 X"
  },
  {
    "id": "77회_q31_546",
    "type": "사건",
    "kind": "detail",
    "title": "제물포 조약이 체결되는 계기가 되었다.",
    "description": "제물포 조약이 체결되는 계기가 되었다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "임오군란"
    ],
    "_src": "77회 심화 Q31 O"
  },
  {
    "id": "77회_q31_547",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 홍범 14조가 반포되었다.",
    "description": "전개 과정에서 홍범 14조가 반포되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "77회 심화 Q31 X"
  },
  {
    "id": "77회_q31_548",
    "type": "사건",
    "kind": "detail",
    "title": "통리기무아문이 설치되는 배경이 되었다.",
    "description": "통리기무아문이 설치되는 배경이 되었다.",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "통리기무아문"
    ],
    "_src": "77회 심화 Q31 X"
  },
  {
    "id": "77회_q31_549",
    "type": "사건",
    "kind": "detail",
    "title": "외규장각 도서가 약탈되는 결과를 가져왔다.",
    "description": "외규장각 도서가 약탈되는 결과를 가져왔다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "병인양요"
    ],
    "_src": "77회 심화 Q31 X"
  },
  {
    "id": "77회_q32_550",
    "type": "사건",
    "kind": "detail",
    "title": "한인 자치 기구인 경학사를 조직하였다.",
    "description": "한인 자치 기구인 경학사를 조직하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "77회 심화 Q32 X"
  },
  {
    "id": "77회_q32_551",
    "type": "사건",
    "kind": "detail",
    "title": "한인 교육을 위해 박달 학원을 설립하였다.",
    "description": "한인 교육을 위해 박달 학원을 설립하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "77회 심화 Q32 X"
  },
  {
    "id": "77회_q32_552",
    "type": "사건",
    "kind": "detail",
    "title": "무장 투쟁을 위해 대조선 국민 군단을 결성하였다.",
    "description": "무장 투쟁을 위해 대조선 국민 군단을 결성하였다.",
    "startYear": 1914,
    "endYear": 1917,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대조선 국민 군단"
    ],
    "_src": "77회 심화 Q32 O"
  },
  {
    "id": "77회_q32_553",
    "type": "사건",
    "kind": "detail",
    "title": "유학생을 중심으로 2·8 독립 선언서를 발표하였다.",
    "description": "유학생을 중심으로 2·8 독립 선언서를 발표하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "2·8 독립 선언"
    ],
    "_src": "77회 심화 Q32 X"
  },
  {
    "id": "77회_q32_554",
    "type": "사건",
    "kind": "detail",
    "title": "대한 광복군 정부를 중심으로 무장 독립 투쟁을 준비하였...",
    "description": "대한 광복군 정부를 중심으로 무장 독립 투쟁을 준비하였다.",
    "startYear": 1914,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한 광복군 정부"
    ],
    "_src": "77회 심화 Q32 X"
  },
  {
    "id": "77회_q33_555",
    "type": "사건",
    "kind": "detail",
    "title": "청의 알선으로 체결이 추진되었다.",
    "description": "청의 알선으로 체결이 추진되었다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "77회 심화 Q33 X"
  },
  {
    "id": "77회_q33_556",
    "type": "사건",
    "kind": "detail",
    "title": "통감부가 설치되는 결과를 가져왔다.",
    "description": "통감부가 설치되는 결과를 가져왔다.",
    "startYear": 1905,
    "endYear": 1905,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "을사늑약"
    ],
    "_src": "77회 심화 Q33 O"
  },
  {
    "id": "77회_q33_557",
    "type": "사건",
    "kind": "detail",
    "title": "천주교 포교를 허용하는 근거가 되었다.",
    "description": "천주교 포교를 허용하는 근거가 되었다.",
    "startYear": 1886,
    "endYear": 1886,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조프 수호 통상 조약"
    ],
    "_src": "77회 심화 Q33 X"
  },
  {
    "id": "77회_q33_558",
    "type": "사건",
    "kind": "detail",
    "title": "스티븐스가 외교 고문으로 부임하는 계기가 되었다.",
    "description": "스티븐스가 외교 고문으로 부임하는 계기가 되었다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "77회 심화 Q33 X"
  },
  {
    "id": "77회_q33_559",
    "type": "사건",
    "kind": "detail",
    "title": "대한 제국 군대의 해산을 규정하는 내용이 포함되어 있다...",
    "description": "대한 제국 군대의 해산을 규정하는 내용이 포함되어 있다.",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "정미7조약"
    ],
    "_src": "77회 심화 Q33 X"
  },
  {
    "id": "77회_q34_560",
    "type": "사건",
    "kind": "detail",
    "title": "만세보를 발행하였다.",
    "description": "만세보를 발행하였다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "만세보"
    ],
    "_src": "77회 심화 Q34 X"
  },
  {
    "id": "77회_q34_561",
    "type": "사건",
    "kind": "detail",
    "title": "대성 학교를 설립하였다.",
    "description": "대성 학교를 설립하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "77회 심화 Q34 O"
  },
  {
    "id": "77회_q34_562",
    "type": "사건",
    "kind": "detail",
    "title": "만민 공동회를 개최하였다.",
    "description": "만민 공동회를 개최하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "77회 심화 Q34 X"
  },
  {
    "id": "77회_q34_563",
    "type": "사건",
    "kind": "detail",
    "title": "부민관 폭파 의거를 계획하였다.",
    "description": "부민관 폭파 의거를 계획하였다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "77회 심화 Q34 X"
  },
  {
    "id": "77회_q34_564",
    "type": "사건",
    "kind": "detail",
    "title": "일제의 황무지 개간권 요구를 저지하였다.",
    "description": "일제의 황무지 개간권 요구를 저지하였다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "보안회"
    ],
    "_src": "77회 심화 Q34 X"
  },
  {
    "id": "77회_q35_565",
    "type": "사건",
    "kind": "detail",
    "title": "7재라는 전문 강좌가 있었다.",
    "description": "7재라는 전문 강좌가 있었다.",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 예종"
    ],
    "_src": "77회 심화 Q35 X"
  },
  {
    "id": "77회_q35_566",
    "type": "사건",
    "kind": "detail",
    "title": "덕원부 관민이 합심하여 만들었다.",
    "description": "덕원부 관민이 합심하여 만들었다.",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "원산학사"
    ],
    "_src": "77회 심화 Q35 X"
  },
  {
    "id": "77회_q35_567",
    "type": "사건",
    "kind": "detail",
    "title": "교육입국 조서에 근거하여 세워졌다.",
    "description": "교육입국 조서에 근거하여 세워졌다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "77회 심화 Q35 X"
  },
  {
    "id": "77회_q35_568",
    "type": "사건",
    "kind": "detail",
    "title": "주요 건물로 대성전과 명륜당을 두었다.",
    "description": "주요 건물로 대성전과 명륜당을 두었다.",
    "startYear": 1398,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "성균관"
    ],
    "_src": "77회 심화 Q35 X"
  },
  {
    "id": "77회_q35_569",
    "type": "사건",
    "kind": "detail",
    "title": "좌원과 우원을 구분하여 학생을 선발하였다.",
    "description": "좌원과 우원을 구분하여 학생을 선발하였다.",
    "startYear": 1886,
    "endYear": 1894,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "육영공원"
    ],
    "_src": "77회 심화 Q35 O"
  },
  {
    "id": "77회_q36_570",
    "type": "사건",
    "kind": "detail",
    "title": "고종의 강제 퇴위에 반대하는 시위를 주도하였다.",
    "description": "고종의 강제 퇴위에 반대하는 시위를 주도하였다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한자강회"
    ],
    "_src": "77회 심화 Q36 X"
  },
  {
    "id": "77회_q36_571",
    "type": "사건",
    "kind": "detail",
    "title": "조선 총독부에 국권 반환 요구서를 제출하려 하였다.",
    "description": "조선 총독부에 국권 반환 요구서를 제출하려 하였다.",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "77회 심화 Q36 X"
  },
  {
    "id": "77회_q36_572",
    "type": "사건",
    "kind": "detail",
    "title": "독립운동 자금 마련을 위해 독립 공채를 발행하였다.",
    "description": "독립운동 자금 마련을 위해 독립 공채를 발행하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "77회 심화 Q36 X"
  },
  {
    "id": "77회_q36_573",
    "type": "사건",
    "kind": "detail",
    "title": "신채호가 쓴 조선 혁명 선언을 활동 지침으로 삼았다.",
    "description": "신채호가 쓴 조선 혁명 선언을 활동 지침으로 삼았다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "77회 심화 Q36 O"
  },
  {
    "id": "77회_q36_574",
    "type": "사건",
    "kind": "detail",
    "title": "신규식을 중심으로 조직되어 교민들의 단결을 도모하였다.",
    "description": "신규식을 중심으로 조직되어 교민들의 단결을 도모하였다.",
    "startYear": 1912,
    "endYear": 1917,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동제사"
    ],
    "_src": "77회 심화 Q36 X"
  },
  {
    "id": "77회_q37_575",
    "type": "사건",
    "kind": "detail",
    "title": "태형을 집행하는 헌병 경찰",
    "description": "태형을 집행하는 헌병 경찰",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "77회 심화 Q37 O"
  },
  {
    "id": "77회_q37_576",
    "type": "사건",
    "kind": "detail",
    "title": "원수부에서 업무를 처리하는 관리",
    "description": "원수부에서 업무를 처리하는 관리",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "77회 심화 Q37 X"
  },
  {
    "id": "77회_q37_577",
    "type": "사건",
    "kind": "detail",
    "title": "몸뻬 착용을 홍보하는 애국반 반장",
    "description": "몸뻬 착용을 홍보하는 애국반 반장",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "77회 심화 Q37 X"
  },
  {
    "id": "77회_q37_578",
    "type": "사건",
    "kind": "detail",
    "title": "경인선 개통식에 참석하는 일본인 거류민",
    "description": "경인선 개통식에 참석하는 일본인 거류민",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "77회 심화 Q37 X"
  },
  {
    "id": "77회_q37_579",
    "type": "사건",
    "kind": "detail",
    "title": "나운규가 감독한 아리랑의 첫 상영을 준비하는 단성사 직...",
    "description": "나운규가 감독한 아리랑의 첫 상영을 준비하는 단성사 직원",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "영화 아리랑"
    ],
    "_src": "77회 심화 Q37 X"
  },
  {
    "id": "77회_q38_580",
    "type": "사건",
    "kind": "detail",
    "title": "개벽 신여성 등의 잡지를 발행하였다.",
    "description": "개벽 신여성 등의 잡지를 발행하였다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "77회 심화 Q38 X"
  },
  {
    "id": "77회_q38_581",
    "type": "사건",
    "kind": "detail",
    "title": "중추원 개편을 통해 의회 설립을 추진하였다.",
    "description": "중추원 개편을 통해 의회 설립을 추진하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "77회 심화 Q38 X"
  },
  {
    "id": "77회_q38_582",
    "type": "사건",
    "kind": "detail",
    "title": "군사 조직으로 한인 국방 경위대를 창설하였다.",
    "description": "군사 조직으로 한인 국방 경위대를 창설하였다.",
    "startYear": 1913,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "흥사단"
    ],
    "_src": "77회 심화 Q38 X"
  },
  {
    "id": "77회_q38_583",
    "type": "사건",
    "kind": "detail",
    "title": "순종의 인산일을 기회로 만세 운동을 계획하였다.",
    "description": "순종의 인산일을 기회로 만세 운동을 계획하였다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "77회 심화 Q38 X"
  },
  {
    "id": "77회_q38_584",
    "type": "사건",
    "kind": "detail",
    "title": "광주 학생 항일 운동에 진상 조사단을 파견하였다.",
    "description": "광주 학생 항일 운동에 진상 조사단을 파견하였다.",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신간회"
    ],
    "_src": "77회 심화 Q38 O"
  },
  {
    "id": "77회_q39_585",
    "type": "사건",
    "kind": "detail",
    "title": "조선 민립 대학 기성회가 조직되었어요.",
    "description": "조선 민립 대학 기성회가 조직되었어요.",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민립 대학 설립 운동"
    ],
    "_src": "77회 심화 Q39 X"
  },
  {
    "id": "77회_q39_586",
    "type": "사건",
    "kind": "detail",
    "title": "메가타의 주도로 화폐 정리 사업이 시행되었어요.",
    "description": "메가타의 주도로 화폐 정리 사업이 시행되었어요.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "77회 심화 Q39 X"
  },
  {
    "id": "77회_q39_587",
    "type": "사건",
    "kind": "detail",
    "title": "귀속 재산 관리를 위해 신한 공사가 운영되었어요.",
    "description": "귀속 재산 관리를 위해 신한 공사가 운영되었어요.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신한 공사"
    ],
    "_src": "77회 심화 Q39 X"
  },
  {
    "id": "77회_q39_588",
    "type": "사건",
    "kind": "detail",
    "title": "회사 설립을 허가제로 하는 회사령이 공포되었어요.",
    "description": "회사 설립을 허가제로 하는 회사령이 공포되었어요.",
    "startYear": 1910,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "회사령"
    ],
    "_src": "77회 심화 Q39 X"
  },
  {
    "id": "77회_q39_589",
    "type": "사건",
    "kind": "detail",
    "title": "농민의 자력갱생을 내세운 농촌 진흥 운동이 추진되었어요...",
    "description": "농민의 자력갱생을 내세운 농촌 진흥 운동이 추진되었어요.",
    "startYear": 1932,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "농촌 진흥 운동"
    ],
    "_src": "77회 심화 Q39 O"
  },
  {
    "id": "77회_q40_590",
    "type": "사건",
    "kind": "detail",
    "title": "김민기 아침 이슬",
    "description": "김민기 아침 이슬",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q40 X"
  },
  {
    "id": "77회_q40_591",
    "type": "사건",
    "kind": "detail",
    "title": "윤심덕 사의 찬미",
    "description": "윤심덕 사의 찬미",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 심화 Q40 O"
  },
  {
    "id": "77회_q40_592",
    "type": "사건",
    "kind": "detail",
    "title": "현인 굳세어라 금순아",
    "description": "현인 굳세어라 금순아",
    "startYear": 1950,
    "endYear": 1959,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1950년대 경제"
    ],
    "_src": "77회 심화 Q40 X"
  },
  {
    "id": "77회_q40_593",
    "type": "사건",
    "kind": "detail",
    "title": "코리아나 손에 손 잡고",
    "description": "코리아나 손에 손 잡고",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "77회 심화 Q40 X"
  },
  {
    "id": "77회_q40_594",
    "type": "사건",
    "kind": "detail",
    "title": "이해연 단장의 미아리 고개",
    "description": "이해연 단장의 미아리 고개",
    "startYear": 1950,
    "endYear": 1959,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1950년대 경제"
    ],
    "_src": "77회 심화 Q40 X"
  },
  {
    "id": "77회_q41_595",
    "type": "사건",
    "kind": "detail",
    "title": "흥경성 전투에서 일본군을 격퇴하였다.",
    "description": "흥경성 전투에서 일본군을 격퇴하였다.",
    "startYear": 1929,
    "endYear": 1938,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선혁명군"
    ],
    "_src": "77회 심화 Q41 O"
  },
  {
    "id": "77회_q41_596",
    "type": "사건",
    "kind": "detail",
    "title": "일본군의 공세를 피해 자유시로 이동하였다.",
    "description": "일본군의 공세를 피해 자유시로 이동하였다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "77회 심화 Q41 X"
  },
  {
    "id": "77회_q41_597",
    "type": "사건",
    "kind": "detail",
    "title": "이른바 남한 대토벌 작전으로 큰 피해를 입었다.",
    "description": "이른바 남한 대토벌 작전으로 큰 피해를 입었다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "77회 심화 Q41 X"
  },
  {
    "id": "77회_q41_598",
    "type": "사건",
    "kind": "detail",
    "title": "영국군의 요청으로 인도·미얀마 전선에 파견되었다.",
    "description": "영국군의 요청으로 인도·미얀마 전선에 파견되었다.",
    "startYear": 1940,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광복군 창설"
    ],
    "_src": "77회 심화 Q41 X"
  },
  {
    "id": "77회_q41_599",
    "type": "사건",
    "kind": "detail",
    "title": "한국인 유격대를 중심으로 조국 광복회를 조직하였다.",
    "description": "한국인 유격대를 중심으로 조국 광복회를 조직하였다.",
    "startYear": 1936,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동북 항일 연군"
    ],
    "_src": "77회 심화 Q41 X"
  },
  {
    "id": "77회_q42_600",
    "type": "사건",
    "kind": "detail",
    "title": "흥사단을 창립함.",
    "description": "흥사단을 창립함.",
    "startYear": 1913,
    "endYear": 1945,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "흥사단"
    ],
    "_src": "77회 심화 Q42 X"
  },
  {
    "id": "77회_q42_601",
    "type": "사건",
    "kind": "detail",
    "title": "이토 히로부미를 사살함.",
    "description": "이토 히로부미를 사살함.",
    "startYear": 1879,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "안중근"
    ],
    "_src": "77회 심화 Q42 X"
  },
  {
    "id": "77회_q42_602",
    "type": "사건",
    "kind": "detail",
    "title": "한국독립운동지혈사를 저술함.",
    "description": "한국독립운동지혈사를 저술함.",
    "startYear": 1859,
    "endYear": 1925,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박은식"
    ],
    "_src": "77회 심화 Q42 X"
  },
  {
    "id": "77회_q42_603",
    "type": "사건",
    "kind": "detail",
    "title": "한국 독립군의 총사령관으로 활약함.",
    "description": "한국 독립군의 총사령관으로 활약함.",
    "startYear": 1930,
    "endYear": 1935,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "한국독립군"
    ],
    "_src": "77회 심화 Q42 X"
  },
  {
    "id": "77회_q42_604",
    "type": "사건",
    "kind": "detail",
    "title": "김원봉 등과 함께 민족 혁명당을 결성함.",
    "description": "김원봉 등과 함께 민족 혁명당을 결성함.",
    "startYear": 1935,
    "endYear": 1947,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "민족 혁명당"
    ],
    "_src": "77회 심화 Q42 O"
  },
  {
    "id": "77회_q43_605",
    "type": "사건",
    "kind": "detail",
    "title": "제헌절 – 첫 헌법 제정의 의미를 강조하다",
    "description": "제헌절 – 첫 헌법 제정의 의미를 강조하다",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "77회 심화 Q43 X"
  },
  {
    "id": "77회_q43_606",
    "type": "사건",
    "kind": "detail",
    "title": "가갸날 – 우리 말과 글의 소중함을 되새기다",
    "description": "가갸날 – 우리 말과 글의 소중함을 되새기다",
    "startYear": 1921,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선어 연구회"
    ],
    "_src": "77회 심화 Q43 O"
  },
  {
    "id": "77회_q43_607",
    "type": "사건",
    "kind": "detail",
    "title": "향토 예비군의 날 – 범국민적인 안보의식을 조성하다",
    "description": "향토 예비군의 날 – 범국민적인 안보의식을 조성하다",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q43 X"
  },
  {
    "id": "77회_q43_608",
    "type": "사건",
    "kind": "detail",
    "title": "은사의 날 – 스승을 향한 감사와 공경의 마음을 전하다",
    "description": "은사의 날 – 스승을 향한 감사와 공경의 마음을 전하다",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "77회 심화 Q43 X"
  },
  {
    "id": "77회_q43_609",
    "type": "사건",
    "kind": "detail",
    "title": "이산가족의 날 - 이산가족 문제에 대한 관심을 제고하다",
    "description": "이산가족의 날 - 이산가족 문제에 대한 관심을 제고하다",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q43 X"
  },
  {
    "id": "77회_q44_610",
    "type": "사건",
    "kind": "detail",
    "title": "원산 총파업에 동참하는 노동자",
    "description": "원산 총파업에 동참하는 노동자",
    "startYear": 1929,
    "endYear": 1929,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "원산 총파업"
    ],
    "_src": "77회 심화 Q44 X"
  },
  {
    "id": "77회_q44_611",
    "type": "사건",
    "kind": "detail",
    "title": "국채 보상 운동에 성금을 내는 상인",
    "description": "국채 보상 운동에 성금을 내는 상인",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "국채 보상 운동"
    ],
    "_src": "77회 심화 Q44 X"
  },
  {
    "id": "77회_q44_612",
    "type": "사건",
    "kind": "detail",
    "title": "원각사에서 연극 은세계를 공연하는 배우",
    "description": "원각사에서 연극 은세계를 공연하는 배우",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "77회 심화 Q44 X"
  },
  {
    "id": "77회_q44_613",
    "type": "사건",
    "kind": "detail",
    "title": "황국 신민 서사를 암송하는 국민학교 학생",
    "description": "황국 신민 서사를 암송하는 국민학교 학생",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "77회 심화 Q44 O"
  },
  {
    "id": "77회_q44_614",
    "type": "사건",
    "kind": "detail",
    "title": "조선 형평사 창립 대회 현장을 취재하는 기자",
    "description": "조선 형평사 창립 대회 현장을 취재하는 기자",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "형평 운동"
    ],
    "_src": "77회 심화 Q44 X"
  },
  {
    "id": "77회_q45_615",
    "type": "사건",
    "kind": "detail",
    "title": "농지 개혁의 전개 과정을 알아본다.",
    "description": "농지 개혁의 전개 과정을 알아본다.",
    "startYear": 1949,
    "endYear": 1950,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "농지 개혁"
    ],
    "_src": "77회 심화 Q45 O"
  },
  {
    "id": "77회_q45_616",
    "type": "사건",
    "kind": "detail",
    "title": "광주 대단지 사건의 결과를 파악한다.",
    "description": "광주 대단지 사건의 결과를 파악한다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q45 X"
  },
  {
    "id": "77회_q45_617",
    "type": "사건",
    "kind": "detail",
    "title": "개발 제한 구역 설정의 목적을 찾아본다.",
    "description": "개발 제한 구역 설정의 목적을 찾아본다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q45 X"
  },
  {
    "id": "77회_q45_618",
    "type": "사건",
    "kind": "detail",
    "title": "산미 증식 계획의 추진 배경을 분석한다.",
    "description": "산미 증식 계획의 추진 배경을 분석한다.",
    "startYear": 1920,
    "endYear": 1934,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "산미 증식 계획"
    ],
    "_src": "77회 심화 Q45 X"
  },
  {
    "id": "77회_q45_619",
    "type": "사건",
    "kind": "detail",
    "title": "지계아문이 추진한 정책의 내용을 조사한다.",
    "description": "지계아문이 추진한 정책의 내용을 조사한다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "77회 심화 Q45 X"
  },
  {
    "id": "77회_q46_620",
    "type": "사건",
    "kind": "detail",
    "title": "광복에 대비하여 조선 건국 동맹을 결성하였다.",
    "description": "광복에 대비하여 조선 건국 동맹을 결성하였다.",
    "startYear": 1886,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "여운형"
    ],
    "_src": "77회 심화 Q46 O"
  },
  {
    "id": "77회_q46_621",
    "type": "사건",
    "kind": "detail",
    "title": "대한민국 임시 정부 초대 국무총리를 역임하였다.",
    "description": "대한민국 임시 정부 초대 국무총리를 역임하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "77회 심화 Q46 X"
  },
  {
    "id": "77회_q46_622",
    "type": "사건",
    "kind": "detail",
    "title": "정읍에서 남한만의 단독 정부 수립을 주장하였다.",
    "description": "정읍에서 남한만의 단독 정부 수립을 주장하였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "77회 심화 Q46 X"
  },
  {
    "id": "77회_q46_623",
    "type": "사건",
    "kind": "detail",
    "title": "헤이그에서 열린 만국 평화 회의에 특사로 파견되었다.",
    "description": "헤이그에서 열린 만국 평화 회의에 특사로 파견되었다.",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "헤이그 특사"
    ],
    "_src": "77회 심화 Q46 X"
  },
  {
    "id": "77회_q46_624",
    "type": "사건",
    "kind": "detail",
    "title": "민족을 역사 서술의 중심에 둔 독사신론을 발표하였다.",
    "description": "민족을 역사 서술의 중심에 둔 독사신론을 발표하였다.",
    "startYear": 1880,
    "endYear": 1936,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신채호"
    ],
    "_src": "77회 심화 Q46 X"
  },
  {
    "id": "77회_q47_625",
    "type": "사건",
    "kind": "detail",
    "title": "최저 임금 위원회가 설치되었다.",
    "description": "최저 임금 위원회가 설치되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "77회 심화 Q47 X"
  },
  {
    "id": "77회_q47_626",
    "type": "사건",
    "kind": "detail",
    "title": "포항 제철소 1기 설비가 준공되었다.",
    "description": "포항 제철소 1기 설비가 준공되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q47 O"
  },
  {
    "id": "77회_q47_627",
    "type": "사건",
    "kind": "detail",
    "title": "전국 민주 노동조합 총연맹이 창립되었다.",
    "description": "전국 민주 노동조합 총연맹이 창립되었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "77회 심화 Q47 X"
  },
  {
    "id": "77회_q47_628",
    "type": "사건",
    "kind": "detail",
    "title": "칠레와의 자유 무역 협정(FTA)이 체결되었다.",
    "description": "칠레와의 자유 무역 협정(FTA)이 체결되었다.",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "77회 심화 Q47 X"
  },
  {
    "id": "77회_q47_629",
    "type": "사건",
    "kind": "detail",
    "title": "경제 협력 개발 기구(OECD) 회원국이 되었다.",
    "description": "경제 협력 개발 기구(OECD) 회원국이 되었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "77회 심화 Q47 X"
  },
  {
    "id": "77회_q48_630",
    "type": "사건",
    "kind": "detail",
    "title": "애치슨 라인이 발표되었다.",
    "description": "애치슨 라인이 발표되었다.",
    "startYear": 1950,
    "endYear": 1950,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "애치슨 라인"
    ],
    "_src": "77회 심화 Q48 X"
  },
  {
    "id": "77회_q48_631",
    "type": "사건",
    "kind": "detail",
    "title": "부마 민주 항쟁이 일어났다.",
    "description": "부마 민주 항쟁이 일어났다.",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "부마민주항쟁"
    ],
    "_src": "77회 심화 Q48 O"
  },
  {
    "id": "77회_q48_632",
    "type": "사건",
    "kind": "detail",
    "title": "사사오입의 논리로 개헌안이 통과되었다.",
    "description": "사사오입의 논리로 개헌안이 통과되었다.",
    "startYear": 1954,
    "endYear": 1954,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "사사오입 개헌"
    ],
    "_src": "77회 심화 Q48 X"
  },
  {
    "id": "77회_q48_633",
    "type": "사건",
    "kind": "detail",
    "title": "반민족 행위 특별 조사 위원회가 해체되었다.",
    "description": "반민족 행위 특별 조사 위원회가 해체되었다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "77회 심화 Q48 X"
  },
  {
    "id": "77회_q48_634",
    "type": "사건",
    "kind": "detail",
    "title": "민의원 참의원으로 구성된 양원제 국회가 탄생하였다.",
    "description": "민의원 참의원으로 구성된 양원제 국회가 탄생하였다.",
    "startYear": 1960,
    "endYear": 1961,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "제2공화국 헌법"
    ],
    "_src": "77회 심화 Q48 X"
  },
  {
    "id": "77회_q49_635",
    "type": "사건",
    "kind": "detail",
    "title": "헝가리에 상주 대표부가 설치되었다.",
    "description": "헝가리에 상주 대표부가 설치되었다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "77회 심화 Q49 X"
  },
  {
    "id": "77회_q49_636",
    "type": "사건",
    "kind": "detail",
    "title": "박종철 고문 치사 사건이 발생하였다.",
    "description": "박종철 고문 치사 사건이 발생하였다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "77회 심화 Q49 O"
  },
  {
    "id": "77회_q49_637",
    "type": "사건",
    "kind": "detail",
    "title": "평화 통일을 주장한 조봉암이 처형되었다.",
    "description": "평화 통일을 주장한 조봉암이 처형되었다.",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "77회 심화 Q49 X"
  },
  {
    "id": "77회_q49_638",
    "type": "사건",
    "kind": "detail",
    "title": "대통령 긴급 명령으로 금융 실명제가 실시되었다.",
    "description": "대통령 긴급 명령으로 금융 실명제가 실시되었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "77회 심화 Q49 X"
  },
  {
    "id": "77회_q49_639",
    "type": "사건",
    "kind": "detail",
    "title": "서울역에서 청량리역 간에 서울 지하철 1호선이 개통되었...",
    "description": "서울역에서 청량리역 간에 서울 지하철 1호선이 개통되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "77회 심화 Q49 X"
  },
  {
    "id": "77회_q50_640",
    "type": "사건",
    "kind": "detail",
    "title": "서안평을 공격하여 영토를 확대하였다.",
    "description": "서안평을 공격하여 영토를 확대하였다.",
    "startYear": 300,
    "endYear": 331,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 미천왕"
    ],
    "_src": "77회 심화 Q50 X"
  },
  {
    "id": "77회_q50_641",
    "type": "사건",
    "kind": "detail",
    "title": "소지 마립간과 혼인 동맹을 맺었다.",
    "description": "소지 마립간과 혼인 동맹을 맺었다.",
    "startYear": 479,
    "endYear": 501,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 동성왕"
    ],
    "_src": "77회 심화 Q50 X"
  },
  {
    "id": "77회_q50_642",
    "type": "사건",
    "kind": "detail",
    "title": "국호를 남부여라 칭하였다.",
    "description": "국호를 남부여라 칭하였다.",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 성왕"
    ],
    "_src": "77회 심화 Q50 O"
  },
  {
    "id": "77회_q50_643",
    "type": "사건",
    "kind": "detail",
    "title": "쌍성총관부를 수복하였다.",
    "description": "쌍성총관부를 수복하였다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "77회 심화 Q50 X"
  },
  {
    "id": "77회_q50_644",
    "type": "사건",
    "kind": "detail",
    "title": "경국대전을 완성하였다.",
    "description": "경국대전을 완성하였다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "77회 심화 Q50 X"
  },
  {
    "id": "76회_q1_645",
    "type": "사건",
    "kind": "detail",
    "title": "민무늬 토기에 식량을 저장하였다.",
    "description": "민무늬 토기에 식량을 저장하였다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "76회 심화 Q1 X"
  },
  {
    "id": "76회_q1_646",
    "type": "사건",
    "kind": "detail",
    "title": "가락바퀴를 이용하여 실을 만들었다.",
    "description": "가락바퀴를 이용하여 실을 만들었다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "76회 심화 Q1 X"
  },
  {
    "id": "76회_q1_647",
    "type": "사건",
    "kind": "detail",
    "title": "명도전 반량전 등 화폐를 사용하였다.",
    "description": "명도전 반량전 등 화폐를 사용하였다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "76회 심화 Q1 X"
  },
  {
    "id": "76회_q1_648",
    "type": "사건",
    "kind": "detail",
    "title": "철제 농기구를 사용하여 농사를 지었다.",
    "description": "철제 농기구를 사용하여 농사를 지었다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "76회 심화 Q1 X"
  },
  {
    "id": "76회_q1_649",
    "type": "사건",
    "kind": "detail",
    "title": "주로 동굴이나 강가의 막집에 거주하였다.",
    "description": "주로 동굴이나 강가의 막집에 거주하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "76회 심화 Q1 O"
  },
  {
    "id": "76회_q2_650",
    "type": "사건",
    "kind": "detail",
    "title": "신성 구역인 소도가 존재하였다.",
    "description": "신성 구역인 소도가 존재하였다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "76회 심화 Q2 X"
  },
  {
    "id": "76회_q2_651",
    "type": "사건",
    "kind": "detail",
    "title": "10월에 동맹이라는 제천 행사를 열었다.",
    "description": "10월에 동맹이라는 제천 행사를 열었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "76회 심화 Q2 O"
  },
  {
    "id": "76회_q2_652",
    "type": "사건",
    "kind": "detail",
    "title": "읍락 간의 경계를 중시하는 책화가 있었다.",
    "description": "읍락 간의 경계를 중시하는 책화가 있었다.",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "동예"
    ],
    "_src": "76회 심화 Q2 X"
  },
  {
    "id": "76회_q2_653",
    "type": "사건",
    "kind": "detail",
    "title": "사회 질서 유지를 위해 범금 8조를 두었다.",
    "description": "사회 질서 유지를 위해 범금 8조를 두었다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "76회 심화 Q2 X"
  },
  {
    "id": "76회_q2_654",
    "type": "사건",
    "kind": "detail",
    "title": "화백 회의에서 국가의 중대사를 결정하였다.",
    "description": "화백 회의에서 국가의 중대사를 결정하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "76회 심화 Q2 X"
  },
  {
    "id": "76회_q5_655",
    "type": "사건",
    "kind": "detail",
    "title": "경성과 경원에 무역소를 두었다.",
    "description": "경성과 경원에 무역소를 두었다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "76회 심화 Q5 X"
  },
  {
    "id": "76회_q5_656",
    "type": "사건",
    "kind": "detail",
    "title": "솔빈부의 말을 특산품으로 수출하였다.",
    "description": "솔빈부의 말을 특산품으로 수출하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "76회 심화 Q5 X"
  },
  {
    "id": "76회_q5_657",
    "type": "사건",
    "kind": "detail",
    "title": "서적점 다점 등의 관영 상점을 운영하였다.",
    "description": "서적점 다점 등의 관영 상점을 운영하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "76회 심화 Q5 X"
  },
  {
    "id": "76회_q5_658",
    "type": "사건",
    "kind": "detail",
    "title": "청해진을 중심으로 해상 무역이 번성하였다.",
    "description": "청해진을 중심으로 해상 무역이 번성하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "76회 심화 Q5 O"
  },
  {
    "id": "76회_q5_659",
    "type": "사건",
    "kind": "detail",
    "title": "특수 행정 구역인 소에서 여러 물품을 생산하였다.",
    "description": "특수 행정 구역인 소에서 여러 물품을 생산하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "76회 심화 Q5 X"
  },
  {
    "id": "76회_q6_660",
    "type": "사건",
    "kind": "detail",
    "title": "병부를 설치하고 율령을 반포하였다.",
    "description": "병부를 설치하고 율령을 반포하였다.",
    "startYear": 514,
    "endYear": 540,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 법흥왕"
    ],
    "_src": "76회 심화 Q6 X"
  },
  {
    "id": "76회_q6_661",
    "type": "사건",
    "kind": "detail",
    "title": "관료전을 지급하고 녹읍을 폐지하였다.",
    "description": "관료전을 지급하고 녹읍을 폐지하였다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "76회 심화 Q6 O"
  },
  {
    "id": "76회_q6_662",
    "type": "사건",
    "kind": "detail",
    "title": "화랑도를 국가적인 조직으로 개편하였다.",
    "description": "화랑도를 국가적인 조직으로 개편하였다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "76회 심화 Q6 X"
  },
  {
    "id": "76회_q6_663",
    "type": "사건",
    "kind": "detail",
    "title": "관리 선발을 위해 독서삼품과를 시행하였다.",
    "description": "관리 선발을 위해 독서삼품과를 시행하였다.",
    "startYear": 785,
    "endYear": 798,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라 원성왕"
    ],
    "_src": "76회 심화 Q6 X"
  },
  {
    "id": "76회_q6_664",
    "type": "사건",
    "kind": "detail",
    "title": "국호를 마진으로 바꾸고 도읍을 철원으로 옮겼다.",
    "description": "국호를 마진으로 바꾸고 도읍을 철원으로 옮겼다.",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "76회 심화 Q6 X"
  },
  {
    "id": "76회_q7_665",
    "type": "사건",
    "kind": "detail",
    "title": "보현십원가를 지었다.",
    "description": "보현십원가를 지었다.",
    "startYear": 923,
    "endYear": 973,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "균여"
    ],
    "_src": "76회 심화 Q7 X"
  },
  {
    "id": "76회_q7_666",
    "type": "사건",
    "kind": "detail",
    "title": "세속 5계를 제시하였다.",
    "description": "세속 5계를 제시하였다.",
    "startYear": 542,
    "endYear": 640,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "원광"
    ],
    "_src": "76회 심화 Q7 X"
  },
  {
    "id": "76회_q7_667",
    "type": "사건",
    "kind": "detail",
    "title": "대승기신론소를 저술하였다.",
    "description": "대승기신론소를 저술하였다.",
    "startYear": 617,
    "endYear": 686,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "원효"
    ],
    "_src": "76회 심화 Q7 X"
  },
  {
    "id": "76회_q7_668",
    "type": "사건",
    "kind": "detail",
    "title": "화엄일승법계도를 작성하였다.",
    "description": "화엄일승법계도를 작성하였다.",
    "startYear": 625,
    "endYear": 702,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "의상"
    ],
    "_src": "76회 심화 Q7 O"
  },
  {
    "id": "76회_q7_669",
    "type": "사건",
    "kind": "detail",
    "title": "신편제종교장총록을 편찬하였다.",
    "description": "신편제종교장총록을 편찬하였다.",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 의천"
    ],
    "_src": "76회 심화 Q7 X"
  },
  {
    "id": "76회_q8_670",
    "type": "사건",
    "kind": "detail",
    "title": "역사서인 유기와 신집을 편찬하였다.",
    "description": "역사서인 유기와 신집을 편찬하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "76회 심화 Q8 X"
  },
  {
    "id": "76회_q8_671",
    "type": "사건",
    "kind": "detail",
    "title": "내신좌평 내두좌평 등 6좌평이 있었다.",
    "description": "내신좌평 내두좌평 등 6좌평이 있었다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "76회 심화 Q8 X"
  },
  {
    "id": "76회_q8_672",
    "type": "사건",
    "kind": "detail",
    "title": "5경 15부 62주의 지방 행정 제도를 갖추었다.",
    "description": "5경 15부 62주의 지방 행정 제도를 갖추었다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "76회 심화 Q8 O"
  },
  {
    "id": "76회_q8_673",
    "type": "사건",
    "kind": "detail",
    "title": "도병마사에서 변경의 군사 문제 등을 논의하였다.",
    "description": "도병마사에서 변경의 군사 문제 등을 논의하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "76회 심화 Q8 X"
  },
  {
    "id": "76회_q8_674",
    "type": "사건",
    "kind": "detail",
    "title": "골품에 따라 관등 승진 일상생활 등을 엄격히 제한하였다...",
    "description": "골품에 따라 관등 승진 일상생활 등을 엄격히 제한하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "76회 심화 Q8 X"
  },
  {
    "id": "76회_q9_675",
    "type": "사건",
    "kind": "detail",
    "title": "비담과 염종의 난이 진압되었다.",
    "description": "비담과 염종의 난이 진압되었다.",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 선덕여왕"
    ],
    "_src": "76회 심화 Q9 X"
  },
  {
    "id": "76회_q9_676",
    "type": "사건",
    "kind": "detail",
    "title": "김헌창이 웅천주에서 반란을 일으켰다.",
    "description": "김헌창이 웅천주에서 반란을 일으켰다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "76회 심화 Q9 O"
  },
  {
    "id": "76회_q9_677",
    "type": "사건",
    "kind": "detail",
    "title": "연개소문이 정변을 일으켜 권력을 잡았다.",
    "description": "연개소문이 정변을 일으켜 권력을 잡았다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "76회 심화 Q9 X"
  },
  {
    "id": "76회_q9_678",
    "type": "사건",
    "kind": "detail",
    "title": "만적을 비롯한 노비들이 반란을 모의하였다.",
    "description": "만적을 비롯한 노비들이 반란을 모의하였다.",
    "startYear": 1198,
    "endYear": 1198,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "만적의 난"
    ],
    "_src": "76회 심화 Q9 X"
  },
  {
    "id": "76회_q9_679",
    "type": "사건",
    "kind": "detail",
    "title": "김춘추가 당으로 건너가 군사적 지원을 요청하였다.",
    "description": "김춘추가 당으로 건너가 군사적 지원을 요청하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "76회 심화 Q9 X"
  },
  {
    "id": "76회_q10_680",
    "type": "사건",
    "kind": "detail",
    "title": "신숭겸이 공산 전투에서 전사하였다.",
    "description": "신숭겸이 공산 전투에서 전사하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "76회 심화 Q10 X"
  },
  {
    "id": "76회_q10_681",
    "type": "사건",
    "kind": "detail",
    "title": "신검의 군대가 일리천 전투에서 패배하였다.",
    "description": "신검의 군대가 일리천 전투에서 패배하였다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "76회 심화 Q10 O"
  },
  {
    "id": "76회_q10_682",
    "type": "사건",
    "kind": "detail",
    "title": "궁예가 군대를 보내 나주 일대를 점령하였다.",
    "description": "궁예가 군대를 보내 나주 일대를 점령하였다.",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "76회 심화 Q10 X"
  },
  {
    "id": "76회_q10_683",
    "type": "사건",
    "kind": "detail",
    "title": "김선평 권행 등이 고창 전투에서 활약하였다.",
    "description": "김선평 권행 등이 고창 전투에서 활약하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "76회 심화 Q10 X"
  },
  {
    "id": "76회_q10_684",
    "type": "사건",
    "kind": "detail",
    "title": "경애왕이 후백제군의 왕경 습격으로 사망하였다.",
    "description": "경애왕이 후백제군의 왕경 습격으로 사망하였다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "76회 심화 Q10 X"
  },
  {
    "id": "76회_q11_685",
    "type": "사건",
    "kind": "detail",
    "title": "국자감에 7재라는 전문 강좌를 개설하였다.",
    "description": "국자감에 7재라는 전문 강좌를 개설하였다.",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 예종"
    ],
    "_src": "76회 심화 Q11 O"
  },
  {
    "id": "76회_q11_686",
    "type": "사건",
    "kind": "detail",
    "title": "지방 12목에 경학 박사를 처음 파견하였다.",
    "description": "지방 12목에 경학 박사를 처음 파견하였다.",
    "startYear": 981,
    "endYear": 997,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 성종"
    ],
    "_src": "76회 심화 Q11 X"
  },
  {
    "id": "76회_q11_687",
    "type": "사건",
    "kind": "detail",
    "title": "서적포를 설치하여 출판을 담당하게 하였다.",
    "description": "서적포를 설치하여 출판을 담당하게 하였다.",
    "startYear": 1095,
    "endYear": 1105,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 숙종"
    ],
    "_src": "76회 심화 Q11 X"
  },
  {
    "id": "76회_q11_688",
    "type": "사건",
    "kind": "detail",
    "title": "대도에 만권당을 세워 중국 학자와 교유하였다.",
    "description": "대도에 만권당을 세워 중국 학자와 교유하였다.",
    "startYear": 1308,
    "endYear": 1313,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충선왕"
    ],
    "_src": "76회 심화 Q11 X"
  },
  {
    "id": "76회_q11_689",
    "type": "사건",
    "kind": "detail",
    "title": "외국어 교육과 통역을 관장하는 통문관을 설치하였다.",
    "description": "외국어 교육과 통역을 관장하는 통문관을 설치하였다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "76회 심화 Q11 X"
  },
  {
    "id": "76회_q12_690",
    "type": "사건",
    "kind": "detail",
    "title": "원종을 폐위하고 안경공 창을 즉위시켰다.",
    "description": "원종을 폐위하고 안경공 창을 즉위시켰다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "76회 심화 Q12 X"
  },
  {
    "id": "76회_q12_691",
    "type": "사건",
    "kind": "detail",
    "title": "9재 학당을 설립하여 유교 교육에 힘썼다.",
    "description": "9재 학당을 설립하여 유교 교육에 힘썼다.",
    "startYear": 984,
    "endYear": 1068,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "최충"
    ],
    "_src": "76회 심화 Q12 X"
  },
  {
    "id": "76회_q12_692",
    "type": "사건",
    "kind": "detail",
    "title": "인사 행정 담당 기구로 정방을 설치하였다.",
    "description": "인사 행정 담당 기구로 정방을 설치하였다.",
    "startYear": 1219,
    "endYear": 1249,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "최우"
    ],
    "_src": "76회 심화 Q12 O"
  },
  {
    "id": "76회_q12_693",
    "type": "사건",
    "kind": "detail",
    "title": "전민변정도감의 책임자로서 개혁을 이끌었다.",
    "description": "전민변정도감의 책임자로서 개혁을 이끌었다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "76회 심화 Q12 X"
  },
  {
    "id": "76회_q12_694",
    "type": "사건",
    "kind": "detail",
    "title": "오월에 사신을 보내고 검교태보의 직을 받았다.",
    "description": "오월에 사신을 보내고 검교태보의 직을 받았다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "76회 심화 Q12 X"
  },
  {
    "id": "76회_q13_695",
    "type": "사건",
    "kind": "detail",
    "title": "초량 왜관을 통해 일본과 무역하였다.",
    "description": "초량 왜관을 통해 일본과 무역하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "76회 심화 Q13 X"
  },
  {
    "id": "76회_q13_696",
    "type": "사건",
    "kind": "detail",
    "title": "덕대가 광산을 전문적으로 경영하였다.",
    "description": "덕대가 광산을 전문적으로 경영하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "76회 심화 Q13 X"
  },
  {
    "id": "76회_q13_697",
    "type": "사건",
    "kind": "detail",
    "title": "당항성 영암이 국제 무역항으로 번성하였다.",
    "description": "당항성 영암이 국제 무역항으로 번성하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "76회 심화 Q13 X"
  },
  {
    "id": "76회_q13_698",
    "type": "사건",
    "kind": "detail",
    "title": "거란도 영주도를 통해 주변국과 교역하였다.",
    "description": "거란도 영주도를 통해 주변국과 교역하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "76회 심화 Q13 X"
  },
  {
    "id": "76회_q13_699",
    "type": "사건",
    "kind": "detail",
    "title": "주전도감을 설치하여 해동통보를 발행하였다.",
    "description": "주전도감을 설치하여 해동통보를 발행하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "76회 심화 Q13 O"
  },
  {
    "id": "76회_q15_700",
    "type": "사건",
    "kind": "detail",
    "title": "몽골의 사신 저고여가 피살된 곳을 조사한다.",
    "description": "몽골의 사신 저고여가 피살된 곳을 조사한다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "76회 심화 Q15 X"
  },
  {
    "id": "76회_q15_701",
    "type": "사건",
    "kind": "detail",
    "title": "서희가 외교 담판을 통해 획득한 곳을 찾아본다.",
    "description": "서희가 외교 담판을 통해 획득한 곳을 찾아본다.",
    "startYear": 942,
    "endYear": 998,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "서희"
    ],
    "_src": "76회 심화 Q15 X"
  },
  {
    "id": "76회_q15_702",
    "type": "사건",
    "kind": "detail",
    "title": "강감찬이 건의하여 건설된 성곽이 있는 곳을 검색한다.",
    "description": "강감찬이 건의하여 건설된 성곽이 있는 곳을 검색한다.",
    "startYear": 1010,
    "endYear": 1011,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "거란 2차 침입"
    ],
    "_src": "76회 심화 Q15 O"
  },
  {
    "id": "76회_q15_703",
    "type": "사건",
    "kind": "detail",
    "title": "김보당이 무신 정권에 저항하여 봉기한 곳을 파악한다.",
    "description": "김보당이 무신 정권에 저항하여 봉기한 곳을 파악한다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "76회 심화 Q15 X"
  },
  {
    "id": "76회_q15_704",
    "type": "사건",
    "kind": "detail",
    "title": "최무선이 화포를 이용하여 왜구를 물리친 곳을 알아본다.",
    "description": "최무선이 화포를 이용하여 왜구를 물리친 곳을 알아본다.",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "화통도감"
    ],
    "_src": "76회 심화 Q15 X"
  },
  {
    "id": "76회_q16_705",
    "type": "사건",
    "kind": "detail",
    "title": "강화도로 도읍을 옮겨 항전하였다.",
    "description": "강화도로 도읍을 옮겨 항전하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "76회 심화 Q16 O"
  },
  {
    "id": "76회_q16_706",
    "type": "사건",
    "kind": "detail",
    "title": "광군을 조직하여 침입에 대비하였다.",
    "description": "광군을 조직하여 침입에 대비하였다.",
    "startYear": 993,
    "endYear": 994,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "거란 1차 침입"
    ],
    "_src": "76회 심화 Q16 X"
  },
  {
    "id": "76회_q16_707",
    "type": "사건",
    "kind": "detail",
    "title": "삼수병으로 구성된 훈련도감을 신설하였다.",
    "description": "삼수병으로 구성된 훈련도감을 신설하였다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "76회 심화 Q16 X"
  },
  {
    "id": "76회_q16_708",
    "type": "사건",
    "kind": "detail",
    "title": "별무반을 편성하고 동북 9성을 축조하였다.",
    "description": "별무반을 편성하고 동북 9성을 축조하였다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "76회 심화 Q16 X"
  },
  {
    "id": "76회_q16_709",
    "type": "사건",
    "kind": "detail",
    "title": "철령위 설치에 반발하여 요동 정벌을 추진하였다.",
    "description": "철령위 설치에 반발하여 요동 정벌을 추진하였다.",
    "startYear": 1374,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 우왕"
    ],
    "_src": "76회 심화 Q16 X"
  },
  {
    "id": "76회_q18_710",
    "type": "사건",
    "kind": "detail",
    "title": "쌍기의 건의로 과거제가 도입되었다.",
    "description": "쌍기의 건의로 과거제가 도입되었다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "76회 심화 Q18 X"
  },
  {
    "id": "76회_q18_711",
    "type": "사건",
    "kind": "detail",
    "title": "빈민 구제를 위해 흑창이 설립되었다.",
    "description": "빈민 구제를 위해 흑창이 설립되었다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "76회 심화 Q18 X"
  },
  {
    "id": "76회_q18_712",
    "type": "사건",
    "kind": "detail",
    "title": "매를 기르고 훈련시키는 응방이 설치되었다.",
    "description": "매를 기르고 훈련시키는 응방이 설치되었다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "76회 심화 Q18 O"
  },
  {
    "id": "76회_q18_713",
    "type": "사건",
    "kind": "detail",
    "title": "의천이 국청사를 중심으로 천태종을 개창하였다.",
    "description": "의천이 국청사를 중심으로 천태종을 개창하였다.",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 의천"
    ],
    "_src": "76회 심화 Q18 X"
  },
  {
    "id": "76회_q18_714",
    "type": "사건",
    "kind": "detail",
    "title": "망이·망소이가 가혹한 수탈에 저항하여 봉기하였다.",
    "description": "망이·망소이가 가혹한 수탈에 저항하여 봉기하였다.",
    "startYear": 1176,
    "endYear": 1177,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "망이·망소이의 난"
    ],
    "_src": "76회 심화 Q18 X"
  },
  {
    "id": "76회_q19_715",
    "type": "사건",
    "kind": "detail",
    "title": "훈련 교범인 무예도보통지가 간행되었다.",
    "description": "훈련 교범인 무예도보통지가 간행되었다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "76회 심화 Q19 X"
  },
  {
    "id": "76회_q19_716",
    "type": "사건",
    "kind": "detail",
    "title": "전통 한의학을 정리한 동의보감이 저술되었다.",
    "description": "전통 한의학을 정리한 동의보감이 저술되었다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "76회 심화 Q19 X"
  },
  {
    "id": "76회_q19_717",
    "type": "사건",
    "kind": "detail",
    "title": "음악 이론 등을 집대성한 악학궤범이 완성되었다.",
    "description": "음악 이론 등을 집대성한 악학궤범이 완성되었다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "76회 심화 Q19 X"
  },
  {
    "id": "76회_q19_718",
    "type": "사건",
    "kind": "detail",
    "title": "유교 윤리의 보급을 위해 삼강행실도가 편찬되었다.",
    "description": "유교 윤리의 보급을 위해 삼강행실도가 편찬되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "76회 심화 Q19 O"
  },
  {
    "id": "76회_q19_719",
    "type": "사건",
    "kind": "detail",
    "title": "군정 재정의 내용을 정리한 만기요람이 만들어졌다.",
    "description": "군정 재정의 내용을 정리한 만기요람이 만들어졌다.",
    "startYear": 1800,
    "endYear": 1834,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 순조"
    ],
    "_src": "76회 심화 Q19 X"
  },
  {
    "id": "76회_q20_720",
    "type": "사건",
    "kind": "detail",
    "title": "유자광의 고변으로 남이가 처형되었다.",
    "description": "유자광의 고변으로 남이가 처형되었다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "76회 심화 Q20 X"
  },
  {
    "id": "76회_q20_721",
    "type": "사건",
    "kind": "detail",
    "title": "기사환국으로 송시열이 죽임을 당하였다.",
    "description": "기사환국으로 송시열이 죽임을 당하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "76회 심화 Q20 X"
  },
  {
    "id": "76회_q20_722",
    "type": "사건",
    "kind": "detail",
    "title": "외척 간의 권력 다툼으로 윤임이 제거되었다.",
    "description": "외척 간의 권력 다툼으로 윤임이 제거되었다.",
    "startYear": 1545,
    "endYear": 1567,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 명종"
    ],
    "_src": "76회 심화 Q20 X"
  },
  {
    "id": "76회_q20_723",
    "type": "사건",
    "kind": "detail",
    "title": "위훈 삭제를 주장한 조광조 일파가 축출되었다.",
    "description": "위훈 삭제를 주장한 조광조 일파가 축출되었다.",
    "startYear": 1519,
    "endYear": 1519,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "기묘사화"
    ],
    "_src": "76회 심화 Q20 X"
  },
  {
    "id": "76회_q20_724",
    "type": "사건",
    "kind": "detail",
    "title": "조의제문이 발단이 되어 김일손 등이 피해를 입었다.",
    "description": "조의제문이 발단이 되어 김일손 등이 피해를 입었다.",
    "startYear": 1498,
    "endYear": 1498,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "무오사화"
    ],
    "_src": "76회 심화 Q20 O"
  },
  {
    "id": "76회_q21_725",
    "type": "사건",
    "kind": "detail",
    "title": "정문부가 북관대첩을 이끌었다.",
    "description": "정문부가 북관대첩을 이끌었다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "76회 심화 Q21 O"
  },
  {
    "id": "76회_q21_726",
    "type": "사건",
    "kind": "detail",
    "title": "정봉수가 용골산성에서 항쟁하였다.",
    "description": "정봉수가 용골산성에서 항쟁하였다.",
    "startYear": 1627,
    "endYear": 1627,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정묘호란"
    ],
    "_src": "76회 심화 Q21 X"
  },
  {
    "id": "76회_q21_727",
    "type": "사건",
    "kind": "detail",
    "title": "최윤덕이 이만주 부대를 정벌하였다.",
    "description": "최윤덕이 이만주 부대를 정벌하였다.",
    "startYear": 1433,
    "endYear": 1449,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "4군 6진"
    ],
    "_src": "76회 심화 Q21 X"
  },
  {
    "id": "76회_q21_728",
    "type": "사건",
    "kind": "detail",
    "title": "강홍립이 사르후 전투에 참전하였다.",
    "description": "강홍립이 사르후 전투에 참전하였다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "76회 심화 Q21 X"
  },
  {
    "id": "76회_q21_729",
    "type": "사건",
    "kind": "detail",
    "title": "김준룡이 광교산 전투에서 항전하였다.",
    "description": "김준룡이 광교산 전투에서 항전하였다.",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "병자호란"
    ],
    "_src": "76회 심화 Q21 X"
  },
  {
    "id": "76회_q22_730",
    "type": "사건",
    "kind": "detail",
    "title": "수도의 행정과 치안을 담당하였다.",
    "description": "수도의 행정과 치안을 담당하였다.",
    "startYear": 1394,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "한성부"
    ],
    "_src": "76회 심화 Q22 X"
  },
  {
    "id": "76회_q22_731",
    "type": "사건",
    "kind": "detail",
    "title": "사헌부 사간원과 함께 3사로 불렸다.",
    "description": "사헌부 사간원과 함께 3사로 불렸다.",
    "startYear": 1463,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "홍문관"
    ],
    "_src": "76회 심화 Q22 O"
  },
  {
    "id": "76회_q22_732",
    "type": "사건",
    "kind": "detail",
    "title": "대사성 좨주 직강 등의 관직이 있었다.",
    "description": "대사성 좨주 직강 등의 관직이 있었다.",
    "startYear": 1398,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "성균관"
    ],
    "_src": "76회 심화 Q22 X"
  },
  {
    "id": "76회_q22_733",
    "type": "사건",
    "kind": "detail",
    "title": "왕명 출납을 맡은 왕의 비서 기관이었다.",
    "description": "왕명 출납을 맡은 왕의 비서 기관이었다.",
    "startYear": 1405,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "승정원"
    ],
    "_src": "76회 심화 Q22 X"
  },
  {
    "id": "76회_q22_734",
    "type": "사건",
    "kind": "detail",
    "title": "사초와 시정기를 바탕으로 실록을 편찬하였다.",
    "description": "사초와 시정기를 바탕으로 실록을 편찬하였다.",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "춘추관"
    ],
    "_src": "76회 심화 Q22 X"
  },
  {
    "id": "76회_q23_735",
    "type": "사건",
    "kind": "detail",
    "title": "전시과에서 전지 지급 기준의 변화를 찾아본다.",
    "description": "전시과에서 전지 지급 기준의 변화를 찾아본다.",
    "startYear": 976,
    "endYear": 1391,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "전시과"
    ],
    "_src": "76회 심화 Q23 X"
  },
  {
    "id": "76회_q23_736",
    "type": "사건",
    "kind": "detail",
    "title": "일부 상류층에게 선무군관포를 거둔 목적을 알아본다.",
    "description": "일부 상류층에게 선무군관포를 거둔 목적을 알아본다.",
    "startYear": 1750,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "균역법"
    ],
    "_src": "76회 심화 Q23 X"
  },
  {
    "id": "76회_q23_737",
    "type": "사건",
    "kind": "detail",
    "title": "과전 지급 대상을 현직 관리로 제한한 까닭을 검색한다.",
    "description": "과전 지급 대상을 현직 관리로 제한한 까닭을 검색한다.",
    "startYear": 1391,
    "endYear": 1466,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "과전법"
    ],
    "_src": "76회 심화 Q23 X"
  },
  {
    "id": "76회_q23_738",
    "type": "사건",
    "kind": "detail",
    "title": "풍흉에 관계없이 전세 부담액을 고정한 이유를 분석한다.",
    "description": "풍흉에 관계없이 전세 부담액을 고정한 이유를 분석한다.",
    "startYear": 1635,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "영정법"
    ],
    "_src": "76회 심화 Q23 X"
  },
  {
    "id": "76회_q23_739",
    "type": "사건",
    "kind": "detail",
    "title": "관청에 물품을 조달하는 공인이 등장한 배경을 조사한다.",
    "description": "관청에 물품을 조달하는 공인이 등장한 배경을 조사한다.",
    "startYear": 1608,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "대동법"
    ],
    "_src": "76회 심화 Q23 O"
  },
  {
    "id": "76회_q24_740",
    "type": "사건",
    "kind": "detail",
    "title": "의산문답에서 무한 우주론을 주장하였다.",
    "description": "의산문답에서 무한 우주론을 주장하였다.",
    "startYear": 1731,
    "endYear": 1783,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "홍대용"
    ],
    "_src": "76회 심화 Q24 X"
  },
  {
    "id": "76회_q24_741",
    "type": "사건",
    "kind": "detail",
    "title": "북학의에서 절약보다 적절한 소비를 권장하였다.",
    "description": "북학의에서 절약보다 적절한 소비를 권장하였다.",
    "startYear": 1750,
    "endYear": 1805,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "박제가"
    ],
    "_src": "76회 심화 Q24 X"
  },
  {
    "id": "76회_q24_742",
    "type": "사건",
    "kind": "detail",
    "title": "열하일기에서 수레와 선박의 필요성을 서술하였다.",
    "description": "열하일기에서 수레와 선박의 필요성을 서술하였다.",
    "startYear": 1737,
    "endYear": 1805,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "박지원"
    ],
    "_src": "76회 심화 Q24 X"
  },
  {
    "id": "76회_q24_743",
    "type": "사건",
    "kind": "detail",
    "title": "성호사설에서 나라를 망치는 여섯 가지 좀을 제시하였다.",
    "description": "성호사설에서 나라를 망치는 여섯 가지 좀을 제시하였다.",
    "startYear": 1681,
    "endYear": 1763,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이익"
    ],
    "_src": "76회 심화 Q24 O"
  },
  {
    "id": "76회_q24_744",
    "type": "사건",
    "kind": "detail",
    "title": "우서에서 사농공상의 직업적 평등과 전문화를 강조하였다.",
    "description": "우서에서 사농공상의 직업적 평등과 전문화를 강조하였다.",
    "startYear": 1694,
    "endYear": 1755,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "유수원"
    ],
    "_src": "76회 심화 Q24 X"
  },
  {
    "id": "76회_q25_745",
    "type": "사건",
    "kind": "detail",
    "title": "나선 정벌에 조총 부대를 파견하였다.",
    "description": "나선 정벌에 조총 부대를 파견하였다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "76회 심화 Q25 X"
  },
  {
    "id": "76회_q25_746",
    "type": "사건",
    "kind": "detail",
    "title": "통치 규범을 재정비한 속대전을 편찬하였다.",
    "description": "통치 규범을 재정비한 속대전을 편찬하였다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "76회 심화 Q25 O"
  },
  {
    "id": "76회_q25_747",
    "type": "사건",
    "kind": "detail",
    "title": "청과 국경을 정한 백두산정계비를 건립하였다.",
    "description": "청과 국경을 정한 백두산정계비를 건립하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "76회 심화 Q25 X"
  },
  {
    "id": "76회_q25_748",
    "type": "사건",
    "kind": "detail",
    "title": "문신을 재교육하기 위한 초계문신제를 시행하였다.",
    "description": "문신을 재교육하기 위한 초계문신제를 시행하였다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "76회 심화 Q25 X"
  },
  {
    "id": "76회_q25_749",
    "type": "사건",
    "kind": "detail",
    "title": "한성 방어를 위하여 총융청과 수어청을 창설하였다.",
    "description": "한성 방어를 위하여 총융청과 수어청을 창설하였다.",
    "startYear": 1623,
    "endYear": 1649,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 인조"
    ],
    "_src": "76회 심화 Q25 X"
  },
  {
    "id": "76회_q26_750",
    "type": "사건",
    "kind": "detail",
    "title": "상평통보로 물건을 거래하는 객주",
    "description": "상평통보로 물건을 거래하는 객주",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "76회 심화 Q26 X"
  },
  {
    "id": "76회_q26_751",
    "type": "사건",
    "kind": "detail",
    "title": "인삼 무역으로 크게 수익을 본 송상",
    "description": "인삼 무역으로 크게 수익을 본 송상",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "76회 심화 Q26 X"
  },
  {
    "id": "76회_q26_752",
    "type": "사건",
    "kind": "detail",
    "title": "주자소에서 계미자를 주조하는 장인",
    "description": "주자소에서 계미자를 주조하는 장인",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "76회 심화 Q26 O"
  },
  {
    "id": "76회_q26_753",
    "type": "사건",
    "kind": "detail",
    "title": "고추 담배 등의 상품 작물을 재배하는 농민",
    "description": "고추 담배 등의 상품 작물을 재배하는 농민",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "76회 심화 Q26 X"
  },
  {
    "id": "76회_q26_754",
    "type": "사건",
    "kind": "detail",
    "title": "저잣거리에서 한글 소설을 읽어주는 전기수",
    "description": "저잣거리에서 한글 소설을 읽어주는 전기수",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "76회 심화 Q26 X"
  },
  {
    "id": "76회_q29_755",
    "type": "사건",
    "kind": "detail",
    "title": "청일 전쟁이 발발하였다.",
    "description": "청일 전쟁이 발발하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "청일전쟁 발발"
    ],
    "_src": "76회 심화 Q29 X"
  },
  {
    "id": "76회_q29_756",
    "type": "사건",
    "kind": "detail",
    "title": "삼정이정청이 설치되었다.",
    "description": "삼정이정청이 설치되었다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "76회 심화 Q29 X"
  },
  {
    "id": "76회_q29_757",
    "type": "사건",
    "kind": "detail",
    "title": "영국이 거문도를 불법으로 점령하였다.",
    "description": "영국이 거문도를 불법으로 점령하였다.",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "거문도 사건"
    ],
    "_src": "76회 심화 Q29 X"
  },
  {
    "id": "76회_q29_758",
    "type": "사건",
    "kind": "detail",
    "title": "김기수가 수신사로 일본에 파견되었다.",
    "description": "김기수가 수신사로 일본에 파견되었다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "76회 심화 Q29 X"
  },
  {
    "id": "76회_q29_759",
    "type": "사건",
    "kind": "detail",
    "title": "한성근 부대가 문수산성에서 항전하였다.",
    "description": "한성근 부대가 문수산성에서 항전하였다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "병인양요"
    ],
    "_src": "76회 심화 Q29 O"
  },
  {
    "id": "76회_q30_760",
    "type": "사건",
    "kind": "detail",
    "title": "임오군란을 계기로 체결되었다.",
    "description": "임오군란을 계기로 체결되었다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조청상민수륙무역장정"
    ],
    "_src": "76회 심화 Q30 O"
  },
  {
    "id": "76회_q30_761",
    "type": "사건",
    "kind": "detail",
    "title": "거중 조정의 조항을 포함하였다.",
    "description": "거중 조정의 조항을 포함하였다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "76회 심화 Q30 X"
  },
  {
    "id": "76회_q30_762",
    "type": "사건",
    "kind": "detail",
    "title": "방곡령을 선포할 수 있는 조건을 명시하였다.",
    "description": "방곡령을 선포할 수 있는 조건을 명시하였다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "76회 심화 Q30 X"
  },
  {
    "id": "76회_q30_763",
    "type": "사건",
    "kind": "detail",
    "title": "부산항과 원산항이 개항되는 결과를 가져왔다.",
    "description": "부산항과 원산항이 개항되는 결과를 가져왔다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "76회 심화 Q30 X"
  },
  {
    "id": "76회_q30_764",
    "type": "사건",
    "kind": "detail",
    "title": "외국인을 재정 고문으로 두도록 하는 조항을 담고 있다.",
    "description": "외국인을 재정 고문으로 두도록 하는 조항을 담고 있다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "76회 심화 Q30 X"
  },
  {
    "id": "76회_q31_765",
    "type": "사건",
    "kind": "detail",
    "title": "일본의 황무지 개간권 요구를 저지하였다.",
    "description": "일본의 황무지 개간권 요구를 저지하였다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "보안회"
    ],
    "_src": "76회 심화 Q31 X"
  },
  {
    "id": "76회_q31_766",
    "type": "사건",
    "kind": "detail",
    "title": "조선 총독부의 방해와 탄압으로 중단되었다.",
    "description": "조선 총독부의 방해와 탄압으로 중단되었다.",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민립 대학 설립 운동"
    ],
    "_src": "76회 심화 Q31 X"
  },
  {
    "id": "76회_q31_767",
    "type": "사건",
    "kind": "detail",
    "title": "집강소를 중심으로 폐정 개혁안을 실천하였다.",
    "description": "집강소를 중심으로 폐정 개혁안을 실천하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "76회 심화 Q31 O"
  },
  {
    "id": "76회_q31_768",
    "type": "사건",
    "kind": "detail",
    "title": "이른바 남한 대토벌 작전으로 큰 피해를 입었다.",
    "description": "이른바 남한 대토벌 작전으로 큰 피해를 입었다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "76회 심화 Q31 X"
  },
  {
    "id": "76회_q31_769",
    "type": "사건",
    "kind": "detail",
    "title": "상황 수습을 위해 박규수가 안핵사로 파견되었다.",
    "description": "상황 수습을 위해 박규수가 안핵사로 파견되었다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "76회 심화 Q31 X"
  },
  {
    "id": "76회_q32_770",
    "type": "사건",
    "kind": "detail",
    "title": "고종 강제 퇴위 반대 운동을 주도하였다.",
    "description": "고종 강제 퇴위 반대 운동을 주도하였다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한자강회"
    ],
    "_src": "76회 심화 Q32 X"
  },
  {
    "id": "76회_q32_771",
    "type": "사건",
    "kind": "detail",
    "title": "만세보를 발행하여 민족의식을 고취하였다.",
    "description": "만세보를 발행하여 민족의식을 고취하였다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "만세보"
    ],
    "_src": "76회 심화 Q32 X"
  },
  {
    "id": "76회_q32_772",
    "type": "사건",
    "kind": "detail",
    "title": "파리 강화 회의에 독립 청원서를 제출하였다.",
    "description": "파리 강화 회의에 독립 청원서를 제출하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "76회 심화 Q32 X"
  },
  {
    "id": "76회_q32_773",
    "type": "사건",
    "kind": "detail",
    "title": "관민 공동회를 개최하여 헌의 6조를 결의하였다.",
    "description": "관민 공동회를 개최하여 헌의 6조를 결의하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "76회 심화 Q32 O"
  },
  {
    "id": "76회_q32_774",
    "type": "사건",
    "kind": "detail",
    "title": "계몽 서적을 보급하기 위해 태극 서관을 운영하였다.",
    "description": "계몽 서적을 보급하기 위해 태극 서관을 운영하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "76회 심화 Q32 X"
  },
  {
    "id": "76회_q33_775",
    "type": "사건",
    "kind": "detail",
    "title": "개혁을 추진하기 위해 군국기무처를 두었다.",
    "description": "개혁을 추진하기 위해 군국기무처를 두었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "76회 심화 Q33 X"
  },
  {
    "id": "76회_q33_776",
    "type": "사건",
    "kind": "detail",
    "title": "행정 기구를 6조에서 8아문으로 개편하였다.",
    "description": "행정 기구를 6조에서 8아문으로 개편하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "76회 심화 Q33 X"
  },
  {
    "id": "76회_q33_777",
    "type": "사건",
    "kind": "detail",
    "title": "근대식 무기 제조 공장인 기기창을 설립하였다.",
    "description": "근대식 무기 제조 공장인 기기창을 설립하였다.",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "기기창"
    ],
    "_src": "76회 심화 Q33 X"
  },
  {
    "id": "76회_q33_778",
    "type": "사건",
    "kind": "detail",
    "title": "토지 소유권을 확인해 주는 지계를 발급하였다.",
    "description": "토지 소유권을 확인해 주는 지계를 발급하였다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "76회 심화 Q33 O"
  },
  {
    "id": "76회_q33_779",
    "type": "사건",
    "kind": "detail",
    "title": "개혁의 방향을 제시한 홍범 14조를 반포하였다.",
    "description": "개혁의 방향을 제시한 홍범 14조를 반포하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "76회 심화 Q33 X"
  },
  {
    "id": "76회_q35_780",
    "type": "사건",
    "kind": "detail",
    "title": "김홍집 조선책략을 가져오다",
    "description": "김홍집 조선책략을 가져오다",
    "startYear": 1880,
    "endYear": 1880,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선책략"
    ],
    "_src": "76회 심화 Q35 X"
  },
  {
    "id": "76회_q35_781",
    "type": "사건",
    "kind": "detail",
    "title": "김옥균 개화당 정부를 수립하다",
    "description": "김옥균 개화당 정부를 수립하다",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑신정변"
    ],
    "_src": "76회 심화 Q35 X"
  },
  {
    "id": "76회_q35_782",
    "type": "사건",
    "kind": "detail",
    "title": "김윤식 영선사로 청에 다녀오다",
    "description": "김윤식 영선사로 청에 다녀오다",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "통리기무아문"
    ],
    "_src": "76회 심화 Q35 X"
  },
  {
    "id": "76회_q35_783",
    "type": "사건",
    "kind": "detail",
    "title": "유길준 조선 중립화론을 건의하다",
    "description": "유길준 조선 중립화론을 건의하다",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "거문도 사건"
    ],
    "_src": "76회 심화 Q35 X"
  },
  {
    "id": "76회_q35_784",
    "type": "사건",
    "kind": "detail",
    "title": "이상설 고종의 특사로 헤이그에 가다",
    "description": "이상설 고종의 특사로 헤이그에 가다",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "헤이그 특사"
    ],
    "_src": "76회 심화 Q35 O"
  },
  {
    "id": "76회_q36_785",
    "type": "사건",
    "kind": "detail",
    "title": "암태도 소작 쟁의에 참여하는 농민",
    "description": "암태도 소작 쟁의에 참여하는 농민",
    "startYear": 1923,
    "endYear": 1924,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "암태도 소작쟁의"
    ],
    "_src": "76회 심화 Q36 X"
  },
  {
    "id": "76회_q36_786",
    "type": "사건",
    "kind": "detail",
    "title": "제복을 입고 칼을 찬 채 수업하는 교사",
    "description": "제복을 입고 칼을 찬 채 수업하는 교사",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "76회 심화 Q36 O"
  },
  {
    "id": "76회_q36_787",
    "type": "사건",
    "kind": "detail",
    "title": "잡지 어린이에 실을 원고를 작성하는 작가",
    "description": "잡지 어린이에 실을 원고를 작성하는 작가",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "76회 심화 Q36 X"
  },
  {
    "id": "76회_q36_788",
    "type": "사건",
    "kind": "detail",
    "title": "토월회에서 연극 공연을 준비하고 있는 배우",
    "description": "토월회에서 연극 공연을 준비하고 있는 배우",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "76회 심화 Q36 X"
  },
  {
    "id": "76회_q36_789",
    "type": "사건",
    "kind": "detail",
    "title": "경성 고무 여자 직공 조합의 파업을 취재하는 기자",
    "description": "경성 고무 여자 직공 조합의 파업을 취재하는 기자",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "76회 심화 Q36 X"
  },
  {
    "id": "76회_q37_790",
    "type": "사건",
    "kind": "detail",
    "title": "국권 회복을 위해 해조신문이 창간되었다.",
    "description": "국권 회복을 위해 해조신문이 창간되었다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "76회 심화 Q37 X"
  },
  {
    "id": "76회_q37_791",
    "type": "사건",
    "kind": "detail",
    "title": "평양 숭의 여학교에서 송죽회가 결성되었다.",
    "description": "평양 숭의 여학교에서 송죽회가 결성되었다.",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "76회 심화 Q37 X"
  },
  {
    "id": "76회_q37_792",
    "type": "사건",
    "kind": "detail",
    "title": "메가타의 주도로 화폐 정리 사업이 실시되었다.",
    "description": "메가타의 주도로 화폐 정리 사업이 실시되었다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "76회 심화 Q37 X"
  },
  {
    "id": "76회_q37_793",
    "type": "사건",
    "kind": "detail",
    "title": "회사 설립을 허가제로 하는 회사령이 공포되었다.",
    "description": "회사 설립을 허가제로 하는 회사령이 공포되었다.",
    "startYear": 1910,
    "endYear": 1920,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "회사령"
    ],
    "_src": "76회 심화 Q37 X"
  },
  {
    "id": "76회_q37_794",
    "type": "사건",
    "kind": "detail",
    "title": "조선 민립 대학 기성회 창립을 위한 총회가 개최되었다.",
    "description": "조선 민립 대학 기성회 창립을 위한 총회가 개최되었다.",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "민립 대학 설립 운동"
    ],
    "_src": "76회 심화 Q37 O"
  },
  {
    "id": "76회_q38_795",
    "type": "사건",
    "kind": "detail",
    "title": "신흥 강습소를 세워 독립군을 양성하였다.",
    "description": "신흥 강습소를 세워 독립군을 양성하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "76회 심화 Q38 X"
  },
  {
    "id": "76회_q38_796",
    "type": "사건",
    "kind": "detail",
    "title": "구미 위원부를 설치하여 외교 활동을 전개하였다.",
    "description": "구미 위원부를 설치하여 외교 활동을 전개하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "76회 심화 Q38 X"
  },
  {
    "id": "76회_q38_797",
    "type": "사건",
    "kind": "detail",
    "title": "단원인 이봉창이 일왕 행렬에 폭탄을 투척하였다.",
    "description": "단원인 이봉창이 일왕 행렬에 폭탄을 투척하였다.",
    "startYear": 1931,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한인 애국단"
    ],
    "_src": "76회 심화 Q38 X"
  },
  {
    "id": "76회_q38_798",
    "type": "사건",
    "kind": "detail",
    "title": "조선 혁명 선언을 통해 이념과 활동 방침을 밝혔다.",
    "description": "조선 혁명 선언을 통해 이념과 활동 방침을 밝혔다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "76회 심화 Q38 O"
  },
  {
    "id": "76회_q38_799",
    "type": "사건",
    "kind": "detail",
    "title": "조선 총독부에 국권 반환 요구서를 제출하고자 하였다.",
    "description": "조선 총독부에 국권 반환 요구서를 제출하고자 하였다.",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "76회 심화 Q38 X"
  },
  {
    "id": "76회_q39_800",
    "type": "사건",
    "kind": "detail",
    "title": "대한매일신보의 후원을 받아 확산되었다.",
    "description": "대한매일신보의 후원을 받아 확산되었다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "국채 보상 운동"
    ],
    "_src": "76회 심화 Q39 X"
  },
  {
    "id": "76회_q39_801",
    "type": "사건",
    "kind": "detail",
    "title": "순종의 인산일을 기회로 삼아 추진하였다.",
    "description": "순종의 인산일을 기회로 삼아 추진하였다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "76회 심화 Q39 X"
  },
  {
    "id": "76회_q39_802",
    "type": "사건",
    "kind": "detail",
    "title": "자작회 토산 애용 부인회 등이 활동하였다.",
    "description": "자작회 토산 애용 부인회 등이 활동하였다.",
    "startYear": 1920,
    "endYear": 1932,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "물산 장려 운동"
    ],
    "_src": "76회 심화 Q39 O"
  },
  {
    "id": "76회_q39_803",
    "type": "사건",
    "kind": "detail",
    "title": "신간회가 진상 조사단을 파견하여 지원하였다.",
    "description": "신간회가 진상 조사단을 파견하여 지원하였다.",
    "startYear": 1929,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광주학생항일운동"
    ],
    "_src": "76회 심화 Q39 X"
  },
  {
    "id": "76회_q39_804",
    "type": "사건",
    "kind": "detail",
    "title": "강주룡이 을밀대 지붕에서 고공 농성을 벌였다.",
    "description": "강주룡이 을밀대 지붕에서 고공 농성을 벌였다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "76회 심화 Q39 X"
  },
  {
    "id": "76회_q40_805",
    "type": "사건",
    "kind": "detail",
    "title": "개벽 신여성 등의 잡지를 발행하였다.",
    "description": "개벽 신여성 등의 잡지를 발행하였다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "76회 심화 Q40 X"
  },
  {
    "id": "76회_q40_806",
    "type": "사건",
    "kind": "detail",
    "title": "여성 교육을 위해 이화 학당을 설립하였다.",
    "description": "여성 교육을 위해 이화 학당을 설립하였다.",
    "startYear": 1886,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "이화학당"
    ],
    "_src": "76회 심화 Q40 X"
  },
  {
    "id": "76회_q40_807",
    "type": "사건",
    "kind": "detail",
    "title": "좌우를 아우르는 민족 협동 전선으로 결성되었다.",
    "description": "좌우를 아우르는 민족 협동 전선으로 결성되었다.",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "근우회"
    ],
    "_src": "76회 심화 Q40 O"
  },
  {
    "id": "76회_q40_808",
    "type": "사건",
    "kind": "detail",
    "title": "조선학 운동을 전개하여 여유당전서를 간행하였다.",
    "description": "조선학 운동을 전개하여 여유당전서를 간행하였다.",
    "startYear": 1934,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "진단학회"
    ],
    "_src": "76회 심화 Q40 X"
  },
  {
    "id": "76회_q40_809",
    "type": "사건",
    "kind": "detail",
    "title": "최초의 여성 권리 선언문인 여권통문을 발표하였다.",
    "description": "최초의 여성 권리 선언문인 여권통문을 발표하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "76회 심화 Q40 X"
  },
  {
    "id": "76회_q41_810",
    "type": "사건",
    "kind": "detail",
    "title": "한인 자치 기관인 경학사를 조직하였다.",
    "description": "한인 자치 기관인 경학사를 조직하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "76회 심화 Q41 O"
  },
  {
    "id": "76회_q41_811",
    "type": "사건",
    "kind": "detail",
    "title": "자금 마련을 위해 독립 공채를 발행하였다.",
    "description": "자금 마련을 위해 독립 공채를 발행하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "76회 심화 Q41 X"
  },
  {
    "id": "76회_q41_812",
    "type": "사건",
    "kind": "detail",
    "title": "삼균주의를 기초로 하는 건국 강령을 발표하였다.",
    "description": "삼균주의를 기초로 하는 건국 강령을 발표하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "76회 심화 Q41 X"
  },
  {
    "id": "76회_q41_813",
    "type": "사건",
    "kind": "detail",
    "title": "육군 주만 참의부를 편성하여 무장 투쟁을 펼쳤다.",
    "description": "육군 주만 참의부를 편성하여 무장 투쟁을 펼쳤다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "76회 심화 Q41 X"
  },
  {
    "id": "76회_q41_814",
    "type": "사건",
    "kind": "detail",
    "title": "임시 사료 편찬회를 두어 한일 관계 사료집을 간행하였다...",
    "description": "임시 사료 편찬회를 두어 한일 관계 사료집을 간행하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "76회 심화 Q41 X"
  },
  {
    "id": "76회_q42_815",
    "type": "사건",
    "kind": "detail",
    "title": "미쓰야 협정이 체결되었다.",
    "description": "미쓰야 협정이 체결되었다.",
    "startYear": 1925,
    "endYear": 1925,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "미쓰야 협정"
    ],
    "_src": "76회 심화 Q42 X"
  },
  {
    "id": "76회_q42_816",
    "type": "사건",
    "kind": "detail",
    "title": "치안 유지법이 제정되었다.",
    "description": "치안 유지법이 제정되었다.",
    "startYear": 1925,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "치안유지법"
    ],
    "_src": "76회 심화 Q42 X"
  },
  {
    "id": "76회_q42_817",
    "type": "사건",
    "kind": "detail",
    "title": "조선사 편수회가 조직되었다.",
    "description": "조선사 편수회가 조직되었다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "76회 심화 Q42 X"
  },
  {
    "id": "76회_q42_818",
    "type": "사건",
    "kind": "detail",
    "title": "여자 정신 근로령이 공표되었다.",
    "description": "여자 정신 근로령이 공표되었다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "76회 심화 Q42 O"
  },
  {
    "id": "76회_q42_819",
    "type": "사건",
    "kind": "detail",
    "title": "동양 척식 주식회사가 설립되었다.",
    "description": "동양 척식 주식회사가 설립되었다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "76회 심화 Q42 X"
  },
  {
    "id": "76회_q43_820",
    "type": "사건",
    "kind": "detail",
    "title": "몸뻬 전시 체제의 의생활",
    "description": "몸뻬 전시 체제의 의생활",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "76회 심화 Q43 X"
  },
  {
    "id": "76회_q43_821",
    "type": "사건",
    "kind": "detail",
    "title": "라디오 방송 연예 오락의 유행",
    "description": "라디오 방송 연예 오락의 유행",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "76회 심화 Q43 X"
  },
  {
    "id": "76회_q43_822",
    "type": "사건",
    "kind": "detail",
    "title": "경평 축구 대회 스포츠의 대중화",
    "description": "경평 축구 대회 스포츠의 대중화",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "76회 심화 Q43 X"
  },
  {
    "id": "76회_q43_823",
    "type": "사건",
    "kind": "detail",
    "title": "새마을 운동 농촌의 생활 환경 개선",
    "description": "새마을 운동 농촌의 생활 환경 개선",
    "startYear": 1970,
    "endYear": 1985,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "새마을 운동"
    ],
    "_src": "76회 심화 Q43 O"
  },
  {
    "id": "76회_q43_824",
    "type": "사건",
    "kind": "detail",
    "title": "모던 걸 전통적 여성상을 탈피한 신여성의 등장",
    "description": "모던 걸 전통적 여성상을 탈피한 신여성의 등장",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "76회 심화 Q43 X"
  },
  {
    "id": "76회_q44_825",
    "type": "사건",
    "kind": "detail",
    "title": "신한공사를 설립하였다.",
    "description": "신한공사를 설립하였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "신한 공사"
    ],
    "_src": "76회 심화 Q44 X"
  },
  {
    "id": "76회_q44_826",
    "type": "사건",
    "kind": "detail",
    "title": "좌우 합작 7원칙을 제시하였다.",
    "description": "좌우 합작 7원칙을 제시하였다.",
    "startYear": 1886,
    "endYear": 1947,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "여운형"
    ],
    "_src": "76회 심화 Q44 X"
  },
  {
    "id": "76회_q44_827",
    "type": "사건",
    "kind": "detail",
    "title": "한인 국방 경위대를 창설하였다.",
    "description": "한인 국방 경위대를 창설하였다.",
    "startYear": 1914,
    "endYear": 1917,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대조선 국민 군단"
    ],
    "_src": "76회 심화 Q44 X"
  },
  {
    "id": "76회_q44_828",
    "type": "사건",
    "kind": "detail",
    "title": "남북 협상 공동 성명서를 발표하였다.",
    "description": "남북 협상 공동 성명서를 발표하였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "76회 심화 Q44 X"
  },
  {
    "id": "76회_q44_829",
    "type": "사건",
    "kind": "detail",
    "title": "조선 인민 공화국 수립이 선포된 후 해산하였다.",
    "description": "조선 인민 공화국 수립이 선포된 후 해산하였다.",
    "startYear": 1886,
    "endYear": 1947,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "여운형"
    ],
    "_src": "76회 심화 Q44 O"
  },
  {
    "id": "76회_q45_830",
    "type": "사건",
    "kind": "detail",
    "title": "향토 예비군 창설의 계기가 되었다.",
    "description": "향토 예비군 창설의 계기가 되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "76회 심화 Q45 X"
  },
  {
    "id": "76회_q45_831",
    "type": "사건",
    "kind": "detail",
    "title": "조봉암이 간첩 혐의를 받아 사형되었다.",
    "description": "조봉암이 간첩 혐의를 받아 사형되었다.",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "76회 심화 Q45 X"
  },
  {
    "id": "76회_q45_832",
    "type": "사건",
    "kind": "detail",
    "title": "유엔군이 한반도에 파병되는 원인이 되었다.",
    "description": "유엔군이 한반도에 파병되는 원인이 되었다.",
    "startYear": 1950,
    "endYear": 1953,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6·25 전쟁"
    ],
    "_src": "76회 심화 Q45 X"
  },
  {
    "id": "76회_q45_833",
    "type": "사건",
    "kind": "detail",
    "title": "허정 과도 정부가 구성되는 결과를 가져왔다.",
    "description": "허정 과도 정부가 구성되는 결과를 가져왔다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "76회 심화 Q45 X"
  },
  {
    "id": "76회_q45_834",
    "type": "사건",
    "kind": "detail",
    "title": "진상 규명과 희생자 명예 회복을 위한 특별법이 제정되었...",
    "description": "진상 규명과 희생자 명예 회복을 위한 특별법이 제정되었다.",
    "startYear": 1948,
    "endYear": 1949,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "제주 4·3 사건"
    ],
    "_src": "76회 심화 Q45 O"
  },
  {
    "id": "76회_q46_835",
    "type": "사건",
    "kind": "detail",
    "title": "오페르트 도굴 미수 사건에 대해 찾아본다.",
    "description": "오페르트 도굴 미수 사건에 대해 찾아본다.",
    "startYear": 1868,
    "endYear": 1868,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "오페르트 사건"
    ],
    "_src": "76회 심화 Q46 X"
  },
  {
    "id": "76회_q46_836",
    "type": "사건",
    "kind": "detail",
    "title": "한인 애국단의 활동을 조사한다.",
    "description": "한인 애국단의 활동을 조사한다.",
    "startYear": 1931,
    "endYear": 1935,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "한인 애국단"
    ],
    "_src": "76회 심화 Q46 X"
  },
  {
    "id": "76회_q46_837",
    "type": "사건",
    "kind": "detail",
    "title": "고려 시대 건축물의 공포 양식을 알아본다.",
    "description": "고려 시대 건축물의 공포 양식을 알아본다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "76회 심화 Q46 X"
  },
  {
    "id": "76회_q46_838",
    "type": "사건",
    "kind": "detail",
    "title": "백제 부흥 운동에 대해 파악한다.",
    "description": "백제 부흥 운동에 대해 파악한다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "76회 심화 Q46 X"
  },
  {
    "id": "76회_q46_839",
    "type": "사건",
    "kind": "detail",
    "title": "이황과 사단칠정 논쟁을 한 인물을 검색한다.",
    "description": "이황과 사단칠정 논쟁을 한 인물을 검색한다.",
    "startYear": 1501,
    "endYear": 1570,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "이황"
    ],
    "_src": "76회 심화 Q46 O"
  },
  {
    "id": "76회_q48_840",
    "type": "사건",
    "kind": "detail",
    "title": "서울 지하철 1호선 개통식을 취재하는 기자",
    "description": "서울 지하철 1호선 개통식을 취재하는 기자",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "76회 심화 Q48 O"
  },
  {
    "id": "76회_q48_841",
    "type": "사건",
    "kind": "detail",
    "title": "반민족 행위 처벌법을 통과시키는 국회의원",
    "description": "반민족 행위 처벌법을 통과시키는 국회의원",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "76회 심화 Q48 X"
  },
  {
    "id": "76회_q48_842",
    "type": "사건",
    "kind": "detail",
    "title": "한·중 자유 무역 협정(FTA)에 서명하는 장관",
    "description": "한·중 자유 무역 협정(FTA)에 서명하는 장관",
    "startYear": 2013,
    "endYear": 2017,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박근혜 정부"
    ],
    "_src": "76회 심화 Q48 X"
  },
  {
    "id": "76회_q48_843",
    "type": "사건",
    "kind": "detail",
    "title": "금융실명제 실시로 신분증을 요구하는 은행 직원",
    "description": "금융실명제 실시로 신분증을 요구하는 은행 직원",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "76회 심화 Q48 X"
  },
  {
    "id": "76회_q48_844",
    "type": "사건",
    "kind": "detail",
    "title": "외환 위기 극복을 위한 금 모으기 운동에 동참하는 시민",
    "description": "외환 위기 극복을 위한 금 모으기 운동에 동참하는 시민",
    "startYear": 1998,
    "endYear": 2003,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김대중 정부"
    ],
    "_src": "76회 심화 Q48 X"
  },
  {
    "id": "76회_q49_845",
    "type": "사건",
    "kind": "detail",
    "title": "남북 조절위원회가 구성되었다.",
    "description": "남북 조절위원회가 구성되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "76회 심화 Q49 X"
  },
  {
    "id": "76회_q49_846",
    "type": "사건",
    "kind": "detail",
    "title": "남북한이 유엔에 동시 가입하였다.",
    "description": "남북한이 유엔에 동시 가입하였다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "76회 심화 Q49 O"
  },
  {
    "id": "76회_q49_847",
    "type": "사건",
    "kind": "detail",
    "title": "금강산 해로 관광 사업이 시작되었다.",
    "description": "금강산 해로 관광 사업이 시작되었다.",
    "startYear": 1998,
    "endYear": 2003,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김대중 정부"
    ],
    "_src": "76회 심화 Q49 X"
  },
  {
    "id": "76회_q49_848",
    "type": "사건",
    "kind": "detail",
    "title": "개성에 남북 경제 협력 협의 사무소가 설치되었다.",
    "description": "개성에 남북 경제 협력 협의 사무소가 설치되었다.",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "76회 심화 Q49 X"
  },
  {
    "id": "76회_q49_849",
    "type": "사건",
    "kind": "detail",
    "title": "최초로 남북 이산가족 고향 방문단 교환이 이루어졌다.",
    "description": "최초로 남북 이산가족 고향 방문단 교환이 이루어졌다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "76회 심화 Q49 X"
  },
  {
    "id": "76회_q50_850",
    "type": "사건",
    "kind": "detail",
    "title": "군대를 보내 신라에 침입한 왜를 격퇴하였다.",
    "description": "군대를 보내 신라에 침입한 왜를 격퇴하였다.",
    "startYear": 391,
    "endYear": 413,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "광개토대왕"
    ],
    "_src": "76회 심화 Q50 X"
  },
  {
    "id": "76회_q50_851",
    "type": "사건",
    "kind": "detail",
    "title": "금관가야를 복속하여 영토를 확대하였다.",
    "description": "금관가야를 복속하여 영토를 확대하였다.",
    "startYear": 514,
    "endYear": 540,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 법흥왕"
    ],
    "_src": "76회 심화 Q50 X"
  },
  {
    "id": "76회_q50_852",
    "type": "사건",
    "kind": "detail",
    "title": "장문휴를 보내 당의 산둥반도를 공격하였다.",
    "description": "장문휴를 보내 당의 산둥반도를 공격하였다.",
    "startYear": 719,
    "endYear": 737,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "발해 무왕"
    ],
    "_src": "76회 심화 Q50 X"
  },
  {
    "id": "76회_q50_853",
    "type": "사건",
    "kind": "detail",
    "title": "노비안검법을 시행하여 호족 세력을 견제하였다.",
    "description": "노비안검법을 시행하여 호족 세력을 견제하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "76회 심화 Q50 X"
  },
  {
    "id": "76회_q50_854",
    "type": "사건",
    "kind": "detail",
    "title": "전제 군주제를 명문화한 대한국 국제를 반포하였다.",
    "description": "전제 군주제를 명문화한 대한국 국제를 반포하였다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "76회 심화 Q50 O"
  },
  {
    "id": "75회_q1_855",
    "type": "사건",
    "kind": "detail",
    "title": "주먹도끼 등 뗀석기를 처음 제작하였다.",
    "description": "주먹도끼 등 뗀석기를 처음 제작하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "75회 심화 Q1 X"
  },
  {
    "id": "75회_q1_856",
    "type": "사건",
    "kind": "detail",
    "title": "소를 이용한 깊이갈이가 널리 보급되었다.",
    "description": "소를 이용한 깊이갈이가 널리 보급되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "75회 심화 Q1 X"
  },
  {
    "id": "75회_q1_857",
    "type": "사건",
    "kind": "detail",
    "title": "주로 강가의 동굴이나 막집에 거주하였다.",
    "description": "주로 강가의 동굴이나 막집에 거주하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "75회 심화 Q1 X"
  },
  {
    "id": "75회_q1_858",
    "type": "사건",
    "kind": "detail",
    "title": "많은 인력을 동원하여 고인돌을 축조하였다.",
    "description": "많은 인력을 동원하여 고인돌을 축조하였다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "75회 심화 Q1 O"
  },
  {
    "id": "75회_q1_859",
    "type": "사건",
    "kind": "detail",
    "title": "가락바퀴를 이용하여 실을 뽑기 시작하였다.",
    "description": "가락바퀴를 이용하여 실을 뽑기 시작하였다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "75회 심화 Q1 X"
  },
  {
    "id": "75회_q2_860",
    "type": "사건",
    "kind": "detail",
    "title": "위만이 왕위를 찬탈하였다.",
    "description": "위만이 왕위를 찬탈하였다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "75회 심화 Q2 O"
  },
  {
    "id": "75회_q2_861",
    "type": "사건",
    "kind": "detail",
    "title": "이사부가 우산국을 복속시켰다.",
    "description": "이사부가 우산국을 복속시켰다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "75회 심화 Q2 X"
  },
  {
    "id": "75회_q2_862",
    "type": "사건",
    "kind": "detail",
    "title": "온조가 위례성에 도읍을 정하였다.",
    "description": "온조가 위례성에 도읍을 정하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "75회 심화 Q2 X"
  },
  {
    "id": "75회_q2_863",
    "type": "사건",
    "kind": "detail",
    "title": "관구검이 환도성을 침략하여 함락하였다.",
    "description": "관구검이 환도성을 침략하여 함락하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "75회 심화 Q2 X"
  },
  {
    "id": "75회_q2_864",
    "type": "사건",
    "kind": "detail",
    "title": "미천왕이 서안평을 공격하여 영토를 넓혔다.",
    "description": "미천왕이 서안평을 공격하여 영토를 넓혔다.",
    "startYear": 300,
    "endYear": 331,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려 미천왕"
    ],
    "_src": "75회 심화 Q2 X"
  },
  {
    "id": "75회_q4_865",
    "type": "사건",
    "kind": "detail",
    "title": "신라 진흥왕에 의해 복속되었다.",
    "description": "신라 진흥왕에 의해 복속되었다.",
    "startYear": 42,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "가야"
    ],
    "_src": "75회 심화 Q4 O"
  },
  {
    "id": "75회_q4_866",
    "type": "사건",
    "kind": "detail",
    "title": "광평성 등의 정치 기구를 마련하였다.",
    "description": "광평성 등의 정치 기구를 마련하였다.",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "75회 심화 Q4 X"
  },
  {
    "id": "75회_q4_867",
    "type": "사건",
    "kind": "detail",
    "title": "화백 회의를 통해 국정을 운영하였다.",
    "description": "화백 회의를 통해 국정을 운영하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "75회 심화 Q4 X"
  },
  {
    "id": "75회_q4_868",
    "type": "사건",
    "kind": "detail",
    "title": "대가들이 사자 조의 선인을 거느렸다.",
    "description": "대가들이 사자 조의 선인을 거느렸다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "75회 심화 Q4 X"
  },
  {
    "id": "75회_q4_869",
    "type": "사건",
    "kind": "detail",
    "title": "박 석 김의 3성이 교대로 왕위를 계승하였다.",
    "description": "박 석 김의 3성이 교대로 왕위를 계승하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "75회 심화 Q4 X"
  },
  {
    "id": "75회_q5_870",
    "type": "사건",
    "kind": "detail",
    "title": "수도에 동시전이 설치되었다.",
    "description": "수도에 동시전이 설치되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "75회 심화 Q5 X"
  },
  {
    "id": "75회_q5_871",
    "type": "사건",
    "kind": "detail",
    "title": "집집마다 부경이라는 창고가 있었다.",
    "description": "집집마다 부경이라는 창고가 있었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "75회 심화 Q5 O"
  },
  {
    "id": "75회_q5_872",
    "type": "사건",
    "kind": "detail",
    "title": "금속 화폐인 건원중보가 주조되었다.",
    "description": "금속 화폐인 건원중보가 주조되었다.",
    "startYear": 996,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 화폐"
    ],
    "_src": "75회 심화 Q5 X"
  },
  {
    "id": "75회_q5_873",
    "type": "사건",
    "kind": "detail",
    "title": "솔빈부의 말이 특산품으로 수출되었다.",
    "description": "솔빈부의 말이 특산품으로 수출되었다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "75회 심화 Q5 X"
  },
  {
    "id": "75회_q5_874",
    "type": "사건",
    "kind": "detail",
    "title": "곡물을 대여하고 이자를 받은 내용을 좌관대식기에 남겼다...",
    "description": "곡물을 대여하고 이자를 받은 내용을 좌관대식기에 남겼다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "75회 심화 Q5 X"
  },
  {
    "id": "75회_q6_875",
    "type": "사건",
    "kind": "detail",
    "title": "김흠돌의 난이 진압되었어요.",
    "description": "김흠돌의 난이 진압되었어요.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "75회 심화 Q6 X"
  },
  {
    "id": "75회_q6_876",
    "type": "사건",
    "kind": "detail",
    "title": "만적이 개경에서 봉기를 도모하였어요.",
    "description": "만적이 개경에서 봉기를 도모하였어요.",
    "startYear": 1198,
    "endYear": 1198,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "만적의 난"
    ],
    "_src": "75회 심화 Q6 X"
  },
  {
    "id": "75회_q6_877",
    "type": "사건",
    "kind": "detail",
    "title": "관료전이 지급되고 녹읍이 폐지되었어요.",
    "description": "관료전이 지급되고 녹읍이 폐지되었어요.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "75회 심화 Q6 X"
  },
  {
    "id": "75회_q6_878",
    "type": "사건",
    "kind": "detail",
    "title": "김헌창이 웅천주에서 반란을 일으켰어요.",
    "description": "김헌창이 웅천주에서 반란을 일으켰어요.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "75회 심화 Q6 O"
  },
  {
    "id": "75회_q6_879",
    "type": "사건",
    "kind": "detail",
    "title": "이차돈의 순교를 계기로 불교가 공인되었어요.",
    "description": "이차돈의 순교를 계기로 불교가 공인되었어요.",
    "startYear": 514,
    "endYear": 540,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 법흥왕"
    ],
    "_src": "75회 심화 Q6 X"
  },
  {
    "id": "75회_q7_880",
    "type": "사건",
    "kind": "detail",
    "title": "을지문덕이 살수에서 대승을 거두었다.",
    "description": "을지문덕이 살수에서 대승을 거두었다.",
    "startYear": 612,
    "endYear": 612,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "살수대첩"
    ],
    "_src": "75회 심화 Q7 X"
  },
  {
    "id": "75회_q7_881",
    "type": "사건",
    "kind": "detail",
    "title": "고구려가 신라에 침입한 왜를 물리쳤다.",
    "description": "고구려가 신라에 침입한 왜를 물리쳤다.",
    "startYear": 391,
    "endYear": 413,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "광개토대왕"
    ],
    "_src": "75회 심화 Q7 X"
  },
  {
    "id": "75회_q7_882",
    "type": "사건",
    "kind": "detail",
    "title": "김무력이 관산성에서 백제군을 격파하였다.",
    "description": "김무력이 관산성에서 백제군을 격파하였다.",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 성왕"
    ],
    "_src": "75회 심화 Q7 X"
  },
  {
    "id": "75회_q7_883",
    "type": "사건",
    "kind": "detail",
    "title": "연개소문이 정변을 일으켜 권력을 장악하였다.",
    "description": "연개소문이 정변을 일으켜 권력을 장악하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "75회 심화 Q7 O"
  },
  {
    "id": "75회_q7_884",
    "type": "사건",
    "kind": "detail",
    "title": "백제가 평양성을 공격하여 고구려 왕이 전사하였다.",
    "description": "백제가 평양성을 공격하여 고구려 왕이 전사하였다.",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 근초고왕"
    ],
    "_src": "75회 심화 Q7 X"
  },
  {
    "id": "75회_q8_885",
    "type": "사건",
    "kind": "detail",
    "title": "골품에 따라 관등 승진을 제한하였다.",
    "description": "골품에 따라 관등 승진을 제한하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "75회 심화 Q8 X"
  },
  {
    "id": "75회_q8_886",
    "type": "사건",
    "kind": "detail",
    "title": "주자감을 설치하여 인재를 양성하였다.",
    "description": "주자감을 설치하여 인재를 양성하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "75회 심화 Q8 O"
  },
  {
    "id": "75회_q8_887",
    "type": "사건",
    "kind": "detail",
    "title": "내신좌평 등 6좌평의 관제를 정비하였다.",
    "description": "내신좌평 등 6좌평의 관제를 정비하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "75회 심화 Q8 X"
  },
  {
    "id": "75회_q8_888",
    "type": "사건",
    "kind": "detail",
    "title": "국경 지역인 양계에 병마사를 파견하였다.",
    "description": "국경 지역인 양계에 병마사를 파견하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "75회 심화 Q8 X"
  },
  {
    "id": "75회_q8_889",
    "type": "사건",
    "kind": "detail",
    "title": "상수리 제도를 통해 지방 세력을 견제하였다.",
    "description": "상수리 제도를 통해 지방 세력을 견제하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "75회 심화 Q8 X"
  },
  {
    "id": "75회_q9_890",
    "type": "사건",
    "kind": "detail",
    "title": "정약전이 자산어보를 저술한 곳을 알아본다.",
    "description": "정약전이 자산어보를 저술한 곳을 알아본다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q9 X"
  },
  {
    "id": "75회_q9_891",
    "type": "사건",
    "kind": "detail",
    "title": "비담과 염종이 반란을 일으킨 곳을 찾아본다.",
    "description": "비담과 염종이 반란을 일으킨 곳을 찾아본다.",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 선덕여왕"
    ],
    "_src": "75회 심화 Q9 X"
  },
  {
    "id": "75회_q9_892",
    "type": "사건",
    "kind": "detail",
    "title": "성왕이 새로운 도읍지로 정한 곳을 검색한다.",
    "description": "성왕이 새로운 도읍지로 정한 곳을 검색한다.",
    "startYear": 538,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 사비기"
    ],
    "_src": "75회 심화 Q9 O"
  },
  {
    "id": "75회_q9_893",
    "type": "사건",
    "kind": "detail",
    "title": "윤충이 의자왕의 명을 받아 함락시킨 곳을 확인한다.",
    "description": "윤충이 의자왕의 명을 받아 함락시킨 곳을 확인한다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "75회 심화 Q9 X"
  },
  {
    "id": "75회_q9_894",
    "type": "사건",
    "kind": "detail",
    "title": "신립이 배수의 진을 치고 왜군과 맞선 곳을 답사한다.",
    "description": "신립이 배수의 진을 치고 왜군과 맞선 곳을 답사한다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "75회 심화 Q9 X"
  },
  {
    "id": "75회_q10_895",
    "type": "사건",
    "kind": "detail",
    "title": "신숭겸이 공산 전투에서 전사하였다.",
    "description": "신숭겸이 공산 전투에서 전사하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "75회 심화 Q10 O"
  },
  {
    "id": "75회_q10_896",
    "type": "사건",
    "kind": "detail",
    "title": "안승이 보덕국의 왕으로 책봉되었다.",
    "description": "안승이 보덕국의 왕으로 책봉되었다.",
    "startYear": 661,
    "endYear": 681,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 문무왕"
    ],
    "_src": "75회 심화 Q10 X"
  },
  {
    "id": "75회_q10_897",
    "type": "사건",
    "kind": "detail",
    "title": "흑치상지가 임존성에서 군사를 일으켰다.",
    "description": "흑치상지가 임존성에서 군사를 일으켰다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "75회 심화 Q10 X"
  },
  {
    "id": "75회_q10_898",
    "type": "사건",
    "kind": "detail",
    "title": "최치원이 왕에게 시무 10여 조를 건의하였다.",
    "description": "최치원이 왕에게 시무 10여 조를 건의하였다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "75회 심화 Q10 X"
  },
  {
    "id": "75회_q10_899",
    "type": "사건",
    "kind": "detail",
    "title": "왕건이 일리천 전투에서 신검에게 승리하였다.",
    "description": "왕건이 일리천 전투에서 신검에게 승리하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "75회 심화 Q10 X"
  },
  {
    "id": "75회_q11_900",
    "type": "사건",
    "kind": "detail",
    "title": "광덕 준풍 등의 독자적 연호를 사용하였다.",
    "description": "광덕 준풍 등의 독자적 연호를 사용하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "75회 심화 Q11 X"
  },
  {
    "id": "75회_q11_901",
    "type": "사건",
    "kind": "detail",
    "title": "신돈을 중심으로 전민변정 사업을 추진하였다.",
    "description": "신돈을 중심으로 전민변정 사업을 추진하였다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "75회 심화 Q11 X"
  },
  {
    "id": "75회_q11_902",
    "type": "사건",
    "kind": "detail",
    "title": "청연각과 보문각을 두어 학문 연구를 장려하였다.",
    "description": "청연각과 보문각을 두어 학문 연구를 장려하였다.",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 예종"
    ],
    "_src": "75회 심화 Q11 X"
  },
  {
    "id": "75회_q11_903",
    "type": "사건",
    "kind": "detail",
    "title": "정계와 계백료서를 지어 관리의 규범을 제시하였다.",
    "description": "정계와 계백료서를 지어 관리의 규범을 제시하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "75회 심화 Q11 X"
  },
  {
    "id": "75회_q11_904",
    "type": "사건",
    "kind": "detail",
    "title": "최승로의 시무 28조를 받아들여 통치 체제를 정비하였다...",
    "description": "최승로의 시무 28조를 받아들여 통치 체제를 정비하였다.",
    "startYear": 981,
    "endYear": 997,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 성종"
    ],
    "_src": "75회 심화 Q11 O"
  },
  {
    "id": "75회_q12_905",
    "type": "사건",
    "kind": "detail",
    "title": "윤관을 보내 동북 9성을 개척하였다.",
    "description": "윤관을 보내 동북 9성을 개척하였다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "75회 심화 Q12 X"
  },
  {
    "id": "75회_q12_906",
    "type": "사건",
    "kind": "detail",
    "title": "상비군으로 구성된 훈련도감을 설치하였다.",
    "description": "상비군으로 구성된 훈련도감을 설치하였다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "75회 심화 Q12 X"
  },
  {
    "id": "75회_q12_907",
    "type": "사건",
    "kind": "detail",
    "title": "박위로 하여금 쓰시마섬을 정벌하게 하였다.",
    "description": "박위로 하여금 쓰시마섬을 정벌하게 하였다.",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "화통도감"
    ],
    "_src": "75회 심화 Q12 X"
  },
  {
    "id": "75회_q12_908",
    "type": "사건",
    "kind": "detail",
    "title": "서희를 파견하여 소손녕과 외교 담판을 벌였다.",
    "description": "서희를 파견하여 소손녕과 외교 담판을 벌였다.",
    "startYear": 993,
    "endYear": 994,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "거란 1차 침입"
    ],
    "_src": "75회 심화 Q12 X"
  },
  {
    "id": "75회_q12_909",
    "type": "사건",
    "kind": "detail",
    "title": "대장도감을 설치하여 팔만대장경을 간행하였다.",
    "description": "대장도감을 설치하여 팔만대장경을 간행하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "75회 심화 Q12 O"
  },
  {
    "id": "75회_q13_910",
    "type": "사건",
    "kind": "detail",
    "title": "불씨잡변을 지어 불교를 비판하였습니다.",
    "description": "불씨잡변을 지어 불교를 비판하였습니다.",
    "startYear": 1342,
    "endYear": 1398,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정도전"
    ],
    "_src": "75회 심화 Q13 X"
  },
  {
    "id": "75회_q13_911",
    "type": "사건",
    "kind": "detail",
    "title": "만권당에서 원의 학자들과 교유하였습니다.",
    "description": "만권당에서 원의 학자들과 교유하였습니다.",
    "startYear": 1308,
    "endYear": 1313,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충선왕"
    ],
    "_src": "75회 심화 Q13 X"
  },
  {
    "id": "75회_q13_912",
    "type": "사건",
    "kind": "detail",
    "title": "지공거 출신으로 9재 학당을 설립하였습니다.",
    "description": "지공거 출신으로 9재 학당을 설립하였습니다.",
    "startYear": 984,
    "endYear": 1068,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충"
    ],
    "_src": "75회 심화 Q13 O"
  },
  {
    "id": "75회_q13_913",
    "type": "사건",
    "kind": "detail",
    "title": "입학도설을 저술하여 성리학의 기본 원리를 해설하였습니다...",
    "description": "입학도설을 저술하여 성리학의 기본 원리를 해설하였습니다.",
    "startYear": 1374,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 우왕"
    ],
    "_src": "75회 심화 Q13 X"
  },
  {
    "id": "75회_q13_914",
    "type": "사건",
    "kind": "detail",
    "title": "성균관의 대사성이 되어 정몽주 등을 학관으로 천거하였습...",
    "description": "성균관의 대사성이 되어 정몽주 등을 학관으로 천거하였습니다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "75회 심화 Q13 X"
  },
  {
    "id": "75회_q15_915",
    "type": "사건",
    "kind": "detail",
    "title": "김사미가 운문을 거점으로 봉기하였어요.",
    "description": "김사미가 운문을 거점으로 봉기하였어요.",
    "startYear": 1193,
    "endYear": 1194,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "김사미·효심의 난"
    ],
    "_src": "75회 심화 Q15 X"
  },
  {
    "id": "75회_q15_916",
    "type": "사건",
    "kind": "detail",
    "title": "강감찬이 흥화진 전투에서 승리하였어요.",
    "description": "강감찬이 흥화진 전투에서 승리하였어요.",
    "startYear": 1010,
    "endYear": 1011,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "거란 2차 침입"
    ],
    "_src": "75회 심화 Q15 X"
  },
  {
    "id": "75회_q15_917",
    "type": "사건",
    "kind": "detail",
    "title": "후주 출신 쌍기가 과거제 도입을 건의하였어요.",
    "description": "후주 출신 쌍기가 과거제 도입을 건의하였어요.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "75회 심화 Q15 X"
  },
  {
    "id": "75회_q15_918",
    "type": "사건",
    "kind": "detail",
    "title": "최충헌이 교정도감을 두어 국정을 총괄하였어요.",
    "description": "최충헌이 교정도감을 두어 국정을 총괄하였어요.",
    "startYear": 1149,
    "endYear": 1219,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충헌"
    ],
    "_src": "75회 심화 Q15 X"
  },
  {
    "id": "75회_q15_919",
    "type": "사건",
    "kind": "detail",
    "title": "이성계가 위화도에서 회군하여 정권을 장악하였어요.",
    "description": "이성계가 위화도에서 회군하여 정권을 장악하였어요.",
    "startYear": 1388,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "위화도 회군"
    ],
    "_src": "75회 심화 Q15 O"
  },
  {
    "id": "75회_q16_920",
    "type": "사건",
    "kind": "detail",
    "title": "청해진을 설치하여 해상 무역을 전개하였다.",
    "description": "청해진을 설치하여 해상 무역을 전개하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "75회 심화 Q16 X"
  },
  {
    "id": "75회_q16_921",
    "type": "사건",
    "kind": "detail",
    "title": "재정 문제를 해결하기 위한 당백전이 발행되었다.",
    "description": "재정 문제를 해결하기 위한 당백전이 발행되었다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "75회 심화 Q16 X"
  },
  {
    "id": "75회_q16_922",
    "type": "사건",
    "kind": "detail",
    "title": "계해약조가 체결되어 세견선의 입항이 허가되었다.",
    "description": "계해약조가 체결되어 세견선의 입항이 허가되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "75회 심화 Q16 X"
  },
  {
    "id": "75회_q16_923",
    "type": "사건",
    "kind": "detail",
    "title": "육의전을 제외한 시전 상인의 금난전권이 폐지되었다.",
    "description": "육의전을 제외한 시전 상인의 금난전권이 폐지되었다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "75회 심화 Q16 X"
  },
  {
    "id": "75회_q16_924",
    "type": "사건",
    "kind": "detail",
    "title": "예성강 하구의 벽란도가 국제 무역항으로 번성하였다.",
    "description": "예성강 하구의 벽란도가 국제 무역항으로 번성하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "75회 심화 Q16 O"
  },
  {
    "id": "75회_q17_925",
    "type": "사건",
    "kind": "detail",
    "title": "의약학의 발전과 향약집성방의 편찬",
    "description": "의약학의 발전과 향약집성방의 편찬",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "75회 심화 Q17 X"
  },
  {
    "id": "75회_q17_926",
    "type": "사건",
    "kind": "detail",
    "title": "100리 척의 사용과 동국지도의 제작",
    "description": "100리 척의 사용과 동국지도의 제작",
    "startYear": 1678,
    "endYear": 1752,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "정상기"
    ],
    "_src": "75회 심화 Q17 X"
  },
  {
    "id": "75회_q17_927",
    "type": "사건",
    "kind": "detail",
    "title": "기하학적 원리와 경주 석굴암의 조성",
    "description": "기하학적 원리와 경주 석굴암의 조성",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "75회 심화 Q17 X"
  },
  {
    "id": "75회_q17_928",
    "type": "사건",
    "kind": "detail",
    "title": "금속활자 기술과 직지심체요절의 간행",
    "description": "금속활자 기술과 직지심체요절의 간행",
    "startYear": 1377,
    "endYear": 1377,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "직지심체요절"
    ],
    "_src": "75회 심화 Q17 O"
  },
  {
    "id": "75회_q17_929",
    "type": "사건",
    "kind": "detail",
    "title": "농업 기술의 발달과 임원경제지의 저술",
    "description": "농업 기술의 발달과 임원경제지의 저술",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q17 X"
  },
  {
    "id": "75회_q19_930",
    "type": "사건",
    "kind": "detail",
    "title": "제1차 왕자의 난이 일어난 이유를 찾아본다.",
    "description": "제1차 왕자의 난이 일어난 이유를 찾아본다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "75회 심화 Q19 O"
  },
  {
    "id": "75회_q19_931",
    "type": "사건",
    "kind": "detail",
    "title": "수양대군이 정권을 장악하는 과정을 조사한다.",
    "description": "수양대군이 정권을 장악하는 과정을 조사한다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "75회 심화 Q19 X"
  },
  {
    "id": "75회_q19_932",
    "type": "사건",
    "kind": "detail",
    "title": "사림이 동인과 서인으로 나뉘게 된 계기를 파악한다.",
    "description": "사림이 동인과 서인으로 나뉘게 된 계기를 파악한다.",
    "startYear": 1567,
    "endYear": 1608,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 선조"
    ],
    "_src": "75회 심화 Q19 X"
  },
  {
    "id": "75회_q19_933",
    "type": "사건",
    "kind": "detail",
    "title": "폐모살제 등을 구실로 반정을 일으킨 세력을 검색한다.",
    "description": "폐모살제 등을 구실로 반정을 일으킨 세력을 검색한다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "75회 심화 Q19 X"
  },
  {
    "id": "75회_q19_934",
    "type": "사건",
    "kind": "detail",
    "title": "허적과 윤휴 등 남인이 대거 축출되는 사건을 알아본다.",
    "description": "허적과 윤휴 등 남인이 대거 축출되는 사건을 알아본다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "75회 심화 Q19 X"
  },
  {
    "id": "75회_q20_935",
    "type": "사건",
    "kind": "detail",
    "title": "수도의 행정과 치안을 담당하였다.",
    "description": "수도의 행정과 치안을 담당하였다.",
    "startYear": 1394,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "한성부"
    ],
    "_src": "75회 심화 Q20 X"
  },
  {
    "id": "75회_q20_936",
    "type": "사건",
    "kind": "detail",
    "title": "을묘왜변을 계기로 상설 기구화되었다.",
    "description": "을묘왜변을 계기로 상설 기구화되었다.",
    "startYear": 1517,
    "endYear": 1865,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "비변사"
    ],
    "_src": "75회 심화 Q20 X"
  },
  {
    "id": "75회_q20_937",
    "type": "사건",
    "kind": "detail",
    "title": "서얼 출신 학자들이 검서관에 등용되었다.",
    "description": "서얼 출신 학자들이 검서관에 등용되었다.",
    "startYear": 1776,
    "endYear": 1910,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "규장각"
    ],
    "_src": "75회 심화 Q20 X"
  },
  {
    "id": "75회_q20_938",
    "type": "사건",
    "kind": "detail",
    "title": "역사서를 편찬하고 사고에 보관하는 일을 맡았다.",
    "description": "역사서를 편찬하고 사고에 보관하는 일을 맡았다.",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "춘추관"
    ],
    "_src": "75회 심화 Q20 X"
  },
  {
    "id": "75회_q20_939",
    "type": "사건",
    "kind": "detail",
    "title": "대사헌을 수장으로 집의 장령 등의 관직을 두었다.",
    "description": "대사헌을 수장으로 집의 장령 등의 관직을 두었다.",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "사헌부"
    ],
    "_src": "75회 심화 Q20 O"
  },
  {
    "id": "75회_q21_940",
    "type": "사건",
    "kind": "detail",
    "title": "사신 접대를 위해 한성에 동평관을 두었다.",
    "description": "사신 접대를 위해 한성에 동평관을 두었다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "75회 심화 Q21 X"
  },
  {
    "id": "75회_q21_941",
    "type": "사건",
    "kind": "detail",
    "title": "두만강 일대를 개척하여 6진을 설치하였다.",
    "description": "두만강 일대를 개척하여 6진을 설치하였다.",
    "startYear": 1433,
    "endYear": 1449,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "4군 6진"
    ],
    "_src": "75회 심화 Q21 O"
  },
  {
    "id": "75회_q21_942",
    "type": "사건",
    "kind": "detail",
    "title": "강화도로 도읍을 옮겨 장기 항전을 준비하였다.",
    "description": "강화도로 도읍을 옮겨 장기 항전을 준비하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "75회 심화 Q21 X"
  },
  {
    "id": "75회_q21_943",
    "type": "사건",
    "kind": "detail",
    "title": "철령위 설치에 반발하여 요동 정벌을 추진하였다.",
    "description": "철령위 설치에 반발하여 요동 정벌을 추진하였다.",
    "startYear": 1388,
    "endYear": 1388,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "위화도 회군"
    ],
    "_src": "75회 심화 Q21 X"
  },
  {
    "id": "75회_q21_944",
    "type": "사건",
    "kind": "detail",
    "title": "신기군 신보군 항마군 등으로 구성된 별무반을 조직하였다...",
    "description": "신기군 신보군 항마군 등으로 구성된 별무반을 조직하였다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "75회 심화 Q21 X"
  },
  {
    "id": "75회_q22_945",
    "type": "사건",
    "kind": "detail",
    "title": "자의 대비의 복상 문제로 예송이 일어났다.",
    "description": "자의 대비의 복상 문제로 예송이 일어났다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "75회 심화 Q22 X"
  },
  {
    "id": "75회_q22_946",
    "type": "사건",
    "kind": "detail",
    "title": "외척 간의 권력 다툼으로 윤임이 제거되었다.",
    "description": "외척 간의 권력 다툼으로 윤임이 제거되었다.",
    "startYear": 1545,
    "endYear": 1567,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 명종"
    ],
    "_src": "75회 심화 Q22 O"
  },
  {
    "id": "75회_q22_947",
    "type": "사건",
    "kind": "detail",
    "title": "세자 책봉 문제를 계기로 정철이 유배되었다.",
    "description": "세자 책봉 문제를 계기로 정철이 유배되었다.",
    "startYear": 1567,
    "endYear": 1608,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 선조"
    ],
    "_src": "75회 심화 Q22 X"
  },
  {
    "id": "75회_q22_948",
    "type": "사건",
    "kind": "detail",
    "title": "희빈 장씨 소생의 원자 책봉 문제로 환국이 발생하였다.",
    "description": "희빈 장씨 소생의 원자 책봉 문제로 환국이 발생하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "75회 심화 Q22 X"
  },
  {
    "id": "75회_q22_949",
    "type": "사건",
    "kind": "detail",
    "title": "폐비 윤씨 사사 사건의 전말이 알려져 김굉필 등이 처형...",
    "description": "폐비 윤씨 사사 사건의 전말이 알려져 김굉필 등이 처형되었다.",
    "startYear": 1494,
    "endYear": 1506,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "연산군"
    ],
    "_src": "75회 심화 Q22 X"
  },
  {
    "id": "75회_q23_950",
    "type": "사건",
    "kind": "detail",
    "title": "송상현이 동래성에서 항전하였다.",
    "description": "송상현이 동래성에서 항전하였다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "75회 심화 Q23 X"
  },
  {
    "id": "75회_q23_951",
    "type": "사건",
    "kind": "detail",
    "title": "김준룡이 광교산 전투에서 승리하였다.",
    "description": "김준룡이 광교산 전투에서 승리하였다.",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "병자호란"
    ],
    "_src": "75회 심화 Q23 O"
  },
  {
    "id": "75회_q23_952",
    "type": "사건",
    "kind": "detail",
    "title": "이괄의 반란 세력이 도성을 장악하였다.",
    "description": "이괄의 반란 세력이 도성을 장악하였다.",
    "startYear": 1624,
    "endYear": 1624,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이괄의 난"
    ],
    "_src": "75회 심화 Q23 X"
  },
  {
    "id": "75회_q23_953",
    "type": "사건",
    "kind": "detail",
    "title": "강홍립 부대가 사르후 전투에 참전하였다.",
    "description": "강홍립 부대가 사르후 전투에 참전하였다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "75회 심화 Q23 X"
  },
  {
    "id": "75회_q23_954",
    "type": "사건",
    "kind": "detail",
    "title": "신류가 조총 부대를 이끌고 흑룡강에서 전투를 벌였다.",
    "description": "신류가 조총 부대를 이끌고 흑룡강에서 전투를 벌였다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "75회 심화 Q23 X"
  },
  {
    "id": "75회_q24_955",
    "type": "사건",
    "kind": "detail",
    "title": "경기도에 한하여 대동법을 시행하였다.",
    "description": "경기도에 한하여 대동법을 시행하였다.",
    "startYear": 1608,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "대동법"
    ],
    "_src": "75회 심화 Q24 X"
  },
  {
    "id": "75회_q24_956",
    "type": "사건",
    "kind": "detail",
    "title": "수도 방어를 위하여 금위영을 창설하였다.",
    "description": "수도 방어를 위하여 금위영을 창설하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "75회 심화 Q24 X"
  },
  {
    "id": "75회_q24_957",
    "type": "사건",
    "kind": "detail",
    "title": "탕평 교서를 반포하고 탕평비를 건립하였다.",
    "description": "탕평 교서를 반포하고 탕평비를 건립하였다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "75회 심화 Q24 O"
  },
  {
    "id": "75회_q24_958",
    "type": "사건",
    "kind": "detail",
    "title": "문신을 재교육하기 위한 초계문신제를 실시하였다.",
    "description": "문신을 재교육하기 위한 초계문신제를 실시하였다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "75회 심화 Q24 X"
  },
  {
    "id": "75회_q24_959",
    "type": "사건",
    "kind": "detail",
    "title": "통치 체제를 정비하기 위해 대전회통을 편찬하였다.",
    "description": "통치 체제를 정비하기 위해 대전회통을 편찬하였다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "75회 심화 Q24 X"
  },
  {
    "id": "75회_q25_960",
    "type": "사건",
    "kind": "detail",
    "title": "세책가에서 춘향전을 빌리는 부녀자",
    "description": "세책가에서 춘향전을 빌리는 부녀자",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q25 O"
  },
  {
    "id": "75회_q25_961",
    "type": "사건",
    "kind": "detail",
    "title": "동국정운을 편찬하는 집현전의 학자",
    "description": "동국정운을 편찬하는 집현전의 학자",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "75회 심화 Q25 X"
  },
  {
    "id": "75회_q25_962",
    "type": "사건",
    "kind": "detail",
    "title": "주자소에서 계미자를 제작하는 장인",
    "description": "주자소에서 계미자를 제작하는 장인",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "75회 심화 Q25 X"
  },
  {
    "id": "75회_q25_963",
    "type": "사건",
    "kind": "detail",
    "title": "형평사 창립 대회 개최를 취재하는 기자",
    "description": "형평사 창립 대회 개최를 취재하는 기자",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "형평 운동"
    ],
    "_src": "75회 심화 Q25 X"
  },
  {
    "id": "75회_q25_964",
    "type": "사건",
    "kind": "detail",
    "title": "시전의 상행위를 감독하는 경시서의 관리",
    "description": "시전의 상행위를 감독하는 경시서의 관리",
    "startYear": 1394,
    "endYear": 1894,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "한성부"
    ],
    "_src": "75회 심화 Q25 X"
  },
  {
    "id": "75회_q26_965",
    "type": "사건",
    "kind": "detail",
    "title": "염포의 왜관을 통해 일본과 교역하였다.",
    "description": "염포의 왜관을 통해 일본과 교역하였다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "75회 심화 Q26 O"
  },
  {
    "id": "75회_q26_966",
    "type": "사건",
    "kind": "detail",
    "title": "상평통보를 발행하여 화폐로 사용하였다.",
    "description": "상평통보를 발행하여 화폐로 사용하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q26 X"
  },
  {
    "id": "75회_q26_967",
    "type": "사건",
    "kind": "detail",
    "title": "관청에 물품을 조달하는 공인이 활동하였다.",
    "description": "관청에 물품을 조달하는 공인이 활동하였다.",
    "startYear": 1608,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "대동법"
    ],
    "_src": "75회 심화 Q26 X"
  },
  {
    "id": "75회_q26_968",
    "type": "사건",
    "kind": "detail",
    "title": "송상 만상이 대청 무역으로 부를 축적하였다.",
    "description": "송상 만상이 대청 무역으로 부를 축적하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q26 X"
  },
  {
    "id": "75회_q26_969",
    "type": "사건",
    "kind": "detail",
    "title": "덕대가 물주에게 자금을 받아 광산을 경영하였다.",
    "description": "덕대가 물주에게 자금을 받아 광산을 경영하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q26 X"
  },
  {
    "id": "75회_q27_970",
    "type": "사건",
    "kind": "detail",
    "title": "오페르트가 남연군 묘 도굴을 시도하였다.",
    "description": "오페르트가 남연군 묘 도굴을 시도하였다.",
    "startYear": 1868,
    "endYear": 1868,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "오페르트 사건"
    ],
    "_src": "75회 심화 Q27 X"
  },
  {
    "id": "75회_q27_971",
    "type": "사건",
    "kind": "detail",
    "title": "이만손이 주도하여 영남 만인소를 올렸다.",
    "description": "이만손이 주도하여 영남 만인소를 올렸다.",
    "startYear": 1880,
    "endYear": 1880,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선책략"
    ],
    "_src": "75회 심화 Q27 X"
  },
  {
    "id": "75회_q27_972",
    "type": "사건",
    "kind": "detail",
    "title": "이시애가 길주를 근거지로 난을 일으켰다.",
    "description": "이시애가 길주를 근거지로 난을 일으켰다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "75회 심화 Q27 X"
  },
  {
    "id": "75회_q27_973",
    "type": "사건",
    "kind": "detail",
    "title": "홍경래 등이 봉기하여 정주성을 점령하였다.",
    "description": "홍경래 등이 봉기하여 정주성을 점령하였다.",
    "startYear": 1811,
    "endYear": 1812,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "홍경래의 난"
    ],
    "_src": "75회 심화 Q27 O"
  },
  {
    "id": "75회_q27_974",
    "type": "사건",
    "kind": "detail",
    "title": "곽재우 고경명 등이 의병장으로 활약하였다.",
    "description": "곽재우 고경명 등이 의병장으로 활약하였다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "75회 심화 Q27 X"
  },
  {
    "id": "75회_q28_975",
    "type": "사건",
    "kind": "detail",
    "title": "개혁 추진 기구로 교정청이 설치되었다.",
    "description": "개혁 추진 기구로 교정청이 설치되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "75회 심화 Q28 X"
  },
  {
    "id": "75회_q28_976",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 홍범 14조가 반포되었다.",
    "description": "전개 과정에서 홍범 14조가 반포되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "75회 심화 Q28 X"
  },
  {
    "id": "75회_q28_977",
    "type": "사건",
    "kind": "detail",
    "title": "통리기무아문이 신설되는 배경이 되었다.",
    "description": "통리기무아문이 신설되는 배경이 되었다.",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "통리기무아문"
    ],
    "_src": "75회 심화 Q28 X"
  },
  {
    "id": "75회_q28_978",
    "type": "사건",
    "kind": "detail",
    "title": "김기수가 수신사로 파견되는 결과를 가져왔다.",
    "description": "김기수가 수신사로 파견되는 결과를 가져왔다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "75회 심화 Q28 X"
  },
  {
    "id": "75회_q28_979",
    "type": "사건",
    "kind": "detail",
    "title": "청일 간에 톈진 조약이 체결되는 계기가 되었다.",
    "description": "청일 간에 톈진 조약이 체결되는 계기가 되었다.",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑신정변"
    ],
    "_src": "75회 심화 Q28 O"
  },
  {
    "id": "75회_q29_980",
    "type": "사건",
    "kind": "detail",
    "title": "포접제를 활용하여 교세를 확장하였다.",
    "description": "포접제를 활용하여 교세를 확장하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "75회 심화 Q29 O"
  },
  {
    "id": "75회_q29_981",
    "type": "사건",
    "kind": "detail",
    "title": "배재 학당을 세워 신학문 보급에 앞장섰다.",
    "description": "배재 학당을 세워 신학문 보급에 앞장섰다.",
    "startYear": 1883,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "근대 교육 기관"
    ],
    "_src": "75회 심화 Q29 X"
  },
  {
    "id": "75회_q29_982",
    "type": "사건",
    "kind": "detail",
    "title": "박중빈을 중심으로 새생활 운동을 추진하였다.",
    "description": "박중빈을 중심으로 새생활 운동을 추진하였다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "75회 심화 Q29 X"
  },
  {
    "id": "75회_q29_983",
    "type": "사건",
    "kind": "detail",
    "title": "일제의 통제에 맞서 사찰령 폐지 운동을 벌였다.",
    "description": "일제의 통제에 맞서 사찰령 폐지 운동을 벌였다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "75회 심화 Q29 X"
  },
  {
    "id": "75회_q29_984",
    "type": "사건",
    "kind": "detail",
    "title": "의민단을 조직하여 항일 무장 투쟁을 전개하였다.",
    "description": "의민단을 조직하여 항일 무장 투쟁을 전개하였다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "75회 심화 Q29 X"
  },
  {
    "id": "75회_q30_985",
    "type": "사건",
    "kind": "detail",
    "title": "고종이 아관 파천을 단행하였다.",
    "description": "고종이 아관 파천을 단행하였다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "75회 심화 Q30 X"
  },
  {
    "id": "75회_q30_986",
    "type": "사건",
    "kind": "detail",
    "title": "일본이 독도를 불법 편입하였다.",
    "description": "일본이 독도를 불법 편입하였다.",
    "startYear": 1904,
    "endYear": 1905,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "러일전쟁"
    ],
    "_src": "75회 심화 Q30 O"
  },
  {
    "id": "75회_q30_987",
    "type": "사건",
    "kind": "detail",
    "title": "러시아가 절영도 조차를 요구하였다.",
    "description": "러시아가 절영도 조차를 요구하였다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "75회 심화 Q30 X"
  },
  {
    "id": "75회_q30_988",
    "type": "사건",
    "kind": "detail",
    "title": "조청 상민 수륙 무역 장정을 체결하였다.",
    "description": "조청 상민 수륙 무역 장정을 체결하였다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "조청상민수륙무역장정"
    ],
    "_src": "75회 심화 Q30 X"
  },
  {
    "id": "75회_q30_989",
    "type": "사건",
    "kind": "detail",
    "title": "평양 관민이 대동강에 침입한 제너럴 셔먼호를 불태웠다.",
    "description": "평양 관민이 대동강에 침입한 제너럴 셔먼호를 불태웠다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "75회 심화 Q30 X"
  },
  {
    "id": "75회_q31_990",
    "type": "사건",
    "kind": "detail",
    "title": "고종의 밀지를 받아 독립 의군부를 조직하였다.",
    "description": "고종의 밀지를 받아 독립 의군부를 조직하였다.",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "75회 심화 Q31 X"
  },
  {
    "id": "75회_q31_991",
    "type": "사건",
    "kind": "detail",
    "title": "도쿄에서 일왕이 탄 마차를 향해 폭탄을 던졌다.",
    "description": "도쿄에서 일왕이 탄 마차를 향해 폭탄을 던졌다.",
    "startYear": 1931,
    "endYear": 1935,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "한인 애국단"
    ],
    "_src": "75회 심화 Q31 X"
  },
  {
    "id": "75회_q31_992",
    "type": "사건",
    "kind": "detail",
    "title": "을사늑약이 체결되자 태인에서 의병을 일으켰다.",
    "description": "을사늑약이 체결되자 태인에서 의병을 일으켰다.",
    "startYear": 1833,
    "endYear": 1906,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "최익현"
    ],
    "_src": "75회 심화 Q31 O"
  },
  {
    "id": "75회_q31_993",
    "type": "사건",
    "kind": "detail",
    "title": "명동 성당 앞에서 이완용을 습격하여 중상을 입혔다.",
    "description": "명동 성당 앞에서 이완용을 습격하여 중상을 입혔다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "75회 심화 Q31 X"
  },
  {
    "id": "75회_q31_994",
    "type": "사건",
    "kind": "detail",
    "title": "13도 창의군을 지휘하여 서울 진공 작전을 전개하였다.",
    "description": "13도 창의군을 지휘하여 서울 진공 작전을 전개하였다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "75회 심화 Q31 X"
  },
  {
    "id": "75회_q32_995",
    "type": "사건",
    "kind": "detail",
    "title": "독립 협회 - 고종 강제 퇴위 반대 운동을 전개하였다.",
    "description": "독립 협회 - 고종 강제 퇴위 반대 운동을 전개하였다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한자강회"
    ],
    "_src": "75회 심화 Q32 X"
  },
  {
    "id": "75회_q32_996",
    "type": "사건",
    "kind": "detail",
    "title": "보안회 - 일제의 황무지 개간권 요구를 저지시켰다.",
    "description": "보안회 - 일제의 황무지 개간권 요구를 저지시켰다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "보안회"
    ],
    "_src": "75회 심화 Q32 O"
  },
  {
    "id": "75회_q32_997",
    "type": "사건",
    "kind": "detail",
    "title": "헌정 연구회 - 일제가 조작한 105인 사건으로 와해되...",
    "description": "헌정 연구회 - 일제가 조작한 105인 사건으로 와해되었다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "75회 심화 Q32 X"
  },
  {
    "id": "75회_q32_998",
    "type": "사건",
    "kind": "detail",
    "title": "대한 자강회 - 대성 학교를 설립하여 민족 교육을 실시...",
    "description": "대한 자강회 - 대성 학교를 설립하여 민족 교육을 실시하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "75회 심화 Q32 X"
  },
  {
    "id": "75회_q32_999",
    "type": "사건",
    "kind": "detail",
    "title": "신민회 - 조소앙의 삼균주의를 기초로 건국 강령을 발표...",
    "description": "신민회 - 조소앙의 삼균주의를 기초로 건국 강령을 발표하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "75회 심화 Q32 X"
  },
  {
    "id": "75회_q33_1000",
    "type": "사건",
    "kind": "detail",
    "title": "샌프란시스코에서 흥사단을 창립하였다.",
    "description": "샌프란시스코에서 흥사단을 창립하였다.",
    "startYear": 1913,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "흥사단"
    ],
    "_src": "75회 심화 Q33 X"
  },
  {
    "id": "75회_q33_1001",
    "type": "사건",
    "kind": "detail",
    "title": "황준헌이 쓴 조선책략을 국내에 들여왔다.",
    "description": "황준헌이 쓴 조선책략을 국내에 들여왔다.",
    "startYear": 1880,
    "endYear": 1880,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조선책략"
    ],
    "_src": "75회 심화 Q33 X"
  },
  {
    "id": "75회_q33_1002",
    "type": "사건",
    "kind": "detail",
    "title": "초대 통감이었던 이토 히로부미를 사살하였다.",
    "description": "초대 통감이었던 이토 히로부미를 사살하였다.",
    "startYear": 1879,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "안중근"
    ],
    "_src": "75회 심화 Q33 O"
  },
  {
    "id": "75회_q33_1003",
    "type": "사건",
    "kind": "detail",
    "title": "유만수 등과 함께 부민관 폭파 의거를 일으켰다.",
    "description": "유만수 등과 함께 부민관 폭파 의거를 일으켰다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "75회 심화 Q33 X"
  },
  {
    "id": "75회_q33_1004",
    "type": "사건",
    "kind": "detail",
    "title": "국권 피탈 과정을 정리한 한국통사를 저술하였다.",
    "description": "국권 피탈 과정을 정리한 한국통사를 저술하였다.",
    "startYear": 1859,
    "endYear": 1925,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박은식"
    ],
    "_src": "75회 심화 Q33 X"
  },
  {
    "id": "75회_q34_1005",
    "type": "사건",
    "kind": "detail",
    "title": "미쓰야 협정이 체결되었다.",
    "description": "미쓰야 협정이 체결되었다.",
    "startYear": 1925,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "미쓰야 협정"
    ],
    "_src": "75회 심화 Q34 X"
  },
  {
    "id": "75회_q34_1006",
    "type": "사건",
    "kind": "detail",
    "title": "조선 사상범 예방 구금령이 제정되었다.",
    "description": "조선 사상범 예방 구금령이 제정되었다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "75회 심화 Q34 X"
  },
  {
    "id": "75회_q34_1007",
    "type": "사건",
    "kind": "detail",
    "title": "박문국이 설치되어 한성순보를 발행하였다.",
    "description": "박문국이 설치되어 한성순보를 발행하였다.",
    "startYear": 1883,
    "endYear": 1888,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박문국"
    ],
    "_src": "75회 심화 Q34 X"
  },
  {
    "id": "75회_q34_1008",
    "type": "사건",
    "kind": "detail",
    "title": "황국 중앙 총상회가 상권 수호 운동을 주도하였다.",
    "description": "황국 중앙 총상회가 상권 수호 운동을 주도하였다.",
    "startYear": 1898,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "황국 중앙 총상회"
    ],
    "_src": "75회 심화 Q34 X"
  },
  {
    "id": "75회_q34_1009",
    "type": "사건",
    "kind": "detail",
    "title": "회사 설립 시 총독의 허가를 받도록 하는 회사령이 시행...",
    "description": "회사 설립 시 총독의 허가를 받도록 하는 회사령이 시행되었다.",
    "startYear": 1910,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "회사령"
    ],
    "_src": "75회 심화 Q34 O"
  },
  {
    "id": "75회_q35_1010",
    "type": "사건",
    "kind": "detail",
    "title": "영선사 일행으로 청에 가는 생도",
    "description": "영선사 일행으로 청에 가는 생도",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "통리기무아문"
    ],
    "_src": "75회 심화 Q35 X"
  },
  {
    "id": "75회_q35_1011",
    "type": "사건",
    "kind": "detail",
    "title": "경성 제국 대학에서 공부하는 학생",
    "description": "경성 제국 대학에서 공부하는 학생",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "75회 심화 Q35 O"
  },
  {
    "id": "75회_q35_1012",
    "type": "사건",
    "kind": "detail",
    "title": "국채 보상 운동의 모금에 참여하는 상인",
    "description": "국채 보상 운동의 모금에 참여하는 상인",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "국채 보상 운동"
    ],
    "_src": "75회 심화 Q35 X"
  },
  {
    "id": "75회_q35_1013",
    "type": "사건",
    "kind": "detail",
    "title": "육영 공원에서 영어를 가르치는 미국인 교사",
    "description": "육영 공원에서 영어를 가르치는 미국인 교사",
    "startYear": 1886,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "육영공원"
    ],
    "_src": "75회 심화 Q35 X"
  },
  {
    "id": "75회_q35_1014",
    "type": "사건",
    "kind": "detail",
    "title": "전차 개통식에 참여하는 한성 전기 회사 직원",
    "description": "전차 개통식에 참여하는 한성 전기 회사 직원",
    "startYear": 1898,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한성 전기 회사"
    ],
    "_src": "75회 심화 Q35 X"
  },
  {
    "id": "75회_q36_1015",
    "type": "사건",
    "kind": "detail",
    "title": "간도 참변으로 민간인이 학살되었다.",
    "description": "간도 참변으로 민간인이 학살되었다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "75회 심화 Q36 X"
  },
  {
    "id": "75회_q36_1016",
    "type": "사건",
    "kind": "detail",
    "title": "민영익을 대표로 한 보빙사가 파견되었다.",
    "description": "민영익을 대표로 한 보빙사가 파견되었다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "75회 심화 Q36 X"
  },
  {
    "id": "75회_q36_1017",
    "type": "사건",
    "kind": "detail",
    "title": "대한 제국의 마지막 황제 순종이 서거하였다.",
    "description": "대한 제국의 마지막 황제 순종이 서거하였다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "75회 심화 Q36 X"
  },
  {
    "id": "75회_q36_1018",
    "type": "사건",
    "kind": "detail",
    "title": "언론사의 주도로 브나로드 운동이 전개되었다.",
    "description": "언론사의 주도로 브나로드 운동이 전개되었다.",
    "startYear": 1931,
    "endYear": 1934,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "브나로드 운동"
    ],
    "_src": "75회 심화 Q36 X"
  },
  {
    "id": "75회_q36_1019",
    "type": "사건",
    "kind": "detail",
    "title": "미국 대통령 윌슨이 민족 자결주의를 제창하였다.",
    "description": "미국 대통령 윌슨이 민족 자결주의를 제창하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "3·1 운동"
    ],
    "_src": "75회 심화 Q36 O"
  },
  {
    "id": "75회_q37_1020",
    "type": "사건",
    "kind": "detail",
    "title": "군대식 조직을 갖춘 비밀 결사였다.",
    "description": "군대식 조직을 갖춘 비밀 결사였다.",
    "startYear": 1915,
    "endYear": 1918,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한광복회"
    ],
    "_src": "75회 심화 Q37 O"
  },
  {
    "id": "75회_q37_1021",
    "type": "사건",
    "kind": "detail",
    "title": "정우회 선언의 영향으로 결성되었다.",
    "description": "정우회 선언의 영향으로 결성되었다.",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신간회"
    ],
    "_src": "75회 심화 Q37 X"
  },
  {
    "id": "75회_q37_1022",
    "type": "사건",
    "kind": "detail",
    "title": "조선 혁명 선언을 활동 지침으로 삼았다.",
    "description": "조선 혁명 선언을 활동 지침으로 삼았다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "75회 심화 Q37 X"
  },
  {
    "id": "75회_q37_1023",
    "type": "사건",
    "kind": "detail",
    "title": "중국군과 함께 영릉가 전투에서 큰 전과를 올렸다.",
    "description": "중국군과 함께 영릉가 전투에서 큰 전과를 올렸다.",
    "startYear": 1929,
    "endYear": 1938,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선혁명군"
    ],
    "_src": "75회 심화 Q37 X"
  },
  {
    "id": "75회_q37_1024",
    "type": "사건",
    "kind": "detail",
    "title": "만민 공동회를 열어 열강의 이권 침탈을 비판하였다.",
    "description": "만민 공동회를 열어 열강의 이권 침탈을 비판하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "75회 심화 Q37 X"
  },
  {
    "id": "75회_q39_1025",
    "type": "사건",
    "kind": "detail",
    "title": "한인 자치 기구인 경학사를 조직하였다.",
    "description": "한인 자치 기구인 경학사를 조직하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "75회 심화 Q39 X"
  },
  {
    "id": "75회_q39_1026",
    "type": "사건",
    "kind": "detail",
    "title": "권업회를 조직하고 권업신문을 발간하였다.",
    "description": "권업회를 조직하고 권업신문을 발간하였다.",
    "startYear": 1914,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한 광복군 정부"
    ],
    "_src": "75회 심화 Q39 X"
  },
  {
    "id": "75회_q39_1027",
    "type": "사건",
    "kind": "detail",
    "title": "중광단을 결성하여 항일 투쟁을 전개하였다.",
    "description": "중광단을 결성하여 항일 투쟁을 전개하였다.",
    "startYear": 1911,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "중광단"
    ],
    "_src": "75회 심화 Q39 X"
  },
  {
    "id": "75회_q39_1028",
    "type": "사건",
    "kind": "detail",
    "title": "숭무 학교를 설립하여 독립군을 양성하였다.",
    "description": "숭무 학교를 설립하여 독립군을 양성하였다.",
    "startYear": 1910,
    "endYear": 1913,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "숭무 학교"
    ],
    "_src": "75회 심화 Q39 O"
  },
  {
    "id": "75회_q39_1029",
    "type": "사건",
    "kind": "detail",
    "title": "유학생들이 중심이 되어 2·8 독립 선언서를 발표하였다...",
    "description": "유학생들이 중심이 되어 2·8 독립 선언서를 발표하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "2·8 독립 선언"
    ],
    "_src": "75회 심화 Q39 X"
  },
  {
    "id": "75회_q40_1030",
    "type": "사건",
    "kind": "detail",
    "title": "양전 사업이 실시되어 지계가 발급되었어요.",
    "description": "양전 사업이 실시되어 지계가 발급되었어요.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "75회 심화 Q40 X"
  },
  {
    "id": "75회_q40_1031",
    "type": "사건",
    "kind": "detail",
    "title": "함경도와 황해도에서 방곡령이 선포되었어요.",
    "description": "함경도와 황해도에서 방곡령이 선포되었어요.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "75회 심화 Q40 X"
  },
  {
    "id": "75회_q40_1032",
    "type": "사건",
    "kind": "detail",
    "title": "전국 단위 조직인 조선 농민 총동맹이 결성되었어요.",
    "description": "전국 단위 조직인 조선 농민 총동맹이 결성되었어요.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "75회 심화 Q40 O"
  },
  {
    "id": "75회_q40_1033",
    "type": "사건",
    "kind": "detail",
    "title": "일본의 토지 침탈에 맞서 농광 회사가 설립되었어요.",
    "description": "일본의 토지 침탈에 맞서 농광 회사가 설립되었어요.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "농광 회사"
    ],
    "_src": "75회 심화 Q40 X"
  },
  {
    "id": "75회_q40_1034",
    "type": "사건",
    "kind": "detail",
    "title": "기한 내에 소유지를 신고하게 하는 토지 조사령을 제정하...",
    "description": "기한 내에 소유지를 신고하게 하는 토지 조사령을 제정하였어요.",
    "startYear": 1912,
    "endYear": 1918,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "토지조사사업"
    ],
    "_src": "75회 심화 Q40 X"
  },
  {
    "id": "75회_q41_1035",
    "type": "사건",
    "kind": "detail",
    "title": "최초로 한글에 띄어쓰기를 도입하였다.",
    "description": "최초로 한글에 띄어쓰기를 도입하였다.",
    "startYear": 1896,
    "endYear": 1899,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "독립신문"
    ],
    "_src": "75회 심화 Q41 X"
  },
  {
    "id": "75회_q41_1036",
    "type": "사건",
    "kind": "detail",
    "title": "국어 문법서인 대한문전을 편찬하였다.",
    "description": "국어 문법서인 대한문전을 편찬하였다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "75회 심화 Q41 X"
  },
  {
    "id": "75회_q41_1037",
    "type": "사건",
    "kind": "detail",
    "title": "태극 서관을 설립하여 서적을 보급하였다.",
    "description": "태극 서관을 설립하여 서적을 보급하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "75회 심화 Q41 X"
  },
  {
    "id": "75회_q41_1038",
    "type": "사건",
    "kind": "detail",
    "title": "조선말(우리말) 큰 사전 편찬을 추진하였다.",
    "description": "조선말(우리말) 큰 사전 편찬을 추진하였다.",
    "startYear": 1931,
    "endYear": 1942,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "조선어학회"
    ],
    "_src": "75회 심화 Q41 O"
  },
  {
    "id": "75회_q41_1039",
    "type": "사건",
    "kind": "detail",
    "title": "국문 연구소를 두어 한글을 체계적으로 연구하였다.",
    "description": "국문 연구소를 두어 한글을 체계적으로 연구하였다.",
    "startYear": 1907,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "국문연구소"
    ],
    "_src": "75회 심화 Q41 X"
  },
  {
    "id": "75회_q42_1040",
    "type": "사건",
    "kind": "detail",
    "title": "나운규의 영화 아리랑이 상영되었습니다.",
    "description": "나운규의 영화 아리랑이 상영되었습니다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "영화 아리랑"
    ],
    "_src": "75회 심화 Q42 O"
  },
  {
    "id": "75회_q42_1041",
    "type": "사건",
    "kind": "detail",
    "title": "한글 신문인 제국신문이 간행되었습니다.",
    "description": "한글 신문인 제국신문이 간행되었습니다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "75회 심화 Q42 X"
  },
  {
    "id": "75회_q42_1042",
    "type": "사건",
    "kind": "detail",
    "title": "정비석의 소설 자유부인이 출판되었습니다.",
    "description": "정비석의 소설 자유부인이 출판되었습니다.",
    "startYear": 1950,
    "endYear": 1959,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1950년대 경제"
    ],
    "_src": "75회 심화 Q42 X"
  },
  {
    "id": "75회_q42_1043",
    "type": "사건",
    "kind": "detail",
    "title": "잡지 사상계가 높은 판매 부수를 기록하였습니다.",
    "description": "잡지 사상계가 높은 판매 부수를 기록하였습니다.",
    "startYear": 1950,
    "endYear": 1959,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1950년대 경제"
    ],
    "_src": "75회 심화 Q42 X"
  },
  {
    "id": "75회_q42_1044",
    "type": "사건",
    "kind": "detail",
    "title": "아침 이슬 등의 곡이 금지곡으로 지정되었습니다.",
    "description": "아침 이슬 등의 곡이 금지곡으로 지정되었습니다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "75회 심화 Q42 X"
  },
  {
    "id": "75회_q43_1045",
    "type": "사건",
    "kind": "detail",
    "title": "청산리에서 일본군에 맞서 승리를 거두었다.",
    "description": "청산리에서 일본군에 맞서 승리를 거두었다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "75회 심화 Q43 X"
  },
  {
    "id": "75회_q43_1046",
    "type": "사건",
    "kind": "detail",
    "title": "미국과 연계하여 국내 진공 작전을 준비하였다.",
    "description": "미국과 연계하여 국내 진공 작전을 준비하였다.",
    "startYear": 1940,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광복군 창설"
    ],
    "_src": "75회 심화 Q43 O"
  },
  {
    "id": "75회_q43_1047",
    "type": "사건",
    "kind": "detail",
    "title": "동북 항일 연군으로 개편되어 유격전을 전개하였다.",
    "description": "동북 항일 연군으로 개편되어 유격전을 전개하였다.",
    "startYear": 1936,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동북 항일 연군"
    ],
    "_src": "75회 심화 Q43 X"
  },
  {
    "id": "75회_q43_1048",
    "type": "사건",
    "kind": "detail",
    "title": "쌍성보 대전자령 전투 등에서 일본군에 승리하였다.",
    "description": "쌍성보 대전자령 전투 등에서 일본군에 승리하였다.",
    "startYear": 1930,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한국독립군"
    ],
    "_src": "75회 심화 Q43 X"
  },
  {
    "id": "75회_q43_1049",
    "type": "사건",
    "kind": "detail",
    "title": "중국 관내(關內)에서 결성된 최초의 한인 무장 부대였다...",
    "description": "중국 관내(關內)에서 결성된 최초의 한인 무장 부대였다.",
    "startYear": 1938,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선의용대"
    ],
    "_src": "75회 심화 Q43 X"
  },
  {
    "id": "75회_q44_1050",
    "type": "사건",
    "kind": "detail",
    "title": "언론을 통제하기 위하여 신문지법을 제정하였다.",
    "description": "언론을 통제하기 위하여 신문지법을 제정하였다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "75회 심화 Q44 X"
  },
  {
    "id": "75회_q44_1051",
    "type": "사건",
    "kind": "detail",
    "title": "애국반을 조직하여 한국인의 생활을 통제하였다.",
    "description": "애국반을 조직하여 한국인의 생활을 통제하였다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "75회 심화 Q44 O"
  },
  {
    "id": "75회_q44_1052",
    "type": "사건",
    "kind": "detail",
    "title": "경복궁에서 최초로 조선 물산 공진회를 개최하였다.",
    "description": "경복궁에서 최초로 조선 물산 공진회를 개최하였다.",
    "startYear": 1915,
    "endYear": 1915,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조선 물산 공진회"
    ],
    "_src": "75회 심화 Q44 X"
  },
  {
    "id": "75회_q44_1053",
    "type": "사건",
    "kind": "detail",
    "title": "재정 고문 메가타의 주도 아래 화폐 정리 사업을 실시하...",
    "description": "재정 고문 메가타의 주도 아래 화폐 정리 사업을 실시하였다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "75회 심화 Q44 X"
  },
  {
    "id": "75회_q44_1054",
    "type": "사건",
    "kind": "detail",
    "title": "보통학교의 수업 연한을 4년으로 규정한 제1차 조선 교...",
    "description": "보통학교의 수업 연한을 4년으로 규정한 제1차 조선 교육령을 시행하였다.",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "75회 심화 Q44 X"
  },
  {
    "id": "75회_q45_1055",
    "type": "사건",
    "kind": "detail",
    "title": "모스크바 3국 외상 회의가 개최되었다.",
    "description": "모스크바 3국 외상 회의가 개최되었다.",
    "startYear": 1945,
    "endYear": 1945,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "모스크바 3국 외상회의"
    ],
    "_src": "75회 심화 Q45 X"
  },
  {
    "id": "75회_q45_1056",
    "type": "사건",
    "kind": "detail",
    "title": "송진우 김성수 등이 한국 민주당을 창당하였다.",
    "description": "송진우 김성수 등이 한국 민주당을 창당하였다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "75회 심화 Q45 X"
  },
  {
    "id": "75회_q45_1057",
    "type": "사건",
    "kind": "detail",
    "title": "좌우 합작 위원회에서 좌우 합작 7원칙을 발표하였다.",
    "description": "좌우 합작 위원회에서 좌우 합작 7원칙을 발표하였다.",
    "startYear": 1886,
    "endYear": 1947,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "여운형"
    ],
    "_src": "75회 심화 Q45 X"
  },
  {
    "id": "75회_q45_1058",
    "type": "사건",
    "kind": "detail",
    "title": "우리나라 최초의 보통 선거인 5·10 총선거가 실시되었...",
    "description": "우리나라 최초의 보통 선거인 5·10 총선거가 실시되었다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "75회 심화 Q45 O"
  },
  {
    "id": "75회_q45_1059",
    "type": "사건",
    "kind": "detail",
    "title": "여운형이 중심이 되어 조선 건국 준비 위원회를 조직하였...",
    "description": "여운형이 중심이 되어 조선 건국 준비 위원회를 조직하였다.",
    "startYear": 1886,
    "endYear": 1947,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "여운형"
    ],
    "_src": "75회 심화 Q45 X"
  },
  {
    "id": "75회_q46_1060",
    "type": "사건",
    "kind": "detail",
    "title": "경부 고속 도로가 개통되었다.",
    "description": "경부 고속 도로가 개통되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "75회 심화 Q46 X"
  },
  {
    "id": "75회_q46_1061",
    "type": "사건",
    "kind": "detail",
    "title": "한미 상호 방위 조약이 체결되었다.",
    "description": "한미 상호 방위 조약이 체결되었다.",
    "startYear": 1953,
    "endYear": 1953,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한미 상호 방위 조약"
    ],
    "_src": "75회 심화 Q46 O"
  },
  {
    "id": "75회_q46_1062",
    "type": "사건",
    "kind": "detail",
    "title": "함평 고구마 피해 보상 운동이 전개되었다.",
    "description": "함평 고구마 피해 보상 운동이 전개되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "75회 심화 Q46 X"
  },
  {
    "id": "75회_q46_1063",
    "type": "사건",
    "kind": "detail",
    "title": "대통령 긴급 명령으로 금융 실명제가 실시되었다.",
    "description": "대통령 긴급 명령으로 금융 실명제가 실시되었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "75회 심화 Q46 X"
  },
  {
    "id": "75회_q46_1064",
    "type": "사건",
    "kind": "detail",
    "title": "사회 정화를 명분으로 삼청 교육대가 설치되었다.",
    "description": "사회 정화를 명분으로 삼청 교육대가 설치되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "75회 심화 Q46 X"
  },
  {
    "id": "75회_q47_1065",
    "type": "사건",
    "kind": "detail",
    "title": "부천 경찰서 성 고문 사건이 발생하였다.",
    "description": "부천 경찰서 성 고문 사건이 발생하였다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "75회 심화 Q47 X"
  },
  {
    "id": "75회_q47_1066",
    "type": "사건",
    "kind": "detail",
    "title": "정부에 비판적인 경향신문이 폐간되었다.",
    "description": "정부에 비판적인 경향신문이 폐간되었다.",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "75회 심화 Q47 X"
  },
  {
    "id": "75회_q47_1067",
    "type": "사건",
    "kind": "detail",
    "title": "최저 임금 결정을 위한 최저 임금 위원회가 설치되었다.",
    "description": "최저 임금 결정을 위한 최저 임금 위원회가 설치되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "75회 심화 Q47 X"
  },
  {
    "id": "75회_q47_1068",
    "type": "사건",
    "kind": "detail",
    "title": "자치 단체장까지 선출하는 지방 자치제가 전면 시행되었다...",
    "description": "자치 단체장까지 선출하는 지방 자치제가 전면 시행되었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "75회 심화 Q47 X"
  },
  {
    "id": "75회_q47_1069",
    "type": "사건",
    "kind": "detail",
    "title": "긴급 조치 철폐 등을 요구하는 3·1 민주 구국 선언이...",
    "description": "긴급 조치 철폐 등을 요구하는 3·1 민주 구국 선언이 발표되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "75회 심화 Q47 O"
  },
  {
    "id": "75회_q48_1070",
    "type": "사건",
    "kind": "detail",
    "title": "유신 체제 붕괴의 배경이 되었다.",
    "description": "유신 체제 붕괴의 배경이 되었다.",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "부마민주항쟁"
    ],
    "_src": "75회 심화 Q48 X"
  },
  {
    "id": "75회_q48_1071",
    "type": "사건",
    "kind": "detail",
    "title": "당시 대통령이 하야하는 결과를 가져왔다.",
    "description": "당시 대통령이 하야하는 결과를 가져왔다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "75회 심화 Q48 X"
  },
  {
    "id": "75회_q48_1072",
    "type": "사건",
    "kind": "detail",
    "title": "5년 단임의 대통령 직선제 개헌을 이끌어냈다.",
    "description": "5년 단임의 대통령 직선제 개헌을 이끌어냈다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "75회 심화 Q48 O"
  },
  {
    "id": "75회_q48_1073",
    "type": "사건",
    "kind": "detail",
    "title": "시위 과정에서 시민군이 자발적으로 조직되었다.",
    "description": "시위 과정에서 시민군이 자발적으로 조직되었다.",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "5·18 광주민주화운동"
    ],
    "_src": "75회 심화 Q48 X"
  },
  {
    "id": "75회_q48_1074",
    "type": "사건",
    "kind": "detail",
    "title": "굴욕적인 한일 국교 정상화에 반대하여 일어났다.",
    "description": "굴욕적인 한일 국교 정상화에 반대하여 일어났다.",
    "startYear": 1964,
    "endYear": 1964,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6·3 시위"
    ],
    "_src": "75회 심화 Q48 X"
  },
  {
    "id": "75회_q49_1075",
    "type": "사건",
    "kind": "detail",
    "title": "칠레와의 자유 무역 협정(FTA)이 체결되었다.",
    "description": "칠레와의 자유 무역 협정(FTA)이 체결되었다.",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "75회 심화 Q49 X"
  },
  {
    "id": "75회_q49_1076",
    "type": "사건",
    "kind": "detail",
    "title": "처음으로 연간 수출액 100억 달러가 달성되었다.",
    "description": "처음으로 연간 수출액 100억 달러가 달성되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "75회 심화 Q49 X"
  },
  {
    "id": "75회_q49_1077",
    "type": "사건",
    "kind": "detail",
    "title": "서울과 평양에서 7·4 남북 공동 성명이 발표되었다.",
    "description": "서울과 평양에서 7·4 남북 공동 성명이 발표되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "75회 심화 Q49 X"
  },
  {
    "id": "75회_q49_1078",
    "type": "사건",
    "kind": "detail",
    "title": "북방 외교를 추진하여 사회주의 국가인 소련과 수교하였다...",
    "description": "북방 외교를 추진하여 사회주의 국가인 소련과 수교하였다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "75회 심화 Q49 X"
  },
  {
    "id": "75회_q49_1079",
    "type": "사건",
    "kind": "detail",
    "title": "거창 사건 등 관련자의 명예 회복에 관한 특별 조치법이...",
    "description": "거창 사건 등 관련자의 명예 회복에 관한 특별 조치법이 제정되었다.",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "75회 심화 Q49 O"
  },
  {
    "id": "75회_q50_1080",
    "type": "사건",
    "kind": "detail",
    "title": "원종과 애노가 봉기한 곳을 검색한다.",
    "description": "원종과 애노가 봉기한 곳을 검색한다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "75회 심화 Q50 X"
  },
  {
    "id": "75회_q50_1081",
    "type": "사건",
    "kind": "detail",
    "title": "외규장각 도서의 약탈 과정을 조사한다.",
    "description": "외규장각 도서의 약탈 과정을 조사한다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "병인양요"
    ],
    "_src": "75회 심화 Q50 X"
  },
  {
    "id": "75회_q50_1082",
    "type": "사건",
    "kind": "detail",
    "title": "강주룡이 고공 시위를 전개한 장소를 알아본다.",
    "description": "강주룡이 고공 시위를 전개한 장소를 알아본다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "75회 심화 Q50 X"
  },
  {
    "id": "75회_q50_1083",
    "type": "사건",
    "kind": "detail",
    "title": "김만덕이 흉년에 굶주린 백성을 구제한 기록을 살펴본다.",
    "description": "김만덕이 흉년에 굶주린 백성을 구제한 기록을 살펴본다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "75회 심화 Q50 O"
  },
  {
    "id": "75회_q50_1084",
    "type": "사건",
    "kind": "detail",
    "title": "러시아의 남하를 견제한다는 구실로 영국군이 점령한 지역...",
    "description": "러시아의 남하를 견제한다는 구실로 영국군이 점령한 지역을 찾아본다.",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "거문도 사건"
    ],
    "_src": "75회 심화 Q50 X"
  },
  {
    "id": "74회_q1_1085",
    "type": "사건",
    "kind": "detail",
    "title": "목책과 환호 등 방어 시설을 갖추었다.",
    "description": "목책과 환호 등 방어 시설을 갖추었다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "74회 심화 Q1 X"
  },
  {
    "id": "74회_q1_1086",
    "type": "사건",
    "kind": "detail",
    "title": "소를 이용한 깊이갈이가 일반화되었다.",
    "description": "소를 이용한 깊이갈이가 일반화되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "74회 심화 Q1 X"
  },
  {
    "id": "74회_q1_1087",
    "type": "사건",
    "kind": "detail",
    "title": "농경과 목축을 통해 식량을 생산하였다.",
    "description": "농경과 목축을 통해 식량을 생산하였다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "74회 심화 Q1 O"
  },
  {
    "id": "74회_q1_1088",
    "type": "사건",
    "kind": "detail",
    "title": "지배층의 무덤으로 고인돌을 축조하였다.",
    "description": "지배층의 무덤으로 고인돌을 축조하였다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "74회 심화 Q1 X"
  },
  {
    "id": "74회_q1_1089",
    "type": "사건",
    "kind": "detail",
    "title": "거푸집을 이용하여 세형 동검을 제작하였다.",
    "description": "거푸집을 이용하여 세형 동검을 제작하였다.",
    "startYear": -500,
    "endYear": 0,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "철기 시대"
    ],
    "_src": "74회 심화 Q1 X"
  },
  {
    "id": "74회_q2_1090",
    "type": "사건",
    "kind": "detail",
    "title": "여러 가(加)들이 사출도를 다스렸다.",
    "description": "여러 가(加)들이 사출도를 다스렸다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "74회 심화 Q2 X"
  },
  {
    "id": "74회_q2_1091",
    "type": "사건",
    "kind": "detail",
    "title": "동맹이라는 제천 행사를 개최하였다.",
    "description": "동맹이라는 제천 행사를 개최하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "74회 심화 Q2 X"
  },
  {
    "id": "74회_q2_1092",
    "type": "사건",
    "kind": "detail",
    "title": "민며느리제라는 혼인 풍습이 있었다.",
    "description": "민며느리제라는 혼인 풍습이 있었다.",
    "startYear": -200,
    "endYear": 285,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "옥저"
    ],
    "_src": "74회 심화 Q2 X"
  },
  {
    "id": "74회_q2_1093",
    "type": "사건",
    "kind": "detail",
    "title": "읍락 간의 경계를 중시하는 책화가 있었다.",
    "description": "읍락 간의 경계를 중시하는 책화가 있었다.",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "동예"
    ],
    "_src": "74회 심화 Q2 X"
  },
  {
    "id": "74회_q2_1094",
    "type": "사건",
    "kind": "detail",
    "title": "왕 아래 상 대부 장군 등의 관직을 두었다.",
    "description": "왕 아래 상 대부 장군 등의 관직을 두었다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "74회 심화 Q2 O"
  },
  {
    "id": "74회_q3_1095",
    "type": "사건",
    "kind": "detail",
    "title": "녹과전을 지급받는 관리",
    "description": "녹과전을 지급받는 관리",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "74회 심화 Q3 X"
  },
  {
    "id": "74회_q3_1096",
    "type": "사건",
    "kind": "detail",
    "title": "경당에서 수련하는 청년",
    "description": "경당에서 수련하는 청년",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "74회 심화 Q3 O"
  },
  {
    "id": "74회_q3_1097",
    "type": "사건",
    "kind": "detail",
    "title": "팔만대장경판을 만드는 장인",
    "description": "팔만대장경판을 만드는 장인",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "74회 심화 Q3 X"
  },
  {
    "id": "74회_q3_1098",
    "type": "사건",
    "kind": "detail",
    "title": "지방의 22담로에 파견되는 왕족",
    "description": "지방의 22담로에 파견되는 왕족",
    "startYear": 501,
    "endYear": 523,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무령왕"
    ],
    "_src": "74회 심화 Q3 X"
  },
  {
    "id": "74회_q3_1099",
    "type": "사건",
    "kind": "detail",
    "title": "황룡사 구층 목탑의 축조를 건의하는 승려",
    "description": "황룡사 구층 목탑의 축조를 건의하는 승려",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 선덕여왕"
    ],
    "_src": "74회 심화 Q3 X"
  },
  {
    "id": "74회_q4_1100",
    "type": "사건",
    "kind": "detail",
    "title": "백제가 국호를 남부여로 고쳤다.",
    "description": "백제가 국호를 남부여로 고쳤다.",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "백제 성왕"
    ],
    "_src": "74회 심화 Q4 X"
  },
  {
    "id": "74회_q4_1101",
    "type": "사건",
    "kind": "detail",
    "title": "진흥왕이 대가야를 공격하여 복속시켰다.",
    "description": "진흥왕이 대가야를 공격하여 복속시켰다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "74회 심화 Q4 O"
  },
  {
    "id": "74회_q4_1102",
    "type": "사건",
    "kind": "detail",
    "title": "계백이 이끈 결사대가 황산벌에서 패배하였다.",
    "description": "계백이 이끈 결사대가 황산벌에서 패배하였다.",
    "startYear": 660,
    "endYear": 660,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "황산벌 전투"
    ],
    "_src": "74회 심화 Q4 X"
  },
  {
    "id": "74회_q4_1103",
    "type": "사건",
    "kind": "detail",
    "title": "김춘추가 당으로 건너가 군사 동맹을 체결하였다.",
    "description": "김춘추가 당으로 건너가 군사 동맹을 체결하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "74회 심화 Q4 X"
  },
  {
    "id": "74회_q4_1104",
    "type": "사건",
    "kind": "detail",
    "title": "신라가 한강 하류를 차지하여 신주를 설치하였다.",
    "description": "신라가 한강 하류를 차지하여 신주를 설치하였다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "74회 심화 Q4 X"
  },
  {
    "id": "74회_q5_1105",
    "type": "사건",
    "kind": "detail",
    "title": "일길찬 사찬 등의 관등이 있었다.",
    "description": "일길찬 사찬 등의 관등이 있었다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "74회 심화 Q5 X"
  },
  {
    "id": "74회_q5_1106",
    "type": "사건",
    "kind": "detail",
    "title": "지방 장관으로 욕살 처려근지 등이 있었다.",
    "description": "지방 장관으로 욕살 처려근지 등이 있었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "74회 심화 Q5 X"
  },
  {
    "id": "74회_q5_1107",
    "type": "사건",
    "kind": "detail",
    "title": "특산물로 단궁 과하마 반어피가 유명하였다.",
    "description": "특산물로 단궁 과하마 반어피가 유명하였다.",
    "startYear": -200,
    "endYear": 313,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "동예"
    ],
    "_src": "74회 심화 Q5 X"
  },
  {
    "id": "74회_q5_1108",
    "type": "사건",
    "kind": "detail",
    "title": "사회 질서를 유지하기 위해 범금 8조를 두었다.",
    "description": "사회 질서를 유지하기 위해 범금 8조를 두었다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "74회 심화 Q5 X"
  },
  {
    "id": "74회_q5_1109",
    "type": "사건",
    "kind": "detail",
    "title": "왕족인 부여씨와 8성 귀족이 지배층을 이루었다.",
    "description": "왕족인 부여씨와 8성 귀족이 지배층을 이루었다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "74회 심화 Q5 O"
  },
  {
    "id": "74회_q6_1110",
    "type": "사건",
    "kind": "detail",
    "title": "이사부를 보내 우산국을 복속하였다.",
    "description": "이사부를 보내 우산국을 복속하였다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "74회 심화 Q6 X"
  },
  {
    "id": "74회_q6_1111",
    "type": "사건",
    "kind": "detail",
    "title": "건원이라는 독자적 연호를 사용하였다.",
    "description": "건원이라는 독자적 연호를 사용하였다.",
    "startYear": 514,
    "endYear": 540,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 법흥왕"
    ],
    "_src": "74회 심화 Q6 X"
  },
  {
    "id": "74회_q6_1112",
    "type": "사건",
    "kind": "detail",
    "title": "관료전을 지급하고 녹읍을 폐지하였다.",
    "description": "관료전을 지급하고 녹읍을 폐지하였다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "74회 심화 Q6 X"
  },
  {
    "id": "74회_q6_1113",
    "type": "사건",
    "kind": "detail",
    "title": "거칠부에게 명하여 국사를 편찬하였다.",
    "description": "거칠부에게 명하여 국사를 편찬하였다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "74회 심화 Q6 X"
  },
  {
    "id": "74회_q6_1114",
    "type": "사건",
    "kind": "detail",
    "title": "지방관을 감찰하고자 외사정을 파견하였다.",
    "description": "지방관을 감찰하고자 외사정을 파견하였다.",
    "startYear": 661,
    "endYear": 681,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 문무왕"
    ],
    "_src": "74회 심화 Q6 O"
  },
  {
    "id": "74회_q7_1115",
    "type": "사건",
    "kind": "detail",
    "title": "왜에 칠지도를 만들어 보냈다.",
    "description": "왜에 칠지도를 만들어 보냈다.",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 근초고왕"
    ],
    "_src": "74회 심화 Q7 X"
  },
  {
    "id": "74회_q7_1116",
    "type": "사건",
    "kind": "detail",
    "title": "9서당 10정의 군사 조직을 운영하였다.",
    "description": "9서당 10정의 군사 조직을 운영하였다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "74회 심화 Q7 X"
  },
  {
    "id": "74회_q7_1117",
    "type": "사건",
    "kind": "detail",
    "title": "광평성을 비롯한 각종 정치 기구를 마련하였다.",
    "description": "광평성을 비롯한 각종 정치 기구를 마련하였다.",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "74회 심화 Q7 X"
  },
  {
    "id": "74회_q7_1118",
    "type": "사건",
    "kind": "detail",
    "title": "제사장인 천군과 신성 지역인 소도가 존재하였다.",
    "description": "제사장인 천군과 신성 지역인 소도가 존재하였다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "74회 심화 Q7 X"
  },
  {
    "id": "74회_q7_1119",
    "type": "사건",
    "kind": "detail",
    "title": "서적 관리 주요 문서 작성 등을 위해 문적원을 두었다.",
    "description": "서적 관리 주요 문서 작성 등을 위해 문적원을 두었다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "74회 심화 Q7 O"
  },
  {
    "id": "74회_q8_1120",
    "type": "사건",
    "kind": "detail",
    "title": "하늘에 제사 지내는 초제를 거행하였다.",
    "description": "하늘에 제사 지내는 초제를 거행하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "74회 심화 Q8 X"
  },
  {
    "id": "74회_q8_1121",
    "type": "사건",
    "kind": "detail",
    "title": "참선과 수행을 통한 깨달음을 강조하였다.",
    "description": "참선과 수행을 통한 깨달음을 강조하였다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "74회 심화 Q8 O"
  },
  {
    "id": "74회_q8_1122",
    "type": "사건",
    "kind": "detail",
    "title": "시경 서경 역경 등을 주요 경전으로 삼았다.",
    "description": "시경 서경 역경 등을 주요 경전으로 삼았다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "74회 심화 Q8 X"
  },
  {
    "id": "74회_q8_1123",
    "type": "사건",
    "kind": "detail",
    "title": "신선 사상을 기반으로 불로장생을 추구하였다.",
    "description": "신선 사상을 기반으로 불로장생을 추구하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "74회 심화 Q8 X"
  },
  {
    "id": "74회_q8_1124",
    "type": "사건",
    "kind": "detail",
    "title": "인내천 사상을 내세워 인간 평등을 주장하였다.",
    "description": "인내천 사상을 내세워 인간 평등을 주장하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "74회 심화 Q8 X"
  },
  {
    "id": "74회_q9_1125",
    "type": "사건",
    "kind": "detail",
    "title": "화왕계를 지어 국왕에게 바치다",
    "description": "화왕계를 지어 국왕에게 바치다",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "74회 심화 Q9 X"
  },
  {
    "id": "74회_q9_1126",
    "type": "사건",
    "kind": "detail",
    "title": "산둥반도에 적산 법화원을 창건하다",
    "description": "산둥반도에 적산 법화원을 창건하다",
    "startYear": 787,
    "endYear": 846,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "장보고"
    ],
    "_src": "74회 심화 Q9 O"
  },
  {
    "id": "74회_q9_1127",
    "type": "사건",
    "kind": "detail",
    "title": "외교 문서인 청방인문표를 작성하다",
    "description": "외교 문서인 청방인문표를 작성하다",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "74회 심화 Q9 X"
  },
  {
    "id": "74회_q9_1128",
    "type": "사건",
    "kind": "detail",
    "title": "격황소서를 지어 세상에 이름을 떨치다",
    "description": "격황소서를 지어 세상에 이름을 떨치다",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "74회 심화 Q9 X"
  },
  {
    "id": "74회_q9_1129",
    "type": "사건",
    "kind": "detail",
    "title": "구법순례기인 왕오천축국전을 저술하다",
    "description": "구법순례기인 왕오천축국전을 저술하다",
    "startYear": 704,
    "endYear": 787,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "혜초"
    ],
    "_src": "74회 심화 Q9 X"
  },
  {
    "id": "74회_q10_1130",
    "type": "사건",
    "kind": "detail",
    "title": "안승이 보덕국왕으로 임명되었다.",
    "description": "안승이 보덕국왕으로 임명되었다.",
    "startYear": 661,
    "endYear": 681,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 문무왕"
    ],
    "_src": "74회 심화 Q10 X"
  },
  {
    "id": "74회_q10_1131",
    "type": "사건",
    "kind": "detail",
    "title": "신숭겸이 공산 전투에서 전사하였다.",
    "description": "신숭겸이 공산 전투에서 전사하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "74회 심화 Q10 X"
  },
  {
    "id": "74회_q10_1132",
    "type": "사건",
    "kind": "detail",
    "title": "원종과 애노가 사벌주에서 반란을 일으켰다.",
    "description": "원종과 애노가 사벌주에서 반란을 일으켰다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "74회 심화 Q10 X"
  },
  {
    "id": "74회_q10_1133",
    "type": "사건",
    "kind": "detail",
    "title": "왕건이 일리천에서 신검의 군대를 물리쳤다.",
    "description": "왕건이 일리천에서 신검의 군대를 물리쳤다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "74회 심화 Q10 O"
  },
  {
    "id": "74회_q10_1134",
    "type": "사건",
    "kind": "detail",
    "title": "견훤이 고창 전투에서 고려군에게 패배하였다.",
    "description": "견훤이 고창 전투에서 고려군에게 패배하였다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "74회 심화 Q10 X"
  },
  {
    "id": "74회_q11_1135",
    "type": "사건",
    "kind": "detail",
    "title": "폐정 개혁을 목표로 정치도감을 설치하였다.",
    "description": "폐정 개혁을 목표로 정치도감을 설치하였다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "74회 심화 Q11 X"
  },
  {
    "id": "74회_q11_1136",
    "type": "사건",
    "kind": "detail",
    "title": "광덕 준풍이라는 독자적 연호를 사용하였다.",
    "description": "광덕 준풍이라는 독자적 연호를 사용하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "74회 심화 Q11 O"
  },
  {
    "id": "74회_q11_1137",
    "type": "사건",
    "kind": "detail",
    "title": "예의상정소에서 상정고금예문을 편찬하였다.",
    "description": "예의상정소에서 상정고금예문을 편찬하였다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "74회 심화 Q11 X"
  },
  {
    "id": "74회_q11_1138",
    "type": "사건",
    "kind": "detail",
    "title": "전국에 12목을 설치하고 지방관을 파견하였다.",
    "description": "전국에 12목을 설치하고 지방관을 파견하였다.",
    "startYear": 981,
    "endYear": 997,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 성종"
    ],
    "_src": "74회 심화 Q11 X"
  },
  {
    "id": "74회_q11_1139",
    "type": "사건",
    "kind": "detail",
    "title": "관리에게 등급에 따라 전지와 시지를 지급하였다.",
    "description": "관리에게 등급에 따라 전지와 시지를 지급하였다.",
    "startYear": 976,
    "endYear": 1391,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "전시과"
    ],
    "_src": "74회 심화 Q11 X"
  },
  {
    "id": "74회_q12_1140",
    "type": "사건",
    "kind": "detail",
    "title": "묘청이 칭제 건원을 주장하였다.",
    "description": "묘청이 칭제 건원을 주장하였다.",
    "startYear": 1126,
    "endYear": 1136,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "이자겸/묘청"
    ],
    "_src": "74회 심화 Q12 X"
  },
  {
    "id": "74회_q12_1141",
    "type": "사건",
    "kind": "detail",
    "title": "강감찬이 흥화진 전투에서 승리하였다.",
    "description": "강감찬이 흥화진 전투에서 승리하였다.",
    "startYear": 1010,
    "endYear": 1011,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "거란 2차 침입"
    ],
    "_src": "74회 심화 Q12 X"
  },
  {
    "id": "74회_q12_1142",
    "type": "사건",
    "kind": "detail",
    "title": "서희의 활약으로 강동 6주를 획득하였다.",
    "description": "서희의 활약으로 강동 6주를 획득하였다.",
    "startYear": 942,
    "endYear": 998,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "서희"
    ],
    "_src": "74회 심화 Q12 O"
  },
  {
    "id": "74회_q12_1143",
    "type": "사건",
    "kind": "detail",
    "title": "최우가 강화도로 도읍을 옮겨 항전하였다.",
    "description": "최우가 강화도로 도읍을 옮겨 항전하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "74회 심화 Q12 X"
  },
  {
    "id": "74회_q12_1144",
    "type": "사건",
    "kind": "detail",
    "title": "윤관이 별무반을 이끌고 동북 9성을 개척하였다.",
    "description": "윤관이 별무반을 이끌고 동북 9성을 개척하였다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "74회 심화 Q12 X"
  },
  {
    "id": "74회_q15_1145",
    "type": "사건",
    "kind": "detail",
    "title": "서얼이 통청 운동을 전개하였다.",
    "description": "서얼이 통청 운동을 전개하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q15 X"
  },
  {
    "id": "74회_q15_1146",
    "type": "사건",
    "kind": "detail",
    "title": "사창절목에 따라 사창제가 시행되었다.",
    "description": "사창절목에 따라 사창제가 시행되었다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "74회 심화 Q15 X"
  },
  {
    "id": "74회_q15_1147",
    "type": "사건",
    "kind": "detail",
    "title": "왕조 교체를 예언하는 정감록이 유포되었다.",
    "description": "왕조 교체를 예언하는 정감록이 유포되었다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q15 X"
  },
  {
    "id": "74회_q15_1148",
    "type": "사건",
    "kind": "detail",
    "title": "병자에게 약을 지급하는 혜민국이 설치되었다.",
    "description": "병자에게 약을 지급하는 혜민국이 설치되었다.",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 예종"
    ],
    "_src": "74회 심화 Q15 O"
  },
  {
    "id": "74회_q15_1149",
    "type": "사건",
    "kind": "detail",
    "title": "국산 약재와 치료 방법을 정리한 향약집성방이 간행되었다...",
    "description": "국산 약재와 치료 방법을 정리한 향약집성방이 간행되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "74회 심화 Q15 X"
  },
  {
    "id": "74회_q16_1150",
    "type": "사건",
    "kind": "detail",
    "title": "법화 신앙에 중점을 둔 백련 결사를 이끌었다.",
    "description": "법화 신앙에 중점을 둔 백련 결사를 이끌었다.",
    "startYear": 1163,
    "endYear": 1245,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "요세"
    ],
    "_src": "74회 심화 Q16 X"
  },
  {
    "id": "74회_q16_1151",
    "type": "사건",
    "kind": "detail",
    "title": "돈오점수를 바탕으로 꾸준한 수행을 강조하였다.",
    "description": "돈오점수를 바탕으로 꾸준한 수행을 강조하였다.",
    "startYear": 1158,
    "endYear": 1210,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "지눌"
    ],
    "_src": "74회 심화 Q16 O"
  },
  {
    "id": "74회_q16_1152",
    "type": "사건",
    "kind": "detail",
    "title": "승려들의 전기를 기록한 해동고승전을 저술하였다.",
    "description": "승려들의 전기를 기록한 해동고승전을 저술하였다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "74회 심화 Q16 X"
  },
  {
    "id": "74회_q16_1153",
    "type": "사건",
    "kind": "detail",
    "title": "선문염송집을 편찬하고 유불 일치설을 주장하였다.",
    "description": "선문염송집을 편찬하고 유불 일치설을 주장하였다.",
    "startYear": 1178,
    "endYear": 1234,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "혜심"
    ],
    "_src": "74회 심화 Q16 X"
  },
  {
    "id": "74회_q16_1154",
    "type": "사건",
    "kind": "detail",
    "title": "성상융회를 제창하여 교종 내 대립을 해소하고자 하였다.",
    "description": "성상융회를 제창하여 교종 내 대립을 해소하고자 하였다.",
    "startYear": 923,
    "endYear": 973,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "균여"
    ],
    "_src": "74회 심화 Q16 X"
  },
  {
    "id": "74회_q17_1155",
    "type": "사건",
    "kind": "detail",
    "title": "농상집요를 소개하는 관리",
    "description": "농상집요를 소개하는 관리",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "74회 심화 Q17 O"
  },
  {
    "id": "74회_q17_1156",
    "type": "사건",
    "kind": "detail",
    "title": "흑창에서 곡식을 빌리는 농민",
    "description": "흑창에서 곡식을 빌리는 농민",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "74회 심화 Q17 X"
  },
  {
    "id": "74회_q17_1157",
    "type": "사건",
    "kind": "detail",
    "title": "사섬서에서 저화를 발행하는 장인",
    "description": "사섬서에서 저화를 발행하는 장인",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "74회 심화 Q17 X"
  },
  {
    "id": "74회_q17_1158",
    "type": "사건",
    "kind": "detail",
    "title": "선혜청에서 공가(貢價)를 받는 상인",
    "description": "선혜청에서 공가(貢價)를 받는 상인",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "74회 심화 Q17 X"
  },
  {
    "id": "74회_q17_1159",
    "type": "사건",
    "kind": "detail",
    "title": "상평통보로 물건을 거래하는 보부상",
    "description": "상평통보로 물건을 거래하는 보부상",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q17 X"
  },
  {
    "id": "74회_q20_1160",
    "type": "사건",
    "kind": "detail",
    "title": "간경도감이 설치되었다.",
    "description": "간경도감이 설치되었다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "74회 심화 Q20 O"
  },
  {
    "id": "74회_q20_1161",
    "type": "사건",
    "kind": "detail",
    "title": "조선경국전이 편찬되었다.",
    "description": "조선경국전이 편찬되었다.",
    "startYear": 1342,
    "endYear": 1398,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정도전"
    ],
    "_src": "74회 심화 Q20 X"
  },
  {
    "id": "74회_q20_1162",
    "type": "사건",
    "kind": "detail",
    "title": "국조오례의가 완성되었다.",
    "description": "국조오례의가 완성되었다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "74회 심화 Q20 X"
  },
  {
    "id": "74회_q20_1163",
    "type": "사건",
    "kind": "detail",
    "title": "부민고소금지법이 제정되었다.",
    "description": "부민고소금지법이 제정되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "74회 심화 Q20 X"
  },
  {
    "id": "74회_q20_1164",
    "type": "사건",
    "kind": "detail",
    "title": "혼일강리역대국도지도가 제작되었다.",
    "description": "혼일강리역대국도지도가 제작되었다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "74회 심화 Q20 X"
  },
  {
    "id": "74회_q21_1165",
    "type": "사건",
    "kind": "detail",
    "title": "신숙주가 일본에 다녀와 해동제국기를 저술하였다.",
    "description": "신숙주가 일본에 다녀와 해동제국기를 저술하였다.",
    "startYear": 1417,
    "endYear": 1475,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 신숙주"
    ],
    "_src": "74회 심화 Q21 X"
  },
  {
    "id": "74회_q21_1166",
    "type": "사건",
    "kind": "detail",
    "title": "나세 등이 화포를 사용하여 진포에서 왜구를 격퇴하였다.",
    "description": "나세 등이 화포를 사용하여 진포에서 왜구를 격퇴하였다.",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "화통도감"
    ],
    "_src": "74회 심화 Q21 X"
  },
  {
    "id": "74회_q21_1167",
    "type": "사건",
    "kind": "detail",
    "title": "포로 송환을 목적으로 회답겸쇄환사가 일본에 파견되었다.",
    "description": "포로 송환을 목적으로 회답겸쇄환사가 일본에 파견되었다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "74회 심화 Q21 O"
  },
  {
    "id": "74회_q21_1168",
    "type": "사건",
    "kind": "detail",
    "title": "조선 정부의 교역 제한에 반발하여 사량진 왜변이 일어났...",
    "description": "조선 정부의 교역 제한에 반발하여 사량진 왜변이 일어났다.",
    "startYear": 1545,
    "endYear": 1567,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 명종"
    ],
    "_src": "74회 심화 Q21 X"
  },
  {
    "id": "74회_q21_1169",
    "type": "사건",
    "kind": "detail",
    "title": "국방 문제를 논의하기 위한 임시 기구로 비변사가 설치되...",
    "description": "국방 문제를 논의하기 위한 임시 기구로 비변사가 설치되었다.",
    "startYear": 1517,
    "endYear": 1865,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "비변사"
    ],
    "_src": "74회 심화 Q21 X"
  },
  {
    "id": "74회_q22_1170",
    "type": "사건",
    "kind": "detail",
    "title": "인조반정으로 북인 세력이 몰락하였다.",
    "description": "인조반정으로 북인 세력이 몰락하였다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "74회 심화 Q22 X"
  },
  {
    "id": "74회_q22_1171",
    "type": "사건",
    "kind": "detail",
    "title": "기축옥사로 이발 등 동인 세력이 축출되었다.",
    "description": "기축옥사로 이발 등 동인 세력이 축출되었다.",
    "startYear": 1589,
    "endYear": 1589,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "기축옥사"
    ],
    "_src": "74회 심화 Q22 X"
  },
  {
    "id": "74회_q22_1172",
    "type": "사건",
    "kind": "detail",
    "title": "양재역 벽서 사건으로 이언적 등이 화를 입었다.",
    "description": "양재역 벽서 사건으로 이언적 등이 화를 입었다.",
    "startYear": 1545,
    "endYear": 1567,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 명종"
    ],
    "_src": "74회 심화 Q22 X"
  },
  {
    "id": "74회_q22_1173",
    "type": "사건",
    "kind": "detail",
    "title": "인현 왕후가 폐위되고 남인이 권력을 차지하였다.",
    "description": "인현 왕후가 폐위되고 남인이 권력을 차지하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "74회 심화 Q22 O"
  },
  {
    "id": "74회_q22_1174",
    "type": "사건",
    "kind": "detail",
    "title": "붕당의 폐해를 경계하기 위해 탕평비가 건립되었다.",
    "description": "붕당의 폐해를 경계하기 위해 탕평비가 건립되었다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "74회 심화 Q22 X"
  },
  {
    "id": "74회_q23_1175",
    "type": "사건",
    "kind": "detail",
    "title": "최초의 서원인 백운동 서원을 건립하였다.",
    "description": "최초의 서원인 백운동 서원을 건립하였다.",
    "startYear": 1495,
    "endYear": 1554,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "주세붕"
    ],
    "_src": "74회 심화 Q23 X"
  },
  {
    "id": "74회_q23_1176",
    "type": "사건",
    "kind": "detail",
    "title": "명에 대한 의리를 내세운 기축봉사를 올렸다.",
    "description": "명에 대한 의리를 내세운 기축봉사를 올렸다.",
    "startYear": 1607,
    "endYear": 1689,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "송시열"
    ],
    "_src": "74회 심화 Q23 X"
  },
  {
    "id": "74회_q23_1177",
    "type": "사건",
    "kind": "detail",
    "title": "동호문답을 통해 다양한 개혁 방안을 제시하였다.",
    "description": "동호문답을 통해 다양한 개혁 방안을 제시하였다.",
    "startYear": 1536,
    "endYear": 1584,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이이"
    ],
    "_src": "74회 심화 Q23 X"
  },
  {
    "id": "74회_q23_1178",
    "type": "사건",
    "kind": "detail",
    "title": "예안 향약을 시행하여 향촌의 교화를 위해 노력하였다.",
    "description": "예안 향약을 시행하여 향촌의 교화를 위해 노력하였다.",
    "startYear": 1501,
    "endYear": 1570,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이황"
    ],
    "_src": "74회 심화 Q23 O"
  },
  {
    "id": "74회_q23_1179",
    "type": "사건",
    "kind": "detail",
    "title": "예학을 조선의 현실에 맞게 정리한 가례집람을 저술하였다...",
    "description": "예학을 조선의 현실에 맞게 정리한 가례집람을 저술하였다.",
    "startYear": 1548,
    "endYear": 1631,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "김장생"
    ],
    "_src": "74회 심화 Q23 X"
  },
  {
    "id": "74회_q24_1180",
    "type": "사건",
    "kind": "detail",
    "title": "나선 정벌에 조총 부대를 파견하였다.",
    "description": "나선 정벌에 조총 부대를 파견하였다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "74회 심화 Q24 X"
  },
  {
    "id": "74회_q24_1181",
    "type": "사건",
    "kind": "detail",
    "title": "호포제를 시행하여 양반에게도 군포를 징수하였다.",
    "description": "호포제를 시행하여 양반에게도 군포를 징수하였다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "74회 심화 Q24 X"
  },
  {
    "id": "74회_q24_1182",
    "type": "사건",
    "kind": "detail",
    "title": "문신을 재교육하기 위한 초계문신제를 실시하였다.",
    "description": "문신을 재교육하기 위한 초계문신제를 실시하였다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "74회 심화 Q24 O"
  },
  {
    "id": "74회_q24_1183",
    "type": "사건",
    "kind": "detail",
    "title": "삼정의 문란을 시정하고자 삼정이정청을 설치하였다.",
    "description": "삼정의 문란을 시정하고자 삼정이정청을 설치하였다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "74회 심화 Q24 X"
  },
  {
    "id": "74회_q24_1184",
    "type": "사건",
    "kind": "detail",
    "title": "각 궁방과 중앙 관서의 공노비 6만여 명을 해방하였다.",
    "description": "각 궁방과 중앙 관서의 공노비 6만여 명을 해방하였다.",
    "startYear": 1800,
    "endYear": 1834,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 순조"
    ],
    "_src": "74회 심화 Q24 X"
  },
  {
    "id": "74회_q25_1185",
    "type": "사건",
    "kind": "detail",
    "title": "한성 조약이 체결되는 결과를 가져왔다.",
    "description": "한성 조약이 체결되는 결과를 가져왔다.",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "갑신정변"
    ],
    "_src": "74회 심화 Q25 X"
  },
  {
    "id": "74회_q25_1186",
    "type": "사건",
    "kind": "detail",
    "title": "정부의 요청으로 출병한 청군이 진압하였다.",
    "description": "정부의 요청으로 출병한 청군이 진압하였다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "임오군란"
    ],
    "_src": "74회 심화 Q25 X"
  },
  {
    "id": "74회_q25_1187",
    "type": "사건",
    "kind": "detail",
    "title": "사태의 수습을 위해 박규수가 안핵사로 파견되었다.",
    "description": "사태의 수습을 위해 박규수가 안핵사로 파견되었다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "74회 심화 Q25 X"
  },
  {
    "id": "74회_q25_1188",
    "type": "사건",
    "kind": "detail",
    "title": "이필제가 영해 지역에서 난을 일으키는 계기가 되었다.",
    "description": "이필제가 영해 지역에서 난을 일으키는 계기가 되었다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "74회 심화 Q25 X"
  },
  {
    "id": "74회_q25_1189",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 이승훈 정약용 등이 연루되어 처벌되었다.",
    "description": "전개 과정에서 이승훈 정약용 등이 연루되어 처벌되었다.",
    "startYear": 1801,
    "endYear": 1801,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "신유박해"
    ],
    "_src": "74회 심화 Q25 O"
  },
  {
    "id": "74회_q26_1190",
    "type": "사건",
    "kind": "detail",
    "title": "판소리 흥보가를 구경하는 농민",
    "description": "판소리 흥보가를 구경하는 농민",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q26 X"
  },
  {
    "id": "74회_q26_1191",
    "type": "사건",
    "kind": "detail",
    "title": "주자소에서 계미자를 만드는 장인",
    "description": "주자소에서 계미자를 만드는 장인",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "74회 심화 Q26 O"
  },
  {
    "id": "74회_q26_1192",
    "type": "사건",
    "kind": "detail",
    "title": "옥계 시사에서 시를 낭송하는 중인",
    "description": "옥계 시사에서 시를 낭송하는 중인",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q26 X"
  },
  {
    "id": "74회_q26_1193",
    "type": "사건",
    "kind": "detail",
    "title": "세책가에서 춘향전을 빌리는 부자",
    "description": "세책가에서 춘향전을 빌리는 부자",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q26 X"
  },
  {
    "id": "74회_q26_1194",
    "type": "사건",
    "kind": "detail",
    "title": "호랑이를 소재로 민화를 그리는 화가",
    "description": "호랑이를 소재로 민화를 그리는 화가",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q26 X"
  },
  {
    "id": "74회_q27_1195",
    "type": "사건",
    "kind": "detail",
    "title": "백성에게 정전이 지급되었다.",
    "description": "백성에게 정전이 지급되었다.",
    "startYear": 676,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "통일신라"
    ],
    "_src": "74회 심화 Q27 X"
  },
  {
    "id": "74회_q27_1196",
    "type": "사건",
    "kind": "detail",
    "title": "초량 왜관을 통해 일본과 교역하였다.",
    "description": "초량 왜관을 통해 일본과 교역하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "74회 심화 Q27 O"
  },
  {
    "id": "74회_q27_1197",
    "type": "사건",
    "kind": "detail",
    "title": "주전도감에서 해동통보가 발행되었다.",
    "description": "주전도감에서 해동통보가 발행되었다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "74회 심화 Q27 X"
  },
  {
    "id": "74회_q27_1198",
    "type": "사건",
    "kind": "detail",
    "title": "벽란도가 국제 무역항으로 번성하였다.",
    "description": "벽란도가 국제 무역항으로 번성하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "74회 심화 Q27 X"
  },
  {
    "id": "74회_q27_1199",
    "type": "사건",
    "kind": "detail",
    "title": "시장을 관리하기 위한 동시전이 설치되었다.",
    "description": "시장을 관리하기 위한 동시전이 설치되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "74회 심화 Q27 X"
  },
  {
    "id": "74회_q28_1200",
    "type": "사건",
    "kind": "detail",
    "title": "한일 의정서의 체결 과정을 파악한다.",
    "description": "한일 의정서의 체결 과정을 파악한다.",
    "startYear": 1904,
    "endYear": 1905,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "러일전쟁"
    ],
    "_src": "74회 심화 Q28 X"
  },
  {
    "id": "74회_q28_1201",
    "type": "사건",
    "kind": "detail",
    "title": "미쓰야 협정이 끼친 영향을 조사한다.",
    "description": "미쓰야 협정이 끼친 영향을 조사한다.",
    "startYear": 1925,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "미쓰야 협정"
    ],
    "_src": "74회 심화 Q28 X"
  },
  {
    "id": "74회_q28_1202",
    "type": "사건",
    "kind": "detail",
    "title": "강화도 조약이 체결된 계기를 알아본다.",
    "description": "강화도 조약이 체결된 계기를 알아본다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "74회 심화 Q28 X"
  },
  {
    "id": "74회_q28_1203",
    "type": "사건",
    "kind": "detail",
    "title": "조미 수호 통상 조약의 내용을 분석한다.",
    "description": "조미 수호 통상 조약의 내용을 분석한다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "74회 심화 Q28 O"
  },
  {
    "id": "74회_q28_1204",
    "type": "사건",
    "kind": "detail",
    "title": "헤이그 특사가 파견되는 원인을 살펴본다.",
    "description": "헤이그 특사가 파견되는 원인을 살펴본다.",
    "startYear": 1907,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "헤이그 특사"
    ],
    "_src": "74회 심화 Q28 X"
  },
  {
    "id": "74회_q29_1205",
    "type": "사건",
    "kind": "detail",
    "title": "북학 사상을 바탕으로 통상 개화론을 주장하다",
    "description": "북학 사상을 바탕으로 통상 개화론을 주장하다",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "74회 심화 Q29 X"
  },
  {
    "id": "74회_q29_1206",
    "type": "사건",
    "kind": "detail",
    "title": "영남 만인소를 주도해 개항과 통상에 반대하다",
    "description": "영남 만인소를 주도해 개항과 통상에 반대하다",
    "startYear": 1880,
    "endYear": 1880,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선책략"
    ],
    "_src": "74회 심화 Q29 X"
  },
  {
    "id": "74회_q29_1207",
    "type": "사건",
    "kind": "detail",
    "title": "보빙사로 미국에 다녀와 개화 정책을 추진하다",
    "description": "보빙사로 미국에 다녀와 개화 정책을 추진하다",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "74회 심화 Q29 O"
  },
  {
    "id": "74회_q29_1208",
    "type": "사건",
    "kind": "detail",
    "title": "서유견문을 집필하여 서양 근대 문명을 소개하다",
    "description": "서유견문을 집필하여 서양 근대 문명을 소개하다",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "74회 심화 Q29 X"
  },
  {
    "id": "74회_q29_1209",
    "type": "사건",
    "kind": "detail",
    "title": "백정 출신으로 관민 공동회에서 연설하다",
    "description": "백정 출신으로 관민 공동회에서 연설하다",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "74회 심화 Q29 X"
  },
  {
    "id": "74회_q30_1210",
    "type": "사건",
    "kind": "detail",
    "title": "지계아문을 설치하여 지계를 발급하였다.",
    "description": "지계아문을 설치하여 지계를 발급하였다.",
    "startYear": 1897,
    "endYear": 1904,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광무개혁"
    ],
    "_src": "74회 심화 Q30 O"
  },
  {
    "id": "74회_q30_1211",
    "type": "사건",
    "kind": "detail",
    "title": "건양이라는 독자적인 연호를 채택하였다.",
    "description": "건양이라는 독자적인 연호를 채택하였다.",
    "startYear": 1895,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "을미개혁"
    ],
    "_src": "74회 심화 Q30 X"
  },
  {
    "id": "74회_q30_1212",
    "type": "사건",
    "kind": "detail",
    "title": "박문국을 설치하고 한성순보를 발행하였다.",
    "description": "박문국을 설치하고 한성순보를 발행하였다.",
    "startYear": 1883,
    "endYear": 1888,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박문국"
    ],
    "_src": "74회 심화 Q30 X"
  },
  {
    "id": "74회_q30_1213",
    "type": "사건",
    "kind": "detail",
    "title": "근대식 무기 제조 공장인 기기창을 설립하였다.",
    "description": "근대식 무기 제조 공장인 기기창을 설립하였다.",
    "startYear": 1883,
    "endYear": 1894,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "기기창"
    ],
    "_src": "74회 심화 Q30 X"
  },
  {
    "id": "74회_q30_1214",
    "type": "사건",
    "kind": "detail",
    "title": "개혁의 방향을 제시한 홍범 14조를 반포하였다.",
    "description": "개혁의 방향을 제시한 홍범 14조를 반포하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "74회 심화 Q30 X"
  },
  {
    "id": "74회_q31_1215",
    "type": "사건",
    "kind": "detail",
    "title": "삼국 간섭의 결과를 알아본다.",
    "description": "삼국 간섭의 결과를 알아본다.",
    "startYear": 1895,
    "endYear": 1895,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "삼국 간섭"
    ],
    "_src": "74회 심화 Q31 X"
  },
  {
    "id": "74회_q31_1216",
    "type": "사건",
    "kind": "detail",
    "title": "척화비가 건립된 계기를 조사한다.",
    "description": "척화비가 건립된 계기를 조사한다.",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "74회 심화 Q31 X"
  },
  {
    "id": "74회_q31_1217",
    "type": "사건",
    "kind": "detail",
    "title": "전주 화약이 체결되는 과정을 살펴본다.",
    "description": "전주 화약이 체결되는 과정을 살펴본다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "74회 심화 Q31 O"
  },
  {
    "id": "74회_q31_1218",
    "type": "사건",
    "kind": "detail",
    "title": "영국이 거문도를 점령한 목적을 분석한다.",
    "description": "영국이 거문도를 점령한 목적을 분석한다.",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "거문도 사건"
    ],
    "_src": "74회 심화 Q31 X"
  },
  {
    "id": "74회_q31_1219",
    "type": "사건",
    "kind": "detail",
    "title": "외규장각 도서가 약탈된 배경을 찾아본다.",
    "description": "외규장각 도서가 약탈된 배경을 찾아본다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "병인양요"
    ],
    "_src": "74회 심화 Q31 X"
  },
  {
    "id": "74회_q32_1220",
    "type": "사건",
    "kind": "detail",
    "title": "최익현이 태인에서 의병을 일으켰다.",
    "description": "최익현이 태인에서 의병을 일으켰다.",
    "startYear": 1905,
    "endYear": 1906,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "을사의병"
    ],
    "_src": "74회 심화 Q32 X"
  },
  {
    "id": "74회_q32_1221",
    "type": "사건",
    "kind": "detail",
    "title": "일본이 독도를 불법적으로 편입하였다.",
    "description": "일본이 독도를 불법적으로 편입하였다.",
    "startYear": 1904,
    "endYear": 1905,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "러일전쟁"
    ],
    "_src": "74회 심화 Q32 X"
  },
  {
    "id": "74회_q32_1222",
    "type": "사건",
    "kind": "detail",
    "title": "스티븐스가 외교 고문으로 부임하였다.",
    "description": "스티븐스가 외교 고문으로 부임하였다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "74회 심화 Q32 X"
  },
  {
    "id": "74회_q32_1223",
    "type": "사건",
    "kind": "detail",
    "title": "13도 창의군이 서울 진공 작전을 전개하였다.",
    "description": "13도 창의군이 서울 진공 작전을 전개하였다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "74회 심화 Q32 O"
  },
  {
    "id": "74회_q32_1224",
    "type": "사건",
    "kind": "detail",
    "title": "유인석이 이끄는 부대가 충주성을 점령하였다.",
    "description": "유인석이 이끄는 부대가 충주성을 점령하였다.",
    "startYear": 1895,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "을미의병"
    ],
    "_src": "74회 심화 Q32 X"
  },
  {
    "id": "74회_q33_1225",
    "type": "사건",
    "kind": "detail",
    "title": "한인 자치 기구인 경학사를 설립하였다.",
    "description": "한인 자치 기구인 경학사를 설립하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "74회 심화 Q33 X"
  },
  {
    "id": "74회_q33_1226",
    "type": "사건",
    "kind": "detail",
    "title": "권업신문을 발간하여 민족 의식을 고취하였다.",
    "description": "권업신문을 발간하여 민족 의식을 고취하였다.",
    "startYear": 1914,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한 광복군 정부"
    ],
    "_src": "74회 심화 Q33 X"
  },
  {
    "id": "74회_q33_1227",
    "type": "사건",
    "kind": "detail",
    "title": "유학생을 중심으로 2·8 독립 선언을 발표하였다.",
    "description": "유학생을 중심으로 2·8 독립 선언을 발표하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "2·8 독립 선언"
    ],
    "_src": "74회 심화 Q33 X"
  },
  {
    "id": "74회_q33_1228",
    "type": "사건",
    "kind": "detail",
    "title": "신한 청년당이 파리 강화 회의에 대표를 파견하였다.",
    "description": "신한 청년당이 파리 강화 회의에 대표를 파견하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "74회 심화 Q33 X"
  },
  {
    "id": "74회_q33_1229",
    "type": "사건",
    "kind": "detail",
    "title": "대조선 국민군단을 결성하여 군사 훈련을 실시하였다.",
    "description": "대조선 국민군단을 결성하여 군사 훈련을 실시하였다.",
    "startYear": 1914,
    "endYear": 1917,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대조선 국민 군단"
    ],
    "_src": "74회 심화 Q33 O"
  },
  {
    "id": "74회_q34_1230",
    "type": "사건",
    "kind": "detail",
    "title": "대한매일신보를 읽고 있는 청년",
    "description": "대한매일신보를 읽고 있는 청년",
    "startYear": 1904,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한매일신보"
    ],
    "_src": "74회 심화 Q34 O"
  },
  {
    "id": "74회_q34_1231",
    "type": "사건",
    "kind": "detail",
    "title": "경성 제국 대학에 입학하는 학생",
    "description": "경성 제국 대학에 입학하는 학생",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "74회 심화 Q34 X"
  },
  {
    "id": "74회_q34_1232",
    "type": "사건",
    "kind": "detail",
    "title": "원각사에서 은세계 공연을 보는 여성",
    "description": "원각사에서 은세계 공연을 보는 여성",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "74회 심화 Q34 X"
  },
  {
    "id": "74회_q34_1233",
    "type": "사건",
    "kind": "detail",
    "title": "통리기무아문에서 개화 정책을 논의하는 관리",
    "description": "통리기무아문에서 개화 정책을 논의하는 관리",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "통리기무아문"
    ],
    "_src": "74회 심화 Q34 X"
  },
  {
    "id": "74회_q34_1234",
    "type": "사건",
    "kind": "detail",
    "title": "어린이날 기념 행사에 참여하는 천도교 소년회 회원",
    "description": "어린이날 기념 행사에 참여하는 천도교 소년회 회원",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "74회 심화 Q34 X"
  },
  {
    "id": "74회_q36_1235",
    "type": "사건",
    "kind": "detail",
    "title": "정우회 선언의 영향을 받았다.",
    "description": "정우회 선언의 영향을 받았다.",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신간회"
    ],
    "_src": "74회 심화 Q36 X"
  },
  {
    "id": "74회_q36_1236",
    "type": "사건",
    "kind": "detail",
    "title": "통감부의 탄압과 방해로 중단되었다.",
    "description": "통감부의 탄압과 방해로 중단되었다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한자강회"
    ],
    "_src": "74회 심화 Q36 X"
  },
  {
    "id": "74회_q36_1237",
    "type": "사건",
    "kind": "detail",
    "title": "순종의 인산일을 기회로 삼아 추진되었다.",
    "description": "순종의 인산일을 기회로 삼아 추진되었다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "74회 심화 Q36 X"
  },
  {
    "id": "74회_q36_1238",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 일제가 제암리 학살 등을 자행하였다.",
    "description": "전개 과정에서 일제가 제암리 학살 등을 자행하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "3·1 운동"
    ],
    "_src": "74회 심화 Q36 O"
  },
  {
    "id": "74회_q36_1239",
    "type": "사건",
    "kind": "detail",
    "title": "성진회와 각 학교 독서회에 의해 전국적으로 확산되었다.",
    "description": "성진회와 각 학교 독서회에 의해 전국적으로 확산되었다.",
    "startYear": 1929,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광주학생항일운동"
    ],
    "_src": "74회 심화 Q36 X"
  },
  {
    "id": "74회_q37_1240",
    "type": "사건",
    "kind": "detail",
    "title": "고종 강제 퇴위 반대 운동을 전개하였다.",
    "description": "고종 강제 퇴위 반대 운동을 전개하였다.",
    "startYear": 1906,
    "endYear": 1907,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한자강회"
    ],
    "_src": "74회 심화 Q37 X"
  },
  {
    "id": "74회_q37_1241",
    "type": "사건",
    "kind": "detail",
    "title": "일제의 황무지 개간권 요구를 저지하였다.",
    "description": "일제의 황무지 개간권 요구를 저지하였다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "보안회"
    ],
    "_src": "74회 심화 Q37 X"
  },
  {
    "id": "74회_q37_1242",
    "type": "사건",
    "kind": "detail",
    "title": "영은문이 있던 자리 부근에 독립문을 건립하였다.",
    "description": "영은문이 있던 자리 부근에 독립문을 건립하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "74회 심화 Q37 X"
  },
  {
    "id": "74회_q37_1243",
    "type": "사건",
    "kind": "detail",
    "title": "독립운동 자금 마련을 위해 독립 공채를 발행하였다.",
    "description": "독립운동 자금 마련을 위해 독립 공채를 발행하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "74회 심화 Q37 O"
  },
  {
    "id": "74회_q37_1244",
    "type": "사건",
    "kind": "detail",
    "title": "조선 총독부에 국권 반환 요구서를 제출하려 하였다.",
    "description": "조선 총독부에 국권 반환 요구서를 제출하려 하였다.",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "74회 심화 Q37 X"
  },
  {
    "id": "74회_q38_1245",
    "type": "사건",
    "kind": "detail",
    "title": "원산 노동자 총파업을 지원하였다.",
    "description": "원산 노동자 총파업을 지원하였다.",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신간회"
    ],
    "_src": "74회 심화 Q38 X"
  },
  {
    "id": "74회_q38_1246",
    "type": "사건",
    "kind": "detail",
    "title": "신흥 강습소를 세워 독립군을 양성하였다.",
    "description": "신흥 강습소를 세워 독립군을 양성하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "74회 심화 Q38 X"
  },
  {
    "id": "74회_q38_1247",
    "type": "사건",
    "kind": "detail",
    "title": "김익상 김상옥 등이 단원으로 활동하였다.",
    "description": "김익상 김상옥 등이 단원으로 활동하였다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "74회 심화 Q38 O"
  },
  {
    "id": "74회_q38_1248",
    "type": "사건",
    "kind": "detail",
    "title": "상덕태상회를 통하여 군자금을 모집하였다.",
    "description": "상덕태상회를 통하여 군자금을 모집하였다.",
    "startYear": 1915,
    "endYear": 1918,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한광복회"
    ],
    "_src": "74회 심화 Q38 X"
  },
  {
    "id": "74회_q38_1249",
    "type": "사건",
    "kind": "detail",
    "title": "도쿄에서 일어난 이봉창 의거를 계획하였다.",
    "description": "도쿄에서 일어난 이봉창 의거를 계획하였다.",
    "startYear": 1931,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한인 애국단"
    ],
    "_src": "74회 심화 Q38 X"
  },
  {
    "id": "74회_q39_1250",
    "type": "사건",
    "kind": "detail",
    "title": "조선불교유신론을 주장하였다.",
    "description": "조선불교유신론을 주장하였다.",
    "startYear": 1879,
    "endYear": 1944,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한용운"
    ],
    "_src": "74회 심화 Q39 X"
  },
  {
    "id": "74회_q39_1251",
    "type": "사건",
    "kind": "detail",
    "title": "식민 사학의 정체성론을 반박하였다.",
    "description": "식민 사학의 정체성론을 반박하였다.",
    "startYear": 1894,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "백남운"
    ],
    "_src": "74회 심화 Q39 O"
  },
  {
    "id": "74회_q39_1252",
    "type": "사건",
    "kind": "detail",
    "title": "조선사 편수회에 들어가 조선사 편찬에 참여하였다.",
    "description": "조선사 편수회에 들어가 조선사 편찬에 참여하였다.",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "74회 심화 Q39 X"
  },
  {
    "id": "74회_q39_1253",
    "type": "사건",
    "kind": "detail",
    "title": "진단 학회를 설립하여 실증주의 사학을 발전시켰다.",
    "description": "진단 학회를 설립하여 실증주의 사학을 발전시켰다.",
    "startYear": 1934,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "진단학회"
    ],
    "_src": "74회 심화 Q39 X"
  },
  {
    "id": "74회_q39_1254",
    "type": "사건",
    "kind": "detail",
    "title": "민족을 역사 서술의 중심에 둔 독사신론을 집필하였다.",
    "description": "민족을 역사 서술의 중심에 둔 독사신론을 집필하였다.",
    "startYear": 1880,
    "endYear": 1936,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신채호"
    ],
    "_src": "74회 심화 Q39 X"
  },
  {
    "id": "74회_q40_1255",
    "type": "사건",
    "kind": "detail",
    "title": "잡지 신여성 여권 신장을 주장하다",
    "description": "잡지 신여성 여권 신장을 주장하다",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "74회 심화 Q40 X"
  },
  {
    "id": "74회_q40_1256",
    "type": "사건",
    "kind": "detail",
    "title": "조선 형평사 사회적 차별 철폐를 외치다",
    "description": "조선 형평사 사회적 차별 철폐를 외치다",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "형평 운동"
    ],
    "_src": "74회 심화 Q40 X"
  },
  {
    "id": "74회_q40_1257",
    "type": "사건",
    "kind": "detail",
    "title": "소설 상록수 브나로드 운동을 널리 알리다",
    "description": "소설 상록수 브나로드 운동을 널리 알리다",
    "startYear": 1931,
    "endYear": 1934,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "브나로드 운동"
    ],
    "_src": "74회 심화 Q40 X"
  },
  {
    "id": "74회_q40_1258",
    "type": "사건",
    "kind": "detail",
    "title": "경성 방직 주식회사 광목 태극성을 광고하다",
    "description": "경성 방직 주식회사 광목 태극성을 광고하다",
    "startYear": 1920,
    "endYear": 1932,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "물산 장려 운동"
    ],
    "_src": "74회 심화 Q40 X"
  },
  {
    "id": "74회_q40_1259",
    "type": "사건",
    "kind": "detail",
    "title": "새마을 운동 근면·자조·협동을 기치로 내세우다",
    "description": "새마을 운동 근면·자조·협동을 기치로 내세우다",
    "startYear": 1970,
    "endYear": 1985,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "새마을 운동"
    ],
    "_src": "74회 심화 Q40 O"
  },
  {
    "id": "74회_q41_1260",
    "type": "사건",
    "kind": "detail",
    "title": "일본군의 보복으로 간도 참변이 일어나다",
    "description": "일본군의 보복으로 간도 참변이 일어나다",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "74회 심화 Q41 X"
  },
  {
    "id": "74회_q41_1261",
    "type": "사건",
    "kind": "detail",
    "title": "관동 대지진 당시 자경단에 학살당하다",
    "description": "관동 대지진 당시 자경단에 학살당하다",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "74회 심화 Q41 X"
  },
  {
    "id": "74회_q41_1262",
    "type": "사건",
    "kind": "detail",
    "title": "에네켄 농장에서 고된 노동에 시달리다",
    "description": "에네켄 농장에서 고된 노동에 시달리다",
    "startYear": 1910,
    "endYear": 1913,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "숭무 학교"
    ],
    "_src": "74회 심화 Q41 O"
  },
  {
    "id": "74회_q41_1263",
    "type": "사건",
    "kind": "detail",
    "title": "소련 당국에 의해 강제로 이주되어 오다",
    "description": "소련 당국에 의해 강제로 이주되어 오다",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "74회 심화 Q41 X"
  },
  {
    "id": "74회_q41_1264",
    "type": "사건",
    "kind": "detail",
    "title": "교민들을 중심으로 흥사단이 창립되다",
    "description": "교민들을 중심으로 흥사단이 창립되다",
    "startYear": 1913,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "흥사단"
    ],
    "_src": "74회 심화 Q41 X"
  },
  {
    "id": "74회_q42_1265",
    "type": "사건",
    "kind": "detail",
    "title": "봉오동 전투에서 일본군을 크게 격파하였다.",
    "description": "봉오동 전투에서 일본군을 크게 격파하였다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "봉오동 전투"
    ],
    "_src": "74회 심화 Q42 X"
  },
  {
    "id": "74회_q42_1266",
    "type": "사건",
    "kind": "detail",
    "title": "미국과 연계하여 국내 진공 작전을 계획하였다.",
    "description": "미국과 연계하여 국내 진공 작전을 계획하였다.",
    "startYear": 1940,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광복군 창설"
    ],
    "_src": "74회 심화 Q42 X"
  },
  {
    "id": "74회_q42_1267",
    "type": "사건",
    "kind": "detail",
    "title": "중국 의용군과 연합하여 영릉가 전투에서 승리하였다.",
    "description": "중국 의용군과 연합하여 영릉가 전투에서 승리하였다.",
    "startYear": 1929,
    "endYear": 1938,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선혁명군"
    ],
    "_src": "74회 심화 Q42 X"
  },
  {
    "id": "74회_q42_1268",
    "type": "사건",
    "kind": "detail",
    "title": "조선 민족 전선 연맹 산하의 군사 조직으로 결성되었다.",
    "description": "조선 민족 전선 연맹 산하의 군사 조직으로 결성되었다.",
    "startYear": 1938,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선의용대"
    ],
    "_src": "74회 심화 Q42 X"
  },
  {
    "id": "74회_q42_1269",
    "type": "사건",
    "kind": "detail",
    "title": "한국 독립당의 군사 조직으로 북만주 지역에서 활약하였다...",
    "description": "한국 독립당의 군사 조직으로 북만주 지역에서 활약하였다.",
    "startYear": 1930,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한국독립군"
    ],
    "_src": "74회 심화 Q42 O"
  },
  {
    "id": "74회_q43_1270",
    "type": "사건",
    "kind": "detail",
    "title": "조선 태형령이 반포되었다.",
    "description": "조선 태형령이 반포되었다.",
    "startYear": 1910,
    "endYear": 1919,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1910년대 통치"
    ],
    "_src": "74회 심화 Q43 X"
  },
  {
    "id": "74회_q43_1271",
    "type": "사건",
    "kind": "detail",
    "title": "조선 노농 총동맹이 결성되었다.",
    "description": "조선 노농 총동맹이 결성되었다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "74회 심화 Q43 X"
  },
  {
    "id": "74회_q43_1272",
    "type": "사건",
    "kind": "detail",
    "title": "임시 토지 조사국이 설립되었다.",
    "description": "임시 토지 조사국이 설립되었다.",
    "startYear": 1912,
    "endYear": 1918,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "토지조사사업"
    ],
    "_src": "74회 심화 Q43 X"
  },
  {
    "id": "74회_q43_1273",
    "type": "사건",
    "kind": "detail",
    "title": "황국 신민 서사 암송이 강요되었다.",
    "description": "황국 신민 서사 암송이 강요되었다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "74회 심화 Q43 O"
  },
  {
    "id": "74회_q43_1274",
    "type": "사건",
    "kind": "detail",
    "title": "조선 민립 대학 기성회가 창립되었다.",
    "description": "조선 민립 대학 기성회가 창립되었다.",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민립 대학 설립 운동"
    ],
    "_src": "74회 심화 Q43 X"
  },
  {
    "id": "74회_q44_1275",
    "type": "사건",
    "kind": "detail",
    "title": "대통령이 하야하는 결과를 이끌어냈다.",
    "description": "대통령이 하야하는 결과를 이끌어냈다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "74회 심화 Q44 X"
  },
  {
    "id": "74회_q44_1276",
    "type": "사건",
    "kind": "detail",
    "title": "호헌 철폐와 독재 타도 등의 구호를 내세웠다.",
    "description": "호헌 철폐와 독재 타도 등의 구호를 내세웠다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "74회 심화 Q44 X"
  },
  {
    "id": "74회_q44_1277",
    "type": "사건",
    "kind": "detail",
    "title": "통일 주체 국민 회의가 구성되는 배경이 되었다.",
    "description": "통일 주체 국민 회의가 구성되는 배경이 되었다.",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "유신헌법"
    ],
    "_src": "74회 심화 Q44 X"
  },
  {
    "id": "74회_q44_1278",
    "type": "사건",
    "kind": "detail",
    "title": "6·3 시위의 전개와 비상계엄이 선포되는 계기가 되었다...",
    "description": "6·3 시위의 전개와 비상계엄이 선포되는 계기가 되었다.",
    "startYear": 1964,
    "endYear": 1964,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·3 시위"
    ],
    "_src": "74회 심화 Q44 X"
  },
  {
    "id": "74회_q44_1279",
    "type": "사건",
    "kind": "detail",
    "title": "진상 규명 및 희생자 명예 회복에 관한 특별법이 제정되...",
    "description": "진상 규명 및 희생자 명예 회복에 관한 특별법이 제정되었다.",
    "startYear": 1948,
    "endYear": 1949,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "제주 4·3 사건"
    ],
    "_src": "74회 심화 Q44 O"
  },
  {
    "id": "74회_q45_1280",
    "type": "사건",
    "kind": "detail",
    "title": "발췌 개헌안이 통과되었다.",
    "description": "발췌 개헌안이 통과되었다.",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "74회 심화 Q45 O"
  },
  {
    "id": "74회_q45_1281",
    "type": "사건",
    "kind": "detail",
    "title": "삼청 교육대가 설치되었다.",
    "description": "삼청 교육대가 설치되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "74회 심화 Q45 X"
  },
  {
    "id": "74회_q45_1282",
    "type": "사건",
    "kind": "detail",
    "title": "한미 상호 방위 조약이 체결되었다.",
    "description": "한미 상호 방위 조약이 체결되었다.",
    "startYear": 1953,
    "endYear": 1953,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한미 상호 방위 조약"
    ],
    "_src": "74회 심화 Q45 X"
  },
  {
    "id": "74회_q45_1283",
    "type": "사건",
    "kind": "detail",
    "title": "여수·순천 10·19 사건이 일어났다.",
    "description": "여수·순천 10·19 사건이 일어났다.",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "여수 순천 사건"
    ],
    "_src": "74회 심화 Q45 X"
  },
  {
    "id": "74회_q45_1284",
    "type": "사건",
    "kind": "detail",
    "title": "국가 보위 비상 대책 위원회가 구성되었다.",
    "description": "국가 보위 비상 대책 위원회가 구성되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "74회 심화 Q45 X"
  },
  {
    "id": "74회_q46_1285",
    "type": "사건",
    "kind": "detail",
    "title": "시위 도중 대학생 이한열이 희생되었다.",
    "description": "시위 도중 대학생 이한열이 희생되었다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "74회 심화 Q46 X"
  },
  {
    "id": "74회_q46_1286",
    "type": "사건",
    "kind": "detail",
    "title": "시민군이 조직되어 계엄군에 저항하였다.",
    "description": "시민군이 조직되어 계엄군에 저항하였다.",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·18 광주민주화운동"
    ],
    "_src": "74회 심화 Q46 X"
  },
  {
    "id": "74회_q46_1287",
    "type": "사건",
    "kind": "detail",
    "title": "허정 과도 정부가 출범하는 계기가 되었다.",
    "description": "허정 과도 정부가 출범하는 계기가 되었다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "74회 심화 Q46 O"
  },
  {
    "id": "74회_q46_1288",
    "type": "사건",
    "kind": "detail",
    "title": "5년 단임의 대통령 직선제 개헌을 이끌어냈다.",
    "description": "5년 단임의 대통령 직선제 개헌을 이끌어냈다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "74회 심화 Q46 X"
  },
  {
    "id": "74회_q46_1289",
    "type": "사건",
    "kind": "detail",
    "title": "야당 총재의 국회의원 제명으로 촉발되었다.",
    "description": "야당 총재의 국회의원 제명으로 촉발되었다.",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "YH 무역 사건"
    ],
    "_src": "74회 심화 Q46 X"
  },
  {
    "id": "74회_q47_1290",
    "type": "사건",
    "kind": "detail",
    "title": "국회 별관에서 3선 개헌안이 통과되었습니다.",
    "description": "국회 별관에서 3선 개헌안이 통과되었습니다.",
    "startYear": 1969,
    "endYear": 1969,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "3선 개헌"
    ],
    "_src": "74회 심화 Q47 X"
  },
  {
    "id": "74회_q47_1291",
    "type": "사건",
    "kind": "detail",
    "title": "정부에 비판적인 경향신문이 폐간되었습니다.",
    "description": "정부에 비판적인 경향신문이 폐간되었습니다.",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "74회 심화 Q47 X"
  },
  {
    "id": "74회_q47_1292",
    "type": "사건",
    "kind": "detail",
    "title": "YH 무역 노동자들이 야당 당사에서 농성하였습니다.",
    "description": "YH 무역 노동자들이 야당 당사에서 농성하였습니다.",
    "startYear": 1979,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "YH 무역 사건"
    ],
    "_src": "74회 심화 Q47 O"
  },
  {
    "id": "74회_q47_1293",
    "type": "사건",
    "kind": "detail",
    "title": "최고 통치 기구인 국가 재건 최고 회의가 구성되었습니다...",
    "description": "최고 통치 기구인 국가 재건 최고 회의가 구성되었습니다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "74회 심화 Q47 X"
  },
  {
    "id": "74회_q47_1294",
    "type": "사건",
    "kind": "detail",
    "title": "평화 통일론을 주장한 진보당의 조봉암이 처형되었습니다.",
    "description": "평화 통일론을 주장한 진보당의 조봉암이 처형되었습니다.",
    "startYear": 1948,
    "endYear": 1960,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "이승만 정부"
    ],
    "_src": "74회 심화 Q47 X"
  },
  {
    "id": "74회_q48_1295",
    "type": "사건",
    "kind": "detail",
    "title": "경제기획원이 발족하였다.",
    "description": "경제기획원이 발족하였다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "74회 심화 Q48 X"
  },
  {
    "id": "74회_q48_1296",
    "type": "사건",
    "kind": "detail",
    "title": "제4차 경제 개발 5개년 계획이 추진되었다.",
    "description": "제4차 경제 개발 5개년 계획이 추진되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "74회 심화 Q48 X"
  },
  {
    "id": "74회_q48_1297",
    "type": "사건",
    "kind": "detail",
    "title": "미국과 자유 무역 협정(FTA)을 체결하였다.",
    "description": "미국과 자유 무역 협정(FTA)을 체결하였다.",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "74회 심화 Q48 X"
  },
  {
    "id": "74회_q48_1298",
    "type": "사건",
    "kind": "detail",
    "title": "저유가·저금리·저달러의 3저 호황이 있었다.",
    "description": "저유가·저금리·저달러의 3저 호황이 있었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "74회 심화 Q48 X"
  },
  {
    "id": "74회_q48_1299",
    "type": "사건",
    "kind": "detail",
    "title": "대통령 직속 자문 기구로 노사정 위원회가 출범하였다.",
    "description": "대통령 직속 자문 기구로 노사정 위원회가 출범하였다.",
    "startYear": 1998,
    "endYear": 2003,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김대중 정부"
    ],
    "_src": "74회 심화 Q48 O"
  },
  {
    "id": "74회_q49_1300",
    "type": "사건",
    "kind": "detail",
    "title": "판문점에서 남북 정상 회담을 개최하였다.",
    "description": "판문점에서 남북 정상 회담을 개최하였다.",
    "startYear": 2017,
    "endYear": 2022,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "문재인 정부 통일"
    ],
    "_src": "74회 심화 Q49 X"
  },
  {
    "id": "74회_q49_1301",
    "type": "사건",
    "kind": "detail",
    "title": "남북한이 국제 연합(UN)에 동시 가입하였다.",
    "description": "남북한이 국제 연합(UN)에 동시 가입하였다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "74회 심화 Q49 X"
  },
  {
    "id": "74회_q49_1302",
    "type": "사건",
    "kind": "detail",
    "title": "남북 이산가족의 고향 방문을 최초로 성사시켰다.",
    "description": "남북 이산가족의 고향 방문을 최초로 성사시켰다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "74회 심화 Q49 X"
  },
  {
    "id": "74회_q49_1303",
    "type": "사건",
    "kind": "detail",
    "title": "평화 통일 외교 정책에 관한 6·23 특별 성명을 발표...",
    "description": "평화 통일 외교 정책에 관한 6·23 특별 성명을 발표하였다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "74회 심화 Q49 X"
  },
  {
    "id": "74회_q49_1304",
    "type": "사건",
    "kind": "detail",
    "title": "남북 간 경제 교류 활성화를 위한 개성 공단 착공식을 ...",
    "description": "남북 간 경제 교류 활성화를 위한 개성 공단 착공식을 열었다.",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "74회 심화 Q49 O"
  },
  {
    "id": "74회_q50_1305",
    "type": "사건",
    "kind": "detail",
    "title": "원성왕 재위 시기에 시행되었다.",
    "description": "원성왕 재위 시기에 시행되었다.",
    "startYear": 785,
    "endYear": 798,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "통일신라 원성왕"
    ],
    "_src": "74회 심화 Q50 X"
  },
  {
    "id": "74회_q50_1306",
    "type": "사건",
    "kind": "detail",
    "title": "쌍기의 건의를 수용하여 실시하였다.",
    "description": "쌍기의 건의를 수용하여 실시하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "74회 심화 Q50 X"
  },
  {
    "id": "74회_q50_1307",
    "type": "사건",
    "kind": "detail",
    "title": "식년시 알성시 증광시 등으로 운영되었다.",
    "description": "식년시 알성시 증광시 등으로 운영되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "74회 심화 Q50 X"
  },
  {
    "id": "74회_q50_1308",
    "type": "사건",
    "kind": "detail",
    "title": "중종 때 조광조를 비롯한 사림들이 실시를 주장하였다.",
    "description": "중종 때 조광조를 비롯한 사림들이 실시를 주장하였다.",
    "startYear": 1482,
    "endYear": 1519,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조광조"
    ],
    "_src": "74회 심화 Q50 X"
  },
  {
    "id": "74회_q50_1309",
    "type": "사건",
    "kind": "detail",
    "title": "대한 제국 수립 이후 개혁의 일환으로 처음 단행되었다.",
    "description": "대한 제국 수립 이후 개혁의 일환으로 처음 단행되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "74회 심화 Q50 O"
  },
  {
    "id": "73회_q1_1310",
    "type": "사건",
    "kind": "detail",
    "title": "소를 이용한 깊이갈이가 일반화되었다.",
    "description": "소를 이용한 깊이갈이가 일반화되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "73회 심화 Q1 X"
  },
  {
    "id": "73회_q1_1311",
    "type": "사건",
    "kind": "detail",
    "title": "반달 돌칼을 사용하여 벼를 수확하였다.",
    "description": "반달 돌칼을 사용하여 벼를 수확하였다.",
    "startYear": -1500,
    "endYear": -500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "청동기 시대"
    ],
    "_src": "73회 심화 Q1 O"
  },
  {
    "id": "73회_q1_1312",
    "type": "사건",
    "kind": "detail",
    "title": "주로 동굴이나 강가의 막집에서 살았다.",
    "description": "주로 동굴이나 강가의 막집에서 살았다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "73회 심화 Q1 X"
  },
  {
    "id": "73회_q1_1313",
    "type": "사건",
    "kind": "detail",
    "title": "주먹도끼·찍개 등의 뗀석기를 처음 제작하였다.",
    "description": "주먹도끼·찍개 등의 뗀석기를 처음 제작하였다.",
    "startYear": -700000,
    "endYear": -8000,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "구석기 시대"
    ],
    "_src": "73회 심화 Q1 X"
  },
  {
    "id": "73회_q1_1314",
    "type": "사건",
    "kind": "detail",
    "title": "가락바퀴와 뼈바늘을 이용해 옷을 만들기 시작하였다.",
    "description": "가락바퀴와 뼈바늘을 이용해 옷을 만들기 시작하였다.",
    "startYear": -8000,
    "endYear": -1500,
    "difficulty": 2,
    "era": "선사시대",
    "tags": [
      "신석기 시대"
    ],
    "_src": "73회 심화 Q1 X"
  },
  {
    "id": "73회_q2_1315",
    "type": "사건",
    "kind": "detail",
    "title": "을지문덕이 살수에서 대승을 거두었다.",
    "description": "을지문덕이 살수에서 대승을 거두었다.",
    "startYear": 612,
    "endYear": 612,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "살수대첩"
    ],
    "_src": "73회 심화 Q2 X"
  },
  {
    "id": "73회_q2_1316",
    "type": "사건",
    "kind": "detail",
    "title": "사찬 시득이 기벌포에서 당군을 격파하였다.",
    "description": "사찬 시득이 기벌포에서 당군을 격파하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "73회 심화 Q2 X"
  },
  {
    "id": "73회_q2_1317",
    "type": "사건",
    "kind": "detail",
    "title": "관구검이 군대를 이끌고 환도성을 함락하였다.",
    "description": "관구검이 군대를 이끌고 환도성을 함락하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "73회 심화 Q2 X"
  },
  {
    "id": "73회_q2_1318",
    "type": "사건",
    "kind": "detail",
    "title": "김춘추가 당으로 건너가 군사 동맹을 체결하였다.",
    "description": "김춘추가 당으로 건너가 군사 동맹을 체결하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "73회 심화 Q2 O"
  },
  {
    "id": "73회_q2_1319",
    "type": "사건",
    "kind": "detail",
    "title": "장문휴가 자사 위준이 관할하는 당의 등주를 공격하였다.",
    "description": "장문휴가 자사 위준이 관할하는 당의 등주를 공격하였다.",
    "startYear": 719,
    "endYear": 737,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "발해 무왕"
    ],
    "_src": "73회 심화 Q2 X"
  },
  {
    "id": "73회_q3_1320",
    "type": "사건",
    "kind": "detail",
    "title": "진흥왕 때 신라에 복속되었다.",
    "description": "진흥왕 때 신라에 복속되었다.",
    "startYear": 42,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "가야"
    ],
    "_src": "73회 심화 Q3 O"
  },
  {
    "id": "73회_q3_1321",
    "type": "사건",
    "kind": "detail",
    "title": "집사부를 비롯한 14부를 설치하였다.",
    "description": "집사부를 비롯한 14부를 설치하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "73회 심화 Q3 X"
  },
  {
    "id": "73회_q3_1322",
    "type": "사건",
    "kind": "detail",
    "title": "지방 장관으로 욕살 처려근지 등을 두었다.",
    "description": "지방 장관으로 욕살 처려근지 등을 두었다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "73회 심화 Q3 X"
  },
  {
    "id": "73회_q3_1323",
    "type": "사건",
    "kind": "detail",
    "title": "여러 가(加)들이 별도로 사출도를 주관하였다.",
    "description": "여러 가(加)들이 별도로 사출도를 주관하였다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "73회 심화 Q3 X"
  },
  {
    "id": "73회_q3_1324",
    "type": "사건",
    "kind": "detail",
    "title": "왕족인 부여씨와 8성의 귀족이 지배층을 이루었다.",
    "description": "왕족인 부여씨와 8성의 귀족이 지배층을 이루었다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "73회 심화 Q3 X"
  },
  {
    "id": "73회_q4_1325",
    "type": "사건",
    "kind": "detail",
    "title": "영고라는 제천 행사를 열었다.",
    "description": "영고라는 제천 행사를 열었다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "73회 심화 Q4 X"
  },
  {
    "id": "73회_q4_1326",
    "type": "사건",
    "kind": "detail",
    "title": "사회 질서를 유지하기 위해 범금 8조를 만들었다.",
    "description": "사회 질서를 유지하기 위해 범금 8조를 만들었다.",
    "startYear": -2333,
    "endYear": -108,
    "difficulty": 3,
    "era": "고조선",
    "tags": [
      "고조선"
    ],
    "_src": "73회 심화 Q4 X"
  },
  {
    "id": "73회_q4_1327",
    "type": "사건",
    "kind": "detail",
    "title": "신성 지역인 소도가 존재하였다.",
    "description": "신성 지역인 소도가 존재하였다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "73회 심화 Q4 O"
  },
  {
    "id": "73회_q4_1328",
    "type": "사건",
    "kind": "detail",
    "title": "제가 회의에서 나라의 중대사를 결정하였다.",
    "description": "제가 회의에서 나라의 중대사를 결정하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "73회 심화 Q4 X"
  },
  {
    "id": "73회_q4_1329",
    "type": "사건",
    "kind": "detail",
    "title": "(가) (나) - 도둑질한 자에게 12배로 배상하게 하...",
    "description": "(가) (나) - 도둑질한 자에게 12배로 배상하게 하였다.",
    "startYear": -200,
    "endYear": 562,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "삼한/부여"
    ],
    "_src": "73회 심화 Q4 X"
  },
  {
    "id": "73회_q5_1330",
    "type": "사건",
    "kind": "detail",
    "title": "금마저에 미륵사를 창건하였다.",
    "description": "금마저에 미륵사를 창건하였다.",
    "startYear": 600,
    "endYear": 641,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 무왕"
    ],
    "_src": "73회 심화 Q5 X"
  },
  {
    "id": "73회_q5_1331",
    "type": "사건",
    "kind": "detail",
    "title": "윤충을 보내 대야성을 함락하였다.",
    "description": "윤충을 보내 대야성을 함락하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "73회 심화 Q5 X"
  },
  {
    "id": "73회_q5_1332",
    "type": "사건",
    "kind": "detail",
    "title": "사비에 천도하고 국호를 남부여로 고쳤다.",
    "description": "사비에 천도하고 국호를 남부여로 고쳤다.",
    "startYear": 523,
    "endYear": 554,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 성왕"
    ],
    "_src": "73회 심화 Q5 X"
  },
  {
    "id": "73회_q5_1333",
    "type": "사건",
    "kind": "detail",
    "title": "평양성을 공격하여 고국원왕을 전사시켰다.",
    "description": "평양성을 공격하여 고국원왕을 전사시켰다.",
    "startYear": 346,
    "endYear": 375,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 근초고왕"
    ],
    "_src": "73회 심화 Q5 O"
  },
  {
    "id": "73회_q5_1334",
    "type": "사건",
    "kind": "detail",
    "title": "동진에서 온 마라난타를 통해 불교를 수용하였다.",
    "description": "동진에서 온 마라난타를 통해 불교를 수용하였다.",
    "startYear": 384,
    "endYear": 385,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제 침류왕"
    ],
    "_src": "73회 심화 Q5 X"
  },
  {
    "id": "73회_q7_1335",
    "type": "사건",
    "kind": "detail",
    "title": "김흠돌 등 진골 세력이 숙청되었다.",
    "description": "김흠돌 등 진골 세력이 숙청되었다.",
    "startYear": 681,
    "endYear": 692,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 신문왕"
    ],
    "_src": "73회 심화 Q7 X"
  },
  {
    "id": "73회_q7_1336",
    "type": "사건",
    "kind": "detail",
    "title": "김헌창이 웅천주에서 반란을 일으켰다.",
    "description": "김헌창이 웅천주에서 반란을 일으켰다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "73회 심화 Q7 O"
  },
  {
    "id": "73회_q7_1337",
    "type": "사건",
    "kind": "detail",
    "title": "거칠부가 왕명에 의해 국사를 편찬하였다.",
    "description": "거칠부가 왕명에 의해 국사를 편찬하였다.",
    "startYear": 540,
    "endYear": 576,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 진흥왕"
    ],
    "_src": "73회 심화 Q7 X"
  },
  {
    "id": "73회_q7_1338",
    "type": "사건",
    "kind": "detail",
    "title": "복신과 도침이 부여풍을 왕으로 추대하였다.",
    "description": "복신과 도침이 부여풍을 왕으로 추대하였다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "73회 심화 Q7 X"
  },
  {
    "id": "73회_q7_1339",
    "type": "사건",
    "kind": "detail",
    "title": "자장의 건의로 황룡사 구층 목탑이 건립되었다.",
    "description": "자장의 건의로 황룡사 구층 목탑이 건립되었다.",
    "startYear": 632,
    "endYear": 647,
    "difficulty": 4,
    "era": "삼국시대",
    "tags": [
      "신라 선덕여왕"
    ],
    "_src": "73회 심화 Q7 X"
  },
  {
    "id": "73회_q8_1340",
    "type": "사건",
    "kind": "detail",
    "title": "교육 기관으로 주자감을 설립하였다.",
    "description": "교육 기관으로 주자감을 설립하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "73회 심화 Q8 X"
  },
  {
    "id": "73회_q8_1341",
    "type": "사건",
    "kind": "detail",
    "title": "감찰 업무를 담당하는 중정대가 있었다.",
    "description": "감찰 업무를 담당하는 중정대가 있었다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "73회 심화 Q8 X"
  },
  {
    "id": "73회_q8_1342",
    "type": "사건",
    "kind": "detail",
    "title": "인안 대흥 등 독자적인 연호를 사용하였다.",
    "description": "인안 대흥 등 독자적인 연호를 사용하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "73회 심화 Q8 X"
  },
  {
    "id": "73회_q8_1343",
    "type": "사건",
    "kind": "detail",
    "title": "거란도 영주도 등을 통해 주변국과 교역하였다.",
    "description": "거란도 영주도 등을 통해 주변국과 교역하였다.",
    "startYear": 698,
    "endYear": 926,
    "difficulty": 3,
    "era": "신라시대",
    "tags": [
      "발해"
    ],
    "_src": "73회 심화 Q8 X"
  },
  {
    "id": "73회_q8_1344",
    "type": "사건",
    "kind": "detail",
    "title": "내신좌평 내두좌평 등 6좌평의 관제를 마련하였다.",
    "description": "내신좌평 내두좌평 등 6좌평의 관제를 마련하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "73회 심화 Q8 O"
  },
  {
    "id": "73회_q9_1345",
    "type": "사건",
    "kind": "detail",
    "title": "태학과 경당을 두어 인재를 양성하였다.",
    "description": "태학과 경당을 두어 인재를 양성하였다.",
    "startYear": -37,
    "endYear": 668,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "고구려"
    ],
    "_src": "73회 심화 Q9 X"
  },
  {
    "id": "73회_q9_1346",
    "type": "사건",
    "kind": "detail",
    "title": "유랑민을 구휼하는 활인서를 설치하였다.",
    "description": "유랑민을 구휼하는 활인서를 설치하였다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "73회 심화 Q9 X"
  },
  {
    "id": "73회_q9_1347",
    "type": "사건",
    "kind": "detail",
    "title": "정사암 회의에서 국가 중대사를 결정하였다.",
    "description": "정사암 회의에서 국가 중대사를 결정하였다.",
    "startYear": -18,
    "endYear": 660,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "백제"
    ],
    "_src": "73회 심화 Q9 X"
  },
  {
    "id": "73회_q9_1348",
    "type": "사건",
    "kind": "detail",
    "title": "도병마사에서 변경의 군사 문제 등을 논의하였다.",
    "description": "도병마사에서 변경의 군사 문제 등을 논의하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "73회 심화 Q9 X"
  },
  {
    "id": "73회_q9_1349",
    "type": "사건",
    "kind": "detail",
    "title": "골품에 따라 관등 승진 일상생활 등을 엄격히 제한하였다...",
    "description": "골품에 따라 관등 승진 일상생활 등을 엄격히 제한하였다.",
    "startYear": -57,
    "endYear": 935,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "신라"
    ],
    "_src": "73회 심화 Q9 O"
  },
  {
    "id": "73회_q10_1350",
    "type": "사건",
    "kind": "detail",
    "title": "경주의 사심관으로 임명되었다.",
    "description": "경주의 사심관으로 임명되었다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "73회 심화 Q10 X"
  },
  {
    "id": "73회_q10_1351",
    "type": "사건",
    "kind": "detail",
    "title": "12목에 지방관을 처음으로 파견하였다.",
    "description": "12목에 지방관을 처음으로 파견하였다.",
    "startYear": 981,
    "endYear": 997,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 성종"
    ],
    "_src": "73회 심화 Q10 X"
  },
  {
    "id": "73회_q10_1352",
    "type": "사건",
    "kind": "detail",
    "title": "폐정 개혁을 목표로 정치도감을 설치하였다.",
    "description": "폐정 개혁을 목표로 정치도감을 설치하였다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "73회 심화 Q10 X"
  },
  {
    "id": "73회_q10_1353",
    "type": "사건",
    "kind": "detail",
    "title": "광평성을 비롯한 각종 정치 기구를 마련하였다.",
    "description": "광평성을 비롯한 각종 정치 기구를 마련하였다.",
    "startYear": 901,
    "endYear": 918,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "궁예"
    ],
    "_src": "73회 심화 Q10 O"
  },
  {
    "id": "73회_q10_1354",
    "type": "사건",
    "kind": "detail",
    "title": "오월(吳越)에 사신을 보내고 검교태보의 직을 받았다.",
    "description": "오월(吳越)에 사신을 보내고 검교태보의 직을 받았다.",
    "startYear": 900,
    "endYear": 936,
    "difficulty": 4,
    "era": "신라시대",
    "tags": [
      "후백제 견훤"
    ],
    "_src": "73회 심화 Q10 X"
  },
  {
    "id": "73회_q11_1355",
    "type": "사건",
    "kind": "detail",
    "title": "한양을 남경으로 승격시켰다.",
    "description": "한양을 남경으로 승격시켰다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "73회 심화 Q11 X"
  },
  {
    "id": "73회_q11_1356",
    "type": "사건",
    "kind": "detail",
    "title": "주전도감을 설치하여 해동통보를 발행하였다.",
    "description": "주전도감을 설치하여 해동통보를 발행하였다.",
    "startYear": 1095,
    "endYear": 1105,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 숙종"
    ],
    "_src": "73회 심화 Q11 X"
  },
  {
    "id": "73회_q11_1357",
    "type": "사건",
    "kind": "detail",
    "title": "쌍기의 건의를 받아들여 과거제를 실시하였다.",
    "description": "쌍기의 건의를 받아들여 과거제를 실시하였다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "73회 심화 Q11 X"
  },
  {
    "id": "73회_q11_1358",
    "type": "사건",
    "kind": "detail",
    "title": "청연각과 보문각을 두어 학문 연구를 장려하였다.",
    "description": "청연각과 보문각을 두어 학문 연구를 장려하였다.",
    "startYear": 1105,
    "endYear": 1122,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 예종"
    ],
    "_src": "73회 심화 Q11 X"
  },
  {
    "id": "73회_q11_1359",
    "type": "사건",
    "kind": "detail",
    "title": "정계와 계백료서를 지어 관리의 규범을 제시하였다.",
    "description": "정계와 계백료서를 지어 관리의 규범을 제시하였다.",
    "startYear": 918,
    "endYear": 943,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 태조"
    ],
    "_src": "73회 심화 Q11 O"
  },
  {
    "id": "73회_q12_1360",
    "type": "사건",
    "kind": "detail",
    "title": "벽란도가 국제 무역항으로 번성하였다.",
    "description": "벽란도가 국제 무역항으로 번성하였다.",
    "startYear": 918,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려"
    ],
    "_src": "73회 심화 Q12 O"
  },
  {
    "id": "73회_q12_1361",
    "type": "사건",
    "kind": "detail",
    "title": "고추 담배 등이 상품 작물로 재배되었다.",
    "description": "고추 담배 등이 상품 작물로 재배되었다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q12 X"
  },
  {
    "id": "73회_q12_1362",
    "type": "사건",
    "kind": "detail",
    "title": "시장을 감독하는 관청인 동시전이 설치되었다.",
    "description": "시장을 감독하는 관청인 동시전이 설치되었다.",
    "startYear": 500,
    "endYear": 514,
    "difficulty": 3,
    "era": "삼국시대",
    "tags": [
      "신라 지증왕"
    ],
    "_src": "73회 심화 Q12 X"
  },
  {
    "id": "73회_q12_1363",
    "type": "사건",
    "kind": "detail",
    "title": "광산을 전문적으로 경영하는 덕대가 활동하였다.",
    "description": "광산을 전문적으로 경영하는 덕대가 활동하였다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q12 X"
  },
  {
    "id": "73회_q12_1364",
    "type": "사건",
    "kind": "detail",
    "title": "삼남 지방의 농법을 소개한 농사직설이 보급되었다.",
    "description": "삼남 지방의 농법을 소개한 농사직설이 보급되었다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "73회 심화 Q12 X"
  },
  {
    "id": "73회_q13_1365",
    "type": "사건",
    "kind": "detail",
    "title": "최충헌이 봉사 10조를 올렸다.",
    "description": "최충헌이 봉사 10조를 올렸다.",
    "startYear": 1149,
    "endYear": 1219,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충헌"
    ],
    "_src": "73회 심화 Q13 X"
  },
  {
    "id": "73회_q13_1366",
    "type": "사건",
    "kind": "detail",
    "title": "동북 9성이 여진에 반환되었다.",
    "description": "동북 9성이 여진에 반환되었다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "73회 심화 Q13 X"
  },
  {
    "id": "73회_q13_1367",
    "type": "사건",
    "kind": "detail",
    "title": "국자감이 성균관으로 개칭되었다.",
    "description": "국자감이 성균관으로 개칭되었다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "73회 심화 Q13 X"
  },
  {
    "id": "73회_q13_1368",
    "type": "사건",
    "kind": "detail",
    "title": "묘청 등이 서경에서 난을 일으켰다.",
    "description": "묘청 등이 서경에서 난을 일으켰다.",
    "startYear": 1126,
    "endYear": 1136,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "이자겸/묘청"
    ],
    "_src": "73회 심화 Q13 O"
  },
  {
    "id": "73회_q13_1369",
    "type": "사건",
    "kind": "detail",
    "title": "광덕 준풍 등의 독자적 연호가 사용되었다.",
    "description": "광덕 준풍 등의 독자적 연호가 사용되었다.",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "73회 심화 Q13 X"
  },
  {
    "id": "73회_q14_1370",
    "type": "사건",
    "kind": "detail",
    "title": "안동도호부가 설치된 경위를 알아본다.",
    "description": "안동도호부가 설치된 경위를 알아본다.",
    "startYear": 645,
    "endYear": 676,
    "difficulty": 2,
    "era": "삼국시대",
    "tags": [
      "삼국 통일 과정"
    ],
    "_src": "73회 심화 Q14 X"
  },
  {
    "id": "73회_q14_1371",
    "type": "사건",
    "kind": "detail",
    "title": "특수 행정 구역인 소에 대한 차별을 조사한다.",
    "description": "특수 행정 구역인 소에 대한 차별을 조사한다.",
    "startYear": 1176,
    "endYear": 1177,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "망이·망소이의 난"
    ],
    "_src": "73회 심화 Q14 O"
  },
  {
    "id": "73회_q14_1372",
    "type": "사건",
    "kind": "detail",
    "title": "신라 말 호족 세력이 성장하게 된 계기를 살펴본다.",
    "description": "신라 말 호족 세력이 성장하게 된 계기를 살펴본다.",
    "startYear": 780,
    "endYear": 935,
    "difficulty": 2,
    "era": "신라시대",
    "tags": [
      "신라 하대"
    ],
    "_src": "73회 심화 Q14 X"
  },
  {
    "id": "73회_q14_1373",
    "type": "사건",
    "kind": "detail",
    "title": "통청 운동을 통해 청요직으로 진출한 인물을 검색한다.",
    "description": "통청 운동을 통해 청요직으로 진출한 인물을 검색한다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q14 X"
  },
  {
    "id": "73회_q14_1374",
    "type": "사건",
    "kind": "detail",
    "title": "경기에 한하여 설치된 과전이 농민에게 미친 영향을 파악...",
    "description": "경기에 한하여 설치된 과전이 농민에게 미친 영향을 파악한다.",
    "startYear": 1391,
    "endYear": 1466,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "과전법"
    ],
    "_src": "73회 심화 Q14 X"
  },
  {
    "id": "73회_q15_1375",
    "type": "사건",
    "kind": "detail",
    "title": "거란의 침입에 대비하여 설치되었다.",
    "description": "거란의 침입에 대비하여 설치되었다.",
    "startYear": 993,
    "endYear": 994,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "거란 1차 침입"
    ],
    "_src": "73회 심화 Q15 X"
  },
  {
    "id": "73회_q15_1376",
    "type": "사건",
    "kind": "detail",
    "title": "최씨 무신 정권의 군사적 기반이었다.",
    "description": "최씨 무신 정권의 군사적 기반이었다.",
    "startYear": 1270,
    "endYear": 1273,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "삼별초 항쟁"
    ],
    "_src": "73회 심화 Q15 O"
  },
  {
    "id": "73회_q15_1377",
    "type": "사건",
    "kind": "detail",
    "title": "원의 요청으로 일본 원정에 참여하였다.",
    "description": "원의 요청으로 일본 원정에 참여하였다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "73회 심화 Q15 X"
  },
  {
    "id": "73회_q15_1378",
    "type": "사건",
    "kind": "detail",
    "title": "신기군 신보군 항마군으로 편성되었다.",
    "description": "신기군 신보군 항마군으로 편성되었다.",
    "startYear": 1104,
    "endYear": 1108,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "여진 대응"
    ],
    "_src": "73회 심화 Q15 X"
  },
  {
    "id": "73회_q15_1379",
    "type": "사건",
    "kind": "detail",
    "title": "최영의 지휘 아래 홍산에서 왜구를 격퇴하였다.",
    "description": "최영의 지휘 아래 홍산에서 왜구를 격퇴하였다.",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "화통도감"
    ],
    "_src": "73회 심화 Q15 X"
  },
  {
    "id": "73회_q16_1380",
    "type": "사건",
    "kind": "detail",
    "title": "남북국이라는 용어가 처음 사용되었다.",
    "description": "남북국이라는 용어가 처음 사용되었다.",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q16 X"
  },
  {
    "id": "73회_q16_1381",
    "type": "사건",
    "kind": "detail",
    "title": "불교사를 중심으로 민간 설화를 담았다.",
    "description": "불교사를 중심으로 민간 설화를 담았다.",
    "startYear": 1206,
    "endYear": 1289,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "일연"
    ],
    "_src": "73회 심화 Q16 X"
  },
  {
    "id": "73회_q16_1382",
    "type": "사건",
    "kind": "detail",
    "title": "단군의 고조선 이야기가 수록되었다.",
    "description": "단군의 고조선 이야기가 수록되었다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "73회 심화 Q16 O"
  },
  {
    "id": "73회_q16_1383",
    "type": "사건",
    "kind": "detail",
    "title": "왕명에 의해 고승들의 전기가 기록되었다.",
    "description": "왕명에 의해 고승들의 전기가 기록되었다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "73회 심화 Q16 X"
  },
  {
    "id": "73회_q16_1384",
    "type": "사건",
    "kind": "detail",
    "title": "본기 열전 등으로 구성된 기전체 형식으로 서술되었다.",
    "description": "본기 열전 등으로 구성된 기전체 형식으로 서술되었다.",
    "startYear": 1075,
    "endYear": 1151,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "김부식"
    ],
    "_src": "73회 심화 Q16 X"
  },
  {
    "id": "73회_q17_1385",
    "type": "사건",
    "kind": "detail",
    "title": "대각국사 의천이 천태종을 개창하였다.",
    "description": "대각국사 의천이 천태종을 개창하였다.",
    "startYear": 1055,
    "endYear": 1101,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 의천"
    ],
    "_src": "73회 심화 Q17 X"
  },
  {
    "id": "73회_q17_1386",
    "type": "사건",
    "kind": "detail",
    "title": "신돈을 중심으로 전민변정 사업이 추진되었다.",
    "description": "신돈을 중심으로 전민변정 사업이 추진되었다.",
    "startYear": 1351,
    "endYear": 1374,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 공민왕"
    ],
    "_src": "73회 심화 Q17 O"
  },
  {
    "id": "73회_q17_1387",
    "type": "사건",
    "kind": "detail",
    "title": "만적이 개경에서 노비를 모아 반란을 모의하였다.",
    "description": "만적이 개경에서 노비를 모아 반란을 모의하였다.",
    "startYear": 1198,
    "endYear": 1198,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "만적의 난"
    ],
    "_src": "73회 심화 Q17 X"
  },
  {
    "id": "73회_q17_1388",
    "type": "사건",
    "kind": "detail",
    "title": "최충이 문헌공도를 설립하여 유학 교육에 힘썼다.",
    "description": "최충이 문헌공도를 설립하여 유학 교육에 힘썼다.",
    "startYear": 984,
    "endYear": 1068,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "최충"
    ],
    "_src": "73회 심화 Q17 X"
  },
  {
    "id": "73회_q17_1389",
    "type": "사건",
    "kind": "detail",
    "title": "이규보가 고구려 계승 의식을 강조한 동명왕편을 지었다.",
    "description": "이규보가 고구려 계승 의식을 강조한 동명왕편을 지었다.",
    "startYear": 1170,
    "endYear": 1392,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 후기"
    ],
    "_src": "73회 심화 Q17 X"
  },
  {
    "id": "73회_q18_1390",
    "type": "사건",
    "kind": "detail",
    "title": "광군을 조직하여 침입에 대비하였다.",
    "description": "광군을 조직하여 침입에 대비하였다.",
    "startYear": 993,
    "endYear": 994,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "거란 1차 침입"
    ],
    "_src": "73회 심화 Q18 X"
  },
  {
    "id": "73회_q18_1391",
    "type": "사건",
    "kind": "detail",
    "title": "경성과 경원에 무역소를 설치하였다.",
    "description": "경성과 경원에 무역소를 설치하였다.",
    "startYear": 1433,
    "endYear": 1449,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "4군 6진"
    ],
    "_src": "73회 심화 Q18 X"
  },
  {
    "id": "73회_q18_1392",
    "type": "사건",
    "kind": "detail",
    "title": "박위를 파견하여 근거지를 토벌하였다.",
    "description": "박위를 파견하여 근거지를 토벌하였다.",
    "startYear": 1377,
    "endYear": 1389,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "화통도감"
    ],
    "_src": "73회 심화 Q18 O"
  },
  {
    "id": "73회_q18_1393",
    "type": "사건",
    "kind": "detail",
    "title": "어영청을 중심으로 북벌을 추진하였다.",
    "description": "어영청을 중심으로 북벌을 추진하였다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "73회 심화 Q18 X"
  },
  {
    "id": "73회_q18_1394",
    "type": "사건",
    "kind": "detail",
    "title": "대장도감을 설치하여 팔만대장경을 간행하였다.",
    "description": "대장도감을 설치하여 팔만대장경을 간행하였다.",
    "startYear": 1231,
    "endYear": 1259,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "몽골 침입"
    ],
    "_src": "73회 심화 Q18 X"
  },
  {
    "id": "73회_q19_1395",
    "type": "사건",
    "kind": "detail",
    "title": "사초와 시정기 등을 종합하여 편찬하였다.",
    "description": "사초와 시정기 등을 종합하여 편찬하였다.",
    "startYear": 1392,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "춘추관"
    ],
    "_src": "73회 심화 Q19 X"
  },
  {
    "id": "73회_q19_1396",
    "type": "사건",
    "kind": "detail",
    "title": "청주 흥덕사에서 금속 활자본으로 간행되었다.",
    "description": "청주 흥덕사에서 금속 활자본으로 간행되었다.",
    "startYear": 1377,
    "endYear": 1377,
    "difficulty": 4,
    "era": "고려시대",
    "tags": [
      "직지심체요절"
    ],
    "_src": "73회 심화 Q19 X"
  },
  {
    "id": "73회_q19_1397",
    "type": "사건",
    "kind": "detail",
    "title": "병인양요 당시 일부가 프랑스군에게 약탈되었다.",
    "description": "병인양요 당시 일부가 프랑스군에게 약탈되었다.",
    "startYear": 1866,
    "endYear": 1866,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "병인양요"
    ],
    "_src": "73회 심화 Q19 X"
  },
  {
    "id": "73회_q19_1398",
    "type": "사건",
    "kind": "detail",
    "title": "허준이 우리나라와 중국의 의서를 망라하여 집대성하였다.",
    "description": "허준이 우리나라와 중국의 의서를 망라하여 집대성하였다.",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "73회 심화 Q19 X"
  },
  {
    "id": "73회_q19_1399",
    "type": "사건",
    "kind": "detail",
    "title": "국왕의 비서 기관에서 발행한 관보이다.",
    "description": "국왕의 비서 기관에서 발행한 관보이다.",
    "startYear": 1405,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "승정원"
    ],
    "_src": "73회 심화 Q19 O"
  },
  {
    "id": "73회_q20_1400",
    "type": "사건",
    "kind": "detail",
    "title": "불씨잡변을 지어 불교를 비판하였다.",
    "description": "불씨잡변을 지어 불교를 비판하였다.",
    "startYear": 1342,
    "endYear": 1398,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "정도전"
    ],
    "_src": "73회 심화 Q20 O"
  },
  {
    "id": "73회_q20_1401",
    "type": "사건",
    "kind": "detail",
    "title": "계유정난을 계기로 정계에서 축출되었다.",
    "description": "계유정난을 계기로 정계에서 축출되었다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "73회 심화 Q20 X"
  },
  {
    "id": "73회_q20_1402",
    "type": "사건",
    "kind": "detail",
    "title": "최초의 서원인 백운동 서원을 건립하였다.",
    "description": "최초의 서원인 백운동 서원을 건립하였다.",
    "startYear": 1495,
    "endYear": 1554,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "주세붕"
    ],
    "_src": "73회 심화 Q20 X"
  },
  {
    "id": "73회_q20_1403",
    "type": "사건",
    "kind": "detail",
    "title": "일본에 다녀와서 해동제국기를 편찬하였다.",
    "description": "일본에 다녀와서 해동제국기를 편찬하였다.",
    "startYear": 1417,
    "endYear": 1475,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 신숙주"
    ],
    "_src": "73회 심화 Q20 X"
  },
  {
    "id": "73회_q20_1404",
    "type": "사건",
    "kind": "detail",
    "title": "성리학의 개념을 도식으로 설명한 성학십도를 지었다.",
    "description": "성리학의 개념을 도식으로 설명한 성학십도를 지었다.",
    "startYear": 1501,
    "endYear": 1570,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이황"
    ],
    "_src": "73회 심화 Q20 X"
  },
  {
    "id": "73회_q21_1405",
    "type": "사건",
    "kind": "detail",
    "title": "수도 방어를 위해 금위영을 설치하였다.",
    "description": "수도 방어를 위해 금위영을 설치하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "73회 심화 Q21 X"
  },
  {
    "id": "73회_q21_1406",
    "type": "사건",
    "kind": "detail",
    "title": "음악 이론 등을 집대성한 악학궤범을 완성하였다.",
    "description": "음악 이론 등을 집대성한 악학궤범을 완성하였다.",
    "startYear": 1469,
    "endYear": 1494,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 성종"
    ],
    "_src": "73회 심화 Q21 X"
  },
  {
    "id": "73회_q21_1407",
    "type": "사건",
    "kind": "detail",
    "title": "한양을 기준으로 한 역법서인 칠정산을 간행하였다.",
    "description": "한양을 기준으로 한 역법서인 칠정산을 간행하였다.",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "73회 심화 Q21 O"
  },
  {
    "id": "73회_q21_1408",
    "type": "사건",
    "kind": "detail",
    "title": "역대 문물제도를 정리한 동국문헌비고를 편찬하였다.",
    "description": "역대 문물제도를 정리한 동국문헌비고를 편찬하였다.",
    "startYear": 1724,
    "endYear": 1776,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 영조"
    ],
    "_src": "73회 심화 Q21 X"
  },
  {
    "id": "73회_q21_1409",
    "type": "사건",
    "kind": "detail",
    "title": "현직 관리에게만 수조지를 지급하는 직전법을 실시하였다.",
    "description": "현직 관리에게만 수조지를 지급하는 직전법을 실시하였다.",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "73회 심화 Q21 X"
  },
  {
    "id": "73회_q22_1410",
    "type": "사건",
    "kind": "detail",
    "title": "나선 정벌에 조총 부대를 파견하였다.",
    "description": "나선 정벌에 조총 부대를 파견하였다.",
    "startYear": 1649,
    "endYear": 1659,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 효종"
    ],
    "_src": "73회 심화 Q22 X"
  },
  {
    "id": "73회_q22_1411",
    "type": "사건",
    "kind": "detail",
    "title": "하정사 천추사 등 사절단을 보내었다.",
    "description": "하정사 천추사 등 사절단을 보내었다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "73회 심화 Q22 O"
  },
  {
    "id": "73회_q22_1412",
    "type": "사건",
    "kind": "detail",
    "title": "백두산정계비를 세워 국경을 획정하였다.",
    "description": "백두산정계비를 세워 국경을 획정하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "73회 심화 Q22 X"
  },
  {
    "id": "73회_q22_1413",
    "type": "사건",
    "kind": "detail",
    "title": "한성에 동평관을 두어 무역을 허용하였다.",
    "description": "한성에 동평관을 두어 무역을 허용하였다.",
    "startYear": 1400,
    "endYear": 1418,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 태종"
    ],
    "_src": "73회 심화 Q22 X"
  },
  {
    "id": "73회_q22_1414",
    "type": "사건",
    "kind": "detail",
    "title": "공녀를 보내기 위해 결혼도감을 설치하였다.",
    "description": "공녀를 보내기 위해 결혼도감을 설치하였다.",
    "startYear": 1274,
    "endYear": 1308,
    "difficulty": 3,
    "era": "고려시대",
    "tags": [
      "고려 충렬왕"
    ],
    "_src": "73회 심화 Q22 X"
  },
  {
    "id": "73회_q23_1415",
    "type": "사건",
    "kind": "detail",
    "title": "이괄의 난이 일어나 공주로 피란하다",
    "description": "이괄의 난이 일어나 공주로 피란하다",
    "startYear": 1624,
    "endYear": 1624,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "이괄의 난"
    ],
    "_src": "73회 심화 Q23 X"
  },
  {
    "id": "73회_q23_1416",
    "type": "사건",
    "kind": "detail",
    "title": "단종의 복위를 꾀한 성삼문 등을 처형하다",
    "description": "단종의 복위를 꾀한 성삼문 등을 처형하다",
    "startYear": 1455,
    "endYear": 1468,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세조"
    ],
    "_src": "73회 심화 Q23 X"
  },
  {
    "id": "73회_q23_1417",
    "type": "사건",
    "kind": "detail",
    "title": "영창 대군을 죽이고 인목 대비를 유폐하다",
    "description": "영창 대군을 죽이고 인목 대비를 유폐하다",
    "startYear": 1608,
    "endYear": 1623,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "광해군"
    ],
    "_src": "73회 심화 Q23 X"
  },
  {
    "id": "73회_q23_1418",
    "type": "사건",
    "kind": "detail",
    "title": "위훈 삭제를 주장한 조광조 일파를 제거하다",
    "description": "위훈 삭제를 주장한 조광조 일파를 제거하다",
    "startYear": 1519,
    "endYear": 1519,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "기묘사화"
    ],
    "_src": "73회 심화 Q23 X"
  },
  {
    "id": "73회_q23_1419",
    "type": "사건",
    "kind": "detail",
    "title": "폐비 윤씨 사사 사건을 빌미로 신하들을 숙청하다",
    "description": "폐비 윤씨 사사 사건을 빌미로 신하들을 숙청하다",
    "startYear": 1494,
    "endYear": 1506,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "연산군"
    ],
    "_src": "73회 심화 Q23 O"
  },
  {
    "id": "73회_q24_1420",
    "type": "사건",
    "kind": "detail",
    "title": "(가) 강화산성 - 정봉수가 후금의 침입에 맞서 싸웠다...",
    "description": "(가) 강화산성 - 정봉수가 후금의 침입에 맞서 싸웠다.",
    "startYear": 1627,
    "endYear": 1627,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "정묘호란"
    ],
    "_src": "73회 심화 Q24 X"
  },
  {
    "id": "73회_q24_1421",
    "type": "사건",
    "kind": "detail",
    "title": "(나) 북한산성 - 김준룡이 근왕병을 이끌고 적장을 사...",
    "description": "(나) 북한산성 - 김준룡이 근왕병을 이끌고 적장을 사살하였다.",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "병자호란"
    ],
    "_src": "73회 심화 Q24 X"
  },
  {
    "id": "73회_q24_1422",
    "type": "사건",
    "kind": "detail",
    "title": "(다) 서울 한양도성 - 신립이 배수의 진을 치고 전투...",
    "description": "(다) 서울 한양도성 - 신립이 배수의 진을 치고 전투를 벌였다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "73회 심화 Q24 X"
  },
  {
    "id": "73회_q24_1423",
    "type": "사건",
    "kind": "detail",
    "title": "(라) 남한산성 - 병자호란 때 인조가 피란하여 항전하...",
    "description": "(라) 남한산성 - 병자호란 때 인조가 피란하여 항전하였다.",
    "startYear": 1636,
    "endYear": 1637,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "병자호란"
    ],
    "_src": "73회 심화 Q24 O"
  },
  {
    "id": "73회_q24_1424",
    "type": "사건",
    "kind": "detail",
    "title": "(마) 수원 화성 - 임진왜란 때 권율이 일본군을 크게...",
    "description": "(마) 수원 화성 - 임진왜란 때 권율이 일본군을 크게 물리쳤다.",
    "startYear": 1592,
    "endYear": 1598,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "임진왜란"
    ],
    "_src": "73회 심화 Q24 X"
  },
  {
    "id": "73회_q25_1425",
    "type": "사건",
    "kind": "detail",
    "title": "사헌부 사간원과 함께 3사로 불렸다.",
    "description": "사헌부 사간원과 함께 3사로 불렸다.",
    "startYear": 1463,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "홍문관"
    ],
    "_src": "73회 심화 Q25 X"
  },
  {
    "id": "73회_q25_1426",
    "type": "사건",
    "kind": "detail",
    "title": "소속 관원을 은대 학사라고도 칭하였다.",
    "description": "소속 관원을 은대 학사라고도 칭하였다.",
    "startYear": 1405,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "승정원"
    ],
    "_src": "73회 심화 Q25 X"
  },
  {
    "id": "73회_q25_1427",
    "type": "사건",
    "kind": "detail",
    "title": "서얼 출신 학자들이 검서관에 등용되었다.",
    "description": "서얼 출신 학자들이 검서관에 등용되었다.",
    "startYear": 1776,
    "endYear": 1910,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "규장각"
    ],
    "_src": "73회 심화 Q25 X"
  },
  {
    "id": "73회_q25_1428",
    "type": "사건",
    "kind": "detail",
    "title": "관할 유향소 임원의 임명권을 행사하였다.",
    "description": "관할 유향소 임원의 임명권을 행사하였다.",
    "startYear": 1392,
    "endYear": 1603,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "경재소"
    ],
    "_src": "73회 심화 Q25 O"
  },
  {
    "id": "73회_q25_1429",
    "type": "사건",
    "kind": "detail",
    "title": "대사성 이하 좨주 직강 등의 관직을 두었다.",
    "description": "대사성 이하 좨주 직강 등의 관직을 두었다.",
    "startYear": 1398,
    "endYear": 1894,
    "difficulty": 4,
    "era": "조선시대",
    "tags": [
      "성균관"
    ],
    "_src": "73회 심화 Q25 X"
  },
  {
    "id": "73회_q27_1430",
    "type": "사건",
    "kind": "detail",
    "title": "윤지충 등이 처형된 신해박해가 일어났다.",
    "description": "윤지충 등이 처형된 신해박해가 일어났다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "73회 심화 Q27 X"
  },
  {
    "id": "73회_q27_1431",
    "type": "사건",
    "kind": "detail",
    "title": "오페르트가 남연군 묘 도굴을 시도하였다.",
    "description": "오페르트가 남연군 묘 도굴을 시도하였다.",
    "startYear": 1868,
    "endYear": 1868,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "오페르트 사건"
    ],
    "_src": "73회 심화 Q27 X"
  },
  {
    "id": "73회_q27_1432",
    "type": "사건",
    "kind": "detail",
    "title": "국왕의 친위 부대인 장용영이 창설되었다.",
    "description": "국왕의 친위 부대인 장용영이 창설되었다.",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "73회 심화 Q27 X"
  },
  {
    "id": "73회_q27_1433",
    "type": "사건",
    "kind": "detail",
    "title": "경신환국 등 여러 차례 환국이 발생하였다.",
    "description": "경신환국 등 여러 차례 환국이 발생하였다.",
    "startYear": 1674,
    "endYear": 1720,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 숙종"
    ],
    "_src": "73회 심화 Q27 X"
  },
  {
    "id": "73회_q27_1434",
    "type": "사건",
    "kind": "detail",
    "title": "박규수의 건의로 삼정이정청이 설치되었다.",
    "description": "박규수의 건의로 삼정이정청이 설치되었다.",
    "startYear": 1862,
    "endYear": 1862,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "임술농민봉기"
    ],
    "_src": "73회 심화 Q27 O"
  },
  {
    "id": "73회_q28_1435",
    "type": "사건",
    "kind": "detail",
    "title": "토산물을 쌀 동전 등으로 납부하게 한 원인",
    "description": "토산물을 쌀 동전 등으로 납부하게 한 원인",
    "startYear": 1608,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "대동법"
    ],
    "_src": "73회 심화 Q28 X"
  },
  {
    "id": "73회_q28_1436",
    "type": "사건",
    "kind": "detail",
    "title": "균역법 실시로 인한 세입 감소분의 보충 방안",
    "description": "균역법 실시로 인한 세입 감소분의 보충 방안",
    "startYear": 1750,
    "endYear": 1894,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "균역법"
    ],
    "_src": "73회 심화 Q28 O"
  },
  {
    "id": "73회_q28_1437",
    "type": "사건",
    "kind": "detail",
    "title": "시전 상인의 특권을 축소한 신해통공 단행 배경",
    "description": "시전 상인의 특권을 축소한 신해통공 단행 배경",
    "startYear": 1776,
    "endYear": 1800,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 정조"
    ],
    "_src": "73회 심화 Q28 X"
  },
  {
    "id": "73회_q28_1438",
    "type": "사건",
    "kind": "detail",
    "title": "전세를 풍흉에 따라 9등급으로 차등 부과한 이유",
    "description": "전세를 풍흉에 따라 9등급으로 차등 부과한 이유",
    "startYear": 1418,
    "endYear": 1450,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 세종"
    ],
    "_src": "73회 심화 Q28 X"
  },
  {
    "id": "73회_q28_1439",
    "type": "사건",
    "kind": "detail",
    "title": "설점수세제를 시행하여 민간의 광산 개발을 허용한 목적",
    "description": "설점수세제를 시행하여 민간의 광산 개발을 허용한 목적",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q28 X"
  },
  {
    "id": "73회_q29_1440",
    "type": "사건",
    "kind": "detail",
    "title": "청군의 개입으로 3일 만에 실패하였다.",
    "description": "청군의 개입으로 3일 만에 실패하였다.",
    "startYear": 1884,
    "endYear": 1884,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑신정변"
    ],
    "_src": "73회 심화 Q29 O"
  },
  {
    "id": "73회_q29_1441",
    "type": "사건",
    "kind": "detail",
    "title": "전개 과정에서 홍범 14조가 반포되었다.",
    "description": "전개 과정에서 홍범 14조가 반포되었다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "73회 심화 Q29 X"
  },
  {
    "id": "73회_q29_1442",
    "type": "사건",
    "kind": "detail",
    "title": "통리기무아문이 설치되는 계기가 되었다.",
    "description": "통리기무아문이 설치되는 계기가 되었다.",
    "startYear": 1880,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "통리기무아문"
    ],
    "_src": "73회 심화 Q29 X"
  },
  {
    "id": "73회_q29_1443",
    "type": "사건",
    "kind": "detail",
    "title": "조일 통상 장정이 체결되는 결과를 초래하였다.",
    "description": "조일 통상 장정이 체결되는 결과를 초래하였다.",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "73회 심화 Q29 X"
  },
  {
    "id": "73회_q29_1444",
    "type": "사건",
    "kind": "detail",
    "title": "구식 군인에 대한 차별 대우가 발단이 되어 일어났다.",
    "description": "구식 군인에 대한 차별 대우가 발단이 되어 일어났다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "임오군란"
    ],
    "_src": "73회 심화 Q29 X"
  },
  {
    "id": "73회_q30_1445",
    "type": "사건",
    "kind": "detail",
    "title": "빈민을 구휼하는 제위보의 관리",
    "description": "빈민을 구휼하는 제위보의 관리",
    "startYear": 949,
    "endYear": 975,
    "difficulty": 2,
    "era": "고려시대",
    "tags": [
      "고려 광종"
    ],
    "_src": "73회 심화 Q30 O"
  },
  {
    "id": "73회_q30_1446",
    "type": "사건",
    "kind": "detail",
    "title": "시사를 조직하여 시를 낭송하는 중인",
    "description": "시사를 조직하여 시를 낭송하는 중인",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q30 X"
  },
  {
    "id": "73회_q30_1447",
    "type": "사건",
    "kind": "detail",
    "title": "상평통보로 물건을 거래하는 보부상",
    "description": "상평통보로 물건을 거래하는 보부상",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q30 X"
  },
  {
    "id": "73회_q30_1448",
    "type": "사건",
    "kind": "detail",
    "title": "세책가에서 홍길동전을 빌리는 부녀자",
    "description": "세책가에서 홍길동전을 빌리는 부녀자",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q30 X"
  },
  {
    "id": "73회_q30_1449",
    "type": "사건",
    "kind": "detail",
    "title": "송파장에서 산대놀이 공연을 하는 광대",
    "description": "송파장에서 산대놀이 공연을 하는 광대",
    "startYear": 1700,
    "endYear": 1876,
    "difficulty": 2,
    "era": "조선시대",
    "tags": [
      "조선 후기"
    ],
    "_src": "73회 심화 Q30 X"
  },
  {
    "id": "73회_q31_1450",
    "type": "사건",
    "kind": "detail",
    "title": "남접과 북접이 논산에서 연합하였다.",
    "description": "남접과 북접이 논산에서 연합하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "73회 심화 Q31 X"
  },
  {
    "id": "73회_q31_1451",
    "type": "사건",
    "kind": "detail",
    "title": "최제우가 혹세무민의 죄로 처형되었다.",
    "description": "최제우가 혹세무민의 죄로 처형되었다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "73회 심화 Q31 X"
  },
  {
    "id": "73회_q31_1452",
    "type": "사건",
    "kind": "detail",
    "title": "일본이 군대를 동원하여 경복궁을 점령하였다.",
    "description": "일본이 군대를 동원하여 경복궁을 점령하였다.",
    "startYear": 1894,
    "endYear": 1896,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "갑오개혁"
    ],
    "_src": "73회 심화 Q31 X"
  },
  {
    "id": "73회_q31_1453",
    "type": "사건",
    "kind": "detail",
    "title": "농민군이 황룡촌 전투에서 관군에 승리하였다.",
    "description": "농민군이 황룡촌 전투에서 관군에 승리하였다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "73회 심화 Q31 O"
  },
  {
    "id": "73회_q31_1454",
    "type": "사건",
    "kind": "detail",
    "title": "우금치에서 농민군이 관군과 일본군에 맞서 싸웠다.",
    "description": "우금치에서 농민군이 관군과 일본군에 맞서 싸웠다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "73회 심화 Q31 X"
  },
  {
    "id": "73회_q32_1455",
    "type": "사건",
    "kind": "detail",
    "title": "동양 척식 주식회사가 설립되었다.",
    "description": "동양 척식 주식회사가 설립되었다.",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "73회 심화 Q32 X"
  },
  {
    "id": "73회_q32_1456",
    "type": "사건",
    "kind": "detail",
    "title": "일제가 황무지 개간권을 요구하였다.",
    "description": "일제가 황무지 개간권을 요구하였다.",
    "startYear": 1904,
    "endYear": 1904,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "보안회"
    ],
    "_src": "73회 심화 Q32 X"
  },
  {
    "id": "73회_q32_1457",
    "type": "사건",
    "kind": "detail",
    "title": "조청 상민 수륙 무역 장정이 체결되었다.",
    "description": "조청 상민 수륙 무역 장정이 체결되었다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "조청상민수륙무역장정"
    ],
    "_src": "73회 심화 Q32 O"
  },
  {
    "id": "73회_q32_1458",
    "type": "사건",
    "kind": "detail",
    "title": "메가타의 주도로 화폐 정리 사업이 시행되었다.",
    "description": "메가타의 주도로 화폐 정리 사업이 시행되었다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "73회 심화 Q32 X"
  },
  {
    "id": "73회_q32_1459",
    "type": "사건",
    "kind": "detail",
    "title": "회사 설립을 허가제로 하는 회사령이 공포되었다.",
    "description": "회사 설립을 허가제로 하는 회사령이 공포되었다.",
    "startYear": 1910,
    "endYear": 1920,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "회사령"
    ],
    "_src": "73회 심화 Q32 X"
  },
  {
    "id": "73회_q33_1460",
    "type": "사건",
    "kind": "detail",
    "title": "대한매일신보의 지원을 받아 확산되었다.",
    "description": "대한매일신보의 지원을 받아 확산되었다.",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "국채 보상 운동"
    ],
    "_src": "73회 심화 Q33 O"
  },
  {
    "id": "73회_q33_1461",
    "type": "사건",
    "kind": "detail",
    "title": "조선 총독부의 탄압과 방해로 실패하였다.",
    "description": "조선 총독부의 탄압과 방해로 실패하였다.",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민립 대학 설립 운동"
    ],
    "_src": "73회 심화 Q33 X"
  },
  {
    "id": "73회_q33_1462",
    "type": "사건",
    "kind": "detail",
    "title": "백정에 대한 사회적 차별 철폐를 요구하였다.",
    "description": "백정에 대한 사회적 차별 철폐를 요구하였다.",
    "startYear": 1923,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "형평 운동"
    ],
    "_src": "73회 심화 Q33 X"
  },
  {
    "id": "73회_q33_1463",
    "type": "사건",
    "kind": "detail",
    "title": "조선 민립 대학 기성회에서 모금 활동을 주도하였다.",
    "description": "조선 민립 대학 기성회에서 모금 활동을 주도하였다.",
    "startYear": 1923,
    "endYear": 1925,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "민립 대학 설립 운동"
    ],
    "_src": "73회 심화 Q33 X"
  },
  {
    "id": "73회_q33_1464",
    "type": "사건",
    "kind": "detail",
    "title": "일본 프랑스 등의 노동 단체로부터 격려 전문을 받았다.",
    "description": "일본 프랑스 등의 노동 단체로부터 격려 전문을 받았다.",
    "startYear": 1929,
    "endYear": 1929,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "원산 총파업"
    ],
    "_src": "73회 심화 Q33 X"
  },
  {
    "id": "73회_q34_1465",
    "type": "사건",
    "kind": "detail",
    "title": "러일 전쟁 중에 체결되었다.",
    "description": "러일 전쟁 중에 체결되었다.",
    "startYear": 1904,
    "endYear": 1905,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "러일전쟁"
    ],
    "_src": "73회 심화 Q34 X"
  },
  {
    "id": "73회_q34_1466",
    "type": "사건",
    "kind": "detail",
    "title": "최혜국 대우를 최초로 규정하였다.",
    "description": "최혜국 대우를 최초로 규정하였다.",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "73회 심화 Q34 X"
  },
  {
    "id": "73회_q34_1467",
    "type": "사건",
    "kind": "detail",
    "title": "천주교 포교 허용의 근거가 되었다.",
    "description": "천주교 포교 허용의 근거가 되었다.",
    "startYear": 1886,
    "endYear": 1886,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "조프 수호 통상 조약"
    ],
    "_src": "73회 심화 Q34 X"
  },
  {
    "id": "73회_q34_1468",
    "type": "사건",
    "kind": "detail",
    "title": "통감부가 설치되는 결과를 초래하였다.",
    "description": "통감부가 설치되는 결과를 초래하였다.",
    "startYear": 1905,
    "endYear": 1905,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "을사늑약"
    ],
    "_src": "73회 심화 Q34 O"
  },
  {
    "id": "73회_q34_1469",
    "type": "사건",
    "kind": "detail",
    "title": "스티븐스가 외교 고문으로 파견되는 배경이 되었다.",
    "description": "스티븐스가 외교 고문으로 파견되는 배경이 되었다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "73회 심화 Q34 X"
  },
  {
    "id": "73회_q35_1470",
    "type": "사건",
    "kind": "detail",
    "title": "척화비를 세우기 위해 돌을 다듬는 석공",
    "description": "척화비를 세우기 위해 돌을 다듬는 석공",
    "startYear": 1820,
    "endYear": 1898,
    "difficulty": 3,
    "era": "조선시대",
    "tags": [
      "흥선대원군"
    ],
    "_src": "73회 심화 Q35 X"
  },
  {
    "id": "73회_q35_1471",
    "type": "사건",
    "kind": "detail",
    "title": "거문도를 불법 점령하고 있는 영국 군인",
    "description": "거문도를 불법 점령하고 있는 영국 군인",
    "startYear": 1885,
    "endYear": 1887,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "거문도 사건"
    ],
    "_src": "73회 심화 Q35 X"
  },
  {
    "id": "73회_q35_1472",
    "type": "사건",
    "kind": "detail",
    "title": "연무당에서 일본과 조약을 체결하는 관리",
    "description": "연무당에서 일본과 조약을 체결하는 관리",
    "startYear": 1876,
    "endYear": 1876,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "강화도 조약"
    ],
    "_src": "73회 심화 Q35 X"
  },
  {
    "id": "73회_q35_1473",
    "type": "사건",
    "kind": "detail",
    "title": "보빙사의 일원으로 미국에 파견되는 역관",
    "description": "보빙사의 일원으로 미국에 파견되는 역관",
    "startYear": 1882,
    "endYear": 1882,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조미수호통상조약"
    ],
    "_src": "73회 심화 Q35 X"
  },
  {
    "id": "73회_q35_1474",
    "type": "사건",
    "kind": "detail",
    "title": "경부선 철도 개통식을 취재하는 신문 기자",
    "description": "경부선 철도 개통식을 취재하는 신문 기자",
    "startYear": 1904,
    "endYear": 1905,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "러일전쟁"
    ],
    "_src": "73회 심화 Q35 O"
  },
  {
    "id": "73회_q36_1475",
    "type": "사건",
    "kind": "detail",
    "title": "한인 자치 기구인 경학사를 조직하였다.",
    "description": "한인 자치 기구인 경학사를 조직하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "73회 심화 Q36 O"
  },
  {
    "id": "73회_q36_1476",
    "type": "사건",
    "kind": "detail",
    "title": "유학생을 중심으로 2·8 독립 선언서를 발표하였다.",
    "description": "유학생을 중심으로 2·8 독립 선언서를 발표하였다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "2·8 독립 선언"
    ],
    "_src": "73회 심화 Q36 X"
  },
  {
    "id": "73회_q36_1477",
    "type": "사건",
    "kind": "detail",
    "title": "대조선 국민군단을 조직하여 군사 훈련을 실시하였다.",
    "description": "대조선 국민군단을 조직하여 군사 훈련을 실시하였다.",
    "startYear": 1914,
    "endYear": 1917,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대조선 국민 군단"
    ],
    "_src": "73회 심화 Q36 X"
  },
  {
    "id": "73회_q36_1478",
    "type": "사건",
    "kind": "detail",
    "title": "대한 광복군 정부를 수립하여 무장 투쟁을 준비하였다.",
    "description": "대한 광복군 정부를 수립하여 무장 투쟁을 준비하였다.",
    "startYear": 1914,
    "endYear": 1914,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한 광복군 정부"
    ],
    "_src": "73회 심화 Q36 X"
  },
  {
    "id": "73회_q36_1479",
    "type": "사건",
    "kind": "detail",
    "title": "독립군 비행사 양성을 위해 한인 비행 학교를 설립하였다...",
    "description": "독립군 비행사 양성을 위해 한인 비행 학교를 설립하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "73회 심화 Q36 X"
  },
  {
    "id": "73회_q37_1480",
    "type": "사건",
    "kind": "detail",
    "title": "국가 총동원법을 공포하였다.",
    "description": "국가 총동원법을 공포하였다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "73회 심화 Q37 X"
  },
  {
    "id": "73회_q37_1481",
    "type": "사건",
    "kind": "detail",
    "title": "산미 증식 계획을 시행하였다.",
    "description": "산미 증식 계획을 시행하였다.",
    "startYear": 1920,
    "endYear": 1934,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "산미 증식 계획"
    ],
    "_src": "73회 심화 Q37 X"
  },
  {
    "id": "73회_q37_1482",
    "type": "사건",
    "kind": "detail",
    "title": "토지 조사 사업을 실시하였다.",
    "description": "토지 조사 사업을 실시하였다.",
    "startYear": 1912,
    "endYear": 1918,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "토지조사사업"
    ],
    "_src": "73회 심화 Q37 O"
  },
  {
    "id": "73회_q37_1483",
    "type": "사건",
    "kind": "detail",
    "title": "황국 신민 서사의 암송을 강요하였다.",
    "description": "황국 신민 서사의 암송을 강요하였다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "73회 심화 Q37 X"
  },
  {
    "id": "73회_q37_1484",
    "type": "사건",
    "kind": "detail",
    "title": "조선 사상범 예방 구금령을 제정하였다.",
    "description": "조선 사상범 예방 구금령을 제정하였다.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "73회 심화 Q37 X"
  },
  {
    "id": "73회_q38_1485",
    "type": "사건",
    "kind": "detail",
    "title": "한글 맞춤법 통일안을 제정하였다.",
    "description": "한글 맞춤법 통일안을 제정하였다.",
    "startYear": 1931,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선어학회"
    ],
    "_src": "73회 심화 Q38 X"
  },
  {
    "id": "73회_q38_1486",
    "type": "사건",
    "kind": "detail",
    "title": "기관지로 진단 학보를 발행하였다.",
    "description": "기관지로 진단 학보를 발행하였다.",
    "startYear": 1934,
    "endYear": 1945,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "진단학회"
    ],
    "_src": "73회 심화 Q38 X"
  },
  {
    "id": "73회_q38_1487",
    "type": "사건",
    "kind": "detail",
    "title": "오산 학교를 설립하여 인재를 양성하였다.",
    "description": "오산 학교를 설립하여 인재를 양성하였다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "73회 심화 Q38 X"
  },
  {
    "id": "73회_q38_1488",
    "type": "사건",
    "kind": "detail",
    "title": "김기전 방정환 등이 주축이 되어 활동하였다.",
    "description": "김기전 방정환 등이 주축이 되어 활동하였다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "73회 심화 Q38 O"
  },
  {
    "id": "73회_q38_1489",
    "type": "사건",
    "kind": "detail",
    "title": "여성 교육의 중요성을 강조한 여권통문을 발표하였다.",
    "description": "여성 교육의 중요성을 강조한 여권통문을 발표하였다.",
    "startYear": 1896,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "독립협회"
    ],
    "_src": "73회 심화 Q38 X"
  },
  {
    "id": "73회_q39_1490",
    "type": "사건",
    "kind": "detail",
    "title": "근우회 창립총회에 참여하는 학생",
    "description": "근우회 창립총회에 참여하는 학생",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "근우회"
    ],
    "_src": "73회 심화 Q39 X"
  },
  {
    "id": "73회_q39_1491",
    "type": "사건",
    "kind": "detail",
    "title": "경성 제국 대학 설립을 추진하는 관리",
    "description": "경성 제국 대학 설립을 추진하는 관리",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "73회 심화 Q39 X"
  },
  {
    "id": "73회_q39_1492",
    "type": "사건",
    "kind": "detail",
    "title": "원각사에서 연극 은세계를 공연하는 배우",
    "description": "원각사에서 연극 은세계를 공연하는 배우",
    "startYear": 1897,
    "endYear": 1910,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한제국"
    ],
    "_src": "73회 심화 Q39 X"
  },
  {
    "id": "73회_q39_1493",
    "type": "사건",
    "kind": "detail",
    "title": "서울 진공 작전에 참여하는 13도 창의군 의병",
    "description": "서울 진공 작전에 참여하는 13도 창의군 의병",
    "startYear": 1907,
    "endYear": 1908,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "정미의병"
    ],
    "_src": "73회 심화 Q39 X"
  },
  {
    "id": "73회_q39_1494",
    "type": "사건",
    "kind": "detail",
    "title": "혁명적 농민 조합을 결성하여 일제에 저항하는 농민",
    "description": "혁명적 농민 조합을 결성하여 일제에 저항하는 농민",
    "startYear": 1920,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "농민 운동"
    ],
    "_src": "73회 심화 Q39 O"
  },
  {
    "id": "73회_q40_1495",
    "type": "사건",
    "kind": "detail",
    "title": "순종의 인산일을 기회로 삼아 일어났다.",
    "description": "순종의 인산일을 기회로 삼아 일어났다.",
    "startYear": 1926,
    "endYear": 1926,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6·10 만세 운동"
    ],
    "_src": "73회 심화 Q40 X"
  },
  {
    "id": "73회_q40_1496",
    "type": "사건",
    "kind": "detail",
    "title": "조선어 학회가 해산되는 결과를 가져왔다.",
    "description": "조선어 학회가 해산되는 결과를 가져왔다.",
    "startYear": 1931,
    "endYear": 1942,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "조선어학회"
    ],
    "_src": "73회 심화 Q40 X"
  },
  {
    "id": "73회_q40_1497",
    "type": "사건",
    "kind": "detail",
    "title": "정우회 선언을 발표하는 데 영향을 주었다.",
    "description": "정우회 선언을 발표하는 데 영향을 주었다.",
    "startYear": 1927,
    "endYear": 1931,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신간회"
    ],
    "_src": "73회 심화 Q40 X"
  },
  {
    "id": "73회_q40_1498",
    "type": "사건",
    "kind": "detail",
    "title": "전국적인 시위와 동맹 휴학으로 확산되었다.",
    "description": "전국적인 시위와 동맹 휴학으로 확산되었다.",
    "startYear": 1929,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "광주학생항일운동"
    ],
    "_src": "73회 심화 Q40 O"
  },
  {
    "id": "73회_q40_1499",
    "type": "사건",
    "kind": "detail",
    "title": "일제가 이른바 문화 통치를 실시하는 계기가 되었다.",
    "description": "일제가 이른바 문화 통치를 실시하는 계기가 되었다.",
    "startYear": 1919,
    "endYear": 1919,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "3·1 운동"
    ],
    "_src": "73회 심화 Q40 X"
  },
  {
    "id": "73회_q41_1500",
    "type": "사건",
    "kind": "detail",
    "title": "아침 이슬 건전 가요에서 금지곡으로 지정되다",
    "description": "아침 이슬 건전 가요에서 금지곡으로 지정되다",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "73회 심화 Q41 O"
  },
  {
    "id": "73회_q41_1501",
    "type": "사건",
    "kind": "detail",
    "title": "병정님 조선인에 대한 징병제 실시를 미화하다",
    "description": "병정님 조선인에 대한 징병제 실시를 미화하다",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "73회 심화 Q41 X"
  },
  {
    "id": "73회_q41_1502",
    "type": "사건",
    "kind": "detail",
    "title": "경성 방송국 우리말 방송을 검열하여 송출하다",
    "description": "경성 방송국 우리말 방송을 검열하여 송출하다",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "73회 심화 Q41 X"
  },
  {
    "id": "73회_q41_1503",
    "type": "사건",
    "kind": "detail",
    "title": "미쓰코시 백화점 자본주의적 소비문화가 이식되다",
    "description": "미쓰코시 백화점 자본주의적 소비문화가 이식되다",
    "startYear": 1920,
    "endYear": 1940,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "일제강점기 사회상"
    ],
    "_src": "73회 심화 Q41 X"
  },
  {
    "id": "73회_q41_1504",
    "type": "사건",
    "kind": "detail",
    "title": "신여성 여권 신장 등의 내용으로 여성을 계몽하다",
    "description": "신여성 여권 신장 등의 내용으로 여성을 계몽하다",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "73회 심화 Q41 X"
  },
  {
    "id": "73회_q42_1505",
    "type": "사건",
    "kind": "detail",
    "title": "일제가 조작한 105인 사건으로 와해되었다.",
    "description": "일제가 조작한 105인 사건으로 와해되었다.",
    "startYear": 1907,
    "endYear": 1911,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "신민회"
    ],
    "_src": "73회 심화 Q42 X"
  },
  {
    "id": "73회_q42_1506",
    "type": "사건",
    "kind": "detail",
    "title": "파리 강화 회의에 독립 청원서를 제출하였다.",
    "description": "파리 강화 회의에 독립 청원서를 제출하였다.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "73회 심화 Q42 X"
  },
  {
    "id": "73회_q42_1507",
    "type": "사건",
    "kind": "detail",
    "title": "단원인 윤봉길이 훙커우 공원 의거를 실행하였다.",
    "description": "단원인 윤봉길이 훙커우 공원 의거를 실행하였다.",
    "startYear": 1931,
    "endYear": 1935,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "한인 애국단"
    ],
    "_src": "73회 심화 Q42 O"
  },
  {
    "id": "73회_q42_1508",
    "type": "사건",
    "kind": "detail",
    "title": "신채호가 작성한 조선 혁명 선언을 지침으로 삼았다.",
    "description": "신채호가 작성한 조선 혁명 선언을 지침으로 삼았다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "73회 심화 Q42 X"
  },
  {
    "id": "73회_q42_1509",
    "type": "사건",
    "kind": "detail",
    "title": "군사 훈련을 위해 조선 혁명 간부 학교를 설립하였다.",
    "description": "군사 훈련을 위해 조선 혁명 간부 학교를 설립하였다.",
    "startYear": 1919,
    "endYear": 1947,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "의열단"
    ],
    "_src": "73회 심화 Q42 X"
  },
  {
    "id": "73회_q43_1510",
    "type": "사건",
    "kind": "detail",
    "title": "동북 항일 연군으로 개편되어 유격전을 전개하였다.",
    "description": "동북 항일 연군으로 개편되어 유격전을 전개하였다.",
    "startYear": 1936,
    "endYear": 1940,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "동북 항일 연군"
    ],
    "_src": "73회 심화 Q43 X"
  },
  {
    "id": "73회_q43_1511",
    "type": "사건",
    "kind": "detail",
    "title": "간도 참변 이후 조직을 정비하고 자유시로 이동하였다.",
    "description": "간도 참변 이후 조직을 정비하고 자유시로 이동하였다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "73회 심화 Q43 X"
  },
  {
    "id": "73회_q43_1512",
    "type": "사건",
    "kind": "detail",
    "title": "쌍성보 대전자령 전투 등에서 일본군을 크게 물리쳤다.",
    "description": "쌍성보 대전자령 전투 등에서 일본군을 크게 물리쳤다.",
    "startYear": 1930,
    "endYear": 1935,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "한국독립군"
    ],
    "_src": "73회 심화 Q43 X"
  },
  {
    "id": "73회_q43_1513",
    "type": "사건",
    "kind": "detail",
    "title": "조선 민족 전선 연맹 산하의 군사 조직으로 결성되었다.",
    "description": "조선 민족 전선 연맹 산하의 군사 조직으로 결성되었다.",
    "startYear": 1938,
    "endYear": 1942,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "조선의용대"
    ],
    "_src": "73회 심화 Q43 O"
  },
  {
    "id": "73회_q43_1514",
    "type": "사건",
    "kind": "detail",
    "title": "홍범도 부대와 연합하여 청산리에서 일본군과 교전하였다.",
    "description": "홍범도 부대와 연합하여 청산리에서 일본군과 교전하였다.",
    "startYear": 1920,
    "endYear": 1920,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "청산리 전투"
    ],
    "_src": "73회 심화 Q43 X"
  },
  {
    "id": "73회_q44_1515",
    "type": "사건",
    "kind": "detail",
    "title": "조선 노동 총동맹을 중심으로 전개되었다.",
    "description": "조선 노동 총동맹을 중심으로 전개되었다.",
    "startYear": 1920,
    "endYear": 1930,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "1920년대 사회운동"
    ],
    "_src": "73회 심화 Q44 X"
  },
  {
    "id": "73회_q44_1516",
    "type": "사건",
    "kind": "detail",
    "title": "보국안민 제폭구민 등이 구호로 사용되었다.",
    "description": "보국안민 제폭구민 등이 구호로 사용되었다.",
    "startYear": 1894,
    "endYear": 1895,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "동학 농민 운동"
    ],
    "_src": "73회 심화 Q44 X"
  },
  {
    "id": "73회_q44_1517",
    "type": "사건",
    "kind": "detail",
    "title": "조선 관세령 폐지 등을 배경으로 확산하였다.",
    "description": "조선 관세령 폐지 등을 배경으로 확산하였다.",
    "startYear": 1920,
    "endYear": 1932,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "물산 장려 운동"
    ],
    "_src": "73회 심화 Q44 O"
  },
  {
    "id": "73회_q44_1518",
    "type": "사건",
    "kind": "detail",
    "title": "황국 중앙 총상회가 설립되는 결과를 가져왔다.",
    "description": "황국 중앙 총상회가 설립되는 결과를 가져왔다.",
    "startYear": 1898,
    "endYear": 1898,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "황국 중앙 총상회"
    ],
    "_src": "73회 심화 Q44 X"
  },
  {
    "id": "73회_q44_1519",
    "type": "사건",
    "kind": "detail",
    "title": "일본 제일은행권 화폐가 유통되는 계기가 되었다.",
    "description": "일본 제일은행권 화폐가 유통되는 계기가 되었다.",
    "startYear": 1905,
    "endYear": 1909,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "화폐 정리 사업"
    ],
    "_src": "73회 심화 Q44 X"
  },
  {
    "id": "73회_q45_1520",
    "type": "사건",
    "kind": "detail",
    "title": "고종의 밀지를 받아 독립 의군부가 결성되었어요.",
    "description": "고종의 밀지를 받아 독립 의군부가 결성되었어요.",
    "startYear": 1912,
    "endYear": 1914,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "독립의군부"
    ],
    "_src": "73회 심화 Q45 X"
  },
  {
    "id": "73회_q45_1521",
    "type": "사건",
    "kind": "detail",
    "title": "만주 군벌과 일제가 미쓰야 협정을 체결하였어요.",
    "description": "만주 군벌과 일제가 미쓰야 협정을 체결하였어요.",
    "startYear": 1925,
    "endYear": 1925,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "미쓰야 협정"
    ],
    "_src": "73회 심화 Q45 X"
  },
  {
    "id": "73회_q45_1522",
    "type": "사건",
    "kind": "detail",
    "title": "여자 정신 근로령으로 여성들이 강제 동원되었어요.",
    "description": "여자 정신 근로령으로 여성들이 강제 동원되었어요.",
    "startYear": 1937,
    "endYear": 1945,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "민족말살통치기"
    ],
    "_src": "73회 심화 Q45 O"
  },
  {
    "id": "73회_q45_1523",
    "type": "사건",
    "kind": "detail",
    "title": "상하이에서 주권 재민을 천명한 대동단결 선언이 발표되었...",
    "description": "상하이에서 주권 재민을 천명한 대동단결 선언이 발표되었어요.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "73회 심화 Q45 X"
  },
  {
    "id": "73회_q45_1524",
    "type": "사건",
    "kind": "detail",
    "title": "독립운동의 방략을 논의하고자 국민 대표 회의가 개최되었...",
    "description": "독립운동의 방략을 논의하고자 국민 대표 회의가 개최되었어요.",
    "startYear": 1919,
    "endYear": 1948,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "대한민국 임시정부"
    ],
    "_src": "73회 심화 Q45 X"
  },
  {
    "id": "73회_q47_1525",
    "type": "사건",
    "kind": "detail",
    "title": "양원제 국회와 내각 책임제 정부를 구성하다",
    "description": "양원제 국회와 내각 책임제 정부를 구성하다",
    "startYear": 1960,
    "endYear": 1961,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "제2공화국 헌법"
    ],
    "_src": "73회 심화 Q47 X"
  },
  {
    "id": "73회_q47_1526",
    "type": "사건",
    "kind": "detail",
    "title": "반민족 행위자를 처벌할 수 있는 근거를 마련하다",
    "description": "반민족 행위자를 처벌할 수 있는 근거를 마련하다",
    "startYear": 1948,
    "endYear": 1948,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "5·10 총선거"
    ],
    "_src": "73회 심화 Q47 O"
  },
  {
    "id": "73회_q47_1527",
    "type": "사건",
    "kind": "detail",
    "title": "국민의 직접 선거로 5년 단임제 대통령을 선출하다",
    "description": "국민의 직접 선거로 5년 단임제 대통령을 선출하다",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "73회 심화 Q47 X"
  },
  {
    "id": "73회_q47_1528",
    "type": "사건",
    "kind": "detail",
    "title": "초대 대통령의 중임 제한 철폐 장기 집권 체제를 강화하...",
    "description": "초대 대통령의 중임 제한 철폐 장기 집권 체제를 강화하다",
    "startYear": 1954,
    "endYear": 1954,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "사사오입 개헌"
    ],
    "_src": "73회 심화 Q47 X"
  },
  {
    "id": "73회_q47_1529",
    "type": "사건",
    "kind": "detail",
    "title": "긴급 조치 대통령이 국민의 기본권을 제한할 수 있게 하...",
    "description": "긴급 조치 대통령이 국민의 기본권을 제한할 수 있게 하다",
    "startYear": 1972,
    "endYear": 1980,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "유신헌법"
    ],
    "_src": "73회 심화 Q47 X"
  },
  {
    "id": "73회_q48_1530",
    "type": "사건",
    "kind": "detail",
    "title": "4·13 호헌 조치 철폐를 요구하였다.",
    "description": "4·13 호헌 조치 철폐를 요구하였다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "73회 심화 Q48 X"
  },
  {
    "id": "73회_q48_1531",
    "type": "사건",
    "kind": "detail",
    "title": "시민군을 조직하여 계엄군에 대항하였다.",
    "description": "시민군을 조직하여 계엄군에 대항하였다.",
    "startYear": 1980,
    "endYear": 1980,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "5·18 광주민주화운동"
    ],
    "_src": "73회 심화 Q48 O"
  },
  {
    "id": "73회_q48_1532",
    "type": "사건",
    "kind": "detail",
    "title": "시위 도중 김주열의 최루탄에 의한 죽음으로 확산되었다.",
    "description": "시위 도중 김주열의 최루탄에 의한 죽음으로 확산되었다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "73회 심화 Q48 X"
  },
  {
    "id": "73회_q48_1533",
    "type": "사건",
    "kind": "detail",
    "title": "직선제 개헌을 약속한 6·29 민주화 선언을 이끌어 냈...",
    "description": "직선제 개헌을 약속한 6·29 민주화 선언을 이끌어 냈다.",
    "startYear": 1987,
    "endYear": 1987,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "6월 민주항쟁"
    ],
    "_src": "73회 심화 Q48 X"
  },
  {
    "id": "73회_q48_1534",
    "type": "사건",
    "kind": "detail",
    "title": "국민의 요구에 굴복하여 대통령이 하야하는 결과를 가져왔...",
    "description": "국민의 요구에 굴복하여 대통령이 하야하는 결과를 가져왔다.",
    "startYear": 1960,
    "endYear": 1960,
    "difficulty": 2,
    "era": "근대",
    "tags": [
      "4·19 혁명"
    ],
    "_src": "73회 심화 Q48 X"
  },
  {
    "id": "73회_q49_1535",
    "type": "사건",
    "kind": "detail",
    "title": "거리에서 장발과 미니스커트를 단속하는 경찰",
    "description": "거리에서 장발과 미니스커트를 단속하는 경찰",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "73회 심화 Q49 O"
  },
  {
    "id": "73회_q49_1536",
    "type": "사건",
    "kind": "detail",
    "title": "교복 자율화 조치로 사복을 입고 등교하는 학생",
    "description": "교복 자율화 조치로 사복을 입고 등교하는 학생",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "73회 심화 Q49 X"
  },
  {
    "id": "73회_q49_1537",
    "type": "사건",
    "kind": "detail",
    "title": "금융 실명제에 따라 신분증 제시를 요구하는 은행원",
    "description": "금융 실명제에 따라 신분증 제시를 요구하는 은행원",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "73회 심화 Q49 X"
  },
  {
    "id": "73회_q49_1538",
    "type": "사건",
    "kind": "detail",
    "title": "칠레와의 자유 무역 협정(FTA) 비준을 보도하는 기자",
    "description": "칠레와의 자유 무역 협정(FTA) 비준을 보도하는 기자",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "73회 심화 Q49 X"
  },
  {
    "id": "73회_q49_1539",
    "type": "사건",
    "kind": "detail",
    "title": "전국 민주 노동조합 총연맹 창립 대회에 참가하는 노동자",
    "description": "전국 민주 노동조합 총연맹 창립 대회에 참가하는 노동자",
    "startYear": 1993,
    "endYear": 1998,
    "difficulty": 3,
    "era": "근대",
    "tags": [
      "김영삼 정부"
    ],
    "_src": "73회 심화 Q49 X"
  },
  {
    "id": "73회_q50_1540",
    "type": "사건",
    "kind": "detail",
    "title": "7·4 남북 공동 성명이 발표되었다.",
    "description": "7·4 남북 공동 성명이 발표되었다.",
    "startYear": 1961,
    "endYear": 1979,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "박정희 정부"
    ],
    "_src": "73회 심화 Q50 X"
  },
  {
    "id": "73회_q50_1541",
    "type": "사건",
    "kind": "detail",
    "title": "개성 공업 지구 조성이 합의되었다.",
    "description": "개성 공업 지구 조성이 합의되었다.",
    "startYear": 2003,
    "endYear": 2008,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노무현 정부"
    ],
    "_src": "73회 심화 Q50 X"
  },
  {
    "id": "73회_q50_1542",
    "type": "사건",
    "kind": "detail",
    "title": "남북한이 국제 연합(UN)에 동시 가입하였다.",
    "description": "남북한이 국제 연합(UN)에 동시 가입하였다.",
    "startYear": 1988,
    "endYear": 1993,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "노태우 정부"
    ],
    "_src": "73회 심화 Q50 X"
  },
  {
    "id": "73회_q50_1543",
    "type": "사건",
    "kind": "detail",
    "title": "남북 이산가족 고향 방문단의 교환이 최초로 실현되었다.",
    "description": "남북 이산가족 고향 방문단의 교환이 최초로 실현되었다.",
    "startYear": 1980,
    "endYear": 1988,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "전두환 정부"
    ],
    "_src": "73회 심화 Q50 X"
  },
  {
    "id": "73회_q50_1544",
    "type": "사건",
    "kind": "detail",
    "title": "평창 동계 올림픽 개막식에서 남북 선수단이 공동 입장하...",
    "description": "평창 동계 올림픽 개막식에서 남북 선수단이 공동 입장하였다.",
    "startYear": 2017,
    "endYear": 2022,
    "difficulty": 4,
    "era": "근대",
    "tags": [
      "문재인 정부 통일"
    ],
    "_src": "73회 심화 Q50 O"
  }
];
