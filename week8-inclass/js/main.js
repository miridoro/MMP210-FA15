function setup() {
    //create the Canvas
    
    createCanvas(windowWidth, windowHeight);
    
    
    var x = 0;
    var y = 0;
//     var gridwidth = width - 100;
   // drawPattern(x, y);
    

    
}

function draw() {
     background('orange');  
     drawPattern(105, 105)
}



function drawPattern(startX, startY) {
    //    noStroke();

    strokeWeight(3);
    stroke('black');

    translate(startX, startY);
    
    fill('orange');
    
    //push(); 
        //rotate(frameCount / -100.0);
        fill('yellow');
        polygon(0., 0., 100, 7);
        // rotate(frameCount / -100.0);

    //pop();
    
    //fill('orange');
    polygon(0, 0, 70, 7);
    //  rotate(frameCount / 50.0);
    fill('yellow');
    polygon(0, 0, 50, 5);
    //pop();

    //A design for a simple flower
    //translate(110, 110);

    
    for (var i = 0; i < 10; i++) {
        ellipse(0, 15, 6, 22);
        rotate(PI / 5);
    }
    // pop();
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