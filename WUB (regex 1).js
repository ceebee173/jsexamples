// www.codewars.com
// function to remove 'WUB' text from sone titles

function songDecoder(song){
    var wubsRemoved = song.replace(/WUB/g," ");
    var removeSpaces = wubsRemoved.split(" ");
    var newString = removeSpaces.filter(checkNotEmptyString);
    return newString.join(" ").trim();
}

function checkNotEmptyString (value){
    return value != "";
}

songDecoder("WUBAWUBBWUBCWUB");

//Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
//Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
//Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
