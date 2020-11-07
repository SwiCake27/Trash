
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dropS1,dropS2,dropD,trash,street;

function preload(){
trash=loadImage("paper.jpg")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dropS1=new Sides(800,400,5,100);
	dropS2=new Sides(600,400,5,100);
	dropD=new Sides(700,450,200,5);
	
ball=new Trash(200,300,30)
street=new Ground(400,450,1300,20)
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
ball.display();
 street.display();
dropD.display();
  dropS1.display();
dropS2.display();

}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-75})
		} 
}

