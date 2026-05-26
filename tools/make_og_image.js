// OG 미리보기용 PNG 생성 — 카카오·페북·iMessage가 SVG는 잘 못 읽으므로 PNG로.
// 사용: node tools/make_og_image.js
// 출력: og-image.png (1200x630, repo root)

const sharp = require('sharp');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'og-image.png');

// 1200x630 OG 추천 비율. 史 한자 + 한국사매치 텍스트 + 부제.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="#16213e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- 史 카드 -->
  <rect x="80" y="155" width="320" height="320" rx="48" fill="#232946" stroke="#eebbc3" stroke-width="6"/>
  <text x="240" y="395" font-family="serif" font-size="260" font-weight="900" text-anchor="middle" fill="#eebbc3">史</text>
  <!-- 텍스트 영역 -->
  <text x="450" y="280" font-family="'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" font-size="78" font-weight="900" fill="#f5f5f7" letter-spacing="-2">한국사매치</text>
  <text x="450" y="345" font-family="'Noto Sans KR', sans-serif" font-size="32" font-weight="700" fill="#eebbc3">한능검 약점 자동 진단 학습</text>
  <text x="450" y="410" font-family="'Noto Sans KR', sans-serif" font-size="26" font-weight="500" fill="#b8b8d4">자주 틀리는 키워드를 자동으로 찾아드립니다.</text>
  <text x="450" y="450" font-family="'Noto Sans KR', sans-serif" font-size="26" font-weight="500" fill="#b8b8d4">모바일 어디서나 무료, 로그인 없음.</text>
  <text x="450" y="540" font-family="'Noto Sans KR', sans-serif" font-size="28" font-weight="700" fill="#7dd9a3">hanmatch.com</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(OUT)
  .then(info => {
    console.log('✓ 생성:', OUT);
    console.log('  크기:', info.width + 'x' + info.height, '/', (info.size / 1024).toFixed(1) + ' KB');
  })
  .catch(err => {
    console.error('✗ 실패:', err);
    process.exit(1);
  });
