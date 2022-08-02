const CACHE_NAME = "v1";
const URL_TO_CACHE = ["index.html", "offline.html"];

// self refer to service worker
const self = this;

//install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened all cache");
      return cache.addAll(URL_TO_CACHE);
    })
  );
});

//req
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  );
});

//activate
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
          return null;
        })
      )
    )
  );
});
