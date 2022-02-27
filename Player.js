class Player {
  constructor() {
    this.x = 1 * screenSize;
    this.y = 1 * screenSize;
    this.test = false;
    if (this.test == true) {
    }
  }

  show() {
    fill(255, 100, 0);
    rect(this.x, this.y, screenSize, screenSize);
  }

  canMoveTo(x, y) {
    // coords = translate(x,y);
    x = x / screenSize;
    y = y / screenSize;
    if (this.test == true) {
      console.log(x, y);
    }
    if (x < 0 || x > size - 1) {
      if (this.test == true) {
        console.log("WRONG X");
      }

      return false;
    } else if (y < 0 || y > size - 1) {
      if (this.test == true) {
        console.log("WRONG Y");
      }

      return false;
    } else if (game.gamegrid.getObject(x, y) == WALL) {
      return false;
    } else {
      return true;
    }
  }

  move(dir) {
    if (this.test == true) {
      console.log(dir);
    }

    var cord;
    if (dir == UP) {
      // this.y = this.y - 1*screenSize
      cord = this.trans(0, -1);
    } else if (dir == DOWN) {
      //this.y = this.y + 1*screenSize
      cord = this.trans(0, 1);
    } else if (dir == LEFT) {
      //this.x = this.x - 1*screenSize
      cord = this.trans(-1, 0);
    } else if (dir == RIGHT) {
      //this.x = this.x + 1*screenSize
      cord = this.trans(1, 0);
    }
    if (this.test == true) {
      console.log(this.canMoveTo(cord.x, cord.y));
    }
    if (this.canMoveTo(cord.x, cord.y)) {
      this.x = cord.x;
      this.y = cord.y;
      game.incrMoveCount();
    }
  }

  trans(x, y) {
    x = this.x + x * screenSize;
    y = this.y + y * screenSize;
    return {
      x: x,
      y: y,
    };
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
