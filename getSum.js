// www.codewars.com
// function to sum all the numbers between two numbers - for +ve integers ==> n(n+1)

function GetSum( a,b ){
   return ((Math.max(a,b)*(Math.max(a,b)+1)/2) - (Math.min(a,b)*(Math.min(a,b)+1)/2)) + Math.min(a,b);

   //var max = Math.max(a,b);
   //var min = Math.min(a,b);
   //return ((max*(max+1)/2) - (min*(min+1)/2)) + min;
}

console.log(GetSum(0,-1));
console.log(GetSum(0,1));