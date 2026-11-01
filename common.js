/* 心をつなぐ英語表現 - 共通スクリプト（データ・学習記録・音声・バックアップ） */
(function () {
  "use strict";
  const BASE_PHRASES = [
      ["恋人・パートナーへの思いやり", "I'm always on your side.", "私はどんな時もあなたの味方だよ。"],
      ["恋人・パートナーへの思いやり", "Take your time, there's no rush.", "焦らなくていいから、あなたのペースで大丈夫だよ。"],
      ["恋人・パートナーへの思いやり", "Thank you for being you.", "そのままのあなたでいてくれてありがとう。"],
      ["恋人・パートナーへの思いやり", "How was your day? I'm here if you want to talk.", "今日はどんな一日だった？ 話したいことがあったらいつでも聞くよ。"],
      ["恋人・パートナーへの思いやり", "You don't have to carry it all by yourself.", "一人で全部抱え込まなくていいんだよ。"],
      ["恋人・パートナーへの思いやり", "You did your best today. Get some good rest.", "今日も一日本当によくがんばったね。ゆっくり休んでね。"],
      ["愛情・絆を深める表現", "I'm so grateful to have you in my life.", "あなたと一緒にいられて、心から幸せだよ。"],
      ["愛情・絆を深める表現", "I feel safest when I'm with you.", "あなたと一緒にいる時が一番安心できるよ。"],
      ["愛情・絆を深める表現", "You make every ordinary day feel special.", "あなたといると、何気ない毎日が特別な日になるよ。"],
      ["愛情・絆を深める表現", "I love how we can just be ourselves together.", "お互い素のままでいられる関係がすごく愛おしいよ。"],
      ["愛情・絆を深める表現", "Text me when you get home so I know you're safe.", "無事に着いたか心配だから、家に着いたらLINEしてね。"],
      ["would / could 恋人同士の会話", "Would you like to stay in and relax tonight?", "今夜はお家でまったり過ごさない？"],
      ["would / could 恋人同士の会話", "I would do anything to make you feel better.", "あなたの気持ちが少しでも楽になるなら、何でもするよ。"],
      ["would / could 恋人同士の会話", "Could I get a hug?", "ぎゅーってハグしてもいい？"],
      ["would / could 恋人同士の会話", "Would you mind if I held your hand?", "手を繋いでもいいかな？"],
      ["would / could 恋人同士の会話", "Could you let me know if you need anything?", "何か必要なものがあったら教えてくれる？"],
      ["would / could 恋人同士の会話", "Where would you like to go on our next day off?", "次の休みはどこにお出かけしたい？"],
      ["単語 (単体)", "affection", "愛情、慈しみ"],
      ["単語 (単体)", "intimacy", "親密さ、親交"],
      ["単語 (単体)", "devotion", "献身、深い愛情"],
      ["単語 (単体)", "comfort", "慰め、心地よさ"],
      ["単語 (単体)", "cherish", "大事にする、心に抱く"],
      ["単語 (単体)", "trust", "信頼、信用"],
      ["単語 (単体)", "passion", "情熱、熱中"],
      ["単語 (単体)", "warmth", "温かみ、思いやり"],
      ["熟語 (イディオム)", "back someone up", "（人を）バックアップする、支持する"],
      ["熟語 (イディオム)", "open up", "心を開く、本音を話す"],
      ["熟語 (イディオム)", "lean on", "（人に）頼る、寄りかかる"],
      ["熟語 (イディオム)", "count on", "〜を当てにする、頼りにする"],
      ["熟語 (イディオム)", "get along", "仲良くやっていく"],
      ["熟語 (イディオム)", "fall for", "〜に夢中になる、惚れ込む"],
      ["熟語 (イディオム)", "cuddle up", "寄り添う、抱き合う"],
      ["熟語 (イディオム)", "cheer up", "元気を出す、励ます"],
      ["単語・熟語 (形容詞＋名詞)", "strong coffee", "濃いコーヒー"],
      ["単語・熟語 (形容詞＋名詞)", "difficult decision", "難しい決断"],
      ["単語・熟語 (形容詞＋名詞)", "heavy rain", "激しい雨"],
      ["単語・熟語 (形容詞＋名詞)", "bright idea", "素晴らしい閃き・グッドアイデア"],
      ["単語・熟語 (形容詞＋名詞)", "golden opportunity", "絶好の機会・チャンス"],
      ["単語・熟語 (副詞＋動詞)", "clearly understand", "明確に理解する"],
      ["単語・熟語 (副詞＋動詞)", "deeply regret", "深く後悔する"],
      ["単語・熟語 (副詞＋動詞)", "strongly recommend", "強くお勧めする"],
      ["単語・熟語 (副詞＋動詞)", "sincerely hope", "心から願う"],
      ["友達・カジュアル雑談", "What have you been up to?", "最近どう過ごしてた？"],
      ["友達・カジュアル雑談", "We should totally hang out this weekend!", "今週末、絶対遊びに行こうよ！"],
      ["友達・カジュアル雑談", "That's hilarious!", "それ超ウケる／めちゃくちゃ面白いね！"],
      ["友達・カジュアル雑談", "Let me know when you're free.", "手が空いたら教えてね。"],
      ["共感する・寄り添う", "I understand how you feel.", "あなたの気持ち、すごくよく分かるよ。"],
      ["共感する・寄り添う", "That must have been really hard.", "それは本当につらかったね。"],
      ["共感する・寄り添う", "I'd feel the same way if I were in your shoes.", "もし私があなたの立場でも、きっと同じように感じると思う。"],
      ["励ます・応援する", "Don't be so hard on yourself.", "自分を責めすぎないでね。"],
      ["励ます・応援する", "Take all the time you need.", "焦らず、必要なだけ時間をかけてね。"],
      ["文法・文型", "I've been busy this week.", "今週はバタバタしていて忙しかったよ。（応用: I've been busy with work lately. 最近仕事で忙しいんだ）"],
      ["文法・文型", "I'm glad you got to relax today.", "今日はゆっくりできたみたいでよかった。"],
      ["文法・文型", "I got to talk to her today.", "今日は彼女と話すことができた。（get to + 動詞：〜する機会がある／〜できる）"],
      ["文法・文型", "I got my leg hair removed.", "脚の脱毛をしてもらった。（get + 目的語 + 過去分詞：施術や修理などを受ける）"],
      ["会話フレーズ", "No worries about the late reply!", "返信が遅くなったことは気にしないでね！"],
      ["会話フレーズ", "I hope you can get some rest.", "少しでも休めるといいね。（Make sure to take breaks. などのニュアンス）"],
      ["会話フレーズ", "I'm looking forward to Sunday.", "日曜日を楽しみにしているよ。（look forward to の後は名詞・動名詞）"],
      ["会話フレーズ", "Which burger place should we go to?", "ハンバーガー屋さんはどこにする？"],
      ["会話フレーズ", "One of your favorites?", "あなたのお気に入りのひとつ？（会話中の省略表現）"],
      ["会話フレーズ", "I'm going out for drinks with my coworkers on Friday.", "金曜日に同僚と飲みに行くんだ。（go out for drinks with someone）"],
      ["会話フレーズ", "No, sorry, I didn't mean that. That was a poor choice of words.", "いや、ごめん、そういう意味じゃなくて。言い方が悪かったね。"],
      ["語彙・コロケーション", "I've been doing a lot of overtime this week.", "今週は残業がかなり多いんだ。（overtime: 残業）"],
      ["語彙・コロケーション", "renew my driver's license", "運転免許を更新する"]
  ];

  const KEY_DATA = 'english_app_data';
  const KEY_CUSTOM = 'english_app_custom_phrases';
  const CUSTOM_CAT = 'マイ単語・フレーズ';
  const BACKUP_APP_ID = 'english-app-backup';

  /* ---------- 基本ユーティリティ ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // 端末のローカル日付 (YYYY-MM-DD)。toISOString() はUTC基準で日本では朝9時まで前日になるため使わない
  function dateKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, val) { try { localStorage.setItem(key, val); return true; } catch (e) { return false; } }

  /* ---------- 学習データ ---------- */
  function defaultStore() {
    return { studied: [], quizStats: { correct: 0, total: 0 }, speakCount: 0, history: {}, weaknesses: {}, weakPhrases: {}, favorites: [] };
  }
  function normalizeStore(s) {
    const d = defaultStore();
    if (!s || typeof s !== 'object') return d;
    d.studied = Array.isArray(s.studied) ? s.studied.filter(x => typeof x === 'string') : [];
    d.favorites = Array.isArray(s.favorites) ? s.favorites.filter(x => typeof x === 'string') : [];
    const qs = s.quizStats || {};
    d.quizStats = { correct: Number(qs.correct) || 0, total: Number(qs.total) || 0 };
    d.speakCount = Number(s.speakCount) || 0;
    d.history = (s.history && typeof s.history === 'object') ? s.history : {};
    d.weaknesses = (s.weaknesses && typeof s.weaknesses === 'object') ? s.weaknesses : {};
    d.weakPhrases = (s.weakPhrases && typeof s.weakPhrases === 'object') ? s.weakPhrases : {};
    return d;
  }
  function getStore() {
    try { return normalizeStore(JSON.parse(safeGet(KEY_DATA))); } catch (e) { return defaultStore(); }
  }
  function saveStore(store) { return safeSet(KEY_DATA, JSON.stringify(store)); }

  function getCustomPhrases() {
    try {
      const v = JSON.parse(safeGet(KEY_CUSTOM));
      return Array.isArray(v) ? v.filter(p => Array.isArray(p) && typeof p[1] === 'string') : [];
    } catch (e) { return []; }
  }
  function saveCustomPhrases(list) { return safeSet(KEY_CUSTOM, JSON.stringify(list)); }
  function getAllPhrases() { return getCustomPhrases().concat(BASE_PHRASES); }

  function isFavorite(en) { return getStore().favorites.includes(en); }
  function toggleFavorite(en) {
    const s = getStore();
    const i = s.favorites.indexOf(en);
    if (i >= 0) s.favorites.splice(i, 1); else s.favorites.push(en);
    saveStore(s);
    return i < 0;
  }

  /* ---------- 学習記録 ---------- */
  // 今日学習した記録（カレンダー・連続日数に反映）
  function touchToday(s) { s.history[dateKey()] = true; }

  function markStudied(item) {
    if (!item) return;
    const s = getStore();
    if (!s.studied.includes(item[1])) s.studied.push(item[1]);
    touchToday(s);
    saveStore(s);
  }

  // 結果を記録。ok=false なら苦手リストに追加、ok=true なら苦手カウントを1つ減らす
  // kind: 'quiz' のときだけ正答率に反映
  function recordResult(item, ok, kind) {
    if (!item) return;
    const s = getStore();
    if (!s.studied.includes(item[1])) s.studied.push(item[1]);
    touchToday(s);
    if (kind === 'quiz') {
      s.quizStats.total += 1;
      if (ok) s.quizStats.correct += 1;
    }
    if (ok) {
      const n = (s.weakPhrases[item[1]] || 0) - 1;
      if (n > 0) s.weakPhrases[item[1]] = n; else delete s.weakPhrases[item[1]];
    } else {
      s.weakPhrases[item[1]] = Math.min((s.weakPhrases[item[1]] || 0) + 1, 5);
      s.weaknesses[item[0]] = (Number(s.weaknesses[item[0]]) || 0) + 1;
    }
    saveStore(s);
  }
  function countSpeak() {
    const s = getStore();
    s.speakCount += 1;
    touchToday(s);
    saveStore(s);
  }

  function getWeakPhrases() {
    const wp = getStore().weakPhrases;
    return getAllPhrases().filter(p => wp[p[1]] > 0);
  }

  // 連続学習日数（今日まだなら昨日までの連続を数える）
  function calcStreak(history) {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    if (!history[dateKey(d)]) d.setDate(d.getDate() - 1);
    let n = 0;
    while (history[dateKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function updateStreakBadge() {
    const el = document.getElementById('streakBadge');
    if (el) el.textContent = '🔥 ' + calcStreak(getStore().history) + '日連続学習';
  }

  /* ---------- ジャンル選択・出題 ---------- */
  // 日本語訳の末尾の（補足）を分離。出題文に答えのヒントが混ざるのを防ぐ
  function splitJa(ja) {
    const m = String(ja || '').match(/^(.*?)\s*（([^）]*)）\s*$/);
    if (m && m[1].trim()) return { main: m[1].trim(), note: m[2].trim() };
    return { main: String(ja || ''), note: '' };
  }

  function getPhrasesFor(selected) {
    const all = getAllPhrases();
    if (selected === 'FAV') { const f = getStore().favorites; return all.filter(p => f.includes(p[1])); }
    if (selected === 'WEAK') return getWeakPhrases();
    if (selected === 'ALL' || !selected) return all;
    return all.filter(p => p[0] === selected);
  }

  function populateGenreSelect(select) {
    const params = new URLSearchParams(location.search);
    const categories = Array.from(new Set(getAllPhrases().map(p => p[0])));
    const weakCount = getWeakPhrases().length;
    select.innerHTML = '';
    const add = (v, t) => { const o = document.createElement('option'); o.value = v; o.textContent = t; select.appendChild(o); };
    add('ALL', '✨ 全ジャンル (ランダム出題)');
    add('WEAK', '🎯 苦手フレーズのみ (' + weakCount + '件)');
    add('FAV', '⭐ お気に入りフレーズのみ');
    categories.forEach(c => add(c, (c === CUSTOM_CAT ? '⭐ ' : '📁 ') + c));
    // ?mode=weak / ?genre=カテゴリ名 で開いたときの初期選択
    const want = params.get('mode') === 'weak' ? 'WEAK' : params.get('genre');
    if (want && Array.from(select.options).some(o => o.value === want)) select.value = want;
  }

  // 選択が空（お気に入り0件など）なら全ジャンルに戻して知らせる
  function ensureNonEmpty(select) {
    if (getPhrasesFor(select.value).length > 0) return true;
    const msg = select.value === 'WEAK'
      ? '苦手フレーズはまだありません。クイズや発音チェックで間違えたフレーズがここに溜まります。'
      : select.value === 'FAV'
        ? 'お気に入りがまだありません。★を押して登録してください。'
        : '該当するフレーズがありません。';
    alert(msg);
    select.value = 'ALL';
    return getPhrasesFor('ALL').length > 0;
  }

  /* ---------- 音声合成 ---------- */
  let cachedVoices = [];
  function loadVoices() { if ('speechSynthesis' in window) cachedVoices = window.speechSynthesis.getVoices() || []; }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice(lang) {
    const base = lang.split('-')[0];
    return cachedVoices.find(v => v.lang === lang) ||
      cachedVoices.find(v => v.lang.replace('_', '-').startsWith(base)) || null;
  }
  function speak(text, lang, rate) {
    if (!('speechSynthesis' in window) || !text) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang || 'en-US';
    u.rate = rate || 1.0;
    const v = pickVoice(u.lang);
    if (v) u.voice = v;
    synth.speak(u);
  }

  /* ---------- 音声認識 ---------- */
  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionSupported = !!SpeechRecognitionCtor;

  const RECOG_ERRORS = {
    'not-allowed': 'マイクの使用が許可されていません。ブラウザの設定でマイクを許可してください。',
    'service-not-allowed': 'このブラウザ／アプリでは音声認識を使えません。SafariやChromeで開いてください。',
    'no-speech': '声が聞き取れませんでした。もう一度、マイクに近づいて話してみてください。',
    'audio-capture': 'マイクが見つかりません。接続や設定を確認してください。',
    'network': '音声認識サービスに接続できません。通信状況を確認してください。',
    'language-not-supported': 'この言語の音声認識に対応していません。'
  };

  // opts: { lang, onInterim(text), onFinal(alternatives[]), onError(message), onState(isListening) }
  function createRecognizer(opts) {
    if (!recognitionSupported) return null;
    const rec = new SpeechRecognitionCtor();
    rec.lang = opts.lang || 'en-US';
    rec.interimResults = true;
    rec.continuous = false;
    rec.maxAlternatives = 3;
    let listening = false, segments = [], errorCode = null;

    rec.onstart = () => { listening = true; opts.onState && opts.onState(true); };
    rec.onresult = (e) => {
      let interim = '';
      segments = [];
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i];
        const alts = [];
        for (let k = 0; k < r.length; k++) alts.push(r[k].transcript.trim());
        segments.push({ alts, final: r.isFinal });
        if (!r.isFinal) interim += r[0].transcript;
      }
      const shown = segments.map(s => s.alts[0]).join(' ').trim();
      opts.onInterim && opts.onInterim(shown || interim.trim());
    };
    rec.onerror = (e) => { errorCode = e.error; };
    rec.onend = () => {
      listening = false;
      opts.onState && opts.onState(false);
      if (errorCode && errorCode !== 'aborted') {
        opts.onError && opts.onError(RECOG_ERRORS[errorCode] || ('音声認識エラー: ' + errorCode));
      } else if (!errorCode) {
        const text = segments.map(s => s.alts[0]).join(' ').trim();
        if (!text) { opts.onError && opts.onError(RECOG_ERRORS['no-speech']); return; }
        const n = Math.max.apply(null, segments.map(s => s.alts.length));
        const alts = [];
        for (let k = 0; k < n; k++) alts.push(segments.map(s => s.alts[k] || s.alts[0]).join(' ').trim());
        opts.onFinal && opts.onFinal(alts);
      }
      errorCode = null;
    };

    return {
      get listening() { return listening; },
      setLang(l) { rec.lang = l; },
      start() {
        segments = []; errorCode = null;
        if ('speechSynthesis' in window) window.speechSynthesis.cancel(); // お手本音声を拾わないように
        try { rec.start(); } catch (e) { opts.onError && opts.onError('音声認識を開始できませんでした。少し待ってからもう一度お試しください。'); }
      },
      stop() { try { rec.stop(); } catch (e) {} },
      abort() { try { rec.abort(); } catch (e) {} }
    };
  }

  /* ---------- 発音スコア ---------- */
  const CONTRACTIONS = {
    "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are',
    "he's": 'he is', "she's": 'she is', "it's": 'it is', "that's": 'that is', "there's": 'there is', "what's": 'what is',
    "let's": 'let us', "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
    "i'll": 'i will', "you'll": 'you will', "we'll": 'we will', "they'll": 'they will',
    "i'd": 'i would', "you'd": 'you would', "we'd": 'we would', "they'd": 'they would',
    "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "can't": 'can not', "cannot": 'can not',
    "won't": 'will not', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
    "couldn't": 'could not', "wouldn't": 'would not', "shouldn't": 'should not', "haven't": 'have not', "hasn't": 'has not'
  };
  function tokenize(s) {
    s = String(s || '').toLowerCase().replace(/[’‘`]/g, "'");
    s = s.replace(/[a-z]+'[a-z]+/g, w => CONTRACTIONS[w] || w);
    s = s.replace(/'/g, '').replace(/[^a-z0-9\s]/g, ' ');
    return s.split(/\s+/).filter(Boolean);
  }
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }
  function wordSim(a, b) { return a === b ? 1 : 1 - levenshtein(a, b) / Math.max(a.length, b.length); }

  // 単語単位で照合。戻り値: { score(0-100), words:[{text, status:'ok'|'close'|'miss'}] }
  function compareText(reference, spoken) {
    const refDisplay = String(reference || '').trim().split(/\s+/).filter(Boolean);
    const R = [], owner = [];
    refDisplay.forEach((w, k) => tokenize(w).forEach(t => { R.push(t); owner.push(k); }));
    const H = tokenize(spoken);
    const m = R.length, n = H.length;
    if (!m) return { score: 0, words: [] };
    const d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) d[i][0] = i;
    for (let j = 1; j <= n; j++) d[0][j] = j;
    const subCost = (i, j) => { const s = wordSim(R[i - 1], H[j - 1]); return s >= 0.7 ? 1 - s : 1; };
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + subCost(i, j));
      }
    }
    const status = new Array(m).fill('miss');
    let i = m, j = n;
    while (i > 0 && j > 0) {
      const c = subCost(i, j);
      if (Math.abs(d[i][j] - (d[i - 1][j - 1] + c)) < 1e-9) {
        status[i - 1] = c === 0 ? 'ok' : (c < 1 ? 'close' : 'miss');
        i--; j--;
      } else if (Math.abs(d[i][j] - (d[i - 1][j] + 1)) < 1e-9) { i--; }
      else { j--; }
    }
    const score = Math.max(0, Math.round((1 - d[m][n] / Math.max(m, n)) * 100));
    // 表示用の単語（"Don't" など）ごとに、展開後トークンの判定を集約（miss > close > ok）
    const rank = { ok: 0, close: 1, miss: 2 };
    const words = refDisplay.map((text, k) => {
      let worst = 'ok', any = false;
      owner.forEach((o, idx) => { if (o === k) { any = true; if (rank[status[idx]] > rank[worst]) worst = status[idx]; } });
      return { text, status: any ? worst : 'ok' };
    });
    return { score, words };
  }
  // 複数候補のうち最も一致度が高いものを採用
  function bestMatch(reference, alternatives) {
    let best = null;
    alternatives.forEach(a => {
      const r = compareText(reference, a);
      if (!best || r.score > best.score) best = Object.assign(r, { text: a });
    });
    return best;
  }

  /* ---------- バックアップ（書き出し・読み込み） ---------- */
  function buildBackup() {
    return {
      app: BACKUP_APP_ID,
      version: 1,
      exportedAt: new Date().toISOString(),
      data: getStore(),
      customPhrases: getCustomPhrases()
    };
  }
  function downloadBackup() {
    const json = JSON.stringify(buildBackup(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'english-app-backup-' + dateKey().replace(/-/g, '') + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function sanitizeCustom(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(p => {
      if (!Array.isArray(p) || typeof p[1] !== 'string' || typeof p[2] !== 'string') return;
      const en = p[1].trim(), ja = p[2].trim();
      if (!en || !ja || seen.has(en.toLowerCase())) return;
      seen.add(en.toLowerCase());
      out.push([CUSTOM_CAT, en, ja, typeof p[3] === 'string' ? p[3].trim() : '']);
    });
    return out;
  }
  function maxMerge(a, b) {
    const out = Object.assign({}, a);
    Object.keys(b || {}).forEach(k => { out[k] = Math.max(Number(out[k]) || 0, Number(b[k]) || 0); });
    return out;
  }

  // mode: 'merge'（今のデータを残して統合）/ 'replace'（バックアップの内容で置き換え）
  function importBackup(text, mode) {
    let obj;
    try { obj = JSON.parse(text); } catch (e) { throw new Error('JSONファイルとして読み込めませんでした。'); }
    if (!obj || obj.app !== BACKUP_APP_ID || typeof obj.data !== 'object') {
      throw new Error('このアプリのバックアップファイルではありません。');
    }
    const inc = normalizeStore(obj.data);
    const incCustom = sanitizeCustom(obj.customPhrases);
    let store, custom;
    if (mode === 'replace') {
      store = inc; custom = incCustom;
    } else {
      const cur = getStore();
      store = {
        studied: Array.from(new Set(cur.studied.concat(inc.studied))),
        favorites: Array.from(new Set(cur.favorites.concat(inc.favorites))),
        history: Object.assign({}, cur.history, inc.history),
        quizStats: {
          correct: Math.max(cur.quizStats.correct, inc.quizStats.correct),
          total: Math.max(cur.quizStats.total, inc.quizStats.total)
        },
        speakCount: Math.max(cur.speakCount, inc.speakCount),
        weaknesses: maxMerge(cur.weaknesses, inc.weaknesses),
        weakPhrases: maxMerge(cur.weakPhrases, inc.weakPhrases)
      };
      custom = sanitizeCustom(getCustomPhrases().concat(incCustom));
    }
    if (!saveStore(store) || !saveCustomPhrases(custom)) throw new Error('保存に失敗しました。ブラウザの保存領域を確認してください。');
    return { custom: custom.length, studied: store.studied.length, favorites: store.favorites.length };
  }

  /* ---------- 公開 ---------- */
  window.EA = {
    BASE_PHRASES, CUSTOM_CAT, recognitionSupported,
    esc, dateKey, getStore, saveStore, getCustomPhrases, saveCustomPhrases, getAllPhrases,
    isFavorite, toggleFavorite, markStudied, recordResult, countSpeak, getWeakPhrases, calcStreak, updateStreakBadge,
    splitJa, getPhrasesFor, populateGenreSelect, ensureNonEmpty,
    speak, createRecognizer, compareText, bestMatch,
    downloadBackup, importBackup
  };

  document.addEventListener('DOMContentLoaded', updateStreakBadge);
})();
