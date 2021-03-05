export class NPC{
    constructor(){
        this.name = NPC.Generatename();
        
        //this.item = item.Generateitem();

    }
    
    static Generatename(){
      let Firstname = ["Gold","High","Old","Wild","Lonely"]
      let Lastname = ["Witch","Sage","Joker","Troll"]
      let FNnum = Math.floor(Math.random() * 5);
      let LNnum = Math.floor(Math.random() * 4);
      return(Firstname[FNnum]+' ' +Lastname[LNnum]);

    }
    /*
    ItemGenerator(){}
    */
    NPCIntro(){
       
      return(`I am the ${this.name}. You must beat me to pass.`);
    
    }

    RPSGen(PlayerMove){
    //e.g.{rock:2,scissors:1, paper:0}
    //make it run 3 times 
    
    var ComputerMove = Math.floor(Math.random() * 3);
    let result;
    if ((ComputerMove + 1) % 3 == PlayerMove){
        result = "Win!";
    }else if(ComputerMove == PlayerMove){
        result = "Draw ";
    }else{
        result = "loss";
    }
    console.log(result);
}
}