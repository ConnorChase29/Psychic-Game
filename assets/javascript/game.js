var computerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var random = computerLetter[Math.floor(Math.random() * computerLetter.length)];
var letterGuesses = [];
var wins = 0;
var losses = 0;
var numGuessesLeft = 9;

document.onkeyup = function(event) {
	var userGuess = event.key;
	letterGuesses.push(userGuess);
	var temp = document.getElementById("userGuesses");
			temp.textContent = userGuess;

	if (userGuess != random) {
		numGuessesLeft--;
		var temp = document.getElementById("guesses");
			temp.textContent = numGuessesLeft;
	}

	else if (userGuess === random) {
		wins++;
		var temp = document.getElementById("wins");
			temp.textContent = wins;

		numGuessesLeft = 9;
		var temp = document.getElementById("guesses");
			temp.textContent = numGuessesLeft;

		letterGuesses = [];

		function reset (random1) {
			var random1 = random;
		}
		reset.random1();
	}

	if (numGuessesLeft === 0) {
		losses++;
		var temp = document.getElementById("losses");
			temp.textContent = losses;

		numGuessesLeft = 9;
		var temp = document.getElementById("guesses");
			temp.textContent = numGuessesLeft;

		letterGuesses = [];
		
		function reset (random2) {
			var random1 = random;
		}
		reset.random2();
	}
}