//define global variables
var cicleSize;
var circleX, circleY;
var x, y;
//variable that sets state of rotation, 0 stands for 'off' and 1 stands for 'on'
var rot = 0;
var buttonState = 1;
var buttonState2 = 0;



function setup() {
    //create the Canvas
    
    createCanvas(windowWidth, windowHeight);
    
}


//function to draw the 'Play' button
function drawButton(buttonState) {
    cirlceX = 120 + 70;
    circleY = 50;
    circleSize = 80;
    noStroke();
    ellipse(120 + 70, 50, circleSize, circleSize);
    fill('black');
    triangle(100 + 70, 75, 100 + 70, 25, 150 + 70, 50);
    textSize(23);
    fill('black');
    text("Press Play", 15, 55);
}

//function to draw the 'Pause' button
function drawButton2(buttonState2) {
    noStroke();
    ellipse(120 + 70, 50, 80, 80);
    fill('black');
    rect(175, 25, 11, 50);
    rect(195, 25, 11, 50);
    textSize(23);
    text("Press Pause", 15, 55);
}

//function that calls and runs drawButton() and drawPattern() functions 
function draw() {
    background('orange');
    fill('white');
    
    if(buttonState){
    drawButton(buttonState);}
//    drawButton2();

    if(buttonState2){
        drawButton2(buttonState2);
    }
    

    //console.log("gridwidth: " + gridwidth)
    
    //checking if loop gets run
    console.log("start loop");
    
    push();
    //loop to draw pattern repeatedly
    for(var x = 105; x < width - 100; x += 200)
        for(var y = 205; y < height - 100; y += 200)
    {
        //console.log(i, x, y);
        drawPattern(x, y, rot); 
    } 
    pop(); 
}


//function that draws my polygons and flower
function drawPattern(startX, startY, rot) {
    push();
    
    strokeWeight(3);
    stroke('black');

    //displace object by x and y, it's cumulative which is why I am using push() and pop() 
    translate(startX, startY);
    
    
    push();
        if(rot) {
            rotate(frameCount / -100.0);
                }
    
        fill('yellow');
        polygon(0, 0, 100, 7);
    pop();
    
    push();
        fill('orange');
        if(rot) {
            rotate((frameCount / -(100.0)));
                }
        polygon(0, 0, 80, 7);
    
    pop();
    
    push();
        fill('yellow');
        if(rot) {
            rotate(frameCount / 30.0);
                }
//        var radius = 20 + startX/100.+ startY/80.;
        polygon(0, 0, 50, 5);
    
    

    //A design for a simple flower
//    translate(110, 110);
    
   
//    translate(startX, startY);
    fill('white');
    for (var i = 0; i < 10; i++) {
        
        ellipse(0, 15, 6, 22);
        rotate(PI / 5);
    }
    pop();
     pop();
}



function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
    
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);  
}



function mousePressed() {
    //check this function is working
    console.log("mouse Pressed");
    
    //check if mouse is inside 'play button', set rotation state to 1
    var  d; 
       d = dist(mouseX, mouseY, cirlceX, circleY);
        
        if(d < circleSize/2) {
            console.log("circle is clicked");
            
            if(buttonState === 1){
                rot = 1;
                buttonState=0;
                buttonState2 = 1;
            }
            
            else if (buttonState2 === 1){
                rot = 0;
                buttonState=1;
                buttonState2 = 0;
            }
            
    }
    
}



function mouseClicked() {
    console.log("mouse is clicked");
    
    drawPattern(x, y, rot);
    
}


