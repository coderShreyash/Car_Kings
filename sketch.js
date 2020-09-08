var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1,car2,car3,car4,cars;

function preload(){
  bg = loadImage("Js/startbg.png")
  bgame = loadImage("Js/background.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth-340,displayHeight-300);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth)
  console.log(displayHeight)
}


function draw(){
  background(bg);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    background(bgame);
    game.play();
  }
 
}
