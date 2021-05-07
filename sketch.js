const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(950, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(215, 450, 85);
	bobObject2 = new Bob(300, 450, 85);
	bobObject3 = new Bob(385, 450, 85);
	bobObject4 = new Bob(470, 450, 85);
	bobObject5 = new Bob(555, 450, 85);

	roof = new Roof(385, 150, 400, 50);

	ropeBob1 = new Rope(bobObject1.body, roof.body, -175, 20);
	ropeBob2 = new Rope(bobObject2.body, roof.body, -90, 20);
	ropeBob3 = new Rope(bobObject3.body, roof.body, -5, 20);
	ropeBob4 = new Rope(bobObject4.body, roof.body, 80, 20);
	ropeBob5 = new Rope(bobObject5.body, roof.body, 165, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  ropeBob1.display();
  ropeBob2.display();
  ropeBob3.display();
  ropeBob4.display();
  ropeBob5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
	
  drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -250, y: -250})
	}
}