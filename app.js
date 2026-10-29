// 辞書初期データ
let dictionary = [
    { word: "apple", meaning: "りんご" },
    { word: "banana", meaning: "バナナ" },
    { word: "challenge", meaning: "挑戦・課題" },
    { word: "opportunity", meaning: "機会・チャンス" }
];

// 検索機能 (小文字・大文字の区別なし、部分一致検索)
function searchWord() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('searchResult');
    resultDiv.innerHTML = '';

    if (!query) {
        resultDiv.innerHTML = '<p>検索キーワードを入力してください。</p>';
        return;
    }

    const filtered = dictionary.filter(item => 
        item.word.toLowerCase().includes(query) || 
        item.meaning.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<div class="word">${item.word}</div><div class="meaning">${item.meaning}</div>`;
            resultDiv.appendChild(card);
        });
    } else {
        resultDiv.innerHTML = '<p>該当する単語が見つかりませんでした。</p>';
    }
}

// 単語追加機能
function addWord() {
    const wordInput = document.getElementById('newWord');
    const meaningInput = document.getElementById('meaningInput') || document.getElementById('newMeaning');

    const word = wordInput.value.trim();
    const meaning = meaningInput ? meaningInput.value.trim() : '';

    if (!word || !meaning) {
        alert('単語と意味の両方を入力してください。');
        return;
    }

    dictionary.push({ word, meaning });
    alert(`「${word}」を追加しました！`);

    wordInput.value = '';
    if (meaningInput) meaningInput.value = '';
}
