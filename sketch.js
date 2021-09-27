const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var snowBg;
var child;
var snow = [];
var ground;
var snow,snowImg;


function preload(){

  snowBg = loadImage("snow1.jpg");
  lbImg = loadImage("RB.png");
  rbImg = loadImage("LB.png");
  snowImg = loadImage("snow.png")
}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world=engine.world

  child = createSprite(1000,500,50,100);
  ground = createSprite(0,575,3000,25);
  ground.visible=false;
  
  
 child.addImage(lbImg);
 child.scale = 0.8;
}

function draw() {
  background(snowBg);  
  Engine.update(engine)
child.collide(ground);


  if(keyDown(LEFT_ARROW)){
   child.x = child.x-20;
   child.addImage(lbImg);
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+20;
    child.addImage(rbImg);
  }

  if(keyDown(32)){
    child.velocityY =-6;
  }
child.velocityY = child.velocityY + 0.8
spawnSnow()
  
drawSprites()

  }
 
  function spawnSnow(){
    
    
    if(frameCount%60===0){
      snow = createSprite (random(20,780), 00, 40, 40);
      snow.addImage(snowImg);
      snow.scale=0.3;
      snow.velocityY = 4;
      snow.lifetime = 150
    }
    
  }