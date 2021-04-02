var Sofia = createSprite(20,25,15,15);
Sofia.shapeColor = "orange";
var cup = createSprite(380,350,20,70);
cup.shapeColor = "yellow";
var cardboard3 = createSprite (150,27,100,20);
cardboard3.shapeColor = "brown";
var cardboard4 = createSprite(50,140,200,20);
cardboard4.shapeColor = "brown";
var cardboard7 = createSprite(25,355,20,150);
cardboard7.shapeColor = "brown";
var cardboard8 = createSprite(240,400,100,40);
cardboard8.shapeColor = "brown";
var cardboard9 = createSprite(280,34,100,20);
cardboard9.shapeColor = "brown";
var cardboard10 = createSprite(115,280,100,20);
cardboard10.shapeColor = "brown";
var cardboard11 = createSprite(4,203,165,20);
cardboard11.shapeColor = "brown";
var cardboard12 = createSprite(124,182,20,100);
cardboard12.shapeColor = "brown";
var cardboard14 = createSprite(108,284,50,10);
cardboard14.shapeColor = "brown";
var cardboard15 = createSprite(110,320,20,100);
cardboard15.shapeColor = "brown";
var cardboard16 = createSprite(259,103,25,85);
cardboard16.shapeColor = "brown";
var cardboard17 = createSprite(337, 140, 20, 100);
cardboard17.shapeColor = "brown";
var cardboard18 = createSprite(289,178,40,15);
cardboard18.shapeColor = "brown";
var cardboard19 = createSprite(278,241,100,20);
cardboard19.shapeColor = "brown";
var cardboard20 = createSprite(391,200,20,100);
cardboard20.shapeColor = "brown";
var cardboard21 = createSprite(214,308,55,20);
cardboard21.shapeColor = "brown";
var cardboard22 = createSprite(380,3,20,200);
cardboard22.shapeColor = "brown";

function preload(){
  backgroundImage= loadImage("day.jpeg"); 
  nightImage= loadImage("night.jpeg");
}

function setup() {
  createCanvas(800,400);
  background = createSprite(0,0,800,400);
  background.addImage(backgroundImage);
  background.scale = 2.5; 
  }


function draw() {
  background("pink");
  createEdgeSprites();
 Sofia.bounceOff(edges);

if (keyDown(UP_ARROW)) {
  Sofia.velocityX = 0;
  Sofia.velocityY = -2;
}

if (keyDown(DOWN_ARROW)) {
  Sofia.velocityX = 0;
  Sofia.velocityY = 3;
}

if (keyDown(LEFT_ARROW)) {
  Sofia.velocityX = -5;
  Sofia.velocityY = 0;
}

if (keyDown(RIGHT_ARROW)) {
  Sofia.velocityX = 3;
  Sofia.velocityY = 0;
}

if (Sofia.isTouching(cup)) {
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
  textSize(24);
 text("SOFIA WINS! :D",200, 200);
   
}

if (Sofia.isTouching(cardboard3)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard4)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}

if (Sofia.isTouching(cardboard7)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard8)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard9)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard10)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard11)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard12)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}

if (Sofia.isTouching(cardboard14)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard15)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard16)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard17)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard18)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard19)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard20)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard21)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
if (Sofia.isTouching(cardboard22)) {
  Sofia.x = 20;
  Sofia.y = 25;
  Sofia.velocityY = 0;
  Sofia.velocityX = 0;
}
textSize(24);
  text("Cup",350, 290);
  
if (Sofia.velocityX === Sofia.velocityY) {
   text("Sofia",Sofia.x,Sofia.y);
     
  }
}

Sofia.bounceOff(cardboard3);
Sofia.bounceOff(cardboard4);
Sofia.bounceOff(cardboard7);
Sofia.bounceOff(cardboard8);
Sofia.bounceOff(cardboard9);
Sofia.bounceOff(cardboard10);
Sofia.bounceOff(cardboard11);
Sofia.bounceOff(cardboard12);
Sofia.bounceOff(cardboard14);
Sofia.bounceOff(cardboard15);
Sofia.bounceOff(cardboard16);
Sofia.bounceOff(cardboard17);
Sofia.bounceOff(cardboard18);
Sofia.bounceOff(cardboard19);
Sofia.bounceOff(cardboard20);
Sofia.bounceOff(cardboard21);
Sofia.bounceOff(cardboard22);
    drawSprites();

    async function getTime() {
      var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
      var responseJSON = await response.json();
      console.log(response.log); 
      
      async function getBgImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
            var responseJSON = await response.json();
        
        var datetime = responseJSON.datetime; 
        var hour= datetime.slice(11,13)
      
        if(hour>= 06 && hour<= 19){
          bg = "images/day.jpeg";
        }
      
      else{
        bg = "images/night.jpeg"; 
      }
}
backgroundImage = loadImage(backgroundImage); 
console.log(backgroundImage)
}