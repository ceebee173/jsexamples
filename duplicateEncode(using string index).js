// www.codewars.com
// a function to replace replicated letters with ")" and unique letters with ")"

function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    console.log("unique",unique);

}

duplicateEncode("din");
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("(( @");