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

//defined variables
var guesses = 9;
var wins = 0;
var losses = 0;

var playerGuesses = [];

//Computer generates random letter from alphabet array, and console.logs choice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

var resetGuess = function() {
  guesses = 9;
  playerGuesses = [];
};

//when key is pressed, the following if conditioning events will occur...
document.onkeypress = function(event) {
  var playerChoice = event.key.toLowerCase();

  //if player's choice is the same as what the computer randomly selected then increase wins by 1 & alert
  if (playerChoice === computerChoice) {
    wins++;
    alert("Great Job!");
    resetGuess();
    //otherwise, if guess is not equal then reduce amount of guesses
  } else guesses--;

  //Once guesses reach 0, increase the loss by 1...
  if (guesses === 0) {
    losses++;
    resetGuess();
    alert("You Lost This Round!");
  }
  //linking html
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesleft").innerHTML = guesses;
};
