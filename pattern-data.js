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
      slots: [['あの日を', 'that day'], ['ドイツを', 'Germany'], ['子どものころを', 'my childhood'], ['地元を', 'my hometown'], ['昔の友だちを', 'an old friend']] },
    // ===== 2026-11-20 追加 =====
    { id: 'works-time', chunk: '～ works for me', group: '受け入れる・都合', pre: '', post: ' works for me.', head: 'で大丈夫だよ', prep: 'for',
      note: '時間・日にち・場所を入れ替えて「〜で大丈夫」。8:30 works for me. のように返事の最初にそのまま言える。',
      slots: [['8時半', '8:30'], ['土曜', 'Saturday'], ['有楽町', 'Yurakucho'], ['日曜', 'Sunday'], ['来週', 'Next week']] },
    { id: 'just-to-make-sure', chunk: 'Just to make sure, ～, right?', group: '受け入れる・都合', pre: 'Just to make sure,', post: ', right?', head: '念のため、', headFirst: true, tailJa: 'で合ってるよね？',
      note: 'Just to make sure, ～, right?＝「念のため、〜で合ってるよね？」。相手を疑っている感じにならない確認。',
      slots: [['8時半', "it's at 8:30"], ['栄', "it's Sakae"], ['土曜', "it's Saturday"], ['日比谷駅', "it's Hibiya Station"], ['2人', "it's for two"]] },
    { id: 'let-me-know', chunk: 'Let me know if ～', group: '受け入れる・都合', pre: 'Let me know if', post: '!', head: 'なら教えてね', 
      note: 'Let me know if ～.＝「〜なら教えてね」。相手に選ぶ余地を残すやさしい締め。',
      slots: [['違うお店のつもり', 'you meant a different place'], ['遅れそう', "you're running late"], ['疲れてる', "you're tired"], ['何か手伝えることがある', 'I can help with anything'], ['予定が変わった', 'your plans change']] },
    { id: 'do-you-want', chunk: 'Do you want to ～?', group: '提案・誘う', pre: 'Do you want to', post: '?', head: 'しない？',
      note: 'Do you want to ～?＝「〜しない？」。友だち・恋人どうしの気軽な誘い。',
      slots: [['お茶', 'grab a coffee'], ['散歩', 'go for a walk'], ['映画見たり', 'watch a movie'], ['ちょっと休憩', 'take a break'], ['あとで電話', 'call later']] },
    { id: 'we-could', chunk: 'We could ～', group: '提案・誘う', pre: 'We could', post: '.', head: 'のもアリだね',
      note: 'We could ～.＝「〜するのもアリだね」。押しつけずに選択肢を出す提案（could＝その気になればできる）。',
      slots: [['イルミネーション見に行く', 'go see the Christmas lights'], ['テイクアウトにする', 'get takeout'], ['家でゆっくりする', 'just stay in'], ['早めに切り上げる', 'call it an early night'], ['電車じゃなくて歩く', 'walk instead']] },
    { id: 'go-see', chunk: "Let's go see ～ together", group: '提案・誘う', pre: "Let's go see", post: ' together!', head: '一緒に見に行こう！',
      note: "Let's go see ～＝「〜を見に行こう」。go と see の間に and も to もいらない（会話の形）。",
      slots: [['イルミネーション', 'the Christmas lights'], ['紅葉', 'the autumn leaves'], ['桜', 'the cherry blossoms'], ['花火', 'the fireworks'], ['富士山', 'Mt. Fuji']] },
    { id: 'how-about', chunk: 'How about ～?', group: '提案・誘う', pre: 'How about', post: '?', head: 'はどう？',
      note: 'How about ～?＝「〜はどう？」。後ろは名詞か ～ing。',
      slots: [['7時', '7pm'], ['木曜', 'Thursday'], ['おでん', 'oden'], ['駅で待ち合わせ', 'meeting at the station'], ['先にイルミネーション', 'seeing the lights first']] },
    { id: 'you-must-be', chunk: 'You must be ～', group: '気遣う・ほめる', pre: 'You must be', post: '.', head: 'よね', 
      note: 'You must be ～.＝「きっと〜だよね」。相手の状況を想像して寄り添う一言。',
      slots: [['きっと疲れてる', 'tired'], ['きっとワクワクしてる', 'excited'], ['きっと緊張してる', 'nervous'], ['きっとホッとしてる', 'relieved'], ['きっとお腹すいてる', 'hungry']] },
    { id: 'you-seem', chunk: 'You seem ～', group: '気遣う・ほめる', pre: 'You seem', post: '.', head: 'みたいだね',
      note: 'You seem ～.＝「〜みたいだね」。返信・声・様子など全体から感じたとき。見た目なら You look ～。',
      slots: [['今日は楽しい', 'happy today'], ['ちょっと疲れてる', 'a little tired'], ['最近忙しい', 'busy these days'], ['機嫌がいい', 'in a good mood'], ['何か考えてる', 'lost in thought']] },
    { id: 'looks-cute', chunk: '～ looks so cute on you', group: '気遣う・ほめる', pre: '', post: ' looks so cute on you.', head: 'すごく似合ってる',
      note: '～ looks so cute on you.＝「〜すごく似合ってる」。服・小物をほめる定番。',
      slots: [['そのヘアバンド、', 'That headband'], ['そのセーター、', 'That sweater'], ['そのニット帽、', 'That beanie'], ['その色、', 'That color'], ['そのマフラー、', 'That scarf']] },
    { id: 'cheering', chunk: "I'm cheering you on for ～", group: '気遣う・ほめる', pre: "I'm cheering you on for", post: '!', head: 'を応援してるよ！', prep: 'for',
      note: "I'm cheering you on for ～.＝「〜を応援してるよ」。cheer 人 on＝人を応援する。",
      slots: [['プレゼン', 'your presentation'], ['オーディション', 'your audition'], ['テスト', 'your exam'], ['新しい挑戦', 'your new challenge'], ['夢', 'your dream']] },
    { id: 'happy-got-to', chunk: "I'm happy I got to ～", group: 'お礼・効果', pre: "I'm really happy I got to", post: '.', head: '本当にうれしかった',
      note: "I'm happy I got to ～.＝「〜できてうれしい」。get to ～＝（機会があって）〜できる。",
      slots: [['一緒にイルミネーションを見られて', 'see the lights with you'], ['会えて', 'see you'], ['一緒におでんを食べられて', 'try oden with you'], ['ゆっくり話せて', 'talk with you'], ['友だちに会えて', 'meet your friends']] },
    { id: 'i-hope', chunk: 'I hope ～', group: '願い・予定', pre: 'I hope', post: '.', head: 'といいな',
      note: 'I hope ～.＝「〜だといいな」。これから起こりうること。無理なことなら I wish。',
      slots: [['気に入ってくれる', 'you like it'], ['プレゼンがうまくいく', 'your presentation goes well'], ['ゆっくり休める', 'you get some rest'], ['晴れる', "it's sunny tomorrow"], ['また会える', 'we can meet again soon']] },
    { id: 'i-wish-could', chunk: 'I wish I could ～', group: '願い・予定', pre: 'I wish I could', post: '.', head: 'たらなあ',
      note: 'I wish I could ～.＝「（無理だけど）〜できたらなあ」。会えない夜のDMにも。',
      slots: [['今日会え', 'see you today'], ['一緒に行け', 'go with you'], ['ドイツ語を話せ', 'speak German'], ['今すぐくっつけ', 'cuddle with you right now'], ['もっと長くいられ', 'stay longer']] },
    { id: 'cant-wait', chunk: "I can't wait to ～", group: '願い・予定', pre: "I can't wait to", post: '!', head: 'が待ちきれない！',
      note: "I can't wait to ～!＝「〜が待ちきれない！」。楽しみな気持ちを強く言う。",
      slots: [['会うの', 'see you'], ['一緒に行くの', 'go there with you'], ['話を聞くの', 'hear about it'], ['食べるの', 'try it'], ['週末', 'see you this weekend']] },
    { id: 'going-to', chunk: "I'm going to ～", group: '願い・予定', pre: "I'm going to", post: ' this weekend.', head: '今週末は', headFirst: true, tailJa: 'つもり',
      note: "I'm going to ～.＝「（もう決めてる）〜するつもり」。今その場で決めたなら I'll ～。",
      slots: [['ギターを練習する', 'practice guitar'], ['実家に帰る', 'visit my parents'], ['家でゆっくりする', 'take it easy at home'], ['かぎ編みする', 'do some crocheting'], ['ピアノのレッスンに行く', 'go to my piano lesson']] },
    { id: 'have-you-ever', chunk: 'Have you ever ～?', group: '経験・過去', pre: 'Have you ever', post: '?', head: 'ことある？',
      note: 'Have you ever ～?＝「〜したことある？」。後ろは過去分詞。',
      slots: [['おでん食べた', 'tried oden'], ['温泉に行った', 'been to an onsen'], ['富士山に登った', 'climbed Mt. Fuji'], ['着物を着た', 'worn a kimono'], ['カラオケで歌った', 'sung karaoke']] },
    { id: 'used-to-do', chunk: 'I used to ～', group: '経験・過去', pre: 'I used to', post: '.', head: '昔は', headFirst: true,
      note: 'I used to ～.＝「昔は〜してた（今はしてない）」。I\'m used to ～（慣れてる）とは別。',
      slots: [['サッカーしてた', 'play soccer'], ['大阪に住んでた', 'live in Osaka'], ['毎日走ってた', 'run every day'], ['タバコを吸ってた', 'smoke'], ['ピアノを弾いてた', 'play the piano']] },
    { id: 'ended-up', chunk: 'I ended up ～ing', group: '経験・過去', pre: 'I ended up', post: '.', head: '結局', headFirst: true,
      note: 'I ended up ～ing.＝「結局〜しちゃった」。予定と違う結果になったとき。',
      slots: [['寝落ちしちゃった', 'falling asleep'], ['遅くまで起きちゃった', 'staying up late'], ['家にいることにした', 'staying home'], ['全部食べちゃった', 'eating everything'], ['電車を乗り過ごしちゃった', 'missing my stop']] },
    { id: 'was-gonna', chunk: 'I was gonna ～, but', group: '経験・過去', pre: 'I was gonna', post: ', but I forgot.', head: 'つもりだったけど、忘れてた',
      note: 'I was gonna ～, but ...＝「〜するつもりだったけど…」。実際にはしなかったときの言い訳・説明。',
      slots: [['連絡する', 'text you'], ['写真を送る', 'send you the photos'], ['傘を持っていく', 'bring an umbrella'], ['予約する', 'make a reservation'], ['聞く', 'ask you']] },
    { id: 'sorry-i', chunk: "I'm sorry I ～", group: '謝る・気持ち', pre: "I'm sorry I", post: '.', head: 'ごめんね',
      note: "I'm sorry I ～.＝「〜してごめんね」。何をしたかを過去形で言う。",
      slots: [['遅れて', 'was late'], ['返信が遅くて', 'replied so late'], ['言いすぎて', 'said too much'], ['忘れてて', 'forgot'], ['心配させて', 'made you worry']] },
    { id: 'shouldnt-have', chunk: "I shouldn't have ～", group: '謝る・気持ち', pre: "I shouldn't have", post: '.', head: 'べきじゃなかった',
      note: "I shouldn't have ～.＝「〜すべきじゃなかった」。後ろは過去分詞。反省を伝える。",
      slots: [['あんなこと言う', 'said that'], ['大げさに反応する', 'overreacted'], ['そんなに飲む', 'drunk so much'], ['待たせる', 'kept you waiting'], ['決めつける', 'assumed that']] },
    { id: 'not-that', chunk: "It's not that ～. I'm just ～", group: '謝る・気持ち', pre: "It's not that I don't want to. I'm just", post: '.', head: 'イヤなんじゃなくて、', headFirst: true, tailJa: 'だけなんだ',
      note: "It's not that ～. I'm just ～.＝「〜なんじゃなくて、…なだけ」。誤解されそうなときのフォロー。",
      slots: [['疲れてる', 'tired'], ['緊張してる', 'nervous'], ['お腹いっぱいな', 'full'], ['今日はちょっと忙しい', 'a bit busy today'], ['眠い', 'sleepy']] },
    { id: 'my-opinion', chunk: "This is just my opinion, but ～", group: '意見・理由', pre: 'This is just my opinion, but', post: '.', head: '個人的な意見だけど、', headFirst: true, tailJa: 'と思う',
      note: 'This is just my opinion, but ～.＝「個人的な意見だけど〜」。意見の前のクッション。',
      slots: [['日本人は外国人が嫌いなわけじゃない', "I don't think Japanese people hate foreigners"], ['東京は住みやすい', 'I think Tokyo is easy to live in'], ['ドイツのパンの方がおいしい', 'I think German bread is better'], ['冬の方がいい', 'I like winter better'], ['それでいい', 'I think that works']] },
    { id: 'i-think-because', chunk: '～, so ～', group: '意見・理由', pre: 'Most Japanese people', post: ', so they get nervous.', head: '多くの日本人は', headFirst: true, tailJa: 'から、緊張しちゃうんだ',
      note: '～, so ...＝「〜だから…」。理由を先に言って so でつなぐと、話しながら組み立てやすい。',
      slots: [['外国人に慣れてない', "aren't used to foreigners"], ['英語に自信がない', "aren't confident in English"], ['目を見て話すのが苦手だ', "aren't comfortable with eye contact"], ['間違えるのが怖い', 'are afraid of making mistakes'], ['英語を話す機会が少ない', "don't get many chances to speak English"]] },
    { id: 'reasons', chunk: 'I can think of a few reasons', group: '意見・理由', pre: 'I can think of a few reasons why', post: '.', head: '理由は、いくつか思い当たるよ',
      note: 'I can think of a few reasons why ～.＝「〜の理由はいくつか思い当たる」。このあと First, / Also, / So, と並べる。',
      slots: [['そう感じる', 'people feel that way'], ['電車がすごく混む', 'the trains are so crowded'], ['日本人が働きすぎる', 'Japanese people work so much'], ['俺が英語を勉強してる', "I'm studying English"], ['冬が好きな', 'I like winter']] },
    { id: 'is-it-normal', chunk: 'Is it normal to ～ in Germany?', group: '聞く・質問', pre: 'Is it normal to', post: ' in Germany?', head: 'ドイツでは', headFirst: true, tailJa: 'のって普通なの？',
      note: 'Is it normal to ～ in Germany?＝「ドイツでは〜って普通なの？」。文化の違いを聞くときの型。',
      slots: [['他の国の国旗を掲げる', "put up another country's flag"], ['家で靴を脱ぐ', 'take your shoes off at home'], ['割り勘にする', 'split the bill'], ['日曜にお店が閉まってる', 'close shops on Sundays'], ['クリスマスに家族と過ごす', 'spend Christmas with family']] },
    { id: 'what-do-you-usually', chunk: 'What do you usually ～?', group: '聞く・質問', pre: 'What do you usually', post: '?', head: 'いつも何してる？', 
      note: 'What do you usually ～?＝「いつも何を〜する？」。習慣を聞く。',
      slots: [['週末は', 'do on weekends'], ['寝る前は', 'do before bed'], ['休みの日は', 'do on your days off'], ['仕事のあとは', 'do after work'], ['クリスマスは', 'do for Christmas']] },
    { id: 'how-was', chunk: 'How was ～?', group: '聞く・質問', pre: 'How was', post: '?', head: 'はどうだった？',
      note: 'How was ～?＝「〜はどうだった？」。会ったあと・イベントのあとに。',
      slots: [['プレゼン', 'your presentation'], ['オーディション', 'the audition'], ['週末', 'your weekend'], ['今日', 'your day'], ['授業', 'class']] },
    { id: 'what-think', chunk: 'What do you think about ～?', group: '聞く・質問', pre: 'What do you think about', post: '?', head: 'ってどう思う？', prep: 'about',
      note: 'What do you think about ～?＝「〜についてどう思う？」。How do you think は ×。',
      slots: [['日本の冬', 'Japanese winters'], ['この店', 'this place'], ['東京の電車', 'the trains in Tokyo'], ['このアイデア', 'this idea'], ['おでん', 'oden']] }
,
    // ===== 2026-11-20 追加：want（現実）と would / could（頭の中の想像） =====
    { id: 'i-want-to', chunk: 'I want to ～!（現実）', group: '想像の would / could', pre: 'I want to', post: '!', head: 'たい！',
      note: 'want＝今すぐ・本当に〜したい（現実）。続くのは Let\'s go!（行こう！）。次の I\'d love to ～, but と同じ言葉で言い比べてみよう。',
      slots: [['会い', 'see you'], ['イルミネーション見', 'see the Christmas lights'], ['一緒に行き', 'go with you'], ['もっと一緒にい', 'stay longer'], ['もっと話し', 'talk more']] },
    { id: 'id-love-but', chunk: "I'd love to ～, but ...（想像）", group: '想像の would / could', pre: "I'd love to", post: ', but I have work tomorrow.', head: 'たいんだけど、明日仕事なんだ',
      note: "would＝現実から一歩引いた、頭の中の想像（気持ちはあるけど…）。誘いを大事にしながらやわらかく断れる。want と言い比べると距離感がわかる。",
      slots: [['会い', 'see you'], ['イルミネーション見', 'see the Christmas lights'], ['一緒に行き', 'go with you'], ['もっと一緒にい', 'stay longer'], ['もっと話し', 'talk more']] },
    { id: 'id-like-to', chunk: "I'd like to ～（ていねい）", group: '想像の would / could', pre: "I'd like to", post: '.', head: 'てみたいな',
      note: "I'd like to ～＝（もしよければ）〜したい。一歩引いた分だけていねい。I want to は少し直接的。",
      slots: [['あなたの話を聞い', 'hear your story'], ['いつかドイツに行っ', 'visit Germany someday'], ['ご家族に会っ', 'meet your family'], ['ドイツ料理を作っ', 'try making German food'], ['あなたのお気に入りの場所に行っ', 'go to your favorite place']] },
    { id: 'would-be-nice', chunk: 'It would be nice to ～（想像・夢）', group: '想像の would / could', pre: 'It would be nice to', post: ' someday.', head: 'いつか', headFirst: true, tailJa: 'たら素敵だろうな',
      note: 'It would be nice to ～.＝（想像すると）〜できたら素敵だろうな。まだ決まっていない夢を話す形。',
      slots: [['一緒にドイツに行け', 'go to Germany together'], ['一緒に雪を見られ', 'see snow together'], ['二人で温泉に行け', 'go to an onsen together'], ['一緒に料理でき', 'cook together'], ['一緒に富士山に登れ', 'climb Mt. Fuji together']] },
    { id: 'if-i-were-you', chunk: "If I were you, I'd ～（想像の中の自分）", group: '想像の would / could', pre: "If I were you, I'd", post: '.', head: '俺だったら、', headFirst: true, tailJa: 'かな',
      note: "If I were you, I'd ～.＝相手の立場の自分を想像して言う。押しつけないアドバイス。",
      slots: [['ちょっと休む', 'take a break'], ['もう一回受けてみる', 'try again'], ['先生に聞く', 'ask your professor'], ['早く寝る', 'go to bed early'], ['気にしない', 'not worry about it']] },
    { id: 'i-could-offer', chunk: 'I could ～ if you want（できなくはない）', group: '想像の would / could', pre: 'I could', post: ' if you want.', head: 'よかったら、', headFirst: true,
      note: 'could＝（その気になれば）〜できる。can より距離があって、押しつけない申し出になる。',
      slots: [['駅まで迎えに行けるよ', 'pick you up at the station'], ['手伝えるよ', 'help you'], ['予約しておけるよ', 'make a reservation'], ['駅まで送れるよ', 'walk you to the station'], ['もっと早く来られるよ', 'come earlier']] }

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
        out.push({ pid: p.id, chunk: p.chunk, full: full, blank: blank, answer: p.prep, ja: jaOf(p, sl) });
      });
    });
    return out;
  }
  // 日本語の文：普通は「後ろの言葉＋head」。headFirst の型は「head＋後ろの言葉＋tailJa」
  function jaOf(p, sl) { return p.headFirst ? p.head + sl[0] + (p.tailJa || '') : sl[0] + p.head; }
  var GROUPS = [];
  PATTERNS.forEach(function (p) { if (GROUPS.indexOf(p.group) < 0) GROUPS.push(p.group); });
  function byId(id) { for (var i = 0; i < PATTERNS.length; i++) if (PATTERNS[i].id === id) return PATTERNS[i]; return null; }

  window.PT = { PATTERNS: PATTERNS, GROUPS: GROUPS, jaOf: jaOf, PREPS: PREPS, frame: frame, sentence: sentence, quizItems: quizItems, byId: byId };
})();
