import prompt from "prompt-sync";
import fs from "fs";
import { Game } from "./classes/game.js"
let prompter = prompt();

let title = JSON.parse(fs.readFileSync("./game_data/text.json", "utf-8"));
console.log(title);

console.log("Welcome to our game!");
let userDifficulty = prompter("Please select your level of difficulty: easy, medium, hard. >>>> ").toLowerCase();
console.log("Difficulty selected:", userDifficulty);

let game = new Game(userDifficulty);
console.log(game);

game.startGame();

while(!game.endGame) {
    game.playRound();
}