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

        // Initiate dragon
        this.dragon = new Dragon(this.difficultyTranslator[userDifficulty].lenOfArr);
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

    RPSGen(computerMove){
        //e.g.{rock:2,scissors:1, paper:0}
        var playerMove = Math.floor(Math.random() * 3);
        let result;
        
        if ((computerMove + 1) % 3 == playerMove){
            result = +1;
        }else if(computerMove == playerMove){
            result = 0;
        }else{
            result = -1;
        }
        console.log(result);
        return(result);
    }

    fightDragon(playerItems) {
        let odds = 6 - playerItems;
        let dragonMove = Math.floor((Math.random() * odds) + 1);

        let playerMove = parseInt(prompter(`Please guess a number between 1 and ${odds}: >>>> `));
    
        if (dragonMove === playerMove){
            console.log(`You guessed: ${playerMove}`);
            console.log(`Dragon guessed: ${dragonMove}`);
            console.log("You have won the game!");
            this.endGame = true;
        }else{
            console.log(`You guessed: ${playerMove}`);
            console.log(`Dragon guessed: ${dragonMove}`);
            console.log("You lose n00b");
            //this.endGame = true;
            // Add option to let user play again
            this.player.position = 0;
            this.player.items = 0;
        }
    }

    playRound() {
        this.player.position += this.rolldice();
        console.log("New player position:", this.player.position);

        for (let i = 0; i < this.difficultyTranslator[this.difficulty].numOfNpc; i++) {
            if (this.player.position === this[`npc${i}`].position) {
                console.log("RPS");
                this.player.items += this.RPSGen(this[`npc${i}`].RPSChoice);
                this.player.items = Math.max(this.player.items, 0); // Stops player items going negative
                console.log(this.player.items);
                break;
            }
        }

        // Check if player is >= end
        if (this.player.position >= this.difficultyTranslator[userDifficulty].lenOfArr-1) {
            this.fightDragon(this.player.items);
        }
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
        this.name = NPC.Generatename();
    }

    static Generatename(){
        let Firstname = ["Gold","High","Old","Wild","Lonely"]
        let Lastname = ["Witch","Sage","Joker","Troll"]
        let FNnum = Math.floor(Math.random() * 5);
        let LNnum = Math.floor(Math.random() * 4);
        return(Firstname[FNnum]+' ' +Lastname[LNnum]);
  
      }
}

class Dragon {
    constructor(lenOfArr) {
        this.position = lenOfArr-1;
    }
}

let game = new Game(userDifficulty);
console.log(game);

game.startGame();

while(!game.endGame) {
    game.playRound();
}