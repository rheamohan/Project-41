
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var Umbrella1;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1400,2200);
    engine = Engine.create;
    world = engine.world;

    Umbrella1 = new Umbrella(120,100,30);


    Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
    background(0);
    
    Engine.update(engine);
    drawSprite();

    Umbrella1.display();
}   

