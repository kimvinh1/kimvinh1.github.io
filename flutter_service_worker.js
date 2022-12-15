'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "79c5812030bd06a10cb9c311ed9e0423",
"assets/assets/icons/back.svg": "dcfd2eb5ebb8ec8937c87999453c8ae6",
"assets/assets/icons/bookmark.svg": "2decc3b714d88c28a2f0027a4d2f6238",
"assets/assets/icons/bookmark_fill.svg": "3ce8b5cdd626ecfec1417927e7a5530f",
"assets/assets/icons/bowl.svg": "293bcc9862f3204eb022aa5fac66fc50",
"assets/assets/icons/camera.svg": "8c11fc23eb859dcb00de34feef722f31",
"assets/assets/icons/cart_with_item.svg": "cd650a3a6c295fc1f59c130b56a68169",
"assets/assets/icons/chat.svg": "d95b2e01e56f9f12d803848205435f19",
"assets/assets/icons/chef.svg": "77006e53845afc7cfa75847ca91d16e7",
"assets/assets/icons/chef_color.svg": "a55576bf098ac0896c35caf6c93abfc1",
"assets/assets/icons/chef_nav.svg": "07c21072c18d04f2dc45195fc44a3965",
"assets/assets/icons/clock.svg": "7da21e67950c8e931a4b5121ead17306",
"assets/assets/icons/heart_fill.svg": "a3706f27e213ded0bbff348643584dc2",
"assets/assets/icons/home.svg": "7c62390ede3caf2de5a15131f3e9498f",
"assets/assets/icons/hot.svg": "15c3b4805ddd12c666abf485ce41ee7b",
"assets/assets/icons/icon_lang.png": "70927ce1b07dac359137834017cf44b9",
"assets/assets/icons/info.svg": "ff386be84e86dd9e863da690ea02816f",
"assets/assets/icons/language.svg": "2a24b070d1e2307ae1c687b073dee411",
"assets/assets/icons/list.svg": "9d20bbd7353495cda4923d7e708f8fd0",
"assets/assets/icons/logo.svg": "69deaa8d8007906ab5a540a14d3b5544",
"assets/assets/icons/menu.svg": "9ab8b14eb739bfd1e1b8760daeffe934",
"assets/assets/icons/notification.svg": "8985abcb7a55124e6b08aff92eed4a7c",
"assets/assets/icons/pot.svg": "2c5eb25740000a6a2830cc75510e5f9e",
"assets/assets/icons/search.svg": "3982c8422dec4afa14fb9304b37556ea",
"assets/assets/icons/shopping-bag.svg": "1cc7453dcdc4892fd28095ef42c7d794",
"assets/assets/icons/user.svg": "d99deaa37991c239d39737151b842eb3",
"assets/assets/images/3d-rendered-illustration-blood-drop-isolated-white-background-high-quality-3d-illustration_361767-97.webp": "89ab50d5e804fce29917dcfdffc3b84c",
"assets/assets/images/5057.jpeg": "6c4a534c239d07d7dad0730bb800c07a",
"assets/assets/images/6189839_tinhte-infographic-thanh-phan-cua-mau.png": "8e99d2d0501703471c805d9311736299",
"assets/assets/images/6189842_cover.jpg": "9bcec8317c5046e3341a24f6c659e857",
"assets/assets/images/9a6d2aa1607eb920e06f.jpg": "51879ad4057c63e76014e22d922f0fe3",
"assets/assets/images/acltop.png": "8c0c7ed2d77b8635330a86c59c41e05a",
"assets/assets/images/acltop1.jpg": "84ff1f162b8f86f0fddf7c0af62ded31",
"assets/assets/images/acltop2.jpg": "5af0d1f7e0e1e68672c29f4510823d0e",
"assets/assets/images/BIA_DONG_MAU.png": "55785fedb6ea0c9fe75bab5080ab1279",
"assets/assets/images/cobao/12.%2520Low%2520Event%2520D.png": "9b567e97e7ed7d707b6437c96e0fed34",
"assets/assets/images/cobao/15.%2520MO-NE%2520Overlap.png": "e4f1da88df03c502bfd7aa7a91dfda96",
"assets/assets/images/cobao/16.%2520NE-EO%2520Overlap.png": "da2ea73c4eb672ef8e9481bd0806c5ef",
"assets/assets/images/cobao/17.%2520PLT%2520inter%2520debris.png": "426ac8ae392b3d01a1228edd528e2d14",
"assets/assets/images/cobao/18.%2520Dimorphic%2520Red.png": "96ee76f2f46bf29f250d0777def44b2c",
"assets/assets/images/cobao/18.%2520Dimorphic%2520Red_2.png": "f922c32c1ca3c64b8f7012fc19cbaec5",
"assets/assets/images/cobao/18.%2520Dimorphic%2520Red_3.png": "30d5a8d098910d407fe93054957e1f39",
"assets/assets/images/cobao/19.%2520RBC%2520frag.png": "6149e51acca38c4bfdce2fef36daa2d0",
"assets/assets/images/cobao/19.%2520RBC%2520frag_2.png": "c31282970a5bd15cfa46b1dbacb9e678",
"assets/assets/images/cobao/1_Co_P.png": "403435ca28f60b7ba4263ba2fad8a097",
"assets/assets/images/cobao/2.%2520RBC-PLT%2520Overlap.png": "6afa7b3f6cd4e1e750c66b835c2cd434",
"assets/assets/images/cobao/2.%2520RBC-PLT%2520Overlap_2.png": "a1e4bdfeccea0ccf17fc65ac55666c22",
"assets/assets/images/cobao/20.%2520MO%2520BLAST%2520(Normal%25205PD1).png": "7af1208dd9533c1ac57ca862d1965c88",
"assets/assets/images/cobao/20.%2520MO%2520BLAST.png": "bd4bba151f0794e786712bd36305a6d7",
"assets/assets/images/cobao/21.%2520NE%2520BLAST%2520(Normal%25205PD1).png": "63ea4612e3e2fbb717b812e624be464c",
"assets/assets/images/cobao/21.%2520NE%2520BLAST.png": "4cd745830e871ecce4689848a2e24758",
"assets/assets/images/cobao/22.%2520LY%2520BLAST%2520(Normal%25205PD1).png": "976a7ed48d1b978370915df04cdf2ef8",
"assets/assets/images/cobao/22.%2520LY%2520BLAST.png": "cba69d487c2b77d4fbfaf70a3114731d",
"assets/assets/images/cobao/23.%2520Platelet%2520Clump.png": "028c406ff2af1857be95236872cb97f2",
"assets/assets/images/cobao/23.%2520Platelet%2520Clump_2.png": "11a6bbc853fa86108d51519d377f893c",
"assets/assets/images/cobao/24.%2520Variant%2520LY.png": "1086998427c3883d22e81af938746082",
"assets/assets/images/cobao/27.%2520Abn%2520HGB%2520(Normal%2520Retic).png": "bb7c37a5cc97fdae2a434ae21974ee40",
"assets/assets/images/cobao/27.%2520Abn%2520HGB.png": "5e570d68a9493328b08cccb305e6a73e",
"assets/assets/images/cobao/28.%2520Cellular%2520Inter.png": "a593dab393931e9ff1b03df4aace18cb",
"assets/assets/images/cobao/29.%2520Giant%2520Platelet.png": "39443c11fb4c1b5ee1ba96efba7c59c8",
"assets/assets/images/cobao/29.%2520Giant%2520Platelet_2.png": "89ee5a5621714be2c5a0b62bf51f1ffe",
"assets/assets/images/cobao/30.%2520Imm%2520Grann%25202.png": "58bf92e319afb29c1558840640d51d8f",
"assets/assets/images/cobao/30.%2520Imm%2520Grann%25203.png": "1f6635418af776999fdcba49ce033f55",
"assets/assets/images/cobao/30.%2520Imm%2520Grann.png": "246a7953c1611c3cdc60080fff05d41d",
"assets/assets/images/cobao/31.%2520Left%2520Shift%25202.png": "55b92c955bd1d2fd521e7711115544a4",
"assets/assets/images/cobao/31.%2520Left%2520Shift%25203.png": "028c3036968604a0fbdb70164d12199f",
"assets/assets/images/cobao/31.%2520Left%2520shift%25204.png": "7d2ac083c4ff818103e05990dd46055f",
"assets/assets/images/cobao/31.%2520Left%2520Shift.png": "336325d19b9f0e09ece3a76cc8dc9e7f",
"assets/assets/images/cobao/32.%2520Red%2520Agglut.png": "cdbd4daf870a6c7ea630b6f2581e6397",
"assets/assets/images/cobao/33.%2520Sickle%2520Cell%2520(Normal%2520Retic).png": "d4e029dac06a48243e6e2df9248a4112",
"assets/assets/images/cobao/33.%2520Sickle%2520Cell.png": "642fb07da24a0d232596ee8a0a33fd46",
"assets/assets/images/cobao/36.%2520NRBC%2520Inter%2520(Normal%2520NRBC).png": "25920e00fd1c3b6bf7111d40e8ce693e",
"assets/assets/images/cobao/36.%2520NRBC%2520Inter.png": "c1c4a76a7e539cbe9c1ab3050d8141c8",
"assets/assets/images/cobao/8.%2520Excessive%2520Debris%2520D.png": "61b230ba9762806e79b2b4a6b54cd7bd",
"assets/assets/images/dongmau/5004.png": "29fe1996b766dc053f07191d2765b2c9",
"assets/assets/images/dongmau/5057.png": "6c4a534c239d07d7dad0730bb800c07a",
"assets/assets/images/dongmau/5060.png": "2146d82ed33d3791dc071f4c551b2ca5",
"assets/assets/images/dongmau/5071.png": "1472d9c6f32a2f5605cd3ff6cacd1488",
"assets/assets/images/dongmau/5072.png": "298d9a5cf2060d0280fdd8a9ae0b56be",
"assets/assets/images/dongmau/5076.png": "2acdcf64b48b989552d88259e7ce6468",
"assets/assets/images/dongmau/5501.png": "1354be217e8c4f0f12f65e43a170f0d0",
"assets/assets/images/dongmau/5502.png": "90b4b227cb69133f2365ccad65bd4541",
"assets/assets/images/dongmau/5700.png": "4e18f0a136644bb70063a378af228dc7",
"assets/assets/images/dongmau/5760.png": "2225555dabfebfb90fb4f7fa1cd43c8f",
"assets/assets/images/dongmau/5772.png": "bf5da73e9abda11600badf85a3217814",
"assets/assets/images/dongmau/lythuyet/anhhuong.png": "901689e11a92ed50c4ded8ec7f7364f7",
"assets/assets/images/dongmau/lythuyet/aptt.png": "b9cebe5d67181bf86cc7749170949e2a",
"assets/assets/images/dongmau/lythuyet/duongcong.png": "f75cae43b6d291183d81187b10bb9426",
"assets/assets/images/dongmau/lythuyet/fib.png": "8f8d0565b78a13d8d79c4281d1ebdb0e",
"assets/assets/images/dongmau/lythuyet/flowchart.png": "c9431ef99f432ac3c48c8d88e30aff60",
"assets/assets/images/dongmau/lythuyet/hienthi1.png": "5c78bca33b31b8feb9061af08a2c8185",
"assets/assets/images/dongmau/lythuyet/hienthi2.png": "916e5a24172cb0948b8d9340196324dc",
"assets/assets/images/dongmau/lythuyet/pt.png": "bf952bd1243a80edcce7574db13a7674",
"assets/assets/images/dongmau/lythuyet/top.png": "0146fd173d6589891fc48f580b487624",
"assets/assets/images/dongmau/lythuyet/vitrimaloi.png": "d902db829e9e45a22a7332302ec9bf52",
"assets/assets/images/dongmau.png": "e7fdf2d0d559857224246aeb0fdab728",
"assets/assets/images/Dxh900.png": "d729f251e7a557a2fa3afa155f78aa5a",
"assets/assets/images/Dxh900a1.png": "415f906cfdda40dd52341a6f785b8277",
"assets/assets/images/Dxh900a2.png": "da387fedddbdb022575d506e0322826e",
"assets/assets/images/Dxh900a3.png": "6aa2ede7f443cbc4277f48a3ac2cc65c",
"assets/assets/images/giant_plalete.jpg": "f2647671dd070d2a96eeeb5d1fa2b584",
"assets/assets/images/GIOI%2520THIEU%2520APP%2520EAP.docx": "e2d3bbf35f03dbbd7d92c197c15dadbf",
"assets/assets/images/huyethoc.png": "424bee9b7ce7b29230639cd4254299be",
"assets/assets/images/logo_minhtam_trang.png": "bba83f3df19df6fc65dd1a36438c8e07",
"assets/assets/images/lym_pho.jpg": "8387c13d8fb2a9fd92004673eea02338",
"assets/assets/images/mitalab.jpg": "ecb33cedc50a6e680e68d69904e086ee",
"assets/assets/images/mitalab2.jpg": "683afe5cbc83d0eb4584ad809ebdc68b",
"assets/assets/images/mitalab3.png": "5e89e5ab31d44a711da071bf43f1aea0",
"assets/assets/images/mitalab4.svg": "38bb7af107433e97794cadc9c75cf73a",
"assets/assets/images/mitalab_n.png": "c3515521ed2c9d14a5d3bb5849913434",
"assets/assets/images/mo_blast.jpg": "3b7567058a73362f464e910fe3bb37ae",
"assets/assets/images/new-acl-top-family-50-series.jpg": "5138f0d9aa1c7fb43e86212f23ae657a",
"assets/assets/images/nhommau/case1.png": "396357413eec44cd021ade704014c5dc",
"assets/assets/images/nhommau/case10.png": "b54b0697a87122f3bb8826b7187dfd58",
"assets/assets/images/nhommau/case11.png": "de3a6163677223d0b4967f3f191209d1",
"assets/assets/images/nhommau/case2.png": "5258c42955464e486a30e24334891e8f",
"assets/assets/images/nhommau/case3.png": "d66371f301a8ccb4e087cf2837664b06",
"assets/assets/images/nhommau/case4.png": "9cf5b6f21d9ca824bb9874258e765c8d",
"assets/assets/images/nhommau/case5.png": "30aacbaf75972fd6d97b3ef747d1f3bb",
"assets/assets/images/nhommau/case6.png": "fad951eb56d7d081fd94b46ce1d29fdc",
"assets/assets/images/nhommau/case7.png": "0b0af9c41b93b9a73c3414ebb3527251",
"assets/assets/images/nhommau/case8.png": "fbdc5b4f1b706e9fe181a45dd572df71",
"assets/assets/images/nhommau/case9.png": "ff9989b60685568cb960cc383cb82bb2",
"assets/assets/images/nhommau/phuluc3_1.jpg": "430607e2b32c0e5cce704e70c7efce07",
"assets/assets/images/nhommau/phuluc4_1.png": "ece1ae77b8ed937677efbf56d5186aa9",
"assets/assets/images/phuluc.jpeg": "fd7baff97879e9523314fa4a72e94917",
"assets/assets/images/phuluc.png": "48d0272f3bdab893235396cd6aaecb1c",
"assets/assets/images/plate_clump.jpg": "6135b2bb1410eb5d48f0c1475e403033",
"assets/assets/images/ptcaa6-blood-types1.jpg": "75f0117baec18b6b797442aee5baff8d",
"assets/assets/images/rbc_fra.jpg": "05ca2a7f1c2b1fc9178fbfaf1e1d64c0",
"assets/assets/images/Screenshot%25202022-12-05%2520162035.png": "6d6006a068819b396b084583e4613b3b",
"assets/assets/images/sotay.png": "2fdd3feb302ee9445f8da8a44594a4d1",
"assets/assets/images/sotay1.jpg": "d771eed2931c110f24d6abb9c0c022b9",
"assets/assets/images/sotay2.png": "2ee476eb8b87c9461f8fdb8a7c244174",
"assets/assets/images/test1.gif": "be5d4dd4c2ce4a765874c0870a64408a",
"assets/assets/images/test2.gif": "40a98745a33b6386de2e0e91d1d2603d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/google_fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/google_fonts/OpenSans-BoldItalic.ttf": "210de434db54de4a6a73d1cf8604e224",
"assets/google_fonts/OpenSans-ExtraBold.ttf": "233d78d06ba32f4700bf8de9846913f1",
"assets/google_fonts/OpenSans-ExtraBoldItalic.ttf": "c62aeef30c74135fb49ba79d6f27881d",
"assets/google_fonts/OpenSans-Italic.ttf": "dda9a792f39932b64e514669ae19f907",
"assets/google_fonts/OpenSans-Light.ttf": "8ac55d3905f927b83e36d04a7342b839",
"assets/google_fonts/OpenSans-LightItalic.ttf": "57c3b3a3c6d31ac9e6ffb8ed77225047",
"assets/google_fonts/OpenSans-Medium.ttf": "ab21dae0926dcf5203881d4522ac2a55",
"assets/google_fonts/OpenSans-MediumItalic.ttf": "2feb877146b4ac522c966c4710a5c6ad",
"assets/google_fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"assets/google_fonts/OpenSans-SemiBold.ttf": "c35a5d833fe9bc6cc802a275fd612137",
"assets/google_fonts/OpenSans-SemiBoldItalic.ttf": "157518814e76687d9d2dcf32451aa0dd",
"assets/NOTICES": "ae9c2a45d859a5b93a7a707807c58a30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f927f1f2de627a40c2383f724e674347",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "44bf79bd7f7505d4c8f72381d08245d5",
"/": "44bf79bd7f7505d4c8f72381d08245d5",
"main.dart.js": "3283ae7c5d88e95dd31a7fe6e05228da",
"manifest.json": "d777bc499fa3a42a486ac48b755f7782",
"version.json": "84fc17272d5f79bf18b3d9b35e6d75d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
