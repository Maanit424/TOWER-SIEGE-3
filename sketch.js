const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;
var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var polygon1;
var backgroundImg;
var bg = "Sprites/bg.jpg";

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("Sprites/bg.jpg");
}
function setup() {

  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(530, 140, 120, 10);
  ground2 = new Ground(350, 270, 280, 10);
  ground3 = new Ground(2, 380, 2000, 10);

  BlockBlue1 = new Box(300, 202, 20, 20);
  BlockBlue2 = new Box(320, 202, 20, 20);
  BlockBlue3 = new Box(340, 202, 20, 20);
  BlockBlue4 = new Box(360, 202, 20, 20);
  BlockBlue5 = new Box(310, 180, 20, 20);
  BlockBlue6 = new Box(330, 180, 20, 20);
  BlockBlue7 = new Box(350, 180, 20, 20);

  BlockBlue8  = new Box(320, 158, 20, 20);
  BlockBlue9  = new Box(340, 158, 20, 20);
  BlockBlue10 = new Box(330, 128, 20, 20);


  BlockPink1 = new BoxPink(500, 15, 20, 20);
  BlockPink2 = new BoxPink(520, 15, 20, 20);
  BlockPink3 = new BoxPink(540, 15, 20, 20);
  BlockPink4 = new BoxPink(500, -100, 20, 20);
  BlockPink5 = new BoxPink(540, -100, 20, 20);
  BlockPink6 = new BoxPink(520, -200, 20, 20);
 


  

  polygon_1 = new poly(110, 100, 20, 20);
  sling = new SlingShot(polygon_1.body, { x: 80, y: 105 });



}


function draw() {

  if(backgroundImg) {
    background(backgroundImg);
}

  background(56, 44, 44);
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();
  BlockBlue8.display ();
  BlockBlue9.display ();
  BlockBlue10.display();


  
  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  BlockPink6.display ();

 


  polygon_1.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if (keyCode === 32){
    sling.attach(polygon_1.body)
  }
}


async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "Sprites/bg.jpg"
  } else {
      bg = "Sprites/bg1.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}