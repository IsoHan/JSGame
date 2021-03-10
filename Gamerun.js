import prompt from "prompt-sync";
import * as map from "./Map.js";
import * as pl from "./Player.js";
let prompter = prompt();

/*
function RunGame(){
    console.log("Welcome to the Rock Paper Dragon gamespace!");
    let userDifficulty = prompter("Difficulty?").toLowerCase();
    let NewMap = new CreateMap(userDifficulty);

    console.log(NewMap.MapArray)

}
*/
class GameStart{
    constructor(){
        this.difficulty = this.get_difficulty();
        this.Player = new pl.CreatePlayer();
        this.map = new map.CreateMap(this.difficulty);
        
    }

    get_difficulty(){
        console.log("Welcome to the Rock Paper Dragon gamespace!");
        let userDifficulty = prompter("Difficulty?").toLowerCase();
        return(userDifficulty);
    }
}


let Game = new GameStart();

//new game class that instantiates new maps in the constructor 
//maybe new game function takes in difficulty preferece and creates new game 