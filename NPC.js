export class GenNPC{
    constructor(lenOfArr) {
        this.position = Math.floor(Math.random()*lenOfArr)+1;
        this.RPSChoice = Math.floor(Math.random()*3);
        this.name = this.Generatename();
    }

    static Generatename(){
        let Firstname = ["Gold","High","Old","Wild","Lonely"]
        let Lastname = ["Witch","Sage","Joker","Troll"]
        let FNnum = Math.floor(Math.random() * 5);
        let LNnum = Math.floor(Math.random() * 4);
        return(Firstname[FNnum]+' ' +Lastname[LNnum]);
  
      }


}


export class NPCInteraction{
    constuction(){
        this.intro = this.introduction();

    }

    introduction(){
        console.log("Greetings! I am [name] you must beat me at Boulder, scroll scissors")
    }

    GiveObj(){
        Newplayer.PlayerScore.AddObject();
    }

    playGame(){
        
    }




}