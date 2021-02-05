 //variable declaration
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

//physics engine declaration
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//loading images in this function
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//the 3 sides of the red box
	//rightside cusion
	cusion1 = createSprite(300,610,20,100)
	cusion1.shapeColor="red";
	//leftside cusion
	cusion2 = createSprite(500,610,20,100)
	cusion2.shapeColor="red";
	//bottom cusion
	cusion3 = createSprite(400,650,200,20)
	cusion3.shapeColor="red";

	//creating engine and adding to the world
	engine = Engine.create();
	world = engine.world;

	//creating the package with its characteristics
	packageBody = Bodies.rectangle(width/2 , 200 , 50, 40 , {restitution:2, isStatic:true});
	World.add(world, packageBody);

	//creating the cusions with its characteristics
	c1 = Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,c1);	
	c2 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,c2);
	c3 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,c3);

	//Creating a Ground with its characteristics
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  cusion1.x=c1.position.x;
  cusion1.y=c1.position.y;
  cusion2.x=c2.position.x;
  cusion2.y=c2.position.y;
  cusion3.x=c3.position.x;
  cusion3.y=c3.position.y;

  drawSprites();
 
}

//function for when the 'down arrow' is pressed, the package falls
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}