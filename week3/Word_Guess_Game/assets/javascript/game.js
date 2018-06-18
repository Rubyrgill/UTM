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

var guesses = 10;
var wins = 0;
var losses = 0;

var playerGuesses = [];
var playerChoice = null;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

document.onkeypress = function(event) {
  var playerGuess = event.key;
  {
    if (playerGuess === computerChoice) {
      wins++;
    } else guesses--;
  }
  if (guesses === 0) {
    losses++;
  }

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesleft").innerHTML = guesses;
};
