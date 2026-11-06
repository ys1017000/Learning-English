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
  }];


  var GR = { TOPICS: TOPICS };
  if (typeof module !== 'undefined' && module.exports) module.exports = GR; else root.GR = GR;
})(typeof window !== 'undefined' ? window : this);
