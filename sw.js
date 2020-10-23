/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-5fd839aa5b220d06a007.js"
  },
  {
    "url": "framework-ded44be464ef802df858.js"
  },
  {
    "url": "styles.fa450518e61734653f02.css"
  },
  {
    "url": "styles-73c2b68a0e211f68503d.js"
  },
  {
    "url": "5e2a4920-c45a42c7205f6b5cffd0.js"
  },
  {
    "url": "de71a805-0bb98ec715198d466a80.js"
  },
  {
    "url": "app-361a1b07ed00568955ab.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e0a02189107f98d6e608387bd6c0268b"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2",
    "revision": "2ecb426f85ffc1c53b677556210e629f"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6.woff2",
    "revision": "b39aa336eef260975654fde0959de6fe"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjJYTI.woff2",
    "revision": "ee9f23730618d80fcb96905621eb5155"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2",
    "revision": "78773521b0ffe376bc7edd8ec2a591fb"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrBiQyf4VFk.woff2",
    "revision": "346f609f09d860049d566174cdef79fb"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrByRCf4VFk.woff2",
    "revision": "cfc0cbcef68f3ef1a8b0cbbca2bd4036"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "03baa7a36a458fdbbb1c1acc5f675d6b"
  },
  {
    "url": "d7eeaac4-c55d484a7db677455358.js"
  },
  {
    "url": "68f93501d31ed9b0c9eb5d087073243c1b08c1e2-de59fc666896b2393bb5.js"
  },
  {
    "url": "1d22a2ad47df8a261b12b15373a7e2b7ab69d0ac-866e3897c2899efc372f.js"
  },
  {
    "url": "component---src-templates-project-list-template-js-87abc7e6bc17e5c3d11b.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "97124b8ecbe88a8778aa411f937171d3"
  },
  {
    "url": "1bfc9850-6b900c8284648ba8055b.js"
  },
  {
    "url": "component---src-pages-about-tsx-bfe2b69113a5e0a51bd9.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "0895310b31d43a3786864e14812276dd"
  },
  {
    "url": "252f366e-e97b143d527b02d46144.js"
  },
  {
    "url": "component---src-templates-post-list-template-js-240dfce72084ae21e65c.js"
  },
  {
    "url": "page-data/articles/page-data.json",
    "revision": "0174664c014fff9c907004fe4f669378"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c82de5f24f3cf05d12a93000cb26bc7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/gatsby-blog`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/gatsby-blog/app-361a1b07ed00568955ab.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/gatsby-blog/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
