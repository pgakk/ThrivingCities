"use strict";var precacheConfig=[["/ThrivingCities/index.html","9feff4ad6cabd504bbe7b57198bad828"],["/ThrivingCities/static/css/main.1e777490.css","023d728f1d807f8b8218e58500795b91"],["/ThrivingCities/static/js/main.5617e7e6.js","a4d8baccfac9cd4a10e2b95c779a0f71"],["/ThrivingCities/static/media/AGENCYB.020c04e6.woff","020c04e68a281900cadc495b80adb174"],["/ThrivingCities/static/media/AdobeTextPro-It.c57d5086.woff","c57d5086a2d61891ca31c514d9da49d2"],["/ThrivingCities/static/media/AdobeTextPro-Regular.6f732e19.woff","6f732e194c300cf12d2480eb3970f286"],["/ThrivingCities/static/media/SEGA.12a3db8b.woff","12a3db8ba7f5423327bb12aed3c41977"],["/ThrivingCities/static/media/event.53a592ea.jpg","53a592ea1aa0683e85a3eb7333e9fcfb"],["/ThrivingCities/static/media/slide1.9e5fa678.jpg","9e5fa678162ab8c6731f9c181b1985eb"],["/ThrivingCities/static/media/slide2.eb9f2a4a.jpg","eb9f2a4a81a36770fc1dbeb1618bc964"],["/ThrivingCities/static/media/slide3.f4b143fd.jpg","f4b143fdb9842366936249123e487e4d"],["/ThrivingCities/static/media/slide4.4a236c3e.jpg","4a236c3e2c857e05c4de257a1dff3ec6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/ThrivingCities/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});