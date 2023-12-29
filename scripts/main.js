// Loaded message

console.log("Main.js loaded!")

// Prevent lost progress

window.addEventListener('beforeunload', function (unload) {
  // Cancel the event
  unload.preventDefault(); 
  unload.returnValue = '';
});

// Get Random Integer function

function getRandomIndex (min, max) {
  if (!Number.isInteger(min) && !Number.isInteger(max) && min > max) {
    return 0;
  };
  return (Math.floor(Math.random() * (max - min) + min));
}

// Fetch word of the day

let word = [];
var fetchURL = "/words.json";

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

async function mainFetch() {
  //
  getJson(fetchURL).then(data => setWord (data));
};

function setWord (wordData) {
  let wordsArray = wordData.words
  let currentWordArray = wordsArray[getRandomIndex(0, wordsArray.length)]
  word = currentWordArray.word
  setMenuContents (currentWordArray.about, currentWordArray.wiki);
  setCorrectWordWarning (word)
}

mainFetch();

// Check if word is in word list

function checkWordList () {
  // Define user word
  const tileSpan = [
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 1), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 2), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 3), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 4), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 5)
  ]

  const tileText = [];

  let fullUserWord;

  for (let i = 0; i < 5; i++) {
    tileText[i] = tileSpan[i].textContent
    fullUserWord = tileText.join("")
  }
  // Check
  if (!(isInWordList (fullUserWord) === true)) {
    notRealWord ()
    return "stop"
  } else if (isInWordList (fullUserWord) === true) {
    console.log(fullUserWord + " is in the word list.")
  }else{
    console.error("Unknown if inputted word is a real word.")
    return "stop"
  }
}

// Make correct word popup to the word

function setCorrectWordWarning (word) {
  let correctWordWarning = document.getElementById("correctWordWarning")
  correctWordWarning.innerHTML += `<span class="capital-letter" id="correctWordWarningText"></span>`
  let correctWordWarningText = document.getElementById("correctWordWarningText")
  for (let i = 0; i < 5; i++) {
    correctWordWarningText.innerHTML += word[i]
  }
}

// Full first word

var fullFirstWord = ""

// Make finalLetter global var

var finalLetter

// Detect when key is pressed

// Listen for keydown events on the document
document.addEventListener('keydown', function key (event) {
  // Check if the key that was pressed is in the range of 'a' to 'z'
  if (event.key >= 'a' && event.key <= 'z') {
    // The key that was pressed is in the range of 'a' to 'z'
    // Do something here, such as log the key that was pressed
    addLetter (`${event.key}`)
  }
});


// Keyboard

var userLetter

function letterClick (usedLetter) {
    addLetter (usedLetter)
}

// Set tile row

var tileRow = 1

// When letter is added

var tileNumber = 1

// Define can type

var canType = 1

// Add letter

function addLetter (letter) {
  // Check if input is ok to enter
  if (tileNumber > 5){
    tooManyLetterWarning()
  }else if (canType === 1) {
    writeLetter(letter)
  }else if (canType === 0) {
    console.warn("Typing not enabled.")
  } else {
    console.error("Unknown status of typing.")
  }
}

function writeLetter (letter) {
  // Write letter
  let containerToWrite = document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + tileNumber)
  var finalLetter = letter

  tileNumber = tileNumber + 1
  containerToWrite.innerHTML = finalLetter

  fullFirstWord = fullFirstWord + finalLetter
}

// Too many letter warning

function tooManyLetterWarning () {
  let toomanyWarning = document.getElementById("tooManyLetters")
  toomanyWarning.style.visibility="visible";
  setTimeout( function FetchData() { toomanyWarning.style.visibility="hidden"; }, 4000);
  tileNumber = 6
}

// Detect backspace

window.addEventListener('keydown', function (keypressDetect) {
  if ((keypressDetect.keyCode === 8)){
    onDelete ()
  }
});

// Delete action

function onDelete () {
  let containerToWrite = document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + (tileNumber - 1))
  containerToWrite.innerHTML = ""
  tileNumber = tileNumber - 1
  fullFirstWord = fullFirstWord - finalLetter
}

// Detect enter

window.addEventListener('keydown', function (keypressDetect) {
  if ((keypressDetect.keyCode === 13)){
    onEnter ()
  }
});

// Enter action

function onEnter () {
  // Not enough
  if (tileNumber < 6){
    let toomanyWarning = document.getElementById("notEnoughLetters")
    toomanyWarning.style.visibility="visible";
    setTimeout( function FetchData() { toomanyWarning.style.visibility="hidden"; }, 5000);
    // Enough
  }else if (tileNumber === 6) {
    tileNumber = 1
    fullFirstWord = ""
    if (checkWordList () === "stop") {
      tileNumber = 6
      return
    }
    checkForCorrectLetters ()
    tileRow = tileRow + 1
    checkForLoss()
  // Unknown
  }else{
    console.warn("Too many caracters!")
    let toomanyWarning = document.getElementById("tooManyLetters")
    toomanyWarning.style.visibility="visible";
  }
}

// Check for loss

function checkForLoss () {
  if (tileRow > 6 && !(hasWon === true)){
    let correctWord = document.getElementById("correctWordWarning")
    correctWord.style.visibility="visible";
    canType = 0
    showMenuInit()
    clearStreak ()
  }
}

//

let hasWon = false;

// Check how any of a value are in a array

function countArrayValues(array, value) {
    return array.filter((v) => (v === value)).length;
}

// Show real word popup

function notRealWord () {
  console.log("The word that was entered is not a real word!")
  const realWordWarning = document.getElementById("notRealWord")
  realWordWarning.style.visibility="visible";
  setTimeout( function FetchData() { realWordWarning.style.visibility="hidden"; }, 5000);
}

// Correct awnser checker

function checkForCorrectLetters () {

  let allreadyChecked = ["-", "-", "-", "-", "-"];

  const tileSpan = [
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 1), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 2), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 3), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 4), 
    document.querySelector(`#guessRow` + tileRow + ` .tile-letter` + 5)
  ]

  const tileText = [];

  let fullUserWord;

  for (let i = 0; i < 5; i++) {
    tileText[i] = tileSpan[i].textContent
    fullUserWord = tileText.join("")
  }

  const tile = [
    document.querySelector(`#guessRow` + tileRow + ` .tile` + 1), 
    document.querySelector(`#guessRow` + tileRow + ` .tile` + 2), 
    document.querySelector(`#guessRow` + tileRow + ` .tile` + 3), 
    document.querySelector(`#guessRow` + tileRow + ` .tile` + 4), 
    document.querySelector(`#guessRow` + tileRow + ` .tile` + 5)
  ] 

  for (let i = 0; i < 5; i++) {
    if (tileText[i] === word[i]){
      tile[i].style.backgroundColor="var(--correct-color)"
      allreadyChecked[i] = `${tileText[i]}`;
      // Set keyboard tile color
      let currentLetterKey = shadow.getElementById(`${tileText[i]}Key`);
      currentLetterKey.classList.add("correct-key");
      currentLetterKey.style = "background-color: var(--correct-color, gray);";
    }else if (word.includes(tileText[i])){
      if (!(countArrayValues(allreadyChecked, tileText[i]) >= countArrayValues(word, tileText[i])) && (countArrayValues(allreadyChecked, tileText[i]) - 1 <= countArrayValues(word, tileText[i])) && !/*(countArrayValues(word, tileText[i]) < countArrayValues(tileText, tileText[i]) &&*/ (tileText[i] === tileText[i + 1] && tileText[i + 1] === word[i + 1]) && !(tileText[i] === tileText[i + 2] && tileText[i + 2] === word[i + 2]) && !(tileText[i] === tileText[i + 3] && tileText[i + 3] === word[i + 3]) && !(tileText[i] === tileText[i + 4] && tileText[i + 4] === word[i + 4]) && !(tileText[i] === tileText[i + 5] && tileText[i + 5] === word[i + 5])) {
        tile[i].style.backgroundColor="var(--semicorrect-color)"
        allreadyChecked[i] = `${tileText[i]}`;
        // Set keyboard tile color
        let currentLetterKey = shadow.getElementById(`${tileText[i]}Key`);
        if (!currentLetterKey.classList.contains("correct-key")) {
          currentLetterKey.style = "background-color: var(--semicorrect-color, gray);";
        }
      }else{
        tile[i].style.backgroundColor="var(--incorrect-color)"
        allreadyChecked[i] = `${tileText[i]}`;
        // Set keyboard tile color
        let currentLetterKey = shadow.getElementById(`${tileText[i]}Key`);
        if ((!word.includes(tileText[i]))) {
          currentLetterKey.style = "background-color: var(--incorrect-color, gray);";
        }
      }
    }else {
        tile[i].style.backgroundColor="var(--incorrect-color)"
        allreadyChecked[i] = `${tileText[i]}`;
        // Set keyboard tile color
        let currentLetterKey = shadow.getElementById(`${tileText[i]}Key`);
        if (!(word.includes(tileText[i]))) {
          currentLetterKey.style = "background-color: var(--incorrect-color, gray);";
        }
    }
  }

  // Check for win

  if (tileText.join(',') === word.join(',')) {
    win ()
  }
}

function win () {
  addToStreak(1);
  showMenuInit ();
  canType = 0;
  hasWon = true;
}
