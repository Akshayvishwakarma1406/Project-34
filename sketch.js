var dog1,dog2;
var database,foodS,foodStock;

function preload()
{
  dog1 = loadImage("images/dog1.png");
  dog2 = loadImage("images/dog2.png");
}

function setup() {
  createCanvas(600, 500);
  database = firebase.database();

  dog = createSprite(300,250,20,20);
  dog.addImage(dog1);
  dog.scale = .2

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    dog.addImage(dog2);
    writeStock(foodS);
  }
  fill ("black");
  textSize(30);

  text("Food Remaining : " + foodS,150,400);
  textSize(20);
  text("NOTE:-Press UP_ARROW Key to feed the Drago Milk! 🐶 ",40,50);
  drawSprites();

  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
  if(x<=0){
    x = 0;
  }else{
    x = x - 1;
  }

  database.ref('/').update({
    Food : x
  })
}