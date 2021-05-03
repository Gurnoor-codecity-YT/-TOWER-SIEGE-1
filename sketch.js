const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var Blocklime1, Blocklime2, Blocklime3, Blocklime4, Blocklime5, Blocklime6, Blocklime7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(270, 200, 400, 20);

  //first level
  BlockBlue1 = new Box(210, 200, 20, 20);

  BlockBlue2 = new Box(230, 200, 20, 20);

  BlockBlue3 = new Box(250, 200, 20, 20);

  BlockBlue4 = new Box(270, 200, 20, 20);

  BlockBlue5 = new Box(290, 182, 20, 20);

  BlockBlue6 = new Box(310,200, 20, 20);

  BlockBlue7 = new Box(330, 200, 20, 20);

  //second level
  Blocklime1 = new Boxlime(201, 2, 20, 20);

  Blocklime2 = new Boxlime(220, 2, 20, 20);

  Blocklime3 = new Boxlime(240, 2, 20, 20);

  Blocklime4 = new Boxlime(260, 2, 20, 20);

  Blocklime5 = new Boxlime(280, 2, 20, 20);

  Blocklime6 = new Boxlime(300, 2, 20, 20);

  Blocklime7 = new Boxlime(320, 2, 20, 20);

  //third level
  BlockBlue8  = new Box(210, 182, 20, 20);

  BlockBlue9  = new Box(220, 182, 20, 20);

  BlockBlue10 = new Box(250, 182, 20, 20);

  BlockBlue11 = new Box(270, 182, 20, 20);

  BlockBlue12 = new Box(290, 182, 20, 20);

  BlockBlue13 = new Box(310, 182, 20, 20);

  BlockBlue14 = new Box(330, 182, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  Blocklime1.display ();

  Blocklime2.display ();

  Blocklime3.display ();

  Blocklime4.display ();

  Blocklime5.display ();

  Blocklime6.display ();

  Blocklime7.display ();

  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

