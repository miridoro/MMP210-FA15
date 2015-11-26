    //url to  github directly
//    var url = "https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json";

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvas");
    //ellipse(100,100,30,30); //test to see if p5 is working

    //url to local file
    var url = "js/data/birds_antarctica.json";

    //load the json file with jsonLoaded function as a callback
    loadJSON(url, jsonLoaded);
}//end setup

//callback function for the loadJSON
//the JSON data will be loaded into the penguins file
function jsonLoaded(penguins){
    console.log("penguins",penguins);//test that data loaded

   //challenge 1 show emperor penguin
    text(penguins.birds[5].members[1], 300,10);

    //challenge 2 show cormorants
    console.log("cormorants",penguins.birds[1]); //test if have the right data
    var cormorants = penguins.birds[1].members; //use variable to make code easier to read
    //loop through cormorants and show them
    for(var i=0;i<cormorants.length; i++){
        //this places them each 20px apart with a 50px offset from the top of the screen.
        text(cormorants[i],20,20*i+50);
    }//end for

}//end jsonLoaded
