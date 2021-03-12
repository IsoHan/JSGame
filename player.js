import { Game } from "./game.js"
import prompt from "prompt-sync";
let prompter = prompt();

export class Player {
    constructor() {
        this.playerName = prompter("What is your name?");
        this.items = 0;
        this.position = 0;
    };

    fightDragon(playerItems) {
        let odds = 6 - playerItems;
        let dragonMove = Math.floor((Math.random() * odds) + 1);

        let playerMove = parseInt(prompter(`Please guess a number between 1 and ${odds}: >>>> `));
    
        if (dragonMove === playerMove){
            console.log(`You guessed: ${playerMove}`);
            console.log(`Dragon guessed: ${dragonMove}`);
            console.log("You have won the game!");
            // this.endGame = true; 
            return true
        }else{
            console.log(`You guessed: ${playerMove}`);
            console.log(`Dragon guessed: ${dragonMove}`);
            console.log("You lose n00b");
            //this.endGame = true;
            // Add option to let user play again
            this.position = 0;
            this.items = 0;
            return false
        }
    }
}