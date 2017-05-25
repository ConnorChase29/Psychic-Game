var computerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var random = computerLetter[Math.floor(Math.random() * computerLetter.length)];

document.onkeyup = function(event) {
	var userGuess = event.key;
	var wins = 0;
	var losses = 0;
	var numGuessesLeft = 9;

	if (userGuess === random) {
		wins++;
		//reset game (choose new letter + reset numGuessesLeft + reset guesses so far)
	}
	else if (userGuess != random) {
		numGuessesLeft--;
		//write userGuess (letter)
	}

	if (numGuessesLeft === 0) {
		losses++;
		//reset game (choose new letter + reset numGuessesLeft + reset guesses so far)
	}
}