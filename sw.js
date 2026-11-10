/* オフライン対応：一度開いたページ・ファイルを端末に保存して、電波がなくても使えるようにする */
const CACHE = 'english-app-v38';
const ASSETS = ['./', 'index.html', 'quiz.html', 'writing.html', 'speaking.html', 'translator.html', 'recap.html',
  'scenes.html', 'plan.html', 'roleplay.html', 'mylist.html', 'topics.html', 'keepsake.html', 'dmnote.html', 'dm-data.js', 'usage-data.js', 'talk.html', 'talk-data.js', 'letter.html', 'nihongo.html', 'diary.html', 'report.html', 'roadmap.html', 'roadmap-data.js', 'grammar.html', 'grammar-data.js', 'content.js', 'addword.html', 'phrases.html', 'common.js', 'common.css', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// 自サイトのファイルだけ対象（翻訳・辞書APIは通常どおりネットワークへ）。
// 表示は保存済みを優先し、裏で最新版に更新する（更新は次回の読み込みで反映）
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const key = url.origin + url.pathname;          // ?v= などのクエリは無視
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(key);
    const network = fetch(req).then(res => { if (res && res.ok) cache.put(key, res.clone()); return res; }).catch(() => null);
    if (cached) { e.waitUntil(network); return cached; }
    const res = await network;
    if (res) return res;
    if (req.mode === 'navigate') { const home = await cache.match(new URL('index.html', self.registration.scope).href); if (home) return home; }
    return Response.error();
  })());
});
