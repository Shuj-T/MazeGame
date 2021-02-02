//2*(50)+1
var size = 9
var screenSize = 13

var debug = true
const WALL = 'w';
const FLOOR = ' ';
const GOAL = 'g';
const PLAYER = 'p';
const COIN = 'c';
const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";
let game;
function setup() {
  createCanvas(screenSize*size, screenSize*size);
  document.getElementById("move").innerHTML = "Moves: "+ 0;
  document.getElementById("coins").innerHTML = "Coins: "+ 0;
  document.getElementById("time").innerHTML = "Time: "+ 0;
  game = new Game();
  // createGameGrid(size)
}
function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    game.player.move(UP);
  }if (keyIsDown(DOWN_ARROW)){
    game.player.move(DOWN);
  }else if (keyIsDown(LEFT_ARROW)){
    game.player.move(LEFT);
  }else if (keyIsDown(RIGHT_ARROW)){
    game.player.move(RIGHT);
  }
  if (game.updateScore()){
    game.end();
    setup();
  }
  draw();
}

function draw() {
  background(220);
  for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
      var x = i * screenSize;
      var y = j *screenSize;
      if (game.gamegrid.getObject(i,j)== WALL){
        fill(0);
        rect(x,y,screenSize,screenSize);
      }else if(game.gamegrid.grid[j][i] == FLOOR) {
        fill(255);
        rect(x,y,screenSize,screenSize);
      }else if(game.gamegrid.grid[j][i] == GOAL){
        fill(255,255,0);
        rect(x,y,screenSize,screenSize);
      }else if(game.gamegrid.grid[j][i] == PLAYER){
        
      }else if(game.gamegrid.grid[j][i] == COIN){
        fill(34,139,34);
        rect(x,y,screenSize,screenSize);
      }
    }
  game.player.show();
  }
  
  
}

var easy = document.createElement("button");
easy.innerHTML = "easy";

var body = document.getElementsByTagName("body")[0];
body.appendChild(easy);

easy.addEventListener ("click", function() {
  size = 9;
  game.end();
  setup();
});

var medium = document.createElement("button");
medium.innerHTML = "Medium";

var body = document.getElementsByTagName("body")[0];
body.appendChild(medium);

medium.addEventListener ("click", function() {
  size = 19;
  game.end();
  setup();
});

var hard = document.createElement("button");
hard.innerHTML = "Hard";

var body = document.getElementsByTagName("body")[0];
body.appendChild(hard);

hard.addEventListener ("click", function() {
  size = 29;
  game.end();
  setup();
});
var extreme = document.createElement("button");
extreme.innerHTML = "extreme";

var body = document.getElementsByTagName("body")[0];
body.appendChild(extreme);

extreme.addEventListener ("click", function() {
  size = 59;
  game.end();
  setup();
});