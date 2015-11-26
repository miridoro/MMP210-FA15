//global variables
var penguins;
function preload(){
var url = "https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json";
    penguins = loadJSON(url);
}

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvas");
    //ellipse(100,100,30,30); //test to make sure p5 is working


    //challenge code next

    console.log("penguins",penguins); //check to make sure that the JSON is loaded

   //challenge 1 show emperor penguin
    text(penguins.birds[5].members[1], 300,10);


    //challenge 2 show cormorants
    console.log("cormorants",penguins.birds[1]);

    //    for(var i=0;i< penguins.birds[1].members.length; i++){
    var cormorants = penguins.birds[1].members;
    for(var i=0;i<cormorants.length; i++){
        text(cormorants[i],20,20*i+50);
    }//end for


}//end setup
