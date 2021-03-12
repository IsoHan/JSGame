import prompt from "prompt-sync";
import fs from "fs";
import inquirer from "inquirer";
import { Game } from "./classes/game.js"
let prompter = prompt();

// Welcome Title
let title = JSON.parse(fs.readFileSync("./game_data/text.json", "utf-8"));
console.log(title);
console.log("Welcome to our game!");

// New Difficulty Selection - using Inquirer
let userDifficulty = await inquirer.prompt({
    type: "list",
    message: "Please select your level of difficulty: easy, medium, hard.",
    name: "response",
    choices: ["easy", "medium", "hard"]
})
.then((response) => {
    return response["response"]
})

// Difficulty Selection
// let userDifficulty = prompter("Please select your level of difficulty: easy, medium, hard. >>>> ").toLowerCase();
// console.log("Difficulty selected:", userDifficulty);

let game = new Game(userDifficulty);
console.log(game);

game.startGame();

while(!game.endGame) {
    game.playRound();
}