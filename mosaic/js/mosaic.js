var albumID;
var audio;
var playing;


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
    var url = "https://itunes.apple.com/search?entity=album&term=" + artistname + "&callback=?";
    //    console.log(url);

    //updateData is a callback function that gets passed to be called later
    $.getJSON(url, updateData);
    
} // end udateArtist function



// accesses JSON data

function updateData(data) {

    $('#albumAnchor').empty();
    playing = false;


    //set first album title to first element of the JSON data

    for (var i = 0; i < Math.min(data.resultCount); i++) {
        createDiv(i);
        
        
        //this function sets img value to an image from JSON data
        setImage(i, data.results[i].artworkUrl100.replace("100x100", "250x250"));

        var img = $('#div' + i + ' img');
        //append collectionId as type data to each image within div
        img.data('albumId', data.results[i].collectionId);

        //when img gets clicked, call coverClick function
        img.click(coverClick.bind(img));


    } //end for loop
    
} // end udateData function

 




//when its already true, just need to pause



function coverClick() {
    
    //check that the clicked image has a unique ID
    console.log(this.data("albumId"));


// if playing == false, or if song is not playing
// go ahead and retrieve the first .m4a file within JSON data
    
    if (!playing) {

        var this_id = this.data("albumId");
        var urlSong = ("https://itunes.apple.com/lookup?id=" + this_id + "&entity=song" + "&callback=?");

        $.getJSON(urlSong, function (data) {

            var url = data.results[1].previewUrl;
            //create an audio object, play audio
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
  
    console.log(this.data("albumId"));

    var this_id = this.data("albumId");

    urlSong = ("https://itunes.apple.com/lookup?id=" + this_id + "&entity=song" + "&callback=?");

    $.getJSON(urlSong, function (data) {
        var url = data.results[1].previewUrl;
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


// this function appends divs to the albumAnchor main div, which can be found in index.html

function createDiv(n) {
  
    $('#albumAnchor').append('<div id="div' + n + '"' + ' class="album"><h2 class="title"></h2><img class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');
    
} // end createDiv function





function setAlbumID(n, value) {
    $('#div' + n + ' img').data('albumId', value);
}


function setTitle(n, value) {
    //    document.getElementById("title" + n).innerText = value;  
    $('#div' + n + ' .title').text(value);
    
} //end setTitle function




function setImage(n, value) {
    //    document.getElementById("image" + n).src = value;
    $('#div' + n + ' img').attr('src', value);

} // end setImage function


