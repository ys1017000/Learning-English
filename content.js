/* 心をつなぐ英語表現 - 内容データ（場面フレーズ・ロールプレイ台本・話題カード） */
(function () {
  'use strict';
  // tone: c=カジュアル / g=やさしく / s=真剣に
  const SCENES = [
      { id: 'cheer', emoji: '💪', label: '励ましたい', kw: ['励ま', '元気づけ', '落ち込', 'がんば', '頑張', '応援', 'つらい', '辛い', 'へこ', '疲れ'], p: [
        ["You've got this!", 'あなたならできるよ！', 'c'],
        ["Don't worry, it'll work out.", '大丈夫、きっとうまくいくよ。', 'c'],
        ["Want to talk it out? I'm all ears.", '話してみる？ちゃんと聞くよ。', 'g'],
        ["It's okay to take a break. You've been working so hard.", '休んでもいいんだよ。ずっと頑張ってきたんだから。', 'g'],
        ['I believe in you, no matter what.', '何があっても、あなたを信じてるよ。', 's'],
        ["Whatever happens, I'll be right here with you.", '何が起きても、私はずっとそばにいるよ。', 's'] ] },
      { id: 'thanks', emoji: '🙏', label: '感謝を伝えたい', kw: ['ありがとう', '感謝', '助か', 'うれしい', '嬉しい', 'お礼'], p: [
        ["Thanks, you're the best!", 'ありがとう、最高だよ！', 'c'],
        ['That really helped me out. Thank you!', 'すごく助かった。ありがとう！', 'c'],
        ['Thank you for always thinking of me.', 'いつも私のことを考えてくれてありがとう。', 'g'],
        ['I appreciate everything you do for me.', 'いつもしてくれること、全部に感謝してるよ。', 'g'],
        ["I don't say it enough, but I'm really thankful for you.", 'あまり言えてないけど、あなたがいてくれて本当に感謝してる。', 's'] ] },
      { id: 'love', emoji: '❤️', label: '好きを伝えたい', kw: ['好き', '愛してる', '大好き', '愛情', '告白', 'ときめ', '惚れ'], p: [
        ["I can't stop thinking about you.", 'あなたのことが頭から離れないよ。', 'c'],
        ["I'm really into you.", 'あなたのこと、本気で好きなんだ。', 'c'],
        ['I love spending time with you.', 'あなたと過ごす時間が大好き。', 'g'],
        ['You make me so happy.', 'あなたといると本当に幸せ。', 'g'],
        ['I love you more than I can say.', '言葉にできないくらい愛してる。', 's'],
        ['I want to be with you for a long time.', 'これからもずっとあなたと一緒にいたい。', 's'] ] },
      { id: 'sorry', emoji: '🙇', label: '謝りたい', kw: ['ごめん', '謝', 'すまない', '悪かった', '反省'], p: [
        ['My bad, I\'m sorry!', 'ごめん、私が悪かった！', 'c'],
        ["Sorry I'm late!", '遅れてごめんね！', 'c'],
        ["I'm sorry I hurt your feelings.", '傷つけてしまってごめんね。', 'g'],
        ["I shouldn't have said that. I'm really sorry.", 'あんなこと言うべきじゃなかった。本当にごめん。', 'g'],
        ['I know I let you down, and I want to make it right.', 'がっかりさせたのは分かってる。ちゃんと埋め合わせたいと思ってる。', 's'] ] },
      { id: 'invite', emoji: '🍽️', label: '誘いたい（デート）', kw: ['誘', 'デート', '会おう', '遊', '行こう', 'ご飯', 'ごはん', '週末', '会える'], p: [
        ['Wanna grab dinner this weekend?', '今週末、ご飯行かない？', 'c'],
        ["Let's do something fun on Saturday!", '土曜日、何か楽しいことしようよ！', 'c'],
        ['Would you like to go for a walk together?', '一緒に散歩しない？', 'g'],
        ['I found a cozy café. Want to check it out with me?', '居心地のいいカフェを見つけたんだ。一緒に行ってみない？', 'g'],
        ["I'd love to take you somewhere special. Are you free this Friday?", '特別な場所に連れて行きたいな。今週の金曜は空いてる？', 's'] ] },
      { id: 'worry', emoji: '😟', label: '心配している', kw: ['心配', '大丈夫', '体調', '具合', '無理', '元気ない', '病気'], p: [
        ["You okay? You seem kind of down.", '大丈夫？ちょっと元気ないね。', 'c'],
        ['Did you eat anything today?', '今日、何か食べた？', 'c'],
        ["Are you feeling okay? Please don't push yourself.", '具合は大丈夫？無理しないでね。', 'g'],
        ["Let me know if there's anything I can do.", '私にできることがあったら教えてね。', 'g'],
        ["I'm worried about you. Is something on your mind?", 'あなたのことが心配なの。何か気になってることがある？', 's'] ] },
      { id: 'miss', emoji: '🌙', label: '会いたい・寂しい', kw: ['会いたい', '寂しい', 'さみしい', '恋しい', '離れ', '遠距離', 'そばにいたい'], p: [
        ['I miss you already!', 'もう会いたいよ！', 'c'],
        ["Can't wait to see you!", '会えるのが待ち遠しい！', 'c'],
        ['I wish you were here with me.', 'あなたがここにいてくれたらいいのに。', 'g'],
        ['I keep thinking about you today.', '今日はずっとあなたのことを考えてる。', 'g'],
        ["It's hard being apart from you. I miss you so much.", '離れているのは辛いよ。本当に会いたい。', 's'] ] },
      { id: 'praise', emoji: '✨', label: '褒めたい', kw: ['褒め', 'かっこいい', 'かわいい', '素敵', 'すてき', 'すごい', 'きれい', '尊敬', '誇り'], p: [
        ['You look amazing today!', '今日すごく素敵だね！', 'c'],
        ["I'm so proud of you!", 'あなたのこと、誇りに思うよ！', 'c'],
        ['I love your smile. It makes my day.', 'あなたの笑顔が大好き。それだけで一日が幸せになるよ。', 'g'],
        ["You're so thoughtful. I really admire that about you.", 'あなたはすごく思いやりがあるね。そういうところ尊敬してる。', 'g'],
        ["You're the most amazing person I know.", 'あなたは私が知る中で一番素晴らしい人だよ。', 's'] ] },
      { id: 'talk', emoji: '🤝', label: '話し合い・仲直り', kw: ['話し合', '仲直り', 'ケンカ', 'けんか', '喧嘩', '本音', '誤解', '気持ちを聞'], p: [
        ['Can we talk about it?', 'それについて話せる？', 'c'],
        ["Let's not fight. I hate when we're like this.", 'ケンカはやめよう。こうなるのは嫌だな。', 'c'],
        ['I want to hear your side of things.', 'あなたの考えも聞かせてほしい。', 'g'],
        ["I don't want to argue. I just want us to understand each other.", '言い争いたくないんだ。ただお互いを理解したいだけ。', 'g'],
        ["This relationship matters to me, so I want to work through this together.", '私たちの関係は大切だから、一緒に乗り越えたい。', 's'],
        ["I'm sorry for my part in this.", 'この件での私の悪かったところは謝るね。', 's'] ] },
      { id: 'daily', emoji: '🌅', label: 'おはよう・おやすみ', kw: ['おはよう', 'おやすみ', '朝', '夜', '寝', '眠', '挨拶'], p: [
        ['Good morning! Hope you slept well.', 'おはよう！ぐっすり眠れた？', 'c'],
        ['Sleep tight! Talk tomorrow.', 'ぐっすり寝てね！また明日話そう。', 'c'],
        ["Sweet dreams. I'm thinking of you.", 'いい夢を見てね。あなたのことを想ってるよ。', 'g'],
        ["Have a great day today. You'll do great!", '今日もいい一日を。きっとうまくいくよ！', 'g'],
        ["Goodnight. I'm so glad I get to share my days with you.", 'おやすみ。毎日をあなたと分かち合えて本当に嬉しいよ。', 's'] ] },
      { id: 'contact', emoji: '📱', label: '連絡・返信', kw: ['連絡', '返信', '遅れ', '電話', 'LINE', 'メッセージ', '既読'], p: [
        ["Sorry for the slow reply, I was swamped!", '返信遅くなってごめん、バタバタしてた！', 'c'],
        ['Call me when you get a chance.', '時間あるとき電話してね。', 'c'],
        ["I'll text you as soon as I get home.", '家に着いたらすぐ連絡するね。', 'g'],
        ["Can I call you tonight? I'd love to hear your voice.", '今夜電話してもいい？声が聞きたいな。', 'g'],
        ["I'd like to hear from you more often, if that's okay.", 'もう少し連絡をもらえたら嬉しいな、もしよければ。', 's'] ] },
      { id: 'honest', emoji: '💭', label: '不安・本音', kw: ['不安', '本音', '正直', '悩み', '打ち明け', '相談', '愚痴'], p: [
        ["Honestly, I've been feeling a bit anxious lately.", '正直、最近ちょっと不安なんだ。', 'c'],
        ['Can I vent for a sec?', 'ちょっと愚痴ってもいい？', 'c'],
        ["There's something I've been wanting to tell you.", 'ずっと伝えたかったことがあるんだ。', 'g'],
        ["I'm not great at putting my feelings into words, but I'll try.", '気持ちを言葉にするのは苦手だけど、頑張って伝えるね。', 'g'],
        ['I need your support right now. Can you just listen?', '今はあなたの支えが必要なんだ。ただ聞いてくれる？', 's'] ] },
      { id: 'celebrate', emoji: '🎂', label: 'お祝い・記念日', kw: ['誕生日', '記念日', 'おめでとう', 'お祝い', '祝', 'プレゼント'], p: [
        ["Happy birthday! Let's celebrate tonight!", '誕生日おめでとう！今夜お祝いしよう！', 'c'],
        ['Congrats! I knew you could do it!', 'おめでとう！あなたならできると思ってたよ！', 'c'],
        ['Happy anniversary. Every moment with you is a gift.', '記念日おめでとう。あなたと過ごす一瞬一瞬が贈り物だよ。', 'g'],
        ["I'm so lucky to have spent another year with you.", 'また一年あなたと過ごせて、本当に幸せ者だよ。', 's'] ] }
    ];
  // 会う場面ごとの実用フレーズ（予習プラン・言葉の検索で使用）: [英語, 日本語]
  const MEET = {
    meal: { label: '食事', emoji: '🍽️', p: [
      ["What are you in the mood for?", '何が食べたい気分？'],
      ["Everything looks so good. What do you recommend?", '全部おいしそう。おすすめは何？'],
      ["Can I try a bite of yours?", '一口もらってもいい？'],
      ["Do you want to share a few dishes?", 'いくつかシェアしない？'],
      ["This is delicious! Try it.", 'これおいしい！食べてみて。'],
      ["I'm stuffed. I can't eat another bite.", 'もうお腹いっぱい。一口も入らないよ。'],
      ["Is there anything you can't eat?", '食べられないものはある？'],
      ["I'll get this one. It's on me.", 'ここは私が払うよ。ごちそうする。'],
      ["Let's split the bill.", '割り勘にしよう。'],
      ["Could we get the check, please?", 'お会計をお願いします。'],
      ["Could I have a glass of water, please?", 'お水をいただけますか？'],
      ["Is this spicy?", 'これは辛いですか？'],
      ["What should we order for dessert?", 'デザートは何にしよう？'],
      ["Thank you for the lovely dinner.", '素敵なディナーをありがとう。'],
      ["Cheers! To us!", '乾杯！私たちに！'] ] },
    sight: { label: '観光', emoji: '🗺️', p: [
      ["Where do you want to go first?", 'まずどこに行きたい？'],
      ["Let's take a photo together.", '一緒に写真を撮ろう。'],
      ["Could you take a picture of us, please?", '私たちの写真を撮っていただけますか？'],
      ["How far is it from here?", 'ここからどのくらいですか？'],
      ["Shall we walk or take the train?", '歩く？それとも電車にする？'],
      ["This view is incredible.", 'この景色、本当に素敵。'],
      ["I've always wanted to come here.", 'ずっとここに来たかったんだ。'],
      ["Are you getting tired? Let's take a break.", '疲れてない？ちょっと休憩しよう。'],
      ["What's that building over there?", 'あそこの建物は何？'],
      ["Let's pick up a souvenir.", 'お土産を買おう。'],
      ["Which way is the station?", '駅はどっちですか？'],
      ["Hold my hand so we don't get lost.", 'はぐれないように手をつないでおこう。'],
      ["I'll show you my favorite spot.", 'お気に入りの場所を案内するね。'],
      ["Do you want to check that out?", 'あれ、見に行ってみる？'] ] },
    home: { label: '家で過ごす', emoji: '🏠', p: [
      ["Make yourself at home.", 'くつろいでね。'],
      ["Would you like something to drink?", '何か飲む？'],
      ["What do you feel like watching?", '何を観たい気分？'],
      ["Let's cook together tonight.", '今夜は一緒に料理しよう。'],
      ["Can you pass me the salt?", '塩を取ってもらえる？'],
      ["I love just relaxing with you like this.", 'こうやってあなたとのんびりするの、大好き。'],
      ["Do you want to play a game?", 'ゲームする？'],
      ["Are you comfortable? Do you need a blanket?", '快適？ブランケットいる？'],
      ["Let's do nothing today.", '今日は何もしないで過ごそう。'],
      ["I'll do the dishes.", '洗い物は私がやるね。'],
      ["Stay a little longer.", 'もう少しゆっくりしていって。'],
      ["I had such a cozy time with you.", 'あなたとすごく心地いい時間を過ごせたよ。'],
      ["Shall we order takeout?", '出前（テイクアウト）を頼もうか？'] ] },
    meet: { label: '再会・別れ際', emoji: '💞', p: [
      ["I missed you so much.", 'すごく会いたかったよ。'],
      ["It's so good to see you.", '会えて本当にうれしい。'],
      ["How was your trip?", '道中はどうだった？'],
      ["I can't believe it's already time to go.", 'もう帰る時間なんて信じられない。'],
      ["Text me when you get home.", '家に着いたら連絡してね。'],
      ["I'll miss you. See you soon!", '寂しくなるよ。また近いうちにね！'] ] }
  };

  // ロールプレイ台本。p=相手役のセリフ[英, 日]、m=あなたの返事（ja=言うべき内容, en=模範解答。複数あれば別解）
  const ROLEPLAYS = [
    { id: 'rp-order', scene: 'meal', title: 'レストランで注文する', situation: 'レストランで席についた。店員さんとのやりとり。', steps: [
      { who: '店員', p: ['Hi there! Are you ready to order?', 'ご注文はお決まりですか？'], m: { ja: 'まだ決まっていないので、もう少し時間がほしいと伝える', en: ['Not yet, could we have a few more minutes?', 'Could we have a few more minutes, please?'] } },
      { who: '店員', p: ['Of course. Can I get you something to drink in the meantime?', 'もちろんです。その間に飲み物はいかがですか？'], m: { ja: 'お水をお願いする', en: ['Could we have some water, please?', 'Water for both of us, please.'] } },
      { who: '店員', p: ['Great. Are you ready to order now?', 'ありがとうございます。ご注文はお決まりですか？'], m: { ja: 'パスタを頼み、辛いかどうか聞く', en: ["I'll have the pasta. Is it spicy?", 'Could I have the pasta? Is it spicy?'] } },
      { who: '店員', p: ["No, it's very mild. Anything else?", 'いいえ、とてもマイルドですよ。他にはいかがですか？'], m: { ja: 'それで全部。デザートはあとで頼むと伝える', en: ["That's all for now. We'll order dessert later.", "That's all, thank you. We'll get dessert later."] } },
      { who: '店員', p: ["Perfect. I'll bring that right out.", 'かしこまりました。すぐお持ちしますね。'] } ] },
    { id: 'rp-mealchat', scene: 'meal', title: '食事しながらおしゃべり', situation: '料理が運ばれてきた。恋人と楽しく食事中。', steps: [
      { who: '相手', p: ['This looks so good! What did you order?', 'すごくおいしそう！何を頼んだの？'], m: { ja: 'パスタを頼んだと伝え、一口食べるか聞く', en: ['I ordered the pasta. Do you want to try a bite?', 'I got the pasta. Want a bite?'] } },
      { who: '相手', p: ["Yes, please! Mmm, that's delicious. Do you want to try mine?", 'うん、ちょうだい！おいしい。私のも食べてみる？'], m: { ja: 'ぜひ食べたい、と答える', en: ["Yes, please! Wow, this is really good.", "I'd love to. Oh, this is so good!"] } },
      { who: '相手', p: ["I'm glad you like it. So, how was your week?", '気に入ってくれてよかった。今週はどうだった？'], m: { ja: '忙しかったけど、今日会えるのを楽しみにしていたと伝える', en: ['It was busy, but I was looking forward to seeing you today.', "It was a busy week, but I couldn't wait to see you."] } },
      { who: '相手', p: ["Aw, that's so sweet. I've been looking forward to it too.", 'うれしい。私も楽しみにしてたよ。'], m: { ja: '乾杯しよう、と言う', en: ["Let's make a toast. Cheers!", 'Cheers to us!'] } } ] },
    { id: 'rp-bill', scene: 'meal', title: 'お会計をする', situation: '食事が終わった。お会計の場面。', steps: [
      { who: '店員', p: ['How was everything?', 'いかがでしたか？'], m: { ja: 'とてもおいしかったと伝える', en: ['It was delicious, thank you.', 'Everything was delicious, thank you.'] } },
      { who: '店員', p: ["I'm glad to hear that. Would you like anything else?", 'それはよかったです。他にご注文はありますか？'], m: { ja: 'お会計をお願いする', en: ['Could we have the check, please?', 'Check, please.'] } },
      { who: '相手', p: ['Let me pay this time.', '今回は私が払うよ。'], m: { ja: '割り勘にしようと提案する', en: ["Let's split the bill.", 'How about we split it?'] } },
      { who: '相手', p: ['Okay, if you insist. Thanks for tonight!', 'じゃあそうしよう。今夜はありがとう！'], m: { ja: 'こちらこそ、素敵な夜だったと伝える', en: ['Thank you too. I had a wonderful evening.', 'Thank you, I had a lovely time tonight.'] } } ] },
    { id: 'rp-photo', scene: 'sight', title: '写真をお願いする', situation: '観光地で、通りがかりの人に写真を頼む。', steps: [
      { who: '通行人', p: ['Excuse me, do you need any help?', 'あの、何かお困りですか？'], m: { ja: '写真を撮ってもらえないか頼む', en: ['Could you take a picture of us, please?', 'Would you mind taking a photo of us?'] } },
      { who: '通行人', p: ["Sure! Say cheese! ... How's this?", 'もちろん！はいチーズ…これでどう？'], m: { ja: 'お礼を言って、もう一枚お願いする', en: ['Thank you! Could you take one more?', "That's great, thanks! One more, please?"] } },
      { who: '通行人', p: ['No problem. Is this your first time here?', 'どういたしまして。ここは初めてですか？'], m: { ja: '今日が初めてだと答える', en: ["It's our first time here.", 'This is our first time visiting.'] } },
      { who: '通行人', p: ['Enjoy your day!', '楽しんでくださいね！'], m: { ja: 'お礼を言って返す', en: ['Thank you, you too!', 'Thanks! Have a great day!'] } } ] },
    { id: 'rp-directions', scene: 'sight', title: '道を尋ねる', situation: '観光中に道に迷った。', steps: [
      { who: '相手', p: ["I think we're lost. Can you check the map?", '迷ったみたい。地図を確認してくれる？'], m: { ja: '誰かに道を聞こうと提案する', en: ["Let's ask someone for directions.", "Let's ask someone which way the station is."] } },
      { who: '通行人', p: ['Hi! Can I help you?', 'こんにちは！何かお手伝いしましょうか？'], m: { ja: '駅への行き方を尋ねる', en: ['Excuse me, how do I get to the station?', 'Could you tell us how to get to the station?'] } },
      { who: '通行人', p: ['Go straight for two blocks, then turn left.', '2ブロックまっすぐ行って、左に曲がってください。'], m: { ja: '確認して、遠いかどうか聞く', en: ['Straight two blocks, then left. Is it far?', 'Two blocks, then turn left. How far is it?'] } },
      { who: '通行人', p: ["It's about a five-minute walk.", '歩いて5分くらいですよ。'], m: { ja: 'お礼を言う', en: ['Thank you so much for your help!', "Thanks a lot, you've been very helpful!"] } } ] },
    { id: 'rp-sightdate', scene: 'sight', title: '観光デート中の会話', situation: '景色のいい場所を二人で歩いている。', steps: [
      { who: '相手', p: ['Wow, look at this view!', 'わあ、この景色を見て！'], m: { ja: '本当に素晴らしいと同意し、来られてうれしいと伝える', en: ["It's incredible. I'm so glad we came.", "This view is amazing. I'm so happy we're here."] } },
      { who: '相手', p: ['Are you getting tired? Do you want to take a break?', '疲れてない？ちょっと休憩する？'], m: { ja: '少し疲れたので休みたいと答える', en: ["A little. Let's take a break.", "Yes, a little tired. Let's sit down for a while."] } },
      { who: '相手', p: ["There's a café over there. Want to go?", 'あそこにカフェがあるよ。行く？'], m: { ja: 'いいね、温かい飲み物が飲みたいと答える', en: ["Sounds good! I'd love something warm to drink.", 'Great idea. I want something hot to drink.'] } },
      { who: '相手', p: ["Let's get a souvenir after that, okay?", 'そのあとお土産を買おうね。'], m: { ja: 'お揃いのお土産を買おうと提案する', en: ["Okay! Let's pick out matching souvenirs.", 'Sure! Why don\'t we get matching ones?'] } } ] },
    { id: 'rp-homerelax', scene: 'home', title: '家でくつろぐ', situation: '恋人の家に着いた。ゆっくり過ごす夜。', steps: [
      { who: '相手', p: ['Come on in. Make yourself at home!', 'どうぞ入って。くつろいでね！'], m: { ja: 'お礼を言って、素敵な部屋だと伝える', en: ['Thank you! Your place is so nice.', 'Thanks for having me! I love your place.'] } },
      { who: '相手', p: ['Would you like something to drink?', '何か飲む？'], m: { ja: 'コーヒーをお願いする', en: ['Coffee would be great, thank you.', "I'd love a coffee, please."] } },
      { who: '相手', p: ['What do you feel like watching tonight?', '今夜は何を観たい気分？'], m: { ja: 'コメディ映画が観たいと答える', en: ['I feel like watching a comedy.', "Let's watch a funny movie."] } },
      { who: '相手', p: ['Sounds perfect. Are you comfortable? Need a blanket?', 'いいね。快適？ブランケットいる？'], m: { ja: '大丈夫、あなたの隣にいたいと伝える', en: ["I'm fine. I just want to sit next to you.", "I'm comfortable. I like being next to you."] } } ] },
    { id: 'rp-homecook', scene: 'home', title: '一緒に料理する', situation: '二人でキッチンに立って夕食を作る。', steps: [
      { who: '相手', p: ["Let's cook together tonight. What should we make?", '今夜は一緒に料理しよう。何を作る？'], m: { ja: 'パスタを作ろうと提案する', en: ['How about pasta?', "Let's make pasta."] } },
      { who: '相手', p: ['Great! Can you chop the onions?', 'いいね！玉ねぎを切ってくれる？'], m: { ja: '快く引き受け、包丁はどこか聞く', en: ["Sure! Where's the knife?", 'Of course. Where do you keep the knives?'] } },
      { who: '相手', p: ["It's in the second drawer. Be careful!", '2段目の引き出しだよ。気をつけてね！'], m: { ja: '気をつけると言い、塩を取ってもらうよう頼む', en: ['I will. Can you pass me the salt?', "I'll be careful. Could you pass the salt?"] } },
      { who: '相手', p: ['Here you go. Wow, it smells amazing!', 'はいどうぞ。わあ、すごくいい匂い！'], m: { ja: '食べるのが待ちきれないと伝える', en: ["I can't wait to eat it.", "I can't wait for dinner!"] } } ] },
    { id: 'rp-reunion', scene: 'meet', title: '待ち合わせで再会', situation: 'ずっと会いたかった恋人と、ついに再会。', steps: [
      { who: '相手', p: ['Hey! You made it! I missed you so much.', 'やあ！来たね！すごく会いたかったよ。'], m: { ja: '自分も会いたかったと返す', en: ['I missed you too! It\'s so good to see you.', 'I missed you so much too!'] } },
      { who: '相手', p: ['How was your trip?', '道中はどうだった？'], m: { ja: '少し長かったけど、会えて元気が出たと答える', en: ['It was a little long, but seeing you made me feel better.', "A bit long, but I'm so happy to see you."] } },
      { who: '相手', p: ['Are you hungry? Want to get something to eat?', 'お腹すいてる？何か食べに行く？'], m: { ja: 'お腹ぺこぺこだと答える', en: ["I'm starving. Let's eat!", "Yes, I'm really hungry."] } },
      { who: '相手', p: ["Let's go. I know a great place.", '行こう。いいお店を知ってるんだ。'], m: { ja: '楽しみだと伝える', en: ["I can't wait!", "Sounds great. I'm looking forward to it."] } } ] },
    { id: 'rp-goodbye', scene: 'meet', title: '別れ際のあいさつ', situation: '楽しい時間が終わり、お別れの時間。', steps: [
      { who: '相手', p: ["I can't believe it's already time to go.", 'もう帰る時間なんて信じられない。'], m: { ja: 'あっという間だったと同意する', en: ['Me neither. Time went by so fast.', 'I know. It went by so quickly.'] } },
      { who: '相手', p: ['Thank you for coming. I had such a wonderful time.', '来てくれてありがとう。本当に素晴らしい時間だった。'], m: { ja: 'こちらこそ、一緒にいられて幸せだったと伝える', en: ['Me too. I was so happy to be with you.', 'Thank you too. I had the best time with you.'] } },
      { who: '相手', p: ['Text me when you get home, okay?', '家に着いたら連絡してね。'], m: { ja: '着いたらすぐ連絡すると約束する', en: ["I will. I'll text you as soon as I get home.", "I promise. I'll message you when I arrive."] } },
      { who: '相手', p: ["I'll miss you. See you soon!", '寂しくなるよ。またすぐ会おうね！'], m: { ja: '自分も寂しい、また近いうちに会おうと言う', en: ["I'll miss you too. See you soon!", 'Me too. Let\'s meet again soon!'] } } ] }
  ];

  // 話題カード（会話が途切れたときの質問）。level: 1=軽い 2=ふつう 3=深い
  const TOPICS = [
    [1, "What's the best thing you ate this week?", '今週食べたものの中で一番おいしかったものは？'],
    [1, "What's your favorite way to spend a rainy day?", '雨の日の一番好きな過ごし方は？'],
    [1, "If you could only eat one food for a week, what would it be?", '1週間1種類の食べ物しか食べられないなら、何にする？'],
    [1, "What song have you had on repeat lately?", '最近ずっとリピートしている曲は？'],
    [1, "Are you a morning person or a night person?", '朝型？夜型？'],
    [1, "What's your go-to comfort food?", '疲れたときに食べたくなるものは？'],
    [1, "What's the last movie or show you really enjoyed?", '最近観て本当に楽しめた映画やドラマは？'],
    [1, "Cats or dogs? Why?", '猫派？犬派？どうして？'],
    [1, "What's something small that made you smile today?", '今日、思わず笑顔になった小さな出来事は？'],
    [1, "Is there a place nearby you'd like to explore together?", 'この近くで、一緒に行ってみたい場所はある？'],
    [1, "What's your favorite season, and why?", '好きな季節とその理由は？'],
    [1, "What's the funniest thing that happened to you recently?", '最近あった一番おもしろい出来事は？'],
    [2, "What are you looking forward to this year?", '今年楽しみにしていることは？'],
    [2, "What did you want to be when you were a kid?", '子どものころ、何になりたかった？'],
    [2, "Is there a skill you'd love to learn?", '身につけたいスキルはある？'],
    [2, "What's your favorite memory of us so far?", '私たちのこれまでで一番好きな思い出は？'],
    [2, "Is there a place you've always wanted to visit?", 'ずっと行ってみたい場所はある？'],
    [2, "How do you like to relax after a long day?", '長い一日のあと、どうやってリラックスする？'],
    [2, "What's something you find interesting about my culture?", '私の国の文化で、おもしろいなと思うことは？'],
    [2, "What does a perfect day off look like for you?", 'あなたにとって理想の休日は？'],
    [2, "What's one thing you'd like us to do together this year?", '今年、二人でやりたいことを一つ挙げるなら？'],
    [2, "What's your favorite thing about your job?", '仕事の好きなところは？'],
    [2, "Is there a family tradition you love?", '好きな家族の習慣はある？'],
    [3, "What makes you feel most loved?", 'どんなときに一番愛されていると感じる？'],
    [3, "What's something you're proud of but rarely talk about?", '誇りに思っているのに、あまり話さないことは？'],
    [3, "Where do you see us in five years?", '5年後、私たちはどうなっていると思う？'],
    [3, "Is there anything I do that makes you feel supported?", '私がしていることで、支えられていると感じることはある？'],
    [3, "Is there something you've been worried about lately?", '最近、気がかりなことはある？'],
    [3, "What do you value most in a relationship?", '二人の関係で一番大切にしていることは？'],
    [3, "Was there a moment that changed the way you see life?", '人生の見え方が変わった出来事はある？'],
    [3, "Is there something you wish I understood better about you?", 'もっと私に理解してほしいと思っていることはある？'],
    [3, "What does a happy life mean to you?", 'あなたにとって幸せな人生とは？'],
    [3, "How can I support you better?", 'どうすれば、もっとあなたを支えられる？']
  ];

  // 会話をつなぐ相づち・聞き返し [英, 日]
  const CHATTER = [
    ['Really? Tell me more!', 'そうなの？もっと聞かせて！'],
    ["That's interesting!", 'それはおもしろいね！'],
    ['Me too!', '私もだよ！'],
    ['I see what you mean.', '言いたいことは分かるよ。'],
    ['What about you?', 'あなたはどう？'],
    ['Why is that?', 'それはどうして？'],
    ['How did that make you feel?', 'そのときどんな気持ちだった？'],
    ['That sounds amazing!', 'それは素敵だね！'],
    ['No way! Seriously?', 'うそ！本当に？'],
    ['I never knew that about you.', 'あなたのそういうところ、知らなかった。']
  ];

  window.CONTENT = { SCENES, MEET, ROLEPLAYS, TOPICS, CHATTER };
})();
