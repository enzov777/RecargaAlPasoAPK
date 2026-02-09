self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("entel-pwa-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./logo-entel.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
