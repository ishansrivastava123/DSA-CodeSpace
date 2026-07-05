// This isn't a DSA question essentially, but just a simple game to practice prompts and recursion in JS
// Question: https://github.com/tapascript/40-days-of-javascript/blob/main/day-07/secret-number/secret-number.js

// ------------------------------------------------

// My Solution
function guessNumber() {
    let userInput = Number(prompt("Enter any number between 1-10")) || 0;
    let attempts = 0;
    const randomNumber = Math.ceil(Math.random() * 10);
    
    function isValid(guess) {
        attempts++;
        if (guess > randomNumber) {
            console.log("Number too high, try lower number");
            return isValid(Number(prompt("Try again")) || 0);
        } else if (guess < randomNumber) {
            console.log("Number too low, try higher number");
            return isValid(Number(prompt("Try again")) || 0);
        } else {
            console.log(`Great, you've guessed the correct number in ${attempts} attempts`);
            const playAgain = prompt("Do you want to play again? (yes/no)") || "no";
            if (playAgain === "yes") {
                return guessNumber();
            }
            
            return;
        }   
    }
    
    isValid(userInput);
}

guessNumber();
console.log("Thank you for playing. See you next time!");

// More optimized version
function guessNumber() {
    let playAgain = true;

    while (playAgain) {
        const randomNumber = Math.ceil(Math.random() * 10);
        let attempts = 0;
        let guess;

        while (guess !== randomNumber) {
            guess = Number(prompt("Enter a number between 1 and 10"));

            if (guess < 1 || guess > 10 || Number.isNaN(guess)) {
                console.log("Please enter a valid number between 1 and 10.");
                continue;
            }

            attempts++;

            if (guess > randomNumber) {
                console.log("Too high!");
            } else if (guess < randomNumber) {
                console.log("Too low!");
            } else {
                console.log(
                    `Great! You guessed it in ${attempts} attempt${attempts > 1 ? "s" : ""}.`
                );
            }
        }

        playAgain =
            prompt("Play again? (yes/no)")?.toLowerCase() === "yes";
    }

    console.log("Thank you for playing. See you next time!");
}

guessNumber();
