var PLAY = 1;
var END = 0;
var gameState = PLAY;



var boy, path, pathImg, boyImg,backgroundImg, background1
var obstacleGroup, obstacle1, obstacle2
var crate2, crate3
var cloudsGroup, cloudImage;
var score=0;

var jumpSound

var boy1, boy2, boy3, boy4, boy5, boy6, boy7, boy8, boy9, boy10, boy11

var boy, boy_running

function preload(){
  
    pathImg=loadImage("ground.png") 

boy_running= loadAnimation("runner1.png","runner2.png","runner3.png","runner4.png","runner5.png","runner6.png","runner7.png","runner8.png","runner9.png","runner10.png","runner11.png")

backgroundImg= loadImage("background.jpg")

obstacle1= loadImage("ob2.jpg")

obstacle2= loadImage("ob3.jpg")

cloudImage = loadImage("cloud.png")

jumpSound = loadSound("jump.wav")


}

function setup() {
    createCanvas(windowWidth, windowHeight)     
  path=createSprite(width/2,height-100, windowWidth, 5)
    path.addImage(pathImg);
   
   
    
background1=createSprite(width/2,height/2.7 )

background1.addImage(backgroundImg)

background1.scale=1.2
   
     boy=createSprite(210,-250,20,50)
   boy.scale= 0.2
   boy.addAnimation("boy_running",boy_running)

    

path.velocityX=-5

obstacleGroup = new Group();
cloudsGroup = new Group();

score = 0;

}

function draw() {
  
    background(0);
    if (path.x < 500){
        path.x = path.width/2;
        
       }
       if (gameState===PLAY){
        score = score + Math.round(getFrameRate()/60);
        path.velocityX = -(6 + 3*score/100);
        
        if((touches.length > 0 || keyDown("SPACE")) && boy.y  >= height-280) {
          jumpSound.play( )
         boy.velocityY = -15;
           touches = [];
        }
        
        boy.velocityY = boy.velocityY + 0.8
        boy.collide(path);
    }
 drawSprites();
}