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






function updateData(data) {
    //prints to concole
    //    console.log(data);
    
    
    $('#albumAnchor').empty();
    
    
//    results[i].artworkUrl100.replace("100x100bb.jpg", "300x300bb.jpg");
//    document.getElementById("#albumAnchor").innerHTML = res;
    //set first album title to first element of the JSON data

    for (var i = 0; i < Math.min(data.resultCount); i++) {
        createDiv(i);
//        setTitle(i, data.results[i].collectionName);
        
        
        setImage(i, data.results[i].artworkUrl100.replace("100x100", "250x250"));
        
        
        
        
//        $( "#image1").append( "<div>Hello</div>" );
        
//        $("#foo").append(data.results[i].artworkUrl100);
        
//        var src = $('#image' + i).attr('src');
//        var newDiv = document.createElement('div');
////        newDiv.className='test';
//$('#foo').append('<img src="' + src + '" />');
           
//        var newDiv = document.createElement('div');
////        var title = document.getElementById("title" + i);
//        var img = document.getElementById("image" + i);
////        newDiv.appendChild(title);
//        newDiv.appendChild(img);
////        $( "#title" + i).append( setTitle(i, data.results[i].collectionName));
//        document.body.appendChild(newDiv);
       
        
//        setImage(i, $("#foo").append(data.results[i].artworkUrl100));
        
//        image(i, data.results[i].artworkUrl100);
        
//        var newelement = $('<div class="new">');
//        $('#mydiv').append(newelement);
//        //alt
//        $('<div class="new">').appendTo("#mydiv");
        
    }
}

//https://itunes.apple.com/lookup?id=1034548392&entity=song



function updateArtist(artistname) {
    var url = "https://itunes.apple.com/search?entity=album&term=" + artistname + "&callback=?";

    //callback, a function you pass to get called later (ie button)

    
    $.getJSON(url, updateData);
}



//call functions

function createDiv(n){
//  var title = "title" + n;
//    var image = "image" + n;
    
    
    
    $('#albumAnchor').append('<div id="div' + n + '"' + ' class="album"><h2 class="title"></h2><img  class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');
    
    
    
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

//function interactDiv(currentDiv){
//    if hover
//        incr div by width, height;
//    
//}



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