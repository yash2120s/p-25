PLAY = 1;
END = 0;
gameState = PLAY;

var crocodile , crocodileImage;

var men , menImage;

var restart,restartImage;

var score = 0;

function preload(){
   
menImage = loadAnimation("men.png","men1.png","men2.png","men3.png","men4.png","men5.png","men6.png")

crocodileImage = loadImage("crocodile.png")

restartImage = loadImage("restart.png")

}

 

function setup(){
  
    createCanvas(windowWidth,windowHeight);
men = createSprite(200,200,10,10)
men.addAnimation("men_walkig",menImage)
  
crocodileGroup = createGroup();

restart = createSprite(width - 400 , height - 300 ,10,10)
restart.addImage(restartImage)


}


function draw(){
  
background("green")

 
 if (gameState === PLAY){

  score = score+1;

  console.log(score)

    spawncrocodile();
restart.visible = false;
 if(crocodileGroup.isTouching(men)){
    gameState = END;
 }
 }
 else if (gameState === END){

    men .visible = false ;
    crocodileGroup.destroyEach();
    crocodileGroup.setVelocityXEach(0);
    reset();
    restart.visible = true;
    
    }


    drawSprites();
  
   

}

function spawncrocodile(){
if(frameCount%100===0){
    crocodile = createSprite(width - 50,height - 300,10,10)
    crocodile.addImage(crocodileImage)
    crocodile.velocityX = -4
    crocodile.debug = true;
    crocodile.setCollider("rectangle",0,0,width - 0.3,height - 0.1);
    crocodile.y = Math.round(random(height - 650 ,height - 50 ))
    
    crocodileGroup.add(crocodile)
 
}
}
function reset(){
if(mousePressedOver(restart)){
  gameState = PLAY;

 restart.visible = false ;

 men.visible = true;

 crocodileGroup.destroyEach();
    crocodileGroup.setVelocityXEach(0);

}

}