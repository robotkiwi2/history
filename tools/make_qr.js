// QR 코드 PNG 생성 — PC 첫 방문 시 모바일 안내 모달에 노출.
// 사용: node tools/make_qr.js
// 출력: qr.png (300x300, repo root)

const QRCode = require('qrcode');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'qr.png');

QRCode.toFile(OUT, 'https://hanmatch.com/', {
  width: 300,
  margin: 2,
  color: {
    dark: '#1a1a2e',
    light: '#ffffff',
  },
}).then(() => {
  console.log('✓ 생성:', OUT);
}).catch(err => {
  console.error('✗ 실패:', err);
  process.exit(1);
});
