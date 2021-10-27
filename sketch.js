var bgImg;
var cat;
var raton;

function preload() {
 bgImg=loadImage("garden.png");
 catImg1=loadAnimation("images/tomOne.png");
 catImg2=loadAnimaton("images/tomTwo.png,tomThree.png");
 ratonImg1=loadAnimation("images/jerryOne.png");
 ratonImg2=loadAnimation("images/jerryTwo.png,jerryTree.png");
}

function setup(){
    canvas = createCanvas(1000,800);

 cat=createSprite(870,600);
 cat.addAnimation("gatosentado",catImg1);
 cat.scale=0.2;
 raton=createSprite(870,500);
 raton.addAnimation("ratonconqueso",ratonImg1);
 raton.scale=0.2;
}

function draw() {

    background("bgImg");

    if(cat.x-mouse.x<(cat.width-mousse.width)/2){

    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        raton.addAnimation("ratonmolestando",jerryTwo.png);
        raton.changeAnimation("ratonmolestando");
        mouse.frameDelay=25;

        cat.velocityX=-5;
        cat.addAnimation("gatocaminando",tomTwo.png);
        cat.changeAnimation("gatocaminando");
        mouse.frameDelay=25;
    }


}