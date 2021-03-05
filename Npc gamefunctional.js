
let difficultyObj = {
    "easy": {
        lenOfArr: 10,
        numOfNpc: 2,
        finalRoundOdds: 6
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

// let userChoice = difficultyObj[answer];
// let userInput = difficultyObj[answer].lenOfArr;
// let npcNum = difficultyObj[answer].numOfNpc;

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
let finalRoundOdds = 6
let endGame = false

// DiceRoll
const rollDice = () => {
    return Math.floor(Math.random(7)) + 1
}

const playGame = () => {
    let userDifficulty = prompt("Please select your level of difficulty (easy, medium, hard): ");
    let answer = userDifficulty.toLowerCase();
    let userInput = difficultyObj[answer].lenOfArr;
    let numOfNpc = difficultyObj[answer].numOfNpc;
    let gameArray = createGame(userInput, numOfNpc);
    console.log(`This is the size of the game and the map ${gameArray}`)

    while (!endGame) {

        playRound(gameArray)

 }
} 



function playRound (gameArray) {

    let userRoll = rollDice()
    console.log(`you just rolled ${userRoll} on the dice`)
    playerPosition = playerPosition + userRoll
    console.log(`player's current position ${playerPosition}`)
    

    // Calling nPc function on encounter
    if (gameArray[playerPosition] == 1) {
        console.log('npc encounter')
        nPc();
    }
    // Calling dragonGame once reaching the end of the map
    else if (playerPosition >= gameArray.length-1) {
        dragonGuess(finalRoundOdds)
    }
}




function nPc (){
    //e.g.{rock:2,scissors:1, paper:0}
    var computerMove = Math.floor(Math.random() * 3);
    console.log(`This is the compMove at npc ${computerMove}`)
    
    var playerMove = Math.floor(Math.random()*3);
    console.log(`This is the playerMove at npc ${playerMove}`)
    let result;
    if ((computerMove + 1) % 3 == playerMove){
        finalRoundOdds -= 1
    }else if(computerMove == playerMove){
        return
    }else{
        finalRoundOdds += 1
    }

}

function dragonGuess(numObjects){
    //numObjects is passed to determine odds given
    var dragonMove = Math.floor((Math.random() * (numObjects))+1)
    var playerGuess = Math.floor((Math.random() * (numObjects))+1)

    
    if (dragonMove ==playerGuess){
        console.log(`Final round odds are reduced by ${numObjects}`)
        console.log("you've won")
    
        endGame = true;
      
    }else{
        console.log("you've lost, back to square one ")
        playerPosition = 0
        finalRoundOdds = 6
    }
    }