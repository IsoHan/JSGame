import prompt from "prompt-sync";
let prompter = prompt();

export class Player {
    constructor() {
        this.playerName = prompter("What is your name?");
        this.items = 0;
        this.position = 0;
    };
}