var cicleSize;
var circleX, circleY;

function setup() {
    //create the Canvas
    
    createCanvas(windowWidth, windowHeight);
   
    
}

function drawButton() {
    cirlceX = 120 + 70;
    circleY = 50;
    circleSize = 80;
    noStroke();
    ellipse(120 + 70, 50, circleSize, circleSize);
    fill('black');
    triangle(100 + 70, 75, 100 + 70, 25, 150 + 70, 50);
    textSize(25);
    fill('black');
    text("Press Play", 15, 55);
    
    
}

function draw() {
     background('orange');
    fill('white');
    drawButton();
    
  
    
   

    //drawPattern(300, 300);
    

    //console.log("gridwidth: " + gridwidth)
    
    console.log("start loop")
    
    for(var x = 105; x < width - 100; x += 200)
        for(var y = 205; y < height - 100; y += 200)
    {
        //console.log(i, x, y);
        drawPattern(x, y);
       
    } 
    
    
}



function drawPattern(startX, startY) {
    push();
    //    noStroke();

    strokeWeight(3);
    stroke('black');

    
    translate(startX, startY);
    
    
    push();
        rotate(frameCount / -100.0);
        fill('yellow');
        polygon(0, 0, 100, 7);
    pop();
    
    push();
    fill('orange');
    rotate((frameCount / -(100.0)));
    polygon(0, 0, 80, 7);
    
    pop();
    
    push();
    fill('yellow');
    rotate(frameCount / 50.0);
    var radius = 20 + startX/100.+ startY/80.;
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
    //check this is working
//    console.log("mouse Pressed");
    
    //loop through the bubbles and see if mouse inside
    var  d; 
       d = dist(mouseX, mouseY, cirlceX, circleY);
        
        if(d < circleSize/2) {
            console.log("circle is clicked");
             
    }
}


