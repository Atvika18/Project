
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	myEngine = Engine.create();
  
	myWorld = myEngine.world;

	

	//Create the Bodies Here.


	Engine.run(myEngine);
	
	hammer = new Hammer(100,100);
	ground = new Ground(600,height,1200,20);
	stone = new Stone(700,320,70,70);
rubber = new Rubber(300,400,80);
sand1 = new Sand (200,200,10);
 sand2 = new Sand (200,200,10);
 sand3 = new Sand (200,200,10);
 sand4 = new Sand (200,200,10);
 sand5 = new Sand (200,200,10);
  iron = new Iron (400,500,50,50);
}


function draw() {
  
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 iron.display();
  drawSprites();
 
}



