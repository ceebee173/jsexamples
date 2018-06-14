// www.codewars.com
// a function to transpose DNA

function DNAStrand(dna){
    var newDNA = "";
    for (var i = 0;i<dna.length;i++){       
        if (dna.charAt(i) == "T"){
            newDNA = newDNA + "A";
        }
        else if (dna.charAt(i) == "A"){
            newDNA = newDNA + "T";
        }
        else if (dna.charAt(i) == "C"){
            newDNA = newDNA + "G";
        }
        else if (dna.charAt(i) == "G"){
            newDNA = newDNA + "C";
        }
    }
     return newDNA;
  }

DNAStrand("ATTGC")

//  Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
//  Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
//  Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");