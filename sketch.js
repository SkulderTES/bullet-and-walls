var bullet,wall,speed,weight,thickness;

 
function setup() {
  createCanvas(1600,400);
speed = random(55,90);
weight = random (400,1500);
thickness = random (22,83);
bullet = createSprite(50,200,50,5);
wall = createSprite (1200,200,thickness,height/2);
wall.shapeColor = color(230,230,230);
bullet.velocityX = speed;
bullet.shapeColor = "white";
}

function draw() {
  background(0);  
  if (hasCollided (bullet,wall)){
bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
if (deformation > 10){
  bullet.shapeColor = color(255,0,0);
}

if (deformation < 10){
  bullet.shapeColor = color(0,255,0);
  }

}
  drawSprites();
}
function hasCollided(lbullet, lwall) {
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
       return true 
      }
       return false;
       }