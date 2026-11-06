const CACHE_NAME = "homeitemmemo-v13";
const CACHE_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

// 安裝：快取核心檔案
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_FILES);
    }).then(() => self.skipWaiting())
  );
});

// 啟動：清除舊快取(v1~v6全部清走)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      );
    }).then(() => self.clients.claim())
  );
});

// 攔截請求，優先讀快取（離線可用）
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});