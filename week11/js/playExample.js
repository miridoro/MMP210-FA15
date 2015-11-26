var sprite1;
var sprite2;
var sprite3;

function setup(){
    createCanvas(800,800);

    //create a sprite
//    fill(255,0,0);
    sprite1 = createSprite(50,50,100,100);
    sprite1.velocity.x = random(-2, 2);
    sprite1.velocity.y = random(-2, 2);

    //create another sprite
//    fill(0,0,255);
    sprite2 = createSprite(50,250,100,100);
    sprite2.setSpeed(1,2);

    sprite3 = createSprite(mouseX,mouseY,100,100);

}

function draw(){
    //change the background each time so don't see trails
    background(255);

    sprite3.position.x = mouseX;
    sprite3.position.y = mouseY;

    sprite3.displace(sprite2);
    sprite3.collide(sprite1);

    //tell p5.play to draw the sprites. without this you won't see them and if it isn't in draw (or called repeatedly) then they won't move.
    drawSprites();
}