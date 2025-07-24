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

function findValidWord() {
  let count = 0;
  let word = "";
  do {
    word = randomWord(3);
    count++;
  } while (!DICTIONARY.includes(word));
  return { word, count };
}

window.findValidWord = findValidWord;
