import prompt from "prompt-sync";
let prompter = prompt();


//intialises player position and score and gets name fom user 
export class CreatePlayer{
    constructor(){
        this.name = this.getPlayerName();
        this.PlayerMovements = new PlayerMovements();
        this.PlayerScore = new PlayerScore();
    }

    getPlayerName(){
        let PlayerName = prompter("name?");
        console.log(`Welcome ${PlayerName}!`)
        return(PlayerName);
    }

}

//stores position of user in map, initalises at 0
export class PlayerMovements{
    constructor(){
        this.position = 0;

    }
}

//Roll dice method here? 
//move forwards and move backwards methods 

//stores and updated number of obejcts/score
export class PlayerScore{
    constructor(){
        this.score = 0;
    }

    AddObject(){
        this.score += 1;
        return;
    }

    TakeObject(){
        this.score -= 1;
        return;
    }
}

//let Newplayer = new CreatePlayer();
//console.log(Newplayer);
//Newplayer.PlayerScore.AddObject();
//console.log(Newplayer);

