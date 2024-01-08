const inputs = document.querySelector(".inputs"), // Selects the HTML element that will display the guessed letters or underscores
resetBtn = document.querySelector(".reset-btn");

// Function to log a randomly selected word object from the wordList to the console.
function randomWord() {
let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // Generate a random index to select a word from the wordList
let word = ranObj.word; // Retrieves the randomly selected word from the wordList object
console.log(ranObj); 

let html = "";
for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
    inputs.innerHTML = html; 
    // Generate and display input fields for each character in the word on the webpage
}

} 

randomWord();

resetBtn.addEventListener("click", randomWord);

