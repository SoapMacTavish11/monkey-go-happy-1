var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;

var score=0;
function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  banana= createSprite(100,200,10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-5;
  banana.scale=0.1; 
  
  ground= createSprite(400,350,900,10); 
  ground.velocityX=-4;
  console.log(ground.x);
  
  survivalTime=0;
  score=0;
  obstacleGroup= new Group();
  FoodGroup=new Group();
}


function draw() {
  background("skyblue");
  drawSprites();
  
  text("Score: "+score,500,50);
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize(20);  
  fill("black");
  
  
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time:"+ survivalTime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-8;
    }
  monkey.velocityY=monkey.velocityY+0.5;
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach(); 
    score=score+1
} 
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0;
    obstacleGroup.velocityX=0;
    FoodGroup.velocityX=0;
} 
  
 
  
  spawnObstacle();
  spawnBanana();
}
function spawnBanana(){
   if(frameCount%80===0){
  banana=createSprite(250,250);
  banana.x=(random(100,150))
  banana.y = (random(250,290))
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
  banana.lifetime=100;
   }
}

function spawnObstacle(){
   if(frameCount%90===0){
  obstacle=createSprite(300,330);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-3;
  obstacle.lifetime=100;
  obstacleGroup.add(obstacle);
   }
}
