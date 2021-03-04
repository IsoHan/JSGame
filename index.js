import * as readline from 'readline';
//import { RPSGen } from './Generator.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to our game!");

rl.question("Please select your level of difficulty: Easy, Medium, Hard", (answer) => {
    //console.log(`You selected: ${answer}`);

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

    rl.close();
})

let playerPosition = 0;
let numOfNpcWins = 0;