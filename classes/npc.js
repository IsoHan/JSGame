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

    RPSGen(computerMove){
        //e.g.{rock:2,scissors:1, paper:0}
        var playerMove = Math.floor(Math.random() * 3);
        let result;
        
        if ((computerMove + 1) % 3 == playerMove){
            result = +1;
        }else if(computerMove == playerMove){
            result = 0;
        }else{
            result = -1;
        }
        console.log(result);
        return(result);
    }
}