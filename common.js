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
      ["文法・表現パターン", "It's so good to see you! How have you been?", "会えてうれしい！元気にしてた？（1〜2週間ぶりの第一声）"],
      ["文法・表現パターン", "Long time no see!", "すっごく久しぶり！（何か月〜何年ぶり）"],
      ["文法・表現パターン", "It's been a while! You look great!", "久しぶり！元気そうだね！（数週間〜数か月ぶり）"],
      ["文法・表現パターン", "I've been good! Work's been busy, but I'm doing well.", "元気だったよ！仕事は忙しかったけど、元気にしてる。"],
      ["文法・表現パターン", "I feel so supported by you.", "あなたにすごく支えられてると感じる。（feel ＋ 過去分詞）"],
      ["文法・表現パターン", "Thank you for your support.", "支えてくれてありがとう。（support：名詞）"],
      ["文法・表現パターン", "You always make me feel special.", "あなたはいつも私を特別な気持ちにしてくれる。（make 人 feel ～）"],
      ["文法・表現パターン", "I feel valued at work.", "職場で大切にされてると感じる。（valued：大切にされている）"],
      ["文法・表現パターン", "I felt a little left out.", "ちょっと仲間外れな気がした。（left out）"],
      ["文法・表現パターン", "I feel loved.", "愛されてると感じる。（loved：過去分詞）"],
      ["文法・表現パターン", "You make me feel at home.", "あなたといると落ち着く。（feel at home：くつろげる）"],
      ["文法・表現パターン", "I feel understood.", "分かってもらえてると感じる。（understood：過去分詞）"],
      ["文法・表現パターン", "I really worry about you.", "本当にあなたのことが心配。（1語の really は動詞の前）"],
      ["文法・表現パターン", "I worry about you too much.", "あなたのことを心配しすぎちゃう。（too much は文の最後）"],
      ["文法・表現パターン", "I like sushi very much.", "お寿司がすごく好き。（very much は文の最後）"],
      ["文法・表現パターン", "I'm always happy when I'm with you.", "あなたといるといつも幸せ。（be動詞のあとに always）"],
      ["文法・表現パターン", "I miss you so much.", "すごく会いたい。（so much は文の最後）"],
      ["文法・表現パターン", "I can't really explain it.", "うまく説明できない。（can't のあとに really）"],
      ["文法・表現パターン", "You speak English very well.", "英語すごく上手だね。（well は目的語のあと）"],
      ["文法・表現パターン", "We met at a cafe in Naka-Meguro yesterday.", "昨日、中目黒のカフェで会った。（場所 → 時の順）"],
      ["文法・表現パターン", "Sometimes I miss Japanese food.", "ときどき日本食が恋しくなる。（sometimes は文頭もOK）"],
      ["文法・表現パターン", "I've already eaten.", "もう食べたよ。（already は have のあと）"],
      ["文法・表現パターン", "I live in Tokyo.", "東京に住んでるよ。（都市は in）"],
      ["文法・表現パターン", "Let's meet on Thursday.", "木曜に会おう。（曜日は on）"],
      ["文法・表現パターン", "I'll meet you at the station at 8:30.", "8時半に駅で会おう。（地点・時刻は at）"],
      ["文法・表現パターン", "I'll go home after dinner.", "夜ごはんのあと家に帰るね。（go home に to はいらない）"],
      ["文法・表現パターン", "Let's discuss it tomorrow.", "明日それについて話し合おう。（discuss に about はいらない）"],
      ["文法・表現パターン", "I bought this for you.", "これ、あなたに買ったんだ。（for：〜のために）"],
      ["文法・表現パターン", "We arrived at the station at nine.", "9時に駅に着いた。（arrive at：地点）"],
      ["文法・表現パターン", "I need to finish it by Friday.", "金曜までに終わらせないと。（by：期限）"],
      ["文法・表現パターン", "I'll see you in three days.", "3日後に会おうね。（in：今から〜後）"],
      ["文法・表現パターン", "Can I eat this with chopsticks?", "これ、お箸で食べてもいい？（with：道具）"],
      ["文法・表現パターン", "She's from Germany.", "彼女はドイツ出身だよ。（from：出身）"],
      ["文法・表現パターン", "I'm on the train.", "今電車に乗ってるよ。（電車・バスは on、車は in）"],
      ["文法・表現パターン", "I slept well last night.", "昨日はよく眠れた。（SV＋どのように＋いつ）"],
      ["文法・表現パターン", "You look tired today.", "今日は疲れてるみたいだね。（SVC：look ＋ 形容詞）"],
      ["文法・表現パターン", "I really love sushi.", "お寿司が本当に大好き。（SVO：really は動詞の前）"],
      ["文法・表現パターン", "She gave me a candle for my birthday.", "彼女が誕生日にキャンドルをくれた。（SVOO：人 → 物）"],
      ["文法・表現パターン", "You always make me happy.", "あなたはいつも私を幸せにしてくれる。（SVOC：make 人 ＋ 形容詞）"],
      ["文法・表現パターン", "I had coffee at a cafe yesterday.", "昨日カフェでコーヒーを飲んだ。（場所 → 時の順）"],
      ["文法・表現パターン", "I always think about you.", "いつもあなたのことを考えてる。（1語の always は動詞の前）"],
      ["文法・表現パターン", "What do you usually do on weekends?", "週末はたいてい何してるの？（疑問詞 → do → 主語 → 動詞）"],
      ["文法・表現パターン", "I didn't sleep much last night.", "昨日はあまり寝なかった。（didn't ＋ 原形）"],
      ["文法・表現パターン", "Thank you for the lovely day.", "素敵な一日をありがとう。（Thank you for ＋ 名詞）"],
      ["文法・表現パターン", "I don't have anyone to talk to openly.", "本音で話せる人がいない。"],
      // ---- as ～ as possible（2026-11-17） ----
      ["文法・表現パターン", "I'll text you as soon as I can.", "できるだけ早く連絡するね。（as soon as I can：できるだけ早く）"],
      ["文法・表現パターン", "Try to speak Japanese as much as possible.", "できるだけたくさん日本語を話してみて。（as much as possible：できるだけたくさん）"],
      ["文法・表現パターン", "I'll be as quiet as possible.", "できるだけ静かにするね。（as ～ as possible の真ん中は形容詞もOK）"],
      ["文法・表現パターン", "Let's walk as fast as we can.", "できるだけ速く歩こう。（as fast as we can：できるだけ速く）"],
      ["文法・表現パターン", "I want to see you as often as I can.", "できるだけたくさん会いたいな。（as often as I can：できるだけ頻繁に）"],
      // ---- SVOC make / find / keep / leave / call（2026-11-17） ----
      ["文法・表現パターン", "You make me happy.", "あなたといると幸せになる。（make ＋ 人 ＋ 状態）"],
      ["文法・表現パターン", "I find Japanese really interesting.", "日本語ってすごく面白いと思う。（find ＋ もの ＋ 状態）"],
      ["文法・表現パターン", "This blanket keeps me warm.", "この毛布があると暖かい。（keep ＋ もの・人 ＋ 状態）"],
      ["文法・表現パターン", "Leave the light on, please.", "電気、つけたままにしておいてね。（leave ＋ もの・人 ＋ 状態）"],
      ["文法・表現パターン", "You can call me Yoh.", "〇〇って呼んでいいよ。（call ＋ 人 ＋ 名前。自分の呼び名に変えて使う）"],
      ["文法・表現パターン", "I think you're really talented.", "あなたは本当に才能があると思う。（think ＋ もの・人 ＋ 状態）"],
      ["文法・表現パターン", "I need to get my hair cut.", "髪を切ってもらわなきゃ。（get ＋ もの ＋ 状態・過去分詞）"],
      ["文法・表現パターン", "You always make me smile.", "あなたといると、いつも笑顔になっちゃう。（make ＋人＋動詞の原形：〜させる）"],
      ["文法・表現パターン", "I find it hard to wake up early.", "朝早く起きるのって大変だと思う。（find it ＋形容詞＋to ～：〜するのは…だと思う）"],
      ["文法・表現パターン", "I found the coffee here a little bitter.", "ここのコーヒー、ちょっと苦いと思った。（find の過去形 found：飲んでみて感じた）"],
      ["文法・表現パターン", "Keep the door open.", "ドア、開けたままにしておいて。（keep ＋ もの ＋ 状態）"],
      ["文法・表現パターン", "The news made me really sad.", "その知らせで、すごく悲しくなった。（原因が主語の make）"],
      // ---- would＝頭の中の想像（2026-11-20） ----
      ["文法・表現パターン", "I want to see the Christmas lights!", "イルミネーション見たい！（見に行こう！）（I want to ～!＝〜したい！（現実））"],
      ["文法・表現パターン", "I'd love to go, but I have work tomorrow.", "行きたいんだけど、明日仕事なんだ。（I'd love to ～, but ...＝〜したいんだけど…（一歩引く））"],
      ["文法・表現パターン", "I'd like to hear your story.", "あなたの話を聞いてみたいな。（I'd like to ～＝〜したいです（ていねい））"],
      ["文法・表現パターン", "It would be nice to go to Germany together someday.", "いつか一緒にドイツに行けたら素敵だろうな。（It would be nice to ～＝〜できたら素敵だろうな（想像））"],
      ["文法・表現パターン", "If I were you, I'd take a break.", "俺だったら、ちょっと休むかな。（If I were you, I'd ～＝俺だったら〜かな（想像の中の自分））"],
      ["文法・表現パターン", "I could pick you up at the station.", "よかったら駅まで迎えに行けるよ。（I could ～＝〜できるよ（できなくはない））"],
      ["文法・表現パターン", "I want to run! Let's go!", "走りたい！行こう！（want to＝今すぐ・本当に〜したい）"],
      ["文法・表現パターン", "I would run, but I don't have my shoes.", "走りたいんだけど、靴を持ってないんだよね。（would＝気持ちはあるけど…）"],
      ["文法・表現パターン", "I want to see the Christmas lights! Let's go!", "今すぐイルミネーション見たい！見に行こう！（want to＝今すぐ・本当に）"],
      // ---- 頭につける日本語（2026-11-16） ----
      ["文法・表現パターン", "I would say it's about 30 minutes.", "私としては、30分くらいかな。（I would say ～：私としては〜かな＝意見をやわらげる）"],
      ["文法・表現パターン", "I'd say it's fine.", "私としては大丈夫だと思う。（I'd say ～：言い切りをやわらげる）"],
      ["文法・表現パターン", "If I were you, I would rest at home.", "私なら家で休むかな。（would＝私なら〜する）"],
      ["文法・表現パターン", "We could call it an early night.", "疲れてるなら、今日は早めに切り上げるのもアリだよ。（could＝〜するのもアリ）"],
      ["文法・表現パターン", "You should try the ramen here.", "ここのラーメン、食べてみた方がいいよ。（should＝〜した方がいい）"],
      ["文法・表現パターン", "I might be a little late.", "もしかしたら少し遅れるかも。（might＝もしかしたら）"],
      ["文法・表現パターン", "You must be tired.", "きっと疲れてるよね。（must＝きっと〜だ）"],
      ["文法・表現パターン", "I used to play soccer.", "昔はサッカーしてたんだ。（used to＝昔は）"],
      ["文法・表現パターン", "I'm going to visit my parents this weekend.", "今週末は実家に帰るつもり。（be going to＝決めてた予定）"],
      ["文法・表現パターン", "I'll get the check.", "じゃあ、お会計は私が。（I'll＝今決めた「じゃあ〜するね」）"],
      ["文法・表現パターン", "I hope your audition goes well.", "オーディションうまくいくといいね。（I hope＝ありえることを願う）"],
      ["文法・表現パターン", "Even if it rains, let's go.", "たとえ雨でも行こう。（even if＝たとえ〜でも）"],
      ["文法・表現パターン", "I would stay home.", "私なら家にいるかな。（would＝私なら〜する）"],
      ["文法・表現パターン", "We could go to a cafe.", "カフェに行くのもアリだね。（could＝〜できる・〜するのもアリ）"],
      // ---- 提案の強さ must / should / would / could（2026-11-16） ----
      ["文法・表現パターン", "You must take vitamin A.", "ビタミンA摂らなきゃだめだよ。（must：強い。命令に近い）"],
      ["文法・表現パターン", "You should take vitamin A.", "ビタミンA摂った方がいいよ。（should：中くらいのアドバイス）"],
      ["文法・表現パターン", "Some vitamin A would help.", "ビタミンAを少し摂ったら、役立つと思うよ。（would：やわらかい提案。結果を言う）"],
      ["文法・表現パターン", "You could try vitamin A.", "ビタミンAを試すのもアリだよ。（could：やわらかい提案。選択肢を出す）"],
      ["文法・表現パターン", "A hot bath would help.", "お風呂に入ったら楽になると思うよ。（would：やわらかい提案）"],
      ["文法・表現パターン", "You should go to bed early.", "早く寝た方がいいよ。（should：ふつうのアドバイス）"],
      ["文法・表現パターン", "Some sleep would be good for you.", "ちょっと寝たらいいと思うよ。（would：やわらかい提案）"],
      // ---- 無生物主語・責めない言い方（2026-11-16） ----
      ["文法・表現パターン", "This photo makes me happy.", "この写真を見ると幸せな気持ちになる。（原因を主語に make）"],
      ["文法・表現パターン", "This bus takes you to Shibuya.", "このバスに乗れば渋谷に行けるよ。（乗り物 takes you to ～）"],
      ["文法・表現パターン", "What made you want to come to Japan?", "なんで日本に来たいと思ったの？（What made you ～?）"],
      ["文法・表現パターン", "The rain kept us inside all day.", "雨のせいで一日中家にいたよ。（keep ～ inside）"],
      ["文法・表現パターン", "This app helps me keep studying English.", "このアプリのおかげで英語の勉強が続いてる。（help me ～）"],
      ["文法・表現パターン", "Spicy food makes me sweat.", "辛いものを食べると汗が出る。（make me sweat）"],
      ["文法・表現パターン", "Does this place remind you of Germany?", "ここ、ドイツを思い出す？（remind you of ～）"],
      ["文法・表現パターン", "It's a five-minute walk to the station.", "5分歩けば駅に着くよ。（a five-minute walk）"],
      ["文法・表現パターン", "That makes me feel better.", "その話を聞いて安心した。（That makes me feel better.）"],
      ["文法・表現パターン", "Did something come up?", "何かあった？（急用でもできた？）"],
      ["文法・表現パターン", "Did you get my message?", "メッセージ届いた？（返事の催促をやわらかく）"],
      ["文法・表現パターン", "Is everything OK? I was a little worried.", "大丈夫？ ちょっと心配したよ。"],
      ["文法・表現パターン", "What makes you say that?", "どうしてそう思うの？（興味があって聞く）"],
      ["文法・表現パターン", "I wish you'd told me.", "言ってくれたらよかったのに。"],
      ["文法・表現パターン", "I feel a little lonely when we don't talk.", "話せないと、ちょっと寂しいな。（I メッセージ）"],
      ["文法・表現パターン", "Maybe we could try a different place next time.", "次は違うところにしてみようか。（Maybe we could ～）"],
      ["文法・表現パターン", "Would you mind not doing that?", "それ、やめてもらえる？（ていねいなお願い）"],
      ["文法・表現パターン", "Is something bothering you?", "何か気になってることある？"],
      // ---- 日本語→英語の発想（2026-11-16） ----
      ["文法・表現パターン", "Where am I?", "ここはどこ？（道に迷って。Where is here? は ×）"],
      ["文法・表現パターン", "What time do you close?", "このお店、何時まで？（お店の人 you を主語に）"],
      ["文法・表現パターン", "I have a headache.", "頭が痛い。（体の不調は I have ～）"],
      ["文法・表現パターン", "I'm hungry.", "お腹すいた。（お腹ではなく I が主語）"],
      ["文法・表現パターン", "I'm lost.", "道に迷っちゃった。（lost＝迷っている状態）"],
      ["文法・表現パターン", "I can't find my wallet!", "財布がない！（私が見つけられない、と考える）"],
      ["文法・表現パターン", "Do you speak Japanese?", "日本語話せる？（言語は Do you speak ～?）"],
      ["文法・表現パターン", "I'm off today.", "今日は休みなんだ。（off＝仕事が休み）"],
      ["文法・表現パターン", "You get a great view from here.", "ここ、景色いいね。（you は「人は一般に」の意味）"],
      ["文法・表現パターン", "Do you have Wi-Fi?", "Wi-Fi ありますか？（お店・ホテルには Do you have ～?）"],
      ["文法・表現パターン", "Do you have any siblings?", "兄弟いる？（家族は have。siblings＝兄弟姉妹）"],
      ["文法・表現パターン", "Do you have a minute?", "ちょっと時間ある？（a minute＝ちょっと）"],
      ["文法・表現パターン", "I have plans tonight.", "今夜は予定があるんだ。（予定は I have plans）"],
      ["文法・表現パターン", "I have a fever.", "熱がある。（症状は I have ～）"],
      ["文法・表現パターン", "Do you have any ideas?", "何かいい考えある？"],
      ["文法・表現パターン", "Is there a convenience store nearby?", "近くにコンビニある？（場所にあるかは Is there ～?）"],
      ["文法・表現パターン", "There are so many people here.", "ここ人が多いね。（場所に存在 → there are）"],
      ["文法・表現パターン", "Do you have any vegetarian options?", "ベジタリアンのメニューありますか？（お店には Do you have ～?）"],
      ["文法・表現パターン", "Do you have class tomorrow?", "明日は授業ある？（予定は Do you have ～?）"],
      ["文法・表現パターン", "I don't have much money.", "お金あんまりないんだ。"],
      ["文法・表現パターン", "No, I don't.", "うん、飲まない。（しないなら No）"],
      ["文法・表現パターン", "Welcome back! How was your day?", "おかえり、お疲れさま。（今日どうだった？とねぎらう）"],
      ["文法・表現パターン", "This looks delicious!", "いただきます！（おいしそう！とほめる）"],
      ["文法・表現パターン", "That was delicious, thank you!", "ごちそうさま。（おいしかった、ありがとう）"],
      ["文法・表現パターン", "Have a good day!", "いってらっしゃい。（いい一日を！）"],
      ["文法・表現パターン", "Thank you so much!", "すみません、ありがとうございます。（お礼の「すみません」は Thank you）"],
      ["文法・表現パターン", "I can't wait!", "楽しみ！（待ちきれない）"],
      ["文法・表現パターン", "Oh well, it happens.", "しょうがないね。（まあ、よくあることだよ）"],
      ["文法・表現パターン", "No, I'm good. Thanks.", "大丈夫です（いりません）。（断るときは No を先に）"],
      ["文法・表現パターン", "How was your day?", "おかえり、今日どうだった？"],
      ["文法・表現パターン", "No, I don't drink coffee.", "うん、コーヒーは飲まないんだ。"],
      ["文法・表現パターン", "She's a good cook.", "彼女は料理が上手。（a good cook＝料理上手な人）"],
      ["文法・表現パターン", "I'm shy around new people.", "人見知りなんだ。（知らない人の前だと恥ずかしい）"],
      ["文法・表現パターン", "I made it!", "間に合った！"],
      ["文法・表現パターン", "I overslept.", "寝坊しちゃった。（overslept＝寝すぎた）"],
      ["文法・表現パターン", "Let me think about it.", "ちょっと考えさせて。"],
      ["文法・表現パターン", "How can I put it?", "なんて言えばいいかな。"],
      ["文法・表現パターン", "Be careful!", "気をつけてね。"],
      ["文法・表現パターン", "Sorry I'm late.", "遅れてごめん。"],
      ["文法・表現パターン", "I'm not good at cooking.", "料理は苦手なんだ。"],
      ["文法・表現パターン", "Spring is here!", "春になったね！（季節が「来た」と考える）"],
      ["文法・表現パターン", "It's getting dark.", "暗くなってきたね。（getting＝だんだん〜になってきた）"],
      ["文法・表現パターン", "I'm getting sleepy.", "眠くなってきた。"],
      ["文法・表現パターン", "I'm moving next month.", "来月引っ越すことになったんだ。（決まった予定は進行形）"],
      ["文法・表現パターン", "You can speak Japanese now!", "日本語話せるようになったね！（「今は話せる」と考える）"],
      ["文法・表現パターン", "I've started to like natto.", "納豆、好きになってきた。（start to like）"],
      ["文法・表現パターン", "That'll be 3,000 yen.", "お会計は3000円になります。（That'll be ～）"],
      ["文法・表現パターン", "We've been together for a year.", "付き合って1年になるね。（ずっと一緒にいる＝現在完了）"],
      ["文法・表現パターン", "It's cooler now.", "涼しくなったね。（「今は涼しい」と考える）"],
      ["文法・表現パターン", "We got close really fast.", "すぐ仲良くなったよね。（get close＝仲良くなる）"],
      // ---- 「他・それ以外」else / other / another / except / besides（2026-11-15） ----
      ["文法・表現パターン", "Do you need anything else?", "ほかに何かいる？（anything else：ほかに何か）"],
      ["文法・表現パターン", "Let's go somewhere else.", "ほかの場所に行こう。（somewhere else：ほかの場所）"],
      ["文法・表現パターン", "What else do you want to eat?", "ほかに何食べたい？（what else：ほかに何）"],
      ["文法・表現パターン", "Do you know any other good places?", "ほかにいい場所知ってる？（other ＋ 複数の名詞）"],
      ["文法・表現パターン", "Can I have another beer?", "ビールもう1杯もらえる？（another ＋ 1つ）"],
      ["文法・表現パターン", "Where's the other chopstick?", "もう片方のお箸どこ？（the other：2つのうちもう片方）"],
      ["文法・表現パターン", "Some people like natto, and others don't.", "納豆が好きな人もいれば、そうじゃない人もいる。（others：ほかの人たち）"],
      ["文法・表現パターン", "I eat everything except natto.", "納豆以外は何でも食べるよ。（except：〜を除いて）"],
      ["文法・表現パターン", "I don't have any plans other than work.", "仕事以外、予定はないよ。（other than：〜以外に）"],
      ["文法・表現パターン", "Besides sushi, what do you like?", "お寿司のほかに何が好き？（besides：〜に加えて）"],
      ["文法・表現パターン", "Let's do it another time.", "また今度にしよう。（another time：別のとき）"],
      ["文法・表現パターン", "I'm a little tired, but other than that, I'm fine.", "ちょっと疲れてるけど、それ以外は元気だよ。（other than that：それ以外は）"],
      // ---- 「最近」recently / lately / these days（2026-11-14） ----
      ["文法・表現パターン", "I bought a new watch recently.", "最近、新しい時計を買ったんだ。（recently ＋ 過去形）"],
      ["文法・表現パターン", "I recently started yoga.", "最近ヨガを始めたんだ。（recently は動詞の前にも置ける）"],
      ["文法・表現パターン", "We started dating recently.", "私たち、最近付き合い始めたばかりなの。（recently ＋ 過去形）"],
      ["文法・表現パターン", "Have you seen any good movies recently?", "最近、何かいい映画見た？（recently / lately どちらもOK）"],
      ["文法・表現パターン", "I've been really busy lately.", "最近ずっと忙しくて。（have been ＋ lately）"],
      ["文法・表現パターン", "I haven't slept well lately.", "最近よく眠れてない。（haven't ＋ lately）"],
      ["文法・表現パターン", "How have you been lately?", "最近どうしてた？（久しぶりの相手に）"],
      ["文法・表現パターン", "What have you been up to lately?", "最近、何してたの？（be up to ～：〜をしている）"],
      ["文法・表現パターン", "You've been studying Japanese hard lately.", "最近、日本語の勉強がんばってるね。（have been ～ing ＋ lately）"],
      ["文法・表現パターン", "I go to the gym a lot these days.", "最近はよくジムに行ってる。（現在形 ＋ these days）"],
      ["文法・表現パターン", "It's cold these days.", "最近は寒いね。（現在形 ＋ these days）"],
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
      ["構文暗唱・高校基礎", "I'd rather stay home tonight.", "今夜はむしろ家にいたい。（would rather ＋ 動詞）"],
      ["会う直前・会ったときの一言", "I missed you!", "会いたかった！（miss：いなくてさみしい）"],
      ["会う直前・会ったときの一言", "I've been looking forward to seeing you all week.", "今週ずっと会えるのを楽しみにしてたよ。（have been ～ing：ずっと〜してた）"],
      ["会う直前・会ったときの一言", "You look so beautiful tonight.", "今夜すごくきれいだね。（look ＋ 形容詞）"],
      ["会う直前・会ったときの一言", "I love your outfit today!", "今日の服すごくいいね！（outfit：コーディネート）"],
      ["会う直前・会ったときの一言", "That looks great on you.", "それすごく似合ってるね。（look great on 人）"],
      ["会う直前・会ったときの一言", "Your hair looks really nice today.", "今日の髪型すごくいいね。"],
      ["会う直前・会ったときの一言", "You're so cute today.", "今日すごくかわいいね。"],
      ["会う直前・会ったときの一言", "Thank you for making time for me. I know you're busy.", "時間を作ってくれてありがとう。忙しいのに。"],
      ["会う直前・会ったときの一言", "Thanks for coming all the way here.", "わざわざ来てくれてありがとう。（all the way：はるばる）"],
      ["会う直前・会ったときの一言", "I'm so happy we could meet today.", "今日会えて本当にうれしい。"],
      ["会う直前・会ったときの一言", "How was your day today?", "今日はどんな一日だった？"],
      ["会う直前・会ったときの一言", "How did your audition go?", "オーディションどうだった？"],
      ["会う直前・会ったときの一言", "You must be tired. Thanks for coming anyway.", "疲れてるでしょ。それでも来てくれてありがとう。"],
      ["会う直前・会ったときの一言", "Are you hungry?", "お腹すいてる？"],
      ["会う直前・会ったときの一言", "What do you feel like eating?", "何食べたい気分？（feel like ～ing／名詞：〜したい気分）"],
      ["会う直前・会ったときの一言", "I found a nice place. I think you'll like it.", "いいお店見つけたよ。気に入ると思う。"],
      ["会う直前・会ったときの一言", "I brought you something small.", "ちょっとしたものを持ってきたよ。"],
      ["会う直前・会ったときの一言", "I'm here! Where are you?", "着いたよ！どこにいる？"],
      ["会う直前・会ったときの一言", "I'm right by the ticket gate.", "改札のすぐそばにいるよ。（ticket gate：改札）"],
      ["会う直前・会ったときの一言", "I'll be there in five minutes.", "あと5分で着くよ。（in ＋ 時間：〜後に）"],
      ["会う直前・会ったときの一言", "Sorry I'm late! Thanks for waiting.", "遅れてごめん！待っててくれてありがとう。"],
      ["会う直前・会ったときの一言", "Shall we go?", "じゃあ行こうか？"],
      // ---- 会う前の練習・旧ロールプレイ・旧手紙の文（2026-11-16） ----
      ["会う前：食事", "What are you in the mood for?", "何が食べたい気分？"],
      ["会う前：食事", "Everything looks so good. What do you recommend?", "全部おいしそう。おすすめは何？"],
      ["会う前：食事", "Can I try a bite of yours?", "一口もらってもいい？"],
      ["会う前：食事", "Do you want to share a few dishes?", "いくつかシェアしない？"],
      ["会う前：食事", "This is delicious! Try it.", "これおいしい！食べてみて。"],
      ["会う前：食事", "I'm stuffed. I can't eat another bite.", "もうお腹いっぱい。一口も入らないよ。"],
      ["会う前：食事", "Is there anything you can't eat?", "食べられないものはある？"],
      ["会う前：食事", "I'll get this one. It's on me.", "ここは私が払うよ。ごちそうする。"],
      ["会う前：食事", "Let's split the bill.", "割り勘にしよう。"],
      ["会う前：食事", "Could we get the check, please?", "お会計をお願いします。"],
      ["会う前：食事", "Could I have a glass of water, please?", "お水をいただけますか？"],
      ["会う前：食事", "Is this spicy?", "これは辛いですか？"],
      ["会う前：食事", "What should we order for dessert?", "デザートは何にしよう？"],
      ["会う前：食事", "Thank you for the lovely dinner.", "素敵なディナーをありがとう。"],
      ["会う前：食事", "Cheers! To us!", "乾杯！私たちに！"],
      ["会う前：観光", "Where do you want to go first?", "まずどこに行きたい？"],
      ["会う前：観光", "Let's take a photo together.", "一緒に写真を撮ろう。"],
      ["会う前：観光", "Could you take a picture of us, please?", "私たちの写真を撮っていただけますか？"],
      ["会う前：観光", "How far is it from here?", "ここからどのくらいですか？"],
      ["会う前：観光", "Shall we walk or take the train?", "歩く？それとも電車にする？"],
      ["会う前：観光", "This view is incredible.", "この景色、本当に素敵。"],
      ["会う前：観光", "I've always wanted to come here.", "ずっとここに来たかったんだ。"],
      ["会う前：観光", "Are you getting tired? Let's take a break.", "疲れてない？ちょっと休憩しよう。"],
      ["会う前：観光", "What's that building over there?", "あそこの建物は何？"],
      ["会う前：観光", "Let's pick up a souvenir.", "お土産を買おう。"],
      ["会う前：観光", "Which way is the station?", "駅はどっちですか？"],
      ["会う前：観光", "Hold my hand so we don't get lost.", "はぐれないように手をつないでおこう。"],
      ["会う前：観光", "I'll show you my favorite spot.", "お気に入りの場所を案内するね。"],
      ["会う前：観光", "Do you want to check that out?", "あれ、見に行ってみる？"],
      ["会う前：家で過ごす", "Make yourself at home.", "くつろいでね。"],
      ["会う前：家で過ごす", "Would you like something to drink?", "何か飲む？"],
      ["会う前：家で過ごす", "What do you feel like watching?", "何を観たい気分？"],
      ["会う前：家で過ごす", "Let's cook together tonight.", "今夜は一緒に料理しよう。"],
      ["会う前：家で過ごす", "Can you pass me the salt?", "塩を取ってもらえる？"],
      ["会う前：家で過ごす", "I love just relaxing with you like this.", "こうやってあなたとのんびりするの、大好き。"],
      ["会う前：家で過ごす", "Do you want to play a game?", "ゲームする？"],
      ["会う前：家で過ごす", "Are you comfortable? Do you need a blanket?", "快適？ブランケットいる？"],
      ["会う前：家で過ごす", "Let's do nothing today.", "今日は何もしないで過ごそう。"],
      ["会う前：家で過ごす", "I'll do the dishes.", "洗い物は私がやるね。"],
      ["会う前：家で過ごす", "Stay a little longer.", "もう少しゆっくりしていって。"],
      ["会う前：家で過ごす", "I had such a cozy time with you.", "あなたとすごく心地いい時間を過ごせたよ。"],
      ["会う前：家で過ごす", "Shall we order takeout?", "出前（テイクアウト）を頼もうか？"],
      ["会う前：再会・別れ際", "I missed you so much.", "すごく会いたかったよ。"],
      ["会う前：再会・別れ際", "It's so good to see you.", "会えて本当にうれしい。"],
      ["会う前：再会・別れ際", "How was your trip?", "道中はどうだった？"],
      ["会う前：再会・別れ際", "I can't believe it's already time to go.", "もう帰る時間なんて信じられない。"],
      ["会う前：再会・別れ際", "Text me when you get home.", "家に着いたら連絡してね。"],
      ["会う前：再会・別れ際", "I'll miss you. See you soon!", "寂しくなるよ。また近いうちにね！"],
      ["場面で言う（旧ロールプレイ）", "Not yet, could we have a few more minutes?", "【レストランで注文する】まだ決まっていないので、もう少し時間がほしいと伝える"],
      ["場面で言う（旧ロールプレイ）", "Could we have some water, please?", "【レストランで注文する】お水をお願いする"],
      ["場面で言う（旧ロールプレイ）", "I'll have the pasta. Is it spicy?", "【レストランで注文する】パスタを頼み、辛いかどうか聞く"],
      ["場面で言う（旧ロールプレイ）", "That's all for now. We'll order dessert later.", "【レストランで注文する】それで全部。デザートはあとで頼むと伝える"],
      ["場面で言う（旧ロールプレイ）", "I ordered the pasta. Do you want to try a bite?", "【食事しながらおしゃべり】パスタを頼んだと伝え、一口食べるか聞く"],
      ["場面で言う（旧ロールプレイ）", "Yes, please! Wow, this is really good.", "【食事しながらおしゃべり】ぜひ食べたい、と答える"],
      ["場面で言う（旧ロールプレイ）", "It was busy, but I was looking forward to seeing you today.", "【食事しながらおしゃべり】忙しかったけど、今日会えるのを楽しみにしていたと伝える"],
      ["場面で言う（旧ロールプレイ）", "Let's make a toast. Cheers!", "【食事しながらおしゃべり】乾杯しよう、と言う"],
      ["場面で言う（旧ロールプレイ）", "It was delicious, thank you.", "【お会計をする】とてもおいしかったと伝える"],
      ["場面で言う（旧ロールプレイ）", "Could we have the check, please?", "【お会計をする】お会計をお願いする"],
      ["場面で言う（旧ロールプレイ）", "Thank you too. I had a wonderful evening.", "【お会計をする】こちらこそ、素敵な夜だったと伝える"],
      ["場面で言う（旧ロールプレイ）", "Thank you! Could you take one more?", "【写真をお願いする】お礼を言って、もう一枚お願いする"],
      ["場面で言う（旧ロールプレイ）", "It's our first time here.", "【写真をお願いする】今日が初めてだと答える"],
      ["場面で言う（旧ロールプレイ）", "Thank you, you too!", "【写真をお願いする】お礼を言って返す"],
      ["場面で言う（旧ロールプレイ）", "Let's ask someone for directions.", "【道を尋ねる】誰かに道を聞こうと提案する"],
      ["場面で言う（旧ロールプレイ）", "Excuse me, how do I get to the station?", "【道を尋ねる】駅への行き方を尋ねる"],
      ["場面で言う（旧ロールプレイ）", "Straight two blocks, then left. Is it far?", "【道を尋ねる】確認して、遠いかどうか聞く"],
      ["場面で言う（旧ロールプレイ）", "Thank you so much for your help!", "【道を尋ねる】お礼を言う"],
      ["場面で言う（旧ロールプレイ）", "It's incredible. I'm so glad we came.", "【観光デート中の会話】本当に素晴らしいと同意し、来られてうれしいと伝える"],
      ["場面で言う（旧ロールプレイ）", "A little. Let's take a break.", "【観光デート中の会話】少し疲れたので休みたいと答える"],
      ["場面で言う（旧ロールプレイ）", "Sounds good! I'd love something warm to drink.", "【観光デート中の会話】いいね、温かい飲み物が飲みたいと答える"],
      ["場面で言う（旧ロールプレイ）", "Okay! Let's pick out matching souvenirs.", "【観光デート中の会話】お揃いのお土産を買おうと提案する"],
      ["場面で言う（旧ロールプレイ）", "Thank you! Your place is so nice.", "【家でくつろぐ】お礼を言って、素敵な部屋だと伝える"],
      ["場面で言う（旧ロールプレイ）", "Coffee would be great, thank you.", "【家でくつろぐ】コーヒーをお願いする"],
      ["場面で言う（旧ロールプレイ）", "I feel like watching a comedy.", "【家でくつろぐ】コメディ映画が観たいと答える"],
      ["場面で言う（旧ロールプレイ）", "I'm fine. I just want to sit next to you.", "【家でくつろぐ】大丈夫、あなたの隣にいたいと伝える"],
      ["場面で言う（旧ロールプレイ）", "How about pasta?", "【一緒に料理する】パスタを作ろうと提案する"],
      ["場面で言う（旧ロールプレイ）", "Sure! Where's the knife?", "【一緒に料理する】快く引き受け、包丁はどこか聞く"],
      ["場面で言う（旧ロールプレイ）", "I will. Can you pass me the salt?", "【一緒に料理する】気をつけると言い、塩を取ってもらうよう頼む"],
      ["場面で言う（旧ロールプレイ）", "I can't wait to eat it.", "【一緒に料理する】食べるのが待ちきれないと伝える"],
      ["場面で言う（旧ロールプレイ）", "I missed you too! It's so good to see you.", "【待ち合わせで再会】自分も会いたかったと返す"],
      ["場面で言う（旧ロールプレイ）", "It was a little long, but seeing you made me feel better.", "【待ち合わせで再会】少し長かったけど、会えて元気が出たと答える"],
      ["場面で言う（旧ロールプレイ）", "I'm starving. Let's eat!", "【待ち合わせで再会】お腹ぺこぺこだと答える"],
      ["場面で言う（旧ロールプレイ）", "Me neither. Time went by so fast.", "【別れ際のあいさつ】あっという間だったと同意する"],
      ["場面で言う（旧ロールプレイ）", "Me too. I was so happy to be with you.", "【別れ際のあいさつ】こちらこそ、一緒にいられて幸せだったと伝える"],
      ["場面で言う（旧ロールプレイ）", "I will. I'll text you as soon as I get home.", "【別れ際のあいさつ】着いたらすぐ連絡すると約束する"],
      ["場面で言う（旧ロールプレイ）", "I'll miss you too. See you soon!", "【別れ際のあいさつ】自分も寂しい、また近いうちに会おうと言う"],
      ["メッセージの一言（旧・手紙）", "Happy birthday.", "お誕生日おめでとう。"],
      ["メッセージの一言（旧・手紙）", "I'm so grateful that you were born.", "あなたが生まれてきてくれたことに、心から感謝しています。"],
      ["メッセージの一言（旧・手紙）", "Every day with you is a treasure to me.", "あなたと過ごす毎日が、私の宝物です。"],
      ["メッセージの一言（旧・手紙）", "Let's laugh a lot together this year, too.", "今年も一緒にたくさん笑いましょう。"],
      ["メッセージの一言（旧・手紙）", "Meeting you is the best thing that has ever happened to me.", "あなたに出会えたことが、私の人生で一番うれしいことです。"],
      ["メッセージの一言（旧・手紙）", "Please let me keep supporting you, always by your side.", "これからも、あなたの一番近くで支えさせてください。"],
      ["メッセージの一言（旧・手紙）", "I love you with all my heart.", "心から愛しています。"],
      ["メッセージの一言（旧・手紙）", "Today is our anniversary.", "今日は私たちの記念日ですね。"],
      ["メッセージの一言（旧・手紙）", "Every day since I met you has been so much fun.", "あなたと出会ってから、毎日がとても楽しいです。"],
      ["メッセージの一言（旧・手紙）", "I want to keep making memories with you, always.", "これからもずっと、一緒に思い出を作っていきたいです。"],
      ["メッセージの一言（旧・手紙）", "Happy anniversary.", "記念日おめでとう。"],
      ["メッセージの一言（旧・手紙）", "Your kindness has saved me more times than I can count.", "あなたの優しさに、何度も救われてきました。"],
      ["メッセージの一言（旧・手紙）", "I want to walk into the future with you.", "この先の未来も、あなたと歩んでいきたいです。"],
      ["メッセージの一言（旧・手紙）", "Thank you so much for everything.", "いつも本当にありがとう。"],
      ["メッセージの一言（旧・手紙）", "Your kindness encourages me every day.", "あなたの優しさに、毎日励まされています。"],
      ["メッセージの一言（旧・手紙）", "I can't put it into words, but my heart is full of gratitude.", "うまく言えないけれど、感謝の気持ちでいっぱいです。"],
      ["メッセージの一言（旧・手紙）", "I'm truly grateful to have you by my side.", "あなたがそばにいてくれることに、心から感謝しています。"],
      ["メッセージの一言（旧・手紙）", "Even in hard times, your words kept me going.", "つらいときも、あなたの言葉に支えられました。"],
      ["メッセージの一言（旧・手紙）", "Thank you so much. I love you.", "本当にありがとう。大好きです。"],
      ["メッセージの一言（旧・手紙）", "You seem so busy lately.", "最近、忙しそうですね。"],
      ["メッセージの一言（旧・手紙）", "I'm a little worried you might be pushing yourself too hard.", "無理しすぎていないか、少し心配しています。"],
      ["メッセージの一言（旧・手紙）", "I know you'll be fine. I'm always cheering for you.", "あなたならきっと大丈夫。いつでも応援しています。"],
      ["メッセージの一言（旧・手紙）", "I know how hard you are working.", "あなたが頑張っているのを、ちゃんと知っています。"],
      ["メッセージの一言（旧・手紙）", "Even on days when things don't go well, your worth doesn't change.", "うまくいかない日があっても、あなたの価値は変わりません。"],
      ["メッセージの一言（旧・手紙）", "I'll always be on your side.", "私はずっとあなたの味方です。"],
      ["メッセージの一言（旧・手紙）", "How are you doing?", "元気にしていますか？"],
      ["メッセージの一言（旧・手紙）", "Today, I suddenly thought of you.", "今日はふとした瞬間に、あなたのことを思い出しました。"],
      ["メッセージの一言（旧・手紙）", "I'm doing my best every day, looking forward to seeing you.", "会える日を楽しみに、毎日頑張っています。"],
      ["メッセージの一言（旧・手紙）", "Being apart makes me realize how much you mean to me.", "離れていると、あなたの大切さがよく分かります。"],
      ["メッセージの一言（旧・手紙）", "There are so many nights when I just want to hear your voice.", "声が聞きたくなる夜がたくさんあります。"],
      ["メッセージの一言（旧・手紙）", "When we meet again, please let me hold you tight.", "次に会えたら、強く抱きしめさせてください。"],
      ["メッセージの一言（旧・手紙）", "I'm sorry about the other day.", "このあいだは、ごめんなさい。"],
      ["メッセージの一言（旧・手紙）", "I never meant to hurt you.", "あなたを傷つけるつもりはありませんでした。"],
      ["メッセージの一言（旧・手紙）", "I'd be happy if we could talk again, slowly.", "もう一度、ゆっくり話せたらうれしいです。"],
      ["メッセージの一言（旧・手紙）", "I regret that my words hurt you.", "自分の言葉があなたを傷つけたこと、反省しています。"],
      ["メッセージの一言（旧・手紙）", "I will cherish your feelings more.", "あなたの気持ちを、もっと大切にします。"],
      ["メッセージの一言（旧・手紙）", "If you can forgive me, I'd like to start again.", "許してもらえるなら、もう一度やり直したいです。"],
      ["メッセージの一言（旧・手紙）", "Hey, long time no see! How've you been?", "久しぶり！元気？"],
      ["メッセージの一言（旧・手紙）", "How's everything? I suddenly felt like reaching out.", "最近どう？ふと連絡したくなっちゃった。"],
      ["メッセージの一言（旧・手紙）", "Let's talk again soon.", "またすぐ話そうね。"],
      ["メッセージの一言（旧・手紙）", "Long time no see. How have you been?", "お久しぶりです。元気にしていましたか？"],
      ["メッセージの一言（旧・手紙）", "I'm looking forward to a day when we can talk slowly.", "今度、ゆっくり話せる日を楽しみにしています。"],
      ["メッセージの一言（旧・手紙）", "Good morning! Let's make today a great one.", "おはよう！今日もいい一日にしようね。"],
      ["メッセージの一言（旧・手紙）", "What's on your schedule today?", "今日の予定は？"],
      ["メッセージの一言（旧・手紙）", "Good morning. Did you sleep well?", "おはよう。よく眠れた？"],
      ["メッセージの一言（旧・手紙）", "Don't push yourself today.", "今日も無理しないでね。"],
      ["メッセージの一言（旧・手紙）", "Goodnight! Talk tomorrow.", "おやすみ！また明日ね。"],
      ["メッセージの一言（旧・手紙）", "Sweet dreams!", "いい夢を！"],
      ["メッセージの一言（旧・手紙）", "You worked hard today.", "今日もおつかれさま。"],
      ["メッセージの一言（旧・手紙）", "Get some good rest. Goodnight.", "ゆっくり休んでね。おやすみ。"],
      ["メッセージの一言（旧・手紙）", "Something funny happened today.", "今日ね、ちょっとおもしろいことがあったよ。"],
      ["メッセージの一言（旧・手紙）", "I'll tell you about it later!", "あとで話すね！"],
      ["メッセージの一言（旧・手紙）", "I've been thinking about you all day.", "今日は一日中あなたのことを考えていたよ。"],
      ["メッセージの一言（旧・手紙）", "When can we meet next?", "次はいつ会えるかな？"],
      ["メッセージの一言（旧・手紙）", "I suddenly wanted to see your face.", "今ふと、あなたの顔が見たくなった。"],
      ["メッセージの一言（旧・手紙）", "It'd be nice just to hear your voice.", "声だけでも聞けたらうれしいな。"],
      ["メッセージの一言（旧・手紙）", "Good luck today! You can do it!", "今日の本番、頑張って！"],
      ["メッセージの一言（旧・手紙）", "Let me know how it went.", "終わったら教えてね。"],
      ["メッセージの一言（旧・手紙）", "You'll be fine. I'm cheering for you all the way.", "あなたなら大丈夫。ずっと応援してるよ。"],
      ["メッセージの一言（旧・手紙）", "Don't push yourself. Just show your usual strength.", "無理せず、いつもの力を出してね。"],
      ["メッセージの一言（旧・手紙）", "Sorry for the late reply!", "返信が遅くなってごめんね！"],
      ["メッセージの一言（旧・手紙）", "I was so swamped.", "バタバタしてたんだ。"],
      ["メッセージの一言（旧・手紙）", "I'm sorry for taking so long to reply.", "返事が遅くなってごめんなさい。"],
      ["メッセージの一言（旧・手紙）", "Thank you for waiting for me.", "待っていてくれてありがとう。"],
      ["メッセージの一言（旧・手紙）", "Are you free this weekend?", "今度の週末、空いてる？"],
      ["メッセージの一言（旧・手紙）", "Let's go get something to eat together!", "一緒にご飯に行こうよ！"],
      ["メッセージの一言（旧・手紙）", "I can't wait for the next time we meet.", "次に会える日が待ち遠しいな。"],
      ["メッセージの一言（旧・手紙）", "Could you tell me which days work for you?", "都合のいい日を教えてもらえる？"]
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
    return { studied: [], quizStats: { correct: 0, total: 0 }, speakCount: 0, history: {}, weaknesses: {}, weakPhrases: {}, favorites: [], resting: [], srs: {}, jaEdits: {} };
  }
  function normalizeStore(s) {
    const d = defaultStore();
    if (!s || typeof s !== 'object') return d;
    d.studied = Array.isArray(s.studied) ? s.studied.filter(x => typeof x === 'string') : [];
    d.favorites = Array.isArray(s.favorites) ? s.favorites.filter(x => typeof x === 'string') : [];
    d.resting = Array.isArray(s.resting) ? s.resting.filter(x => typeof x === 'string') : [];
    const qs = s.quizStats || {};
    // ✏️ 内蔵フレーズの日本語（補足）を自分で直したもの { 英文: 日本語 }（2026-11-19 追加。無くても可）
    d.jaEdits = {};
    if (s.jaEdits && typeof s.jaEdits === 'object' && !Array.isArray(s.jaEdits)) Object.keys(s.jaEdits).slice(0, 3000).forEach(k => {
      const v = s.jaEdits[k];
      if (typeof k === 'string' && k.length <= 500 && typeof v === 'string' && v.trim()) d.jaEdits[k] = v.slice(0, 3000);
    });
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
  function getAllPhrases() {
    const ed = getStore().jaEdits;
    const base = Object.keys(ed).length ? BASE_PHRASES.map(p => ed[p[1]] ? [p[0], p[1], ed[p[1]], p[3]] : p) : BASE_PHRASES;
    return getCustomPhrases().concat(base);
  }
  // 日本語（補足）を書き換える：マイ単語にあればそちらを、内蔵フレーズなら store.jaEdits に保存
  function setJaEdit(en, ja) {
    en = String(en || '').trim(); ja = String(ja || '').trim();
    if (!en || !ja) return false;
    if (getCustomPhrases().some(p => p[1].toLowerCase() === en.toLowerCase())) return updateCustomPhrase(en, ja, null);
    const s = getStore(); s.jaEdits[en] = ja; return saveStore(s);
  }

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
    const st = getStore(), srs = st.srs, today = dateKey(), rest = new Set(st.resting);
    return getAllPhrases().filter(p => !rest.has(p[1]) && srs[p[1]] && srs[p[1]].due <= today);
  }
  function countSpeak() {
    const s = getStore();
    s.speakCount += 1;
    touchToday(s);
    saveStore(s);
  }

  function getWeakPhrases() {
    const st = getStore(), wp = st.weakPhrases, rest = new Set(st.resting);
    return getAllPhrases().filter(p => !rest.has(p[1]) && wp[p[1]] > 0);
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
    const t = '🔥 ' + calcStreak(getStore().history) + '日連続学習';
    if (el) el.textContent = t;
    const line = document.getElementById('streakLine');
    if (line) line.textContent = t;
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
    const rest = new Set(getStore().resting);
    if (selected === 'REST') return all.filter(p => rest.has(p[1]));
    if (selected === 'PIN') return pinPhrases();
    if (selected === 'PREMEET') return getPremeet();
    const act = all.filter(p => !rest.has(p[1]));
    if (selected === 'FAV') { const f = getStore().favorites; return act.filter(p => f.includes(p[1])); }
    if (selected === 'WEAK') return getWeakPhrases();
    if (selected === 'DUE') return getDuePhrases();
    if (selected === 'ALL' || !selected) return act;
    return act.filter(p => p[0] === selected);
  }

  /* ジャンル選択は2段階：①分類（GENRE_GROUPS）→ ②ジャンル。
     実際の値は今までどおり select（#genreSelect）が持つので、各ページの処理は変えなくてよい。
     ここに無いカテゴリは「その他」に入る。 */
  const GENRE_GROUPS = [
    { id: 'base', label: '🎯 全体・復習・マイ単語', cats: [] },
    { id: 'meet', label: '📅 会う前の練習', cats: ['会う直前・会ったときの一言', '会う前：再会・別れ際', '会う前：食事', '会う前：観光', '会う前：家で過ごす', '場面で言う（旧ロールプレイ）'] },
    { id: 'love', label: '💕 恋人・気持ちを伝える', cats: ['メッセージの一言（旧・手紙）', '恋人・パートナーへの思いやり', '愛情・絆を深める表現', 'would / could 恋人同士の会話', '気持ち・関係を伝える', '謝る・誤解をとく', '自分の経験・自分らしさ'] },
    { id: 'care', label: '🤝 寄り添う・話し合う', cats: ['共感する・寄り添う', '励ます・応援する', '不安・悩みを受け止める', '話し合い・意見の違い', '差別・人権・文化を話す'] },
    { id: 'talk', label: '💬 会話・雑談', cats: ['会話フレーズ', '実践フレーズ', '友達・カジュアル雑談', '短く言える版', 'else / tell you what', '音のつながり（リンキング）'] },
    { id: 'gram', label: '📖 文法・単語', cats: ['文法・表現パターン', '文法・文型', '構文暗唱・中学レベル', '構文暗唱・高校基礎', '単語 (単体)', '熟語 (イディオム)', '単語・熟語 (形容詞＋名詞)', '単語・熟語 (副詞＋動詞)', '語彙・コロケーション'] },
    { id: 'other', label: '📁 その他', cats: [] }
  ];
  // 💤 お休み（練習に出さない。あとで戻せる）
  function isResting(en) { return getStore().resting.includes(en); }
  function toggleResting(en) {
    const s = getStore();
    const i = s.resting.indexOf(en);
    if (i >= 0) s.resting.splice(i, 1); else s.resting.push(en);
    saveStore(s);
    return i < 0;
  }
  function setResting(list, on) {
    const s = getStore(), set = new Set(s.resting);
    (list || []).forEach(en => { if (on) set.add(en); else set.delete(en); });
    s.resting = Array.from(set);
    saveStore(s);
    return s.resting.length;
  }
  // 📌 ピン留め → 練習用の形 [カテゴリ, 英語, 日本語]
  function pinPhrases() {
    const all = getAllPhrases(), map = {};
    all.forEach(p => { map[p[1].toLowerCase()] = p; });
    return getPins().map(x => map[String(x.en).toLowerCase()] || ['📌 ピン留め', x.en, x.ja || '']);
  }
  // 📅 会う前セット：ピン留め ＋「会う直前・会ったときの一言」（お休み中は除く）
  function getPremeet() {
    const rest = new Set(getStore().resting), seen = new Set(), out = [];
    pinPhrases().concat(getAllPhrases().filter(p => p[0] === '会う直前・会ったときの一言' && !rest.has(p[1]))).forEach(p => {
      const k = p[1].toLowerCase(); if (!seen.has(k)) { seen.add(k); out.push(p); }
    });
    return out;
  }
  function genreEntries() {
    const rest = new Set(getStore().resting), all = getAllPhrases().filter(p => !rest.has(p[1])), count = {};
    all.forEach(p => { count[p[0]] = (count[p[0]] || 0) + 1; });
    const list = [
      { v: 'ALL', t: '✨ 全ジャンル（ランダム出題）', g: 'base' },
      { v: 'WEAK', t: '🎯 苦手フレーズのみ', g: 'base' },
      { v: 'DUE', t: '⏰ 復習の時期が来たフレーズ', g: 'base' },
      { v: 'FAV', t: '⭐ お気に入りフレーズのみ', g: 'base' },
      { v: 'REST', t: '💤 お休み中のフレーズ', g: 'base' },
      { v: 'PREMEET', t: '📅 会う前セット（ピン留め＋会う直前の一言）', g: 'meet' },
      { v: 'PIN', t: '📌 ピン留めしたフレーズ', g: 'meet' }
    ];
    Object.keys(count).forEach(c => {
      let g = c === CUSTOM_CAT ? 'base' : 'other';
      GENRE_GROUPS.forEach(gr => { if (gr.cats.includes(c)) g = gr.id; });
      list.push({ v: c, t: (c === CUSTOM_CAT ? '⭐ ' : '📁 ') + c, g });
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
      o.textContent = gr.label;
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
      : select.value === 'PIN'
        ? 'ピン留めしたフレーズはまだありません。カード練習の 📍 を押すと、会う日に使いたいフレーズとしてここに集まります。'
      : select.value === 'REST'
        ? 'お休み中のフレーズはありません。練習中に💤を押すと、そのカードは練習に出なくなります。'
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
    if (!cachedVoices.length) loadVoices();
    const go = () => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang || 'en-US';
      u.rate = rate || 1.0;
      const v = pickVoice(u.lang);
      if (v) u.voice = v;
      try { synth.resume(); } catch (e) {}
      synth.speak(u);
    };
    // 再生中に cancel → すぐ speak すると、Chrome / Safari で新しい音声が捨てられることがあるので少し待つ
    if (synth.speaking || synth.pending) { synth.cancel(); setTimeout(go, 120); }
    else go();
  }
  // iPhone の Safari は「最初の読み上げ」が画面タップの中で起きないと、その後のタイマーからの読み上げを出さない。
  // 最初のタップで無音の読み上げを1回して、読み上げを使える状態にしておく
  (function unlockSpeech() {
    if (!('speechSynthesis' in window)) return;
    let done = false;
    const unlock = () => {
      if (done) return; done = true;
      try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; window.speechSynthesis.speak(u); } catch (e) {}
      ['touchend', 'click', 'keydown'].forEach(ev => document.removeEventListener(ev, unlock, true));
    };
    ['touchend', 'click', 'keydown'].forEach(ev => document.addEventListener(ev, unlock, true));
  })();

  /* ---------- 音声認識 ---------- */
  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionSupported = !!SpeechRecognitionCtor;
  // ホーム画面から開いたアプリ表示（standalone）かどうか。iPhone はこの表示だと音声認識が使えないことがある
  const isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

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
      version: 9,   // v6: 英語日記に翻訳の参考(ref)を追加 / v7: DMノート(dmNotes)を追加 / v8: お題で話す(talks)を追加 / v9: 型練習の記録(patterns)を追加
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
      talks: getTalks(),
      patterns: getPatStats()
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
    const hasPat = obj.patterns && typeof obj.patterns === 'object';   // v8以前には無いので、今の記録をそのまま残す
    const incPat = sanitizePatStats(obj.patterns);
    let store, custom, talk, pins, keeps, lists, plan, profile, letters, diary, meetings, nihongo, road, dm, talks, patStats;
    if (mode === 'replace') {
      store = inc; custom = incCustom; talk = incTalk;
      pins = incPins; keeps = incKeeps; lists = incLists; plan = incPlan;
      profile = incProfile; letters = incLetters; diary = incDiary; meetings = incMeet; nihongo = incNi;
      road = hasRoad ? incRoad : getRoadmap();
      dm = hasDm ? incDm : getDmNotes();
      talks = hasTalks ? incTalks : getTalks();
      patStats = hasPat ? incPat : getPatStats();
    } else {
      const cur = getStore();
      store = {
        studied: Array.from(new Set(cur.studied.concat(inc.studied))),
        favorites: Array.from(new Set(cur.favorites.concat(inc.favorites))),
        resting: Array.from(new Set(cur.resting.concat(inc.resting))),
        history: Object.assign({}, cur.history, inc.history),
        quizStats: {
          correct: Math.max(cur.quizStats.correct, inc.quizStats.correct),
          total: Math.max(cur.quizStats.total, inc.quizStats.total)
        },
        speakCount: Math.max(cur.speakCount, inc.speakCount),
        weaknesses: maxMerge(cur.weaknesses, inc.weaknesses),
        weakPhrases: maxMerge(cur.weakPhrases, inc.weakPhrases),
        srs: mergeSrs(cur.srs, inc.srs),
        jaEdits: Object.assign({}, inc.jaEdits, cur.jaEdits)
      };
      const curCustom = getCustomPhrases();
      // 補足の書き換え用ファイル（updateCustom: true）は、同じ英文の日本語・タグを新しい内容で上書きする
      if (obj.partial && obj.updateCustom) incCustom.forEach(ic => {
        const m = curCustom.find(c => c[1].toLowerCase() === ic[1].toLowerCase());
        if (m) { m[2] = ic[2]; if (ic[3]) m[3] = ic[3]; }
      });
      custom = sanitizeCustom(curCustom.concat(incCustom));
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
      patStats = mergePatStats(getPatStats(), incPat);
    }
    const okAll = saveStore(store) && saveCustomPhrases(custom) && saveTalkLog(talk) && savePins(pins) && saveKeepsakes(keeps) && saveLists(lists) && (plan ? savePlan(plan) : (clearPlan(), true)) && saveProfile(profile) && saveLetters(letters) && saveDiary(diary) && saveMeetings(meetings) && saveNihongo(nihongo) && saveRoadmap(road) && saveDmNotes(dm) && saveTalks(talks) && savePatStats(patStats);
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
  // マイ単語の日本語（補足）を書き換える。無ければ追加（内蔵カードの補足を直すときは、同じ英文のマイ単語で上書きする）
  function updateCustomPhrase(en, ja, example) {
    en = String(en || '').trim(); ja = String(ja || '').trim();
    if (!en || !ja) return false;
    const list = getCustomPhrases();
    const i = list.findIndex(p => p[1].toLowerCase() === en.toLowerCase());
    if (i >= 0) { list[i][2] = ja; if (example != null) list[i][3] = String(example).trim(); }
    else list.unshift([CUSTOM_CAT, en, ja, example ? String(example).trim() : '']);
    return saveCustomPhrases(list);
  }
  // 日本語と補足を「日本語（補足）」の形にまとめる。補足の中のカッコは半角にして、表示が崩れないようにする
  function joinJa(main, note) {
    main = String(main || '').trim(); note = String(note || '').trim().replace(/（/g, '(').replace(/）/g, ')');
    return note ? main + '（' + note + '）' : main;
  }
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
      const fix = typeof e.fix === 'string' ? e.fix.trim().slice(0, 3000) : '';   // Claudeの添削（2026-11-17追加。無くても可）
      if (!id || !en) return;
      if (seen.has(id)) {   // 同じ日記が重なったら、翻訳の参考がある方を残す（統合読み込み用）
        const x = out.find(y => y.id === id);
        if (x && !x.ref && ref) x.ref = ref;
        if (x && !x.fix && fix) x.fix = fix;
        return;
      }
      seen.add(id);
      out.push({ id, t: Number(e.t) || Date.now(), ja: typeof e.ja === 'string' ? e.ja.trim().slice(0, 1000) : '', en,
        mood: MOODS.includes(e.mood) ? e.mood : '', memory: !!e.memory, ref, fix });
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
  /* ---------- 🔁 型練習の記録（v9で追加） ---------- */
  // { 型のid: { ok, mid, ng（連続で言うの自己チェック回数）, l: 最後の自己チェック 'ok'|'mid'|'ng', d: 最後の日, qt, qc（クイズ回答数・正解数）, qf（2秒以内の正解数） } }
  const KEY_PAT = 'english_app_patterns';
  const PAT_NUM = ['ok', 'mid', 'ng', 'qt', 'qc', 'qf'];
  function sanitizePatStats(o) {
    const out = {};
    if (!o || typeof o !== 'object' || Array.isArray(o)) return out;
    Object.keys(o).slice(0, 500).forEach(k => {
      const e = o[k]; if (!e || typeof e !== 'object' || !/^[a-z0-9-]{1,40}$/.test(k)) return;
      const r = {};
      PAT_NUM.forEach(f => { r[f] = Math.max(0, Math.min(100000, Math.floor(Number(e[f]) || 0))); });
      r.l = ['ok', 'mid', 'ng'].includes(e.l) ? e.l : '';
      r.d = /^\d{4}-\d{2}-\d{2}$/.test(String(e.d)) ? String(e.d) : '';
      out[k] = r;
    });
    return out;
  }
  function getPatStats() { return sanitizePatStats(loadJSON(KEY_PAT, {})); }
  function savePatStats(o) { return safeSet(KEY_PAT, JSON.stringify(sanitizePatStats(o))); }
  function mergePatStats(a, b) {
    const out = sanitizePatStats(a);
    Object.keys(b || {}).forEach(k => {
      const x = out[k], y = b[k];
      if (!x) { out[k] = y; return; }
      PAT_NUM.forEach(f => { x[f] = Math.max(x[f], y[f]); });
      if (y.d && y.d >= x.d) { if (y.l) x.l = y.l; x.d = y.d; }
    });
    return out;
  }
  // 1件記録する。kind: 'ok'|'mid'|'ng'（連続で言う）／ 'quiz'（correct, fast）
  function recordPattern(id, kind, correct, fast) {
    const all = getPatStats();
    const e = all[id] || { ok: 0, mid: 0, ng: 0, qt: 0, qc: 0, qf: 0, l: '', d: '' };
    if (kind === 'quiz') { e.qt++; if (correct) e.qc++; if (correct && fast) e.qf++; }
    else if (['ok', 'mid', 'ng'].includes(kind)) { e[kind]++; e.l = kind; }
    e.d = dateKey();
    all[id] = e;
    savePatStats(all);
    const s = getStore(); touchToday(s); saveStore(s);
    return e;
  }

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
    if (!recognitionSupported) { btn.disabled = true; btn.title = (isStandalone && isIOS) ? 'ホーム画面のアプリでは音声認識が使えません。Safariで開くと使えます' : 'このブラウザは音声認識に対応していません'; return null; }
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
      if (handlers.beforeStart && handlers.beforeStart() === false) return;
      stopRecorder();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (activeRec && activeRec !== rec && activeRec.listening) activeRec.abort();
      activeRec = rec;
      rec.start();
    });
    return rec;
  }
  /* ---------- 録音（自分の声を録って聞き返す） ----------
     録音は端末のメモリの中だけ（保存・バックアップはしない）。ページを移ると消える */
  const recordSupported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  let activeRecorder = null;
  function stopRecorder() { if (activeRecorder) activeRecorder.stop(); }
  // recBtn: ⏺ 録音／⏹ 止める、playBtn: 👂 自分の声を聞く。handlers: { onState(on), onDone(), onError(msg) }
  function attachRecorder(recBtn, playBtn, handlers) {
    handlers = handlers || {};
    if (!recBtn) return null;
    if (!recordSupported) {
      recBtn.disabled = true; recBtn.title = 'このブラウザは録音に対応していません';
      if (playBtn) playBtn.style.display = 'none';
      return null;
    }
    let mr = null, chunks = [], url = null, stream = null, timer = null, audio = null;
    if (playBtn) playBtn.disabled = true;
    const api = {
      stop() { if (mr && mr.state === 'recording') mr.stop(); },
      get recording() { return !!(mr && mr.state === 'recording'); }
    };
    const setOn = on => { recBtn.classList.toggle('recording', on); recBtn.textContent = on ? '⏹' : '🔴'; recBtn.setAttribute('aria-label', on ? '録音を止める' : '自分の声を録音'); handlers.onState && handlers.onState(on); };
    recBtn.addEventListener('click', async () => {
      if (api.recording) { api.stop(); return; }
      if (activeRec && activeRec.listening) activeRec.abort();
      if (activeRecorder && activeRecorder !== api) activeRecorder.stop();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (audio) audio.pause();
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e) { handlers.onError && handlers.onError(e && e.name === 'NotAllowedError' ? 'マイクの使用が許可されていません。ブラウザの設定でマイクを許可してください。' : '録音を始められませんでした。'); return; }
      const type = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/aac'].find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t));
      try { mr = new MediaRecorder(stream, type ? { mimeType: type } : undefined); }
      catch (e) { stream.getTracks().forEach(t => t.stop()); handlers.onError && handlers.onError('録音を始められませんでした。'); return; }
      chunks = [];
      mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = () => {
        clearTimeout(timer);
        stream.getTracks().forEach(t => t.stop());
        if (activeRecorder === api) activeRecorder = null;
        setOn(false);
        if (url) URL.revokeObjectURL(url);
        url = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || type || 'audio/webm' })) : null;
        if (playBtn) playBtn.disabled = !url;
        if (url) { handlers.onDone && handlers.onDone(); play(); }
      };
      activeRecorder = api;
      mr.start();
      setOn(true);
      timer = setTimeout(() => api.stop(), 15000);   // 止め忘れ防止（15秒）
    });
    function play() { if (!url) return; if (audio) audio.pause(); audio = new Audio(url); audio.play().catch(() => {}); }
    if (playBtn) playBtn.addEventListener('click', play);
    return api;
  }
  // 答えのあとに出す「🔴 録音 ／ 👂 自分の声」ボタン（icon-btn の並びに入れる）
  function recordBtnsHtml() {
    return '<button class="icon-btn btn-record vt-rec" aria-label="自分の声を録音" title="録音して自分の声を聞く">🔴</button>' +
      '<button class="icon-btn vt-play" aria-label="録音した自分の声を聞く" title="録音した自分の声を聞く" disabled>👂</button>';
  }
  // 答える前の「🎙️ 声で答える」ボタン
  function answerMicHtml() {
    return '<button class="btn btn-record vt-ans" style="margin-bottom:0.5rem;">🎙️ 声で答える（英語を言うと判定）</button>';
  }
  // 聞き取り結果を表示（単語の色分け＋点数＋聞き取った文）
  function showHeard(chipsEl, scoreEl, r) {
    if (chipsEl) renderChips(chipsEl, r.words);
    if (scoreEl) scoreEl.innerHTML = '🎙️ <b>' + r.score + '点</b>（' + (r.score >= PASS_SCORE ? '合格！' : 'もう一度') + '）' +
      (r.text ? '<div class="muted" style="font-size:0.8rem; font-weight:normal;">聞き取り：“' + esc(r.text) + '”</div>' : '');
    countSpeak();
  }
  // タイマーのバーをその場で止める
  function freezeBar(el) { if (!el) return; const w = getComputedStyle(el).width; el.style.transition = 'none'; el.style.width = w; }
  // 答える前の 🎙️：押したらタイマーを止め、聞き取れたら onHeard(result)。opts: { getRef, bar, onStart, onHeard, onError }
  function attachAnswerMic(btn, opts) {
    if (!btn) return null;
    return attachPronunciation(btn, opts.getRef, {
      beforeStart: () => { freezeBar(opts.bar); opts.onStart && opts.onStart(); },
      onResult: r => opts.onHeard(r),
      onError: m => opts.onError && opts.onError(m)
    }, { idle: '🎙️ もう一回言う', on: '⏹ 聞き取り中…（言い終わったらタップ）' });
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
    // ⭐ お気に入り（4択クイズ・表現集と同じ favorites。バックアップにも入る）
    const favBtn = (en, i) => { const on = isFavorite(en); return '<button class="tiny-btn dr-fav" data-dr="fav"' + (i != null ? ' data-i="' + i + '"' : '') + ' aria-pressed="' + on + '" aria-label="' + (on ? 'お気に入りから外す' : 'お気に入りに追加') + '" style="white-space:nowrap; flex-shrink:0; font-size:1.1rem; padding:2px 10px;' + (on ? ' color:var(--fav); border-color:var(--fav);' : '') + '">' + (on ? '★' : '☆') + '</button>'; };
    const pinBtn = (en, i) => { const on = isPinned(en); return '<button class="tiny-btn dr-pin" data-dr="pin"' + (i != null ? ' data-i="' + i + '"' : '') + ' aria-pressed="' + on + '" aria-label="' + (on ? 'ピン留めを外す' : '会う日に使いたいフレーズとしてピン留め') + '" title="会うとき使う（ピン留め）" style="white-space:nowrap; flex-shrink:0; font-size:1rem; padding:2px 8px;' + (on ? ' border-color:var(--primary);' : ' opacity:.75;') + '">' + (on ? '📌' : '📍') + '</button>'; };
    const restBtn = (en, i) => { const on = isResting(en); return '<button class="tiny-btn dr-rest" data-dr="rest"' + (i != null ? ' data-i="' + i + '"' : '') + ' aria-pressed="' + on + '" aria-label="' + (on ? 'お休みをやめて練習に戻す' : 'お休みにする（練習に出さない）') + '" title="お休み（練習に出さない）" style="white-space:nowrap; flex-shrink:0; font-size:1rem; padding:2px 8px;' + (on ? ' background:var(--accent-soft, #eef); border-color:var(--accent, #88a);' : ' opacity:.75;') + '">' + (on ? '💤済' : '💤') + '</button>'; };
    let listed = [];
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
        listed = still;
        if (still.length) html += '<div class="muted" style="margin-bottom:0.4rem;">' + (st.phase === 'review' ? 'まだ言えない文' : '言えなかった文') + '</div>' +
          still.map((p, i) => '<div class="item-row"><div style="display:flex; justify-content:space-between; gap:6px; align-items:flex-start;"><div class="en-text">' + esc(p[1]) + '</div><span style="display:flex; gap:4px; flex-shrink:0;">' + favBtn(p[1], i) + pinBtn(p[1], i) + restBtn(p[1], i) + '</span></div><div class="ja-text muted">' + esc(ja(p).main) + '</div>' + usageLine(p[1]) + '</div>').join('');
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
        '<span style="display:flex; gap:6px; flex-shrink:0;">' + favBtn(p[1]) + pinBtn(p[1]) + restBtn(p[1]) + (opts.onClose ? '<button class="tiny-btn" data-dr="close">✕ やめる</button>' : '') + '</span></div>' +
        '<div class="rm-ja">' + esc(j.main) + '</div><div class="rm-timer" aria-hidden="true"><div class="rm-timer-fill"></div></div>' +
        '<p class="muted" style="text-align:center;">日本語を見て、' + secs + '秒以内に声に出して言ってみよう</p>' +
        '<div class="dr-reveal" style="display:none;"><div class="rm-en">' + esc(p[1]) + '</div>' +
        '<div class="muted dr-note" style="text-align:center; white-space:pre-wrap;' + (j.note ? '' : ' display:none;') + '">💡 ' + esc(j.note) + '</div><div class="dr-noteedit"></div>' + usageLine(p[1]) +
        '<div style="display:flex; justify-content:center; gap:6px; flex-wrap:wrap; margin:0.6rem 0;"><button class="icon-btn" data-dr="play" aria-label="英語を再生">🔊</button><button class="icon-btn" data-dr="slow" aria-label="ゆっくり再生">🐢</button><button class="icon-btn btn-record dr-mic" aria-label="発音をチェック">🎙️</button>' + recordBtnsHtml() + '<button class="tiny-btn" data-dr="note" aria-label="日本語と補足を編集" style="white-space:nowrap;">✏️ 補足</button></div>' +
        '<div class="word-chips dr-chips"></div><div class="mini-score dr-score" style="text-align:center;"></div>' +
        '<div style="display:flex; gap:8px; margin-top:0.75rem;"><button class="btn" data-dr="ok" style="background:#16a34a; flex:1;">⭕ ' + secs + '秒以内に言えた</button><button class="btn" data-dr="ng" style="background:#be123c; flex:1;">❌ 出なかった</button></div></div>' +
        '<div class="dr-pre" style="text-align:center;">' + (recognitionSupported ? answerMicHtml() : '') + '<div class="mini-score dr-premsg"></div></div>' +
        '<button class="btn dr-revealbtn" data-dr="reveal">答えを見る</button>';
      const f = box.querySelector('.rm-timer-fill');
      f.style.transition = 'none'; f.style.width = '100%'; void f.offsetWidth;
      f.style.transition = 'width ' + secs + 's linear'; f.style.width = '0%';
      // 🎙️ 声で答える → 聞き取れたら答えを出して判定を表示
      attachAnswerMic(box.querySelector('.vt-ans'), {
        getRef: () => p[1], bar: f,
        onHeard: r => { reveal(); showHeard(box.querySelector('.dr-chips'), box.querySelector('.dr-score'), r); },
        onError: m => { box.querySelector('.dr-premsg').textContent = m; }
      });
    }
    function reveal() {
      if (!st || st.phase !== 'card') return;
      const p = st.queue[st.i];
      box.querySelector('.dr-reveal').style.display = ''; box.querySelector('.dr-revealbtn').style.display = 'none';
      const pre = box.querySelector('.dr-pre'); if (pre) pre.style.display = 'none';
      freezeBar(box.querySelector('.rm-timer-fill'));
      if (opts.autoSpeak !== false) autoSpeak(p[1], 'en-US', 1);
      attachPronunciation(box.querySelector('.dr-mic'), () => p[1], {
        onResult: r => showHeard(box.querySelector('.dr-chips'), box.querySelector('.dr-score'), r),
        onError: m => { box.querySelector('.dr-score').textContent = m; }
      });
      attachRecorder(box.querySelector('.vt-rec'), box.querySelector('.vt-play'), { onError: m => { box.querySelector('.dr-score').textContent = m; } });
    }
    function answer(ok) {
      const p = st.queue[st.i];
      stopRecorder(); if (activeRec && activeRec.listening) activeRec.abort();
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
      else if (a === 'fav') {
        const tp = t.dataset.i != null ? listed[+t.dataset.i] : p;
        if (!tp) return;
        const on = toggleFavorite(tp[1]);
        t.textContent = on ? '★' : '☆';
        t.style.color = on ? 'var(--fav)' : ''; t.style.borderColor = on ? 'var(--fav)' : '';
        t.setAttribute('aria-pressed', on); t.setAttribute('aria-label', on ? 'お気に入りから外す' : 'お気に入りに追加');
        toast(on ? '⭐ お気に入りに追加しました' : 'お気に入りから外しました');
      }
      else if (a === 'pin') {
        const tp = t.dataset.i != null ? listed[+t.dataset.i] : p;
        if (!tp) return;
        const on = togglePin(tp[1], ja(tp).main);
        t.outerHTML = pinBtn(tp[1], t.dataset.i != null ? +t.dataset.i : null);
        toast(on ? '📌 ピン留めしました（会話画面の上に出ます。会ったあと「ふり返り」で使えたか記録）' : 'ピン留めを外しました');
      }
      else if (a === 'rest') {
        const tp = t.dataset.i != null ? listed[+t.dataset.i] : p;
        if (!tp) return;
        const on = toggleResting(tp[1]);
        t.outerHTML = restBtn(tp[1], t.dataset.i != null ? +t.dataset.i : null);
        toast(on ? '💤 お休みにしました（次から練習に出ません。「💤 お休み中」から戻せます）' : '練習に戻しました');
      }
      else if (a === 'note' && p) {
        const sp = ja(p);
        box.querySelector('.dr-noteedit').innerHTML = '<div style="background:#f8fafc; border:1px solid var(--border); border-radius:8px; padding:0.6rem; margin-top:0.5rem; text-align:left;">' +
          '<label class="muted" style="font-size:0.8rem;">日本語（カードの表に出る文）</label><input type="text" class="dr-nemain" style="margin:2px 0 0.5rem;" value="' + esc(sp.main) + '">' +
          '<label class="muted" style="font-size:0.8rem;">💡 補足（答えのあとに出るメモ）</label><textarea class="dr-nenote" rows="4" style="width:100%; margin-top:2px; font-size:16px;">' + esc(sp.note) + '</textarea>' +
          '<div style="display:flex; gap:6px; margin-top:0.4rem;"><button class="btn" data-dr="noteSave" style="flex:1;">💾 保存</button><button class="btn btn-secondary" data-dr="noteCancel" style="flex:1;">やめる</button></div></div>';
        box.querySelector('.dr-nenote').focus();
      }
      else if (a === 'noteCancel') box.querySelector('.dr-noteedit').innerHTML = '';
      else if (a === 'noteSave' && p) {
        const main = box.querySelector('.dr-nemain').value.trim();
        if (!main) { toast('日本語を入れてください'); return; }
        const nja = joinJa(main, box.querySelector('.dr-nenote').value);
        if (!setJaEdit(p[1], nja)) { toast('保存できませんでした'); return; }
        p[2] = nja;
        const note = splitJa(nja).note, nl = box.querySelector('.dr-note');
        nl.textContent = '💡 ' + note; nl.style.display = note ? '' : 'none';
        box.querySelector('.dr-noteedit').innerHTML = '';
        toast('✏️ 補足を保存しました（次からこの内容で出ます）');
      }
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
  // 新しい版の SW に切り替わったら、自動で1回だけ読み直す（無限リロードにならないようフラグで止める）
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    const hadController = !!navigator.serviceWorker.controller;   // 初めて入れるときは読み直し不要
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || reloaded) return;
      reloaded = true;
      location.reload();
    });
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then(reg => { try { reg.update(); } catch (e) {} }).catch(() => {});
    });
  }

  /* ---------- 公開 ---------- */
  // アップデートのたびに sw.js の CACHE 名と一緒に上げる
  const APP_VERSION = 'v102';
  window.EA = {
    APP_VERSION,
    BASE_PHRASES, CUSTOM_CAT, recognitionSupported,
    esc, dateKey, getStore, saveStore, getCustomPhrases, saveCustomPhrases, getAllPhrases,
    isFavorite, toggleFavorite, touchToday, isResting, toggleResting, setResting, markStudied, recordResult, countSpeak, getWeakPhrases, calcStreak, updateStreakBadge,
    splitJa, usageFor, renderUsage, autoSpeak, setGenre, getPhrasesFor, populateGenreSelect, ensureNonEmpty,
    speak, createRecognizer, compareText, bestMatch,
    downloadBackup, importBackup,
    getPrefs, setPref, hasPhrase, addCustomPhrase, updateCustomPhrase, joinJa, setJaEdit, addToReview, getPatStats, recordPattern,
    getTalkLog, saveTalkLog, addTalkEntry, kanaHints, renderKana,
    getDuePhrases, daysUntil, parseKey, toast, translate, decodeEntities, normJa,
    getPins, savePins, isPinned, togglePin, markPinUsed,
    getKeepsakes, saveKeepsakes, addKeepsake, hasKeepsake,
    getLists, saveLists, getPlan, savePlan, clearPlan,
    attachPronunciation, renderChips, PASS_SCORE, cardDrill, attachRecorder, stopRecorder, recordBtnsHtml, answerMicHtml, showHeard, attachAnswerMic, freezeBar, recordSupported, drillSecs, scrollToCard,
    getProfile, saveProfile, getLetters, saveLetters, getDiary, saveDiary, addDiaryEntry, MOODS,
    getNihongo, saveNihongo, getRoadmap, saveRoadmap, getMeetings, saveMeetings, summarizePlan, archivePlan, newId,
    getDmNotes, saveDmNotes, getTalks, saveTalks
  };

  /* ---------- ☰ メニュー（全ページ共通。画面下のナビとページ内のリンク列の代わり） ---------- */
  const MENU = [
    { items: [['index.html', '🏠 ホーム'], ['roadmap.html', '🔥 今日の練習']] },
    { title: '📖 まなぶ', items: [['grammar.html', '📖 文法ノート']] },
    { title: '✏️ れんしゅう', items: [['pattern.html', '🔁 型練習'], ['quiz.html', '❓ クイズ・声に出すカード'], ['quiz.html?format=drill&genre=PREMEET', '📅 会う前のカード'], ['writing.html', '✍️ 英作文'], ['answer.html', '💬 質問への答え方']] },
    { title: '💬 会うとき', items: [['translator.html', '💬 会話（翻訳）'], ['topics.html', '🎲 話題カード'], ['nihongo.html', '🇯🇵 日本語を教える']] },
    { title: '📝 ふり返り', items: [['recap.html', '📝 会話ふり返り'], ['diary.html', '📔 英語日記'], ['dmnote.html', '📩 DMノート'], ['report.html', '🏆 成果レポート']] },
    { sep: true, items: [['index.html#settings', '⚙️ 設定・バックアップ']] }
  ];
  // 今いるページ（quiz.html は「会う前」かどうかで分ける）
  function menuActive(href) {
    const page = (location.pathname.split('/').pop() || 'index.html');
    const [hp, hq] = href.split('#')[0].split('?');
    const onSettings = page === 'index.html' && /^#settings/.test(location.hash);
    if (href.indexOf('#') >= 0) return hp === page && onSettings;
    if (hp !== page) return false;
    if (hp === 'index.html') return !onSettings;
    const premeet = new URLSearchParams(location.search).get('genre') === 'PREMEET';
    if (hp === 'quiz.html') return hq ? premeet : !premeet;
    return true;
  }
  function buildMenu() {
    const header = document.querySelector('header');
    if (!header || document.getElementById('menuDrawer')) return;
    document.querySelectorAll('body > nav, .subnav').forEach(el => el.remove());
    const btn = document.createElement('button');
    btn.className = 'menu-btn'; btn.type = 'button'; btn.textContent = '☰';
    btn.setAttribute('aria-label', 'メニューを開く'); btn.setAttribute('aria-controls', 'menuDrawer'); btn.setAttribute('aria-expanded', 'false');
    const logo = header.querySelector('.logo');
    const left = document.createElement('div'); left.className = 'menu-left';
    header.insertBefore(left, header.firstChild);
    left.appendChild(btn); if (logo) left.appendChild(logo);
    const overlay = document.createElement('div'); overlay.className = 'menu-overlay';
    const drawer = document.createElement('div'); drawer.className = 'menu-drawer'; drawer.id = 'menuDrawer';
    drawer.setAttribute('role', 'dialog'); drawer.setAttribute('aria-label', 'メニュー'); drawer.setAttribute('aria-hidden', 'true');
    let html = '<div class="menu-head"><b>心をつなぐ英語表現</b><button class="menu-close" type="button" aria-label="メニューを閉じる">✕</button></div>';
    MENU.forEach(sec => {
      if (sec.sep) html += '<hr class="menu-sep">';
      if (sec.title) html += '<div class="menu-sec">' + sec.title + '</div>';
      sec.items.forEach(([href, label]) => {
        const on = menuActive(href);
        html += '<a href="' + href.replace(/&/g, '&amp;') + '"' + (on ? ' class="active" aria-current="page"' : '') + '>' + label + '</a>';
      });
    });
    drawer.innerHTML = html;
    document.body.appendChild(overlay); document.body.appendChild(drawer);
    const open = () => { drawer.classList.add('open'); overlay.classList.add('open'); document.body.classList.add('menu-open'); btn.setAttribute('aria-expanded', 'true'); drawer.setAttribute('aria-hidden', 'false'); };
    const close = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); drawer.setAttribute('aria-hidden', 'true'); };
    btn.addEventListener('click', open);
    overlay.addEventListener('click', close);
    drawer.querySelector('.menu-close').addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('open')) close(); });
    // 同じページ内（設定へ移動など）のリンクは、閉じてから移動
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    // ホーム ⇔ 設定（#settings）の切り替えで色付きを付け直す
    window.addEventListener('hashchange', () => drawer.querySelectorAll('a').forEach(a => {
      const on = menuActive(a.getAttribute('href'));
      a.classList.toggle('active', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    }));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildMenu); else buildMenu();

  document.addEventListener('DOMContentLoaded', updateStreakBadge);
})();
