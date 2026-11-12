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
      ["文法・表現パターン", "I would have liked to come.", "行きたかったんだけどね。（I would have liked to ～：～したかったんだけどね）", "I would have liked to see you this weekend."],
      // ---- 文法ノート「I thought ... would be ... to ～」（2026-11-06） ----
      ["文法・表現パターン", "I thought it would be hard to get used to life in Japan.", "日本の生活に慣れるのは大変だと思っていた。（I thought it would be ＋ 形容詞 ＋ to ～：～するのは…だろうと思っていた）"],
      ["文法・表現パターン", "I thought German would be hard to learn.", "ドイツ語は覚えるのが難しいと思ってた。（hard to learn のあとに it を付けない）"],
      ["文法・表現パターン", "I thought it would be scary, but it was really fun.", "怖いと思ってたけど、すごく楽しかった。（予想とのギャップ）"],
      ["文法・表現パターン", "I thought it would be stressful to talk in English, but I'm fine with you.", "英語で話すのは緊張すると思ってたけど、あなたとだと平気。"],
      ["文法・表現パターン", "I thought it would be hard to talk about, but I'm glad we did.", "話しにくいと思ってたけど、話せてよかった。（talk about のあとに it を付けない）"],
      ["文法・表現パターン", "I didn't think it would be this fun.", "こんなに楽しいとは思わなかった。（I didn't think ～ would：～とは思わなかった）"],
      ["文法・表現パターン", "I didn't think you would remember my birthday.", "誕生日を覚えててくれるなんて思わなかった。"],
      ["文法・表現パターン", "It was easier than I thought.", "思ったより簡単だった。（比較級 ＋ than I thought：思ったより～）"],
      // ---- 文法ノート「比較級」「頻度」（2026-11-06） ----
      ["文法・表現パターン", "This place is cheaper than the one near the station.", "ここ、駅の近くの店より安いね。（短い形容詞 ＋ -er ＋ than）"],
      ["文法・表現パターン", "This restaurant is more expensive than I expected.", "このレストラン、思ってたより高い。（長い形容詞は more ～）"],
      ["文法・表現パターン", "I feel much better today.", "今日はだいぶ良くなった。（good / well → better）"],
      ["文法・表現パターン", "I like summer better than winter.", "冬より夏の方が好き。（like A better than B）"],
      ["文法・表現パターン", "Your English is much better than my German.", "あなたの英語は、私のドイツ語よりずっと上手。（much ＋ 比較級）"],
      ["文法・表現パターン", "It's getting colder and colder.", "だんだん寒くなってきたね。（比較級 and 比較級）"],
      ["文法・表現パターン", "The view here is more beautiful than the one at the temple.", "ここからの景色の方が、お寺からの景色より綺麗。"],
      ["文法・表現パターン", "This cafe isn't as crowded as that one.", "このカフェは、あっちほど混んでない。（not as ～ as：～ほど…ではない）"],
      ["文法・表現パターン", "I usually cook at home on weekdays.", "平日はたいてい家で料理する。（usually：たいてい）"],
      ["文法・表現パターン", "I rarely eat breakfast.", "朝ごはんはめったに食べない。（rarely：めったに〜ない）"],
      ["文法・表現パターン", "I'm usually busy on weekdays.", "平日はたいてい忙しい。（be動詞のあとに頻度の副詞）"],
      ["文法・表現パターン", "I go to the gym twice a week.", "週に2回ジムに行く。（twice：2回）"],
      ["文法・表現パターン", "How often do you talk to your family?", "家族とはどのくらいの頻度で話す？（How often：どのくらいの頻度で）"],
      ["文法・表現パターン", "I sometimes watch German movies.", "ときどきドイツの映画を見る。（sometimes：ときどき）"],
      ["文法・表現パターン", "I never eat spicy food.", "辛いものは全然食べない。（never だけで否定）"],
      ["文法・表現パターン", "Let's go out together every weekend.", "毎週末、一緒に出かけようね。（every ＋ 単数名詞）"],
      // ---- 文法ノート「頻度」その他の言い方・barely（2026-11-06） ----
      ["文法・表現パターン", "I hardly ever eat out.", "外食はほとんどしない。（hardly ever：めったに〜ない）"],
      ["文法・表現パターン", "I barely slept last night.", "昨日はほとんど寝てない。（barely：量が少ない）"],
      ["文法・表現パターン", "I barely made the train.", "ぎりぎり電車に間に合った。（barely：かろうじて）"],
      ["文法・表現パターン", "We text each other all the time.", "しょっちゅうメッセージを送り合ってるね。（all the time：しょっちゅう）"],
      ["文法・表現パターン", "I go to the movies alone once in a while.", "たまに、一人で映画を見に行く。（once in a while：たまに）"],
      ["文法・表現パターン", "I could barely hear you.", "ほとんど聞こえなかった。（could barely：ほとんど〜できなかった）"],
      // ---- 文法ノート「現在完了」「過去完了」「hope / wish」（2026-11-07） ----
      ["文法・表現パターン", "I've never been to Germany.", "ドイツには行ったことがない。（have been to：行ったことがある）"],
      ["文法・表現パターン", "I've just finished work.", "ちょうど仕事が終わったところ。（have just ＋ 過去分詞）"],
      ["文法・表現パターン", "Have you ever tried natto?", "納豆、食べたことある？（Have you ever ～?：〜したことある？）"],
      ["文法・表現パターン", "I've lived in Tokyo for five years.", "東京に5年住んでいる。（for ＋ 期間）"],
      ["文法・表現パターン", "She has lived in Japan since last April.", "彼女は去年の4月から日本に住んでいる。（since ＋ 始まった時点）"],
      ["文法・表現パターン", "I saw the movie yesterday.", "その映画、昨日見たよ。（yesterday があるので過去形）"],
      ["文法・表現パターン", "I haven't had dinner yet.", "まだ夕ごはん食べてない。（not ～ yet：まだ〜していない）"],
      ["文法・表現パターン", "I've been thinking about you a lot lately.", "最近ずっとあなたのことを考えてた。（have been ＋ ～ing）"],
      ["文法・表現パターン", "When I got to the station, the train had already left.", "駅に着いたとき、電車はもう出てしまっていた。（had ＋ 過去分詞）"],
      ["文法・表現パターン", "I had never eaten sushi before I came to Japan.", "日本に来るまで、お寿司を食べたことがなかった。（had never ＋ 過去分詞）"],
      ["文法・表現パターン", "Sorry, I'd forgotten about it.", "ごめん、すっかり忘れてた。（I'd ＝ I had）"],
      ["文法・表現パターン", "If I had known, I would've come earlier.", "知っていたら、もっと早く来たのに。（If I had ＋ 過去分詞）"],
      ["文法・表現パターン", "I hadn't realized it was so late.", "こんなに遅いって気づかなかった。（hadn't realized）"],
      ["文法・表現パターン", "We had known each other for a year before we started dating.", "付き合う前に、1年知り合いだった。（had ＋ 過去分詞 ＋ for）"],
      ["文法・表現パターン", "When I got home, she had already gone to bed.", "家に帰ったとき、彼女はもう寝ていた。（had already ＋ 過去分詞）"],
      ["文法・表現パターン", "The train has left! Let's wait for the next one.", "電車、もう出ちゃった！次のを待とう。（今の話は現在完了）"],
      ["文法・表現パターン", "I hope so!", "そうだといいね！（so＝相手が言った内容）"],
      ["文法・表現パターン", "I hope not.", "そうならないといいな。（I don't hope so. は ×）"],
      ["文法・表現パターン", "I hope so too.", "私もそう願ってる。（too は文末）"],
      ["文法・表現パターン", "I hope you feel better soon.", "早く良くなるといいな。（I hope ＋ 現在形）"],
      ["文法・表現パターン", "I wish you were here.", "あなたがここにいたらいいのに。（I wish ＋ 過去形：無理だけど）"],
      ["文法・表現パターン", "I hope we can go to Germany together someday.", "いつか一緒にドイツに行けたらいいな。（hope：実現しそうな願い）"],
      ["文法・表現パターン", "I wish I could see you today.", "今日会えたらいいのに。（会えないと分かっている）"],
      ["文法・表現パターン", "I'm hoping we can meet next week.", "来週会えたらいいなと思ってる。（控えめな期待）"],
      ["文法・表現パターン", "Fingers crossed for your presentation!", "プレゼン、うまくいくように祈ってる！"],
      ["文法・表現パターン", "I hope you have a great day!", "素敵な一日になりますように！"],
      ["文法・表現パターン", "I wish you the best of luck.", "幸運を祈ってるよ。（I wish you ＋ 名詞）"],
      ["文法・表現パターン", "I'm sure it will.", "きっとそうなるよ。"],
      ["文法・表現パターン", "Let's hope so.", "そうだといいね。（二人で一緒に願う）"],
      // ---- 文法ノート「get ＋ 形容詞」（2026-11-07） ----
      ["文法・表現パターン", "I'm getting hungry. Let's eat something.", "お腹すいてきた。何か食べよう。（be getting ＋ 形容詞：〜になってきた）"],
      ["文法・表現パターン", "It's getting late. I should go home.", "遅くなってきた。そろそろ帰らなきゃ。（It's getting ＋ 形容詞）"],
      ["文法・表現パターン", "Your English is getting better.", "英語、上手になってきてるね。（get better：良くなる）"],
      ["文法・表現パターン", "Please don't get upset. I just want to talk.", "気を悪くしないでね。ただ話したいだけなの。（get upset）"],
      ["文法・表現パターン", "I always get nervous before I meet your friends.", "あなたの友達に会う前は、いつも緊張しちゃう。（get nervous）"],
      ["文法・表現パターン", "I get lonely when I don't hear from you.", "連絡がないと寂しくなる。（get lonely）"],
      ["文法・表現パターン", "The movie was long, so I got bored.", "映画が長くて、退屈しちゃった。（get bored：人が退屈する）"],
      ["文法・表現パターン", "I got lost on my way to the cafe.", "カフェに行く途中で道に迷った。（get lost）"],
      ["文法・表現パターン", "I'm getting used to life in Japan.", "日本の生活に慣れてきた。（get used to ～：〜に慣れる）"],
      ["文法・表現パターン", "I'm getting ready. I'll be there in 10 minutes.", "今準備中。10分で行くね。（get ready：準備する）"],
      // ---- 文法ノート「There has / have been」（2026-11-07） ----
      ["文法・表現パターン", "There has been a lot of rain this week.", "今週は雨が多いね。（There has been ＋ 数えられない名詞）"],
      ["文法・表現パターン", "There have been some changes at my work.", "職場でいくつか変化があったんだ。（There have been ＋ 複数）"],
      ["文法・表現パターン", "Has there been any news?", "何か知らせはあった？（Has there been ～?）"],
      ["文法・表現パターン", "There have been a lot of tourists in Kyoto lately.", "最近、京都は観光客が多いね。（lately：最近）"],
      ["文法・表現パターン", "There was an accident near the station yesterday.", "昨日、駅の近くで事故があった。（yesterday があるので過去形）"],
      ["文法・表現パターン", "I think there's been a misunderstanding.", "誤解があったみたい。（there's been ＝ there has been）"],
      ["文法・表現パターン", "There haven't been any problems so far.", "今のところ、問題は何もないよ。（so far：今のところ）"],
      ["文法・表現パターン", "There has never been a day I didn't think about you.", "あなたのことを考えなかった日は一日もないよ。"],
      ["文法・表現パターン", "There's been a change of plans.", "予定が変わったんだ。（決まり文句）"],
      // ---- 文法ノート「リンキング（音のつながり）」（2026-11-08） ----
      ["音のつながり（リンキング）", "Check it out!", "見てみて！（チェキラウ：子音＋母音がつながる）"],
      ["音のつながり（リンキング）", "Can I ask you something?", "ちょっと聞いてもいい？（キャナイ・アスキュー）"],
      ["音のつながり（リンキング）", "I'll pick you up at the station.", "駅まで迎えに行くね。（ピッキュアップ）"],
      ["音のつながり（リンキング）", "Did you eat yet?", "もう食べた？（ディジュ：d＋you → ジュ）"],
      ["音のつながり（リンキング）", "Nice to meet you.", "はじめまして。（ミーチュ：t＋you → チュ）"],
      ["音のつながり（リンキング）", "What do you want to do today?", "今日何したい？（ワダヤ ワナ ドゥ）"],
      ["音のつながり（リンキング）", "Let me think.", "ちょっと考えさせて。（レミスィンク）"],
      ["音のつながり（リンキング）", "See you next time!", "また次回ね！（ネクスタイム：前の t が消える）"],
      ["音のつながり（リンキング）", "I have a lot of things to do.", "やることがたくさんある。（アラロヴ）"],
      ["音のつながり（リンキング）", "Can you pass me the salt and pepper?", "塩とこしょう取ってくれる？（ソルトゥンペッパー）"],
      // ---- 文法ノート「よくある小さなミス」（2026-11-09） ----
      ["文法・表現パターン", "I played \"Over the Rainbow\" today.", "今日「虹の彼方に」を弾いた。（過去形・曲名に the を付けない）"],
      ["文法・表現パターン", "My favorite song is \"Let It Be\".", "好きな曲は「レット・イット・ビー」。（曲名に the を付けない）"],
      ["文法・表現パターン", "I still can't play it very well.", "まだうまく弾けない。（still は can't の前）"],
      ["文法・表現パターン", "Thank you for asking.", "聞いてくれてありがとう。（自然な英語）"],
      ["文法・表現パターン", "I like this song, but I can't sing it.", "この曲好きだけど、歌えない。（目的語 it を忘れない）"],
      ["文法・表現パターン", "I'm still practicing.", "まだ練習中なんだ。（still：まだ続いている）"],
      ["文法・表現パターン", "I practiced the piano for two hours yesterday.", "昨日ピアノを2時間練習した。（yesterday → 過去形）"],
      // ---- 文法ノート「for の使い方」（2026-11-10） ----
      ["文法・表現パターン", "I'm staying in Kyoto for three days.", "京都に3日間滞在する。（for ＋ 期間）"],
      ["文法・表現パターン", "I have water for only a week.", "1週間分しか水がない。（for only ＋ 期間：〜分しかない）"],
      ["文法・表現パターン", "Let's go out for dinner.", "夕食を食べに出かけよう。（for ＋ 目的）"],
      ["文法・表現パターン", "This is for you.", "これ、あなたに。（for ＋ 受け取る相手）"],
      ["文法・表現パターン", "English is still hard for me.", "英語はまだ私には難しい。（for ＋ 人：〜にとって）"],
      ["文法・表現パターン", "I'm sorry for being late.", "遅れてごめん。（sorry for ＋ ～ing）"],
      ["文法・表現パターン", "I want to talk to you about our trip.", "旅行のことで話したいことがあるんだ。（to：相手、about：話題）"],
      ["文法・表現パターン", "I'll wait for you at the station.", "駅で待ってるね。（wait for：〜を待つ）"],
      ["文法・表現パターン", "I hope we can live together someday.", "いつか一緒に暮らせたらいいな。（someday：いつか・遠い未来）"],
      ["文法・表現パターン", "I sometimes cook German food.", "ときどきドイツ料理を作る。（sometimes：ときどき＝頻度）"],
      ["文法・表現パターン", "Let's have lunch sometime next week.", "来週のどこかでランチしよう。（sometime：〜のどこかで）"],
      ["文法・表現パターン", "One day, I got lost in Kyoto.", "ある日、京都で道に迷ったんだ。（one day：ある日＝過去）"],
      ["文法・表現パターン", "I saw a great movie the other day.", "このあいだ、いい映画を見たよ。（the other day：先日）"],
      ["文法・表現パターン", "Let's do it another day.", "また別の日にしよう。（another day：別の日に＝未来）"],
      ["文法・表現パターン", "One day, I'll visit your hometown.", "いつか、あなたの地元に行くね。（one day：いつか＝未来）"],
      ["文法・表現パターン", "I once lived in Osaka.", "昔、大阪に住んでいたことがある。（once：かつて）"],
      ["文法・表現パターン", "Let's go to Germany together one of these days.", "近いうちに一緒にドイツに行こうね。（one of these days：近いうちに）"],
      ["文法・表現パターン", "Call me sometime.", "そのうち電話してね。（sometime：そのうち）"],
      ["文法・表現パターン", "It's been a while! How have you been?", "久しぶり！元気にしてた？（It's been a while：久しぶり）"],
      ["文法・表現パターン", "I haven't done this in a while.", "これやるの久しぶりなんだよね。（haven't ＋ 過去分詞 ＋ in a while）"],
      ["文法・表現パターン", "I went back to my hometown for the first time in three years.", "3年ぶりに地元に帰った。（for the first time in ＋ 期間）"],
      ["文法・表現パターン", "It's been five years since I came here.", "ここに来るのは5年ぶり。（It's been ＋ 期間 ＋ since ＋ 過去形）"],
      ["文法・表現パターン", "It's been a while since I had sushi.", "お寿司は久しぶりに食べるよ。（It's been a while since ＋ 過去形）"],
      ["文法・表現パターン", "I had ramen for the first time in a while.", "久しぶりにラーメンを食べた。（for the first time in a while）"],
      ["文法・表現パターン", "How long has it been since we last met?", "最後に会ってからどのくらいぶりだっけ？（How long has it been since ～?）"],
      ["文法・表現パターン", "It's so good to see you again after so long.", "久しぶりに会えて本当にうれしい。（after so long：こんなに長くたって）"],
      ["文法・表現パターン", "I haven't had sushi in ages!", "お寿司、すごく久しぶり！（in ages：ずいぶん長いこと）"],
      ["文法・表現パターン", "I haven't spoken German in years.", "ドイツ語を話すのは久しぶり。（in years：何年も）"],
      ["文法・表現パターン", "I can't stand the heat in Japan.", "日本の暑さには耐えられない。（hot → heat：名詞）"],
      ["文法・表現パターン", "It's so hot today.", "今日はすごく暑い。（hot：形容詞）"],
      ["文法・表現パターン", "I can't stand the cold.", "寒さが苦手。（cold は形容詞も名詞も同じ形）"],
      ["文法・表現パターン", "I caught a cold.", "風邪をひいた。（a cold：風邪）"],
      ["文法・表現パターン", "The humidity is the worst part of summer here.", "ここの夏は湿気が一番つらい。（humid → humidity）"],
      ["文法・表現パターン", "I'm so hungry. Let's eat.", "すごくお腹すいた。食べよう。（hungry：形容詞／hunger：名詞）"],
      ["文法・表現パターン", "I love the warmth of your hugs.", "あなたのハグのぬくもりが大好き。（warm → warmth）"],
      ["文法・表現パターン", "Your happiness is important to me.", "あなたの幸せは私にとって大切。（happy → happiness）"],
      ["文法・表現パターン", "I'm scared of the dark.", "暗いところが怖い。（the dark：暗やみ）"],
      ["文法・表現パターン", "Tell me the truth.", "本当のことを言って。（true → truth）"],
      ["文法・表現パターン", "I just want some peace and quiet.", "ただ静かに過ごしたい。（peace and quiet：静かな時間）"],
      ["文法・表現パターン", "She's been to Japan twice.", "彼女は日本に2回来たことがある。（She's ＝ She has：後ろが been）"],
      ["文法・表現パターン", "She's busy today.", "彼女は今日忙しい。（She's ＝ She is：後ろが形容詞）"],
      ["文法・表現パターン", "It's been a while.", "しばらくたったね（久しぶり）。（It's ＝ It has：後ろが been）"],
      ["文法・表現パターン", "It's 3 o'clock.", "3時だよ。（It's ＝ It is／o'clock ＝ of the clock）"],
      ["文法・表現パターン", "She's gone.", "彼女はもう行っちゃった。（She's ＝ She has：後ろが gone）"],
      ["文法・表現パターン", "I'd love to meet your family.", "ぜひあなたの家族に会いたい。（I'd ＝ I would：後ろが原形）"],
      ["文法・表現パターン", "I'd never been to Kyoto before.", "それまで京都に行ったことがなかった。（I'd ＝ I had：後ろが been）"],
      ["文法・表現パターン", "You'd better hurry.", "急いだほうがいいよ。（You'd better ＝ You had better）"],
      ["文法・表現パターン", "Where'd you go yesterday?", "昨日どこ行ったの？（Where'd ＝ Where did）"],
      ["文法・表現パターン", "Let's grab lunch.", "お昼食べに行こう。（Let's ＝ Let us）"],
      ["文法・表現パターン", "I won't tell anyone.", "誰にも言わないよ。（won't ＝ will not）"],
      ["文法・表現パターン", "I gotta go. Talk to you later!", "もう行かなきゃ。またあとでね！（gotta ＝ have got to）"],
      ["文法・表現パターン", "I can't think of his name.", "彼の名前が思い出せない。（think of：ポンと浮かぶ）"],
      ["文法・表現パターン", "I need some time to think about it.", "少し考える時間がほしい。（think about：じっくり考える）"],
      ["文法・表現パターン", "I'm thinking of visiting Germany next year.", "来年ドイツに行こうかなと思ってる。（thinking of ～ing：考え中の予定）"],
      ["文法・表現パターン", "What do you think of my English?", "私の英語どう思う？（What do you think of ～?）"],
      ["文法・表現パターン", "What are you thinking about?", "何考えてるの？（thinking about：あれこれ考える）"],
      ["文法・表現パターン", "I can't think of a good idea.", "いい案が思いつかない。（think of：思いつく）"],
      ["文法・表現パターン", "I'm thinking of you.", "あなたのことを想ってるよ。（Thinking of you. だけでもOK）"],
      ["文法・表現パターン", "I'll think about it and let you know.", "考えて、また連絡するね。（think about：検討する）"],
      ["文法・表現パターン", "Of course I remember!", "もちろん覚えてるよ！（覚えてる＝現在形 remember）"],
      ["文法・表現パターン", "Sorry, I don't remember that.", "ごめん、それ覚えてない。（don't remember：記憶にない）"],
      ["文法・表現パターン", "I can't remember the name of the restaurant.", "レストランの名前が思い出せない。（can't remember：出てこない）"],
      ["文法・表現パターン", "Oh, now I remember! It was that small cafe.", "あ、思い出した！あの小さいカフェだ。（Now I remember!：思い出した）"],
      ["文法・表現パターン", "This song reminds me of you.", "この曲を聞くとあなたを思い出す。（remind 人 of ～）"],
      ["文法・表現パターン", "Remember to bring your passport.", "パスポート忘れずに持ってきてね。（remember to ～：忘れずに）"],
      ["文法・表現パターン", "I remember walking by the river with you.", "あなたと川沿いを歩いたのを覚えてる。（remember ～ing：前にしたこと）"],
      ["文法・表現パターン", "Sorry, I forgot to text you.", "ごめん、連絡するの忘れてた。（forget to ～）"],
      ["文法・表現パターン", "It's on the tip of my tongue!", "喉まで出かかってるのに！"],
      ["文法・表現パターン", "That reminds me, are you free tomorrow?", "そういえば、明日って空いてる？（That reminds me：そういえば）"],
      ["文法・表現パターン", "I'd say the second one is better.", "2つ目のほうがいいかな。（I'd say：控えめな意見）"],
      ["文法・表現パターン", "I'd go with the ramen.", "私ならラーメンにするな。（I'd go with：私なら〜にする）"],
      ["文法・表現パターン", "I wouldn't worry about it.", "気にしなくていいと思うよ。（I wouldn't：私なら〜しない）"],
      ["文法・表現パターン", "I could be wrong, but I think it's closed today.", "違うかもしれないけど、今日は休みだと思う。（I could be wrong：間違ってるかも）"],
      ["文法・表現パターン", "Could you take a photo of us?", "写真撮ってもらえますか？（Could you：ていねいなお願い）"],
      ["文法・表現パターン", "Would you like to have dinner with me?", "一緒に夜ごはん食べない？（Would you like to：ていねいな誘い）"],
      ["文法・表現パターン", "I'd love to see you again.", "また会いたいな。（I'd love to：ぜひ〜したい）"],
      ["文法・表現パターン", "It could rain this afternoon.", "午後は雨が降るかもしれない。（could：〜かもしれない）"],
      ["文法・表現パターン", "I'd come if I could, but I have work.", "行けるなら行きたいけど、仕事があるんだ。（仮定法：if I could）"],
      ["文法・表現パターン", "I was able to get tickets!", "チケット取れた！（was able to：1回うまくできた）"],
      ["文法・表現パターン", "If I had known, I would've helped you.", "知ってたら手伝ったのに。（would've：過去のもしも）"],
      ["文法・表現パターン", "I'd rather stay in tonight.", "今夜はどちらかといえば家にいたいな。（I'd rather：やんわり希望）"],
      ["文法・表現パターン", "This ramen is as good as the one in Tokyo.", "このラーメン、東京のと同じくらいおいしい。（as ～ as：同じくらい）"],
      ["文法・表現パターン", "It wasn't as hard as I thought.", "思ったほど難しくなかった。（not as ～ as I thought）"],
      ["文法・表現パターン", "Japanese summer isn't as dry as German summer.", "日本の夏はドイツの夏ほど乾燥してない。（not as ～ as：〜ほどじゃない）"],
      ["文法・表現パターン", "Tokyo is twice as expensive as my hometown.", "東京は地元の2倍物価が高い。（twice as ～ as）"],
      ["文法・表現パターン", "I'll reply as soon as I can.", "できるだけ早く返事するね。（as soon as I can）"],
      ["文法・表現パターン", "I'll text you as soon as I get home.", "家に着いたらすぐ連絡するね。（as soon as ＋ 現在形）"],
      ["文法・表現パターン", "As long as you're happy, I'm happy.", "あなたが幸せなら、私も幸せ。（as long as：〜さえすれば）"],
      ["文法・表現パターン", "As far as I know, the shop is open until nine.", "私の知る限り、そのお店は9時まで開いてる。（as far as I know）"],
      ["文法・表現パターン", "It was as beautiful as I imagined.", "想像してたとおりきれいだった。（as ～ as I imagined）"],
      ["文法・表現パターン", "Eat as much as you want.", "好きなだけ食べてね。（as much as：同じだけ）"],
      ["文法・表現パターン", "I'll have the same as her.", "彼女と同じものをください。（the same as）"],
      ["文法・表現パターン", "I miss you as much as you miss me.", "あなたが会いたいのと同じくらい、私も会いたいよ。（as much as）"],
      ["文法・表現パターン", "I'm going to take a day off on Friday.", "金曜日は休みを取るつもり。（I'm going to：決めている予定）"],
      ["文法・表現パターン", "I was going to call you, but I fell asleep.", "電話するつもりだったんだけど、寝ちゃった。（was going to：つもりだった）"],
      ["文法・表現パターン", "Sorry, I meant to reply earlier.", "ごめん、もっと早く返事するつもりだったんだ。（meant to：しようと思ってたのに）"],
      ["文法・表現パターン", "I meant it as a joke.", "冗談のつもりだったんだ。（meant it as ＋ 名詞）"],
      ["文法・表現パターン", "I was trying to surprise you.", "サプライズのつもりだったんだ。（was trying to：〜しようとしてた）"],
      ["文法・表現パターン", "I didn't mean to hurt you.", "傷つけるつもりはなかったんだ。（didn't mean to）"],
      ["文法・表現パターン", "That's not what I meant. I just wanted to help.", "そういうつもりじゃなくて、ただ手伝いたかったんだ。（That's not what I meant）"],
      ["文法・表現パターン", "I bought this to say thank you.", "お礼のつもりでこれを買ったんだ。（目的の to）"],
      ["文法・表現パターン", "I'm not going to give up.", "あきらめるつもりはないよ。（not going to：意思）"],
      ["文法・表現パターン", "It's just my way of saying thank you.", "ほんのお礼の気持ちだよ。（my way of saying ～）"],
      ["文法・表現パターン", "I've been meaning to text you.", "ずっと連絡しようと思ってたんだ。（have been meaning to）"],
      ["文法・表現パターン", "I don't like being rushed.", "急かされるのは好きじゃない。（being ＋ 過去分詞：〜されること）"],
      ["文法・表現パターン", "I hate being kept waiting.", "待たされるのは大嫌い。（being kept waiting）"],
      ["文法・表現パターン", "I love being spoiled by you.", "あなたに甘やかされるのが好き。（being spoiled）"],
      ["文法・表現パターン", "I love it when you hold my hand.", "手をつないでくれるのが好き。（I love it when you ～）"],
      ["文法・表現パターン", "I don't like it when people stare at me.", "じろじろ見られるのは嫌。（I don't like it when ～）"],
      ["文法・表現パターン", "I hate getting lost.", "道に迷うのは本当に嫌。（get ＋ 過去分詞）"],
      ["文法・表現パターン", "I don't mind being teased by you.", "あなたにからかわれるのは平気だよ。（I don't mind ～ing）"],
      ["文法・表現パターン", "I don't like being told what to do.", "あれこれ指図されるのは苦手。（being told）"],
      ["文法・表現パターン", "I like being called by my nickname.", "あだ名で呼ばれるのが好き。（being called）"],
      ["文法・表現パターン", "I don't mind if you're a little late.", "ちょっと遅れても気にしないよ。（I don't mind if ～）"],
      ["文法・表現パターン", "I like being cooked for.", "ご飯を作ってもらうのが好き。（being cooked for）"],
      ["文法・表現パターン", "I'm a little worried about you.", "あなたのことがちょっと心配。（worried：形容詞・気持ちは -ed）"],
      ["文法・表現パターン", "This street is dangerous at night.", "この道は夜危ない。（dangerous：-ous は形容詞）"],
      ["文法・表現パターン", "I have no confidence in my English.", "自分の英語に自信がない。（confidence：have のあとは名詞）"],
      ["文法・表現パターン", "I'm confident about it.", "それには自信がある。（confident：I'm のあとは形容詞）"],
      ["文法・表現パターン", "What's the difference?", "何が違うの？（difference：the のあとは名詞）"],
      ["文法・表現パターン", "It was so much fun!", "すごく楽しかった！（fun：楽しい／funny は笑える）"],
      ["文法・表現パターン", "I'm bored. Let's go out.", "退屈だな。出かけよう。（bored：気持ちは -ed）"],
      ["文法・表現パターン", "The movie was really interesting.", "その映画、おもしろかった。（interesting：もの・原因は -ing）"],
      ["文法・表現パターン", "I'm so excited about our trip!", "旅行すごく楽しみ！（excited：気持ちは -ed）"],
      ["文法・表現パターン", "Are you staying healthy?", "ちゃんと健康的に過ごしてる？（healthy：形容詞／health：名詞）"],
      ["文法・表現パターン", "I was really lucky to meet you.", "会えて本当にラッキーだった。（lucky：形容詞／luck：名詞）"],
      ["文法・表現パターン", "Could you speak a little more slowly?", "もう少しゆっくり話してもらえる？（slowly：副詞＝「〜に」）"],
      ["文法・表現パターン", "You look beautiful tonight.", "今夜すごくきれいだね。（look ＋ 形容詞。beautifully にしない）"],
      ["文法・表現パターン", "You speak Japanese really well!", "日本語すごく上手だね！（well：副詞／good：形容詞）"],
      ["文法・表現パターン", "You worked harder than usual yesterday.", "昨日はいつもより頑張ってたね。（hard の比較級 harder）"],
      ["文法・表現パターン", "I've hardly slept lately.", "最近ほとんど寝てないの。（hardly：ほとんど〜ない／lately：最近）"],
      ["文法・表現パターン", "That sounds great!", "それ、すごくいいね！（sound ＋ 形容詞）"],
      ["文法・表現パターン", "She's so friendly.", "彼女すごく気さくだね。（friendly：-ly だけど形容詞）"],
      ["文法・表現パターン", "Thank you for the lovely day.", "素敵な一日をありがとう。（Thank you for ＋ 名詞）"],
      ["文法・表現パターン", "I don't have anyone to talk to openly.", "本音で話せる人がいない。"],
      // ---- 文法ノートのノート例文・クイズ文で、まだ表現集に無かったもの（2026-11-10） ----
      ["文法・表現パターン", "He must've had too much to drink last night.", "彼、昨日飲みすぎたに違いない。（must've：〜したに違いない）"],
      ["文法・表現パターン", "I should've told you earlier.", "もっと早く言えばよかった。（should've：〜すればよかった）"],
      ["文法・表現パターン", "I could've picked you up if you had told me.", "言ってくれたら迎えに行けたのに。（could've：〜できたのに）"],
      ["文法・表現パターン", "She must've loved the gift.", "彼女、プレゼントを気に入ったに違いない。"],
      ["文法・表現パターン", "If it hadn't rained, the game would've started.", "雨が降っていなければ、試合は始まっていただろう。（would've：〜しただろう）"],
      ["文法・表現パターン", "I thought it would be hard to make friends here, but it was easy.", "ここで友達を作るのは難しいと思っていたけど、簡単だった。"],
      ["文法・表現パターン", "I thought Japanese would be hard to learn.", "日本語は覚えるのが難しいと思ってた。（hard to learn のあとに it を付けない）"],
      ["文法・表現パターン", "I always drink coffee in the morning.", "朝はいつもコーヒーを飲む。（always：いつも）"],
      ["文法・表現パターン", "We often go to that cafe.", "あのカフェにはよく行く。（often：よく）"],
      ["文法・表現パターン", "How long have you lived in Japan?", "日本に住んでどのくらい？（How long have you ～?）"],
      ["文法・表現パターン", "I've been studying English for five years.", "英語を5年間勉強している。（have been ～ing：ずっと〜している）"],
      // ---- 旧アプリ「気持ちを伝える英語」（review.html）から移行（2026-11-06） ----
      ["気持ち・関係を伝える", "I care about you, and I want to be honest with you.", "君のことを大切に思っているし、正直に話したい。"],
      ["気持ち・関係を伝える", "Sometimes I struggle to explain my feelings in English.", "英語で気持ちを説明するのが難しいときがある。"],
      ["話し合い・意見の違い", "I want to understand how you see things.", "君がどう考えているのか理解したい。"],
      ["話し合い・意見の違い", "I don't want to pressure you to give me an answer.", "答えを出すようにプレッシャーをかけたいわけじゃない。"],
      ["話し合い・意見の違い", "I want us to figure out what's best for both of us.", "二人にとって何が一番いいか一緒に考えたい。"],
      ["話し合い・意見の違い", "I'm open to talking about our differences.", "意見の違いについて話し合うことに前向きだよ。"],
      ["話し合い・意見の違い", "I'm not trying to dismiss your point of view.", "君の考えを軽視しようとしているわけじゃない。"],
      ["気持ち・関係を伝える", "I might not always find the right words, but I'm trying to be honest.", "いつも適切な言葉が見つかるとは限らないけど、正直に伝えようとしている。"],
      ["気持ち・関係を伝える", "I don't think we need to have all the answers right now.", "今すべての答えを出す必要はないと思う。"],
      ["気持ち・関係を伝える", "I want to take our relationship seriously.", "僕たちの関係を真剣に考えたい。"],
      ["不安・悩みを受け止める", "Thank you for being honest with me.", "正直に話してくれてありがとう。"],
      ["気持ち・関係を伝える", "We might have things in common, too.", "僕たちには共通点もあるかもしれない。"],
      ["気持ち・関係を伝える", "We can take it one step at a time.", "お互いに一歩ずつ進んでいけばいい。"],
      ["気持ち・関係を伝える", "No one knows for sure what will happen.", "未来に何が起こるかは誰にも確実には分からない。"],
      ["気持ち・関係を伝える", "I think it's worth giving our relationship a chance.", "二人の関係に可能性を与えてみる価値があると思う。"],
      ["気持ち・関係を伝える", "I'd like us to take our time and see how things go.", "焦らずに時間をかけて、これからどうなるか一緒に見ていきたい。"],
      ["差別・人権・文化を話す", "I know these problems exist.", "こうした問題が存在することは分かっているよ。"],
      ["差別・人権・文化を話す", "I take these issues seriously.", "こうした問題を真剣に受け止めているよ。"],
      ["差別・人権・文化を話す", "Asians can face discrimination, too.", "アジア人も差別を受けることがあるよ。"],
      ["差別・人権・文化を話す", "Japan has problems with discrimination, too.", "日本にも差別の問題はあるよ。"],
      ["差別・人権・文化を話す", "I understand why you're worried.", "マルちゃんが心配する理由は分かるよ。"],
      ["話し合い・意見の違い", "I may see things differently, but I want to understand you.", "違う見方をすることもあるけど、マルちゃんを理解したい。"],
      ["話し合い・意見の違い", "Can you tell me more about how you feel?", "どんな気持ちなのか、もう少し聞かせてくれる？"],
      ["自分の経験・自分らしさ", "I don't think our height difference is a problem.", "僕は二人の身長差を問題だとは思っていないよ。"],
      ["自分の経験・自分らしさ", "I like you for who you are.", "僕はマルちゃん自身が好きだよ。"],
      ["不安・悩みを受け止める", "You don't have to pretend to be okay.", "平気なふりをしなくていいよ。"],
      ["不安・悩みを受け止める", "I want to understand how you really feel.", "本当はどう感じているのか理解したい。"],
      ["不安・悩みを受け止める", "I might not know what to say, but I want to listen.", "何と言えばいいか分からないこともあるけど、話を聞きたい。"],
      ["不安・悩みを受け止める", "Thank you for telling me.", "話してくれてありがとう。"],
      ["不安・悩みを受け止める", "What feels the hardest for you?", "何が一番つらいと感じる？"],
      ["不安・悩みを受け止める", "I don't think ADHD changes who you are.", "ADHDがあっても、マルちゃん自身が変わるわけではないと思う。"],
      ["不安・悩みを受け止める", "I want to understand what is difficult for you.", "何が大変なのか理解したい。"],
      ["不安・悩みを受け止める", "You can talk to me about it if you want.", "話したかったら、僕に話してくれていいよ。"],
      ["謝る・誤解をとく", "I wasn't trying to make light of your worries.", "マルちゃんの不安を軽く考えていたわけじゃないよ。"],
      ["謝る・誤解をとく", "I wanted to help, but I didn't know what to say.", "力になりたかったけど、何と言えばいいか分からなかったんだ。"],
      ["謝る・誤解をとく", "I'm still learning how to understand you better.", "もっとマルちゃんを理解する方法を、今も学んでいるところだよ。"],
      ["短く言える版", "I care about you.", "君のことを大切に思っているよ。"],
      ["短く言える版", "I want to be honest.", "正直でいたいんだ。"],
      ["短く言える版", "I want to understand.", "理解したいんだ。"],
      ["短く言える版", "I see it differently.", "僕は違う見方をしているよ。"],
      ["短く言える版", "Can you tell me more?", "もう少し聞かせてくれる？"],
      ["短く言える版", "Our height difference is okay with me.", "僕は身長差を気にしていないよ。"],
      ["短く言える版", "I like you as you are.", "今の君のままが好きだよ。"],
      ["短く言える版", "I'm here to listen.", "話を聞くよ。"],
      ["短く言える版", "You can talk to me.", "僕に話していいんだよ。"],
      ["短く言える版", "You don't have to pretend.", "無理に平気なふりをしなくていいよ。"],
      ["短く言える版", "I take this seriously.", "この問題を真剣に受け止めているよ。"],
      ["短く言える版", "That shouldn't happen to anyone.", "誰に対しても、そんなことがあってはいけないよ。"],
      ["短く言える版", "I know this is a real problem.", "これは実際にある問題だと分かっているよ。"],
      ["短く言える版", "I understand your concern.", "君が心配する理由は分かるよ。"],
      ["短く言える版", "I want to hear your view.", "君の見方を聞きたいよ。"],
      ["短く言える版", "I might not know what to say.", "何と言えばいいか分からないかもしれない。"],
      ["短く言える版", "I'm not judging you.", "君を否定したいわけじゃないよ。"],
      ["短く言える版", "We can take our time.", "焦らず進めばいいよ。"],
      ["短く言える版", "One step at a time.", "一歩ずつ進もう。"],
      ["短く言える版", "I'm glad you told me.", "話してくれてうれしいよ。"],
      ["短く言える版", "I want to understand you better.", "もっと君のことを理解したい。"],
      ["短く言える版", "I might not understand everything, but I want to understand you.", "全部は理解できないかもしれないけど、君のことを理解したい。"],
      ["短く言える版", "I don't think our height difference matters.", "僕は二人の身長差は問題じゃないと思うよ。"],
      ["短く言える版", "I want to understand what it's like for you.", "君にとってどんな感じなのか理解したい。"],
      ["短く言える版", "I see your point.", "君の言いたいことは分かるよ。"],
      ["短く言える版", "I see it a little differently.", "僕は少し違う見方をしているよ。"],
      ["短く言える版", "Can you tell me why you feel that way?", "どうしてそう感じるのか教えてくれる？"],
      ["短く言える版", "I understand why that worries you.", "それが心配な理由は分かるよ。"],
      ["短く言える版", "Japan has issues, too.", "日本にも問題はあるよ。"],
      ["短く言える版", "I just want to understand.", "ただ理解したいんだ。"],
      ["短く言える版", "It's okay if we disagree.", "意見が違っていても大丈夫だよ。"],
      ["自分の経験・自分らしさ", "It took me a really long time to accept myself, too.", "僕自身も、自分を受け入れるまでにすごく時間がかかった。"],
      ["不安・悩みを受け止める", "My English isn't perfect yet, but I can listen.", "英語はまだ完璧じゃないけど、話を聞くことはできるよ。"],
      ["不安・悩みを受け止める", "Please feel free to talk to me about how you're feeling.", "どんな気持ちなのか、気軽に話してね。"],
      ["気持ち・関係を伝える", "I really want to understand you better.", "あなたのことをもっと理解したい。"],
      ["不安・悩みを受け止める", "I hope you have people around you who listen to you and support you.", "あなたの周りにも、話を聞いて支えてくれる人たちがいるといいな。"],
      ["話し合い・意見の違い", "Let's talk about these things again sometime.", "またいつか、こういうことについて話そうね。"],
      ["差別・人権・文化を話す", "I'll try to learn more English vocabulary related to racism, discrimination, and other social issues.", "人種差別や差別、社会問題に関する英語の語彙をもっと学ぶね。"],
      ["不安・悩みを受け止める", "It sounds like you went through some really difficult times in Germany.", "ドイツにいたとき、とてもつらい時期を経験したんだね。"],
      ["不安・悩みを受け止める", "I might not fully understand your experiences, but I want to understand you better.", "あなたの経験を完全には理解できないかもしれないけど、もっと理解したい。"],
      ["話し合い・意見の違い", "Could you tell me a little more about that?", "それについて、もう少し聞かせてくれる？"],
      ["else / tell you what", "Would you like anything else?", "ほかに何か欲しい？／ほかに何かいる？"],
      ["else / tell you what", "Is anyone else coming?", "ほかに誰か来るの？"],
      ["else / tell you what", "What else do you want to do?", "ほかに何をしたい？"],
      ["else / tell you what", "Let's try somewhere else.", "ほかの場所に行ってみよう。"],
      ["else / tell you what", "We should leave now, or else we'll be late.", "もう出たほうがいいよ。そうしないと遅れるよ。"],
      ["else / tell you what", "You should ask someone else.", "ほかの人に聞いてみたほうがいいよ。"],
      ["else / tell you what", "Is there anything else you want to talk about?", "ほかに話したいことはある？"],
      ["else / tell you what", "Tell you what, let's get some coffee first.", "こうしよう。まずコーヒーでも飲もう。"],
      ["else / tell you what", "Tell you what, we could go hiking this weekend.", "そうだ、今週末ハイキングに行くのはどう？"],
      ["else / tell you what", "Tell you what, I'll cook if you do the dishes.", "こうしない？ 君が皿洗いをしてくれるなら、僕が料理するよ。"],
      ["気持ち・関係を伝える", "The time we spend together means a lot to me.", "一緒に過ごす時間は、僕にとってとても大切だよ。（mean a lot to me：私にとってとても大切）"],
      ["気持ち・関係を伝える", "I can't always explain my feelings well in English, but I want to keep trying.", "英語で気持ちをうまく説明できないこともあるけど、努力し続けたい。（can't always：いつもできるわけではない／keep trying：努力し続ける）"],
      ["話し合い・意見の違い", "I think we can talk things through even when we disagree.", "意見が違っても、話し合うことはできると思う。（talk things through：話し合って整理する／disagree：意見が合わない）"],
      ["気持ち・関係を伝える", "I want you to understand my feelings.", "君に僕の気持ちを理解してほしい。（want + 人 + to do：人に〜してほしい）"],
      ["話し合い・意見の違い", "I'm willing to listen to your opinion, too.", "君の意見も聞くつもりだよ。（be willing to：進んで〜するつもりがある）"],
      ["気持ち・関係を伝える", "I don't know if things will work out between us in the future, either.", "僕も、将来うまくいくかどうかは分からない。（work out：うまくいく／either：否定文で「〜も」）"],
      ["気持ち・関係を伝える", "I'd like us to understand each other better.", "もっとお互いを理解していきたい。（I'd like us to ...：二人で〜したい）"],
      ["気持ち・関係を伝える", "You don't need to promise me anything about the future.", "将来のことについて、僕に何かを約束する必要はないよ。（promise someone something：人に何かを約束する）"],
      ["気持ち・関係を伝える", "Even if things don't work out in the end, I don't think I'll regret trying.", "最後にうまくいかなかったとしても、試してみたことを後悔するとは思わない。（even if：たとえ〜でも／regret -ing：〜したことを後悔する）"],
      ["気持ち・関係を伝える", "I don't want to pressure you to develop romantic feelings.", "君に恋愛感情を持つようにプレッシャーをかけたいわけじゃない。（pressure someone to do：人に〜するようプレッシャーをかける）"],
      ["謝る・誤解をとく", "I'm sorry I dismissed something that matters to you.", "あなたにとって大切なことを軽く扱ってしまってごめんね。（dismiss something：物事を軽く扱う・重要でないとする。謝罪では相手の大切な気持ちを認める表現）"],
      ["差別・人権・文化を話す", "I learned more about German history and culture.", "ドイツの歴史や文化について、もっと学んだよ。（learn more about：〜についてもっと学ぶ）"],
      ["差別・人権・文化を話す", "Now I understand why it matters to you.", "今なら、なぜそれがあなたにとって大切なのか分かるよ。（why it matters to you：なぜあなたにとって大切なのか）"],
      ["差別・人権・文化を話す", "I want to understand your background better.", "あなたの背景をもっと理解したい。（understand someone's background：相手の育った環境や背景を理解する）"],
      ["謝る・誤解をとく", "I didn't mean to hurt you, but I'm sorry if I did.", "傷つけるつもりはなかったけど、そう感じさせてしまったならごめんね。（I didn't mean to ...：〜するつもりはなかった。意図と相手への影響を分けて伝える表現）"],
      ["謝る・誤解をとく", "If I come across the wrong way, please tell me.", "もし違う受け取り方をしたら、教えてほしい。（come across the wrong way：意図と違う印象を与える）"],
      ["話し合い・意見の違い", "I'd like to hear more about your point of view.", "あなたの考えをもっと聞きたい。（point of view：視点・考え方。I'd like to は自然でやわらかい希望）"],
      ["話し合い・意見の違い", "Let's take our time and talk it through.", "急いで結論を出さずに、ゆっくり話し合おう。（take our time：焦らず時間をかける／talk it through：話し合って整理する）"],
      ["不安・悩みを受け止める", "Thank you for telling me how you feel.", "あなたの気持ちを聞かせてくれてありがとう。（tell me how you feel：どんな気持ちかを話してくれる）"],
      ["話し合い・意見の違い", "I think we can respect each other even when we disagree.", "同じ意見でなくても、お互いを尊重できると思う。（even when we disagree：意見が違うときでも）"],
      ["話し合い・意見の違い", "I don't want to put pressure on you.", "あなたにプレッシャーをかけたくない。（put pressure on someone：人にプレッシャーをかける）"],
      ["話し合い・意見の違い", "If there's something I don't understand, I'd like to ask you honestly.", "分からないことがあったら、正直に質問したい。（I'd like to ask：質問したい。分からないことを責めずに尋ねる姿勢を伝える）"],
      ["気持ち・関係を伝える", "It felt good talking to you today!", "今日はあなたと話せてよかった。（feel good + -ing：〜してよかった／話せて気持ちがよかった）"],
      ["不安・悩みを受け止める", "Thank you for opening up to me about your family.", "家族のことを打ち明けてくれてありがとう。（open up to someone：人に心を開く・打ち明ける）"],
      ["不安・悩みを受け止める", "Thank you for sharing what's been going on with your sister.", "妹さんに最近何が起きているのか話してくれてありがとう。（what's been going on with ...：〜に最近何が起きているか・どんな状況か）"],
      ["自分の経験・自分らしさ", "I went through some pretty difficult times myself.", "私自身もかなり大変な時期を経験した。（go through a difficult time：大変な時期を経験する／myself は「私自身も」）"],
      ["自分の経験・自分らしさ", "Life can feel frustrating and overwhelming sometimes.", "人生はときに、もどかしくていっぱいいっぱいに感じられる。（frustrating：もどかしい／overwhelming：圧倒される・いっぱいいっぱい）"],
      ["自分の経験・自分らしさ", "Since coming to Japan, I've been feeling much better.", "日本に来てから、ずっと気持ちがかなり楽になっている。（since + -ing / since + 過去の時点：〜して以来／現在完了進行形で変化が続く）"],
      ["自分の経験・自分らしさ", "Sometimes I still feel very different from other people.", "ときどき、ほかの人たちとすごく違うと感じる。（feel different from ...：〜と違うと感じる）"],
      ["自分の経験・自分らしさ", "I'm trying to figure out how to fit into this world.", "この世界にどうやったら馴染めるのか模索している。（figure out how to ...：どうやって〜するかを考えて見つける／fit into：馴染む）"],
      ["不安・悩みを受け止める", "I really hope your sister starts feeling better soon.", "妹さんが少しでも早く気持ちが楽になるといいな。（hope + 文：〜だといいと願う／start feeling better：調子がよくなり始める）"],
      ["不安・悩みを受け止める", "I hope she has people around her who support and understand her.", "妹さんを支え、理解してくれる人たちが周りにいてほしい。（people who support and understand her：彼女を支え理解する人たち／who は people を説明）"],
      ["単語・熟語 (形容詞＋名詞)", "make a difficult decision", "難しい決断をする（形容詞 difficult が名詞 decision を説明する）"],
      ["単語・熟語 (形容詞＋名詞)", "feel comfortable", "安心する・落ち着く（feel ＋ 形容詞：〜と感じる）"],
      ["単語・熟語 (形容詞＋名詞)", "a healthy relationship", "健全な関係"],
      ["単語・熟語 (形容詞＋名詞)", "a tough question", "難しい質問（tough：難しい・手ごわい）"],
      ["単語・熟語 (形容詞＋名詞)", "mixed feelings", "複雑な気持ち（相反する気持ちがまざっている）"],
      ["単語・熟語 (形容詞＋名詞)", "a good chance", "十分な可能性・可能性が高い"],
      ["単語・熟語 (形容詞＋名詞)", "a deep conversation", "深い話（deep は抽象的な内容にも使える）"],
      ["単語・熟語 (形容詞＋名詞)", "a serious mistake", "重大な間違い"],
      ["単語・熟語 (形容詞＋名詞)", "be worried about the future", "将来が心配（be worried about ～：～が心配だ）"],
      ["構文暗唱・中学レベル", "I am tired today.", "今日は疲れている。（be動詞）"],
      ["構文暗唱・中学レベル", "She lives in Tokyo.", "彼女は東京に住んでいる。（三単現の s）"],
      ["構文暗唱・中学レベル", "I don't eat meat.", "肉は食べない。（一般動詞の否定）"],
      ["構文暗唱・中学レベル", "Do you like cats?", "猫は好き？（一般動詞の疑問）"],
      ["構文暗唱・中学レベル", "I went to Kyoto last week.", "先週京都に行った。（過去形）"],
      ["構文暗唱・中学レベル", "I'm going to see a movie tomorrow.", "明日映画を見に行く予定。（be going to）"],
      ["構文暗唱・中学レベル", "I'll call you later.", "あとで電話するね。（will：その場で決めたこと）"],
      ["構文暗唱・中学レベル", "I'm cooking dinner now.", "今、夜ごはんを作ってる。（現在進行形）"],
      ["構文暗唱・中学レベル", "I was sleeping when you called.", "電話をもらったとき寝てた。（過去進行形）"],
      ["構文暗唱・中学レベル", "I can't swim very well.", "泳ぐのはあまり得意じゃない。（can't ＋ 動詞）"],
      ["構文暗唱・中学レベル", "You have to try this!", "これ食べてみて！（have to：〜しなきゃ）"],
      ["構文暗唱・中学レベル", "You don't have to hurry.", "急がなくていいよ。（don't have to：〜しなくていい）"],
      ["構文暗唱・中学レベル", "I want to go to Germany someday.", "いつかドイツに行きたい。（want to ＋ 動詞）"],
      ["構文暗唱・中学レベル", "I like reading books.", "本を読むのが好き。（動名詞 ～ing）"],
      ["構文暗唱・中学レベル", "I went to the store to buy milk.", "牛乳を買いに店に行った。（目的の to）"],
      ["構文暗唱・中学レベル", "This is the best ramen in Tokyo.", "これは東京で一番おいしいラーメン。（最上級）"],
      ["構文暗唱・中学レベル", "She is taller than me.", "彼女は私より背が高い。（比較級）"],
      ["構文暗唱・中学レベル", "There is a nice cafe near my house.", "家の近くにいいカフェがある。（There is）"],
      ["構文暗唱・中学レベル", "Can you show me the way?", "道を教えてくれる？（show 人 物）"],
      ["構文暗唱・中学レベル", "Your smile makes me happy.", "あなたの笑顔を見ると幸せになる。（make 人 形容詞）"],
      ["構文暗唱・中学レベル", "I have been to Osaka twice.", "大阪には2回行ったことがある。（現在完了・経験）"],
      ["構文暗唱・中学レベル", "I have known her for five years.", "彼女とは5年来の知り合い。（現在完了・継続）"],
      ["構文暗唱・中学レベル", "When I was a child, I lived in Osaka.", "子どものころ大阪に住んでいた。（when ＋ 文）"],
      ["構文暗唱・中学レベル", "If it rains, let's stay home.", "雨が降ったら家にいよう。（if ＋ 現在形）"],
      ["構文暗唱・中学レベル", "I stayed home because I was sick.", "体調が悪かったので家にいた。（because ＋ 理由）"],
      ["構文暗唱・中学レベル", "It's easy to make this.", "これを作るのは簡単。（It is ～ to ...）"],
      ["構文暗唱・中学レベル", "I think that you are right.", "あなたの言う通りだと思う。（I think that ＋ 文）"],
      ["構文暗唱・中学レベル", "Do you know where the station is?", "駅がどこにあるか知ってる？（間接疑問）"],
      ["構文暗唱・中学レベル", "This is the book I bought yesterday.", "これが昨日買った本。（名詞 ＋ 主語 ＋ 動詞）"],
      ["構文暗唱・中学レベル", "I'm looking forward to seeing you.", "会えるのを楽しみにしてる。（look forward to ～ing）"],
      ["構文暗唱・高校基礎", "I wish I could speak German.", "ドイツ語が話せたらいいのに。（I wish ＋ 過去形）"],
      ["構文暗唱・高校基礎", "If I were you, I would talk to her.", "私があなたなら、彼女と話すよ。（仮定法過去）"],
      ["構文暗唱・高校基礎", "If I had known, I would have helped you.", "知っていたら手伝ったのに。（仮定法過去完了）"],
      ["構文暗唱・高校基礎", "I had my hair cut yesterday.", "昨日髪を切ってもらった。（have ＋ 物 ＋ 過去分詞）"],
      ["構文暗唱・高校基礎", "My mother made me study every day.", "母は私に毎日勉強させた。（make 人 ＋ 動詞）"],
      ["構文暗唱・高校基礎", "Let me help you.", "手伝わせて。（let 人 ＋ 動詞）"],
      ["構文暗唱・高校基礎", "I want you to meet my friends.", "友達に会ってほしい。（want 人 to ～）"],
      ["構文暗唱・高校基礎", "He asked me to wait.", "彼に待つように頼まれた。（ask 人 to ～）"],
      ["構文暗唱・高校基礎", "The man who lives next door is very kind.", "隣に住んでいる男性はとても親切。（関係代名詞 who）"],
      ["構文暗唱・高校基礎", "This is the place where we first met.", "ここは私たちが初めて会った場所。（関係副詞 where）"],
      ["構文暗唱・高校基礎", "What I want is a little more time.", "私がほしいのは、もう少しの時間。（関係代名詞 what）"],
      ["構文暗唱・高校基礎", "I'm used to waking up early.", "早起きには慣れている。（be used to ～ing）"],
      ["構文暗唱・高校基礎", "I used to live in Osaka.", "以前は大阪に住んでいた。（used to：以前は〜だった）"],
      ["構文暗唱・高校基礎", "It's too cold to go outside.", "寒すぎて外に出られない。（too ～ to ...）"],
      ["構文暗唱・高校基礎", "She is kind enough to help everyone.", "彼女はみんなを助けるほど親切だ。（～ enough to ...）"],
      ["構文暗唱・高校基礎", "I was so tired that I fell asleep.", "疲れすぎて寝てしまった。（so ～ that ...）"],
      ["構文暗唱・高校基礎", "The more you practice, the better you get.", "練習すればするほど上手くなる。（the 比較級, the 比較級）"],
      ["構文暗唱・高校基礎", "This bag is twice as big as mine.", "このかばんは私のの2倍の大きさ。（twice as ～ as）"],
      ["構文暗唱・高校基礎", "She speaks not only English but also German.", "彼女は英語だけでなくドイツ語も話す。（not only A but also B）"],
      ["構文暗唱・高校基礎", "It was this cafe that we went to first.", "最初に行ったのはこのカフェだった。（強調構文 It is ～ that）"],
      ["構文暗唱・高校基礎", "I have been waiting for an hour.", "1時間ずっと待ってる。（現在完了進行形）"],
      ["構文暗唱・高校基礎", "By the time I arrived, the movie had started.", "着いたときには映画が始まっていた。（過去完了）"],
      ["構文暗唱・高校基礎", "The book was written by a German author.", "その本はドイツの作家によって書かれた。（受け身）"],
      ["構文暗唱・高校基礎", "I'm interested in German culture.", "ドイツの文化に興味がある。（be interested in）"],
      ["構文暗唱・高校基礎", "Having finished work, I went home.", "仕事を終えて家に帰った。（分詞構文）"],
      ["構文暗唱・高校基礎", "I don't know whether he will come.", "彼が来るかどうか分からない。（whether：〜かどうか）"],
      ["構文暗唱・高校基礎", "You should have told me.", "言ってくれればよかったのに。（should have ＋ 過去分詞）"],
      ["構文暗唱・高校基礎", "It seems that she is busy.", "彼女は忙しいみたい。（It seems that ＋ 文）"],
      ["構文暗唱・高校基礎", "It is important for us to talk.", "私たちが話し合うことは大切だ。（It is ～ for 人 to ...）"],
      ["構文暗唱・高校基礎", "I'd rather stay home tonight.", "今夜はむしろ家にいたい。（would rather ＋ 動詞）"]
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
  /* ---------- 場面の補足（usage-data.js の window.USAGE） ---------- */
  // 英文ごとに「どんな場面で使うか」を一文で持つ。大文字小文字・文末の記号・’ の違いは無視して照合
  function usageKey(en) { return String(en || '').toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim().replace(/[\s.!?。！？]+$/, ''); }
  let usageMap = null;
  function usageFor(en) {
    if (!usageMap) {
      usageMap = {};
      const src = (typeof window !== 'undefined' && window.USAGE) || {};
      Object.keys(src).forEach(k => { usageMap[usageKey(k)] = String(src[k]); });
    }
    return usageMap[usageKey(en)] || '';
  }
  // el に「🎬 場面：…」を出す（無ければ隠す）。el が無ければ、anchor の直後に作る
  function renderUsage(target, en) {
    let el = target;
    if (el && !el.classList.contains('usage-line')) {
      const next = el.nextElementSibling;
      if (next && next.classList.contains('usage-line')) el = next;
      else { const d = document.createElement('div'); d.className = 'usage-line'; el.insertAdjacentElement('afterend', d); el = d; }
    }
    if (!el) return '';
    const u = usageFor(en);
    el.textContent = u ? '🎬 場面：' + u : '';
    el.style.display = u ? '' : 'none';
    return u;
  }

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

  /* ジャンル選択は2段階：①分類（GENRE_GROUPS）→ ②ジャンル。
     実際の値は今までどおり select（#genreSelect）が持つので、各ページの処理は変えなくてよい。
     ここに無いカテゴリは「その他」に入る。 */
  const GENRE_GROUPS = [
    { id: 'base', label: '🎯 全体・復習・マイ単語', cats: [] },
    { id: 'love', label: '💕 恋人・気持ちを伝える', cats: ['恋人・パートナーへの思いやり', '愛情・絆を深める表現', 'would / could 恋人同士の会話', '気持ち・関係を伝える', '謝る・誤解をとく', '自分の経験・自分らしさ'] },
    { id: 'care', label: '🤝 寄り添う・話し合う', cats: ['共感する・寄り添う', '励ます・応援する', '不安・悩みを受け止める', '話し合い・意見の違い', '差別・人権・文化を話す'] },
    { id: 'talk', label: '💬 会話・雑談', cats: ['会話フレーズ', '実践フレーズ', '友達・カジュアル雑談', '短く言える版', 'else / tell you what', '音のつながり（リンキング）'] },
    { id: 'gram', label: '📖 文法・単語', cats: ['文法・表現パターン', '文法・文型', '構文暗唱・中学レベル', '構文暗唱・高校基礎', '単語 (単体)', '熟語 (イディオム)', '単語・熟語 (形容詞＋名詞)', '単語・熟語 (副詞＋動詞)', '語彙・コロケーション'] },
    { id: 'other', label: '📁 その他', cats: [] }
  ];
  function genreEntries() {
    const all = getAllPhrases(), count = {};
    all.forEach(p => { count[p[0]] = (count[p[0]] || 0) + 1; });
    const list = [
      { v: 'ALL', t: '✨ 全ジャンル（ランダム出題）', g: 'base' },
      { v: 'WEAK', t: '🎯 苦手フレーズのみ（' + getWeakPhrases().length + '件）', g: 'base' },
      { v: 'DUE', t: '⏰ 復習の時期が来たフレーズ（' + getDuePhrases().length + '件）', g: 'base' },
      { v: 'FAV', t: '⭐ お気に入りフレーズのみ', g: 'base' }
    ];
    Object.keys(count).forEach(c => {
      let g = c === CUSTOM_CAT ? 'base' : 'other';
      GENRE_GROUPS.forEach(gr => { if (gr.cats.includes(c)) g = gr.id; });
      list.push({ v: c, t: (c === CUSTOM_CAT ? '⭐ ' : '📁 ') + c + '（' + count[c] + '）', g });
    });
    // 分類の中は GENRE_GROUPS に書いた順に並べる
    const order = c => { for (const gr of GENRE_GROUPS) { const i = gr.cats.indexOf(c); if (i >= 0) return i; } return 999; };
    return list.sort((a, b) => a.g === b.g && a.g !== 'base' ? order(a.v) - order(b.v) : 0);
  }
  function groupSelectFor(select) {
    let gs = document.getElementById(select.id + 'Group');
    if (!gs) {
      gs = document.createElement('select');
      gs.id = select.id + 'Group';
      gs.className = 'genre-select-box genre-group-box';
      gs.setAttribute('aria-label', '出題の分類');
      select.parentNode.insertBefore(gs, select);
      gs.addEventListener('change', () => {
        fillGenreOptions(select, gs.value);
        select.value = select.options.length ? select.options[0].value : 'ALL';
        select.dispatchEvent(new Event('change'));
      });
    }
    return gs;
  }
  function fillGenreOptions(select, groupId) {
    select.innerHTML = '';
    (select._genres || []).filter(e => e.g === groupId).forEach(e => {
      const o = document.createElement('option'); o.value = e.v; o.textContent = e.t; select.appendChild(o);
    });
  }
  // ジャンルの値を指定して選ぶ（分類も合わせて切り替える）。change イベントは出さない
  function setGenre(select, value) {
    const e = (select._genres || []).find(x => x.v === value) || (select._genres || [])[0];
    if (!e) return;
    const gs = groupSelectFor(select);
    gs.value = e.g;
    fillGenreOptions(select, e.g);
    select.value = e.v;
  }
  function populateGenreSelect(select) {
    const params = new URLSearchParams(location.search);
    const prev = select.value;
    select._genres = genreEntries();
    const gs = groupSelectFor(select);
    gs.innerHTML = '';
    GENRE_GROUPS.forEach(gr => {
      const n = select._genres.filter(e => e.g === gr.id).length;
      if (!n) return;
      const o = document.createElement('option'); o.value = gr.id;
      o.textContent = gr.label + (gr.id === 'base' ? '' : '（' + n + 'ジャンル）');
      gs.appendChild(o);
    });
    // ?mode=weak / ?mode=due / ?genre=カテゴリ名 で開いたときの初期選択。再表示のときは今の選択を保つ
    const mode = params.get('mode');
    const want = prev || (mode === 'weak' ? 'WEAK' : mode === 'due' ? 'DUE' : params.get('genre')) || 'ALL';
    setGenre(select, select._genres.some(e => e.v === want) ? want : 'ALL');
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
    setGenre(select, 'ALL');
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
      version: 8,   // v6: 英語日記に翻訳の参考(ref)を追加 / v7: DMノート(dmNotes)を追加 / v8: お題で話す(talks)を追加
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
      dmNotes: getDmNotes(),
      talks: getTalks()
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
    const hasTalks = Array.isArray(obj.talks);   // v7以前には無いので、今の記録をそのまま残す
    const incTalks = sanitizeTalks(obj.talks);
    let store, custom, talk, pins, keeps, lists, plan, profile, letters, diary, meetings, nihongo, road, dm, talks;
    if (mode === 'replace') {
      store = inc; custom = incCustom; talk = incTalk;
      pins = incPins; keeps = incKeeps; lists = incLists; plan = incPlan;
      profile = incProfile; letters = incLetters; diary = incDiary; meetings = incMeet; nihongo = incNi;
      road = hasRoad ? incRoad : getRoadmap();
      dm = hasDm ? incDm : getDmNotes();
      talks = hasTalks ? incTalks : getTalks();
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
      talks = sanitizeTalks(getTalks().concat(incTalks));
    }
    const okAll = saveStore(store) && saveCustomPhrases(custom) && saveTalkLog(talk) && savePins(pins) && saveKeepsakes(keeps) && saveLists(lists) && (plan ? savePlan(plan) : (clearPlan(), true)) && saveProfile(profile) && saveLetters(letters) && saveDiary(diary) && saveMeetings(meetings) && saveNihongo(nihongo) && saveRoadmap(road) && saveDmNotes(dm) && saveTalks(talks);
    if (!okAll) throw new Error('保存に失敗しました。ブラウザの保存領域を確認してください。');
    return { custom: custom.length, studied: store.studied.length, favorites: store.favorites.length, talk: talk.length, pins: pins.length, keeps: keeps.length, diary: diary.length, letters: letters.length, dm: dm.length, talks: talks.length };
  }


  /* ---------- 設定（端末ごと・バックアップ対象外） ---------- */
  const KEY_PREFS = 'english_app_prefs';
  const DEFAULT_PREFS = { speakMine: true, speakPartner: false, kana: true, autoSpeak: true, drillSecs: 3, quizMode: 'quiz', drillCount: 10 };
  function getPrefs() {
    try { return Object.assign({}, DEFAULT_PREFS, JSON.parse(safeGet(KEY_PREFS)) || {}); } catch (e) { return Object.assign({}, DEFAULT_PREFS); }
  }
  function setPref(key, val) { const p = getPrefs(); p[key] = val; safeSet(KEY_PREFS, JSON.stringify(p)); }
  // 答えを出したときなどの「自動の読み上げ」。設定（ホーム ⚙️）でオフにできる。🔊ボタンでの再生は対象外
  function autoSpeak(text, lang, rate) { if (getPrefs().autoSpeak !== false) speak(text, lang, rate); }

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
  /* ---------- お題で話す（自分の意見を話した記録） ----------
     { id, t: 時刻, u: 更新時刻, pid: お題ID, q: お題（英語）, text: 話した英語, words: 語数, used: [使えた型ID], self: [自己チェックID], tr: 日本語に戻した文, c: Claude用にコピー済み } */
  const KEY_TALKS = 'english_app_talks';
  function sanitizeTalks(list) {
    const map = new Map();
    (Array.isArray(list) ? list : []).forEach(n => {
      if (!n || typeof n !== 'object' || typeof n.text !== 'string' || !n.text.trim()) return;
      const id = String(n.id || ''); if (!id) return;
      const strs = a => (Array.isArray(a) ? a : []).filter(x => typeof x === 'string').slice(0, 20);
      const e = { id, t: Number(n.t) || Date.now(), u: Number(n.u) || Number(n.t) || 0, pid: String(n.pid || '').slice(0, 40),
        q: String(n.q || '').slice(0, 300), text: n.text.trim().slice(0, 3000), words: Math.max(0, Number(n.words) || 0),
        used: strs(n.used), self: strs(n.self), tr: typeof n.tr === 'string' ? n.tr.slice(0, 3000) : '', c: !!n.c };
      const x = map.get(id);
      if (!x) { map.set(id, e); return; }
      const base = e.u >= x.u ? e : x, other = base === e ? x : e;
      if (!base.tr) base.tr = other.tr;
      base.c = base.c || other.c;
      map.set(id, base);
    });
    return Array.from(map.values()).sort((a, b) => b.t - a.t).slice(0, 300);
  }
  function getTalks() { return sanitizeTalks(loadJSON(KEY_TALKS, [])); }
  function saveTalks(list) { return safeSet(KEY_TALKS, JSON.stringify(sanitizeTalks(list))); }

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
    // 赤い取り消し線の意味を添える（聞き落とされた単語）
    if (words.some(w => w.status === 'miss')) {
      const n = document.createElement('div'); n.className = 'chip-legend';
      n.textContent = '赤い取り消し線＝聞き取ってもらえなかった単語。like you（ライキュー）のように前の単語とつながる所は聞き落とされやすいので、少しはっきり言ってみよう。';
      container.appendChild(n);
    }
  }
  // 要素の上端が画面の上（固定ヘッダーの下）に来るようにスクロール。force=false なら、上端が見えていないときだけ
  function scrollToCard(el, force) {
    if (!el || !el.getBoundingClientRect) return;
    const head = document.querySelector('header'), off = (head ? head.offsetHeight : 60) + 8;
    const top = el.getBoundingClientRect().top;
    if (force || top < off || top > window.innerHeight * 0.5) window.scrollTo({ top: Math.max(0, top + window.scrollY - off), behavior: 'smooth' });
  }
  const PASS_SCORE = 75;

  /* ---------- 声に出すカード（日本語を見て N 秒以内に英語を言う） ----------
     クイズ・文法ノートなどで共通に使う。ロードマップのカード暗唱と同じ流れ：
     日本語を見る → N 秒以内に声に出す → 答えを見る → 言えた／出なかった。最大3ラウンド（2回目以降は言えなかった分だけ）。
     opts: { title, items: フレーズ配列 [カテゴリ, 英語, 日本語, 例文], record: 1回目の結果を復習(SRS)・苦手に入れるか, onClose } */
  function drillSecs() { const n = +getPrefs().drillSecs; return [3, 4, 5].includes(n) ? n : 3; }
  function cardDrill(box, opts) {
    const MAX_ROUND = 3, CIRC = ['', '①', '②', '③'];
    const shuf = a => { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; };
    const items = (opts.items || []).filter(p => p && p[1]);
    let st = null;
    const ja = p => splitJa(p[2]);
    const usageLine = en => { const u = usageFor(en); return u ? '<div class="usage-line">🎬 場面：' + esc(u) + '</div>' : ''; };
    function start() {
      st = { round: 1, queue: shuf(items), i: 0, res: [], hist: [], first: {}, phase: 'card' };
      render();
    }
    function render() {
      const secs = drillSecs();
      box.style.display = '';
      if (!items.length) { box.innerHTML = '<p class="muted">練習できる文がありません。</p>'; return; }
      if (st.phase === 'roundEnd' || st.phase === 'review') {
        const h = st.hist[st.hist.length - 1], miss = st.res.filter(r => !r.ok);
        const still = st.phase === 'review' ? items.filter(p => !st.hist.some(x => x.okSet.includes(p[1]))) : miss.map(r => r.p);
        let html = '<h2>' + (st.phase === 'review' ? '📋 ふり返り：' + esc(opts.title || '') : CIRC[h.round] + ' ' + h.round + '回目 おわり') + '</h2>';
        if (st.phase === 'review') {
          html += '<div class="muted" style="margin-bottom:0.5rem;">' + st.hist.map(x => CIRC[x.round] + ' ' + x.said + '/' + x.total).join(' → ') + '　1回目で言えた：<b>' + st.hist[0].said + '/' + st.hist[0].total + '</b></div>';
        } else {
          html += '<div class="stats-grid" style="grid-template-columns:repeat(2,1fr); margin-bottom:0.75rem;"><div><div class="stat-number">' + h.said + '/' + h.total + '</div><div class="stat-label">' + secs + '秒以内に言えた</div></div>' +
            '<div><div class="stat-number" style="color:var(--bad);">' + miss.length + '</div><div class="stat-label">言えなかった</div></div></div>';
        }
        if (still.length) html += '<div class="muted" style="margin-bottom:0.4rem;">' + (st.phase === 'review' ? 'まだ言えない文' : '言えなかった文') + '</div>' +
          still.map(p => '<div class="item-row"><div class="en-text">' + esc(p[1]) + '</div><div class="ja-text muted">' + esc(ja(p).main) + '</div>' + usageLine(p[1]) + '</div>').join('');
        else if (st.phase === 'review') html += '<p style="color:var(--ok); font-weight:bold;">全部言えました！</p>';
        if (st.phase === 'roundEnd') {
          html += '<button class="btn" data-dr="next" style="margin-top:0.75rem;">▶ ' + (st.round + 1) + '回目：言えなかった' + miss.length + '文だけ</button>' +
            '<button class="btn btn-secondary" data-dr="end" style="margin-top:0.5rem;">ここでおわる</button>';
        } else {
          html += (opts.record ? '<p class="muted" style="margin:0.6rem 0;">1回目の結果は、苦手フレーズと「⏰復習の時期」に反映しました。</p>' : '') +
            '<button class="btn" data-dr="again" style="margin-top:0.5rem;">🔀 もう一度（シャッフル）</button>' +
            (opts.onClose ? '<button class="btn btn-secondary" data-dr="close" style="margin-top:0.5rem;">閉じる</button>' : '');
        }
        box.innerHTML = html;
        return;
      }
      const p = st.queue[st.i], j = ja(p);
      box.innerHTML = '<div style="display:flex; justify-content:space-between; align-items:center; gap:6px;"><span class="muted">' + esc(opts.title || '') + ' ・ ' + st.round + '回目 ・ ' + (st.i + 1) + '/' + st.queue.length + '</span>' +
        (opts.onClose ? '<button class="tiny-btn" data-dr="close">✕ やめる</button>' : '') + '</div>' +
        '<div class="rm-ja">' + esc(j.main) + '</div><div class="rm-timer" aria-hidden="true"><div class="rm-timer-fill"></div></div>' +
        '<p class="muted" style="text-align:center;">日本語を見て、' + secs + '秒以内に声に出して言ってみよう</p>' +
        '<div class="dr-reveal" style="display:none;"><div class="rm-en">' + esc(p[1]) + '</div>' +
        (j.note ? '<div class="muted" style="text-align:center;">' + esc(j.note) + '</div>' : '') + usageLine(p[1]) +
        '<div style="display:flex; justify-content:center; gap:6px; margin:0.6rem 0;"><button class="icon-btn" data-dr="play" aria-label="英語を再生">🔊</button><button class="icon-btn" data-dr="slow" aria-label="ゆっくり再生">🐢</button><button class="icon-btn btn-record dr-mic" aria-label="発音をチェック">🎙️</button></div>' +
        '<div class="word-chips dr-chips"></div><div class="mini-score dr-score" style="text-align:center;"></div>' +
        '<div style="display:flex; gap:8px; margin-top:0.75rem;"><button class="btn" data-dr="ok" style="background:#16a34a; flex:1;">⭕ ' + secs + '秒以内に言えた</button><button class="btn" data-dr="ng" style="background:#be123c; flex:1;">❌ 出なかった</button></div></div>' +
        '<button class="btn dr-revealbtn" data-dr="reveal">答えを見る</button>';
      const f = box.querySelector('.rm-timer-fill');
      f.style.transition = 'none'; f.style.width = '100%'; void f.offsetWidth;
      f.style.transition = 'width ' + secs + 's linear'; f.style.width = '0%';
    }
    function reveal() {
      if (!st || st.phase !== 'card') return;
      const p = st.queue[st.i];
      box.querySelector('.dr-reveal').style.display = ''; box.querySelector('.dr-revealbtn').style.display = 'none';
      autoSpeak(p[1], 'en-US', 1);
      attachPronunciation(box.querySelector('.dr-mic'), () => p[1], {
        onResult: r => { renderChips(box.querySelector('.dr-chips'), r.words); box.querySelector('.dr-score').textContent = r.score + '点（' + (r.score >= PASS_SCORE ? '合格！' : 'もう一度') + '）'; countSpeak(); },
        onError: m => { box.querySelector('.dr-score').textContent = m; }
      });
    }
    function answer(ok) {
      const p = st.queue[st.i];
      st.res.push({ p, ok });
      if (st.round === 1 && opts.record) recordResult(p, ok, 'recall');
      st.i++;
      if (st.i < st.queue.length) { render(); scrollToCard(box, false); return; }
      const okSet = st.res.filter(r => r.ok).map(r => r.p[1]);
      st.hist.push({ round: st.round, said: okSet.length, total: st.res.length, okSet });
      const miss = st.res.filter(r => !r.ok).length;
      st.phase = miss === 0 || st.round >= MAX_ROUND ? 'review' : 'roundEnd';
      if (st.phase === 'review') { const s = getStore(); touchToday(s); saveStore(s); updateStreakBadge(); }
      render();
    }
    box.onclick = e => {
      const t = e.target.closest('[data-dr]'); if (!t) return;
      const a = t.dataset.dr, p = st && st.queue[st.i];
      if (a === 'reveal') reveal();
      else if (a === 'ok') answer(true);
      else if (a === 'ng') answer(false);
      else if (a === 'play' && p) speak(p[1], 'en-US', 1);
      else if (a === 'slow' && p) speak(p[1], 'en-US', 0.7);
      else if (a === 'next') { const miss = st.res.filter(r => !r.ok).map(r => r.p); st.round++; st.queue = shuf(miss); st.i = 0; st.res = []; st.phase = 'card'; render(); scrollToCard(box, true); }
      else if (a === 'end') { st.phase = 'review'; const s = getStore(); touchToday(s); saveStore(s); updateStreakBadge(); render(); }
      else if (a === 'again') { start(); scrollToCard(box, true); }
      else if (a === 'close' && opts.onClose) opts.onClose();
    };
    start();
    return { restart: start };
  }

  /* ---------- オフライン対応（Service Worker） ---------- */
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }

  /* ---------- 公開 ---------- */
  window.EA = {
    BASE_PHRASES, CUSTOM_CAT, recognitionSupported,
    esc, dateKey, getStore, saveStore, getCustomPhrases, saveCustomPhrases, getAllPhrases,
    isFavorite, toggleFavorite, markStudied, recordResult, countSpeak, getWeakPhrases, calcStreak, updateStreakBadge,
    splitJa, usageFor, renderUsage, autoSpeak, setGenre, getPhrasesFor, populateGenreSelect, ensureNonEmpty,
    speak, createRecognizer, compareText, bestMatch,
    downloadBackup, importBackup,
    getPrefs, setPref, hasPhrase, addCustomPhrase, addToReview,
    getTalkLog, saveTalkLog, addTalkEntry, kanaHints, renderKana,
    getDuePhrases, daysUntil, parseKey, toast, translate, decodeEntities, normJa,
    getPins, savePins, isPinned, togglePin, markPinUsed,
    getKeepsakes, saveKeepsakes, addKeepsake, hasKeepsake,
    getLists, saveLists, getPlan, savePlan, clearPlan,
    attachPronunciation, renderChips, PASS_SCORE, cardDrill, drillSecs, scrollToCard,
    getProfile, saveProfile, getLetters, saveLetters, getDiary, saveDiary, addDiaryEntry, MOODS,
    getNihongo, saveNihongo, getRoadmap, saveRoadmap, getMeetings, saveMeetings, summarizePlan, archivePlan, newId,
    getDmNotes, saveDmNotes, getTalks, saveTalks
  };

  document.addEventListener('DOMContentLoaded', updateStreakBadge);
})();
