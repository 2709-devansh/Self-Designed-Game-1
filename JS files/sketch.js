var fighterPlane, fighterPlaneIMG;
var enemy1;
var bgImg, BackGround;

function preload(){
  fighterPlaneIMG = loadImage("Images/Fighter Planes/Fighter.png");
  bgImg = loadImage("Images/bg.jpg");
}

function setup() {
  createCanvas(1350,670);

  BackGround = createSprite(675,335,20,20);
  BackGround.addImage(bgImg);
  BackGround.x =  BackGround.width/2;
  BackGround.velocityX = -10;
  BackGround.scale = 5;

  fighterPlane = createSprite(100, 60, 50, 50);
  fighterPlane.shapeColor = "#267c21";
  fighterPlane.addImage(fighterPlaneIMG);
  fighterPlane.scale = 0.5;

}

function draw() {
  background("white"); 

  if(BackGround.x < 0){
    BackGround.x = BackGround.width;
  }

  if(keyDown("DOWN_ARROW")){
    fighterPlane.y = fighterPlane.y + 15;
  }
  if(keyDown("UP_ARROW")){
    fighterPlane.y = fighterPlane.y - 10;
  }

  spawnEnemies();

  drawSprites();
}