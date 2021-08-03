var iss_img,bg,sc1,sc2,sc3,sc4,spaceCraft
var iss,spaceCraft;
var hasDocked=false
function preload(){
  bg=loadImage("spacebg.jpg")
  iss_img=loadImage("iss.png")
  sc1=loadImage("spacecraft1.png")
  sc2=loadImage("spacecraft2.png")
  sc3=loadImage("spacecraft3.png")
  sc4=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  
  spaceCraft=createSprite(285,240)
  spaceCraft.addImage(sc1)
  spaceCraft.scale=0.15

  iss=createSprite(330,130)
  iss.addImage(iss_img)
  iss.scale=0.25


}

function draw() {
  background(bg);
  spaceCraft.addImage(sc1)  
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
    if(keyIsDown(UP_ARROW)){
spaceCraft.y=spaceCraft.y-1
    }
    if(keyIsDown(LEFT_ARROW)){
      spaceCraft.addImage(sc4)
      spaceCraft.x=spaceCraft.x-1
    }
    if(keyIsDown(RIGHT_ARROW)){
      spaceCraft.addImage(sc3)
      spaceCraft.x=spaceCraft.x+1
    }
    if(keyIsDown(DOWN_ARROW)){
      spaceCraft.addImage(sc2)
      
          }
  }
  if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25)
    fill(255)
    text ("Docking successful",200,300)
  }
  drawSprites();
}