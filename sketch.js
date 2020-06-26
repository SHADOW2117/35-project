var database;
var gameState = 0,voterCount = 0;
var form,voter,game;
var arr=[];

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(600,600);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
 
  
}


