//Description
//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

//My solution
var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    return test === original;
  };

//Other solution
function isAnagram(str1, str2){
    return sortWord(str1) == sortWord(str2);
}

function sortWord(word){
    return word.toLowerCase().split("").sort().join("");
}

