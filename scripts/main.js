// Loaded message

console.log("Main.js loaded!")

// Prevent lost progress

window.addEventListener('beforeunload', function (unload) {
  // Cancel the event
  unload.preventDefault(); 
  unload.returnValue = '';
});

// Fetch word of the day

let word = "";
var fetchURL = "/words.json";

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function mainFetch() {
    //OPTION 1
    getJson(fetchURL).then(data => setWord (data));
};

function setWord (wordData) {
  let wordsArray = wordData.words
  let currentWord = wordsArray[0].word
  word = currentWord
}

mainFetch();

// Make correct word popup to the word

for (let i = 0; i < 5; i++) {
  let correctWord = document.getElementById("correctLetter")
  correctWord.innerHTML += `<span class="capital-letter">` + word[i] + `</span>`
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
  let containerToWrite = document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + tileNumber)
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
  let containerToWrite = document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + tileNumber)
  let finalBox = document.querySelector(`#guessRow` + tileRow + ` #tileLetter5`)
  if (finalBox.childNodes.length === 1) {
    finalBox.innerHTML = ""
    tileNumber = 4
  }else{
    containerToWrite.innerHTML = ""
    tileNumber = tileNumber - 1
    fullFirstWord = fullFirstWord - finalLetter
  }
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
  if (tileRow > 6){
    alert("You ran out of guesses!")
    let correctWord = document.getElementById("correctLetter")
    correctWord.style.visibility="visible";
    canType = 0
  }
}

// Correct awnser checker

function checkForCorrectLetters () {

  const tileSpan = [document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + 1), document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + 2), document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + 3), document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + 4), document.querySelector(`#guessRow` + tileRow + `  #tileLetter` + 5)]

  const tileText = [];
  for (let i = 0; i < 5; i++) {
    tileText[i] = tileSpan[i].textContent
  }

  const tile = [document.querySelector(`#guessRow` + tileRow + ` .tile` + 1), document.querySelector(`#guessRow` + tileRow + ` .tile` + 2), document.querySelector(`#guessRow` + tileRow + ` .tile` + 3), document.querySelector(`#guessRow` + tileRow + ` .tile` + 4), document.querySelector(`#guessRow` + tileRow + ` .tile` + 5)]  

  for (let i = 0; i < 5; i++) {

    if (tileText[i] === word[i]){
      tile[i].style.backgroundColor="var(--correct-color)"
    }else {     
      tile[i].style.backgroundColor="var(--incorrect-color)"
    }
  }
  // Check for win

  if (tileText.sort().join(',') === word.sort().join(',')) {
    win ()
  }
}

function win () {
  showMenuInit ()
  canType = 0
}
