/* 🔁 型練習（チャンク）の内容データ
   PATTERNS: 型を固定して、後ろの言葉だけ入れ替えて言う。
     id: 記録用（英小文字とハイフン）、chunk: つなぎの型、pre / post: 型の前後（［　］に slot が入る）、
     head: 先に出す日本語（結論）、note: ポイント、prep: クイズで空欄にする前置詞（なければクイズに出さない）、
     slots: [後から足す日本語, 入る英語]
   PREPS: 前置詞のコアイメージ（クイズの選択肢） */
(function () {
  var PATTERNS = [
    { id: 'okay-with', chunk: 'okay with', group: '受け入れる・都合', pre: "I'm okay with", post: '.', head: '大丈夫だよ', prep: 'with',
      note: 'okay with ～＝「〜でも大丈夫」。相手の提案を受け入れるときの決まり文句。',
      slots: [['何でも', 'anything'], ['それで', 'that'], ['待つのは', 'waiting'], ['辛いものでも', 'spicy food'], ['どっちでも', 'either']] },
    { id: 'okay-with-you', chunk: 'okay with you?', group: '受け入れる・都合', pre: 'Is', post: ' okay with you?', head: '大丈夫？', prep: 'with',
      note: 'Is ～ okay with you?＝「〜で大丈夫？」。予定やお店を確かめるときに。',
      slots: [['7時で', '7pm'], ['木曜で', 'Thursday'], ['渋谷で', 'Shibuya'], ['おでんで', 'oden'], ['ここで', 'this place']] },
    { id: 'works-for', chunk: 'works for me', group: '受け入れる・都合', pre: '', post: ' works for me.', head: '都合いいよ', prep: 'for',
      note: '～ works for me.＝「〜なら都合いいよ」。予定の返事の定番。主語が入れ替わる型。',
      slots: [['7時なら', '7pm'], ['木曜なら', 'Thursday'], ['それで', 'that'], ['明日なら', 'tomorrow'], ['6時以降ならいつでも', 'anytime after 6']] },
    { id: 'happy-with', chunk: 'happy with', group: '気持ち＋前置詞', pre: "I'm happy with", post: '.', head: '満足してる', prep: 'with',
      note: 'happy with ～＝「〜に満足している」。手元にあるもの・結果と「一緒にいてうれしい」イメージ。',
      slots: [['結果に', 'the result'], ['この店に', 'this place'], ['新しい仕事に', 'my new job'], ['今の生活に', 'my life right now'], ['この写真に', 'this photo']] },
    { id: 'excited-about', chunk: 'excited about', group: '気持ち＋前置詞', pre: "I'm excited about", post: '.', head: '楽しみ！', prep: 'about',
      note: 'excited about ～＝「〜でワクワクしてる」。about は「〜のことで、あれこれ」。',
      slots: [['木曜が', 'Thursday'], ['旅行が', 'the trip'], ['クリスマスが', 'Christmas'], ['おでんを食べるのが', 'trying oden'], ['新しいプロジェクトが', 'the new project']] },
    { id: 'worried-about', chunk: 'worried about', group: '気持ち＋前置詞', pre: "I'm worried about", post: '.', head: '心配してる', prep: 'about',
      note: 'worried about ～＝「〜のことが心配」。人にも物事にも使える。',
      slots: [['あなたのことが', 'you'], ['天気が', 'the weather'], ['明日のプレゼンが', 'my presentation tomorrow'], ['あなたの体調が', 'your health'], ['お金のことが', 'money']] },
    { id: 'sorry-about', chunk: 'sorry about', group: '気持ち＋前置詞', pre: "I'm sorry about", post: '.', head: 'ごめんね', prep: 'about',
      note: 'sorry about ～＝「〜のことはごめんね」。何について謝るかを後ろに足す。',
      slots: [['昨日のこと', 'yesterday'], ['返信が遅れて', 'the late reply'], ['さっきのこと', 'earlier'], ['それは', 'that'], ['散らかってて', 'the mess']] },
    { id: 'proud-of', chunk: 'proud of', group: '気持ち＋前置詞', pre: "I'm proud of", post: '.', head: '誇りに思う', prep: 'of',
      note: 'proud of ～＝「〜を誇りに思う」。of は「〜から出てくる気持ち」。ほめるときの強い一言。',
      slots: [['あなたのこと', 'you'], ['自分のこと', 'myself'], ['あなたががんばったこと', 'how hard you worked'], ['うちのチーム', 'my team'], ['それ', 'it']] },
    { id: 'interested-in', chunk: 'interested in', group: '気持ち＋前置詞', pre: "I'm interested in", post: '.', head: '興味がある', prep: 'in',
      note: 'interested in ～＝「〜に興味がある」。in は「その世界の中に入っている」イメージ。',
      slots: [['日本文化に', 'Japanese culture'], ['ドイツ料理に', 'German food'], ['あなたの研究に', 'your research'], ['教えることに', 'teaching'], ['歴史に', 'history']] },
    { id: 'good-at', chunk: 'good at', group: '気持ち＋前置詞', pre: "I'm good at", post: '.', head: '得意だよ', prep: 'at',
      note: 'good at ～＝「〜が得意」。at は「その一点で」。苦手なら bad at ～。',
      slots: [['料理が', 'cooking'], ['人の名前を覚えるのが', 'remembering names'], ['早起きが', 'waking up early'], ['ギターが', 'playing the guitar'], ['数学が', 'math']] },
    { id: 'used-to', chunk: 'used to ～', group: '気持ち＋前置詞', pre: "I'm used to", post: '.', head: '慣れてる', prep: 'to',
      note: "I'm used to ～＝「〜に慣れている」。to の後ろは名詞か ～ing（used to ＋動詞の原形「昔は〜した」とは別）。",
      slots: [['日本の食べ物に', 'Japanese food'], ['寒さに', 'the cold'], ['一人暮らしに', 'living alone'], ['早起きに', 'getting up early'], ['満員電車に', 'crowded trains']] },
    { id: 'looking-forward', chunk: 'looking forward to', group: '気持ち＋前置詞', pre: "I'm looking forward to", post: '.', head: '楽しみにしてる', prep: 'to',
      note: 'looking forward to ～＝「〜を楽しみにしてる」。to の後ろは名詞か ～ing（to see ではなく to seeing）。',
      slots: [['あなたに会うのを', 'seeing you'], ['週末を', 'the weekend'], ['旅行を', 'our trip'], ['クリスマスを', 'Christmas'], ['あなたの話を聞くのを', 'hearing about it']] },
    { id: 'thank-for', chunk: 'Thank you for', group: 'お礼・効果', pre: 'Thank you for', post: '.', head: 'ありがとう', prep: 'for',
      note: 'Thank you for ～＝「〜をありがとう」。for は「〜に向けて」。動作なら ～ing（Thank you for coming.）。',
      slots: [['今日は', 'today'], ['メッセージ', 'the message'], ['待っててくれて', 'waiting'], ['来てくれて', 'coming'], ['いろいろ', 'everything']] },
    { id: 'good-for', chunk: 'good for', group: 'お礼・効果', pre: "It's good for", post: '.', head: 'いいんだよ', prep: 'for',
      note: "It's good for ～＝「〜にいい」。for は「〜にとって・〜に向けて」。",
      slots: [['体に', 'your health'], ['肌に', 'your skin'], ['英語の練習に', 'my English'], ['あなたに', 'you'], ['寒い日に', 'cold days']] },
    { id: 'reminds-of', chunk: 'reminds me of', group: 'お礼・効果', pre: 'That reminds me of', post: '.', head: '思い出すね', prep: 'of',
      note: 'remind 人 of ～＝「人に〜を思い出させる」。That reminds me of ～.（それで〜を思い出す）',
      slots: [['あの日を', 'that day'], ['ドイツを', 'Germany'], ['子どものころを', 'my childhood'], ['地元を', 'my hometown'], ['昔の友だちを', 'an old friend']] }
  ];

  var PREPS = {
    to:    { icon: '➡️', name: '矢印', image: 'その先へ向かう（〜へ・〜に）' },
    for:   { icon: '🔦', name: 'スポットライト', image: '〜に向けて光を当てる（〜のために・〜にとって）' },
    with:  { icon: '🤝', name: '隣り合う', image: 'いっしょにある・そばにある（〜と・〜で）' },
    on:    { icon: '📌', name: '接触', image: 'くっついている（〜の上に・〜について）' },
    at:    { icon: '📍', name: '一点', image: 'その一点で（〜で・〜に）' },
    in:    { icon: '📦', name: '中', image: '中に入っている（〜の中で・〜に）' },
    about: { icon: '🌀', name: 'まわり', image: '〜のまわり・あれこれ（〜について）' },
    of:    { icon: '🧩', name: 'つながり', image: '〜から出てくる・〜の一部（〜の）' }
  };

  function frame(p) { return (p.pre ? p.pre + ' ' : '') + '［　　］' + p.post; }
  function sentence(p, en) {
    var s = (p.pre ? p.pre + ' ' : '') + en + p.post;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  // クイズ：完成文の中の前置詞（型の中の最初の1つ）を空欄にする
  function quizItems(ids) {
    var out = [];
    PATTERNS.forEach(function (p) {
      if (!p.prep || (ids && ids.indexOf(p.id) < 0)) return;
      p.slots.forEach(function (sl) {
        var full = sentence(p, sl[1]);
        var re = new RegExp('\\b' + p.prep + '\\b');
        var head = full.slice(0, p.pre.length), tail = full.slice(full.length - p.post.length), blank;
        if (p.pre && re.test(head)) blank = head.replace(re, '___') + full.slice(p.pre.length);
        else if (re.test(tail)) blank = full.slice(0, full.length - p.post.length) + tail.replace(re, '___');
        else return;
        out.push({ pid: p.id, chunk: p.chunk, full: full, blank: blank, answer: p.prep, ja: sl[0] + p.head });
      });
    });
    return out;
  }
  function byId(id) { for (var i = 0; i < PATTERNS.length; i++) if (PATTERNS[i].id === id) return PATTERNS[i]; return null; }

  window.PT = { PATTERNS: PATTERNS, PREPS: PREPS, frame: frame, sentence: sentence, quizItems: quizItems, byId: byId };
})();
