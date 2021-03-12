import prompt from "prompt-sync";
import { Dragon } from "./dragon.js"
import { NPC } from "./npc.js"
import { Player } from "./player.js"
import { Map } from "./map.js"

let prompter = prompt();

export class Game {
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

    async playRound() {
        this.player.position += this.rolldice();
        console.log("New player position:", this.player.position);

        for (let i = 0; i < this.difficultyTranslator[this.difficulty].numOfNpc; i++) {
            if (this.player.position === this[`npc${i}`].position) {
                
                const result = await this[`npc${i}`].RPSGen(this[`npc${i}`].RPSChoice);
                this.player.items += result
                this.player.items = Math.max(this.player.items, 0); // Stops player items going negative
                console.log(this.player.items);
                break;
            }
        }

        // Check if player is >= end
        if (this.player.position >= this.difficultyTranslator[this.difficulty].lenOfArr-1) {
            this.endGame = this.player.fightDragon(this.player.items);
        }
    }
    
}