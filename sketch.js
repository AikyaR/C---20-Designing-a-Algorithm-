var fixedRect, movingRect;
function setup() {
  createCanvas(1200, 600);
  fixedRect = createSprite(500, 300, 50, 80);
  movingRect = createSprite(200, 200, 80, 30);
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(200, 20, 230);
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "cyan"; movingRect.shapeColor = "cyan";
  }
  else {
    fixedRect.shapeColor = "lavender";
    movingRect.shapeColor = "lavender";
  }
  drawSprites();
}