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

setTwitterURL ()
setEmailLink ()

// Twitter
function setTwitterURL () {
  let twitterLink = document.getElementById("twitterLink");
  var twitterTweetLink = `https://twitter.com/intent/tweet?url=${currentPageURL}`;
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
