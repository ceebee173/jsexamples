// www.codewars.com
// function to reverse every word that is more than 5 characters long

function spinWords(s){
    strSplit = s.split(" ");
    console.log("strSplit = " + strSplit);
    var newStr = "";
    for (i=0;i<strSplit.length;i++){
        if (strSplit[i].length < 5){
            newStr = newStr + strSplit[i] + " ";
        }
        else {
            newStr = newStr + strSplit[i].split("").reverse().join("") + " ";
        }
    }
    newStr = newStr.slice(0,newStr.length - 1);
    console.log("newStr = " + newStr);
    return newStr;
}

spinWords("Hey fellow warriors");