# Psychic-Game
A simple guess the number type game. The Computer generate a random number between 1 and 100, you will have 10 guesses to get the answer right by putting only numbers into the guess field.
After each turn the player is told if they are right or wrong — and, if they are wrong, whether the guess was too low or too high. It also tells the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, they are given an option to start playing again.

### Game Functions:
Generate a random number between 1 and 100.  - Line 5 JS file
Record the turn number the player is on. Start it on 1. -Lines 14 & 50 JS file
    It also counts down from 10 and displays the guesses remaining to the player in a scoreboard area. - Lines 15, 51, & 56 JS File 
Provide the player with a way to guess what the number is. - HTML <form> element with Class of guessField
    Once a guess has been submitted first record it somewhere so the user can see their previous guesses. - HTML <div> element with class resultParas

Next, check whether it is the correct number. - Lines 21-60 JS File
If it is correct: Lines 28-60 JS File
    Display congratulations message.
    Stop the player from being able to enter more guesses (this would mess the game up).
    Display control allowing the player to restart the game.

If it is wrong and the player has no turns left: - Lines 35-60 JS File
Tell the player it is game over.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.

If it is wrong and the player has turns left: - Lines 40-60 JS File
    Tell the player they are wrong.
    Allow them to enter another guess.
    Increment the turn number by 1.
    
Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1. - Lines 63-96

<!--From a template I found online-->
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* VSCode 

