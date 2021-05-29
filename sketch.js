const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var box1 
function preload()
{
	
}

function setup() {
	createCanvas(1200 , 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     box1 = new Block(900 , 100)
	 box2 = new Block(900, 100)
	 box3 = new Block(900 , 100)
	 box4 = new Block(900 , 100)
	 box5 = new Block(900 , 100)
	 box6 = new Block(900 , 100)
	 box7 = new Block(900 , 100)
	 box8 = new Block(900 , 100)
	 box9 = new Block(970 , 100)
	 box10 = new Block(970 , 100)
	 box11 = new Block(970 , 100)
	 box12 = new Block(970 , 100)
	 box13 = new Block(970 , 100)
	 box14 = new Block(970 , 100)
	 box15 = new Block(1040 , 100)
	 box16 = new Block(1040 , 100)
	 box17 = new Block(1040 , 100)
	 box18 = new Block(1040 , 100)
	 box19 = new Block(1040 , 100)

     ground = new Ground(600 , 690)
     bob = new Bob(100,300 , 70 ,70)

     rope = new Rope(bob.body , {x:600, y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   rope.display();
   ground.display();
   bob.display()

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}

// function mouseReleased() {
// 	rope.fly()
// }


