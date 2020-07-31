
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world, chain;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,100);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);
	//Create a Ground
	chain = new slingshot(paperObject.body,{x:200,y:400});

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  chain.display()

  
  
 
  
  
 
}


function mouseDragged(){
    Matter.Body.setPosition (paperObject.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
chain.fly()
}





