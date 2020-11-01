
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var dustbin;
var ground;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 650, width, 15);
	paper = new Paper(220, 350, 42);
	dustbin = new Dustbin(1000, 635);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin.display();
  ground.display();
  fill("lightgreen")
  textSize(25)
  textAlign(CENTER)
  text("PUT THE PAPER BALL IN THE DUSTBIN!", 700, 100);
  fill("orange")
  text("Use UP ARROW key to move the paper ball.", 700, 150);
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}



