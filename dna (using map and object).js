// www.codewars.com
// a function to transpose DNA

function DNAStrand(dna){
    var transposeTable = {
      C : 'G',
      G : 'C',
      A : 'T',
      T : 'A'
    };
    var dnaString = dna.split("");
    var dnaArrayNew = dnaString.map(function(currentValue){
        return transposeTable[currentValue];
    });
    return (dnaArrayNew.join(''));
}

console.log(DNAStrand("ATTGC"));

//  Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
//  Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
//  Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");