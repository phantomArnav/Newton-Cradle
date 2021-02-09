const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var roof1, roof2, roof3, roof4, roof5;
var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  roof1 = new Roof(360,50,400,20);
	roof2 = new Roof(400,50,40,20);
	roof3 = new Roof(440,50,40,20);
	roof4 = new Roof(480,50,40,20);
  roof5 = new Roof(520,50,40,20);
  
	bob1 = new Bob(360, 250, 20);
	bob2 = new Bob(400, 250, 20);
	bob3 = new Bob(440, 250, 20);
	bob4 = new Bob(480, 250, 20);
	bob5 = new Bob(520, 250, 20);

	rope1 = new Rope(bob1.body, roof1.body, -80, 0);
	rope2 = new Rope(bob2.body, roof2.body, -80, 0);
	rope3 = new Rope(bob3.body, roof3.body, -80, 0);
	rope4 = new Rope(bob4.body, roof4.body, -80, 0);
	rope5 = new Rope(bob5.body, roof5.body, -80, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-80,y:-80});
	}
}



