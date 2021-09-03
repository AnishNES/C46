
var mario, luigi , wario, waluigi;
var marioImage, luigiImage , warioImage, waluigiImage, trackImage, track
var wall, tracker1, tracker2, tracker3, tracker4
function preload() {
  marioImage=loadAnimation("Mario.png");
  luigiImage=loadAnimation("Luigi.png");
  warioImage=loadAnimation("Wario.png");
  waluigiImage=loadAnimation("Waluigi.png");
  trackImage=loadAnimation("Running Track bg.jpeg");
}

function setup(){
 createCanvas(displayWidth-50,displayHeight-200);

 track=createSprite(500,300);
 track.addImage("track",trackImage,displayWidth-50,displayHeight-200);
 track.scale=5;

 
  mario=createSprite(10,100);
  mario.addImage("mario",marioImage);
  mario.scale=0.2;
  luigiImage=createSprite(10,220);
  luigi.addImage("luigi",luigiImage);
  luigi.scale=0.2;
  wario=createSprite(10,340);
  wario.addImage("wario",warioImage);
  wario.scale=0.2;
  waluigi=createSprite(10,460);
  waluigi.addImage("waluigi",waluigiImage);
  waluigi.scale=0.2;

}

function draw(){
 
  mario.velocityX=0
  mario.velocityY=0

  //camera.position.x=mario.x+400;
  //camera.position.y=mario.y+170;
  
 
  if(keyIsDown(RIGHT_ARROW)){
    mario.velocityX=  mario.velocityX + 5;
    
  }

  if(frameCount%200===0){
   wall=createSprite(2000,300,20,1000);
  }if (frameCount%15===0){
    luigi.velocityX=random(3,7);
    wario.velocityX=random(3,7);
    waluigi.velocityX=random(3,7);
    
  } 

if (wall){
  if(wall.isTouching(luigi)){
    luigi.velocityX=0;
  }if(wall.isTouching(wario)){
   wario.velocityX=0;
  }if(wall.isTouching(waluigi)){
    waluigi.velocityX=0;
  }if(wall.isTouching(mario)){
    mario.velocityX=0;
  }
}
 

 

  drawSprites();
}

