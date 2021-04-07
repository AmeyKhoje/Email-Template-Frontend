const { BackgroundSyncPlugin, Queue } = require("workbox-background-sync");
const { cacheNames, skipWaiting, clientsClaim } = require("workbox-core");
const { PrecacheController, addRoute, precache, precacheAndRoute, matchPrecache } = require("workbox-precaching");
const { CacheableResponse } = require("workbox-cacheable-response");

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST);

const precacheController = new PrecacheController();
precacheController.addToCacheList([
	{ url: "/index.html", revision: '30890' },
	{ url: "/static/css/**/*.css", revision: null },
	{ url: "static/js/**/*.js", revision: null }
]);

self.addEventListener("install", (event) => {
	event.waitUntil(precacheController.install());
});

self.addEventListener("active", (event) => {
	event.waitUntil(precacheController.install());
});

const func1 = async () => {
	let resp = await matchPrecache("/index.html");
	console.log("Precache", resp);
}

func1()


const queue1 = new Queue("first-queue");


self.addEventListener("fetch", (event) => {
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