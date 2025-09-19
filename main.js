let lastWord = "";

window.getLastWord = function() {
  return lastWord;
};

const DICTIONARY = [
  "ace", "act", "add", "age", "air", "ant", "ape", "apt", "arc", "arm", "art", "ash", "axe",
  "bad", "bag", "bar", "bat", "bay", "bed", "bee", "beg", "bet", "bib", "bin", "bit", "bow", "box", "boy", "bus",
  "cab", "cad", "cal", "cam", "can", "cap", "car", "cat", "cog", "cop", "cow", "cry", "cup", "cut",
  "dew", "dig", "dip", "dog", "dot", "dry",
  "ear", "eat", "eel", "egg", "elk", "elm", "end",
  "fan", "far", "fig", "fin", "fit", "fix", "fog", "fox", "fun",
  "gap", "gas", "gem", "get", "gig", "gin", "gym",
  "had", "ham", "hat", "hex", "hip", "hop", "hot",
  "ice", "ink",
  "jam", "jar", "jet", "jog", "joy",
  "key",
  "lab", "lap", "law", "leg", "let", "lid", "log",
  "man", "map", "mat", "mix",
  "nap", "net", "new", "nod", "nut",
  "oak", "ode", "oil", "one", "orb", "owl",
  "pad", "peg", "pen", "pie", "pig", "pin", "pop", "pot",
  "rag", "ram", "ran", "rat", "raw", "ray", "rib", "row", "rug", "run",
  "sap", "saw", "sea", "sip", "six", "sky", "son", "sun",
  "tab", "tag", "tan", "tap", "tar", "tax", "tea", "ten", "tip", "toe", "toy",
  "urn", "use",
  "van",
  "web", "win", "won",
  "yak", "yep", "yes",
  "zen"
];

const DICTIONARY_SET = new Set(DICTIONARY);
const LETTERS = "abcdefghijklmnopqrstuvwxyz";

let firstChar = null;
let subTry = 0;

function randomSuffix(length) {
  let word = "";
  for (let i = 0; i < length; i++) {
    word += LETTERS[Math.floor(Math.random() * LETTERS.length)];
  }
  return word;
}

function findValidWordStep() {
  if (firstChar === null || subTry > 1000) {
    firstChar = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    subTry = 0;
  }

  const word = firstChar + randomSuffix(2);
  lastWord = word;
  subTry++;

  return {
    word,
    found: DICTIONARY_SET.has(word),
  };
}

function resetWordSearchState() {
  firstChar = null;
  subTry = 0;
  lastWord = "";
}

window.findValidWordStep = findValidWordStep;
window.resetWordSearchState = resetWordSearchState;
