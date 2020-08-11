var dog1,dog2;
var database,foodS,foodStock;

function preload()
{
  dog1 = loadImage("images/dog1.png");
  dog2 = loadImage("images/dog2.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,20,20);
  dog.addImage(dog1);
  dog.scale = .2

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    dog.addImage(dog2);
    writeStock(foodS);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}