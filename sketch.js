const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300,score=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var a = 0; a <=width; a = a + 80) {
     divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var b = 75; b <=width; b=b+50) 
    {
           plinkos.push(new Plinko(b,75));
    }

    for (var c = 50; c <=width-10; c=c+50) 
    {
       plinkos.push(new Plinko(c,175));
    }

     for (var d = 75; d <=width; d=d+50) 
    {
       plinkos.push(new Plinko(d,275));
    }

     for (var e = 50; e <=width-10; e=e+50) 
    {
       plinkos.push(new Plinko(e,375));
    }
}


function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  
   for (var j = 0; j< plinkos.length; j++) {    
     plinkos[j].display();
     
   }
   if(frameCount % 70===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var k = 0; k < particles.length; k++) {
     particles[k].display();
   }
   for (var l = 0; l < divisions.length; l++) {
     divisions[l].display();
   }
}