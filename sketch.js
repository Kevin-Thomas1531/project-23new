const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerBase;
var computer,computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase=new PlayerBase(300,random(450,height-300),150,180);
   player = new Player(285,playerBase.body.position.y-153,50,180);


   //display Player and computerplayer
   computerBase=new ComputerBase(800,random(450,height-300),150,180);
   computer= new Computer(800,playerBase.body.position.y-153,50,180);
}
function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100); playerBase.display();
 
 

   //Display Playerbase and computer base 
   playerBase.display();
   player.display();
   
 
   computerBase.display();
   computer.display();
   
   
}
