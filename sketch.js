var img,path;
var boyanim,boyImg;
var leftBoundary,rightBoundary;

function preload(){
  //pre-load images
img=loadImage("path.png");
boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(img);
  path.velocityY=4;
  path.scale=1.2;

  // creating boy running
  boyanim=createSprite(180,340,30,30);
  boyanim.addAnimation(boyImg);
  boyanim.scale=0.08;

  //creating left boundary
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;

  //creating right boundary
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;
}

function draw() {
  background(0);

  path.velocityY=4;

  //boy moving x axis with mouse
   boyanim.x=World.mouseX;

   edges=createEdgeSprites();
   boyanim.collide(edges[3]);
   boyanim.collide(leftBoundary);
   boyanim.collide(rightBoundary);

  //reset the background 
  if(path.y > 400){
    path.y=height/2;
    }
  
  drawSprites();

}
