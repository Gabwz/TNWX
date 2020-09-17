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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "fc97bbbe4d27a76098e9cbffb662f583"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.2163bcaa.css",
    "revision": "89e8f5db8c8e289cb03f24f1635c6ce4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.470dfb6d.js",
    "revision": "45cdf76ce126783974cf1e64dc40d187"
  },
  {
    "url": "assets/js/11.3ef22147.js",
    "revision": "44d80c123076201339d8cc6b6c71a1ab"
  },
  {
    "url": "assets/js/12.1078b9db.js",
    "revision": "130a92d3679daa5c8ea754c1a2d44cfc"
  },
  {
    "url": "assets/js/13.e30e191f.js",
    "revision": "e49b0b8f388edcce598a0363f96930b1"
  },
  {
    "url": "assets/js/14.7e523d97.js",
    "revision": "585add958a064329f0f96eb126d271a1"
  },
  {
    "url": "assets/js/15.214073fb.js",
    "revision": "a369083a68050987bbba5d8b157c1ccd"
  },
  {
    "url": "assets/js/16.d405661d.js",
    "revision": "c4452ce83b3116c9e260f6f53907272b"
  },
  {
    "url": "assets/js/17.e7074638.js",
    "revision": "e5a5e0c6ed5d129f1f7c690d75f7491b"
  },
  {
    "url": "assets/js/18.ac700e96.js",
    "revision": "674afc0ab38f2adf5aedf4f9248930c6"
  },
  {
    "url": "assets/js/19.4ed32732.js",
    "revision": "d15c3fcca3796d646f862beb81cf087c"
  },
  {
    "url": "assets/js/20.92dbd837.js",
    "revision": "4cca68133f505a66c046a18e2db82faf"
  },
  {
    "url": "assets/js/21.d37ecdb8.js",
    "revision": "dd2b3811ac4bbfc74e257ae1d06d69de"
  },
  {
    "url": "assets/js/22.d5462217.js",
    "revision": "ec45bd68fb0202deedb59e0b319cadb5"
  },
  {
    "url": "assets/js/23.ee59309e.js",
    "revision": "281c677230879d81bc408e831c15a5da"
  },
  {
    "url": "assets/js/24.0a02ff84.js",
    "revision": "7de77ddf20e6168ebb0e768878df7ad8"
  },
  {
    "url": "assets/js/25.2570222d.js",
    "revision": "84c87d3aac6aff303d7b653630cb5a29"
  },
  {
    "url": "assets/js/26.a25f3552.js",
    "revision": "e1285814e0e26ed822ee18abb346d6a7"
  },
  {
    "url": "assets/js/27.7623e189.js",
    "revision": "b618848914861c7badb44c356cfb6f99"
  },
  {
    "url": "assets/js/28.7b29409a.js",
    "revision": "3bb5d4fd74c291d537bfa247bf4816c4"
  },
  {
    "url": "assets/js/29.7479f75f.js",
    "revision": "3990bdf50f38095f81a6625ecb53b144"
  },
  {
    "url": "assets/js/3.43011e0b.js",
    "revision": "5797deaa03045b030430492a8e0011b9"
  },
  {
    "url": "assets/js/30.d95ba395.js",
    "revision": "ee4e4c070bf222efb497cd70fa4dc6b8"
  },
  {
    "url": "assets/js/31.fa21b093.js",
    "revision": "6d249099fd9f1a2f041b160a239cd5ec"
  },
  {
    "url": "assets/js/32.9a9832fa.js",
    "revision": "8b6f63202f24af4defa237f766c8c1c1"
  },
  {
    "url": "assets/js/4.a48f21e3.js",
    "revision": "7d38217966a9fddd7df10ac2859bf85a"
  },
  {
    "url": "assets/js/5.eed9ec6e.js",
    "revision": "68cc6aa016ddd721401876b530aceca9"
  },
  {
    "url": "assets/js/6.94a14664.js",
    "revision": "65287ea1215ffad237081e484b710c69"
  },
  {
    "url": "assets/js/7.52aff822.js",
    "revision": "12ff1643e4d3edc9d3488daffc0e4a30"
  },
  {
    "url": "assets/js/8.6e89422d.js",
    "revision": "fc3b99511e95704d8b93a0d268167d75"
  },
  {
    "url": "assets/js/9.aadac41b.js",
    "revision": "9c0067f8986efe6e701b6d25f25b0073"
  },
  {
    "url": "assets/js/app.f18994bb.js",
    "revision": "b55a94a6e5e48767640499eb80dcaa2e"
  },
  {
    "url": "assets/js/vendors~notification.c4421e20.js",
    "revision": "76078ea184902799882af0b3ccb56b70"
  },
  {
    "url": "chat.png",
    "revision": "39fad2947246c8676d8ae34c47939d10"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "97e2854d2294284162955b7b82a726c7"
  },
  {
    "url": "guide/common/init.html",
    "revision": "ac52a5bd5446e4e79c37838f6fe36143"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "3e50f031a44278f71763ff7bf0b990b2"
  },
  {
    "url": "guide/index.html",
    "revision": "38d3902b74cb8a7bdb24d8b765d6e224"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "e55b045722aee7c6267a17bfe739628d"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "cbeb5489712936fc0dd21ab32da8b233"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "477442f1cc801b2134627fac4f472cb2"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "de14fc38df8cbc218e12118d1137ff41"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "2651c774194917b4511d8281513f62c5"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "36a70fbaf5b7c170b95b20650060046a"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "8f899cdc0cbeb402dcef3c480ad5ac6e"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "34279cbbb1dfb950d0e9759dcacf37c3"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "bdaec7adc845c92fded7286555163bdc"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "b499ff059c24f822f8867cf44ce33053"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "4f1a5738d2ca3abed4cb9aa2e5955470"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "0fd5416c2e25fdd5b08531501d706bed"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "c7eb0ff6c00e43593ddbef8ec7ba42e9"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "d8e71f5dcec1ac85b47a9dc359f04644"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "4040435e77463708ce360ac7be01e738"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "1917c0c6f073a3d1f3cdec2e27a6d26c"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "652c987c8c841bfbf9cfe2f12491edda"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "2c256a7f370e71ceaed8bdf4762419f6"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "03a6ea283d32914861d8f9f761f25eee"
  },
  {
    "url": "index.html",
    "revision": "55e0ca419a91639050de0e7864cf1821"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
