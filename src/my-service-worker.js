const { BackgroundSyncPlugin, Queue } = require("workbox-background-sync");
const { cacheNames, skipWaiting, clientsClaim } = require("workbox-core");
const { PrecacheController, addRoute, precache, precacheAndRoute } = require("workbox-precaching");
const { CacheableResponse } = require("workbox-cacheable-response");

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

const queue1 = new Queue("first-queue");


self.addEventListener("fetch", (event) => {
    console.log("fetch event\n", event);

    const promiseChain = fetch(event.request.clone()).catch(err => {
        return queue1.pushRequest({ request: event.request })
    });

    event.waitUntil(promiseChain);
})

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});