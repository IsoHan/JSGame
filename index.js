import * as readline from 'readline';
//import * as prompt from 'prompt';

/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/

console.log("Welcome to our game!");

/*
rl.question("Please select your level of difficulty: Easy, Medium, Hard", (answer) => {
    //Need to convert to lower case
    let lowerCaseAnswer = answer.toLowerCase();
    rl.close();
})
*/

// var userDifficulty = prompt("Please select your level of difficulty (easy, medium, hard): ");

//const prompt = require('prompt-sync')();
import * as prompt from 'prompt';
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`)

/*

let difficultyObj = {
    "easy": {
        lenOfArr: 10,
        numOfNpc: 2
    },
    "medium": {
        lenOfArr: 15,
        numOfNpc: 5
    },
    "hard": {
        lenOfArr: 20,
        numOfNpc: 10
    }
};

//let userChoice = difficultyObj[answer];
let userInput = difficultyObj[answer].lenOfArr;
let npcNum = difficultyObj[answer].numOfNpc;

const createGame = (userInput, npcNum) => {

    let sizeOfGame = new Array(userInput).fill(0);
    
    for (let i = 0; i <= npcNum - 1 ; i++) {
        // code for generating random number 
        let x = Math.floor(Math.random()* userInput ) + 1;
        sizeOfGame[x] = 1;

        // Could add if statement to check if position has already beeen filled with a 1
    }
    
    // Array will look something like [0, 1, 0, 0, 0, 1, 0, 0, 0, 0] (on easy mode)
    return sizeOfGame;
}

let playerPosition = 0;
let numOfNpcWins = 0;

while (playerPosition < ) {

}


// DiceRoll
const rollDice = () => {
    return Math.floor(Math.random(7)) + 1
}

//const playGame = () = {

  get userInput which determines the size of the array e.g 10 and number of ncps e.g 2

  game array = createGame(userInput)

  while (playerPosition < gameArray.length) {

    roll the dice which moves playposition , need to check if gameArray[playPosition] == 1 {
        call npc encounter function which will have an effect on......
    }
  }


} 

*/



