// For changing between dark and light theme based of ?theme=

// Load message

console.log("Themes.js loaded")

// Manage localstorage theme

/*
const currentDefaultTheme = localStorage.getItem("userDefaultTheme");

if (currentDefaultTheme === "dark") {
  setThemeDark ()
}else if (currentDefaultTheme === "light"){
  setThemeLight ()
}
*/

// Get value of ?theme=

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const theme = urlParams.get('theme')

// Set themes based on value of ?theme=

let themeSwitcher = document.getElementById("themeSwitcherText")
let menuButton = document.getElementById("showMenu")

if (theme === "dark") {
  setThemeDark ()
}else if (theme === "light"){
  setThemeLight ()
}else {
  console.log("Theme is not set. Using light theme (default).")
}

// Funcion to set theme
 
function setThemeDark () {
  console.log("Using dark theme")
  window.onload=()=>{
    themeSwitcher.setAttribute('href', "?theme=light");
    themeSwitcher.style.color = "white";
    menuButton.style.color = "white";
  }
  // Change Icon
  let themeSwitcherIcon = document.getElementById("themeSwitcherText")
  themeSwitcherIcon.innerHTML = "light"
  // Insert CSS file for dark mode
  var darkModeCSSLink = document.createElement("link");
  darkModeCSSLink.setAttribute("rel", "stylesheet");
  darkModeCSSLink.setAttribute("href", "styles/themes/dark.css");
  document.getElementsByTagName("head")[0].appendChild(darkModeCSSLink);
  // localStorage.setItem("userDefaultTheme", "dark");
}

function setThemeLight () {
  console.log("Using light theme")
  // localStorage.setItem("userDefaultTheme", "light");
}
