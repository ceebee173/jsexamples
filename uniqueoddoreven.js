function checkOdd(currentValue){
    return currentValue % 2 != 0;
}

function checkEven(currentValue){
    return currentValue % 2 == 0;
}

function iqTest(numbers){
    numbersArray = numbers.split(" ");
    numbersArrayOrig = numbersArray.slice();
    numbersArray.sort(function(a,b){return b % 2 - a % 2})
    var index = 0;
    if (numbersArray[1] % 2 == 0){
        console.log("odd number is unique");
        index = numbersArrayOrig.findIndex(checkOdd);
        index++;
        console.log("index = ",index);
    }
    else{
        console.log("even number is unique");
        index = numbersArrayOrig.findIndex(checkEven);
        index++;
        console.log("index = ",index);
    } 
  }

iqTest("2 4 7 8 10");