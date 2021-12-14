//Create variables here
var dogImg, happyDog, database, foodS, foodStock,dog,happyDogImg

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
  

}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog=createSprite(250,300,100,100)
  dog.addImage(dogImg)
  dog.scale=0.15
  
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}
function readStock(data) {
foodS=data.val()


}

function draw() {  
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)){
    dog.addImage(happyDogImg)
    Writestock(foodS)
    
  }
  drawSprites();
  //add styles here
  fill("white")
text("Food Remaining:"+foodS,170,200)
}

function Writestock(x){

if (x<=0) {
  x=0
} else {
  x=x-1
}
database.ref("/").update({
  Food:x
})
}


