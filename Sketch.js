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
function setup() {
  createCanvas(screenSize * size, screenSize * size);
  document.getElementById("move").innerHTML = "Moves: " + 0;
  document.getElementById("coins").innerHTML = "Coins: " + 0;
  document.getElementById("time").innerHTML = "Time: " + 0;
  game = new Game();
}

document.addEventListener("keydown", (e) => {
  console.log(e.code);
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

  if (game.won) {
    game.end();
    setup();
  }
});

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

var easy = document.createElement("button");
easy.innerHTML = "Easy";

var body = document.getElementsByTagName("body")[0];
body.appendChild(easy);

easy.addEventListener("click", function () {
  size = 9;
  scaleUp();
  screenSize = 24;
  game.end();
  setup();
});

var medium = document.createElement("button");
medium.innerHTML = "Medium";

var body = document.getElementsByTagName("body")[0];
body.appendChild(medium);

medium.addEventListener("click", function () {
  size = 19;
  scaleUp();
  screenSize = 24;
  game.end();
  setup();
});

var hard = document.createElement("button");
hard.innerHTML = "Hard";

var body = document.getElementsByTagName("body")[0];
body.appendChild(hard);

hard.addEventListener("click", function () {
  size = 29;
  scaleUp();
  game.end();
  setup();
});

var extreme = document.createElement("button");
extreme.innerHTML = "Extreme";

var body = document.getElementsByTagName("body")[0];
body.appendChild(extreme);

extreme.addEventListener("click", function () {
  size = 59;
  scaleDown();
  game.end();
  setup();
});

function scaleDown() {
  document.querySelector("#defaultCanvas0").classList.add("scaled");
}

function scaleUp() {
  document.querySelector("#defaultCanvas0").classList.remove("scaled");
}