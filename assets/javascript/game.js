// possible guesses
var allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// set initial variable values
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

// first, have computer choose it's letter and log it out
var computerGuess = allLetters[Math.floor(Math.random()*allLetters.length)];
    console.log(computerGuess)

// function begins on keyup
// user's guess is assigned as a lower-case letter string
document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    // add current guess to the guessedLetters array if it hasn't already been picked
    // decrease # of guesses left by 1
    if (guessedLetters.indexOf(userGuess) < 0 && allLetters.indexOf(userGuess) >= 0) {
        guessedLetters[guessedLetters.length] = userGuess;
        guessesLeft--;
    }

    // if user guesses correctly, add 1 to wins, alert congrats
    // reset variables, clear console and have computer pick a new letter and log it out
    if (computerGuess === userGuess) {
        wins++;
        alert("Congratulations! You Won!");
        guessesLeft = 9;
        guessedLetters = [];
        computerGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
        console.clear();
        console.log(computerGuess);
    }

    // if user doesn't pick the right letter, add 1 to losses, alert darn
    // reset variables, clear console and have computer pick a new letter and log it out
    if (guessesLeft === 0) {
        losses++;
        alert("Darn! You lost!");
        guessesLeft = 9;
        guessedLetters = [];
        computerGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
        console.clear();
        console.log(computerGuess);
    }

    // make visible on DOM
    var html =  "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Your Guesses so far: " + guessedLetters + "</p>";

    document.querySelector("#game").innerHTML = html;
}