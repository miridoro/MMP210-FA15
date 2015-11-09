function setup() {
    //create the Canvas
    
    createCanvas(windowWidth, windowHeight);

    
}

function draw() {
     background('orange');  

    //drawPattern(300, 300);
    

    //console.log("gridwidth: " + gridwidth)
    
    console.log("start loop")
    
    for(var x = 105; x < width - 100; x += 200)
        for(var y = 105; y < height - 100; y += 200)
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
    polygon(0, 0, 90 - startX/100.- startY/80., 7);
    
    pop();
    
    push();
    fill('yellow');
    rotate(frameCount / 50.0);
    var radius = 20 + startX/100.+ startY/80.;
    polygon(0, 0, radius, 5);
    
    

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