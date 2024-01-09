const inputs = document.querySelector(".inputs"), // Selects the HTML element that will display the guessed letters or underscores
resetBtn = document.querySelector(".reset-btn"), // Selects the reset button element in the HTML using the class "reset-btn"
hint = document.querySelector(".hint span"), // Selecting the hint span element for displaying hints in the word guessing game
typingInput = document.querySelector(".typing-input"); // Selecting the input field for typing guesses in the word guessing game


let word;

// Function to log a randomly selected word object from the wordList to the console.
function randomWord() {
let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // Generate a random index to select a word from the wordList
word = ranObj.word; // Retrieves the randomly selected word from the wordList object
console.log(word); 

hint.innerText = ranObj.hint; // Setting the hint text content to the hint associated with the randomly selected word

let html = "";
for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`; // Creating a disabled text input for each character of the word
}
inputs.innerHTML = html; // Update the content of the "inputs" element to display disabled text input elements
} 

randomWord();

// Function to handle user input events and obtain the lowercase value for further gameplay.
function initGame(e) {
    let key = e.target.value.toLowerCase();
    // Checks if the input key is a letter (A-Z or a-z) using a regular expression.
    if(key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if(word.includes(key)) // Checks if the current guessed letter is included in the target word
        for (let i = 0; i < word.length; i++) {
            // Checks if the current letter in the target word matches the guessed letter
            if(word[i] == key) {
                inputs.querySelectorAll("input")[i].value = key;
            }
    } else {  
        console.log("letter not found")

    }
    }
    
}

resetBtn.addEventListener("click", randomWord); // Adds a click event listener to the reset button, triggering the randomWord function to generate a new word for the game when clicked
typingInput.addEventListener("input", initGame); // Adding an event listener to the typing input field to update the game on user input
document.addEventListener("keydown", () => typingInput.focus()); // Focusing on the typing input when a key is pressed to enable immediate user input
