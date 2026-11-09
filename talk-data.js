/* お題で話す（talk.html）の内容データ
   - CATS: お題の分類
   - PATTERNS: 自動チェックする「型」。re は小文字にした話した英語に対して照合する
   - PROMPTS: お題。lv＝難しさ（1: 好み・2文 / 2: 理由・経験・3文 / 3: 意見・価値観）、pats＝このお題で使ってほしい型、model＝答えの例 [英語, 日本語]
   お題を足すときは PROMPTS に1件追加する（id は重ならないように）。 */
(function () {
  var CATS = [
    { id: 'food', label: '🍽 食事' },
    { id: 'travel', label: '🗺 観光・旅行' },
    { id: 'home', label: '🏠 家で過ごす' },
    { id: 'culture', label: '🇯🇵🇩🇪 日本とドイツ' },
    { id: 'daily', label: '☀️ 日常・近況' },
    { id: 'values', label: '💭 価値観・将来' }
  ];

  var PATTERNS = [
    { id: 'opinion', label: '意見', ex: 'I think ... / I feel ...', re: "\\b(i think|i feel|in my opinion|i believe|i guess|i'd say)\\b" },
    { id: 'reason', label: '理由', ex: "because ... / so ... / that's why ...", re: "\\b(because|since|so|that's why|that is why|the reason)\\b" },
    { id: 'example', label: '例', ex: 'For example, ... / like ...', re: '\\b(for example|for instance|such as|like when)\\b' },
    { id: 'contrast', label: '逆の面', ex: 'but ... / though ...', re: '\\b(but|though|however|although|on the other hand)\\b' },
    { id: 'prefer', label: '好み', ex: 'I prefer ... / I like ... better / my favorite ...', re: '\\b(prefer|better than|more than|favorite|i love|i like)\\b' },
    { id: 'past', label: '経験（過去形）', ex: 'I went ... / It was ...', re: "\\b(was|were|went|had|did|saw|tried|ate|visited|played|took|used to|i've been)\\b" },
    { id: 'question', label: '質問を返す', ex: 'How about you? / What do you think?', re: "(\\?|how about you|what about you|what do you think|and you\\b|do you|have you|what's yours|what is yours)" }
  ];

  var PROMPTS = [
    // ---- 食事 ----
    { id: 'f1', cat: 'food', lv: 1, q: "What's your favorite Japanese food?", ja: '好きな日本の食べ物は？', pats: ['prefer', 'reason', 'question'],
      model: ["My favorite Japanese food is ramen. I love it because it's warm and comforting, especially in winter. What's your favorite?", '好きな日本の食べ物はラーメン。特に冬は、温まってほっとするから大好き。あなたは何が好き？'] },
    { id: 'f2', cat: 'food', lv: 1, q: 'Do you prefer cooking at home or eating out?', ja: '家で料理するのと外食、どっちが好き？', pats: ['prefer', 'reason', 'question'],
      model: ["I prefer eating out because I'm not good at cooking. But I want to cook more, so I'm practicing on weekends. How about you?", '料理が得意じゃないから外食の方が好き。でももっと料理したいから、週末に練習してるんだ。あなたは？'] },
    { id: 'f3', cat: 'food', lv: 2, q: "What's a food you didn't like before, but like now?", ja: '前は苦手だったけど、今は好きな食べ物は？', pats: ['past', 'contrast', 'reason'],
      model: ["I didn't like natto when I was a child, but now I eat it almost every day. I think my taste changed as I got older. Is there any food like that for you?", '子どものころは納豆が苦手だったけど、今はほぼ毎日食べてる。大人になって好みが変わったんだと思う。あなたにもそういう食べ物ある？'] },
    { id: 'f4', cat: 'food', lv: 2, q: 'Where should we go for dinner next time?', ja: '次の夜ごはん、どこに行く？', pats: ['opinion', 'reason', 'question'],
      model: ['I think we should try the Italian place near the station. I heard their pasta is really good. What do you think?', '駅の近くのイタリアンに行ってみない？パスタがすごくおいしいって聞いたよ。どう思う？'] },

    // ---- 観光・旅行 ----
    { id: 't1', cat: 'travel', lv: 1, q: 'Where do you want to travel next?', ja: '次はどこに旅行したい？', pats: ['opinion', 'reason', 'question'],
      model: ['I want to go to Hokkaido next. I think the snow and seafood would be amazing in winter. Where do you want to go?', '次は北海道に行きたい。冬の雪と海鮮は最高だと思う。あなたはどこに行きたい？'] },
    { id: 't2', cat: 'travel', lv: 2, q: "What was the best trip you've ever taken?", ja: '今までで一番よかった旅行は？', pats: ['past', 'reason', 'example'],
      model: ['The best trip was to Kyoto two years ago. The temples were beautiful, and the food was great. For example, I had the best tofu I have ever eaten.', '一番よかったのは2年前の京都。お寺が綺麗で、ごはんもおいしかった。例えば、今まで食べた中で一番おいしい豆腐を食べたよ。'] },
    { id: 't3', cat: 'travel', lv: 2, q: 'Do you prefer the city or nature?', ja: '都会と自然、どっちが好き？', pats: ['prefer', 'reason', 'contrast'],
      model: ["I prefer nature because it helps me relax. The city is convenient, but it's too crowded for me. What about you?", 'リラックスできるから自然の方が好き。都会は便利だけど、私には人が多すぎる。あなたは？'] },
    { id: 't4', cat: 'travel', lv: 3, q: 'Is it better to plan a trip carefully or just go?', ja: '旅行はしっかり計画する派？行き当たりばったり派？', pats: ['opinion', 'reason', 'contrast'],
      model: ["I think it's better to plan a little, but not too much. If I plan everything, I can't enjoy surprises. So I usually decide only the hotel.", '少しは計画した方がいいけど、しすぎない方がいいと思う。全部決めると、思いがけないことを楽しめないから。だからいつもホテルだけ決めてる。'] },

    // ---- 家で過ごす ----
    { id: 'h1', cat: 'home', lv: 1, q: 'How do you like to spend a lazy Sunday?', ja: 'のんびりした日曜日は、どう過ごすのが好き？', pats: ['prefer', 'example', 'question'],
      model: ['I like to sleep in and watch movies at home. For example, last Sunday I watched three movies in a row! How do you spend your Sundays?', '朝ゆっくり寝て、家で映画を見るのが好き。例えば先週の日曜は3本続けて見たよ！あなたは日曜どう過ごしてる？'] },
    { id: 'h2', cat: 'home', lv: 1, q: 'What kind of movies do you like?', ja: 'どんな映画が好き？', pats: ['prefer', 'reason', 'question'],
      model: ['I like comedies the most because they make me laugh. I also love Studio Ghibli movies. Do you have a favorite movie?', '笑えるからコメディが一番好き。ジブリ映画も大好き。好きな映画ある？'] },
    { id: 'h3', cat: 'home', lv: 2, q: 'Do you like spending time alone?', ja: '一人の時間は好き？', pats: ['opinion', 'reason', 'contrast'],
      model: ['Yes, I think alone time is important for me. It helps me recharge after a busy week. But I also love spending time with you, of course.', 'うん、一人の時間は自分にとって大事だと思う。忙しい1週間のあとに元気を取り戻せるから。でももちろん、あなたと過ごす時間も大好き。'] },
    { id: 'h4', cat: 'home', lv: 2, q: "What's something you want to learn at home?", ja: '家で習ってみたいことは？', pats: ['opinion', 'past', 'reason'],
      model: ['I want to get better at the piano. I took a lesson last week, and it was hard, but fun. I hope I can play a song for you someday.', 'ピアノがもっと上手になりたい。先週レッスンを受けて、難しかったけど楽しかった。いつかあなたに1曲弾いてあげられたらいいな。'] },

    // ---- 日本とドイツ ----
    { id: 'c1', cat: 'culture', lv: 2, q: 'What do you think surprises people from other countries about Japan?', ja: '外国の人が日本で驚くことって何だと思う？', pats: ['opinion', 'example', 'reason'],
      model: ["I think many people are surprised that trains are so quiet. For example, people rarely talk on the phone. I think it's because we care about others.", '電車がすごく静かなことに驚く人が多いと思う。例えば、電話で話す人はほとんどいない。周りの人に気をつかうからだと思う。'] },
    { id: 'c2', cat: 'culture', lv: 2, q: 'Would you like to experience a German winter?', ja: 'ドイツの冬を体験してみたい？', pats: ['opinion', 'reason', 'question'],
      model: ["Yes, I'd love to! I think the Christmas markets would be amazing. But I heard it's really cold, so I need a good coat. What's your favorite thing about German winters?", 'うん、ぜひ！クリスマスマーケットは最高だと思う。でもすごく寒いって聞いたから、いいコートが必要だね。ドイツの冬で一番好きなことは何？'] },
    { id: 'c3', cat: 'culture', lv: 3, q: "What's one thing Japan could learn from Germany?", ja: '日本がドイツから学べることは？', pats: ['opinion', 'example', 'reason'],
      model: ["I think Japan could learn about work-life balance from Germany. For example, people in Germany take long vacations. I think that's healthy.", '日本はドイツから仕事と生活のバランスを学べると思う。例えばドイツの人は長い休みを取るよね。それって健康的だと思う。'] },
    { id: 'c4', cat: 'culture', lv: 3, q: 'What do you like about Japanese culture?', ja: '日本の文化のどこが好き？', pats: ['prefer', 'example', 'reason'],
      model: ['I like that people are polite and kind to each other. For example, people always say thank you at stores. It makes me feel warm.', 'みんなが礼儀正しくて、お互いに親切なところが好き。例えば、お店でいつも「ありがとう」って言うよね。温かい気持ちになる。'] },

    // ---- 日常・近況 ----
    { id: 'd1', cat: 'daily', lv: 1, q: 'How was your day?', ja: '今日はどうだった？', pats: ['past', 'reason', 'question'],
      model: ["It was busy, but good. I had a lot of meetings, so I'm a little tired. How was your day?", '忙しかったけど、いい日だった。会議がたくさんあったから、ちょっと疲れてる。あなたの一日はどうだった？'] },
    { id: 'd2', cat: 'daily', lv: 1, q: 'What did you do last weekend?', ja: '先週末は何した？', pats: ['past', 'example', 'question'],
      model: ['I went to a cafe and studied English. Then I watched a movie at home. It was relaxing. What did you do?', 'カフェに行って英語を勉強した。そのあと家で映画を見たよ。のんびりできた。あなたは何した？'] },
    { id: 'd3', cat: 'daily', lv: 2, q: 'What makes you happy these days?', ja: '最近うれしいことは？', pats: ['opinion', 'example', 'reason'],
      model: ["Talking with you makes me happy these days. I also feel happy when I can say something in English without thinking. I think I'm getting better!", '最近は、あなたと話すことがうれしい。考えずに英語で何か言えたときもうれしい。上達してきてると思う！'] },
    { id: 'd4', cat: 'daily', lv: 2, q: "What's stressing you out lately?", ja: '最近ストレスになっていることは？', pats: ['opinion', 'reason', 'contrast'],
      model: ["Work has been stressful lately because we have a big project. But I'm trying to take breaks and go for walks. That helps a lot.", '大きなプロジェクトがあって、最近仕事がストレス。でも休憩して散歩するようにしてる。それがすごく助かってる。'] },

    // ---- 価値観・将来 ----
    { id: 'v1', cat: 'values', lv: 3, q: "What's important to you in a relationship?", ja: '恋愛で大切にしていることは？', pats: ['opinion', 'reason', 'example'],
      model: ["I think honesty is the most important thing. If we can talk openly, we can solve problems together. For example, I want to tell you when I'm worried.", '一番大切なのは正直さだと思う。本音で話せれば、一緒に問題を解決できるから。例えば、不安なときはちゃんと伝えたい。'] },
    { id: 'v2', cat: 'values', lv: 3, q: 'Where do you see yourself in five years?', ja: '5年後、どうなっていたい？', pats: ['opinion', 'example', 'reason'],
      model: ['I hope I can speak English more naturally. I also want to travel more, maybe to Germany. I think English will open many doors for me.', 'もっと自然に英語を話せるようになっていたい。旅行もたくさんしたいな、ドイツとか。英語は自分にたくさんの可能性をくれると思う。'] },
    { id: 'v3', cat: 'values', lv: 3, q: 'Is it better to live in the city or the countryside?', ja: '住むなら都会と田舎、どっちがいい？', pats: ['opinion', 'reason', 'contrast'],
      model: ["I think the city is better for now because of my job. But in the future, I'd like to live somewhere quieter. It depends on the stage of life.", '仕事があるから、今は都会の方がいいと思う。でも将来は、もっと静かな所に住みたい。人生の時期によるかな。'] },
    { id: 'v4', cat: 'values', lv: 3, q: 'What does a perfect day look like for you?', ja: 'あなたにとって完璧な一日は？', pats: ['prefer', 'example', 'question'],
      model: ["A perfect day starts with a slow breakfast. Then I'd go for a walk somewhere with nature, and have a nice dinner with someone I love. What about you?", '完璧な一日は、ゆっくりした朝ごはんから始まる。それから自然のある所を散歩して、大好きな人とおいしい夜ごはんを食べる。あなたは？'] }
  ];

  var SELF = [
    { id: 'said', label: '言いたいことが（だいたい）言えた' },
    { id: 'reason', label: '理由や例を1つ以上言えた' },
    { id: 'ask', label: '最後に質問を返せた' },
    { id: 'nojp', label: '日本語に切り替えずに話せた' }
  ];

  window.TALK = { CATS: CATS, PATTERNS: PATTERNS, PROMPTS: PROMPTS, SELF: SELF };
})();
