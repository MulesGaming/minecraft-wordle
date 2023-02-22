// This file is for creating the keys of the keyboard using shadow root. Handling of keys are in main.js
// Console.log

console.log("Keyboard.js ready")

// Shadow root

let shadowRoot = document.getElementById("keyboard");

// Shadow DOM

const shadow = shadowRoot.attachShadow({ mode: "open" });
//
const main = document.createElement("div");
//
var text = `<div class="row row1" id="row">
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
<button class="keyboard-button" id="keyboard-button" aria-label="backspace" onclick="onDelete ()">backspace</button>
<button class="keyboard-button" id="keyboard-button" aria-label="enter" onclick="onEnter ()">Enter</button>
</div>`;

main.innerHTML = text

// Add CSS

let styles = document.createElement("link");
styles.rel = "stylesheet"
styles.href = "/styles/keyboard.css"

// attach the created elements to the shadow DOM
shadow.appendChild(main);
shadow.appendChild(styles);
