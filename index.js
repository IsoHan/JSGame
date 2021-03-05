import prompt from "prompt-sync";
let prompter = prompt();

console.log("Welcome to our game!");
let userDifficulty = prompter("Please select your level of difficulty: easy, medium, hard. >>>> ").toLowerCase();
console.log("Difficulty selected:", userDifficulty);

class Game {
    constructor(userDifficulty) {
        this.difficulty = userDifficulty;
        //this.lenOfArr = this.difficultyTranslator[userDifficulty].lenOfArr;
        //this.numOfNpc = this.difficultyTranslator[userDifficulty].numOfNpc;
        this.endGame = false;
        // Initiate map
        this.map = new Map(this.difficultyTranslator[userDifficulty]);

        // Initiate player
        this.player = new Player();

        // Initiate NPCs
        for (let i = 0; i < this.difficultyTranslator[userDifficulty].numOfNpc; i++) {
            this[`npc${i}`] = new NPC(this.difficultyTranslator[userDifficulty].lenOfArr);
        }

    };

    difficultyTranslator = {
        "easy": {
            lenOfArr: 10,
            numOfNpc: 2
        },
        "medium": {
            lenOfArr: 15,
            numOfNpc: 4
        },
        "hard": {
            lenOfArr: 20,
            numOfNpc: 9
        }
    };

    startGame() {
        console.log("You are in a wooded clearing.");
    }

    rolldice() {
        let roll = (Math.floor(Math.random()*6) + 1);
        return roll;
    };

    playRound() {
        this.player.position += this.rolldice();
        console.log("New player position:", this.player.position);

        for (let i = 0; i < this.difficultyTranslator[this.difficulty].numOfNpc; i++) {
            if (this.player.position === this[`npc${i}`].position) {
                console.log("RPS");
                break;
            }
        }

        game.endGame = true;
    }
}

class Map {
    constructor(difficultyObj) {
        this.mapArray = new Array(difficultyObj.lenOfArr).fill(0);
        //console.log(this.mapArray);
    };
    // Roll dice
    // Check if landed on NPC
}

class Player {
    constructor() {
        this.playerName = prompter("What is your name?");
        this.items = 0;
        this.position = 0;
    };
}

class NPC {
    constructor(lenOfArr) {
        this.position = Math.floor(Math.random()*lenOfArr)+1;
        this.RPSChoice = Math.floor(Math.random()*3);
    }
}

class Dragon {

}

let game = new Game(userDifficulty);
console.log(game);

game.startGame();

while(!game.endGame) {
    game.playRound();
}