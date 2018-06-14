// www.codewars.com
// a function which takes in a string of words and returns th elength of the shortest word

function findShort(s){
    strArray = s.split(" ");
    strArraySorted = strArray.sort(function(a,b){
            return (a.length - b.length);
        })
    return strArraySorted[0].length;
}

findShort("turns out random test cases are easier than writing out basic ones");

//Test.describe("Example tests",_=>{
//    Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//    Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//    });
