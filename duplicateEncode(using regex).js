// www.codewars.com
// a function to replace replicated letters with ")" and unique letters with ")"

function duplicateEncode(word){
    var newWordArray = [];
    var wordArray = word.split("");
    for(var i = 0;i<wordArray.length;i++){
        if (isAlphaNumeric(wordArray[i])){
            var re = new RegExp(wordArray[i],"gi"); 
        }
        else{
            var temp = "\\" + wordArray[i];
            var re = new RegExp(temp,"gi"); 
        }
        var re = new RegExp(re,"gi");
        var charOccurances = word.match(re).length;
        if (charOccurances == 1){
            newWordArray.push("(")
        }
        else{
            newWordArray.push(")");
        }   
    }
    return newWordArray.join("");
}

function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

duplicateEncode("din");
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("(( @");

/*
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
*/

//var str = "That's hot!";
//var patt1 = /a/g;
//var result = str.match(patt1);
//document.getElementById("demo").innerHTML = result.length;