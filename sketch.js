const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,355,70,70);
    box2 = new Box(920,355,70,70);
    box3 = new Box(700,265,70,70);
    box4 = new Box(920,265,70,70);
    box5 = new Box(810,175,70,70);

    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(810,365);
    pig2 = new Pig(810,275);

    log1 = new Log(810,310,300,PI/2);
    log2 = new Log(810,220,300,PI/2);
    log3 = new Log(770,120,150,PI/4);
    log4 = new Log(850,120,150,PI*3/4);

    bird = new Bird(mouseX, mouseY);
}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}