const inputs = document.querySelector(".inputs"), // Selects the HTML element that will display the guessed letters or underscores
resetBtn = document.querySelector(".reset-btn"), // Selects the reset button element in the HTML using the class "reset-btn"
hint = document.querySelector(".hint span");// Selecting the hint span element for displaying hints in the word guessing game

// Function to log a randomly selected word object from the wordList to the console.
function randomWord() {
let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // Generate a random index to select a word from the wordList
let word = ranObj.word; // Retrieves the randomly selected word from the wordList object
console.log(ranObj); 

hint.innerText = ranObj.hint; // Setting the hint text content to the hint associated with the randomly selected word

let html = "";
for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`; // Creating a disabled text input for each character of the word
}
inputs.innerHTML = html; // Update the content of the "inputs" element to display disabled text input elements
} 

randomWord();

resetBtn.addEventListener("click", randomWord); // Adds a click event listener to the reset button, triggering the randomWord function to generate a new word for the game when clicked

