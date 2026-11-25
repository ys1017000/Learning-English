/* オフライン対応（v87〜：ネットワーク優先）
   自サイトのファイルは、まずネットから最新版を取りに行く（cache: 'no-cache'）。
   3秒以内に返ってこない・オフラインのときだけ、保存済み（キャッシュ）を使う。
   取れたファイルはキャッシュにも保存して、オフラインでも動くようにしておく。
   ※ アップデートのたびに CACHE 名と common.js の APP_VERSION を必ず一緒に上げる */
const CACHE = 'english-app-v103';
const ASSETS = ['./', 'index.html', 'quiz.html', 'writing.html', 'speaking.html', 'translator.html', 'recap.html',
  'scenes.html', 'plan.html', 'roleplay.html', 'mylist.html', 'topics.html', 'keepsake.html', 'dmnote.html', 'dm-data.js', 'usage-data.js', 'talk.html', 'talk-data.js', 'answer.html', 'letter.html', 'nihongo.html', 'diary.html', 'report.html', 'roadmap.html', 'roadmap-data.js', 'grammar.html', 'grammar-data.js', 'pattern.html', 'pattern-data.js', 'content.js', 'addword.html', 'phrases.html', 'common.js', 'common.css', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const TIMEOUT = 3000;

// install：ASSETS を1つずつ入れる（1つ取れなくても止まらない）。古い保存を使わないよう cache: 'reload'
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ASSETS.map(async a => {
      try {
        const res = await fetch(new Request(a, { cache: 'reload' }));
        if (res && res.ok) await cache.put(new URL(a, self.registration.scope).href, res);
      } catch (err) { /* 取れなかったファイルは、使うときにネットから取る */ }
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// 自サイトのファイルだけ対象（翻訳・辞書などの外部APIは SW を通さない）
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const key = url.origin + url.pathname;          // ?v= などのクエリは無視して保存
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const fromNet = fetch(req, { cache: 'no-cache' }).then(res => {
      if (res && res.ok) { const copy = res.clone(); cache.put(key, copy).catch(() => {}); }
      return res;
    });
    try {
      // ネット優先。3秒たっても返ってこなければキャッシュへ
      const res = await Promise.race([fromNet, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT))]);
      if (res && res.ok) return res;
      const cached = await cache.match(key);
      return cached || res;
    } catch (err) {
      e.waitUntil(fromNet.catch(() => {}));   // 遅れて届いたら保存だけしておく
      const cached = await cache.match(key);
      if (cached) return cached;
      if (req.mode === 'navigate') { const home = await cache.match(new URL('index.html', self.registration.scope).href); if (home) return home; }
      try { return await fromNet; } catch (e2) { return Response.error(); }
    }
  })());
});
