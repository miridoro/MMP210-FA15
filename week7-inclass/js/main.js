//global variables
var myArray = []; 

//bubble constructor
function Bubble() {
    // create x and y properties (variables)
    this.x = random(width); //width is width of canvas
    this.y = random(height);
    this.r = 20; //r is for radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2;  //width and height are twice the radius
    this.c = fill('yellow');
    
    //method: draw the bubble
    this.drawBubble = function(){
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }
    
    
} //end bubble

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");
    
    var myArray = [];
    //add stuff to the array using a loop
    //create an array
    for(var i=0; i<100; i++) {
//        myArray[i] = "item" + i;
//        myArray[i] = i;
        
        //this adds circles to the array but we wont be able to address individual cirlces
//       
          myArray[i] = new Bubble();
          myArray[i].drawBubble();
        
    }
    console.log(myArray);
    
    
    
    // loop to go through every item in the array and add 10 to each item
    // if item is a string it will just get concatenated, but if item is a number it will actually get added
    
    
    
    for(var i=0; i< myArray.length; i++) {
        // if dont comment this out, then wont be able to see coordinates in console  
        //        myArray[i] += 10;
        console.log(myArray[i]);
    }
    
    //log out the array
    console.log(myArray);
    
    
    
    
} //end setup

//listen for mouse presses with P5 mousePressed method
function mousePressed() {
    //check this is working
    console.log("mouse Pressed");
    
    //loop through the bubbles and see if mouse inside
    
    for(var i=0; i< myArray.length; i++) {
        // if dont comment this out, then wont be able to see coordinates in console  
        //        myArray[i] += 10;
        
        
        console.log(myArray);
    }
    
    
}