// 當service worker在「安裝階段」時會觸發此事件
self.addEventListener('install', event => {
  event.waitUntil(
    .then(cache => cache.addAll([
      'index.html'
    ]))
  )
})

//載入外部JS、CSS的CDN或是內部的其他檔案資源時觸發
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//     .then(function (response) {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   )
// })
