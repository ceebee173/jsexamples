// www.codewars.com
// function to remove 'WUB' text from sone titles

function songDecoder(song){
    var wubsRemoved = song.replace(/(WUB)+/g," ").trim();
    console.log(wubsRemoved);
}

songDecoder("AWUBWUBWUBBWUBWUBWUBC");

//Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
//Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
//Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
