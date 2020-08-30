var dog,happyDog,dogg;
var dogImg,database,foodS,foodStock;
var gameState = "some" 

function preload(){
    dogImg = loadImage("Dog.png")
    dogg = loadImage("DogSleeping.png")
    happyDog= loadImage("happydog.png")
}

function setup() {
   createCanvas(500, 600);
    database=firebase.database();
    foodStock=database.ref('food');
    dog = createSprite(250,250,10,10);
    dog.addImage(dogImg)
    foodStock.on("value",readStock);
	  
  
}


function draw() {  
  background(46, 139, 87)
  dog.scale = 0.3
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog);
}

  if(keyWentDown(DOWN_ARROW)){
    writeStockk(foodS)
    dog.addImage(happyDog);
  
}


  
  drawSprites();
  stroke("magenta")
  
  textSize(20)
  text("NOTE : Press UP_ARROW Key To Feed Drago Milk!",20,50)
  text("NOTE : Press DOWN_ARROW Key To Refill the milk!",20,400)
  text("Food left :"+ foodS,200,100)
  //foodS.update



  //add styles here

}

function readStock(data){
  foodS=data.val();
  
}

function writeStock(x){
  if (x<=0) {
    x=0;
    /*gameState="none"
    text("Oh I need to go to sleep now",20,120)
    dog.addImage(dogg)*/
  }else{

    x=x-1
    //gameState="some"

  }
/*if (gameState==="some") {
  x=20
}*/

  database.ref('/').update({
    food:x
  })
}


function writeStockk(x){
  if (x<=0) {
    x=x+20
  }
    /*gameState="none"
    text("Oh I need to go to sleep now",20,120)
    dog.addImage(dogg)*/
  /*}else{

    x=x+1
    //gameState="some"

  }
if (gameState==="some") {
  x=20
}*/

  database.ref('/').update({
    food:x
  })
}

function showError(){
  console.log("Error in writing to the database");
}



