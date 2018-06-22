function firstNonRepeatingLetter(s) {
    sArray = s.split("");
    for(var i = 0; i<sArray.length; i++){
        if(sArray.indexOf(sArray[i]) == sArray.lastIndexOf(sArray[i])){
            return sArray[i];
        }
    }
  }

  var x = firstNonRepeatingLetter('a');
  console.log("x:",x);

/*
  Test.describe('Simple Tests', function() {
    it('should handle simple tests', function() {
      Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
      Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
      Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
    });
  });
*/