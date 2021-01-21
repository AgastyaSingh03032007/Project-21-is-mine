var canvas,music,box1,box2,box3,box4,ball,edges;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    
    //create 4 different surfaces
    
    box1=createSprite(0,570,200,30);
    box1.shapeColor="blue";

    box2=createSprite(220,570,200,30);
    box2.shapeColor="orange";
    
    box3=createSprite(440,570,200,30);
    box3.shapeColor=rgb(77,111,222);

    box4=createSprite(680,570,200,30);
    box4.shapeColor=rgb(150,100,255);
    
    //create box sprite and give velocity
    ball=createSprite(random(20,700),100,70,70);
    ball.shapeColor="cyan";
    ball.velocityX=3;
    ball.velocityY=5;
     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges=createEdgeSprites();
     ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball)) {
      box1.shapeColor="white";
      ball.velocityX=0;
      ball.velocityY=0;
      music.stop();

      
    }

    if(box2.isTouching(ball) &&  ball.bounceOff(box2)){
        box2.shapeColor="white";
        music.play();
      }

      if(box3.isTouching(ball) &&  ball.bounceOff(box3)){
        box3.shapeColor="white";
        music.play();
      }
      if(box4.isTouching(ball) &&  ball.bounceOff(box4)){
        box4.shapeColor="white";
        music.play();
       
      }
      drawSprites();
}
