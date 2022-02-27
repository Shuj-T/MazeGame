class Gamegrid {
  constructor() {
    this.x = 0 * screenSize;
    this.y = 0 * screenSize;
    this.grid = [];
    this.visitGrid = this.createVisitGrid();
    this.createGameGrid();
    this.generateMaze();
  }

  show() {
    fill(255, 100, 0);
    rect(this.x, this.y, 30, 30);
  }

  createGameGrid() {
    for (var i = 0; i < size; i++) {
      this.grid[i] = [];
      for (var j = 0; j < size; j++) {
        this.grid[i][j] = WALL;
      }
    }
  }

  generateMaze() {
    console.log("Generate Maze");
    var count = 0;
    var cell;
    var stack = [];
    var ncoords = [];
    var initalCell;
    //1.Choose the initial cell, mark it as visited and push it to the stack
    initalCell = { x: size - 2, y: this.getRndInteger(1, size - 2) };

    this.markVisited(initalCell.x, initalCell.y);
    stack.push(initalCell);
    //2.While the stack is not empty
    while (stack.length != 0) {
      //1.Pop a cell from the stack and make it a current cell
      cell = stack.pop();
      //2.If the current cell has any neighbours which have not been visited
      ncoords = this.checkNeighbours(cell.x, cell.y);
      if (ncoords.x != -1) {
        count++;
        //1.Push the current cell to the stack
        stack.push(cell);
        //2.Choose one of the unvisited neighbours
        //3.Remove the wall between the current cell and the chosen cell
        this.removeObject(cell.x, cell.y);
        this.removeObject(ncoords.x, ncoords.y);
        this.removeWallBetween(cell.x, cell.y, ncoords.x, ncoords.y);
        //4.Mark the chosen cell as visited and push it to the stack
        this.markVisited(ncoords.x, ncoords.y);
        stack.push(ncoords);
      }
      if (this.getRndInteger(1, 50) == 5) {
        this.addObject(cell.x, cell.y, COIN);
      }
    }
    this.addObject(cell.x, cell.y, GOAL);
  }

  createVisitGrid() {
    var vgrid = [];
    for (var i = 0; i < size; i++) {
      vgrid[i] = [];
      for (var j = 0; j < size; j++) {
        vgrid[i][j] = 0;
      }
    }
    return vgrid;
  }

  markVisited(x, y) {
    this.visitGrid[y][x] = 1;
  }

  checkNeighbours(x, y) {
    var aval = this.checkAvalibleNeighbours(x, y);
    if (aval.length == 0) {
      return {
        x: -1,
        y: -1,
      };
    }
    var rint = this.getRndInteger(0, aval.length - 1);
    return {
      x: aval[rint].x,
      y: aval[rint].y,
    };
  }

  checkAvalibleNeighbours(x, y) {
    var aval = [];

    if (this.checkUnVisited(x + 2, y)) {
      aval.push({
        x: x + 2,
        y: y,
      });
    }

    if (this.checkUnVisited(x, y + 2)) {
      aval.push({
        x: x,
        y: y + 2,
      });
    }

    if (this.checkUnVisited(x - 2, y)) {
      aval.push({
        x: x - 2,
        y: y,
      });
    }

    if (this.checkUnVisited(x, y - 2)) {
      aval.push({
        x: x,
        y: y - 2,
      });
    }
    return aval;
  }

  checkUnVisited(x, y) {
    if (x < 0 || x > size - 1 || y < 0 || y > size - 1) {
      return null;
    } else if (this.visitGrid[y][x] == 0) {
      return true;
    } else {
      return false;
    }
  }

  getObject(x, y) {
    return this.grid[y][x];
  }

  addObject(x, y, obj) {
    this.grid[y][x] = obj;
  }

  removeObject(x, y) {
    this.grid[y][x] = FLOOR;
  }
  removeWallBetween(x, y, xx, yy) {
    this.removeObject((x + xx) / 2, (y + yy) / 2);
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
