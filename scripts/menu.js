// Main js for the menu

console.log("Menu.js loaded");

// Pre-define vars

let aboutWord;
let minecraftWikiLink;

// Fetch .json

fetch ("/words.json")

// Process fetch results

.then((result)=>{
  return result.json()
}).then((wordsJson)=>{
  //
  let wordsArray = wordsJson.words;
  aboutWord = wordsArray[0].about;
  minecraftWikiLink = wordsArray[0].wiki;
  setMenuContents(aboutWord, minecraftWikiLink);
  }
)

//


// Write to menu

let aboutWordContainer = document.getElementById("aboutWord");

let minecraftWikiButton = document.getElementById("minecraftWikiLink");

function setMenuContents (aboutWord, minecraftWikiLink) {
  aboutWordContainer.innerHTML = aboutWord;

  minecraftWikiButton.setAttribute('href', minecraftWikiLink);
}

// Hide and open menu

let menu = document.getElementById("mainMenu");
let showMenuButton = document.getElementById("showMenu");

function minimizeMenu () {
  menu.style.visibility = "hidden";
}

function showMenu () {
  menu.style.visibility = "visible";
}

function showMenuInit () {
  menu.style.visibility = "visible";
  showMenuButton.innerHTML = `<span onclick="showMenu()">stats</span>`;
}

// Share

var currentPageURL = window.location.href;

setTwitterURL ()
setEmailLink ()

// Twitter
function setTwitterURL () {
  let twitterLink = document.getElementById("twitterLink");
  var twitterTweetLink = `https://twitter.com/intent/tweet?text=${currentPageURL}`;
  twitterLink.setAttribute('href', twitterTweetLink);
}
// Email
function setEmailLink () {
  let emailLink = document.getElementById("emailLink");
  var emailSendLink = `mailto:?subject=Minecraft%20Wordle&body=${currentPageURL}`;
  emailLink.setAttribute('href', emailSendLink);
}
// Copy Link
function copyLink () {
  navigator.clipboard.writeText(currentPageURL);
}
