
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 700);
     engine = Engine.create();
	 world = engine.world;

    //Create the Bodies Here.
    stand1 = new Stand (540,500,250,20)
    //stand2 = new Stand (900,300,350,20)

    block1 = new Block (450,470,30,40)
    block2 = new Block (480,470,30,40)
    block3 = new Block (510,470,30,40)
    block4 = new Block (540,470,30,40)
    block5 = new Block (570,470,30,40)
    block6 = new Block (600,470,30,40)
    block7 = new Block (630,470,30,40)
    

    block8 = new Block(480,430,30,40)
    block9 = new Block(510,430,30,40)
    block10 = new Block(540,430,30,40)
    block11 = new Block(570,430,30,40)
    block12 = new Block(600,430,30,40)

    
    block13 = new Block(510,390,30,40)
    block14 = new Block(540,390,30,40)
    block15 = new Block(570,390,30,40)

    block16 = new Block(540,350,30,40)
   
    polygon =new Polygon(200,300,)
    
    
    


    

  

    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(43, 0, 3);
  Engine.update(engine);

  stand1.display();
 // stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display()
  block7.display()

  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();





  
  drawSprites();
 
}




