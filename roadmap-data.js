/* 心をつなぐ英語表現 - 3か月ロードマップ（内容データと計算ロジック） */
(function (root) {
  'use strict';

  var WEEKS = [
    { n: 1, theme: '会話を止めない型', focus: '時間稼ぎ、聞き返し、相づち、共感、基本の感情、気遣い（50枚）' },
    { n: 2, theme: '感情を強弱と理由で言う', focus: '嬉しい／楽しい／最高、不安／怖い／焦り、「〜だから」と理由を添える、好き嫌い、お願い' },
    { n: 3, theme: '日常のやりとり', focus: '「今日どうだった？」、近況、予定の誘い、受ける・断る、食事・仕事・休日の話' },
    { n: 4, theme: 'バッファー週（1か月目）', focus: '第1〜3週のカード復習、録音の聞き返し、月末チェック', buffer: true },
    { n: 5, theme: '気持ちを伝える', focus: '好意、会いたい、寂しい、ありがとう、会えてよかった' },
    { n: 6, theme: '気遣い・不安・すれ違い', focus: 'やわらかい断り方、ごめんの言い方、不安や遠慮の伝え方、相手のペースを尊重する表現' },
    { n: 7, theme: '価値観・将来の質問', focus: '大切にしていること、家族、仕事、日本とドイツの違い、「あなたはどう思う？」' },
    { n: 8, theme: 'バッファー週（2か月目）', focus: '復習、録音の聞き返し、彼女宛てメッセージの書き直し', buffer: true },
    { n: 9, theme: '意見を述べる', focus: 'I think … because …、例を挙げる、理由を2つ言う' },
    { n: 10, theme: '保留・同意・やわらげる反論', focus: 'It depends on …、I see your point, but …、政治の入口になる話題' },
    { n: 11, theme: '宗教・価値観', focus: '相手の考えを聞く質問、違いを認める表現、踏み込みすぎない言い方' },
    { n: 12, theme: 'バッファー週＋総まとめ', focus: '3か月の総復習、録音で3か月前と比べる', buffer: true }
  ];

  var MONTHS = [
    { n: 1, name: '感情と日常の土台', goal: '月末チェック：お題を見て3秒以内に最初の一文が出るか（カード全体の7割以上を目標）' },
    { n: 2, name: '気遣いと恋愛', goal: '月末チェック：恋愛・気遣いの話題を3〜5文で言えるか（カードは7割以上を目標）' },
    { n: 3, name: '深い話題', goal: '3か月の総まとめ：意見か「保留の型」が言えるか。政治・宗教は結論より、相手の考えを聞く表現を優先' }
  ];

  var PASS_RATE = 70;   // 週末・月末の合格ライン（%）

  var LINKS = {
    voa: { label: 'VOA Learning English', href: 'https://learningenglish.voanews.com/', ext: true },
    levels: { label: 'News in Levels', href: 'https://www.newsinlevels.com/', ext: true },
    bbc: { label: 'BBC 6 Minute English', href: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english', ext: true },
    addword: { label: '➕ 表現を追加', href: 'addword.html' },
    writing: { label: '✍️ 英作文で練習', href: 'writing.html' },
    speaking: { label: '🎙️ 発音・シャドーイング', href: 'speaking.html' },
    diary: { label: '📔 英語日記に書く', href: 'diary.html' },
    letter: { label: '💌 メッセージを書く', href: 'letter.html' },
    quiz: { label: '❓ クイズで確認', href: 'quiz.html' },
    weak: { label: '🎯 弱点を復習', href: 'quiz.html?mode=weak' }
  };

  var DEEP = {
    steps: [
      '入門レベルの記事を読み、頻出語彙を10個だけ拾う',
      '日本語で「私の考え・理由・迷い」を3行書く',
      '簡単な英語にして、型で磨く'
    ],
    patterns: [
      ['意見', 'I think … because …'],
      ['保留', 'It depends on …'],
      ['共感して反論', 'I see your point, but …'],
      ['好奇心で聞く', "I'm curious how you see it."],
      ['気遣い', 'Take your time. / No pressure.']
    ]
  };

  var WEEK1_CARDS = [["Let me think for a second.", "ちょっと考えさせて。", "時間稼ぎ"], ["Hmm, how can I say this?", "えっと、どう言えばいいかな。", "時間稼ぎ"], ["It may not come out right, but...", "うまく言えないかもしれないけど。", "時間稼ぎ"], ["Could you speak a little slower?", "ゆっくり話してもらえる？", "聞き返し"], ["Could you say that again?", "もう一度言ってもらえる？", "聞き返し"], ["What do you mean by ...?", "〜ってどういう意味？", "聞き返し"], ["So you mean ...?", "つまり〜ということ？", "確認"], ["Do you mean ...?", "それは〜のことかな？", "確認"], ["Let me say it another way.", "言い換えるとね。", "言い換え"], ["Wait, let me organize my thoughts.", "ちょっと待って、整理させて。", "時間稼ぎ"], ["I see.", "なるほど。", "相づち"], ["That sounds hard.", "それは大変だったね。", "共感"], ["I get it.", "わかるよ。", "共感"], ["Really?", "本当に？", "相づち"], ["So what happened?", "それで、どうなったの？", "相づち"], ["Tell me more.", "もっと聞かせて。", "相づち"], ["That sounds great!", "それはいいね！", "共感"], ["That's an interesting idea.", "面白い考えだね。", "共感"], ["I feel the same way.", "私も同じ気持ちだよ。", "共感"], ["That's surprising.", "それは意外だった。", "相づち"], ["I'm really happy.", "すごく嬉しい。", "ポジティブな気持ち"], ["I'm glad I met you.", "会えてよかった。", "ポジティブな気持ち"], ["I had a great time.", "楽しかった。", "ポジティブな気持ち"], ["Talking with you makes me feel better.", "あなたと話すと元気になる。", "ポジティブな気持ち"], ["I'm excited.", "ワクワクしてる。", "ポジティブな気持ち"], ["I'm relieved.", "ほっとした。", "ポジティブな気持ち"], ["I was really moved.", "感動した。", "ポジティブな気持ち"], ["I'm proud of it.", "誇りに思う。", "ポジティブな気持ち"], ["Thank you, that really helped.", "ありがとう、助かった。", "感謝"], ["I like that about you.", "あなたのそういうところが好き。", "好意"], ["I'm a little nervous.", "ちょっと不安。", "不安・ネガティブ"], ["I feel nervous.", "緊張してる。", "不安・ネガティブ"], ["I'm tired.", "疲れてる。", "不安・ネガティブ"], ["I'm disappointed.", "がっかりした。", "不安・ネガティブ"], ["I feel a little lonely.", "ちょっと寂しい。", "不安・ネガティブ"], ["I'm frustrated.", "イライラしてる。", "不安・ネガティブ"], ["I don't know what to do.", "どうしていいかわからない。", "不安・ネガティブ"], ["I'm not confident.", "自信がない。", "不安・ネガティブ"], ["I'm still sorting out my feelings.", "気持ちを整理中。", "不安・ネガティブ"], ["Maybe I'm overthinking.", "気にしすぎかも。", "不安・ネガティブ"], ["Don't push yourself.", "無理しないでね。", "気遣い"], ["Take your time.", "急がなくていいよ。", "気遣い"], ["Are you okay?", "大丈夫？", "気遣い"], ["If you want to talk, I'm here to listen.", "話したくなったら、聞くよ。", "気遣い"], ["I don't want to put pressure on you.", "プレッシャーをかけたくない。", "気遣い"], ["We can go at your pace.", "あなたのペースでいいよ。", "気遣い"], ["Thank you for telling me.", "話してくれてありがとう。", "気遣い"], ["I'm sorry if I upset you.", "気を悪くしたらごめんね。", "気遣い"], ["I'm sorry if I made you feel that way.", "そう思わせてごめん。", "気遣い"], ["Your feelings matter to me.", "あなたの気持ちを大切にしたい。", "気遣い"]];   // [英語, 日本語, 分類]

  /* ---------- 日付 ---------- */
  function parseKey(k) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(k || ''));
    if (!m) return null;
    var d = new Date(+m[1], +m[2] - 1, +m[3], 12);
    return isNaN(d.getTime()) ? null : d;
  }
  function keyOf(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function dowOf(d) { return ((d.getDay() + 6) % 7) + 1; }              // 月=1 … 日=7
  function mondayOf(d) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12); x.setDate(x.getDate() - (dowOf(x) - 1)); return x; }
  function dayDiff(a, b) { return Math.round((b.getTime() - a.getTime()) / 86400000); }
  function addDaysKey(k, n) { var d = parseKey(k); d.setDate(d.getDate() + n); return keyOf(d); }
  function nextMondayKey(todayKey) { var d = parseKey(todayKey); d.setDate(d.getDate() + (8 - dowOf(d))); return keyOf(d); }
  var DOW_JA = ['月', '火', '水', '木', '金', '土', '日'];

  // 今日が第何週の何曜日か。state: unset / before（開始前）/ active / done（12週を終えた）
  function position(startKey, todayKey) {
    var s = parseKey(startKey), t = parseKey(todayKey);
    if (!t) return { state: 'unset' };
    if (!s) return { state: 'unset' };
    if (t < s) return { state: 'before', daysUntil: dayDiff(t, s) };
    var diff = dayDiff(mondayOf(s), t), week = Math.floor(diff / 7) + 1, dow = dowOf(t);
    if (week > 12) return { state: 'done', week: 12, dow: dow };
    return { state: 'active', week: week, dow: dow, month: Math.ceil(week / 4), buffer: !!WEEKS[week - 1].buffer, key: todayKey };
  }
  function weekDates(startKey, week) {
    var m = mondayOf(parseKey(startKey)), out = [];
    for (var i = 0; i < 7; i++) { var d = new Date(m.getFullYear(), m.getMonth(), m.getDate() + (week - 1) * 7 + i, 12); out.push(keyOf(d)); }
    return out;
  }
  function monthWeeks(month) { var a = 4 * (month - 1) + 1; return [a, a + 1, a + 2]; }

  /* ---------- カード ---------- */
  var TAG_RE = /^第(\d+)週カード(\d+)(?:[（(](.*?)[）)])?/;
  // 週ごとのカード。内蔵の第1週 + マイ単語（例文欄が「第N週カードM」）から集める
  function cardsByWeek(customPhrases) {
    var by = {};
    function put(w, num, en, ja, tag) {
      (by[w] = by[w] || []).push({ en: en, ja: ja, tag: tag || '', w: w, num: num });
    }
    WEEK1_CARDS.forEach(function (c, i) { put(1, i + 1, c[0], c[1], c[2]); });
    (customPhrases || []).forEach(function (p) {
      var m = TAG_RE.exec(String(p[3] || ''));
      if (!m) return;
      var w = +m[1], num = +m[2];
      if (w < 1 || w > 12) return;
      var list = by[w] = by[w] || [];
      var i = -1; list.forEach(function (c, k) { if (c.en.toLowerCase() === String(p[1]).toLowerCase()) i = k; });
      var card = { en: p[1], ja: p[2], tag: m[3] || '', w: w, num: num };
      if (i >= 0) list[i] = card; else list.push(card);
    });
    Object.keys(by).forEach(function (w) { by[w].sort(function (a, b) { return a.num - b.num; }); });
    return by;
  }
  function splitEven(list, parts) {
    var out = [], per = Math.ceil(list.length / Math.max(1, parts));
    for (var i = 0; i < parts; i++) out.push(list.slice(i * per, (i + 1) * per));
    return out;
  }
  // 第1週の途中から始めた場合は、残りの平日で均等に分ける
  function firstDow(startKey, week) {
    if (week !== 1) return 1;
    var s = parseKey(startKey);
    return Math.min(5, dowOf(s));
  }
  function dayCards(by, startKey, week, dow) {
    var cards = by[week] || [];
    if (dow > 5) return [];
    var f = firstDow(startKey, week);
    if (dow < f) return [];
    return splitEven(cards, 5 - f + 1)[dow - f] || [];
  }
  function lastOk(log, en) { var e = log && log[en]; return e ? e : null; }

  // 昼のカード暗唱で出す組み合わせ
  function lunchDeck(pos, by, startKey, log) {
    var week = pos.week, dow = pos.dow, out = { new: [], review: [], carry: [], title: '' };
    log = log || {};
    if (WEEKS[week - 1].buffer) {
      var all = [];
      monthWeeks(pos.month).forEach(function (w) { all = all.concat(by[w] || []); });
      all = all.map(function (c, i) { return { c: c, i: i }; });
      all.sort(function (a, b) {
        var la = lastOk(log, a.c.en), lb = lastOk(log, b.c.en);
        var ra = !la ? 1 : (la.ok ? 2 : 0), rb = !lb ? 1 : (lb.ok ? 2 : 0);
        if (ra !== rb) return ra - rb;
        var da = la ? la.d : '', db = lb ? lb.d : '';
        if (da !== db) return da < db ? -1 : 1;
        return ((a.i + dow * 7) % 97) - ((b.i + dow * 7) % 97);
      });
      out.review = all.slice(0, 12).map(function (x) { return x.c; });
      out.title = '今月のカードの復習（言えなかったものから）';
      return out;
    }
    out.new = dayCards(by, startKey, week, dow);
    var f = firstDow(startKey, week);
    if (dow > f && dow <= 5) out.review = dayCards(by, startKey, week, dow - 1);
    var seen = {};
    out.new.concat(out.review).forEach(function (c) { seen[c.en] = 1; });
    Object.keys(log).forEach(function (en) {
      var e = log[en];
      if (e && e.ok === false && e.w && e.w < week && !seen[en] && out.carry.length < 6) {
        var card = null;
        Object.keys(by).forEach(function (w) { by[w].forEach(function (c) { if (c.en === en) card = c; }); });
        if (card) { out.carry.push(card); seen[en] = 1; }
      }
    });
    out.title = out.new.length ? '今日の新しいカード' : '';
    return out;
  }
  function weekDeck(by, week) { return (by[week] || []).slice(); }
  function weakDeck(by, log, week) {
    var out = [];
    Object.keys(by).forEach(function (w) {
      if (+w > week) return;
      by[w].forEach(function (c) { var e = log && log[c.en]; if (e && e.ok === false) out.push(c); });
    });
    return out;
  }
  function checkDeck(by, month, seedKey) {
    var all = [];
    monthWeeks(month).forEach(function (w) { all = all.concat(by[w] || []); });
    if (month === 3) all = all.concat(by[12] || []);
    var seed = 0; String(seedKey || '').split('').forEach(function (ch) { seed = (seed * 31 + ch.charCodeAt(0)) % 9973; });
    var pool = all.map(function (c, i) { return { c: c, r: (i * 7919 + seed) % 10007 }; });
    pool.sort(function (a, b) { return a.r - b.r; });
    return pool.slice(0, 10).map(function (x) { return x.c; });
  }
  // 今週の「3秒以内に言えた枚数」（各カードの直近の結果で数える）
  function weekScore(by, week, log) {
    var cards = by[week] || [], said = 0, tried = 0;
    cards.forEach(function (c) { var e = log && log[c.en]; if (e) { tried++; if (e.ok) said++; } });
    return { said: said, tried: tried, total: cards.length, pct: tried ? Math.round(said * 100 / tried) : 0 };
  }

  /* ---------- 1日のメニュー ---------- */
  var EVENING = {
    1: { title: '読解', detail: 'B1〜B2前半の素材を1本。「自分も言いたい」表現を3つだけ拾う。彼女のDMも素材にしてOK。', links: ['voa', 'levels', 'addword'] },
    2: { title: '構文暗唱', detail: null, links: ['writing'] },
    3: { title: 'リスニング', detail: 'スクリプト付き音源を1本。聞く → スクリプトで確認 → シャドーイング×3。', links: ['bbc', 'speaking'] },
    4: { title: 'ライティング', detail: null, links: ['diary'] },
    5: { title: '復習', detail: 'その週のカードを通しで言い、3秒以内に出なかったものに印をつける。', links: ['weak'], deck: 'week' }
  };
  var BUFFER_EVENING = {
    1: { title: '録音の聞き返し', detail: '今月の独り言の録音を聞き返し、言い直したいところをメモする。', links: [] },
    2: { title: 'カードの通し', detail: '言えなかったカードを中心に、日本語 → 英語で即答する。', links: ['weak'], deck: 'weak' },
    3: { title: 'リスニングの復習', detail: '今月聞いた音源を1本選び、もう一度シャドーイング×3。', links: ['bbc', 'speaking'] },
    4: { title: '書き直し', detail: '今月のライティングを1本選び、型を使って書き直す。', links: ['diary'] },
    5: { title: '月末チェック', detail: 'カードからランダムに10枚。日本語を見て3秒以内に言えるか確かめる。', links: [], deck: 'check' }
  };

  function planFor(pos, by, startKey) {
    var week = pos.week, dow = pos.dow, W = WEEKS[week - 1], buffer = !!W.buffer, slots = [];
    var am = { id: 'am', when: '朝', min: true, title: '単語35個の復習＋単語アプリ5分', detail: '今まで通り。', links: [] };
    slots.push(am);
    if (dow <= 5) {
      var lunch = lunchDeck(pos, by, startKey, null);
      var cnt = buffer ? 12 : dayCards(by, startKey, week, dow).length;
      slots.push({
        id: 'noon', when: '昼', min: true,
        title: buffer ? '今月のカード復習（12枚）' : (cnt ? '型カード' + cnt + '枚' : '型カード'),
        detail: buffer ? '言えなかったものから優先して、日本語を見て3秒以内に英語で言う → 音読×3。' : '日本語を見て3秒以内に英語で言う → 音読×3。' + (dow > firstDow(startKey, week) ? '前日の分も軽く復習。' : ''),
        links: [], deck: 'lunch'
      });
      var ev = (buffer ? BUFFER_EVENING : EVENING)[dow];
      var detail = ev.detail;
      if (!buffer && dow === 2) detail = '日本語 → 英語を3秒以内に即答（' + (pos.month === 1 ? '中学レベル' : '高校基礎') + 'の例文10文）。最後に音読。';
      if (!buffer && dow === 4) detail = '今週のテーマ「' + W.theme + '」で3〜5文。型カードの表現を使う。';
      if (buffer && dow === 5) detail = 'カードからランダムに10枚。日本語を見て3秒以内に言えるか確かめる。' + (pos.month === 3 ? '（総まとめ）' : '');
      slots.push({ id: 'night', when: '夜', title: ev.title, detail: detail, links: ev.links, deck: ev.deck || null });
    } else if (dow === 6) {
      if (buffer) {
        slots.push({ id: 'p1', when: '午前', title: '今月のカードの復習（60分）', detail: '印がついたカードを中心に、日本語 → 英語で言う。', links: ['weak'], deck: 'weak' });
        slots.push({ id: 'p2', when: '午後', title: '書き直し・読み返し（60分）', detail: '今月書いたものを、型を使って直す。', links: ['diary'] });
        slots.push({ id: 'p3', when: '夕方', title: 'カードの暗唱（30分）', detail: '言えなかったカードをもう一度。', links: [], deck: 'week' });
      } else {
        slots.push({ id: 'p1', when: '①', title: '読解1本＋表現抽出（60分）', detail: '気になった表現を拾って「単語」に追加。', links: ['voa', 'levels', 'addword'] });
        slots.push({ id: 'p2', when: '②', title: '「今週の気持ち」を日本語3行 → 型で英語に（60分）', detail: 'まず日本語で気持ち・理由・迷いを3行。それをカードの型で英語にする。', links: ['diary'] });
        slots.push({ id: 'p3', when: '③', title: '印をつけたカードの暗唱（30分）', detail: '3秒以内に出なかったカードを、もう一度。', links: [], deck: 'weak' });
      }
    } else {
      if (buffer) {
        slots.push({ id: 'p1', when: '①', title: '30秒の独り言を録音して聞き返す', detail: pos.week === 12 ? '3か月前の録音と聞き比べて、変わったところを書き留める。' : '今月の変化を聞いて、言い直したいところをメモ。', links: [] });
        slots.push({ id: 'p2', when: '②', title: '彼女宛てメッセージの書き直し', detail: '送らなくてよい。型を使って、前より短く自然に。', links: ['letter'] });
      } else {
        slots.push({ id: 'p1', when: '①', title: '30秒の独り言を録音して聞き返す', detail: '今週のテーマで。聞き返して、詰まったところにメモ。', links: [] });
        slots.push({ id: 'p2', when: '②', title: '彼女宛ての短いメッセージを書く', detail: '実際に送らなくてよい。', links: ['letter'] });
      }
    }
    return slots;
  }

  // 1日の状態: full（全部できた）/ min（最低ライン＝朝＋昼）/ skip（捨てた）/ none
  function dayStatus(pos, doneIds, skipped) {
    var d = {}; (doneIds || []).forEach(function (x) { d[x] = 1; });
    var isWk = pos.dow <= 5;
    var ids = isWk ? ['am', 'noon', 'night'] : (pos.dow === 6 ? ['am', 'p1', 'p2', 'p3'] : ['am', 'p1', 'p2']);
    var all = ids.every(function (i) { return d[i]; });
    if (all) return 'full';
    var min = isWk ? (d.am && d.noon) : d.am;
    if (min) return 'min';
    if (skipped) return 'skip';
    return 'none';
  }

  var RM = {
    WEEKS: WEEKS, MONTHS: MONTHS, PASS_RATE: PASS_RATE, LINKS: LINKS, DEEP: DEEP, WEEK1_CARDS: WEEK1_CARDS, DOW_JA: DOW_JA, TAG_RE: TAG_RE,
    parseKey: parseKey, keyOf: keyOf, dowOf: dowOf, mondayOf: mondayOf, nextMondayKey: nextMondayKey, addDaysKey: addDaysKey,
    position: position, weekDates: weekDates, monthWeeks: monthWeeks,
    cardsByWeek: cardsByWeek, dayCards: dayCards, lunchDeck: lunchDeck, weekDeck: weekDeck, weakDeck: weakDeck, checkDeck: checkDeck, weekScore: weekScore,
    planFor: planFor, dayStatus: dayStatus, firstDow: firstDow
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = RM; else root.RM = RM;
})(typeof window !== 'undefined' ? window : this);
