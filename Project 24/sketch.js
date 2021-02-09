
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1650, 880);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//Ground body
	ground = new Ground(825,870,1650,20)

	hammer = new Hammer(700, 850);
	stone = new Stone(600,850,50,50);
	rubber = new Rubber(850,850,25);
	iron = new Iron (1000,850,50,50)


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  Engine.update(engine);


  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();

 
}



