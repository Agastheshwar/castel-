const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




var engine,world;
var box,box1,box2,box3,box4;




var box,box1,box2,box3,box4;





function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  box = new Box(200,299,50,50);
  box1 = new Box(100,250,40,150);
  box2 = new Box(300,250,40,150);
  box3 = new Box(200,150,300,50);
  box4 = new Box(200,250,40,150);

}

function draw() {
  background(0);
  Engine.update(engine);
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
}