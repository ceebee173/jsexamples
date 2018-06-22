function towerBuilder(nFloors) {
  var outArray = [];
  var maxSize = (2*nFloors) - 1;
  for (var i = 0; i < nFloors; i++){
    numOfStars = ((2*i)+1); 
    numOfSpaces = (maxSize - numOfStars) / 2;
    outArray[i] = " ".repeat(numOfSpaces) + "*".repeat((2*i)+1) + " ".repeat(numOfSpaces);
  }
  return outArray;
}

towerBuilder(4);