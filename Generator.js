export class NPC{
    constructor(name,location,item){
        this.name = name;
        this.location = location;
        this.item = item;

    }

 RPSGen(PlayerMove){
    //e.g.{rock:2,scissors:1, paper:0}
    var ComputerMove = Math.floor(Math.random() * 3);
    let result;
    if ((ComputerMove + 1) % 3 == PlayerMove){
        result = "Win!";
    }else if(ComputerMove == PlayerMove){
        result = "Draw ";
    }else{
        result = "loss";
    }
    return(result);
}
}

export function DragonGuess(PlayerGuess,numObjects){
    //numObjects is passed to determine odds given
    var DragonMove = Math.floor((Math.random() * (6-numObjects))+1)
    
    if (DragonMove ==PlayerGuess){
      return("success!")
    }else{
      return("Lose")
    }
    }


