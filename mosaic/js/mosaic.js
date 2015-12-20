var albumID;
var song;
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



function updateData(data) {

    $('#albumAnchor').empty();
    playing = false;


    //set first album title to first element of the JSON data

    for (var i = 0; i < Math.min(data.resultCount); i++) {
        createDiv(i);
        
        //        setTitle(i, data.results[i].collectionName);

        setImage(i, data.results[i].artworkUrl100.replace("100x100", "250x250"));

        var img = $('#div' + i + ' img')
        img.data('albumId', data.results[i].collectionId);


        img.click(coverClick.bind(img));

        //console.log($('#div' + i + ' img').data('albumId'));

    } //end for loop
    
} // end udateData function



function updateSongID(array) {

    for (var i = 0; i < array.length; i++) {

        urlSong = ("https://itunes.apple.com/lookup?id=" + array[i] + "&entity=song" + "&callback=?");

        var cover_id = "#div" + i + " .image"

        $.getJSON(urlSong, function (data) {
            var url = data.results[1].previewUrl;
            console.log(cover_id + ": " + url);
        });

    }  // end for loop

} // end updateSongID



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


// this function appends divs to the albumAnchor main div, which can be found in index.html

function createDiv(n) {
  
    $('#albumAnchor').append('<div id="div' + n + '"' + ' class="album"><h2 class="title"></h2><img class="image" src="placeholder.jpg" alt="placeholder" width="200px"></div>');
    
}




function setValue(id, value) {                     
    document.getElementById(id).text = value;        
}


function setAlbumID(n, value) {
    $('#div' + n + ' img').data('albumId', value);

}


function setTitle(n, value) {
    //    document.getElementById("title" + n).innerText = value;  
    $('#div' + n + ' .title').text(value);
}

function setImage(n, value) {
    //    document.getElementById("image" + n).src = value;
    $('#div' + n + ' img').attr('src', value);

}


