function setup() {
    //create the Canvas
    
    createCanvas(windowWidth, windowHeight);
    
    
    
    
    
//     var gridwidth = width - 100;
   // drawPattern(x, y);
    

    
}

function draw() {
     background('orange');  
    var x = 105;
    var y = 105;
     drawPattern(x, y);
    
      var gridwidth = width - 10;
    
    for(var i = 0; i < 30; i ++)
    {
        console.log(i);
//        fill('gold');
        drawPattern(x, y);
       
        
//    stroke('purple');
        // increment our x
        x += 200;
       
        
        //check if x is past the grid width
        
        if(x > gridwidth) {
        //set x back to the beginning
            x= 105;
            y += 205;
            
        } //end if
        
       
        
    } //end for loop
    
    
}



function drawPattern(startX, startY) {
    //    noStroke();

    strokeWeight(3);
    stroke('black');

   
//    translate(startX, startY);
    
    
    fill('orange');
    
//    push(); 
//        rotate(frameCount / -100.0);
        fill('yellow');
        polygon(startX, startY, 100, 7);
//         rotate(frameCount / -100.0);

//    pop();
    
//    push();
    //fill('orange');
    polygon(startX, startY, 70, 7);
//      rotate(frameCount / 50.0);
    fill('yellow');
    polygon(startX, startY, 50, 5);
//    pop();

    //A design for a simple flower
//    translate(110, 110);
    
    push();
    translate(startX, startY);
    
    for (var i = 0; i < 10; i++) {
        
        ellipse(0, 15, 6, 22);
        rotate(PI / 5);
    }
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