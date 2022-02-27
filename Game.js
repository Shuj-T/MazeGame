class Game {
  constructor() {
    this.time = 0;
    this.moveCount = 0;
    this.coinCount = 0;
    this.won = false;

    this.player = new Player();
    this.gamegrid = new Gamegrid();
    this.timer = new Timer();
  }

  end() {
    this.timer.clearTimer();
  }

  updateScore(newX, newY) {
    var x = this.player.x / screenSize;
    var y = this.player.y / screenSize;
    if (this.gamegrid.getObject(newX, newY) == COIN) {
      game.incrcoinCount();
      //console.log("COIN" + this.coinCount)
      this.gamegrid.removeObject(newX, newY);

      return false;
    } else if (this.gamegrid.getObject(newX, newY) == GOAL) {
      //console.log("END GAME" + this.moveCount)
      this.won = true;
    } else if (this.gamegrid.getObject(newX, newY) == FLOOR) {
      //console.log("FLOOR")
      return false;
    }
  }

  incrMoveCount() {
    this.moveCount++;
    document.getElementById("move").innerHTML = "Moves: " + this.moveCount;
  }

  incrcoinCount() {
    this.coinCount++;
    document.getElementById("coins").innerHTML = "Coins: " + this.coinCount;
  }
}
