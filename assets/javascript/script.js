const inputs = document.querySelector(".inputs"), // Selects the HTML element that will display the guessed letters or underscores
resetBtn = document.querySelector(".reset-btn"), // Selects the reset button element in the HTML using the class "reset-btn"
hint = document.querySelector(".hint span"), // Selecting the hint span element for displaying hints in the word guessing game
guessLeft = document.querySelector(".guess-left span")
wrongLetter = document.querySelector(".wrong-letter span"),
typingInput = document.querySelector(".typing-input"); // Selecting the input field for typing guesses in the word guessing game


let word,maxGuesses, corrects = [], incorrects = [];

// Function to log a randomly selected word object from the wordList to the console.
function randomWord() {
let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // Generate a random index to select a word from the wordList
word = ranObj.word; // Retrieves the randomly selected word from the wordList object
maxGuesses = 8; corrects = []; incorrects = [];

hint.innerText = ranObj.hint; // Setting the hint text content to the hint associated with the randomly selected word
guessLeft.innerText = maxGuesses;
wrongLetter.innerText = incorrects;

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
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) 
    && !corrects.includes(` ${key}`)) { 
        if(word.includes(key)) // Checks if the current guessed letter is included in the target word
        for (let i = 0; i < word.length; i++) {
            // Checks if the current letter in the target word matches the guessed letter
            if(word[i] == key) {
                corrects.push(key);
                inputs.querySelectorAll("input")[i].value = key;
            }
    } else {  
        maxGuesses--; // Decrements the maximum allowed guesses
        incorrects.push(` ${key}`);

    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;
    }
    typingInput.value = "";


    setTimeout (() => { // Set timeout to delay the execution of the provided function so final letter can show
        if(corrects.length === word.length) {
            alert (`Great! you found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) { // Checks if the maximum number of guesses has been exhausted
            alert("Game over! You don't have any remaining guesses");
            for(let i = 0; i < word.length; i++) { 
                //Loop through each character in the target word
    
                inputs.querySelectorAll("input")[i].value = word[i];
            }
    
    
        }
    } ) ;

    
}

resetBtn.addEventListener("click", randomWord); // Adds a click event listener to the reset button, triggering the randomWord function to generate a new word for the game when clicked
typingInput.addEventListener("input", initGame); // Adding an event listener to the typing input field to update the game on user input
inputs.addEventListener("click", () => typingInput.focus());// Add a click event listener to the "inputs" element to focus on the typing input when clicke
document.addEventListener("keydown", () => typingInput.focus()); // Focusing on the typing input when a key is pressed to enable immediate user input
