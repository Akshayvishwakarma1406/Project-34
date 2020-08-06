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

  var foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46, 139, 87);
  drawSprites();
  //add styles here

}



