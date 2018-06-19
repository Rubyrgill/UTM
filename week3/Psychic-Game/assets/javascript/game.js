//array characters that the computer will pick from

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//VARIABLES
var guesses = 9;
var wins = 0;
var losses = 0;

var playerGuesses = [];

//Computer generates random letter from alphabet array, and console.logs choice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

//FUNCTIONS
//reset function, once game is won,lost or 0=guesses then everything will reset for new game.
var reset = function() {
  guesses = 9;
  playerGuesses = [];
};

//when key is pressed, the following if conditioning events will occur...
document.onkeyup = function(event) {
  var playerChoice = String.fromCharCode(event.keyCode).toLowerCase();
  playerGuesses.push("   " + playerChoice);

  //if player's choice is the same as what the computer randomly selected then increase wins by 1 & alert
  if (playerChoice === computerChoice) {
    wins++;
    alert("You WON This Round!");
    reset();
    //otherwise, if guess is not equal then reduce amount of guesses
  } else guesses--;

  //Once guesses reach 0, increase the loss by 1...
  if (guesses === 0) {
    losses++;
    reset();
    alert("You LOST This Round!");
  }
  //linking html
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesleft").innerHTML = guesses;
  document.getElementById("playerguesses").innerHTML = playerGuesses;
};
