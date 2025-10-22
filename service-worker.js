
self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(function() {
      return caches.match('/index.html');
    }));
  }
});
