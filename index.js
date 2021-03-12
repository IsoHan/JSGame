import prompt from "prompt-sync";
import { Game } from "./classes/game.js"

let prompter = prompt();

console.log("Welcome to our game!");
let userDifficulty = prompter("Please select your level of difficulty: easy, medium, hard. >>>> ").toLowerCase();
console.log("Difficulty selected:", userDifficulty);

let game = new Game(userDifficulty);
console.log(game);

game.startGame();

while(!game.endGame) {
    game.playRound();
}