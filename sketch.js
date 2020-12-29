const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload(){
    
}

function setup(){
    createCanvas(800, 700); 

    engine = Engine.create();
	world = engine.world;
    
}

function draw(){
    Engine.update(engine);
}   

