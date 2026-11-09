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
  }, {
    id: 'comparative',
    title: '比較級：-er / more ～ than',
    short: '比べる（比較級）',
    intro: '2つを比べて「〜より…」と言う形です。短い形容詞は -er、長い形容詞は more を前に付け、than のあとに比べる相手を置きます。会話では「〜の方が好き」「前より」「思ったより」の話でよく使います。',
    groups: [
      {
        name: '形の作り方',
        note: '形容詞の長さで形が変わります。迷ったら「短い語（cheap, big, easy）は -er、長い語（expensive, interesting）は more」。',
        forms: [
          { key: '-er than', kana: 'チーパー ザン', kanaNote: '（than は弱く「ザン」）', label: '短い形容詞 ＋ -er ＋ than ～', ja: '～より…だ', nuance: 'cheap → cheaper、easy → easier（y は i にして -er）、big → bigger（最後の文字を重ねる）。',
            ex: ['This place is cheaper than the one near the station.', 'ここ、駅の近くの店より安いね。'], tone: 'hot → hotter、nice → nicer（e で終わる語は -r だけ）。' },
          { key: 'more ～ than', kana: 'モア … ザン', kanaNote: '', label: '長い形容詞 ＋ more ＋ than ～', ja: '～より…だ', nuance: 'expensive, interesting, beautiful, difficult など長い語は、前に more を付けます。',
            ex: ['This restaurant is more expensive than I expected.', 'このレストラン、思ってたより高い。'], tone: 'more と -er を重ねない：more cheaper は ×。' },
          { key: 'better / worse', kana: 'ベター / ワース', kanaNote: '', label: '形が変わる語：good → better、bad → worse', ja: 'もっと良い／もっと悪い', nuance: '体調・天気・気分・英語の上達の話でよく使います。',
            ex: ['I feel much better today.', '今日はだいぶ良くなった。'], tone: 'gooder / more good は ×。many / much → more、far → farther も形が変わります。' }
        ]
      },
      {
        name: '会話でよく使う形',
        note: '「好み」「変化」「思ったより」の話で、毎日のように使います。',
        forms: [
          { key: 'I like A better than B', kana: '', kanaNote: '', label: 'I like A better than B.', ja: 'BよりAの方が好き', nuance: '好みを比べる定番。I like A more than B. でもOK。',
            ex: ['I like summer better than winter.', '冬より夏の方が好き。'], tone: 'Which do you like better, A or B?（AとB、どっちが好き？）で聞けます。' },
          { key: 'much ＋ 比較級', kana: '', kanaNote: '', label: 'much / a lot / a little ＋ 比較級', ja: 'ずっと～／少し～', nuance: '差の大きさを付け足します。',
            ex: ['Your English is much better than my German.', 'あなたの英語は、私のドイツ語よりずっと上手。'], tone: 'very better は ×。much better / a lot better / a little better。' },
          { key: '～er and ～er', kana: '', kanaNote: '', label: '比較級 and 比較級', ja: 'だんだん～', nuance: '変化していく様子を言います。',
            ex: ["It's getting colder and colder.", 'だんだん寒くなってきたね。'], tone: '長い語は more and more interesting（だんだん面白く）。' },
          { key: '～er than I thought', kana: '', kanaNote: '', label: '比較級 ＋ than I thought / than I expected', ja: '思ったより～', nuance: '予想とのギャップ。文法ノート「I thought ... would be」とセットで覚えると便利です。',
            ex: ['It was easier than I thought.', '思ったより簡単だった。'], tone: '悪い方に外れたなら harder / more difficult than I thought。' }
        ]
      }
    ],
    compare: {
      lead: '例：2つのカフェを比べる',
      rows: [
        ['This cafe is nice.', 'このカフェ、いいね。（比べていない）'],
        ['This cafe is nicer than that one.', 'このカフェの方が、あっちよりいい。（2つを比べる）'],
        ['This cafe is the nicest in this area.', 'このカフェがこの辺で一番いい。（最上級：3つ以上の中で一番）'],
        ['This cafe is as nice as that one.', 'このカフェは、あっちと同じくらいいい。（同じくらい）'],
        ["This cafe isn't as nice as that one.", 'このカフェは、あっちほど良くない。（やわらかく「劣る」）']
      ]
    },
    cautions: [
      'more と -er を重ねない：more easier（×）→ easier（○）。',
      '比較級を強めるのは much / a lot / far。very better は ×。',
      'than のあとの「私」は、会話では than me が普通です（She is taller than me.）。',
      'not as ～ as（〜ほどじゃない）は、相手の物や好きな物を比べるときに角が立ちにくい言い方です。'
    ],
    quiz: [
      { situation: '駅前の店より、ここの方が安い。', sentence: 'This place is ___ than the one near the station.', options: ['cheaper', 'more cheap', 'cheapest', 'more cheaper'], answer: 'cheaper', full: 'This place is cheaper than the one near the station.', why: '短い形容詞 cheap は -er。more と -er は重ねない。' },
      { situation: 'このレストラン、思ってたより高い。', sentence: 'This restaurant is ___ than I expected.', options: ['more expensive', 'expensiver', 'most expensive', 'expensive'], answer: 'more expensive', full: 'This restaurant is more expensive than I expected.', why: '長い形容詞 expensive は more ～。' },
      { situation: '昨日は熱があったけど、今日はだいぶ良くなった。', sentence: 'I feel much ___ today.', options: ['better', 'gooder', 'more good', 'best'], answer: 'better', full: 'I feel much better today.', why: 'good / well の比較級は better。' },
      { situation: '冬より夏の方が好き。', sentence: 'I like summer ___ than winter.', options: ['better', 'good', 'best', 'well'], answer: 'better', full: 'I like summer better than winter.', why: '好みを比べるときは like A better than B。' },
      { situation: 'あなたの英語は、私のドイツ語よりずっと上手。', sentence: 'Your English is ___ better than my German.', options: ['much', 'very', 'more', 'so'], answer: 'much', full: 'Your English is much better than my German.', why: '比較級を強めるのは much / a lot。very better とは言わない。' },
      { situation: 'だんだん寒くなってきたね。', sentence: "It's getting ___ and colder.", options: ['colder', 'cold', 'more cold', 'coldest'], answer: 'colder', full: "It's getting colder and colder.", why: '比較級 and 比較級 で「だんだん〜」。' },
      { situation: 'ここからの景色の方が、お寺からの景色より綺麗。', sentence: 'The view here is ___ than the one at the temple.', options: ['more beautiful', 'beautifuler', 'most beautiful', 'beautiful'], answer: 'more beautiful', full: 'The view here is more beautiful than the one at the temple.', why: 'beautiful は長い語なので more ～。' },
      { situation: 'このカフェは、あっちほど混んでない。', sentence: "This cafe isn't ___ crowded as that one.", options: ['as', 'more', 'so much', 'than'], answer: 'as', full: "This cafe isn't as crowded as that one.", why: 'not as ～ as で「〜ほど…ではない」。' }
    ]
  }, {
    id: 'frequency',
    title: '頻度：always / usually / often / sometimes / never',
    short: 'どのくらいの頻度？',
    intro: '「どのくらいの頻度でするか」を言う副詞と、回数を言う言い方（twice a week など）です。副詞を置く場所は「一般動詞の前・be動詞のあと」が基本。お互いの習慣や生活を話すときに欠かせません。',
    groups: [
      {
        name: '頻度の副詞（だいたいの割合）',
        note: '上から順に「よくする → しない」。％はだいたいの目安です。',
        forms: [
          { key: 'always', kana: 'オールウェイズ', kanaNote: '', label: 'always（ほぼ100%）', ja: 'いつも', nuance: '例外がほとんどないこと。',
            ex: ['I always drink coffee in the morning.', '朝はいつもコーヒーを飲む。'], tone: '相手に You always ～. と言うと「いつも〜するよね」と責めて聞こえることがあります。' },
          { key: 'usually', kana: 'ユージュアリー', kanaNote: '', label: 'usually（約80%）', ja: 'たいてい・ふだんは', nuance: '自分の習慣を話すときに一番使いやすい語です。',
            ex: ['I usually cook at home on weekdays.', '平日はたいてい家で料理する。'], tone: 'normally もほぼ同じ意味で使えます。' },
          { key: 'often', kana: 'オーフン', kanaNote: '（t は読まないことが多い）', label: 'often（約60%）', ja: 'よく', nuance: '「しょっちゅう」まではいかないけど、よくすること。',
            ex: ['We often go to that cafe.', 'あのカフェにはよく行く。'], tone: 'How often ...?（どのくらいの頻度で？）の質問にも使います。' },
          { key: 'sometimes', kana: 'サムタイムズ', kanaNote: '', label: 'sometimes（約40%）', ja: 'ときどき', nuance: '文の最初や最後にも置ける、自由な語です。',
            ex: ['I sometimes watch German movies.', 'ときどきドイツの映画を見る。'], tone: 'Sometimes I feel lonely. のように文頭にも置けます。' },
          { key: 'rarely / never', kana: 'レアリー / ネヴァー', kanaNote: '', label: 'rarely（約5%） / never（0%）', ja: 'めったに〜ない／全然〜ない', nuance: 'これ自体が否定の意味。not と一緒に使いません。',
            ex: ['I rarely eat breakfast.', '朝ごはんはめったに食べない。'], tone: "I don't never ～. は ×。I never ～. だけでOK。" }
        ]
      },
      {
        name: '回数で言う・頻度を聞く',
        note: '具体的に言いたいときは回数で。文の最後に置きます。',
        forms: [
          { key: 'once / twice a week', kana: 'ワンス / トゥワイス', kanaNote: '', label: '回数 ＋ a day / a week / a month', ja: '1日／1週間／1か月に〜回', nuance: 'once＝1回、twice＝2回、3回以上は three times。',
            ex: ['I go to the gym twice a week.', '週に2回ジムに行く。'], tone: 'every day（毎日）、every other day（1日おき）、every weekend（毎週末）も便利。' },
          { key: 'How often ...?', kana: 'ハウ オーフン', kanaNote: '', label: 'How often do you ～?', ja: 'どのくらいの頻度で〜する？', nuance: '相手の習慣を聞く質問。答えは頻度の副詞か回数で。',
            ex: ['How often do you talk to your family?', '家族とはどのくらいの頻度で話す？'], tone: 'How many times ...? は「何回？」と回数そのものを聞く言い方。' }
        ]
      },
      {
        name: '会話でよく聞くその他の言い方',
        note: '基本の6つに加えて、話し言葉でよく出てくるものです。意味が近い語どうしでまとめました。',
        forms: [
          { key: 'hardly ever', kana: 'ハードリー エヴァー', kanaNote: '', label: 'hardly ever（めったに〜ない・rarely とほぼ同じ）', ja: 'めったに〜ない', nuance: '会話では rarely より自然でよく使われます。置く場所は一般動詞の前。',
            ex: ['I hardly ever eat out.', '外食はほとんどしない。'], tone: 'hardly never は ×。hardly ever か never のどちらかに。' },
          { key: 'all the time', kana: 'オール ザ タイム', kanaNote: '', label: 'all the time（しょっちゅう）／ most of the time（たいてい）', ja: 'しょっちゅう／たいてい', nuance: '文の最後に置きます。all the time は always より口語的、most of the time は usually の言い換え。',
            ex: ['We text each other all the time.', 'しょっちゅうメッセージを送り合ってるね。'], tone: '相手の行動に all the time を使うと、always と同じく文句に聞こえることがあります。' },
          { key: 'once in a while', kana: 'ワンス イン ナ ワイル', kanaNote: '', label: 'once in a while / every now and then（たまに）', ja: 'たまに', nuance: 'sometimes より少なめの頻度。文の最後に置くことが多いです。',
            ex: ['I go to the movies alone once in a while.', 'たまに、一人で映画を見に行く。'], tone: 'occasionally も同じ意味ですが、少しかたい言い方。seldom（めったに〜ない）は会話ではあまり使いません。' },
          { key: 'barely（頻度ではなく程度）', kana: 'ベアリー', kanaNote: '', label: 'barely ＋ 動詞（量が少ない・ぎりぎり）', ja: 'ほとんど〜ない／かろうじて・ぎりぎり', nuance: '回数ではなく「量・程度」が少ないことを言います。寝た時間、聞こえた量、間に合ったかどうか、など。',
            ex: ['I barely slept last night.', '昨日はほとんど寝てない。'], tone: 'I barely made it.（ぎりぎり間に合った）、I could barely hear you.（ほとんど聞こえなかった）。回数が少ないなら hardly ever / rarely。' }
        ]
      }
    ],
    compare: {
      lead: '例：「カフェに行く」頻度',
      rows: [
        ['I always go to cafes on weekends.', '週末はいつもカフェに行く。（ほぼ毎回）'],
        ['I usually go to cafes on weekends.', '週末はたいていカフェに行く。'],
        ['I often go to cafes.', 'カフェにはよく行く。'],
        ['I sometimes go to cafes.', 'ときどきカフェに行く。'],
        ['I rarely go to cafes.', 'カフェにはめったに行かない。'],
        ['I never go to cafes.', 'カフェには全然行かない。']
      ]
    },
    cautions: [
      "置く場所：一般動詞の前（I usually cook.）、be動詞のあと（I'm usually busy.）、助動詞のあと（I can always help.）。",
      'never / rarely は否定の意味なので、not を付けない。',
      'every のあとは単数：every weekend（○）、every weekends（×）。',
      'barely / hardly ever / rarely / never は、どれも否定の意味を含むので not を付けない：I don\'t barely sleep.（×）',
      'barely は「量・程度が少ない」、hardly ever / rarely は「回数が少ない」。I barely slept.（寝た時間がほとんどない）と I hardly ever sleep in.（寝坊はめったにしない）は別の意味。',
      "always を相手の行動に使うと文句に聞こえやすい（You're always late.）。気持ちを伝えるなら sometimes や I feel like ～ でやわらげます。"
    ],
    quiz: [
      { situation: '平日はたいてい家で料理する。', sentence: 'I ___ cook at home on weekdays.', options: ['usually', 'never', 'rarely', 'once'], answer: 'usually', full: 'I usually cook at home on weekdays.', why: '「たいてい（約80%）」は usually。一般動詞 cook の前に置く。' },
      { situation: '朝ごはんはめったに食べない。', sentence: 'I ___ eat breakfast.', options: ['rarely', 'often', 'always', "don't rarely"], answer: 'rarely', full: 'I rarely eat breakfast.', why: 'rarely 自体が「めったに〜ない」。not と一緒に使わない。' },
      { situation: '平日はたいてい忙しい。（be動詞の文）', sentence: '___ on weekdays.', options: ["I'm usually busy", 'I usually am busy', 'Usually I busy', "I'm busy usually always"], answer: "I'm usually busy", full: "I'm usually busy on weekdays.", why: 'be動詞（am）のあとに頻度の副詞を置く。' },
      { situation: '週に2回ジムに行く。', sentence: 'I go to the gym ___ a week.', options: ['twice', 'two', 'two time', 'second'], answer: 'twice', full: 'I go to the gym twice a week.', why: '2回は twice。3回以上は three times のように言う。' },
      { situation: '家族とはどのくらいの頻度で話す？', sentence: 'How ___ do you talk to your family?', options: ['often', 'many', 'much', 'long'], answer: 'often', full: 'How often do you talk to your family?', why: '頻度を聞くのは How often。How long は「どのくらいの時間」。' },
      { situation: 'ときどきドイツの映画を見る。', sentence: 'I ___ watch German movies.', options: ['sometimes', 'always', 'never', 'usually not'], answer: 'sometimes', full: 'I sometimes watch German movies.', why: '「ときどき（約40%）」は sometimes。' },
      { situation: '辛いものは全然食べない。', sentence: 'I ___ eat spicy food.', options: ['never', "don't never", 'not ever', 'always'], answer: 'never', full: 'I never eat spicy food.', why: 'never だけで否定になる。don\'t never は ×。' },
      { situation: '毎週末、一緒に出かけようね。', sentence: "Let's go out together ___ weekend.", options: ['every', 'all', 'each of', 'always'], answer: 'every', full: "Let's go out together every weekend.", why: 'every ＋ 単数名詞で「毎〜」。every weekends は ×。' },
      { situation: '外食はほとんどしない。', sentence: 'I ___ eat out.', options: ['hardly ever', 'hardly never', 'barely not', 'always'], answer: 'hardly ever', full: 'I hardly ever eat out.', why: 'hardly ever＝めったに〜ない（会話でよく使う）。hardly never は ×。' },
      { situation: '昨日はほとんど寝てない。', sentence: 'I ___ slept last night.', options: ['barely', 'rarely', 'hardly ever', 'sometimes'], answer: 'barely', full: 'I barely slept last night.', why: '寝た「量」が少ないので barely。rarely / hardly ever は「回数」が少ないときに使う。' },
      { situation: 'ぎりぎり電車に間に合った。', sentence: 'I ___ made the train.', options: ['barely', 'hardly ever', 'rarely', 'never'], answer: 'barely', full: 'I barely made the train.', why: 'barely には「かろうじて・ぎりぎり（〜できた）」の意味もある。' },
      { situation: 'しょっちゅうメッセージを送り合ってるね。', sentence: 'We text each other ___.', options: ['all the time', 'always time', 'every times', 'all times'], answer: 'all the time', full: 'We text each other all the time.', why: 'all the time を文の最後に置いて「しょっちゅう」。' },
      { situation: 'たまに、一人で映画を見に行く。', sentence: 'I go to the movies alone ___.', options: ['once in a while', 'once a while', 'one time while', 'in once a while'], answer: 'once in a while', full: 'I go to the movies alone once in a while.', why: 'once in a while＝たまに（sometimes より少なめ）。' }
    ]
  }, {
    id: 'present-perfect',
    title: '現在完了：have / has ＋ 過去分詞',
    short: '今につながる過去（現在完了）',
    intro: 'have / has ＋ 過去分詞で、「過去のことが今につながっている」ことを表します。使い方は大きく3つ：経験（〜したことがある）、完了（もう〜した）、継続（ずっと〜している）。話すときは I\'ve / she\'s と縮めます。',
    groups: [
      {
        name: '3つの使い方',
        note: '同じ形でも、一緒に使う言葉（ever / never、already / just / yet、for / since）で意味が分かります。',
        forms: [
          { key: '経験：〜したことがある', kana: 'アイヴ ビーン', kanaNote: '（I have は I\'ve と縮める）', label: 'have ＋ 過去分詞（＋ never / ever / before / 回数）', ja: '〜したことがある', nuance: '今までの人生での経験。Have you ever ～? で経験を聞きます。',
            ex: ["I've never been to Germany.", 'ドイツには行ったことがない。'], tone: '「行ったことがある」は have been to。have gone to は「行ってしまって今ここにいない」の意味。' },
          { key: '完了：もう〜した', kana: 'オールレディ / ジャスト / イェット', kanaNote: '', label: 'have ＋ already / just ＋ 過去分詞、haven\'t ＋ 過去分詞 ＋ yet', ja: 'もう〜した／ちょうど〜した／まだ〜していない', nuance: '「やり終えて、今その状態にある」こと。',
            ex: ["I've just finished work.", 'ちょうど仕事が終わったところ。'], tone: 'yet は否定文・疑問文の最後に：Have you eaten yet?（もう食べた？）／ I haven\'t eaten yet.（まだ食べてない）' },
          { key: '継続：ずっと〜している', kana: 'フォー / シンス', kanaNote: '', label: 'have ＋ 過去分詞 ＋ for 期間 / since 起点', ja: 'ずっと〜している', nuance: '過去から今まで続いている状態。',
            ex: ["I've lived in Tokyo for five years.", '東京に5年住んでいる。'], tone: 'for＝期間（for two years）、since＝始まった時点（since 2020 / since I was a child）。' }
        ]
      },
      {
        name: '会話でよく使う形',
        note: '相手のことを聞く質問や、最近の様子を話すときに毎日のように使います。',
        forms: [
          { key: 'Have you ever ～?', kana: 'ハヴュー エヴァー', kanaNote: '', label: 'Have you ever ＋ 過去分詞?', ja: '〜したことある？', nuance: '話題を広げる定番の質問。',
            ex: ['Have you ever tried natto?', '納豆、食べたことある？'], tone: "答えは Yes, I have. / No, I haven't. / No, never." },
          { key: 'How long have you ～?', kana: '', kanaNote: '', label: 'How long have you ＋ 過去分詞?', ja: 'どのくらい〜している？', nuance: '続いている期間を聞きます。',
            ex: ['How long have you lived in Japan?', '日本に住んでどのくらい？'], tone: '答えは For two years.（2年）/ Since last April.（去年の4月から）' },
          { key: 'have been ～ing', kana: '', kanaNote: '', label: 'have been ＋ ～ing（現在完了進行形）', ja: 'ずっと〜している（動作）', nuance: '動作がずっと続いていること。最近の忙しさや気持ちを話すときに。',
            ex: ["I've been studying English for five years.", '英語を5年間勉強している。'], tone: "I've been busy.（最近忙しい）、I've been thinking about you.（ずっとあなたのことを考えてた）も定番。" }
        ]
      }
    ],
    compare: {
      lead: '例：「ドイツに行く」',
      rows: [
        ['I went to Germany last year.', '去年ドイツに行った。（過去：いつのことかを言う）'],
        ["I've been to Germany.", 'ドイツに行ったことがある。（経験）'],
        ["I've been to Germany twice.", 'ドイツに2回行ったことがある。（経験の回数）'],
        ['She has gone to Germany.', '彼女はドイツに行ってしまった。（今ここにいない）'],
        ["I've lived in Germany for a year.", 'ドイツに1年住んでいる。（今も住んでいる）']
      ]
    },
    cautions: [
      '過去の時点を表す言葉（yesterday / last week / in 2020 / ～ ago）と現在完了は一緒に使わない：I have seen it yesterday.（×）→ I saw it yesterday.（○）',
      'When ～? の質問にも使わない：When have you come to Japan?（×）→ When did you come to Japan?（○）',
      '「行ったことがある」は have been to。have gone to は「行ってしまった（今いない）」。',
      'アメリカ英語では Did you eat yet? のように過去形で言うことも多いので、相手が過去形で言っても迷わなくて大丈夫です。'
    ],
    quiz: [
      { situation: 'ドイツには行ったことがない。', sentence: "I've never ___ to Germany.", options: ['been', 'gone', 'went', 'go'], answer: 'been', full: "I've never been to Germany.", why: '「行ったことがある／ない」は have been to。gone だと「行ってしまった」。' },
      { situation: 'ちょうど仕事が終わったところ。', sentence: "I've just ___ work.", options: ['finished', 'finish', 'finishing', 'been finish'], answer: 'finished', full: "I've just finished work.", why: 'have ＋ just ＋ 過去分詞で「ちょうど〜したところ」。' },
      { situation: '納豆、食べたことある？', sentence: 'Have you ever ___ natto?', options: ['tried', 'try', 'trying', 'tries'], answer: 'tried', full: 'Have you ever tried natto?', why: '経験を聞くのは Have you ever ＋ 過去分詞?' },
      { situation: '東京に5年住んでいる。', sentence: "I've lived in Tokyo ___ five years.", options: ['for', 'since', 'from', 'during'], answer: 'for', full: "I've lived in Tokyo for five years.", why: '期間（five years）の前は for。' },
      { situation: '彼女は去年の4月から日本に住んでいる。', sentence: 'She has lived in Japan ___ last April.', options: ['since', 'for', 'from', 'ago'], answer: 'since', full: 'She has lived in Japan since last April.', why: '始まった時点（last April）の前は since。' },
      { situation: 'その映画、昨日見たよ。', sentence: 'I ___ the movie yesterday.', options: ['saw', 'have seen', 'had seen', 'have saw'], answer: 'saw', full: 'I saw the movie yesterday.', why: 'yesterday のように過去の時点がはっきりしているときは、現在完了ではなく過去形。' },
      { situation: 'まだ夕ごはん食べてない。', sentence: "I haven't had dinner ___.", options: ['yet', 'already', 'just', 'since'], answer: 'yet', full: "I haven't had dinner yet.", why: '否定文の「まだ」は文の最後に yet。' },
      { situation: '最近ずっとあなたのことを考えてた。', sentence: "I've been ___ about you a lot lately.", options: ['thinking', 'think', 'thought', 'thinks'], answer: 'thinking', full: "I've been thinking about you a lot lately.", why: 'have been ＋ ～ing で「ずっと〜している（動作）」。' }
    ]
  }, {
    id: 'past-perfect',
    title: '過去完了：had ＋ 過去分詞',
    short: '過去よりさらに前（過去完了）',
    intro: 'had ＋ 過去分詞で、「過去のある時点より、さらに前に起きていたこと」を表します。2つの過去の出来事の順番をはっきりさせたいときに使います。話すときは I\'d / she\'d と縮めます。',
    groups: [
      {
        name: '基本の使い方',
        note: 'まず「基準になる過去」（駅に着いた、日本に来た、など）があって、それより前のことを had ＋ 過去分詞で言います。',
        forms: [
          { key: 'もう〜していた', kana: 'ハッド', kanaNote: '（I had は I\'d と縮める）', label: '基準の過去（過去形）＋ had ＋ 過去分詞', ja: '（そのときには）もう〜していた', nuance: '基準の過去より前に終わっていたこと。',
            ex: ['When I got to the station, the train had already left.', '駅に着いたとき、電車はもう出てしまっていた。'], tone: '基準（got to the station）は過去形、それより前（left）は had left。' },
          { key: '〜したことがなかった', kana: '', kanaNote: '', label: 'had never ＋ 過去分詞 ＋ before ～', ja: '（そのときまで）一度も〜したことがなかった', nuance: '過去のある時点までの経験。現在完了の「経験」を過去にずらした形です。',
            ex: ['I had never eaten sushi before I came to Japan.', '日本に来るまで、お寿司を食べたことがなかった。'], tone: '日本に来る前・出会う前の話をするときによく出ます。' },
          { key: 'ずっと〜だった', kana: '', kanaNote: '', label: 'had ＋ 過去分詞 ＋ for 期間（＋ before ～）', ja: '（そのときまで）ずっと〜だった', nuance: '過去のある時点まで続いていたこと。',
            ex: ['We had known each other for a year before we started dating.', '付き合う前に、1年知り合いだった。'], tone: 'for / since は現在完了と同じように使えます。' }
        ]
      },
      {
        name: '会話でよく使う形',
        note: '過去完了は、会話ではこの3つが特によく出ます。',
        forms: [
          { key: "I'd forgotten", kana: 'アイド フォガトゥン', kanaNote: '', label: "I'd forgotten ～ / I hadn't realized ～", ja: '（言われるまで）忘れていた／気づいていなかった', nuance: '言われて初めて気づいたときの定番。',
            ex: ["Sorry, I'd forgotten about it.", 'ごめん、すっかり忘れてた。'], tone: "I hadn't realized it was so late.（こんなに遅いって気づかなかった）" },
          { key: 'If I had known', kana: '', kanaNote: '', label: "If I had ＋ 過去分詞, I would've ～", ja: 'もし〜していたら、…したのに', nuance: '過去の事実と違う「もしも」。文法ノートの would\'ve とつながります。',
            ex: ["If I had known, I would've come earlier.", '知っていたら、もっと早く来たのに。'], tone: 'I wish I had ～.（〜していればよかった）も同じ had ＋ 過去分詞。' }
        ]
      }
    ],
    compare: {
      lead: '例：「駅に着いたとき」と「電車」',
      rows: [
        ['When I got to the station, the train left.', '駅に着いたら、（そのあと）電車が出た。（順番どおり）'],
        ['When I got to the station, the train had left.', '駅に着いたとき、電車はもう出ていた。（電車が先）'],
        ['The train has left.', '電車はもう出てしまった。（今の話：現在完了）'],
        ['The train left at 9.', '電車は9時に出た。（ただの過去）']
      ]
    },
    cautions: [
      '過去完了は「基準になる過去」があるときだけ使います。基準がないなら、ふつうの過去形でOK。',
      'before / after で順番がはっきりしているときは、過去形だけでも通じます：I ate before I left.（会話ではこちらが多い）',
      "I'd は I had と I would の両方の短縮形。後ろが過去分詞なら had（I'd forgotten）、動詞の原形なら would（I'd like）。",
      '使いすぎなくて大丈夫。「忘れてた」「〜したことがなかった」「もし知っていたら」の3つを押さえれば、会話ではほぼ足ります。'
    ],
    quiz: [
      { situation: '駅に着いたとき、電車はもう出てしまっていた。', sentence: 'When I got to the station, the train ___ already left.', options: ['had', 'has', 'have', 'was'], answer: 'had', full: 'When I got to the station, the train had already left.', why: '駅に着いた（過去）より前に出ていたので had ＋ 過去分詞。' },
      { situation: '日本に来るまで、お寿司を食べたことがなかった。', sentence: 'I had never ___ sushi before I came to Japan.', options: ['eaten', 'ate', 'eat', 'eating'], answer: 'eaten', full: 'I had never eaten sushi before I came to Japan.', why: 'had のあとは過去分詞。eat の過去分詞は eaten。' },
      { situation: 'ごめん、すっかり忘れてた。', sentence: "Sorry, I'd ___ about it.", options: ['forgotten', 'forget', 'forgot', 'forgetting'], answer: 'forgotten', full: "Sorry, I'd forgotten about it.", why: "I'd ＋ 過去分詞なので I had forgotten。forget の過去分詞は forgotten。" },
      { situation: '知っていたら、もっと早く来たのに。', sentence: "If I ___ known, I would've come earlier.", options: ['had', 'have', 'would', 'did'], answer: 'had', full: "If I had known, I would've come earlier.", why: '過去の事実と違う「もしも」は If I had ＋ 過去分詞。' },
      { situation: 'こんなに遅いって気づかなかった。', sentence: '___ realized it was so late.', options: ["I hadn't", "I haven't", "I didn't have", "I wasn't"], answer: "I hadn't", full: "I hadn't realized it was so late.", why: '気づいた時点より前の「気づいていなかった」なので hadn\'t ＋ 過去分詞。' },
      { situation: '付き合う前に、1年知り合いだった。', sentence: 'We had known each other ___ a year before we started dating.', options: ['for', 'since', 'during', 'from'], answer: 'for', full: 'We had known each other for a year before we started dating.', why: '期間（a year）の前は for。' },
      { situation: '家に帰ったとき、彼女はもう寝ていた。', sentence: 'When I got home, she ___ already gone to bed.', options: ['had', 'has', 'was', 'have'], answer: 'had', full: 'When I got home, she had already gone to bed.', why: '帰った（過去）より前に寝ていたので had gone。' },
      { situation: '（今の話）電車、もう出ちゃった！次のを待とう。', sentence: "The train ___ left! Let's wait for the next one.", options: ['has', 'had', 'have', 'is'], answer: 'has', full: "The train has left! Let's wait for the next one.", why: '今の状況なので現在完了の has。基準になる過去がないので had は使わない。' }
    ]
  }, {
    id: 'hope-wish',
    title: '願う・期待する：I hope ～ / I wish ～',
    short: '「そうだといいね」（hope / wish）',
    intro: '「そうだといいね」「私もそう願ってる」のように、これからのことへの期待や願いを伝える言い方です。恋人同士のメッセージでもよく使います。ポイントは、実現しそうなことには hope、現実とは違う（無理だと分かっている）ことには wish を使うことです。',
    groups: [
      {
        name: '短い返事で使う',
        note: '相手の言葉に「そうだといいね」と返す短い言い方。会話でもメッセージでも一番よく使います。',
        forms: [
          { key: 'I hope so.', kana: 'アイ ホウプ ソウ', kanaNote: '', label: 'I hope so. / I hope so too.', ja: 'そうだといいね／私もそう願ってる', nuance: 'so は相手が言った内容を指します。相手の期待に同意するときの返事。',
            ex: ['I hope so too.', '私もそう願ってる。'], tone: '「土曜は晴れるって」→ I hope so!（そうだといいね）。気持ちを込めるなら I really hope so.' },
          { key: 'I hope not.', kana: 'アイ ホウプ ノット', kanaNote: '', label: 'I hope not.', ja: 'そうならないといいな', nuance: '悪いことが起きないでほしいときの返事。',
            ex: ['I hope not.', 'そうならないといいな。'], tone: "「明日雨かな？」→ I hope not.（降らないといいな）。I don't hope so. とは言いません。" },
          { key: 'Fingers crossed!', kana: 'フィンガーズ クロスト', kanaNote: '', label: "Fingers crossed! / Let's hope so.", ja: 'うまくいくといいね！（祈ってる）', nuance: '試験・面接・天気など、結果を待つときの軽い言い方。人差し指と中指を交差させるジェスチャーから。',
            ex: ['Fingers crossed for your presentation!', 'プレゼン、うまくいくように祈ってる！'], tone: "Let's hope so.（そうだといいね）は、二人で一緒に願う感じ。" }
        ]
      },
      {
        name: '気持ちを込めて願う',
        note: '相手のこと・二人のこれからを願う言い方です。',
        forms: [
          { key: 'I hope ＋ 文', kana: '', kanaNote: '', label: 'I hope ＋ 主語 ＋ 動詞', ja: '〜だといいな', nuance: '相手のこれからを願う形。未来のことでも現在形で言うことが多いです。',
            ex: ['I hope you feel better soon.', '早く良くなるといいな。'], tone: 'I hope you have a great day!（素敵な一日になりますように）は朝のメッセージの定番。' },
          { key: "I'm hoping ～", kana: '', kanaNote: '', label: "I'm hoping ＋ 文", ja: '〜だといいなと思ってる', nuance: '進行形にすると、今まさに期待している気持ちが、少し控えめに伝わります。',
            ex: ["I'm hoping we can meet next week.", '来週会えたらいいなと思ってる。'], tone: '会う予定を押しつけずに提案するときにも使えます。' },
          { key: 'I hope we can ～', kana: '', kanaNote: '', label: 'I hope we can ＋ 動詞', ja: '（二人で）〜できたらいいな', nuance: '二人のこれからを願う、恋人同士でよく使う形です。',
            ex: ['I hope we can go to Germany together someday.', 'いつか一緒にドイツに行けたらいいな。'], tone: 'someday（いつか）、more often（もっと頻繁に）と一緒に使うことが多いです。' }
        ]
      },
      {
        name: 'hope と wish の違い',
        note: 'どちらも「願う」ですが、実現しそうかどうかで使い分けます。',
        forms: [
          { key: 'I wish ＋ 過去形', kana: 'アイ ウィッシュ', kanaNote: '', label: 'I wish ＋ 主語 ＋ 過去形（could / were など）', ja: '（無理だけど）〜だったらいいのに', nuance: '現実とは違うことを願う形。会えない寂しさを伝えるときによく使います。',
            ex: ['I wish you were here.', 'あなたがここにいたらいいのに。'], tone: 'I wish I could see you today.（今日会えたらいいのに＝会えない）。I hope I can see you today. は「会えるといいな（会えるかも）」。' },
          { key: 'I wish you ＋ 名詞', kana: '', kanaNote: '', label: 'I wish you ＋ 名詞（good luck / the best）', ja: '〜を祈ってる', nuance: '「相手に〜がありますように」の決まり文句。この形だけは過去形にしません。',
            ex: ['I wish you the best of luck.', '幸運を祈ってるよ。'], tone: 'We wish you a merry Christmas. と同じ形です。' }
        ]
      }
    ],
    compare: {
      lead: '例：「会えたらいいな」',
      rows: [
        ['I hope I can see you this weekend.', '今週末会えるといいな。（会えるかもしれない）'],
        ["I'm hoping to see you this weekend.", '今週末会えたらいいなと思ってる。（控えめな期待）'],
        ['I wish I could see you this weekend.', '今週末会えたらいいのに。（会えないと分かっている）'],
        ['I hope so too.', '私もそう願ってる。（相手の言葉への返事）'],
        ['I hope not.', 'そうならないといいな。']
      ]
    },
    cautions: [
      "「そうならないといいな」は I hope not.。I don't hope so. とは言いません。",
      'I wish のあとは過去形（I wish I could / I wish you were）。実現しそうなことに wish を使うと「無理だと思ってる」と伝わるので注意。',
      'I hope のあとは、未来のことでも現在形でOK：I hope you have fun.（I hope you will have fun. も可）',
      "相手の言葉に I hope so. だけ返すと、少し自信がなさそうに聞こえることも。強く同意したいなら I'm sure it will.（きっとそうなるよ）。"
    ],
    quiz: [
      { situation: '「土曜は晴れるって！」と言われて「そうだといいね！」', sentence: 'I hope ___!', options: ['so', 'it', 'that', 'yes'], answer: 'so', full: 'I hope so!', why: '相手が言ったこと全体を so で受けて I hope so。' },
      { situation: '「明日、雨かな？」と聞かれて「降らないといいな」', sentence: 'I hope ___.', options: ['not', "don't", 'no', 'never'], answer: 'not', full: 'I hope not.', why: "否定の願いは I hope not。I don't hope so. とは言わない。" },
      { situation: '「来週会えたらいいね」と言われて「僕もそう願ってる」', sentence: 'I hope so ___.', options: ['too', 'also', 'either', 'again'], answer: 'too', full: 'I hope so too.', why: '「私も」は文の最後に too。either は否定文の「〜もない」。' },
      { situation: '体調の悪い相手に「早く良くなるといいな」', sentence: 'I hope you ___ better soon.', options: ['feel', 'felt', 'feeling', 'to feel'], answer: 'feel', full: 'I hope you feel better soon.', why: 'I hope のあとは、未来のことでも現在形でよい。' },
      { situation: '会えなくて寂しい。「あなたがここにいたらいいのに」', sentence: 'I wish you ___ here.', options: ['were', 'are', 'will be', 'be'], answer: 'were', full: 'I wish you were here.', why: '現実と違う願いは I wish ＋ 過去形。be動詞は were を使う。' },
      { situation: '「いつか一緒にドイツに行けたらいいな」（実現できそう）', sentence: 'I ___ we can go to Germany together someday.', options: ['hope', 'wish', 'want', 'hoped'], answer: 'hope', full: 'I hope we can go to Germany together someday.', why: '実現しそうな願いは hope。wish だと「無理だけど」に聞こえる。' },
      { situation: '「今日会えたらいいのに」（会えないと分かっている）', sentence: 'I wish I ___ see you today.', options: ['could', 'can', 'will', 'am'], answer: 'could', full: 'I wish I could see you today.', why: 'I wish のあとは過去形。can → could。' },
      { situation: '「来週会えたらいいなと思ってる」（控えめに）', sentence: "I'm ___ we can meet next week.", options: ['hoping', 'hope', 'hoped', 'wishing'], answer: 'hoping', full: "I'm hoping we can meet next week.", why: "I'm hoping で「〜だといいなと思ってる」。I'm wishing とはあまり言わない。" },
      { situation: '「プレゼン、うまくいくように祈ってる！」', sentence: '___ crossed for your presentation!', options: ['Fingers', 'Finger', 'Hands', 'Fingered'], answer: 'Fingers', full: 'Fingers crossed for your presentation!', why: '決まり文句の Fingers crossed!（指を交差させて幸運を祈る）。' }
    ]
  }, {
    id: 'get-adj',
    title: 'get ＋ 形容詞：〜になる',
    short: '「〜になる」（get ＋ 形容詞）',
    intro: 'get ＋ 形容詞で「（その状態に）なる」と、変化を表します。be ＋ 形容詞が「〜だ（状態）」なのに対して、get は「〜になる（変化）」。会話では become よりずっとよく使います。「〜になってきた」は be getting ＋ 形容詞です。',
    groups: [
      {
        name: '体・時間・天気の変化',
        note: '体調、時間、天気の変化。日常会話で一番よく出る使い方です。',
        forms: [
          { key: 'get tired / hungry / sleepy', kana: 'ゲッ タイアード', kanaNote: '（get は「ゲッ」と短く）', label: 'get ＋ tired / hungry / sleepy / sick', ja: '疲れる／お腹がすく／眠くなる／体調を崩す', nuance: '体の状態が変わること。',
            ex: ["I'm getting hungry. Let's eat something.", 'お腹すいてきた。何か食べよう。'], tone: "I'm hungry.（今お腹がすいている）と I'm getting hungry.（すいてきた）の違いに注目。" },
          { key: "It's getting late / cold / dark", kana: 'イッツ ゲティン', kanaNote: '', label: "It's getting ＋ late / cold / dark", ja: '遅く／寒く／暗くなってきた', nuance: '時間や天気の変化は It を主語にします。',
            ex: ["It's getting late. I should go home.", '遅くなってきた。そろそろ帰らなきゃ。'], tone: "デートの終わりの定番。It's getting colder and colder.（比較級の項目とつながります）" },
          { key: 'get better / worse', kana: 'ゲッ ベター', kanaNote: '', label: 'get better / get worse', ja: '良くなる／悪くなる', nuance: '体調・状況・上達。比較級と組み合わせる形です。',
            ex: ['Your English is getting better.', '英語、上手になってきてるね。'], tone: '体調の悪い相手には Get well soon!（早く良くなってね）が定番。' }
        ]
      },
      {
        name: '気持ちの変化',
        note: '気持ちが「そうなった」瞬間を言います。',
        forms: [
          { key: 'get upset / angry', kana: 'ゲッ アップセット', kanaNote: '', label: 'get upset / get angry / get mad', ja: '気を悪くする・動揺する／怒る', nuance: 'be angry は「怒っている（状態）」、get angry は「怒りだす（変化）」。',
            ex: ["Please don't get upset. I just want to talk.", '気を悪くしないでね。ただ話したいだけなの。'], tone: 'upset は「怒る」より広く、悲しい・動揺するも含みます。話し合いの前置きでよく使います。' },
          { key: 'get nervous / excited / bored', kana: '', kanaNote: '', label: 'get nervous / get excited / get bored', ja: '緊張する／ワクワクする／退屈する', nuance: 'ある出来事をきっかけに気持ちが変わること。',
            ex: ['I always get nervous before I meet your friends.', 'あなたの友達に会う前は、いつも緊張しちゃう。'], tone: 'get bored（人が退屈する）と get boring（物事がつまらなくなる）は別の意味。' },
          { key: 'get lonely / jealous', kana: '', kanaNote: '', label: 'get lonely / get jealous', ja: '寂しくなる／やきもちを焼く', nuance: '恋人同士でよく使う気持ちの変化。',
            ex: ["I get lonely when I don't hear from you.", '連絡がないと寂しくなる。'], tone: 'hear from you＝あなたから連絡がある。get ＋ 形容詞を現在形で言うと「いつもそうなる」。' }
        ]
      },
      {
        name: '決まった言い方',
        note: 'get ＋ 形容詞（過去分詞）で、ひとつの動詞のように使う決まった言い方です。',
        forms: [
          { key: 'get ready', kana: 'ゲッ レディ', kanaNote: '', label: 'get ready（準備する）', ja: '準備する・支度する', nuance: '出かける支度・心の準備。',
            ex: ["I'm getting ready. I'll be there in 10 minutes.", '今準備中。10分で行くね。'], tone: 'Get ready!（準備して）、I need to get ready for work.（仕事の支度しなきゃ）' },
          { key: 'get lost / married / used to', kana: '', kanaNote: '', label: 'get lost / get married / get used to ～', ja: '道に迷う／結婚する／〜に慣れる', nuance: '形は過去分詞ですが、get ＋ 形容詞と同じ「その状態になる」です。',
            ex: ['I got lost on my way to the cafe.', 'カフェに行く途中で道に迷った。'], tone: "get used to のあとは名詞か ～ing：I'm getting used to life in Japan.（日本の生活に慣れてきた）" }
        ]
      }
    ],
    compare: {
      lead: '例：「疲れる」',
      rows: [
        ["I'm tired.", '疲れている。（今の状態）'],
        ["I'm getting tired.", '疲れてきた。（変化している最中）'],
        ['I got tired.', '疲れた。（疲れた状態になった・過去）'],
        ['I get tired easily.', 'すぐ疲れる。（いつもの傾向）'],
        ['I became tired.', '疲れた。（意味は同じだけど、会話では get の方が自然）']
      ]
    },
    cautions: [
      'get のあとに to を入れない：get to tired（×）→ get tired（○）。get to ＋ 場所は「〜に着く」。',
      "「〜になってきた」は be getting：It's getting cold.（寒くなってきた）",
      '-ed と -ing を混ぜない：get bored（人が退屈する）／ get boring（話や物がつまらなくなる）。',
      'become でも意味は通じますが、少しかたい言い方。会話では get が普通です。'
    ],
    quiz: [
      { situation: 'お腹すいてきた。何か食べよう。', sentence: "I'm getting ___. Let's eat something.", options: ['hungry', 'hunger', 'to hungry', 'hungrily'], answer: 'hungry', full: "I'm getting hungry. Let's eat something.", why: 'get のあとは形容詞 hungry。hunger は名詞。' },
      { situation: '遅くなってきた。そろそろ帰らなきゃ。', sentence: "It's getting ___. I should go home.", options: ['late', 'lately', 'later', 'to late'], answer: 'late', full: "It's getting late. I should go home.", why: 'late＝遅い（形容詞）。lately は「最近」という意味の別の語。' },
      { situation: '英語、上手になってきてるね。', sentence: 'Your English is getting ___.', options: ['better', 'good', 'best', 'well'], answer: 'better', full: 'Your English is getting better.', why: '「上手になってきた」は get better（比較級で変化を表す）。' },
      { situation: '気を悪くしないでね。ただ話したいだけなの。', sentence: "Please don't get ___. I just want to talk.", options: ['upset', 'upsetting', 'to upset', 'upsets'], answer: 'upset', full: "Please don't get upset. I just want to talk.", why: 'get upset で「気を悪くする・動揺する」。' },
      { situation: 'あなたの友達に会う前は、いつも緊張しちゃう。', sentence: 'I always get ___ before I meet your friends.', options: ['nervous', 'nervously', 'nerve', 'nervousness'], answer: 'nervous', full: 'I always get nervous before I meet your friends.', why: 'get のあとは形容詞 nervous。nervously は副詞。' },
      { situation: '連絡がないと寂しくなる。', sentence: "I get ___ when I don't hear from you.", options: ['lonely', 'alone', 'loneliness', 'lone'], answer: 'lonely', full: "I get lonely when I don't hear from you.", why: 'lonely＝寂しい（気持ち）。alone は「一人で」という状態。' },
      { situation: '映画が長くて、途中で退屈しちゃった。', sentence: 'The movie was long, so I got ___.', options: ['bored', 'boring', 'bore', 'to bored'], answer: 'bored', full: 'The movie was long, so I got bored.', why: '人が退屈するのは bored。boring は「（映画が）つまらない」。' },
      { situation: 'カフェに行く途中で道に迷った。', sentence: 'I got ___ on my way to the cafe.', options: ['lost', 'lose', 'losing', 'to lose'], answer: 'lost', full: 'I got lost on my way to the cafe.', why: 'get lost で「道に迷う」。過去なので got lost。' },
      { situation: '日本の生活に慣れてきた。', sentence: "I'm getting ___ to life in Japan.", options: ['used', 'use', 'using', 'useful'], answer: 'used', full: "I'm getting used to life in Japan.", why: 'get used to ～ で「〜に慣れる」。' }
    ]
  }, {
    id: 'there-have-been',
    title: 'There has / have been ～',
    short: '「〜があった・続いている」（There have been）',
    intro: 'There is / are（〜がある）の現在完了形です。「（過去から今までに）〜があった」「（最近ずっと）〜が続いている」と、今につながる出来事や状態を言います。後ろの名詞が単数・数えられない名詞なら There has been、複数なら There have been。話すときは There\'s been と縮めることが多いです。',
    groups: [
      {
        name: '形の作り方',
        note: 'is → has been、are → have been。後ろの名詞で has / have が決まります。',
        forms: [
          { key: 'There has been ＋ 単数', kana: 'ゼアズ ビーン', kanaNote: '（There has は There\'s と縮める）', label: 'There has been ＋ 単数名詞／数えられない名詞', ja: '（今までに・最近）〜があった', nuance: '1つの出来事や、数えられないもの（rain, traffic, news など）。',
            ex: ["There's been a lot of rain this week.", '今週は雨が多いね。'], tone: "There's は There is と There has の両方の短縮形。後ろが been なら has。" },
          { key: 'There have been ＋ 複数', kana: 'ゼア ハヴ ビーン', kanaNote: '', label: 'There have been ＋ 複数名詞', ja: '（今までに・最近）〜がいくつもあった', nuance: '複数の出来事や物。',
            ex: ['There have been some changes at my work.', '職場でいくつか変化があったんだ。'], tone: "会話では複数でも There's been と言う人がいますが、正しい形は have。" },
          { key: 'Has there been ～?', kana: 'ハズ ゼア ビーン', kanaNote: '', label: 'Has there been ＋ 単数？／ Have there been ＋ 複数？', ja: '（今までに）〜はあった？', nuance: '疑問文は has / have を前に出します。',
            ex: ['Has there been any news?', '何か知らせはあった？'], tone: "否定は There hasn't been / There haven't been（〜はなかった）。" }
        ]
      },
      {
        name: '会話でよく使う形',
        note: '「最近」「今のところ」「今まで一度も」と一緒に使うと自然です。',
        forms: [
          { key: 'recently / lately', kana: '', kanaNote: '', label: 'There has / have been ＋ 名詞 ＋ recently / lately', ja: '最近〜が多い', nuance: '最近の様子を話すとき。',
            ex: ['There have been a lot of tourists in Kyoto lately.', '最近、京都は観光客が多いね。'], tone: 'so many（こんなにたくさん）を付けると驚きが出ます。' },
          { key: "There's been a misunderstanding", kana: '', kanaNote: '', label: "There's been a misunderstanding. / There's been a change of plans.", ja: '誤解があったみたい／予定が変わったんだ', nuance: '決まり文句。「あなたが」と人を主語にせず、状況として伝えられるやわらかい言い方です。',
            ex: ["I think there's been a misunderstanding.", '誤解があったみたい。'], tone: '責める感じが出ないので、話し合いの切り出しに便利。' },
          { key: 'There has never been', kana: '', kanaNote: '', label: 'There has / have never been ＋ 名詞', ja: '今まで一度も〜がなかった', nuance: '「一度もない」を出来事・物を主語にして言う形。',
            ex: ["There has never been a day I didn't think about you.", 'あなたのことを考えなかった日は一日もないよ。'], tone: 'ロマンチックな言い方にもなります。' }
        ]
      }
    ],
    compare: {
      lead: '例：「雨」',
      rows: [
        ['There is a lot of rain here.', 'ここは雨が多い。（今の状態・一般的に）'],
        ['There was a lot of rain yesterday.', '昨日は雨が多かった。（過去：いつかを言う）'],
        ['There has been a lot of rain this week.', '今週は（ずっと）雨が多い。（今につながる）'],
        ['There had been a lot of rain before we arrived.', '着く前に雨がたくさん降っていた。（過去完了）'],
        ['There will be a lot of rain tomorrow.', '明日は雨が多いだろう。（未来）']
      ]
    },
    cautions: [
      '後ろの名詞に合わせる：There has been a problem.（単数）／ There have been some problems.（複数）。',
      'yesterday / last week / ～ ago など過去の時点とは一緒に使わない：There was an accident yesterday.（○）／ There has been an accident yesterday.（×）',
      'this week / today / recently / so far（今のところ）は今につながる期間なので、There has been と相性がいい。',
      "There's been の 's は has。There's a ～ の 's は is。後ろが been かどうかで見分けます。"
    ],
    quiz: [
      { situation: '今週は雨が多いね。', sentence: 'There ___ been a lot of rain this week.', options: ['has', 'have', 'is', 'was'], answer: 'has', full: 'There has been a lot of rain this week.', why: 'rain は数えられない名詞なので単数扱い → has。' },
      { situation: '職場でいくつか変化があったんだ。', sentence: 'There ___ been some changes at my work.', options: ['have', 'has', 'is', 'are'], answer: 'have', full: 'There have been some changes at my work.', why: 'changes（複数）なので have。' },
      { situation: '何か知らせはあった？', sentence: '___ there been any news?', options: ['Has', 'Have', 'Is', 'Did'], answer: 'Has', full: 'Has there been any news?', why: 'news は数えられない名詞（単数扱い）→ Has there been ～?' },
      { situation: '最近、京都は観光客が多いね。', sentence: 'There have been a lot of tourists in Kyoto ___.', options: ['lately', 'yesterday', 'last week', 'ago'], answer: 'lately', full: 'There have been a lot of tourists in Kyoto lately.', why: 'lately（最近）は今につながる期間。yesterday などは過去形と一緒に使う。' },
      { situation: '昨日、駅の近くで事故があった。', sentence: 'There ___ an accident near the station yesterday.', options: ['was', 'has been', 'have been', 'is'], answer: 'was', full: 'There was an accident near the station yesterday.', why: 'yesterday（過去の時点）があるので過去形 was。' },
      { situation: '誤解があったみたい。', sentence: "I think there's ___ a misunderstanding.", options: ['been', 'be', 'being', 'was'], answer: 'been', full: "I think there's been a misunderstanding.", why: "there's been ＝ there has been。has のあとは been。" },
      { situation: '今のところ、問題は何もないよ。', sentence: 'There ___ been any problems so far.', options: ["haven't", "hasn't", "aren't", "didn't"], answer: "haven't", full: "There haven't been any problems so far.", why: "problems（複数）の否定なので haven't。so far＝今のところ。" },
      { situation: 'あなたのことを考えなかった日は一日もないよ。', sentence: "There has never ___ a day I didn't think about you.", options: ['been', 'be', 'was', 'being'], answer: 'been', full: "There has never been a day I didn't think about you.", why: 'has never のあとは過去分詞 been。' }
    ]
  }, {
    id: 'linking',
    title: 'リンキング（音のつながり）',
    short: '音のつながり（リンキング）',
    intro: 'ネイティブの英語が速く聞こえる一番の理由は、単語と単語の音がつながったり、変わったり、消えたりするからです。主な型は3つ：①子音＋母音がつながる、②t / d ＋ you で音が変わる、③似た音が続くと前の音が消える。カタカナは目安なので、🔊（ふつう）と🐢（ゆっくり）を聞き比べて、つながる感じをつかみましょう。',
    groups: [
      {
        name: '① 子音 ＋ 母音がつながる（連結）',
        note: '前の単語の最後の子音と、次の単語の最初の母音がくっついて、1語のように聞こえます。いちばん多いリンキングです。',
        forms: [
          { key: 'Check it out', kana: 'チェキラウ(ト)', kanaNote: '（ck＋it、t＋out がつながる）', label: '子音 ＋ 母音', ja: '見てみて', nuance: 'check ＋ it → チェキッ、it ＋ out → イラウ。',
            ex: ['Check it out!', '見てみて！'], tone: 'ほかに：Come on（カモン）、Not at all（ナラロー）、an apple（アナポー）。' },
          { key: 'Can I ～?', kana: 'キャナイ', kanaNote: '（n＋I がつながる）', label: 'Can I / Could I / Did I', ja: '〜してもいい？', nuance: 'Can I → キャナイ、Could I → クダイ。',
            ex: ['Can I ask you something?', 'ちょっと聞いてもいい？'], tone: 'ask you は「アスキュー」（k＋you がつながる）。' },
          { key: 'pick you up', kana: 'ピッキュアップ', kanaNote: '', label: '動詞 ＋ it / you ＋ up / on / out', ja: '迎えに行く・拾う など', nuance: '動詞のかたまり（句動詞）は特によくつながります。',
            ex: ["I'll pick you up at the station.", '駅まで迎えに行くね。'], tone: 'turn it on（ターニロン）、put it on（プリロン）、get up（ゲラップ）。' }
        ]
      },
      {
        name: '② t / d ＋ you で音が変わる（同化）',
        note: 't / d と you がくっつくと、別の音に変わります。最初は聞き取れなくて当たり前なので、まずは「聞いて分かる」ことを目標に。',
        forms: [
          { key: 'Did you ～?', kana: 'ディジュ', kanaNote: '（d＋you → ジュ）', label: 'd ＋ you → ジュ', ja: '〜した？', nuance: 'Would you → ウジュ、Could you → クジュ も同じ。',
            ex: ['Did you eat yet?', 'もう食べた？'], tone: 'Nice to meet you. は「ナイストゥミーチュ」（t＋you → チュ）。' },
          { key: 'What do you ～?', kana: 'ワダヤ', kanaNote: '（会話ではまとめて短く）', label: 'What do you → ワダヤ／What are you → ワラヤ', ja: '何を〜する？', nuance: 'よく使う組み合わせは、かたまりで短くなります。',
            ex: ['What do you want to do today?', '今日何したい？'], tone: 'want to → ワナ、going to → ゴナ、got to → ガラ も会話でよく聞きます（自分で言うときは無理にまねしなくてOK）。' },
          { key: 'Let me', kana: 'レミ', kanaNote: '（t が消える）', label: 'Let me / Give me / Tell me', ja: '〜させて／〜して', nuance: 'Let me → レミ、Give me → ギミ、Tell me → テルミ。',
            ex: ['Let me think.', 'ちょっと考えさせて。'], tone: 'Let me know.（レミノウ）は、メッセージでも会話でも毎日のように出ます。' }
        ]
      },
      {
        name: '③ 音が消える・弱くなる（脱落・弱形）',
        note: '同じ音や似た音が続くと前の音が消えます。and / of / to のような短い単語も、弱く短くなります。',
        forms: [
          { key: 'next time', kana: 'ネクスタイム', kanaNote: '（t が続くので前の t が消える）', label: '同じ・似た子音が続く → 前の音が消える', ja: '次回', nuance: 'next の t と time の t が続くので、1回だけ発音します。',
            ex: ['See you next time!', 'また次回ね！'], tone: 'good day（グッデイ）、bad dream（バッドリーム）、last night（ラスナイ）。' },
          { key: 'a lot of', kana: 'アラロヴ', kanaNote: '（アメリカ英語）', label: '母音にはさまれた t → 軽いラ行の音', ja: 'たくさんの', nuance: 'アメリカ英語では、母音にはさまれた t が「ラ」行のような音になります。',
            ex: ['I have a lot of things to do.', 'やることがたくさんある。'], tone: 'water（ワラー）、better（ベラー）、get it（ゲリッ）。ドイツの人はこの t をはっきり発音することが多いので、聞き比べると面白いです。' },
          { key: 'and / of / to', kana: 'ン／ア／タ', kanaNote: '（弱く短く）', label: 'and / of / to / for などは弱く短く', ja: '（文の中で弱くなる短い単語）', nuance: 'and → ン、of → ア(ヴ)、to → タ、for → ファ。',
            ex: ['Can you pass me the salt and pepper?', '塩とこしょう取ってくれる？'], tone: 'salt and pepper → ソルトゥンペッパー、a cup of tea → アカッパティー。' }
        ]
      }
    ],
    compare: {
      lead: '例：単語ごとに読む → つなげて読む',
      rows: [
        ['Check it out!', 'チェック イット アウト → チェキラウ'],
        ['Did you eat yet?', 'ディド ユー イート イェット → ディジュイーチェッ？'],
        ['Let me know.', 'レット ミー ノウ → レミノウ'],
        ['What do you want to do?', 'ワット ドゥー ユー ウォント トゥー ドゥー → ワダヤ ワナ ドゥ？'],
        ["I'll pick you up.", 'アイル ピック ユー アップ → アイルピッキュアップ']
      ]
    },
    cautions: [
      'カタカナはあくまで目安。🔊（ふつう）と🐢（ゆっくり）を聞き比べて、どこがつながるかを耳でつかむのが一番です。',
      '自分で話すときは、無理にくずさなくてもちゃんと通じます。まずは「聞き取れる」ことを目標に。',
      'つながるのは意味のかたまりの中だけ。カンマやピリオドの区切りでは切ります。',
      '音読するときは単語ごとに区切らず、かたまりで読むと自然につながるようになります（シャドーイングと相性がいい）。'
    ],
    quiz: [
      { situation: 'Check it out! の聞こえ方に一番近いのは？', sentence: 'Check it out! → ___', options: ['チェキラウ', 'チェック イット アウト', 'チェクトゥアウト', 'チェッキトアウト'], answer: 'チェキラウ', full: 'Check it out!', why: 'ck＋it、t＋out がつながり、母音にはさまれた t がラ行っぽくなる。' },
      { situation: 'Can I ask you something? の Can I は？', sentence: 'Can I → ___', options: ['キャナイ', 'キャン アイ', 'カンナイ', 'ケン アイ'], answer: 'キャナイ', full: 'Can I ask you something?', why: 'n＋I がつながって「キャナイ」。' },
      { situation: 'Did you eat yet? の Did you は？', sentence: 'Did you → ___', options: ['ディジュ', 'ディド ユー', 'ディユー', 'ディッチュ'], answer: 'ディジュ', full: 'Did you eat yet?', why: 'd＋you は「ジュ」に変わる。' },
      { situation: 'Nice to meet you. の meet you は？', sentence: 'meet you → ___', options: ['ミーチュ', 'ミート ユー', 'ミージュ', 'ミーユー'], answer: 'ミーチュ', full: 'Nice to meet you.', why: 't＋you は「チュ」に変わる。' },
      { situation: 'Let me know. の聞こえ方は？', sentence: 'Let me know. → ___', options: ['レミノウ', 'レット ミー ノウ', 'レトミノウ', 'レッツノウ'], answer: 'レミノウ', full: 'Let me know.', why: 't が消えて Let me → レミ。' },
      { situation: 'What do you want to do today? の What do you は？', sentence: 'What do you → ___', options: ['ワダヤ', 'ワット ドゥー ユー', 'ワッチュ', 'ワドゥユー'], answer: 'ワダヤ', full: 'What do you want to do today?', why: '会話では What do you がまとまって「ワダヤ」に聞こえる。' },
      { situation: "I'll pick you up at the station. の pick you up は？", sentence: 'pick you up → ___', options: ['ピッキュアップ', 'ピック ユー アップ', 'ピクヤプ', 'ピッキャップ'], answer: 'ピッキュアップ', full: "I'll pick you up at the station.", why: 'k＋you（キュ）、you＋up がつながる。' },
      { situation: 'See you next time! の next time は？', sentence: 'next time → ___', options: ['ネクスタイム', 'ネクスト タイム', 'ネクストゥタイム', 'ネッタイム'], answer: 'ネクスタイム', full: 'See you next time!', why: 'next の t と time の t が続くので、前の t が消える。' },
      { situation: 'I have a lot of things to do. の a lot of は？（アメリカ英語）', sentence: 'a lot of → ___', options: ['アラロヴ', 'ア ロット オブ', 'アロットブ', 'アロトフ'], answer: 'アラロヴ', full: 'I have a lot of things to do.', why: '母音にはさまれた t がラ行っぽくなり、of は弱く「ア(ヴ)」になる。' }
    ]
  }, {
    id: 'small-mistakes',
    title: 'よくある小さなミス（AI英会話から）',
    short: '小さなミスを直す（過去形・still・for ～ing）',
    intro: 'AI英会話（11/8）で実際に出た、小さなミスのまとめです。どれも意味は伝わるので、会話中は気にしすぎなくて大丈夫。日記や音読のときに少しずつ直していきましょう。',
    groups: [
      {
        name: '時制・冠詞',
        note: '自分で文を組み立てると、過去の話が現在形に戻りがち。today / yesterday / last night があったら過去形のサインです。',
        forms: [
          { key: '過去の話は過去形', kana: '', kanaNote: '', label: '過去のこと → 動詞を過去形に', ja: '〜した', nuance: 'play → played、take → took、go → went、have → had。',
            ex: ['I played "Over the Rainbow" today.', '今日「虹の彼方に」を弾いた。'], tone: '2文目以降も過去形のまま：It was hard, but fun.' },
          { key: '曲名に the を付けない', kana: '', kanaNote: '', label: '曲名・映画名・本の題名には the を付けない', ja: '（タイトルはそのまま）', nuance: 'タイトルはそのまま名前として使います。書くときは " " で囲むと分かりやすい。',
            ex: ['My favorite song is "Let It Be".', '好きな曲は「レット・イット・ビー」。'], tone: '楽器には the を付ける：play the piano（ピアノを弾く）。' }
        ]
      },
      {
        name: '語順・前置詞・目的語',
        note: '語順や小さな単語の抜け。意味は通じますが、直すと一気に自然になります。',
        forms: [
          { key: 'still can\'t', kana: 'スティル キャント', kanaNote: '', label: '主語 ＋ still ＋ can\'t / don\'t ＋ 動詞', ja: 'まだ〜できない', nuance: 'still は否定（can\'t / don\'t）の前に置きます。',
            ex: ["I still can't play it very well.", 'まだうまく弾けない。'], tone: "肯定文では be動詞のあと・一般動詞の前：I'm still learning. / I still remember." },
          { key: 'Thank you for ～ing', kana: '', kanaNote: '', label: 'Thank you for ＋ ～ing / 名詞', ja: '〜してくれてありがとう', nuance: 'Thank you のあとに直接動詞を置かず、for を入れます。',
            ex: ['Thank you for teaching me.', '教えてくれてありがとう。'], tone: 'Thank you for asking.（聞いてくれてありがとう）も自然な英語。AIに直されても気にしなくて大丈夫です。' },
          { key: '動詞 ＋ it', kana: '', kanaNote: '', label: '動詞 ＋ it（目的語を忘れない）', ja: 'それを〜する', nuance: '日本語では「弾けない」と目的語を省きますが、英語では it が必要なことが多いです。',
            ex: ["I like this song, but I can't sing it.", 'この曲好きだけど、歌えない。'], tone: 'I want to play it well.（上手に弾けるようになりたい）' }
        ]
      }
    ],
    compare: {
      lead: '例：AI英会話で言った文 → 直した文',
      rows: [
        ['I play the Over the Rainbow.', '→ I played "Over the Rainbow."（過去形・the なし）'],
        ["I can't still play well.", "→ I still can't play it very well.（still の位置・it）"],
        ['Thank you teaching me.', '→ Thank you for teaching me.（for ～ing）'],
        ['Thank you for asking.', '→ そのままでOK（自然な英語）']
      ]
    },
    cautions: [
      'どれも意味は伝わるミス。会話中は止まらずに話し続ける方が大事です。',
      'today / yesterday / last night が入った文は、過去形になっているか一度確認。英語日記を書いたあとのチェックにも。',
      "still は「まだ（続いている）」、yet は否定文の最後で「まだ〜ない」：I haven't finished yet.",
      'Thank you の後ろは for ＋ 名詞 / ～ing：Thanks for coming!（来てくれてありがとう）'
    ],
    quiz: [
      { situation: '今日「虹の彼方に」を弾いた。', sentence: 'I ___ "Over the Rainbow" today.', options: ['played', 'play', 'playing', 'plays'], answer: 'played', full: 'I played "Over the Rainbow" today.', why: 'today（今日すでにしたこと）なので過去形 played。' },
      { situation: '好きな曲は「レット・イット・ビー」。', sentence: 'My favorite song is ___.', options: ['"Let It Be"', 'the "Let It Be"', 'a "Let It Be"', 'the Let It Be'], answer: '"Let It Be"', full: 'My favorite song is "Let It Be".', why: '曲名には the や a を付けない。' },
      { situation: 'まだうまく弾けない。', sentence: '___ play it very well.', options: ["I still can't", "I can't still", 'I still not can', 'I can still not'], answer: "I still can't", full: "I still can't play it very well.", why: "still は否定の can't の前に置く。" },
      { situation: '教えてくれてありがとう。', sentence: 'Thank you ___ me.', options: ['for teaching', 'teaching', 'to teach', 'for teach'], answer: 'for teaching', full: 'Thank you for teaching me.', why: 'Thank you for ＋ ～ing で「〜してくれてありがとう」。' },
      { situation: '「調子どう？」と聞かれて「聞いてくれてありがとう」', sentence: 'Thank you for ___.', options: ['asking', 'ask', 'to ask', 'asked'], answer: 'asking', full: 'Thank you for asking.', why: 'for のあとは ～ing。Thank you for asking. は自然な英語。' },
      { situation: 'この曲好きだけど、歌えない。', sentence: "I like this song, but I can't ___.", options: ['sing it', 'sing', 'singing it', 'it sing'], answer: 'sing it', full: "I like this song, but I can't sing it.", why: '「その曲を」歌えないので、目的語 it が必要。' },
      { situation: 'まだ練習中なんだ。', sentence: "I'm ___ practicing.", options: ['still', 'yet', 'already', 'ever'], answer: 'still', full: "I'm still practicing.", why: '「まだ（続いている）」は still。be動詞のあとに置く。' },
      { situation: '昨日ピアノを2時間練習した。', sentence: 'I ___ the piano for two hours yesterday.', options: ['practiced', 'practice', 'am practicing', 'have practiced'], answer: 'practiced', full: 'I practiced the piano for two hours yesterday.', why: 'yesterday があるので過去形。現在完了は yesterday と一緒に使わない。' }
    ]
  }, {
    id: 'for-usage',
    title: 'for の使い方',
    short: 'for の使い方（期間・目的・相手・理由・〜にとって）',
    intro: 'for は意味が広く、日本語の訳が文によって変わります。核になるイメージは「→ 向かう先・対象」。期間（〜の間）、目的・用途（〜のための）、相手（〜に）、理由（Thank you for）、〜にとって、を押さえれば会話ではほぼ足ります。話す相手は to、話題は about で、for とは区別しましょう。',
    groups: [
      {
        name: '期間・目的',
        note: '「どのくらいの長さ」と「何のため」。いちばんよく使う2つです。',
        forms: [
          { key: 'for ＋ 期間', kana: 'フォー', kanaNote: '（文の中では弱く「ファ」）', label: 'for ＋ 期間（〜の間・〜分）', ja: '〜の間', nuance: 'どれくらいの長さかを言います。for a week（1週間）、for two hours（2時間）。',
            ex: ["I'm staying in Kyoto for three days.", '京都に3日間滞在する。'], tone: '「〜分しかない」は for only ～：I have water for only a week.（1週間分しか水がない）' },
          { key: 'for ＋ 目的・用途', kana: '', kanaNote: '', label: 'for ＋ 名詞（〜のための・〜に）', ja: '〜のために／〜に', nuance: '何のためか・何に使うかを言います。',
            ex: ["Let's go out for dinner.", '夕食を食べに出かけよう。'], tone: 'a table for two（2名の席）、a lot to do for university（大学の課題がたくさん）。' }
        ]
      },
      {
        name: '相手・理由・〜にとって',
        note: '人と一緒に使う for。受け取る相手、お礼・おわびの理由、「〜にとって」の3つです。',
        forms: [
          { key: 'This is for you.', kana: '', kanaNote: '', label: 'for ＋ 人（〜に・〜のために）', ja: '〜に（あげる）／〜のために', nuance: '受け取る相手、役に立つ相手。',
            ex: ['This is for you.', 'これ、あなたに。'], tone: 'I made it for you.（あなたのために作った）' },
          { key: 'Thank you for ～', kana: '', kanaNote: '', label: 'Thank you for ／ Sorry for ＋ 名詞・～ing', ja: '〜をありがとう／〜してごめん', nuance: 'お礼やおわびの理由を言います。',
            ex: ['Thank you for the lovely day.', '素敵な一日をありがとう。'], tone: "I'm sorry for being late.（遅れてごめん）。文法ノート11の Thank you for teaching me. と同じ形。" },
          { key: '〜にとって', kana: '', kanaNote: '', label: '形容詞 ＋ for ＋ 人（〜にとって）', ja: '〜にとって…だ', nuance: '誰にとってそうなのかを言います。',
            ex: ['English is still hard for me.', '英語はまだ私には難しい。'], tone: "It's too spicy for me.（私には辛すぎる）は食事の場面で便利。" }
        ]
      },
      {
        name: 'for / to / about の使い分け',
        note: '日本語ではどれも「〜に」「〜について」になりやすいので注意。',
        forms: [
          { key: 'speak to / talk about', kana: '', kanaNote: '', label: '話す相手は to / with、話題は about', ja: '〜と話す／〜について話す', nuance: '「話す」には for を使いません：talk for you（×）。',
            ex: ['I want to talk to you about our trip.', '旅行のことで話したいことがあるんだ。'], tone: '読んだ文：I never speak to this person about big snakes.（その人とは大蛇の話はしない）' },
          { key: 'wait for / look for', kana: '', kanaNote: '', label: 'for とセットの動詞：wait for / look for / ask for', ja: '〜を待つ／〜を探す／〜を頼む', nuance: 'for を落とすと意味がずれる、決まった組み合わせです。',
            ex: ["I'll wait for you at the station.", '駅で待ってるね。'], tone: "I'm looking for a cafe.（カフェを探してる）" }
        ]
      }
    ],
    compare: {
      lead: '例：「あなた」と前置詞',
      rows: [
        ['This is for you.', 'これ、あなたに。（for：受け取る相手）'],
        ["I'll talk to you later.", 'あとで話そう。（to：話す相手）'],
        ["Let's talk about you.", 'あなたの話をしよう。（about：話題）'],
        ["I'll wait for you.", 'あなたを待ってるね。（wait for のセット）'],
        ['It must be hard for you.', 'あなたにとっては大変だよね。（for：〜にとって）']
      ]
    },
    cautions: [
      '期間の for と since：for は長さ（for two years）、since は始まった時点（since 2024）。',
      '話す相手は to / with、話題は about。for を使うと別の意味になります。',
      'Thank you for ／ Sorry for のあとは名詞か ～ing：Thank you for help（×）→ Thank you for your help（○）',
      "読んだ文 I don't know people for an open conversation. は少し不自然。会話なら I don't have anyone to talk to openly.（本音で話せる人がいない）"
    ],
    quiz: [
      { situation: '京都に3日間滞在する。', sentence: "I'm staying in Kyoto ___ three days.", options: ['for', 'since', 'during', 'in'], answer: 'for', full: "I'm staying in Kyoto for three days.", why: '期間の長さ（three days）は for。' },
      { situation: '1週間分しか水がない。', sentence: 'I have water ___ only a week.', options: ['for', 'since', 'by', 'until'], answer: 'for', full: 'I have water for only a week.', why: 'for ＋ 期間で「〜の間（もつ分）」。' },
      { situation: '夕食を食べに出かけよう。', sentence: "Let's go out ___ dinner.", options: ['for', 'to', 'at', 'with'], answer: 'for', full: "Let's go out for dinner.", why: '目的（夕食のため）は for。' },
      { situation: 'これ、あなたに。（プレゼントを渡す）', sentence: 'This is ___ you.', options: ['for', 'to', 'at', 'about'], answer: 'for', full: 'This is for you.', why: '受け取る相手は for。' },
      { situation: '英語はまだ私には難しい。', sentence: 'English is still hard ___ me.', options: ['for', 'to', 'at', 'with'], answer: 'for', full: 'English is still hard for me.', why: '「〜にとって」は for。' },
      { situation: '遅れてごめん。', sentence: "I'm sorry ___ being late.", options: ['for', 'to', 'of', 'at'], answer: 'for', full: "I'm sorry for being late.", why: 'おわびの理由は for ＋ ～ing。' },
      { situation: '旅行のことで話したいことがあるんだ。', sentence: 'I want to talk to you ___ our trip.', options: ['about', 'for', 'to', 'at'], answer: 'about', full: 'I want to talk to you about our trip.', why: '話題は about。話す相手は to。' },
      { situation: '駅で待ってるね。', sentence: "I'll wait ___ you at the station.", options: ['for', 'to', 'at', 'on'], answer: 'for', full: "I'll wait for you at the station.", why: '「〜を待つ」は wait for のセット。' }
    ]
  }];


  var GR = { TOPICS: TOPICS };
  if (typeof module !== 'undefined' && module.exports) module.exports = GR; else root.GR = GR;
})(typeof window !== 'undefined' ? window : this);
