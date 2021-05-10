var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage,cloudgroup;
var obs1;
var obs2;
var obs3;
var obs4;




function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png");
  obs1=loadImage("ob1.png");
  obs2=loadImage("ob2.png");
  obs3=loadImage("ob3.png");
  obs4=loadImage("ob4.png");

 


}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudgroup=new Group();
  
}

function draw() {
  background(140);
   
  spawnClouds ();
  spawnObstacles();
  
  if(keyDown("space")) {
    trex.velocityY = -8;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage("cloud",cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
switch (rand){
    
  case 1: obstacle.addImage(obs1);
    break;
    
     case 2: obstacle.addImage(obs2);
    break; 
    
    case 3: obstacle.addImage(obs3);
    break; 
    
    case 4: obstacle.addImage(obs4);
    break; 
    
  
    default : break;
}
  
  
  
    
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 110;
  }
}