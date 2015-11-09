function setup() {
    //create the Canvas
    // setup function runs once
    createCanvas(windowWidth, windowHeight);
    
    var x = 0;
    var y = 0;
   
    var gridwidth = width - 100;
    
    for(var i = 0; i < 50; i ++)
    {
        console.log(i);
//        fill('gold');
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





} //end setup


function drawWindow(startX, startY) {
//    noStroke();
    strokeWeight(2);
    stroke('black');
    
    
    
    var winWidth =100;
    var winHeight = 250;
    fill('LightBlue');
    rect(startX + 20, startY, winWidth - 40, winHeight);
    fill('black');
    rect(startX + 20, startY + 170, winWidth - 40, winHeight -170);
    // top box
    strokeWeight(1);
    stroke('black');
    fill('purple');
    rect(startX, startY - 1, 100, 40);
    
     // bottom box
    strokeWeight(1);
    stroke('black');
    fill('purple');
    rect(startX, startY + (winHeight - 20), 100, 20);
    
    strokeWeight(2);
    stroke('purple');
    line(startX + winWidth/2, startY, startX + winWidth/2, startY + winHeight);
    
    
    
    //circles
    fill('gold');
    
    ellipse(startX + 14, startY + 20, 17, 17);
    ellipse(startX + 38, startY + 20, 17, 17);
    ellipse(startX + 63, startY + 20, 17, 17);
    ellipse(startX + 86, startY + 20, 17, 17);
    
    strokeWeight(5);
    stroke('purple');
    line(startX + 20, startY + 40, startX + 20, startY + winHeight - 20);
    line(startX + 80, startY + 40, startX + 80, startY + winHeight - 20);
    strokeWeight(2);
    line(startX + 20, startY + winHeight/2, startX + 80, startY + (winHeight/2));
    
}



