
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var umbrella;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1400,2200);
    engine = Engine.create;
    world = engine.world;

    //umbrella = new Umbrella(120,100,30);

    Engine.run(engine);
    
}

function draw(){
    //rectMode(CENTER);
    background(0);
    
    Engine.update(engine);
    drawSprite();

    umbrella.display();
}   

