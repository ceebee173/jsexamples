// from www.codewars.com
// a function to take an integer as input and return the binary representation of that number

var countBits = function(n) {
    var nToBinary = n.toString(2);
    console.log("n= " + n + " : bits = " + nToBinary);
    var numberOfOnes = nToBinary.split(1).length - 1;
    console.log("numberOfOnes = " + numberOfOnes);
  };

countBits(16);