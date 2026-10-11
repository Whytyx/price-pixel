const CACHE = 'price-pixel-v1.1.0';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './privacy.html', './fonts/kanit-latin-400-normal.woff2', './fonts/kanit-latin-600-normal.woff2', './fonts/kanit-latin-700-normal.woff2', './fonts/kanit-thai-400-normal.woff2', './fonts/kanit-thai-600-normal.woff2', './fonts/kanit-thai-700-normal.woff2', './fonts/press-start-2p-latin-400-normal.woff2'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => cached)
    )
  );
});
