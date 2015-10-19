function setup() {
    //create the Canvas
    // setup function runs once
    createCanvas(windowWidth, windowHeight);
    
//    drawWindow(65, 90, 'gold');
//    drawWindow(180, 90, 'blue');
//    drawWindow(295, 90, 'purple');
    
    
    
    var x = 0;
    var y = 0;
   
    var gridwidth = width - 100;
    
    for(var i = 0; i < 100; i ++)
    {
        console.log(i);
        fill('gold');
        drawWindow(x, y);
       
        
//    stroke('purple');
        // increment our x
        x += 120;
       
        
        //check if x is past the grid width
        
        if(x > gridwidth) {
        //set x back to the beginning
            x= 0;
            y += 270;
            
        } //end if
        
       
        
    } //end for loop


//    //top box
//    strokeWeight(1);
//    stroke('black');
//    fill('purple');
//    rect(40, 50, 140, 40);
//
//
//    //circles
//    fill('gold');
//    ellipse(65, 70, 20, 20);
//    ellipse(95, 70, 20, 20);
//    ellipse(125, 70, 20, 20);
//    ellipse(155, 70, 20, 20);

//    // inside box
//    strokeWeight(1);
//    stroke('black');
//    fill('DimGrey');
//    rect(65, 90, 140 - 50, 200);

//    // second inside box
//    strokeWeight(1);
//    stroke('black');
//    fill('LightBlue');
//    rect(65, 90, 140 - 50, 140);
//
//
//    //bottom box
//    strokeWeight(1);
//    stroke('black');
//    fill('purple');
//    rect(40, 90 + 200, 140, 20);
//
//    strokeWeight(8);
//    stroke('purple');
//    line(65, 90, 65, 90 + 200);
//    strokeWeight(3);
//    stroke('purple');
//    var x = 65 + (140 - 50) / 2;
//    line(x, 90, x, 90 + 200);
//    strokeWeight(8);
//    stroke('purple');
//    x = 65 + (140 - 50);
//    line(x, 90, x, 90 + 200);
//
//    line(65, 90, x, 90);
//    line(65, 90 + 200 / 2, x, 90 + 200 / 2);
//    line(65, 90 + 200, x, 90 + 200);


} //end setup

function draw() {

}

function drawWindow(startX, startY) {
//    noStroke();
    fill('lightblue');
    var winWidth =100;
    var winHeight = 250;
    rect(startX, startY, winWidth, winHeight);
    
    line(startX + winWidth/2, startY, startX + winWidth/2, startY + winHeight);
    
    line(startX, startY * .333, startX + winWidth, startY * .333);
    
    line(startX, startY * .666, startX + winWidth, startY * .666);
}




