import * as NPC from "./NPC.js";

export class CreateMap{
    constructor(Difficulty){
        this.Difficulty = Difficulty;
        this.DifficultyParams = this.DifficultyTranslator();
        this.MapArray = this.MapArrayCreate();

    }

    DifficultyTranslator(){
        
        let difficultyDict = {
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
        return(difficultyDict[this.Difficulty]);
        
    }

   MapArrayCreate(){
        let InitArray = new Array(this.DifficultyParams.lenOfArr).fill(0);
        console.log("This is te route you must journey=>")
        console.log(InitArray)
        return(InitArray);

   }

}


//add in NPCs 


