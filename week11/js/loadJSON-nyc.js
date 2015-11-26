function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,1600);
    cnv.parent("canvas");
    //ellipse(100,100,30,30); //test to see if p5 is working

    //url to NYC Social Media File
    url = "https://data.cityofnewyork.us/api/views/5b3a-rs48/rows.json?accessType=DOWNLOAD"

    //load the json file with jsonLoaded function as a callback
    loadJSON(url, jsonLoaded);
}//end setup

//callback function for the loadJSON
//the JSON data will be loaded into the nycData variable
function jsonLoaded(nycData){
    console.log("nycData",nycData);//test that data loaded


    var data = nycData.data;
    var posY = 20;
    for(var i=0;i<data.length; i++){
        //this places them each 20px apart with a 50px offset from the top of the screen.
        if(data[i][9] == "Facebook"){
            console.log("FB", data[i][10]);
            text(data[i][10],50,posY);
            posY+= 20;
        }
    }//end for
}//end jsonLoaded