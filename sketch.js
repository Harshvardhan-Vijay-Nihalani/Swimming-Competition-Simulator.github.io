var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var swimmer1, swimmer2, swimmer3;
var swim1Image, swim2Image, swim3Image;
var swimmers = [];

var laneLine1, laneLine2, laneLine3, laneLine4;


function preload() {
  swim1Image = loadImage("images/swimmer1.png");
  swim2Image = loadImage("images/redCap.png");
  swim3Image = loadImage("images/whiteCap.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  database = firebase.database();
  game = new Game();
  
  game.getState();
  game.start();
}


function draw(){
  background("cyan");
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
    if (gameState === 2) {
      //game.end();
      game.update(gameState);
      fill("black");
      textSize(35);
      text("Game Over!", displayWidth/2, player.y+100);
      text("Rank: "+ player.rank,displayWidth/2, player.y);
    }
  drawSprites();
}
