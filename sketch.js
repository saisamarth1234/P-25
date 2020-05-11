var raindrop

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  raindrop();
  drawSprites();

}
function raindrop(){
    raindrop = new raindrop(rand(1,800), rand(1,400), 1, 10)
    raindrop.velocityY = 10
}