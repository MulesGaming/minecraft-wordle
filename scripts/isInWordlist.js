// Message

console.log("Wordlist checker loaded!")

// Fetch

let wordList = [];
var fetchURL = "/word-list.json";

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

async function mainFetch() {
  //
  getJson(fetchURL).then(data => setWordList (data));
};

function setWordList (data) {
  wordList = data.words
}

mainFetch();

// Check

function isInWordList (word) {
  if (wordList.includes(word)) {
    return true
  }else if (!(wordList.includes(word))) {
    return false
  }else{
    console.error("Error checking if word is in word list!")
    return null
  }
}