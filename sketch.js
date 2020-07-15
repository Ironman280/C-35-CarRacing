var Canvas, database;
var bgimg;
var gameState = 0;
var playerCount;
var form, player, game;

function setup(){
  database = firebase.database();
  Canvas = createCanvas(400,400);
game = new Game();
game.getState();
game.start();
}

function draw(){
  
}