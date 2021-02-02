class Game{
  constructor(){
    this.time = 0;
    this.moveCount = 0;
    this.cointCount = 0;
    
    this.player = new Player();
    this.gamegrid = new Gamegrid();
    this.timer = new Timer();
    
    this.player.show();
  }
  end(){
    this.timer.clearTimer()
  }
  updateScore(){
    var x = this.player.x/screenSize
    var y = this.player.y/screenSize
    if (this.gamegrid.getObject(x,y) == COIN){
        game.incrCointCount();
        //console.log("COIN" + this.cointCount)
        this.gamegrid.removeObject(x,y)
        
        return false;
    }else if (this.gamegrid.getObject(x,y) == GOAL){
      //console.log("END GAME" + this.moveCount)
      
      return true;
    }else if (this.gamegrid.getObject(x,y) == FLOOR){
      //console.log("FLOOR")
      return false;
    }
  }
  incrMoveCount(){
    this.moveCount++;
    document.getElementById("move").innerHTML = "Moves: "+ this.moveCount;
  }
  incrCointCount(){
    this.cointCount++;
    document.getElementById("coins").innerHTML = "Coins: "+ this.cointCount;
  } 
}
