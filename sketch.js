var PLAY=1;
var END=0;
var gameState=1;
var score;
var fruit;
var fruit1, fruit2, fruit3, fruit4;
var alien;
var alien_moving;
var gameOver;

function preload(){

alien_moving=loadAnimation("alien1.png", "alien2.png") ;
  
  swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameOverImage=loadImage("gameover.png");

  
 
}

function setup(){
  createCanvas(600,400);
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
score=0;
  
  fruitGroup= createGroup();
  enemyGroup=createGroup();
}

function draw(){
  background("#A4D3EE");
  
  if(gameState==PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;

  }
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
  }
  
  fruits();
  Enemy();
  
  text("score:"+score,500,50);
  
  if(enemyGroup.isTouching(sword)){

   fruitGroup.destroyEach();
    enemyGroup.destroyEach();

    
    gameState=END;
    

    
  }
  
 else if(gameState===END){


    

    gameOver=createSprite(300,200);
           gameOver.addImage(gameOverImage);
    gameOver.scale=1;
   
           fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
   
   fruitGroup.setLifetimeEach(0);
   enemyGroup.setLifetimeEach(0);
    

    
    
    sword.x=150;
    sword.y=200;
  }
  
  drawSprites();

}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(500,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    } else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else{
      fruit.addImage(fruit4);
    }
 
 fruit.y=Math.round(random(300,200));
  fruit.velocityX=-7;
  fruit.setLifetime=100;
  
  fruitGroup.add(fruit);
}  
}

function Enemy(){
  
if(World.frameCount%200===0){
  alien=createSprite(300,200,20,20)
alien.addAnimation("moving", alien_moving);
alien.y=Math.round(random(100,300));
alien.velocityX=-8
alien.setLifetime=50;
  
  enemyGroup.add(alien);
  
}
}


