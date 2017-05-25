var computerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var random = computerLetter[Math.floor(Math.random() * computerLetter.length)];
var letterGuesses = [];


document.onkeyup = function(event) {
	var userGuess = event.key;
	var wins = 0;
	var losses = 0;
	var numGuessesLeft = 9;
	letterGuesses.push(userGuess);

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
		//reset game (choose new letter + reset numGuessesLeft + reset guesses so far)

		function reset (random1) {
			var random1 = random;
		}
		reset.random1();
	}

	else if (numGuessesLeft === 0) {
		losses++;
		var temp = document.getElementById("losses");
			temp.textContent = losses;

		numGuessesLeft = 9;
		var temp = document.getElementById("guesses");
			temp.textContent = numGuessesLeft;

		letterGuesses = [];
		//reset game (choose new letter + reset numGuessesLeft + reset guesses so far)
		function reset (random2) {
			var random1 = random;
		}
		reset.random2();
	}
}