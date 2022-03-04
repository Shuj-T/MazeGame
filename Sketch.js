//2*(50)+1
var size = 9;
var screenSize = 24;

var debug = true;
const WALL = "w";
const FLOOR = " ";
const GOAL = "g";
const PLAYER = "p";
const COIN = "c";
const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";
let game;
let firstRun = true;

let winText = document.querySelector('#winner');

function setup() {
  createCanvas(screenSize * size, screenSize * size);
  document.getElementById("move").innerHTML = "Moves: " + 0;
  document.getElementById("coins").innerHTML = "Coins: " + 0;
  document.getElementById("time").innerHTML = "Time: " + 0;
  game = new Game();
  if (firstRun) {
    easy.click();
    firstRun = false;
  }
}

document.addEventListener("keydown", (e) => {
  if (!game.transitioning) {
    switch (e.code) {
      case "KeyW":
      case "ArrowUp":
        game.player.move(UP);
        break;
      case "KeyS":
      case "ArrowDown":
        game.player.move(DOWN);
        break;
      case "KeyA":
      case "ArrowLeft":
        game.player.move(LEFT);
        break;
      case "KeyD":
      case "ArrowRight":
        game.player.move(RIGHT);
        break;
    }
  }

  //main game win transition
  if (game.won) {
    winText.classList.remove("hidden");
    winText.classList.add("animating");
    game.won = false;
    game.transitioning = true;
    setTimeout(win, 1500);
  }
});

function win() {
    winText.classList.add("hidden");
    winText.classList.remove("animating");
    game.end();
    setup();
}

function draw() {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      var x = i * screenSize;
      var y = j * screenSize;
      if (game.gamegrid.getObject(i, j) == WALL) {
        fill(0);
        rect(x, y, screenSize, screenSize);
      } else if (game.gamegrid.grid[j][i] == FLOOR) {
        fill(255);
        rect(x, y, screenSize, screenSize);
      } else if (game.gamegrid.grid[j][i] == GOAL) {
        fill(255, 255, 0);
        rect(x, y, screenSize, screenSize);
      } else if (game.gamegrid.grid[j][i] == PLAYER) {
        fill(255, 100, 0);
        rect(x, y, screenSize, screenSize);
      } else if (game.gamegrid.grid[j][i] == COIN) {
        fill(34, 139, 34);
        rect(x, y, screenSize, screenSize);
      }
    }
  }
}

var body = document.getElementsByTagName("body")[0];

//EASY
var easy = document.createElement("button");
easy.innerHTML = "Easy";
body.appendChild(easy);
easy.addEventListener("click", function () {
  size = 9;
  screenSize = 48;
  adjustBoardPosition(0, "100px", 1);
  game.end();
  setup();
});

//MEDIUM
var medium = document.createElement("button");
medium.innerHTML = "Medium";
body.appendChild(medium);
medium.addEventListener("click", function () {
  size = 19;
  screenSize = 36;
  adjustBoardPosition(0, "35px", 1);
  game.end();
  setup();
});

//HARD
var hard = document.createElement("button");
hard.innerHTML = "Hard";
body.appendChild(hard);
hard.addEventListener("click", function () {
  size = 29;
  screenSize = 24;
  adjustBoardPosition(0, "50px", 1);
  game.end();
  setup();
});

//EXTREME
var extreme = document.createElement("button");
extreme.innerHTML = "Extreme";
body.appendChild(extreme);
extreme.addEventListener("click", function () {
  size = 59;
  adjustBoardPosition(0, "-330px", 0.51);
  game.end();
  setup();
});

function adjustBoardPosition(xTrans = 0, yTrans = 0, scale = 1) {
  document.querySelector("#defaultCanvas0").style.transform = `translate(${xTrans}, ${yTrans}) scale(${scale}, ${scale})`;
}