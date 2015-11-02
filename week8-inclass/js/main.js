var r = 200;

function setup() {
    //create the Canvas
    // setup function runs once
    createCanvas(windowWidth, windowHeight);
    
    var scale = 25;
    
    var x = 0;
    var y = 0;
    
    
    drawPattern(x, y);
    
 
    
}


function drawPattern(startX, startY) {
//    noStroke();
    strokeWeight(2);
    stroke('lightBlue');
    
    ellipse(startX + r, startY + r, r, r);
    ellipse(startX + r, startY + r, r - 10, r - 10);
    ellipse(startX + r , startY + (r/2), r/3, r/3);
    ellipse(startX + 110 , startY + r + 30, r/3, r/3);
    ellipse(startX + 290 , startY + r + 30, r/3, r/3);
    
        // A design for a simple flower
  translate(200, 200);
 
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 40);
    rotate(PI/5);
  }
   

    
}