var rocket
var bg1
var bg2
var bg3
var rocketImg
var bgImg

function preload(){
rocketImg = loadImage("Rocket png.png")
bgImg = loadImage("Background 1.png");
}
function setup(){
createCanvas(1200,600);
bg1 = createSprite(600,300,50,50)
bg1.scale = 1.2
bg1.addImage(bgImg)
rocket = createSprite(550,450,50,50)
rocket.scale = 0.5;
rocket.addImage(rocketImg)
}
function draw(){
background(0);
drawSprites();
}