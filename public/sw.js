if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const t=e=>s(e,n),o={module:{uri:n},exports:r,require:t};i[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3d9bd417b60fcf108f0988dc55299657"},{url:"/_next/static/chunks/138-d43a4621148b1435.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/174.95f01dafbeea9ecc.js",revision:"95f01dafbeea9ecc"},{url:"/_next/static/chunks/23-cf94bedb86748fba.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/489-60d6f4be09d68cf3.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/637-bd62fbf610e7b37c.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/778-5235bca11c0717d4.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/939-f6da49ad0f7ae7b5.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/%5Bar%5D/page-e79d245219e84e56.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/layout-f232f8a8a449a0b4.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/page-d4525ea94ba00993.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/qrcode/layout-9cebb01eead8f235.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/qrcode/page-6c3e11b5ca7f9fe4.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/qrcode/videos/%5Bcode%5D/layout-558d6fa838bfcd83.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/book-detail/%5Bid%5D/qrcode/videos/%5Bcode%5D/page-e07e40ccb8f3d506.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-b9a0600eada3a084.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-785c79f2e060ad21.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/_not-found/page-9810655d91ac49b4.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/layout-f1e8ffd7882a6a6a.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/app/page-5c6cf087b0b5e636.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/d0272cb2-bfa6c0fa062eeed1.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/fd9d1056-c93746e69e7bfc83.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/main-600b74f25cc5b11a.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/main-app-967524e081c5474c.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0f1fad40e4eec68b.js",revision:"d1r2zZir2q747X11XycYF"},{url:"/_next/static/css/406faca5bb04c646.css",revision:"406faca5bb04c646"},{url:"/_next/static/d1r2zZir2q747X11XycYF/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/d1r2zZir2q747X11XycYF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/3f009ccc7ec5087f-s.p.ttf",revision:"34239e01bd3c528b34b2abae459260af"},{url:"/_next/static/media/Herculanum.3f009ccc.ttf",revision:"3f009ccc"},{url:"/icons/android-chrome-192x192.png",revision:"01ccffc0475f815639357977bdf15fbd"},{url:"/icons/android-chrome-512x512.png",revision:"5373352a8b4c9ff2840f2ee730d2d842"},{url:"/icons/apple-touch-icon.png",revision:"e95bd9dd95c4a20cce62820bace2b147"},{url:"/icons/favicon-16x16.png",revision:"cc57d8f0e6b25fb7a6c5978e461f1c2c"},{url:"/icons/favicon-32x32.png",revision:"87e599a9cd7dcf7e2af93f5d41c7cf39"},{url:"/icons/favicon.ico",revision:"5e6d38fd6aff333a4865245bc48d49a9"},{url:"/icons/icon-128x128.png",revision:"ae8beacf3fdde1ca347c32eadcea0350"},{url:"/icons/icon-152x152.png",revision:"746f95460544772c5e7839ccdda5c08a"},{url:"/icons/icon-192x192.png",revision:"d72f72e4df663cdc3277d347e9ef4e86"},{url:"/icons/icon-384x384.png",revision:"51406802f57a67b25a8ab8b95f724126"},{url:"/icons/icon-48x48.png",revision:"f2e52bbfd0b971ada7dd598116c00518"},{url:"/icons/icon-512x512.png",revision:"045ad07f5527ba19cda5b39a3501d1af"},{url:"/icons/icon-72x72.png",revision:"03b562b25718c41e00d835a006bc1336"},{url:"/icons/icon-96x96.png",revision:"7f171b1f5a34faa03f840fc149b97385"},{url:"/images/ardino.png",revision:"13b7c58c7ff3d718c7d593bef33791ad"},{url:"/images/english.png",revision:"7ec9ce8e7ca6aca1e831ae0ce68d1bfc"},{url:"/images/france.png",revision:"624a229b2ed44436d6160fab008a1fbc"},{url:"/images/grammar.png",revision:"a154430d85f6beab3fcfd0fdd4598588"},{url:"/images/leafs.png",revision:"bd21710f98f7dee11b673c40966ce0a7"},{url:"/images/play-button.svg",revision:"15d43fa3985d0561119d1380be3bb16d"},{url:"/images/qr-code-white.png",revision:"141337873afb58c017904340ddc0a246"},{url:"/images/qr-code.png",revision:"ae2d6bab7139c3f0a49044956cfb6caa"},{url:"/manifest.json",revision:"5b8800bdde2287844ba218e28861dc90"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));