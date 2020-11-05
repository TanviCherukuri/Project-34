var dog, happyDog, database, foodS, foodStock, database;

function preload()
{
  happyDogIMG = loadImage("images/dogImg1.png");
  dogIMG = loadImage("images/dogImg.png");
}

function setup() 
{
  createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogIMG);
  dog.scale = 0.25;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() 
{  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)) 
  {
    writeStock(foodS);
    dog.addImage(happyDogIMG)
  }
  drawSprites();
  textSize(7);
  fill("black");
  stroke(1);
  text("Note: Press Up arrow to feed milk");

}

function readStock(data) 
{
  foodS = data.val();
}

function writeStock(x) 
{
  database.ref('/').update({Food:x});
}

