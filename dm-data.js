/* DMノートの内容データ（相手のDMの英語の傾向）
   - PATTERNS: DMの中から自動で見つける「型」。re は正規表現の文字列（小文字・アポストロフィは ' に統一してから照合）
       k: 'form'＝よく使う型 / 'de'＝ドイツ語っぽい言い方 / 'word'＝単語・語彙
       say: [英語, 日本語] … 💾でマイ単語に入れるときの形（無い型は保存ボタンを出さない）
       scene: 返信のヒント（SCENES）につなげる場面
   - SCENES: 見つかった型から出す「返信のヒント」
   - NOTES: DMを分析したときのメモ（新しいものを先頭に）
   新しいDMを分析したら、ここに型・返信例・メモを足していく。 */
(function () {
  var DAY = '(monday|tuesday|wednesday|thursday|friday|saturday|sunday)';

  var PATTERNS = [
    // ---- 断る・謝る ----
    { id: 'cant_make_it', k: 'form', scene: 'cancel', re: "can'?t make it",
      en: "I can't make it.", ja: '行けない・都合がつかない', note: '予定を断る定番。make it＝（その場に）行ける・間に合う。',
      say: ["I can't make it.", '行けそうにない。（参加できない／都合がつかないときに）'] },
    { id: 'think_actually', k: 'form', scene: 'cancel', re: "i think i (actually )?(can'?t|won'?t|have to|need to)",
      en: "I think I actually can't ...", ja: '（言いにくいけど）やっぱり〜できなさそう', note: 'I think と actually で断りをやわらげている。言いにくいことを切り出すときに便利。',
      say: ["I think I actually can't come.", 'やっぱり行けなさそう。（I think + actually で断りをやわらげる）'] },
    { id: 'sorry_late', k: 'form', scene: 'cancel', re: "sorry for (letting you know|telling you) (so )?late",
      en: "I'm sorry for letting you know so late.", ja: '連絡が遅くなってごめんね', note: '直前の予定変更・キャンセルの前置き。let you know＝知らせる。',
      say: ["I'm sorry for letting you know so late.", '連絡が遅くなってごめんね。（直前のキャンセル・変更のときに）'] },
    { id: 'really_sorry', k: 'form', scene: 'apology', re: "(i'?m|i am) (really |so |very )?sorry",
      en: "I'm really sorry!", ja: '本当にごめんね', note: '1通の中で最初と最後の2回謝ることがある。丁寧に謝るタイプ。' },
    { id: 'would_have_liked', k: 'form', scene: 'missed', re: "would('ve| have) (liked|loved) to",
      en: 'I would have liked to ...', ja: '〜したかったのに（残念）', note: 'できなかったことへの残念な気持ち。文法ノートの would\'ve と同じ形。',
      say: ['I would have liked to come.', '行きたかったんだけどね。（I would have liked to ～：～したかったんだけどね）'] },

    // ---- 忙しさ・事情 ----
    { id: 'getting_much', k: 'form', scene: 'busy', re: "getting (a little |a bit |a little bit |too )*much",
      en: "It's getting a little bit much.", ja: 'ちょっと手いっぱい', note: '忙しさ・しんどさを軽く伝える言い方。' },
    { id: 'keep_working', k: 'form', scene: 'busy', re: 'keep working on',
      en: 'keep working on ...', ja: '〜を続けてやる', note: '課題やプレゼンの話でよく出る。' },
    { id: 'otherwise', k: 'form', scene: 'busy', re: '\\botherwise\\b',
      en: 'otherwise ...', ja: 'そうしないと〜', note: '理由のあとに「じゃないと〜」と足す。' },
    { id: 'on_time', k: 'form', scene: 'busy', re: '(finish|make it|be there|get there).{0,20}on time',
      en: 'finish on time', ja: '間に合う', note: 'on time＝時間どおりに。can\'t finish on time＝間に合わない。',
      say: ["I can't finish it on time.", '間に合わない。（on time：時間どおりに）'] },
    { id: 'worst_over', k: 'form', scene: 'busy', re: 'worst part.{0,40}\\bover\\b',
      en: 'The worst part is over.', ja: '一番大変なところは終わった', note: '「〜が終わったら会える」の流れで使っている。',
      say: ['The worst part is over.', '一番大変なところは終わった。'] },
    { id: 'assignment', k: 'word', scene: 'busy', re: '\\b(assignments?|homework|presentations?|exams?)\\b',
      en: 'assignments / presentations', ja: '課題・プレゼン', note: '学校の話題。assignment は数えられる（two more assignments）。homework は数えない。' },
    { id: 'day_trip', k: 'word', re: '\\bday ?trip\\b',
      en: 'day trip', ja: '日帰り旅行', note: '英語では day trip と2語が普通（ドイツ語は Tagesausflug と1語）。',
      say: ['I have a day trip on Saturday.', '土曜日は日帰り旅行がある。（day trip：日帰り旅行）'] },

    // ---- 誘う・代わりの提案 ----
    { id: 'free_if_want', k: 'form', scene: 'invite', re: "(i'?m|i am) free\\b.{0,60}if you want",
      en: "I'm free ... if you want to meet!", ja: '会いたかったら〜空いてるよ', note: '代わりの日を出す言い方。if you want で相手に選ばせて、押しつけない。',
      say: ["I'm free next Thursday night if you want to meet.", '会いたかったら、来週の木曜の夜なら空いてるよ。（if you want で相手に選ばせる）'] },
    { id: 'if_you_want', k: 'form', scene: 'invite', re: 'if you want( to)?\\b',
      en: 'if you want (to)', ja: 'よかったら', note: '誘うときに相手に選ばせるクッション言葉。' },
    { id: 'would_you_like', k: 'form', scene: 'invite', re: 'would you like to|do you want to|shall we',
      en: 'Would you like to ...? / Do you want to ...?', ja: '〜しない？', note: '誘い。返事は Sure! / I\'d love to! / Sounds good!' },
    { id: 'let_me_know', k: 'form', re: 'let me know',
      en: 'Let me know ...', ja: '教えてね', note: '予定や希望を聞くときの決まり文句。' },
    { id: 'looking_forward', k: 'form', scene: 'invite', re: "looking forward to|can'?t wait",
      en: "I'm looking forward to it! / I can't wait!", ja: '楽しみ！', note: 'looking forward to のあとは名詞か -ing。' },

    // ---- 気持ち ----
    { id: 'miss_you', k: 'form', scene: 'feeling', re: '\\bmiss(ed)? you\\b',
      en: 'I miss you.', ja: '会いたい・さみしい', note: '' },
    { id: 'glad_happy', k: 'form', scene: 'feeling', re: "(i'?m|i am|i was) (so |really )?(glad|happy)",
      en: "I'm so glad / happy ...", ja: 'うれしい', note: '' },

    // ---- 近況・気遣い・移動（2通目 11/7 から） ----
    { id: 'stressful', k: 'form', scene: 'busy', re: '\\bstressful\\b',
      en: 'It was really stressful.', ja: 'すごく大変だった・ストレスだった', note: '忙しさを伝える定番。stressful は「（物事が）ストレスになる」、stressed は「（人が）ストレスを感じている」。',
      say: ['The last few days have been really stressful.', 'ここ数日、本当に大変だった。（The last few days have been ～：ここ数日ずっと～）'] },
    { id: 'a_lot_to_do', k: 'form', scene: 'busy', re: 'a lot to do',
      en: 'I had a lot to do.', ja: 'やることがたくさんあった', note: 'a lot to do＝やるべきことがたくさん。理由を軽く言うときに便利。',
      say: ['I have a lot to do this week.', '今週はやることがたくさんある。'] },
    { id: 'until_late', k: 'form', scene: 'busy', re: 'until late',
      en: 'until late at night', ja: '夜遅くまで', note: 'work on ～ until late で「遅くまで〜に取り組んだ」。',
      say: ['I worked until late last night.', '昨日は夜遅くまで仕事した。（until late：遅くまで）'] },
    { id: 'how_going', k: 'form', scene: 'asked', re: "how('s| is) (your [a-z ]{1,20}|it|everything) going",
      en: 'How is your work going?', ja: '（仕事など）の調子はどう？', note: 'How\'s ～ going? で物事の調子を聞く。答えは It\'s going well. / It\'s been busy.',
      say: ["How's your work going?", '仕事の調子はどう？（How\'s ～ going?）'] },
    { id: 'how_doing', k: 'form', scene: 'asked', re: "how are you doing|how have you been",
      en: 'How are you doing?', ja: '元気？・調子どう？', note: '相手を気遣う質問。返事のあとに And you? / How about you? と聞き返すと会話が続く。' },
    { id: 'on_my_way', k: 'form', scene: 'travel', re: 'on my way( back| home)?',
      en: "I'm on my way back.", ja: '帰る途中', note: 'on my way（向かっている途中）、on my way back / home（帰る途中）。',
      say: ["I'm on my way back now.", '今帰ってるところ。（on my way back：帰る途中）'] },
    { id: 'arrive_around', k: 'form', scene: 'travel', re: '(arrive|get (there|home|back)).{0,25}\\baround\\b',
      en: 'will probably arrive around 9pm', ja: 'たぶん9時ごろ着く', note: 'probably＝たぶん、around＝〜ごろ。到着時間を伝える定番。',
      say: ["I'll probably arrive around 9pm.", 'たぶん夜9時ごろ着く。（probably：たぶん、around：～ごろ）'] },
    { id: 'was_beautiful', k: 'form', scene: 'enjoyed', re: '(it|that|the [a-z]+|my [a-z]+) (was|is) (so+|really|very)? ?(beautiful|amazing|great|nice|fun)',
      en: 'It was soo beautiful!', ja: 'すごく綺麗だった／楽しかった', note: '楽しかったことを伝える。so / really で強めて、!! や 😍 で気持ちを足している。' },
    { id: 'autumn_leaves', k: 'word', scene: 'enjoyed', re: '\\b(autumn|fall) (leaves|colou?rs)\\b',
      en: 'autumn leaves', ja: '紅葉', note: 'イギリス英語寄りの言い方。アメリカ英語では fall leaves / fall colors。',
      say: ['I saw the autumn leaves.', '紅葉を見た。（autumn leaves：紅葉。アメリカ英語では fall leaves）'] },
    { id: 'stretch', k: 'form', re: '\\b(he[y]{2,}|so{2,}|ye{2,}s|no{2,}|cu{2,}te)\\b',
      en: 'Heyy / soo', ja: '文字を重ねて気持ちを強調', note: 'チャットでよく使う。sooo beautiful のように長いほど気持ちが強い。まねしてもOK。' },

    // ---- ドイツ語っぽい言い方（意味が分かればOK。まねしなくてよい） ----
    { id: 'last_days_were', k: 'de', re: '\\bthe last (few |couple of )?(days|weeks) were\\b',
      en: 'The last days were ...', ja: 'ここ数日は〜だった（＝The last few days have been ...）', note: 'ドイツ語の Die letzten Tage waren ... の形。英語では今につながるので現在完了 have been、days の前に few を入れるのが普通。' },
    { id: 'for_university', k: 'de', re: '\\bfor (the )?university\\b',
      en: 'for university', ja: '大学の（課題）（＝for school / for uni）', note: 'ドイツ語の für die Uni から。アメリカ英語では for school、イギリス英語では for uni がよく使われる。' },
    { id: 'in_the_moment', k: 'de', re: '\\bin the moment\\b',
      en: 'in the moment', ja: '今のところ（＝at the moment / right now）', note: 'ドイツ語の im Moment をそのまま訳した形。英語では at the moment が普通。' },
    { id: 'next_week_day', k: 'de', re: 'next week ' + DAY,
      en: 'next week Thursday', ja: '来週の木曜（＝next Thursday）', note: 'ドイツ語の nächste Woche Donnerstag の語順。英語では next Thursday / Thursday next week。' },
    { id: 'until_day', k: 'de', re: '\\buntil (' + DAY.slice(1, -1) + '|tomorrow|next week)\\b',
      en: 'until Tuesday', ja: '火曜まで（締切の意味なら by Tuesday）', note: 'ドイツ語の bis は「〜まで（ずっと）」と「〜までに（締切）」の両方。英語では締切なら by を使う。' },
    { id: 'since_years', k: 'de', re: '\\bsince \\d+ (years?|months?|weeks?|days?)\\b',
      en: 'since 3 years', ja: '3年前から（＝for 3 years）', note: 'ドイツ語の seit の影響。英語では期間には for を使う。' },
    { id: 'make_photo', k: 'de', re: '\\bmak(e|ing) (a |some )?(photos?|pictures?)\\b',
      en: 'make a photo', ja: '写真を撮る（＝take a photo）', note: 'ドイツ語の ein Foto machen から。英語では take a photo。' },
    { id: 'handy', k: 'de', re: '\\bhandy\\b',
      en: 'handy', ja: 'スマホ（＝phone）', note: 'ドイツ語でスマホは Handy。英語の handy は「便利な」なので文脈で判断。' },
    { id: 'eventually', k: 'de', re: '\\beventually\\b',
      en: 'eventually', ja: 'もしかしたら？（文脈で判断）', note: 'ドイツ語の eventuell は「もしかしたら」。英語の eventually は「最終的に」。どちらの意味か文脈で確認。' }
  ];

  var SCENES = [
    { id: 'cancel', emoji: '🙏', label: '予定のキャンセル・変更', replies: [
      ['No worries at all!', '全然気にしないで！'],
      ['No problem! Take your time with your work.', '大丈夫だよ！自分のペースでやってね。'],
      ["Don't worry about it. We can meet another time.", '気にしないで。また別の日に会おう。'] ] },
    { id: 'apology', emoji: '🤝', label: '謝られたとき', replies: [
      ["It's totally fine!", '全然大丈夫だよ！'],
      ["You don't have to apologize.", '謝らなくていいよ。'] ] },
    { id: 'busy', emoji: '📚', label: '忙しい・課題がある', replies: [
      ['Good luck with your assignments!', '課題がんばってね！（Good luck with ～）'],
      ["Don't push yourself too hard.", '無理しすぎないでね。'],
      ["Don't forget to take a break.", '休憩するのを忘れないでね。'],
      ["I'm cheering for you!", '応援してるよ！'],
      ['You worked so hard. Get some rest tonight.', 'すごく頑張ったね。今夜はゆっくり休んでね。'],
      ['That sounds really tough.', 'それは本当に大変だったね。'] ] },
    { id: 'asked', emoji: '🙋', label: '自分の様子を聞かれたとき', replies: [
      ["Work has been busy, but I'm doing well.", '仕事は忙しいけど、元気だよ。（現在完了 has been ＋ but）'],
      ["I'm doing great, thanks for asking!", '元気だよ、聞いてくれてありがとう！'],
      ["Pretty good! It's been a normal week.", 'まあまあいいよ！いつもどおりの1週間だった。'] ] },
    { id: 'travel', emoji: '🚃', label: '移動中・帰り道', replies: [
      ['Have a safe trip back!', '気をつけて帰ってね！'],
      ["Text me when you get home so I know you're safe.", '着いたら連絡してね、安心したいから。'],
      ['Get some rest when you get home!', '帰ったらゆっくり休んでね！'] ] },
    { id: 'enjoyed', emoji: '🍁', label: '楽しかった話を聞いたとき', replies: [
      ["I'm glad you had a great time!", '楽しめたみたいでよかった！'],
      ["I'd love to see the photos!", '写真見たいな！'],
      ['The autumn leaves must have been beautiful!', '紅葉、きっと綺麗だったんだろうね！（must have been：〜だったに違いない）'] ] },
    { id: 'invite', emoji: '📅', label: '誘い・代わりの日の提案', replies: [
      ['That works for me!', 'それで大丈夫だよ！（～ works for me：～で都合がいい。Thursday night works for me! のように日にちも入れられる）'],
      ["Sounds great! I'm looking forward to it.", 'いいね！楽しみにしてるね。'],
      ['Sure! What time is good for you?', 'もちろん！何時がいい？'] ] },
    { id: 'missed', emoji: '💭', label: '「会いたかった」と言われたとき', replies: [
      ['Me too! I wanted to see you too.', '私も！私も会いたかったよ。'],
      ["It's okay. I'll see you soon!", '大丈夫。またすぐ会おうね！'] ] },
    { id: 'feeling', emoji: '💕', label: '気持ちを伝えられたとき', replies: [
      ['Aww, that makes me so happy!', 'わあ、すごくうれしい！'],
      ['I miss you too.', '私も会いたいよ。'] ] }
  ];

  var NOTES = [
    { d: '2026-11-07', title: '日帰り旅行の帰りのDM（2通目）', points: [
      '書き出しは Heyy ようちゃん！☺️ と日本語のニックネーム。Heyy / soo のように文字を重ねて、明るい気持ちを出している。',
      '流れは「自分の近況（忙しかった）→ 相手への質問（仕事どう？元気？）→ 楽しかった話 → これからの予定（何時に着く）」。相手のことも必ず聞いてくれる。',
      '忙しさは really stressful / a lot to do / until late at night で伝える。前回の It\'s getting a little bit much. と同じく、課題とプレゼンの話。',
      '楽しかったことは It was soo beautiful!! 😍 のように、強調の so と !! と絵文字で表現する。',
      'イギリス英語寄り：autumn（アメリカは fall）、university。',
      'ドイツ語っぽい言い方：The last days were ...（＝The last few days have been ...）、for university（＝for school / uni）。文法ノートの現在完了・There have been と同じ考え方。'
    ] },
    { d: '2026-11-06', title: '予定キャンセルのDM（1通目）', points: [
      '流れは「謝る → 理由 → 残念な気持ち → 代わりの日の提案」。最初と最後の2回謝る丁寧なタイプ。',
      'I think I actually can\'t ... のように、断るときは I think / actually でやわらげる。',
      '忙しさは It\'s getting a little bit much. のように軽く伝える。理由のあとに otherwise で「じゃないと〜」を足す。',
      '代わりの日は I\'m free ... if you want to meet! と、if you want で相手に選ばせる。',
      '気持ちは絵文字で補う（😔😣💕😵‍💫）。1通に4〜5個。',
      'ドイツ語っぽい言い方: in the moment（＝at the moment）、next week Thursday（＝next Thursday）、until Tuesday（締切なら by）。読めれば十分で、まねしなくてよい。'
    ] }
  ];

  window.DM = { PATTERNS: PATTERNS, SCENES: SCENES, NOTES: NOTES };
})();
