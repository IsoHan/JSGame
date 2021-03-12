import inquirer from "inquirer";


export class NPC {
    constructor(lenOfArr) {
        this.position = Math.floor(Math.random()*lenOfArr)+1;
        this.RPSChoice = Math.floor(Math.random()*3);
        this.name = NPC.Generatename();
    }

    static Generatename(){
        let Firstname = ["Gold","High","Old","Wild","Lonely"]
        let Lastname = ["Witch","Sage","Joker","Troll"]
        let FNnum = Math.floor(Math.random() * 5);
        let LNnum = Math.floor(Math.random() * 4);
        return(Firstname[FNnum]+' ' +Lastname[LNnum]);
    }

     RPSGen(computerMove) {
        inquirer.prompt({
            type: "list",
            message: "Rock, paper or scissors?",
            name: "playerMove",
            choices: ["Rock", "Paper", "Scissors"]
        })
        .then((playerMove) => {
            let moveDictionary = {
                "Rock": 2,
                "Scissors": 1,
                "Paper": 0
            }

            let playerMoveNumber = moveDictionary[playerMove["playerMove"]]
            console.log(">>>> Playermovenumber:", playerMoveNumber);

            let result;
        
            if ((computerMove + 1) % 3 == playerMoveNumber){
                result = +1;
            }else if(computerMove == playerMoveNumber){
                result = 0;
            }else{
                result = -1;
            }
            console.log(result);
            return result;
        })


    }
} // Class-End bracket