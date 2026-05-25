// 최소 service worker — PWA 설치 자격 충족용 (Chrome은 fetch 핸들러 등록을 요구).
// 캐싱 안 하고 네트워크 그대로 통과시켜 라이브 리로드/배포 즉시 반영을 유지.
// 추후 오프라인 지원 필요해지면 fetch 핸들러에 캐시 전략 추가.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {
  // no-op: respondWith 호출 안 함 → 브라우저가 기본 네트워크 처리
});
