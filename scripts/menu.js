// Main js for the menu

console.log("Menu.js loaded");

// Open and hide menu function

function openMenu () {
  menu.style.visibility = "visible";
}

function closeMenu () {
  menu.style.visibility = "hidden";
}

// Write to menu

let aboutWordContainer = document.getElementById("aboutWord");

let minecraftWikiButton = document.getElementById("minecraftWikiLink");

function setMenuContents (aboutWord, minecraftWikiLink) {
  aboutWordContainer.innerHTML = aboutWord;

  minecraftWikiButton.setAttribute('href', minecraftWikiLink);
  // Set on start (should be repaced later, just to prevent blank streaks)
  setCurrentStreakMenu ()
}

// Hide and open menu

let menu = document.getElementById("mainMenu");
let showMenuButton = document.getElementById("showMenu");

function minimizeMenu () {
  closeMenu ();
}

function showMenu () {
  openMenu ();
}

function showMenuInit () {
  // Set streak
  setCurrentStreakMenu ()
  // Open Menu
  openMenu ();
  // Show button
  showMenuButton.innerHTML = `<span onclick="showMenu()">stats</span>`;
}

// Set Current Streak
// Sets it to players when the menu is opened.

function setCurrentStreakMenu () {
  const currentStreakSpan = document.getElementById("currentStreakNumber")
  currentStreakSpan.innerHTML = getCurrentStreak ()
}

// Share

var currentPageURL = window.location.href;

const url = currentPageURL

var shareMessage = `I played the Minecraft Wordle! You can to here: ${url}`

setTwitterURL ()
setEmailLink ()

// Twitter
function setTwitterURL () {
  let twitterLink = document.getElementById("twitterLink");
  var twitterTweetLink = `https://twitter.com/intent/tweet?text=${shareMessage}`;
  twitterLink.setAttribute('href', twitterTweetLink);
}
// Email
function setEmailLink () {
  let emailLink = document.getElementById("emailLink");
  var emailSendLink = `mailto:?subject=Minecraft%20Wordle&body=${shareMessage}`;
  emailLink.setAttribute('href', emailSendLink);
}
// Copy Link
function copyLink (url) {
  navigator.clipboard.writeText(url);
  console.log("Coped url: " + url + " to clipboard.")
}
// Built in
const shareButton = document.getElementById('sharePopupButton')
shareButton.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Minecraft Wordle',
      url: currentPageURL
    }).then(() => {
      console.log('Shared!');
    })} else {
    alert('Your Browser/OS dosn\'t support this method of sharing!');
  }
});

// Info box

const infoMenu = document.getElementById("infoMenu");

function openInfoBox () {
  infoMenu.style.visibility = "visible";
}

function minimizeInfoMenu () {
  infoMenu.style.visibility = "hidden";
}

// Has seen info popup

const hasSeenInfoPopup = localStorage.getItem("hasSeenInfoPopup");

if (!(hasSeenInfoPopup === "true")) {
  showInfoPopupFirst ()
}

function showInfoPopupFirst () {
  localStorage.setItem("hasSeenInfoPopup", "true");
  openInfoBox ();
}
