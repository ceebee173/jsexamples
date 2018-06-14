// www.codewars.com
// a function to capitalise the first letter of every word in a sentence

function JadenCase (str) {
    strArray = str.split(" ");
    var newStr = "";
    for(var i = 0;i<strArray.length;i++){
        var FirstLetter = strArray[i].charAt(0);
        var UCFirstLetter = FirstLetter.toUpperCase();
        var stringWithoutFirstLetter = strArray[i].slice(1);
        newStr = newStr + UCFirstLetter + stringWithoutFirstLetter + " ";
    }
    console.log(newStr.trim());
    return newStr.trim();
}

JadenCase("How can mirrors be real if our eyes aren't real");