var cat, catImg, catImg1, catImg2;
var mouse, mouseImg, mouseImg1, mouseImg2;
var garden, gardenImg;

function preload() {
 catImg = loadImage("cat1.png");
 catImg1 = loadAnimation("cat2.png","cat3.png");
 catImg2 = loadImage("cat4.png");
 mouseImg = loadImage("mouse1.png");
 mouseImg1 = loadAnimation("mouse2.png","mouse3.png");
 mouseImg2 = loadImage("mouse4.png");
 gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(400,400);
   garden = createSprite(200,200);
   garden.addImage(gardenImg);
   garden.scale = 3;

  cat = createSrite(350,50,20,20);
  cat.addImage("cat1",catImg);
  cat.scale = 0.5;

  mouse = createSprite(50,50,20,20);
  mouse.addImage("mouse1",mouseImg);
  mouse.scale = 0.5;

}

function draw() {

    background(255);
    keyPressed();
    
    console.log(end);
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg1);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("teasing",mouseImg1);
    mouse.changeAnimation("teasing");
}
function end(){
if(cat.x - mouse.x <(cat.width-mouse.width)/2){
    cat.addImage("catStop",catImg2);
    cat.changeAnimation("catStop");

    mouse.addAnimation("mouseStop",mouseImg2)
    mouse.changeAnaimation("mouseStop");
}
}


}
