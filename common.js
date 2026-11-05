/* 心をつなぐ英語表現 - 共通スクリプト */
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
      ["語彙・コロケーション", "renew my driver's license", "運転免許を更新する"],
      ["語彙・コロケーション", "work on my presentation", "プレゼンの準備に取り組む（work on ～：～に取り組む）", "I'm working on my presentation tonight."],
      ["語彙・コロケーション", "take a break", "休憩する（take a break：休憩を取る）", "Let's take a break for a minute."],
      ["語彙・コロケーション", "take breaks regularly", "こまめに休憩を取る（take breaks：何度も休憩する）", "Try to take breaks regularly while you work."],
      ["語彙・コロケーション", "cheer someone on", "（人を）応援する（cheer someone on）", "I'll be cheering you on all the way."],
      ["語彙・コロケーション", "look for some cafes", "カフェを探す（look for ～：～を探す）", "We're looking for some cafes nearby."],
      ["語彙・コロケーション", "Let me know.", "教えてね。（let me know：私に知らせてね）", "Just let me know when you're ready."],
      ["語彙・コロケーション", "anything you'd like to eat", "食べたいものなんでも（anything you'd like：あなたが～したいもの）", "Is there anything you'd like to eat tonight?"],
      ["文法・表現パターン", "Let's meet in Naka-Meguro.", "中目黒で会おう。（Let's meet in ～：～で会おう）"],
      ["文法・表現パターン", "I'll look for some cafes.", "これからカフェを探すね。（I'll + 動詞：これから～するね）"],
      ["文法・表現パターン", "Let me know if you'd like anything.", "何かほしいものがあったら教えてね。（Let me know if ～：もし～なら教えてね）"],
      ["文法・表現パターン", "I hope you're getting some breaks.", "ちゃんと休憩できてるといいな。（I hope you're ～ing：今～しているといいな）"],
      ["文法・表現パターン", "while working on your presentation", "プレゼンの準備をしている間に（while + ～ing：～している間に）"],
      ["実践フレーズ", "I hope you're getting some breaks while working on your presentation.", "プレゼンの準備中も、ちゃんと休憩できてるといいな。"],
      ["実践フレーズ", "I'll look for some restaurants and cafes.", "レストランやカフェを探してみるね。"],
      ["実践フレーズ", "Let me know if there's anything you'd like to eat!", "何か食べたいものがあったら教えてね！"],
      ["実践フレーズ", "Good luck with your presentation!", "プレゼン頑張ってね！（Good luck with ～：～がうまくいくといいね）"],
      ["文法・表現パターン", "I should've called you last night.", "昨日の夜、電話すればよかった。（should've + 過去分詞：〜すべきだったのに／後悔）", "I should've called you. I'm sorry."],
      ["文法・表現パターン", "I shouldn't have said that.", "あんなこと、言わなければよかった。（shouldn't have + 過去分詞：〜しなければよかった）", "I shouldn't have said that. I'm sorry."],
      ["文法・表現パターン", "I could've helped you. I had time.", "手伝えたのに。時間はあったんだ。（could've + 過去分詞：〜できたのに）", "I could've picked you up if you had told me."],
      ["文法・表現パターン", "I would've gone if I had known.", "知っていたら行ったのに。（would've + 過去分詞：〜しただろう／もしもの想像）", "If it hadn't rained, the game would've started."],
      ["文法・表現パターン", "I would've loved to come.", "行きたかったな。（would've loved to ～：〜したかったのに／残念）", "I would've loved to come, but I had to work."],
      ["文法・表現パターン", "I must've left it at home.", "家に忘れてきたに違いない。（must've + 過去分詞：〜したに違いない／確信）", "She must've loved the gift."],
      ["文法・表現パターン", "He could've been stuck in traffic.", "渋滞にはまっていたのかも。（could've + 過去分詞：〜だった可能性もある／推測）", "He must've had too much to drink last night."],
      ["文法・表現パターン", "I wish I had known.", "知っていたらよかったのに。（I wish I had + 過去分詞：〜だったらよかった）", "I wish I had told you earlier."],
      ["会話フレーズ", "I can't make it.", "行けそうにない。（参加できない／都合がつかないときに）", "Sorry, I can't make it tonight."],
      ["語彙・コロケーション", "two more assignments", "さらに2つの課題（two more ～：あと2つの～）", "I still have two more assignments."],
      ["会話フレーズ", "It's getting a little bit much.", "ちょっと手いっぱいになってきた。（やることや気持ちが多すぎるときに）", "Work is getting a little bit much."],
      ["文法・表現パターン", "I'll keep working on it.", "引き続き取り組むね。（keep working on ～：～に引き続き取り組む）", "I'll keep working on my English."],
      ["単語 (単体)", "otherwise", "そうしないと、さもないと", "Let's go now. Otherwise, we'll be late."],
      ["文法・表現パターン", "I would have liked to come.", "行きたかったんだけどね。（I would have liked to ～：～したかったんだけどね）", "I would have liked to see you this weekend."]
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
    return { studied: [], quizStats: { correct: 0, total: 0 }, speakCount: 0, history: {}, weaknesses: {}, weakPhrases: {}, favorites: [], srs: {} };
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
    d.srs = {};
    if (s.srs && typeof s.srs === 'object') {
      Object.keys(s.srs).forEach(k => {
        const e = s.srs[k];
        if (e && typeof e === 'object' && /^\d{4}-\d{2}-\d{2}$/.test(String(e.due))) d.srs[k] = { box: Math.max(0, Math.min(6, Number(e.box) || 0)), due: String(e.due) };
      });
    }
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
    srsUpdate(s, item[1], ok);
    saveStore(s);
  }
  // 間隔反復：正解するほど次の出題までの間隔が延び、間違えるとその日にもう一度出題される
  const SRS_INTERVALS = [0, 1, 2, 4, 7, 15, 30];   // box → 次の復習までの日数
  function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function srsUpdate(s, en, ok) {
    const cur = s.srs[en] || { box: 0 };
    const box = ok ? Math.min(cur.box + 1, SRS_INTERVALS.length - 1) : 0;
    s.srs[en] = { box, due: dateKey(addDays(new Date(), SRS_INTERVALS[box])) };
  }
  function getDuePhrases() {
    const srs = getStore().srs, today = dateKey();
    return getAllPhrases().filter(p => srs[p[1]] && srs[p[1]].due <= today);
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
    if (selected === 'DUE') return getDuePhrases();
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
    add('DUE', '⏰ 復習の時期が来たフレーズ (' + getDuePhrases().length + '件)');
    add('FAV', '⭐ お気に入りフレーズのみ');
    categories.forEach(c => add(c, (c === CUSTOM_CAT ? '⭐ ' : '📁 ') + c));
    // ?mode=weak / ?genre=カテゴリ名 で開いたときの初期選択
    const mode = params.get('mode');
    const want = mode === 'weak' ? 'WEAK' : mode === 'due' ? 'DUE' : params.get('genre');
    if (want && Array.from(select.options).some(o => o.value === want)) select.value = want;
  }

  // 選択が空（お気に入り0件など）なら全ジャンルに戻して知らせる
  function ensureNonEmpty(select) {
    if (getPhrasesFor(select.value).length > 0) return true;
    const msg = select.value === 'WEAK'
      ? '苦手フレーズはまだありません。クイズや発音チェックで間違えたフレーズがここに溜まります。'
      : select.value === 'DUE'
        ? '今日復習するフレーズはありません。練習したフレーズが、時間をおいてここに戻ってきます。'
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
    s = s.replace(/[a-z]+'[a-z]+/g, w => CONTRACTIONS[w] || w).replace(/\bcannot\b/g, 'can not');
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
      version: 7,   // v6: 英語日記に翻訳の参考(ref)を追加 / v7: DMノート(dmNotes)を追加
      exportedAt: new Date().toISOString(),
      data: getStore(),
      customPhrases: getCustomPhrases(),
      talkLog: getTalkLog(),
      pins: getPins(),
      keepsakes: getKeepsakes(),
      lists: getLists(),
      plan: getPlan(),
      profile: getProfile(),
      letters: getLetters(),
      diary: getDiary(),
      meetings: getMeetings(),
      nihongo: getNihongo(),
      roadmap: getRoadmap(),
      dmNotes: getDmNotes()
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
  function mergeSrs(a, b) {
    const out = Object.assign({}, a);
    Object.keys(b || {}).forEach(k => { if (!out[k] || b[k].box > out[k].box || (b[k].box === out[k].box && b[k].due > out[k].due)) out[k] = b[k]; });
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
    // 追加用ファイル（Claudeが作った表現・DMの取り込みなど）は、置き換えると今のデータが消えるので統合だけにする
    if (obj.partial && mode === 'replace') {
      throw new Error('このファイルは「追加用」です。「統合」で読み込んでください（置き換えると今のデータが消えます）。');
    }
    const inc = normalizeStore(obj.data);
    const incCustom = sanitizeCustom(obj.customPhrases);
    const incTalk = sanitizeTalk(obj.talkLog);
    const incPins = sanitizePins(obj.pins), incKeeps = sanitizeKeeps(obj.keepsakes), incLists = sanitizeLists(obj.lists), incPlan = sanitizePlan(obj.plan);
    const incProfile = sanitizeProfile(obj.profile), incLetters = sanitizeLetters(obj.letters), incDiary = sanitizeDiary(obj.diary), incMeet = sanitizeMeetings(obj.meetings), incNi = sanitizeNihongo(obj.nihongo);
    const hasRoad = obj.roadmap && typeof obj.roadmap === 'object';   // v4以前のバックアップには無いので、今の進捗をそのまま残す
    const incRoad = sanitizeRoadmap(obj.roadmap);
    const hasDm = Array.isArray(obj.dmNotes);   // v6以前のバックアップには無いので、今のDMノートをそのまま残す
    const incDm = sanitizeDmNotes(obj.dmNotes);
    let store, custom, talk, pins, keeps, lists, plan, profile, letters, diary, meetings, nihongo, road, dm;
    if (mode === 'replace') {
      store = inc; custom = incCustom; talk = incTalk;
      pins = incPins; keeps = incKeeps; lists = incLists; plan = incPlan;
      profile = incProfile; letters = incLetters; diary = incDiary; meetings = incMeet; nihongo = incNi;
      road = hasRoad ? incRoad : getRoadmap();
      dm = hasDm ? incDm : getDmNotes();
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
        weakPhrases: maxMerge(cur.weakPhrases, inc.weakPhrases),
        srs: mergeSrs(cur.srs, inc.srs)
      };
      custom = sanitizeCustom(getCustomPhrases().concat(incCustom));
      talk = sanitizeTalk(getTalkLog().concat(incTalk));
      // ピンは使えた記録(used)を統合
      const curPins = getPins();
      incPins.forEach(ip => {
        const m = curPins.find(c => c.en.toLowerCase() === ip.en.toLowerCase());
        if (m) m.used = Array.from(new Set(m.used.concat(ip.used))).sort((a, b) => a - b); else curPins.push(ip);
      });
      pins = sanitizePins(curPins);
      keeps = sanitizeKeeps(getKeepsakes().concat(incKeeps));
      const curLists = getLists();
      lists = sanitizeLists({ say: curLists.say.concat(incLists.say), ask: curLists.ask.concat(incLists.ask) });
      plan = getPlan() || incPlan;
      const curP = getProfile();
      profile = { partnerName: curP.partnerName || incProfile.partnerName, myName: curP.myName || incProfile.myName };
      letters = sanitizeLetters(getLetters().concat(incLetters));
      diary = sanitizeDiary(getDiary().concat(incDiary));
      meetings = sanitizeMeetings(getMeetings().concat(incMeet));
      nihongo = sanitizeNihongo({ learned: getNihongo().learned.concat(incNi.learned) });
      road = mergeRoadmap(getRoadmap(), incRoad);
      dm = sanitizeDmNotes(getDmNotes().concat(incDm));
    }
    const okAll = saveStore(store) && saveCustomPhrases(custom) && saveTalkLog(talk) && savePins(pins) && saveKeepsakes(keeps) && saveLists(lists) && (plan ? savePlan(plan) : (clearPlan(), true)) && saveProfile(profile) && saveLetters(letters) && saveDiary(diary) && saveMeetings(meetings) && saveNihongo(nihongo) && saveRoadmap(road) && saveDmNotes(dm);
    if (!okAll) throw new Error('保存に失敗しました。ブラウザの保存領域を確認してください。');
    return { custom: custom.length, studied: store.studied.length, favorites: store.favorites.length, talk: talk.length, pins: pins.length, keeps: keeps.length, diary: diary.length, letters: letters.length, dm: dm.length };
  }


  /* ---------- 設定（端末ごと・バックアップ対象外） ---------- */
  const KEY_PREFS = 'english_app_prefs';
  const DEFAULT_PREFS = { speakMine: true, speakPartner: false, kana: true };
  function getPrefs() {
    try { return Object.assign({}, DEFAULT_PREFS, JSON.parse(safeGet(KEY_PREFS)) || {}); } catch (e) { return Object.assign({}, DEFAULT_PREFS); }
  }
  function setPref(key, val) { const p = getPrefs(); p[key] = val; safeSet(KEY_PREFS, JSON.stringify(p)); }

  /* ---------- マイ単語・復習への追加 ---------- */
  function hasPhrase(en) {
    const k = String(en).trim().toLowerCase();
    return getAllPhrases().some(p => p[1].toLowerCase() === k);
  }
  // マイ単語に追加。すでにある場合は added:false
  function addCustomPhrase(en, ja, example) {
    en = String(en || '').trim(); ja = String(ja || '').trim();
    if (!en || !ja) return { added: false, reason: 'empty' };
    if (hasPhrase(en)) return { added: false, reason: 'exists' };
    const list = getCustomPhrases();
    list.unshift([CUSTOM_CAT, en, ja, example ? String(example).trim() : '']);
    return saveCustomPhrases(list) ? { added: true } : { added: false, reason: 'storage' };
  }
  // 苦手（要復習）に登録。フレーズ集に無ければマイ単語にも追加する
  function addToReview(en, ja) {
    const r = addCustomPhrase(en, ja);
    if (!r.added && r.reason !== 'exists') return r;
    const s = getStore();
    const key = getAllPhrases().find(p => p[1].toLowerCase() === String(en).trim().toLowerCase());
    if (!key) return { added: false, reason: 'notfound' };
    s.weakPhrases[key[1]] = Math.max(s.weakPhrases[key[1]] || 0, 1);
    s.srs[key[1]] = { box: 0, due: dateKey() };
    saveStore(s);
    return { added: true, newCustom: r.added };
  }

  /* ---------- 会話ログ ---------- */
  const KEY_TALK = 'english_app_talk_log';
  const TALK_MAX = 1000;
  function sanitizeTalk(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(e => {
      if (!e || typeof e !== 'object') return;
      const t = Number(e.t), en = typeof e.en === 'string' ? e.en.trim() : '', ja = typeof e.ja === 'string' ? e.ja.trim() : '';
      if (!isFinite(t) || (e.who !== 'me' && e.who !== 'partner') || !en || !ja) return;
      const k = t + '|' + e.who + '|' + en;
      if (seen.has(k)) return;
      seen.add(k);
      out.push({ t, who: e.who, en, ja });
    });
    out.sort((a, b) => a.t - b.t);
    return out.slice(-TALK_MAX);
  }
  function getTalkLog() { try { return sanitizeTalk(JSON.parse(safeGet(KEY_TALK))); } catch (e) { return []; } }
  function saveTalkLog(list) { return safeSet(KEY_TALK, JSON.stringify(sanitizeTalk(list))); }
  // who: 'me'（自分の日本語→英訳）/ 'partner'（相手の英語→日本語訳）
  function addTalkEntry(who, en, ja) {
    const entry = { t: Date.now(), who, en: String(en).trim(), ja: String(ja).trim() };
    const list = getTalkLog();
    list.push(entry);
    saveTalkLog(list);
    const s = getStore(); touchToday(s); saveStore(s);   // 会話も学習カレンダー・連続日数に反映
    return entry;
  }

  /* ---------- カタカナ発音ヒント（目安） ---------- */
  const KANA = {
    affection: 'アフェクション', intimacy: 'インティマシー', devotion: 'ディヴォウション', comfort: 'カンフォート', comfortable: 'カンフタブル',
    cherish: 'チェリッシュ', trust: 'トラスト', passion: 'パッション', warmth: 'ウォームス', grateful: 'グレイトフル', thankful: 'サンクフル',
    appreciate: 'アプリーシエイト', thoughtful: 'ソートフル', admire: 'アドマイア', anxious: 'アンクシャス', honestly: 'アネストリー', honest: 'アネスト',
    swamped: 'スワンプト', vent: 'ヴェント', support: 'サポート', anniversary: 'アニヴァーサリー', congrats: 'コングラッツ', celebrate: 'セレブレイト',
    ordinary: 'オーディネリー', special: 'スペシャル', safest: 'セイフェスト', safe: 'セイフ', hilarious: 'ヒレアリアス', sincerely: 'シンセアリー',
    deeply: 'ディープリー', regret: 'リグレット', recommend: 'レコメンド', opportunity: 'アパチューニティ', golden: 'ゴウルデン',
    difficult: 'ディフィカルト', decision: 'ディシジョン', license: 'ライセンス', renew: 'リニュー', overtime: 'オウヴァタイム', coworkers: 'コウワーカーズ',
    favorites: 'フェイヴァリッツ', favorite: 'フェイヴァリット', carry: 'キャリー', yourself: 'ユアセルフ', 
    relax: 'リラックス', cozy: 'コウジー', café: 'キャフェイ', cafe: 'キャフェイ', weekend: 'ウィークエンド', tonight: 'トゥナイト',
    together: 'トゥゲザー', through: 'スルー', thought: 'ソート', thinking: 'シンキング', worried: 'ワーリド', worry: 'ワーリー', anything: 'エニシング',
    everything: 'エヴリシング', amazing: 'アメイジング', proud: 'プラウド', dreams: 'ドリームズ', morning: 'モーニング',
    apart: 'アパート', hurt: 'ハート', argue: 'アーギュー', understand: 'アンダスタンド', relationship: 'リレイションシップ', matters: 'マタァズ',
    feelings: 'フィーリングズ', wish: 'ウィッシュ', thanks: 'サンクス', whatever: 'ワットエヴァー', happen: 'ハプン',
    reply: 'リプライ', totally: 'トウタリー', 
    clearly: 'クリアリー', cuddle: 'カドゥル', forward: 'フォーワード',
    someone: 'サムワン', beautiful: 'ビューティフル', definitely: 'デフィニットリー', actually: 'アクチュアリー',
    probably: 'プロバブリー', really: 'リアリー', important: 'インポータント', remember: 'リメンバー', surprise: 'サプライズ', exciting: 'イクサイティング',
    awesome: 'オーサム', gorgeous: 'ゴージャス', lonely: 'ロウンリー', worth: 'ワース', world: 'ワールド',
    thoroughly: 'サラリー', schedule: 'スケジュール', vacation: 'ヴェイケイション', birthday: 'バースデイ', either: 'イーザー', rather: 'ラザー',
    answer: 'アンサー', listen: 'リスン', whole: 'ホウル', enough: 'イナフ', laugh: 'ラフ', daughter: 'ドーター', nervous: 'ナーヴァス',
    stress: 'ストレス', stressed: 'ストレスト', exhausted: 'イグゾースティド', overwhelmed: 'オウヴァウェルムド', upset: 'アプセット', disappointed: 'ディサポインティド',
    misunderstanding: 'ミスアンダスタンディング', apologize: 'アパロジャイズ', forgive: 'フォーギヴ', 
    fiancé: 'フィーアンセイ', cuddling: 'カドゥリング',
    "should've": 'シュダヴ', "shouldn't": 'シュドゥント', "could've": 'クダヴ', "would've": 'ウダヴ', "must've": 'マスタヴ', 
    adore: 'アドー', treasure: 'トレジャー', pressure: 'プレッシャー', patient: 'ペイシェント',
    dessert: 'ディザート', souvenir: 'スーヴェニア', souvenirs: 'スーヴェニアズ', delicious: 'ディリシャス', stuffed: 'スタッフト', incredible: 'インクレディブル',
    spicy: 'スパイシー', blanket: 'ブランケット', takeout: 'テイクアウト', dishes: 'ディッシュィズ', view: 'ヴュー', photo: 'フォウトウ', picture: 'ピクチャー',
    lovely: 'ラヴリー', order: 'オーダー', mood: 'ムード', allergic: 'アラージック', relaxing: 'リラクシング', building: 'ビルディング', station: 'ステイション',
    always: 'オールウェイズ', dinner: 'ディナー', bill: 'ビル', split: 'スプリット', cheers: 'チアーズ', toast: 'トウスト', recommends: 'レコメンズ',
    starving: 'スターヴィング', hungry: 'ハングリー', knife: 'ナイフ', knives: 'ナイヴズ', onions: 'アニオンズ', drawer: 'ドローア', careful: 'ケアフル',
    matching: 'マッチング', lemonade: 'レモネイド', pasta: 'パースタ', mild: 'マイルド', directions: 'ディレクションズ', across: 'アクロス', blocks: 'ブロックス',
    presentation: 'プレゼンテイション', restaurants: 'レストランツ', restaurant: 'レストラント', cafes: 'キャフェイズ', breaks: 'ブレイクス', luck: 'ラック', cheering: 'チアリング',
    available: 'アヴェイラブル', convenient: 'コンヴィーニエント', exactly: 'イグザクトリ', certainly: 'サートゥンリー', fortunate: 'フォーチュネット', lucky: 'ラッキー',
    assignments: 'アサインメンツ', assignment: 'アサインメント', otherwise: 'アザーワイズ'
  };
  // 英文に含まれる難しめの単語 → [単語, カタカナ] の配列
  function kanaHints(text) {
    const seen = new Set(), out = [];
    String(text || '').toLowerCase().replace(/[’‘]/g, "'").split(/[^a-zé']+/).forEach(w => {
      w = w.replace(/^'+|'+$/g, '');
      if (KANA[w] && !seen.has(w)) { seen.add(w); out.push([w, KANA[w]]); }
    });
    return out;
  }
  // container にヒントを描画（設定OFF・該当なしなら何も出さない）
  function renderKana(container, text) {
    container.innerHTML = '';
    if (!getPrefs().kana) { container.style.display = 'none'; return; }
    const hints = kanaHints(text).slice(0, 6);
    if (!hints.length) { container.style.display = 'none'; return; }
    container.style.display = 'block';
    container.textContent = '🔤 ' + hints.map(h => h[0] + '＝' + h[1]).join('  ／  ');
  }

  /* ---------- 汎用の保存ヘルパー・日付 ---------- */
  function loadJSON(key, fallback) { try { const v = JSON.parse(safeGet(key)); return v == null ? fallback : v; } catch (e) { return fallback; } }
  function parseKey(k) { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(k)); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
  // 今日から指定日までの日数（今日=0、過去はマイナス）
  function daysUntil(k) {
    const d = parseKey(k); if (!d) return null;
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return Math.round((d - t) / 86400000);
  }
  function toast(msg) {
    let el = document.getElementById('toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2400);
  }
  // ひらがな/カタカナ・全半角のゆれを吸収して比較用に正規化
  function normJa(s) {
    return String(s || '').normalize('NFKC').toLowerCase().replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  }
  function decodeEntities(s) { return new DOMParser().parseFromString(String(s), 'text/html').documentElement.textContent || ''; }

  // 無料翻訳API。pair: 'ja|en' / 'en|ja'。戻り値 { ok, text, alts[] }
  async function translate(text, pair) {
    if (!navigator.onLine) return { ok: false, text: 'オフラインのため翻訳できません。', alts: [] };
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 10000);
      const res = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + pair, { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error('http ' + res.status);
      const data = await res.json();
      const status = Number(data && data.responseStatus);
      const out = data && data.responseData && data.responseData.translatedText;
      if (status === 200 && out) {
        const alts = [];
        (data.matches || []).forEach(m => {
          const t = decodeEntities(m && m.translation || '').trim();
          if (t && !alts.some(a => a.toLowerCase() === t.toLowerCase())) alts.push(t);
        });
        return { ok: true, text: decodeEntities(out), alts };
      }
      if (status === 429) return { ok: false, text: '無料翻訳の1日の利用上限に達しました。しばらくしてからお試しください。', alts: [] };
      if (/QUERY LENGTH LIMIT/i.test(String(out))) return { ok: false, text: '文章が長すぎます（500文字以内にしてください）。', alts: [] };
    } catch (e) {}
    return { ok: false, text: '翻訳に失敗しました。通信状況を確認してもう一度お試しください。', alts: [] };
  }

  /* ---------- ピン留め（会う前に準備したフレーズ）と「使えた」記録 ---------- */
  const KEY_PINS = 'english_app_pins';
  function sanitizePins(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(p => {
      if (!p || typeof p.en !== 'string' || typeof p.ja !== 'string') return;
      const en = p.en.trim(), ja = p.ja.trim();
      if (!en || !ja || seen.has(en.toLowerCase())) return;
      seen.add(en.toLowerCase());
      out.push({ en, ja, t: Number(p.t) || Date.now(), used: (Array.isArray(p.used) ? p.used : []).map(Number).filter(isFinite).slice(-50) });
    });
    return out.slice(0, 200);
  }
  function getPins() { return sanitizePins(loadJSON(KEY_PINS, [])); }
  function savePins(list) { return safeSet(KEY_PINS, JSON.stringify(sanitizePins(list))); }
  function isPinned(en) { const k = String(en).trim().toLowerCase(); return getPins().some(p => p.en.toLowerCase() === k); }
  function togglePin(en, ja) {
    const list = getPins(), k = String(en).trim().toLowerCase();
    const i = list.findIndex(p => p.en.toLowerCase() === k);
    if (i >= 0) { list.splice(i, 1); savePins(list); return false; }
    list.unshift({ en: String(en).trim(), ja: String(ja).trim(), t: Date.now(), used: [] });
    savePins(list); return true;
  }
  function markPinUsed(en) {
    const list = getPins(), k = String(en).trim().toLowerCase();
    const p = list.find(x => x.en.toLowerCase() === k);
    if (!p) return false;
    p.used.push(Date.now()); savePins(list);
    const s = getStore(); touchToday(s); saveStore(s);
    return true;
  }

  /* ---------- もらった言葉（コレクション） ---------- */
  const KEY_KEEP = 'english_app_keepsakes';
  function sanitizeKeeps(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(e => {
      if (!e || typeof e.en !== 'string') return;
      const en = e.en.trim(), ja = typeof e.ja === 'string' ? e.ja.trim() : '', t = Number(e.t);
      if (!en || !isFinite(t) || seen.has(t + '|' + en)) return;
      seen.add(t + '|' + en);
      out.push({ t, en, ja });
    });
    out.sort((a, b) => b.t - a.t);
    return out.slice(0, 500);
  }
  function getKeepsakes() { return sanitizeKeeps(loadJSON(KEY_KEEP, [])); }
  function saveKeepsakes(list) { return safeSet(KEY_KEEP, JSON.stringify(sanitizeKeeps(list))); }
  function addKeepsake(en, ja) {
    const list = getKeepsakes();
    if (list.some(e => e.en.toLowerCase() === String(en).trim().toLowerCase())) return false;
    list.unshift({ t: Date.now(), en: String(en).trim(), ja: String(ja || '').trim() });
    return saveKeepsakes(list);
  }
  function hasKeepsake(en) { const k = String(en).trim().toLowerCase(); return getKeepsakes().some(e => e.en.toLowerCase() === k); }

  /* ---------- 言いたいこと／聞きたいことリスト ---------- */
  const KEY_LISTS = 'english_app_lists';
  function sanitizeLists(v) {
    const out = { say: [], ask: [] };
    ['say', 'ask'].forEach(kind => {
      const seen = new Set();
      ((v && Array.isArray(v[kind])) ? v[kind] : []).forEach(e => {
        if (!e || typeof e.ja !== 'string' || typeof e.en !== 'string') return;
        const ja = e.ja.trim(), en = e.en.trim();
        if (!ja || !en || seen.has(en.toLowerCase())) return;
        seen.add(en.toLowerCase());
        out[kind].push({ id: String(e.id || ('i' + Date.now() + Math.random().toString(36).slice(2, 6))), ja, en, done: !!e.done, t: Number(e.t) || Date.now() });
      });
      out[kind] = out[kind].slice(0, 100);
    });
    return out;
  }
  function getLists() { return sanitizeLists(loadJSON(KEY_LISTS, {})); }
  function saveLists(v) { return safeSet(KEY_LISTS, JSON.stringify(sanitizeLists(v))); }

  /* ---------- 次に会う日の予習プラン ---------- */
  const KEY_PLAN = 'english_app_plan';
  function sanitizePlan(v) {
    if (!v || typeof v !== 'object' || !parseKey(v.date)) return null;
    const scenes = (Array.isArray(v.scenes) ? v.scenes : []).filter(x => typeof x === 'string').slice(0, 6);
    const practiced = {};
    if (v.practiced && typeof v.practiced === 'object') {
      Object.keys(v.practiced).slice(-60).forEach(k => { if (parseKey(k) && Array.isArray(v.practiced[k])) practiced[k] = v.practiced[k].filter(x => typeof x === 'string').slice(0, 60); });
    }
    const extra = {};
    if (v.extra && typeof v.extra === 'object') Object.keys(v.extra).slice(-60).forEach(k => { if (parseKey(k)) extra[k] = Math.max(0, Math.min(20, Number(v.extra[k]) || 0)); });
    return { date: v.date, scenes, startedAt: Number(v.startedAt) || Date.now(), practiced, extra };
  }
  function getPlan() { return sanitizePlan(loadJSON(KEY_PLAN, null)); }
  function savePlan(v) { const p = sanitizePlan(v); if (!p) return false; return safeSet(KEY_PLAN, JSON.stringify(p)); }
  function clearPlan() { try { localStorage.removeItem(KEY_PLAN); } catch (e) {} }

  /* ---------- 宛名・署名（プロフィール） ---------- */
  const KEY_PROFILE = 'english_app_profile';
  function sanitizeProfile(v) {
    const clean = x => (typeof x === 'string' ? x.trim().slice(0, 40) : '');
    return { partnerName: clean(v && v.partnerName), myName: clean(v && v.myName) };
  }
  function getProfile() { return sanitizeProfile(loadJSON(KEY_PROFILE, {})); }
  function saveProfile(v) { return safeSet(KEY_PROFILE, JSON.stringify(sanitizeProfile(v))); }

  /* ---------- 手紙・メッセージの下書き ---------- */
  const KEY_LETTERS = 'english_app_letters';
  function newId(prefix) { return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function sanitizeLetters(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(l => {
      if (!l || typeof l !== 'object') return;
      const id = String(l.id || ''); if (!id || seen.has(id)) return;
      const pairs = (Array.isArray(l.pairs) ? l.pairs : []).filter(p => p && typeof p.en === 'string')
        .map(p => ({ ja: typeof p.ja === 'string' ? p.ja.slice(0, 600) : '', en: p.en.slice(0, 600) })).slice(0, 40);
      if (!pairs.length) return;
      seen.add(id);
      out.push({ id, t: Number(l.t) || Date.now(), mode: l.mode === 'msg' ? 'msg' : 'letter', occ: typeof l.occ === 'string' ? l.occ.slice(0, 20) : '', pairs });
    });
    out.sort((a, b) => b.t - a.t);
    return out.slice(0, 100);
  }
  function getLetters() { return sanitizeLetters(loadJSON(KEY_LETTERS, [])); }
  function saveLetters(list) { return safeSet(KEY_LETTERS, JSON.stringify(sanitizeLetters(list))); }

  /* ---------- 英語日記 ---------- */
  const KEY_DIARY = 'english_app_diary';
  const MOODS = ['😊', '🥰', '😆', '😌', '😢', '😴'];
  function sanitizeDiary(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(e => {
      if (!e || typeof e !== 'object' || typeof e.en !== 'string') return;
      const id = String(e.id || ''), en = e.en.trim().slice(0, 1000);
      const ref = typeof e.ref === 'string' ? e.ref.trim().slice(0, 1000) : '';   // 翻訳の英語（参考）。v6で追加
      if (!id || !en) return;
      if (seen.has(id)) {   // 同じ日記が重なったら、翻訳の参考がある方を残す（統合読み込み用）
        const x = out.find(y => y.id === id);
        if (x && !x.ref && ref) x.ref = ref;
        return;
      }
      seen.add(id);
      out.push({ id, t: Number(e.t) || Date.now(), ja: typeof e.ja === 'string' ? e.ja.trim().slice(0, 1000) : '', en,
        mood: MOODS.includes(e.mood) ? e.mood : '', memory: !!e.memory, ref });
    });
    out.sort((a, b) => b.t - a.t);
    return out.slice(0, 500);
  }
  function getDiary() { return sanitizeDiary(loadJSON(KEY_DIARY, [])); }
  function saveDiary(list) { return safeSet(KEY_DIARY, JSON.stringify(sanitizeDiary(list))); }
  function addDiaryEntry(en, ja, mood, memory, ref) {
    const list = getDiary();
    list.unshift({ id: newId('d'), t: Date.now(), ja: ja || '', en, mood: mood || '', memory: !!memory, ref: ref || '' });
    const ok = saveDiary(list);
    const s = getStore(); touchToday(s); saveStore(s);
    return ok;
  }

  /* ---------- 日本語カードの習得記録 ---------- */
  const KEY_NIHONGO = 'english_app_nihongo';
  function sanitizeNihongo(v) {
    return { learned: Array.from(new Set((v && Array.isArray(v.learned) ? v.learned : []).filter(x => typeof x === 'string' && x.length < 60))).slice(0, 500) };
  }
  function getNihongo() { return sanitizeNihongo(loadJSON(KEY_NIHONGO, {})); }
  function saveNihongo(v) { return safeSet(KEY_NIHONGO, JSON.stringify(sanitizeNihongo(v))); }


  /* ---------- 3か月ロードマップの進捗 ---------- */
  const KEY_ROAD = 'english_app_roadmap';
  function emptyRoadmap() { return { start: null, done: {}, skipped: {}, cardLog: {}, checks: {}, sessions: [] }; }
  function sanitizeRoadmap(v) {
    const out = emptyRoadmap();
    if (!v || typeof v !== 'object') return out;
    if (parseKey(v.start)) out.start = v.start;
    const dates = o => Object.keys(o && typeof o === 'object' ? o : {}).filter(k => parseKey(k)).sort().slice(-400);
    dates(v.done).forEach(k => {
      const ids = (Array.isArray(v.done[k]) ? v.done[k] : []).filter(x => typeof x === 'string' && x.length < 8);
      if (ids.length) out.done[k] = Array.from(new Set(ids));
    });
    dates(v.skipped).forEach(k => { if (v.skipped[k]) out.skipped[k] = true; });
    const log = v.cardLog && typeof v.cardLog === 'object' ? v.cardLog : {};
    Object.keys(log).slice(-1500).forEach(en => {
      const e = log[en];
      if (!e || typeof e !== 'object' || en.length > 200 || !parseKey(e.d)) return;
      out.cardLog[en] = { ok: !!e.ok, d: e.d, w: Math.max(0, Math.min(12, Number(e.w) || 0)) };
      if (typeof e.f === 'boolean') out.cardLog[en].f = e.f;   // 初回（1回目）で言えたか
    });
    const ch = v.checks && typeof v.checks === 'object' ? v.checks : {};
    ['1', '2', '3'].forEach(m => {
      const c = ch[m];
      if (c && typeof c === 'object' && parseKey(c.d)) {
        const total = Math.max(0, Math.min(50, Number(c.total) || 0));
        out.checks[m] = { said: Math.max(0, Math.min(total, Number(c.said) || 0)), total, d: c.d };
      }
    });
    // カード暗唱1回ごとのふり返り（ラウンドごとの言えた数、最後まで言えなかったカード）
    const seenS = new Set();
    (Array.isArray(v.sessions) ? v.sessions : []).forEach(x => {
      if (!x || typeof x !== 'object' || !parseKey(x.d) || !['lunch', 'week', 'weak', 'check'].includes(x.kind)) return;
      const rounds = (Array.isArray(x.rounds) ? x.rounds : []).slice(0, 3).map(r => {
        const total = Math.max(0, Math.min(80, Number(Array.isArray(r) ? r[1] : 0) || 0));
        return [Math.max(0, Math.min(total, Number(Array.isArray(r) ? r[0] : 0) || 0)), total];
      }).filter(r => r[1] > 0);
      if (!rounds.length) return;
      const still = (Array.isArray(x.still) ? x.still : []).filter(en => typeof en === 'string' && en.length < 200).slice(0, 80);
      const key = x.d + '|' + x.kind + '|' + rounds.map(r => r.join('/')).join(',') + '|' + still.join(',');
      if (seenS.has(key)) return;
      seenS.add(key);
      out.sessions.push({ d: x.d, kind: x.kind, w: Math.max(0, Math.min(12, Number(x.w) || 0)), t: Number(x.t) || 0, rounds, still });
    });
    out.sessions.sort((a, b) => (a.d === b.d ? a.t - b.t : (a.d < b.d ? -1 : 1)));
    out.sessions = out.sessions.slice(-150);
    return out;
  }
  function getRoadmap() { return sanitizeRoadmap(loadJSON(KEY_ROAD, null)); }
  function saveRoadmap(v) { return safeSet(KEY_ROAD, JSON.stringify(sanitizeRoadmap(v))); }
  function mergeRoadmap(a, b) {
    const out = sanitizeRoadmap(a);
    if (!out.start) out.start = b.start;
    Object.keys(b.done).forEach(k => { out.done[k] = Array.from(new Set((out.done[k] || []).concat(b.done[k]))); });
    Object.keys(b.skipped).forEach(k => { out.skipped[k] = true; });
    Object.keys(b.cardLog).forEach(en => { const c = out.cardLog[en]; if (!c || b.cardLog[en].d > c.d) out.cardLog[en] = b.cardLog[en]; });
    Object.keys(b.checks).forEach(m => { const c = out.checks[m]; if (!c || b.checks[m].d > c.d) out.checks[m] = b.checks[m]; });
    out.sessions = out.sessions.concat(b.sessions);
    return sanitizeRoadmap(out);
  }

  /* ---------- 会った日ごとの成果（予習プランの記録） ---------- */
  const KEY_MEET = 'english_app_meetings';
  function sanitizeMeetings(list) {
    const seen = new Set(), out = [];
    (Array.isArray(list) ? list : []).forEach(m => {
      if (!m || !parseKey(m.date) || seen.has(m.date)) return;
      seen.add(m.date);
      out.push({ date: m.date, scenes: (Array.isArray(m.scenes) ? m.scenes : []).filter(x => typeof x === 'string').slice(0, 6),
        practiced: Math.max(0, Number(m.practiced) || 0), used: Math.max(0, Number(m.used) || 0), talk: Math.max(0, Number(m.talk) || 0) });
    });
    out.sort((a, b) => a.date < b.date ? -1 : 1);
    return out.slice(-50);
  }
  function getMeetings() { return sanitizeMeetings(loadJSON(KEY_MEET, [])); }
  function saveMeetings(list) { return safeSet(KEY_MEET, JSON.stringify(sanitizeMeetings(list))); }
  // 予習プランから成果サマリーを作る（予習した数・実際に使えた数・会話の数）
  function summarizePlan(plan) {
    const d = parseKey(plan.date);
    const from = plan.startedAt, to = d.getTime() + 2 * 86400000;
    const practiced = Object.keys(plan.practiced).reduce((n, k) => n + plan.practiced[k].length, 0);
    const used = getPins().reduce((n, p) => n + p.used.filter(t => t >= from && t < to).length, 0);
    const day0 = d.getTime(), talk = getTalkLog().filter(e => e.t >= day0 && e.t < to).length;
    return { date: plan.date, scenes: plan.scenes, practiced, used, talk };
  }
  function archivePlan(plan) {
    if (!plan) return false;
    const list = getMeetings();
    const sum = summarizePlan(plan);
    const i = list.findIndex(m => m.date === sum.date);
    if (i >= 0) list[i] = sum; else list.push(sum);
    return saveMeetings(list);
  }

  /* ---------- DMノート（相手からのDMと、そこから学んだ表現・返信の下書き） ---------- */
  // { id, t: 保存時刻, u: 更新時刻, d: 受け取った日(YYYY-MM-DD), text: DM原文, memo, tr: [文ごとの日本語訳], items: [{en, ja}] 保存した表現, reply: 返信の下書き, c: Claude用にコピー済み }
  const KEY_DM = 'english_app_dmnotes';
  function sanitizeDmNotes(list) {
    const map = new Map();
    (Array.isArray(list) ? list : []).forEach(n => {
      if (!n || typeof n !== 'object' || typeof n.text !== 'string') return;
      const id = String(n.id || ''), text = n.text.trim().slice(0, 4000);
      if (!id || !text) return;
      const e = { id, t: Number(n.t) || Date.now(), u: Number(n.u) || Number(n.t) || 0,
        d: parseKey(n.d) ? n.d : dateKey(new Date(Number(n.t) || Date.now())), text,
        memo: typeof n.memo === 'string' ? n.memo.trim().slice(0, 500) : '',
        tr: (Array.isArray(n.tr) ? n.tr : []).slice(0, 80).map(x => typeof x === 'string' ? x.slice(0, 600) : ''),
        items: (Array.isArray(n.items) ? n.items : []).filter(x => x && typeof x.en === 'string' && x.en.trim())
          .map(x => ({ en: x.en.trim().slice(0, 300), ja: typeof x.ja === 'string' ? x.ja.trim().slice(0, 300) : '' })).slice(0, 60),
        reply: typeof n.reply === 'string' ? n.reply.slice(0, 2000) : '', c: !!n.c };
      const x = map.get(id);
      if (!x) { map.set(id, e); return; }
      // 同じDMが重なったら（統合読み込み）、新しく更新された方を基本にして、訳・保存した表現は足し合わせる
      const base = e.u > x.u ? e : x, other = base === e ? x : e;
      other.tr.forEach((v, i) => { if (v && !base.tr[i]) base.tr[i] = v; });
      for (let i = 0; i < base.tr.length; i++) if (typeof base.tr[i] !== 'string') base.tr[i] = '';
      other.items.forEach(it => { if (!base.items.some(b => b.en.toLowerCase() === it.en.toLowerCase())) base.items.push(it); });
      if (!base.reply) base.reply = other.reply;
      if (!base.memo) base.memo = other.memo;
      base.c = base.c || other.c;
      map.set(id, base);
    });
    const out = Array.from(map.values());
    out.sort((a, b) => (b.d < a.d ? -1 : b.d > a.d ? 1 : b.t - a.t));
    return out.slice(0, 300);
  }
  function getDmNotes() { return sanitizeDmNotes(loadJSON(KEY_DM, [])); }
  function saveDmNotes(list) { return safeSet(KEY_DM, JSON.stringify(sanitizeDmNotes(list))); }

  /* ---------- 発音練習ボタン（各ページ共通） ---------- */
  let activeRec = null;
  // btn にマイク機能を結びつける。getRef() は照合する英文。handlers: { onResult(result), onInterim(text), onError(msg), onState(on) }
  function attachPronunciation(btn, getRef, handlers, labels) {
    labels = labels || { idle: '🎙️', on: '⏹' };
    if (!recognitionSupported) { btn.disabled = true; btn.title = 'このブラウザは音声認識に対応していません'; return null; }
    const rec = createRecognizer({
      lang: 'en-US',
      onState: on => { btn.classList.toggle('recording', on); btn.textContent = on ? labels.on : labels.idle; handlers.onState && handlers.onState(on); },
      onInterim: t => handlers.onInterim && handlers.onInterim(t),
      onFinal: alts => {
        // getRef() は英文1つ、または別解の配列。いちばん近い正解との照合結果を返す
        let best = null;
        [].concat(getRef()).forEach(ref => { const r = bestMatch(ref, alts); if (!best || r.score > best.score) best = Object.assign(r, { ref }); });
        handlers.onResult && handlers.onResult(best);
      },
      onError: m => handlers.onError && handlers.onError(m)
    });
    btn.addEventListener('click', () => {
      if (rec.listening) { rec.stop(); return; }
      if (activeRec && activeRec !== rec && activeRec.listening) activeRec.abort();
      activeRec = rec;
      rec.start();
    });
    return rec;
  }
  function renderChips(container, words) {
    container.innerHTML = '';
    words.forEach(w => { const s = document.createElement('span'); s.className = 'word-chip ' + w.status; s.textContent = w.text; container.appendChild(s); });
  }
  const PASS_SCORE = 75;

  /* ---------- オフライン対応（Service Worker） ---------- */
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }

  /* ---------- 公開 ---------- */
  window.EA = {
    BASE_PHRASES, CUSTOM_CAT, recognitionSupported,
    esc, dateKey, getStore, saveStore, getCustomPhrases, saveCustomPhrases, getAllPhrases,
    isFavorite, toggleFavorite, markStudied, recordResult, countSpeak, getWeakPhrases, calcStreak, updateStreakBadge,
    splitJa, getPhrasesFor, populateGenreSelect, ensureNonEmpty,
    speak, createRecognizer, compareText, bestMatch,
    downloadBackup, importBackup,
    getPrefs, setPref, hasPhrase, addCustomPhrase, addToReview,
    getTalkLog, saveTalkLog, addTalkEntry, kanaHints, renderKana,
    getDuePhrases, daysUntil, parseKey, toast, translate, decodeEntities, normJa,
    getPins, savePins, isPinned, togglePin, markPinUsed,
    getKeepsakes, saveKeepsakes, addKeepsake, hasKeepsake,
    getLists, saveLists, getPlan, savePlan, clearPlan,
    attachPronunciation, renderChips, PASS_SCORE,
    getProfile, saveProfile, getLetters, saveLetters, getDiary, saveDiary, addDiaryEntry, MOODS,
    getNihongo, saveNihongo, getRoadmap, saveRoadmap, getMeetings, saveMeetings, summarizePlan, archivePlan, newId,
    getDmNotes, saveDmNotes
  };

  document.addEventListener('DOMContentLoaded', updateStreakBadge);
})();
