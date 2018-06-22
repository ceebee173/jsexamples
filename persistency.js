// www.codewars.com
// a function which takes in a number and returns the number of product persistencies within that number

function persistence(n){
    var digits = n.toString().split("").map(function(t){return parseInt(t)})
    var n = 0;
    while (digits.length > 1){
        n++;
        var sum = 1;
        for (var i = 0; i<digits.length; i++){
            sum = sum * digits[i];
        };
        digits = sum.toString().split("").map(function(t){return parseInt(t)});
    }
    console.log("n",n);
}

persistence(39);
persistence(4);
persistence(25);
persistence(999);
