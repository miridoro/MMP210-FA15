//global variables
//var albumID;
var audio = null;
//var playing = false;
var current_album = "";


// when the enter key is pressed, updateArtist function is called

document.getElementById('myText').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        //ASCII code for enter key
        if (keyCode == '13') {
            //        updateArtist(document.getElementById("myText").value);
            updateArtist($('#myText').val());
        } //end if

    } //end function




// function accesses apple's iTunes API
function updateArtist(artistname) {
    //pause any music that is currently playing, if
    if (audio != null) {
        audio.pause();
    }
    var url = "https://itunes.apple.com/search?entity=album&term=" + artistname + "&callback=?";
    //    console.log(url);

    //updateData is a callback function that gets passed to be called later when data received
    $.getJSON(url, updateData).fail(JsonFailCallback);

} // end udateArtist() function


function JsonFailCallback() {
    
    console.log( "JSON request failed" );
}


// function accesses JSON data
function updateData(data) {

    $('#albumAnchor').empty();
    //    playing = false;


    for (var i = 0; i < Math.min(data.resultCount); i++) {
        createDiv(i);


        //this function sets img value to an image from JSON data
        setImage(i, data.results[i].artworkUrl100.replace("100x100", "250x250"));

        var img = $('#div' + i + ' img');
        //append collectionId to data of each image within div
        img.data('albumId', data.results[i].collectionId);

        //when img gets clicked, call coverClick function
        // bind creates new function that sets variable "this" to img when called
        img.click(coverClick.bind(img));


    } //end for loop

} // end updateData() function








function coverClick() {

    console.log("");
    console.log("The album was: " + current_album);

    var this_id = this.data("albumId");

    // if current album is not equal to previous album
    // go ahead and retrieve the first .m4a file within JSON data

    if (current_album != this_id) {

        current_album = this_id;
        console.log("The album is now: " + current_album);

        var urlSong = ("https://itunes.apple.com/lookup?id=" + this_id + "&entity=song" + "&callback=?");

        $.getJSON(urlSong, function (data) {

            if (audio != null) {
                audio.pause();
            }
            var url = data.results[1].previewUrl;
            //create an audio object, play audio
            audio = new Audio(url);
            audio.play();

        }).fail(JsonFailCallback);
    } else {
        audio.pause();
        //need to set current_album to empty string, else cannot play song twice in row
        current_album = ""; 
    }

} // end coverClick() function




// this function appends divs to the albumAnchor main div, which can be found in index.html

function createDiv(n) {

    $('#albumAnchor').append('<div id="div' + n + '"' + ' class="album"><h2 class="title"></h2><img class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');

} // end createDiv() function




function setTitle(n, value) {
    //    document.getElementById("title" + n).innerText = value;  
    $('#div' + n + ' .title').text(value);

} //end setTitle() function




function setImage(n, value) {
    //    document.getElementById("image" + n).src = value;
    $('#div' + n + ' img').attr('src', value);

} // end setImage() function


