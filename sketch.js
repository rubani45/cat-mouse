var movingRect;
var fixedRect;
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 50);
 fixedRect.shapeColor = "green";
 fixedRect.velocityX = 3;
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";
 movingRect.velocityX = -3;

 movingRect.debug = true;
 fixedRect.debug = true;
}

function draw() {
  background(0); 
  
 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

  /*if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){

    fixedRect.shapeColor = "red"; 
    movingRect.shapeColor = "red";

  } else{*/
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
      fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
        console.log("hello");
        movingRect.velocityX = movingRect.velocityX*(-1);
        fixedRect.velocityX = movingRect.velocityX*(-1);
      }
   /* fixedRect.shapeColor = "green"; 
    movingRect.shapeColor = "green";*/
  //}

  drawSprites();
}