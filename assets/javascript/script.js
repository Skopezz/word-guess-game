
// Function to log a randomly selected word object from the wordList to the console.
function randomWord() {
let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // Generate a random index to select a word from the wordList
let word = ranObj.word; // Extract the 'word' property from the randomly selected word object (ranObj) and assign it to the variable 'word'.
console.log(ranObj); 

let html = "";
for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
    inputs.innerHTML = html; 
    // Generate and display input fields for each character in the word on the webpage
}

} 

randomWord()


