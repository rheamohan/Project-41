
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var umbrella;
var maxDrops = 100;

var drops = [];

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1400,2200);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(650,1850,900);

    Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
    background(0);
    
    Engine.update(engine);

    for (var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }

    drawSprite();

    umbrella.display();
}   

