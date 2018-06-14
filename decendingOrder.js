// www.codewars.com
// a function to list of numbers and return them in decending order

function descendingOrder(n){
    var strNum = n.toString();
    var strNumReversed = strNum.split("").sort(function(a, b){return b-a}).join("");
    console.log(n,parseInt(strNumReversed));
    return parseInt(strNumReversed);
}

descendingOrder(123456789);

/*
Test.assertEquals(descendingOrder(0), 0)
Test.assertEquals(descendingOrder(1), 1)
Test.assertEquals(descendingOrder(123456789), 987654321)
*/