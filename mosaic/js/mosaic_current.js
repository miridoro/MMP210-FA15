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
var array = [];
var urlSong_array = [];
var song;
var audio;
var playing;




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
    var url = "https://itunes.apple.com/search?entity=album&term=" + artistname + "&limit=20&callback=?";
    //    console.log(url);

    //callback, a function you pass to get called later (ie button)


    $.getJSON(url, updateData);
}



function updateData(data) {
    //    console.log(data);


    $('#albumAnchor').empty();
    playing = false;


    //set first album title to first element of the JSON data

    for (var i = 0; i < Math.min(data.resultCount); i++) {
        createDiv(i);
        //        setTitle(i, data.results[i].collectionName);


        setImage(i, data.results[i].artworkUrl100.replace("100x100", "250x250"));
        //        console.log(data.results[i].artworkUrl100.replace("100x100", "250x250"));

        var img = $('#div' + i + ' img')
        img.data('albumId', data.results[i].collectionId);


        img.click(coverClick.bind(img));





        //console.log($('#div' + i + ' img').data('albumId'));
        //callback passes function to be called later



        //        updateSongID(albumID);
        //        albumID = data.results[i].collectionId;
        //        array.push(albumID);




    }

    //console.log(array);
    //    updateSongID(array);


}



function updateSongID(array) {

    //    getSong(urlSong);



    for (var i = 0; i < array.length; i++) {


        //  urlSong_array.push("https://itunes.apple.com/lookup?id=" + array[i] + "&entity=song");
        urlSong = ("https://itunes.apple.com/lookup?id=" + array[i] + "&entity=song" + "&callback=?");

        var cover_id = "#div" + i + " .image"

        //         setSong(urlSong_array[i]);
        $.getJSON(urlSong, function (data) {
            var url = data.results[1].previewUrl;
            console.log(cover_id + ": " + url);
            //$('#div' + i + " .image").click(function () {window.open(url);});

            // $('#div' + i + " .image").click(function () {window.open(url);});

        });


    }


    //    console.log(urlSong);
    //    console.log(urlSong_array[6].results.previewUrl);
}


function updateSongData(data) {
    setSong(data.results[1].previewUrl);
    console.log(song);


}

//when its already true, just need to pause



function coverClick() {
    // window.open(url);
    //console.log(this);
    console.log(this.data("albumId"));




    if (!playing) {

        var this_id = this.data("albumId");
        var urlSong = ("https://itunes.apple.com/lookup?id=" + this_id + "&entity=song" + "&callback=?");

        $.getJSON(urlSong, function (data) {

            var url = data.results[1].previewUrl;
            audio = new Audio(url);
            audio.play();
            playing = true;

        });
    } else {
        audio.pause();
        playing = false;
    }


}



function coverClick2() {
    // window.open(url);
    //console.log(this);
    console.log(this.data("albumId"));

    var this_id = this.data("albumId");

    urlSong = ("https://itunes.apple.com/lookup?id=" + this_id + "&entity=song" + "&callback=?");

    $.getJSON(urlSong, function (data) {
        var url = data.results[1].previewUrl;
        //        console.log(url);
        audio = new Audio(url);


        if (!playing) {
            audio.play();
            playing = true;
        } else {
            audio.pause();
            playing = false;
        }

    });

}




function setSong(url) {

    //    window.open(url);
    //    setSong(song);

    // $('.image').attr('onClick', coverClick);
    // $('.image').attr('onClick', function () {window.open(url);};

    //$('.image').attr('onClick', "\"window.open(" + url + ")\"" );

    //$('.image').click(function () {window.open(url);});


}



//call functions

function createDiv(n) {
    //  var title = "title" + n;
    //    var image = "image" + n;



    $('#albumAnchor').append('<div id="div' + n + '"' + ' class="album"><h2 class="title"></h2><img class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');



    //    console.log('<div id="div' + n + '"' + ' class="album"><h2 class="title">Album Title</h2><img  class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');

    //    $('#albumAnchor').append(' a' +  n);


}




function setValue(id, value) {                     
    document.getElementById(id).text = value;        
}

function setAlbumID(n, value) {
    $('#div' + n + ' img').data('albumId', value);

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