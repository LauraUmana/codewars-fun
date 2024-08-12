//Description

// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

//My solution
function getMissingElement(superImportantArray){
  
    for( let i = 0; i <= 9; i++) {
    if (superImportantArray.indexOf(i) === -1) return i
    }
    
  }

  //Other solution
  function getMissingElement(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
  }