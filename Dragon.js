export class Dragon{
    constructor(){
        this.name = "Dragon",

    }

    DragonGuessGame(PlayerGuess,numObjects){
        console.log("You must now defeat the Dragon.Guess which number betwen")
            //numObjects is passed to determine odds given
            var DragonMove = Math.floor((Math.random() * (6-numObjects))+1)
            
            if (DragonMove ==PlayerGuess){
              
              console.log("Success!You have cdefeated the Dragon and completed the game")
            }else{
              //reset game()
              console.log("You Lose! You must return to the start of the game.")
            }

        }
            
    

    

}