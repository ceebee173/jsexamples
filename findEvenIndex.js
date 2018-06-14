// www.codewars.com
// for a particluar array index, sum all the numbers to the left of that index 
// and all the numbers to the right of that index and report the array index if the 
// two sums are equal

function findEvenIndex(arr){
    for(var i = 0; i < arr.length; i++){
        // calculate sum to left of index
        var left_sum = 0;
        var right_sum = 0;
        for(var l = 0; l < i; l++){
            var left_sum = left_sum + arr[l];
        }
        // calculate sum to right of index
        var r = i + 1;
        for(r; r < arr.length; r++){
            var right_sum = right_sum + arr[r];
        }
        if (left_sum == right_sum){
            return i;
            }
    }
    return -1;
}
var result = findEvenIndex([1,2,3,4,3,2,1]);
console.log("result = " + result);