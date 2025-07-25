// 3文字英単語シミュレーター

document.getElementById("startBtn").onclick = () => {
const DICTIONARY = [
  "cat", "dog", "sun", "car", "box", "man", "fan", "run", "bat", "hat",
  "map", "pen", "cup", "top", "red", "bed", "net", "jet", "pot", "log"
];

function randomWord(length = 3) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let word = "";
  for (let i = 0; i < length; i++) {
    word += chars[Math.floor(Math.random() * chars.length)];
  }
  return word;
}

// 1回だけ判定するステップ関数
let lastWord = "";
function findValidWordStep() {
  lastWord = randomWord(3);
  return { word: lastWord, found: DICTIONARY.includes(lastWord) };
}

window.findValidWordStep = findValidWordStep;
