const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint


var engine, world;
 
var Background
var ground1
var block1
var block2
var block3
var block4
var block5
var block6
var block7

var block9
var block10
var block11
var block12
var block13

var block15
var block16
var block17
var block18
var block19

var block20
var block21
var block22
var block23
var block24
var block25
var block26
var block27

 
var hero
var fly
var monster
function preload(){
 Background=loadImage("images/bg.png") 
  

}
function setup() {
  createCanvas(3000, 500);

 

  engine = Engine.create();
  world = engine.world;

    ground1 = new Ground(300,390,1100,10);
    block1 = new Block(500,365,40,40);
    block2 = new Block(500,330,40,40);
    block3 = new Block(500,290,40,40);
    block4 = new Block(500,250,40,40);
    block5 = new Block(500,210,40,40);
    block6 = new Block(500,170,40,40);
    block7 = new Block(500,130,40,40);

    block9 = new Block1(550,364,40,40)
    block10 = new Block1(550,324,40,40)
    block11 = new Block1(550,284,40,40)
    block12 = new Block1(550,245,40,40)
    block13 = new Block1(550,205,40,40)

    block15 = new Block(600,364,40,40)
    block16 = new Block(600,325,40,40)
    block17 = new Block(600,286,40,40)
    block18 = new Block(600,247,40,40)
    block19 = new Block(600,207,40,40)
    block20 = new Block(600,169,40,40)
    block21= new Block(600,131,40,40)
    block22 = new Block(600,91,40,40)

    block23 = new Block1(660,364,40,40)
    block24 = new Block1(660,323,40,40)
    block25 = new Block1(660,286,40,40)
    block26= new Block1(660,245,40,40)
    block27 = new Block1(660,207,40,40)
    
   
    

   hero= new Hero(  1000,200,340)
   fly = new Fly(hero.body, {x:800, y:59}) 

   monster = new Monster(330,290,300)
   

   
   
}

function draw( ) {
  background(Background)
Engine.update(engine)
  //drawSprites()

  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display()
  block21.display()
  block22.display()

  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()

  
hero.display()
fly.display()
monster.display()

   
   
  }

  function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
  }
