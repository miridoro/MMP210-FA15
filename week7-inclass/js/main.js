//global variables

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");
    
    var myArray = [];
    //add stuff to the array using a loop
    //create an array
    for(var i=0; i<100; i++) {
//        myArray[i] = "item" + i;
//        myArray[i] = i;
        //this adds circles to the array but we wont be able to address individual cirlces
        myArray[i] = ellipse(i, i, 10, 10);
    }
    console.log(myArray);
    
    
    
    
    // loop to go through every item in the array and add 10 to each item
    // if item is a string it will just get concatenated, but if item is a number // it will actually get added
    
    for(var i=0; i< myArray.length; i++) {
        myArray[i] += 10;
//        console.log(myArray[i]);
    }
    
    //log out the array
    console.log(myArray);
    
    
}//end setup

