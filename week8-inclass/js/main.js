//define global variables
var cicleSize;
var circleX, circleY;
var x, y;
//variable that sets state of rotation, 0 stands for 'off' and 1 stands for 'on'
var rot = 0;
//setting the state of my 'play button' and 'pause button'
var playButton = 1;
var pauseButton = 0;
var displaceBy = 70;



function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight); 
}//end setup ()


//function to draw the 'Play' button
function drawPlayButton() {
    cirlceX = 120 + displaceBy;
    circleY = 50;
    circleSize = 80;
    noStroke();
    ellipse(120 + displaceBy, 50, circleSize, circleSize);
    fill('black');
    triangle(100 + displaceBy, 75, 100 + displaceBy, 25, 150 + displaceBy, 50);
    textSize(23);
    fill('black');
    text("Press Play", 15, 55);
}//end drawButton()




//function to draw the 'Pause' button
function drawPauseButton() {
    noStroke();
    ellipse(120 + displaceBy, 50, circleSize, circleSize);
    fill('black');
    rect(175, 25, 11, 50);
    rect(195, 25, 11, 50);
    textSize(23);
    text("Press Pause", 15, 55);
}//end drawButton2()


//function that calls and runs drawButton() and drawPattern() functions 
function draw() {
    background('orange');
    fill('white');
    
    if(playButton){
    drawPlayButton();
    }
    
    if(pauseButton){
        drawPauseButton();
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
}//end draw()


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
        polygon(0, 0, 50, 5);
    
    
   
//  my flower
    fill('white');
    for (var i = 0; i < 10; i++) {
        
        ellipse(0, 15, 6, 22);
        rotate(PI / 5);
    }
    pop();
     pop();
    
}//end drawPattern()



function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
    
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }//end for loop
  endShape(CLOSE);  
}//end polygon()



function mousePressed() {
    //check this function is working
    console.log("mouse Pressed");
    
    //check if mouse is inside 'play button', set rotation state to 1
    var  d; 
       d = dist(mouseX, mouseY, cirlceX, circleY);
        
        if(d < circleSize/2) {
            console.log("circle is clicked");
            
            //if play button is clicked, start rotating shapes
            if(playButton === 1){
                rot = 1;
                playButton=0;
                //pause button becomes visible when shapes rotate
                pauseButton = 1;
            }//end if loop
            
            //if pause button is clicked, stop rotating the shapes
            else if (pauseButton === 1){
                rot = 0;
                //play button becomes visible when shapes do not rotate
                playButton=1;
                pauseButton = 0;
            }//end else if loop
            
    }//end of main if loop
    
}//end of mousePressed()


// just for testing purposes:
//function mouseClicked() {
//    console.log("mouse is clicked");
//    
//    drawPattern(x, y, rot);
//    
//}


