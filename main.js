// 3文字英単語シミュレーター
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

// パフォーマンス向上: 1文字目を固定し、1000回超えたら再抽選
let firstChar = null;
let subTry = 0;
let lastWord = "";
function findValidWordStep() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  if (firstChar === null || subTry > 1000) {
    firstChar = chars[Math.floor(Math.random() * chars.length)];
    subTry = 0;
  }
  // 2,3文字目のみランダム
  let word = firstChar;
  for (let i = 0; i < 2; i++) {
    word += chars[Math.floor(Math.random() * chars.length)];
  }
  lastWord = word;
  subTry++;
  return { word: lastWord, found: DICTIONARY.includes(lastWord) };
}

window.findValidWordStep = findValidWordStep;
