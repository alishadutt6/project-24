
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, bodies, body;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new Stone(700,300,100,100);
hammer = new Hammer(10,100);
plane = new Plane(600,590,1200,20);
rubber = new Rubber(900,450,70);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  stone.display();
   hammer.display();
   rubber.display();
   plane.display();
  drawSprites();
 
}



