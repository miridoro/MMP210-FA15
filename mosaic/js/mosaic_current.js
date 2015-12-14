//document.getElementById("myText").value = "Hello!";

//$('body')
//.append('Album Title')
//.css('color', 'red').addClass('myClass');



//var div = document.createElement('div');
//div.innerHTML = "Album Title";
//div.src = "../placeholder.jpg";
//// set style
//// better to use CSS though - just set class
//div.setAttribute('class', 'myClass'); // and make sure myclass has some styles in css
//document.body.appendChild(div);


var albumID;
var url2;





document.getElementById('myText').onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    //ASCII code for enter key
    if (keyCode == '13') {
        // Enter pressed
//        updateArtist(document.getElementById("myText").value);
        updateArtist($('#myText').val());
        
    }
}








function updateArtist(artistname) {
    var url = "https://itunes.apple.com/search?entity=album&term=" + artistname + "&callback=?";
//    console.log(url);

    //callback, a function you pass to get called later (ie button)

    
    $.getJSON(url, updateData);
}



function updateData(data) {
    //    console.log(data);
    
    
    $('#albumAnchor').empty();
    
    
    //set first album title to first element of the JSON data

    for (var i = 0; i < Math.min(data.resultCount); i++) {
        createDiv(i);
//        setTitle(i, data.results[i].collectionName);
        
        
        setImage(i, data.results[i].artworkUrl100.replace("100x100", "250x250"));
//        console.log(data.results[i].artworkUrl100.replace("100x100", "250x250"));
        albumID = data.results[i].collectionId;
//        console.log(albumID);
        updateSongID(albumID);
        
        
    
        
    }
    
    
}



function updateSongID(albumID) {
    urlSong = "https://itunes.apple.com/lookup?id=" + albumID + "&entity=song"  + "&callback=?";
    
    console.log(urlSong);
    
//    $.getJSON(urlSong, updateSong);
    getSong(urlSong);
    
    
}

function updateSong(data) {
    
     for (var i = 0; i < Math.min(data.resultCount); i++) {
    
        setSong(data.results[i].previewUrl);
         console.log(data.results[i].previewUrl);
  
    }
    
}





function setSong(url) {
//    window.open('http://a148.phobos.apple.com/us/r30/Music4/v4/ad/48/48/ad4848ae-da73-ddd1-7c79-704763829aa9/mzaf_1406262765517523840.plus.aac.p.m4a');
    window.open(url);
    
}



//call functions

function createDiv(n){
//  var title = "title" + n;
//    var image = "image" + n;
    
    
    
    $('#albumAnchor').append('<a id="mySong" onClick="setSong()"><div id="div' + n + '"' + ' class="album"><h2 class="title"></h2><img class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div></a>');
    
    
    
//    console.log('<div id="div' + n + '"' + ' class="album"><h2 class="title">Album Title</h2><img  class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');
    
//    $('#albumAnchor').append(' a' +  n);
    
   
}




function setValue(id, value) {                     
    document.getElementById(id).text = value;        
}


function setTitle(n, value) {

//    document.getElementById("title" + n).innerText = value;  
//    $('#div' + n).text(value);
    $('#div' + n + ' .title').text(value);
//    console.log($('#div' + n).text());
}

function setImage(n, value) {
//    document.getElementById("image" + n).src = value;
//    $('#div' + n).attr('src', value);
    $('#div' + n + ' img').attr('src', value);
//    console.log($('#image' + n).attr('src'));
    
}





function image(n, value) {
    var img = document.createElement("IMG");
    document.getElementById("imgageDiv" + n).appendChild(img);
    document.getElementById("image" + n).src = value;
}



//$("#foo").append("<div><img src=../placeholder.jpg></div>");


//var cars = data.split(',');
//for (var c in cars) {
//    var newElement = document.createElement('div');
//    newElement.id = cars[c]; newElement.className = "car";
//    newElement.innerHTML = cars[c];
//    document.body.appendChild(newElement);
//}