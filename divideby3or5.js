// www.codewars.com
// a function which sums all the numbers from 0 to n (but not including n) that are divisable by 3 or 5

function solution(number){
    var sum = 0;
    var i = 1;
    while (i < number){
        if((i%3==0)||(i%5==0)){
            sum = sum + i;
        }
        i++;
    }
    return sum;
}

solution(10);

/*
function test(n, expected) {
    let actual = solution(n)
    Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
  }
  
  Test.describe("basic tests", function(){
    test(10,23)
  })
*/