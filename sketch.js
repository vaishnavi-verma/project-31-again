const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rain = [];

var x = 100

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")

    walkingDude = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")
}

function setup(){
createCanvas(900,900);
engine = Engine.create();
world = engine.world;
    
  

   for (var i = 0; i < 100; i++){

    rain.push(new Rain(random(0, 900), random(0, 900), 5))

    
   }
   
   thunderBuddies = new Group()

   human = createSprite(350, 680, 200, 400)

   human.addAnimation("walkingAction", walkingDude)

   human.scale = 0.65
}

function draw(){
    
    background(0);  
  Engine.update(engine);


  for (var i = 0; i<100; i++){

    rain[i].updateY()

    rain[i].display()
  }

  thunder()

  drawSprites();
}   

function thunder(){

    var rand = Math.round(random(1,4))
    if(frameCount % 80 === 0){
    var thunder = createSprite(random(0, 900), random(0, 20), 20, 50)
        switch(rand){

            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
        }

        thunderBuddies.add(thunder)
        thunderBuddies.setLifetimeEach(4)
        
    }
}