
        // JavaScript goes here

        // vars and constants
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        const guesses = document.querySelector('.guesses');
        const lastResult = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');

        const guessSubmit = document.querySelector('.guessSubmit');
        const guessField = document.querySelector('.guessField');

        let guessCount = 1;
        let resetButton;
        guessField.focus();


        // Creating a function to check the user's guess input
        function guessCheck() {
            let userGuess = Number(guessField.value);
            if (guessCount === 1) {
                guesses.textContent = 'Previous guesses: ';
            }
            guesses.textContent += userGuess + ', ';
            // checking for a win condition
            if (userGuess === randomNumber) {
                lastResult.textContent = 'Wow you\'re a psychic! Are you a Jedi? You should play again!';
                lastResult.style.backgroundColor = 'lightgreen';
                lowOrHi.textContent = '';
                setGameOver();
                // checking for guessCount for a loss condition
            }
            else if (guessCount === 10) {
                lastResult.textContent = 'You\'re not a Jedi master yet. Try again Padawan!';
                setGameOver();
            }
            else {
                lastResult.textContent = 'Incorrect!';
                lastResult.style.backgroundColor = 'orange';
                if (userGuess < randomNumber) {
                    lowOrHi.textContent = 'Last guess was too low!';
                }
                else if (userGuess > randomNumber) {
                    lowOrHi.textContent = 'Last guess was too high!';
                }
            }
            // Increase the guess Counter, resets the guessing field.
            guessCount++;
            guessField.value = '';
            // Focus sets the element as the active element in the current document. 
            guessField.focus();
        }
        // Adding events
        guessSubmit.addEventListener('click', guessCheck);

        // Game over Event
        function setGameOver() {
            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement('button');
            resetButton.textContent = 'Try Again?';
            document.body.appendChild(resetButton);
            resetButton.addEventListener('click', resetGame);
        }
        // Reset Game function. I think this could be done differently. Specifically resetParas

        // Puts the guessCount back down to 1.
        function resetGame() {
            guessCount = 1;
            // Empties all the text out of the information paragraphs.
            const resetParas = document.querySelectorAll('.resultParas p');
            for (let i = 0; i < resetParas.length; i++) {
                resetParas[i].textContent = '';
            }
            // Removes the reset button from our code.
            resetButton.parentNode.removeChild(resetButton);
            // Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
            guessField.disabled = false;
            guessSubmit.disabled = false;
            guessField.value = '';
            guessField.focus();
            // Removes the background color from the lastResult paragraph.
            lastResult.style.backgroundColor = 'white';

            // Generates a new random number so that you are not just guessing the same number again!
            randomNumber = Math.floor(Math.random() * 100) + 1;
        }