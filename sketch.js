var ground;
var trex ,trex_running;
var invisibleGround
var cloud
var cloudimage

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
}

function setup(){
  createCanvas(1500,200)
  var rand=Math.round(random(1,100))
  console.log(rand)
  //create a trex sprite
  trex=createSprite(150,170,20,0);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

 ground=createSprite(200,180,1500,20);
 ground.addImage("ground",ground1);
 ground.x=ground.width/2
 
  invisibleGround=createSprite(200,195,2000,20)
  invisibleGround.visible=false


}

function draw(){
  background("white")
  
ground.velocityX=-10
if(ground.x<555){
  ground.x=ground.width/2
}


if(keyDown("SPACE") && trex.y>=160){
  trex.velocityY=-10;
}
trex.velocityY+=0.5;
trex.collide(invisibleGround);

spawnClouds()
drawSprites();
}
function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(1500,60,10,10)
    cloud.y=Math.round(random(1,100))
    cloud.velocityX=-3
    cloud.addImage("cloudimage",cloudimage)
    cloud.scale=0.6

    trex.depth=cloud.depth+1
    console.log("trex-",trex.depth)
    console.log("cloud-",cloud.depth)
  }
  
}