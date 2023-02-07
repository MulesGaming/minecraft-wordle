// Main js for the menu

console.log("Menu.js loaded");

//

var aboutWord = "The sword is a combat wepon in Minecraft. It comes in 6 types: wood, sword, iron, gold, diamond, and netherite.";

var minecraftWikiLink = "https://minecraft.fandom.com/wiki/Sword";

// Write to menu

let aboutWordContainer = document.getElementById("aboutWord");

let minecraftWikiButton = document.getElementById("minecraftWikiLink");

aboutWordContainer.innerHTML = aboutWord;

minecraftWikiButton.setAttribute('href', minecraftWikiLink);

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
