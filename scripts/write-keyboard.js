// This file is for creating the keys of the keyboard using shadow root. Handling of keys are in main.js
// Console.log

console.log("Keyboard.js ready")

// Shadow root

let shadowRoot = document.getElementById("keyboard");

// Shadow DOM

const shadow = shadowRoot.attachShadow({ mode: "open" });

// Make main div

const main = document.createElement("div");

// Add rows

var row1 = `<div class="row row1" id="row">
<button class="keyboard-button" id="keyboard-button" aria-label="q" onclick="letterClick ('q')">Q</button>
<button class="keyboard-button" id="keyboard-button" aria-label="w" onclick="letterClick ('w')">W</button>
<button class="keyboard-button" id="keyboard-button" aria-label="e" onclick="letterClick ('e')">E</button>
<button class="keyboard-button" id="keyboard-button" aria-label="r" onclick="letterClick ('r')">R</button>
<button class="keyboard-button" id="keyboard-button" aria-label="t" onclick="letterClick ('t')">T</button>
<button class="keyboard-button" id="keyboard-button" aria-label="y" onclick="letterClick ('y')">Y</button>
<button class="keyboard-button" id="keyboard-button" aria-label="u" onclick="letterClick ('u')">U</button>
<button class="keyboard-button" id="keyboard-button" aria-label="i" onclick="letterClick ('i')">I</button>
<button class="keyboard-button" id="keyboard-button" aria-label="o" onclick="letterClick ('o')">O</button>
<button class="keyboard-button" id="keyboard-button" aria-label="p" onclick="letterClick ('p')">P</button>
</div>`;

var row3 = `<div class="row row3" id="row">
<button class="keyboard-button" id="keyboard-button" aria-label="enter" onclick="onEnter ()">Enter</button>
<button class="keyboard-button" id="keyboard-button" aria-label="z" onclick="letterClick ('z')">Z</button>
<button class="keyboard-button" id="keyboard-button" aria-label="x" onclick="letterClick ('x')">X</button>
<button class="keyboard-button" id="keyboard-button" aria-label="c" onclick="letterClick ('c')">C</button>
<button class="keyboard-button" id="keyboard-button" aria-label="v" onclick="letterClick ('v')">V</button>
<button class="keyboard-button" id="keyboard-button" aria-label="b" onclick="letterClick ('b')">B</button>
<button class="keyboard-button" id="keyboard-button" aria-label="n" onclick="letterClick ('n')">N</button>
<button class="keyboard-button" id="keyboard-button" aria-label="m" onclick="letterClick ('m')">M</button>
<button class="keyboard-button" id="keyboard-button" aria-label="backspace" onclick="onDelete ()">backspace</button>
</div>`;


main.innerHTML = row1
main.innerHTML += row3

// Add CSS

let styles = document.createElement("link");
styles.rel = "stylesheet"
styles.href = "/styles/keyboard.css"

// attach the created elements to the shadow DOM
shadow.appendChild(main);
shadow.appendChild(styles);
