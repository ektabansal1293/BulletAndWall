var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(400,1500)
  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
  bullet.debug = true;
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=color(230,230,230);
  wall.debug = true;
  
  
}

function draw() {
  
  background(0); 
  
  if(hasCollided(bullet, wall));
  { 
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    if(damage>10) {
      wall.shapeColor =color(255,0,0);
    }
    
    if(damage<10) {
      wall.shapeColor =color(0,255,0);
    }
  
  }
  
 drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width/2;
  wallLeftEdge=lwall.x-lwall.width/2;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
return false;
}
