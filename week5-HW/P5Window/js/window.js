function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);


    //top box
    strokeWeight(1);
    stroke('black');
    fill('purple');
    rect(40, 50, 140, 40);


    //circles
    fill('gold');
    ellipse(65, 70, 20, 20);
    ellipse(95, 70, 20, 20);
    ellipse(125, 70, 20, 20);
    ellipse(155, 70, 20, 20);

    // inside box
    strokeWeight(1);
    stroke('black');
    fill('DimGrey');
    rect(65, 90, 140 - 50, 200);

    // second inside box
    strokeWeight(1);
    stroke('black');
    fill('LightBlue');
    rect(65, 90, 140 - 50, 140);


    //bottom box
    strokeWeight(1);
    stroke('black');
    fill('purple');
    rect(40, 90 + 200, 140, 20);

    strokeWeight(8);
    stroke('purple');
    line(65, 90, 65, 90 + 200);
    strokeWeight(3);
    stroke('purple');
    var x = 65 + (140 - 50) / 2;
    line(x, 90, x, 90 + 200);
    strokeWeight(8);
    stroke('purple');
    x = 65 + (140 - 50);
    line(x, 90, x, 90 + 200);

    line(65, 90, x, 90);
    line(65, 90 + 200 / 2, x, 90 + 200 / 2);
    line(65, 90 + 200, x, 90 + 200);


} //end setup
