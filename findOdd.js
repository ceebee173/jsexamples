// www.codewars.com
// give an array of numbers there will be one (and only one) number which appears an odd number
// of times.   Return that number

function findOdd(A) {
    var sortedArray = A.sort(function(a,b){return a-b});
    console.log("sortedArray = " + sortedArray);
    var i = 0;
    while (i < sortedArray.length){
        var a = sortedArray.lastIndexOf(sortedArray[i]);
        if (a%2!=0){
            i++
        }
        else{
            console.log("sortedArray[i] = " + sortedArray[i]);
            return sortedArray[i];
        }
    }
  }

  findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,21]);