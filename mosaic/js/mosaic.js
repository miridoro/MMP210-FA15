//document.getElementById("myText").value = "Hello!";


document.getElementById('myText').onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    //ASCII code for enter key
    if (keyCode == '13') {
        // Enter pressed
        updateArtist(document.getElementById("myText").value);
    }
}





function updateData(data) {
    //prints to concole
    //    console.log(data);

    //set first album title to first element of the JSON data

    for (var i = 0; i < Math.min(5, data.resultCount); i++) {
        setTitle(i, data.results[i].collectionName);
        setImage(i, data.results[i].artworkUrl100);
    }

}


function updateArtist(artistname) {
    var url = "https://itunes.apple.com/search?entity=album&term=" + artistname + "&callback=?";

    //callback, a function you pass to get called later (ie button)
    $.getJSON(url, updateData);

}



//call function








function setValue(id, value) {                     
    document.getElementById(id).text = value;        
}


function setTitle(n, value) {

    document.getElementById("title" + n).innerText = value;  
}

function setImage(n, value) {
    document.getElementById("image" + n).src = value;
}



//     
//function userInput() {
////    document.getElementById('myText').text = input;
//    var text=document.getElementById('myText').value;
//    
//}        



