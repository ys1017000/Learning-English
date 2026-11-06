/* 心をつなぐ英語表現 - 文法ノートの内容データ。新しい文法項目は TOPICS に足していく */
(function (root) {
  'use strict';

  var TOPICS = [{
    id: 'modal-perfect',
    title: 'should\'ve / could\'ve / would\'ve / must\'ve',
    short: '過去についての後悔・推測',
    intro: '形は「助動詞 + have + 過去分詞」で、話すときは \'ve に縮まります。後悔になるのは should\'ve と could\'ve が中心。would\'ve は「もしもの想像」、must\'ve は「確信」で、基本は後悔ではありません。',
    groups: [
      {
        name: '後悔・「〜すればよかった」のグループ',
        note: '実際にはやらなかったこと（やったこと）を悔やむ表現です。',
        forms: [
          { key: "should've", kana: 'シュダヴ', label: "should've ＋ 過去分詞", ja: '〜すべきだったのに（しなかった）', nuance: '「なんでやらなかったんだろう」という、一番強い後悔。',
            ex: ['I should\'ve called you last night.', '昨日の夜、電話すればよかった。'], tone: '自分に使うと自然。相手に You should\'ve ~ と言うと、責めているように聞こえます。' },
          { key: "shouldn't have", kana: 'シュドゥントハヴ', label: "shouldn't have ＋ 過去分詞", ja: '〜しなければよかった（してしまった）', nuance: 'やってしまったことへの後悔。',
            ex: ['I shouldn\'t have said that.', 'あんなこと、言わなければよかった。'], tone: '謝るときにも使えます。I shouldn\'t have said that. I\'m sorry.' },
          { key: "could've", kana: 'クダヴ', label: "could've ＋ 過去分詞", ja: '〜できたのに（しなかった）', nuance: '「やろうと思えばできたのに」という、できたこと・選べたことへの後悔。',
            ex: ['I could\'ve helped you. I had time.', '手伝えたのに。時間はあったんだ。'], tone: '「〜だった可能性もある（推測）」の意味にもなります。' }
        ]
      },
      {
        name: '想像・確信のグループ',
        note: '基本は、後悔の意味ではありません。',
        forms: [
          { key: "would've", kana: 'ウダヴ', label: "would've ＋ 過去分詞", ja: '（もしあのとき〜だったら）〜しただろう', nuance: '「もしもの世界」の想像。if の文とセットで使うことが多い。',
            ex: ['I would\'ve gone if I had known.', '知っていたら行ったのに。'], tone: '例外：I would\'ve loved to come.（行きたかったな）のように、残念な気持ちも表せます。' },
          { key: "must've", kana: 'マスタヴ', label: "must've ＋ 過去分詞", ja: '〜したに違いない', nuance: '過去の事実についての、強い推理。',
            ex: ['I must\'ve left it at home.', '家に忘れてきたに違いない。'], tone: '後悔ではなく「たぶん確実にそう」という確信です。' }
        ]
      }
    ],
    compare: {
      lead: '例：昨日、勉強しなかった人に',
      rows: [
        ['You should\'ve studied.', '勉強すべきだったのに！（後悔・お説教）'],
        ['You could\'ve studied.', '勉強できたのに。（もったいない）'],
        ['I would\'ve studied if I had had time.', '時間があったら勉強しただろうな。（想像）'],
        ['You must\'ve studied.', '絶対勉強したでしょ！（確信。テストが満点だったときなど）']
      ]
    },
    cautions: [
      '「後悔は should\'ve と could\'ve の2つだけ」と覚えるのは言い過ぎです。shouldn\'t have（〜しなければよかった）、I wish I had ~、I would\'ve loved to ~（〜したかった）も、後悔・残念を表します。',
      'should\'ve は「もう〜したはず」（They should\'ve arrived by now.）の意味にもなります。',
      '相手に You should\'ve told me. と言うと、責める響きになります。やわらかくするなら、I wish I had known.（知っていたらよかった）や、Next time, just let me know.（次は教えてね）が安全です。',
      '話すときは、should\'ve を「シュダヴ」のように弱く言います。should of と書く間違いがよくありますが、正しくは should have です。'
    ],
    // 判定クイズ：situation = 状況、sentence = 空欄つき英文（___）、options = 選択肢、answer = 正解、full = 完成した英文（表現集と同じもの）
    quiz: [
      { situation: '昨日の夜、電話しなかったことを後悔している。', sentence: 'I ___ called you last night.', options: ["should've", "could've", "would've", "must've"], answer: "should've", full: "I should've called you last night.", why: '「電話すべきだったのに（しなかった）」という後悔。' },
      { situation: '時間はあったから、手伝おうと思えば手伝えたのに。（もったいない）', sentence: 'I ___ helped you. I had time.', options: ["should've", "could've", "would've", "must've"], answer: "could've", full: "I could've helped you. I had time.", why: '「できたのに（しなかった）」。できたこと・選べたことへの後悔は could\'ve。' },
      { situation: 'もし知っていたら、行っただろうな。（もしもの想像）', sentence: 'I ___ gone if I had known.', options: ["should've", "could've", "would've", "must've"], answer: "would've", full: "I would've gone if I had known.", why: 'if の文とセットで、「もしそうなら〜しただろう」という想像は would\'ve。' },
      { situation: '鍵がない！ 家に忘れてきたに違いない。', sentence: 'I ___ left it at home.', options: ["should've", "could've", "would've", "must've"], answer: "must've", full: "I must've left it at home.", why: '過去の事実についての強い推理（〜したに違いない）は must\'ve。' },
      { situation: 'あんなこと、言わなければよかった。', sentence: 'I ___ said that.', options: ["shouldn't have", "should've", "could've", "must've"], answer: "shouldn't have", full: "I shouldn't have said that.", why: '「してしまったこと」への後悔は shouldn\'t have。' },
      { situation: '彼、顔が真っ青。昨日、飲みすぎたに違いない。', sentence: 'He ___ had too much to drink last night.', options: ["should've", "must've", "would've", "shouldn't have"], answer: "must've", full: "He must've had too much to drink last night.", why: '見た様子から「きっとそうだ」と推理しているので must\'ve。' },
      { situation: '彼、まだ来ないね。渋滞にはまっていた可能性もあるかも。', sentence: 'He ___ been stuck in traffic.', options: ["could've", "should've", "would've", "shouldn't have"], answer: "could've", full: "He could've been stuck in traffic.", why: 'could\'ve には「〜だった可能性もある」という推測の意味もあります。確信なら must\'ve。' },
      { situation: '行きたかったけど、仕事で行けなかった。（残念）', sentence: 'I ___ loved to come, but I had to work.', options: ["would've", "should've", "must've", "shouldn't have"], answer: "would've", full: "I would've loved to come.", why: 'I would\'ve loved to ~ は「〜したかったのに」という残念な気持ち。would\'ve でも、この形は後悔・残念を表せます。' },
      { situation: 'もっと早く言えばよかった。（自分への後悔）', sentence: 'I ___ told you earlier.', options: ["should've", "could've", "must've", "would've"], answer: "should've", full: "I should've told you earlier.", why: '「すべきだったのに」という、自分への後悔。' },
      { situation: '「言ってくれたら迎えに行けたのに」と、責めずにやさしく伝えたい。', sentence: 'I ___ picked you up if you had told me.', options: ["could've", "should've", "must've", "shouldn't have"], answer: "could've", full: "I could've picked you up if you had told me.", why: 'できたことを伝える could\'ve は、責める言い方になりにくい。You should\'ve told me. は責めている響きです。' },
      { situation: '彼女、すごく喜んでたね。プレゼント、気に入ったに違いない。', sentence: 'She ___ loved the gift.', options: ["must've", "should've", "could've", "shouldn't have"], answer: "must've", full: "She must've loved the gift.", why: '様子から確信している（〜したに違いない）ので must\'ve。' },
      { situation: '雨が降っていなければ、試合は始まっていただろう。', sentence: 'If it hadn\'t rained, the game ___ started.', options: ["would've", "must've", "should've", "shouldn't have"], answer: "would've", full: "If it hadn't rained, the game would've started.", why: '「もし〜なら…だっただろう」という仮定の話は would\'ve。' }
    ]
  }, {
    id: 'thought-would',
    title: 'I thought ... would be ... to ~',
    short: '思っていたのと違った（予想とのギャップ）',
    intro: '形は「I thought ＋ 主語 ＋ would be ＋ 形容詞 ＋ to 動詞」。意味は「〜は（するのが）…だろうと思っていた（実際は違った）」。thought が過去なので、そのときの予想を表す will が would になります。「最初はそう思ったけど、実際は違った（意外と簡単だった など）」というギャップを話す定番の言い方です。',
    groups: [
      {
        name: '基本の形',
        note: '「過去の時点での予測」なので will → would。後ろに but ...（でも実際は）を続けると、ギャップがはっきり伝わります。',
        forms: [
          { key: 'I thought it would be hard to ~', kana: 'アイ ソーティッ ウッビー', kanaNote: '（would be は弱く速く）', label: 'I thought ＋ it ＋ would be ＋ 形容詞 ＋ to 動詞', ja: '〜するのは難しいだろうと思っていた', nuance: 'it は「to 以下のこと」を指す仮の主語。最初の予想を話す前置きになります。',
            ex: ["I thought it would be hard to make friends here, but it was easy.", 'ここで友達を作るのは難しいと思っていたけど、簡単だった。'], tone: "話すときは I thought it'd be ...（アイソーティッドビー）と縮めることも多いです。" },
          { key: 'I thought Japanese would be hard to learn', kana: 'ウッビー ハード トゥ ラーン', kanaNote: '', label: 'I thought ＋ 物 ＋ would be ＋ 形容詞 ＋ to 動詞', ja: '〜は（するのが）難しいだろうと思っていた', nuance: '主語に物を置く形。主語の Japanese が learn の目的語になっています。',
            ex: ['I thought Japanese would be hard to learn.', '日本語は覚えるのが難しいと思ってた。'], tone: 'to のあとに it を重ねない：hard to learn it は ×。' }
        ]
      },
      {
        name: '形容詞を変える・否定にする',
        note: 'hard 以外の形容詞でもよく使います。予想が「いい方」に外れた話にも、「悪い方」に外れた話にも使えます。',
        forms: [
          { key: 'would be easy / fun / scary', kana: '', kanaNote: '', label: 'I thought it would be ＋ easy / fun / scary / boring ...', ja: '〜だろうと思っていた', nuance: 'easy＝簡単だろう、fun＝楽しいだろう、scary＝怖いだろう、boring＝つまらないだろう。',
            ex: ['I thought it would be scary, but it was really fun.', '怖いと思ってたけど、すごく楽しかった。'], tone: '予想どおりだったときは It was as hard as I thought.（思ったとおり難しかった）。' },
          { key: "I didn't think ... would", kana: 'アイ ディドゥン シンク', kanaNote: '', label: "I didn't think ＋ 主語 ＋ would ＋ 動詞", ja: '〜とは思わなかった', nuance: '否定の予想。「まさか〜とは」といううれしい驚きによく使います。',
            ex: ["I didn't think you would remember my birthday.", '誕生日を覚えててくれるなんて思わなかった。'], tone: "I thought you wouldn't ... より、I didn't think you would ... の方が自然です。" }
        ]
      }
    ],
    compare: {
      lead: '例：「難しい」の予想と感想',
      rows: [
        ['I think it will be hard.', '難しいだろうと思う。（今の予想）'],
        ['I thought it would be hard.', '難しいだろうと思っていた。（前の予想。実際は違ったかも）'],
        ['I thought it was hard.', '難しいと思った。（実際にやってみた感想）'],
        ['It was harder than I thought.', '思ったより難しかった。（予想より悪い方に外れた）'],
        ['It was easier than I thought.', '思ったより簡単だった。（予想よりいい方に外れた）']
      ]
    },
    cautions: [
      'thought のあとは時制をそろえて would にします。I thought it will be hard. は、話し言葉で聞くこともありますが、覚えるのは would の形で。',
      'to のあとに目的語を重ねない：German was hard to learn it.（×）→ German was hard to learn.（○）',
      'scary（物事が怖い）と scared（人が怖がっている）のように、-y / -ful と -ed の形容詞を混ぜないように。I thought it would be stressful.（○）／ I thought it would be stressed.（×）',
      'ギャップを伝えたいときは、but it was easy / but it wasn\'t that bad（そんなに悪くなかった）などを続けます。'
    ],
    quiz: [
      { situation: '日本の生活に慣れるのは大変だと思っていたけど、すぐ慣れた。', sentence: 'I thought it ___ hard to get used to life in Japan.', options: ['would be', 'will be', 'is', 'has been'], answer: 'would be', full: 'I thought it would be hard to get used to life in Japan.', why: 'thought（過去）に合わせて、will be が would be になる。' },
      { situation: 'ドイツ語は覚えるのが難しいと思ってた。', sentence: 'I thought German would be hard to ___.', options: ['learn', 'learn it', 'learning', 'learned'], answer: 'learn', full: 'I thought German would be hard to learn.', why: '主語の German が learn の目的語なので、it を付けない。' },
      { situation: '怖いと思ってたけど、すごく楽しかった！', sentence: 'I thought it would be ___, but it was really fun.', options: ['scary', 'scared', 'fun', 'funny'], answer: 'scary', full: 'I thought it would be scary, but it was really fun.', why: '物事が「怖い」は scary。scared は「（人が）怖がっている」。fun だと but 以下とギャップにならない。' },
      { situation: '英語で話すのは緊張すると思ってたけど、あなたとだと平気。', sentence: "I thought it would be ___ to talk in English, but I'm fine with you.", options: ['stressful', 'stressed', 'stress', 'stressing'], answer: 'stressful', full: "I thought it would be stressful to talk in English, but I'm fine with you.", why: '物事が「ストレスになる」は stressful。stressed は「（人が）ストレスを感じている」。' },
      { situation: '話しにくい話題だと思っていたけど、話せてよかった。', sentence: "I thought it would be hard to talk ___, but I'm glad we did.", options: ['about', 'about it', 'it', 'for'], answer: 'about', full: "I thought it would be hard to talk about, but I'm glad we did.", why: '主語の it（その話題）が talk about の目的語なので、about のあとに it を重ねない。' },
      { situation: 'こんなに楽しいとは思わなかった。（うれしい驚き）', sentence: "I didn't think it ___ be this fun.", options: ['would', 'will', 'was', 'is'], answer: 'would', full: "I didn't think it would be this fun.", why: '過去の否定の予想は I didn\'t think ... would。this fun＝こんなに楽しい。' },
      { situation: 'あなたが誕生日を覚えてるなんて思わなかった。', sentence: "I didn't think you ___ remember my birthday.", options: ['would', 'will', 'did', 'are'], answer: 'would', full: "I didn't think you would remember my birthday.", why: 'thought / didn\'t think の後ろは、will ではなく would。' },
      { situation: '思ったより簡単だった。', sentence: 'It was ___ than I thought.', options: ['easier', 'easy', 'more easy', 'easiest'], answer: 'easier', full: 'It was easier than I thought.', why: '比較級 ＋ than I thought で「思ったより〜」。easy の比較級は easier。' }
    ]
  }];

  var GR = { TOPICS: TOPICS };
  if (typeof module !== 'undefined' && module.exports) module.exports = GR; else root.GR = GR;
})(typeof window !== 'undefined' ? window : this);
