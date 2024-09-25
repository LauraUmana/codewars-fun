//Description
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//My solution
function shortcut (string) {
    const result = string.split("").filter( (el) => el !== "a" && el !== "e" && el !== "i" && el !== "o" &&el !== "u" )
    return result.join("");
  }

//Other solutions
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }

  function shortcut(string){
    let vowels = 'aeiou';
    
    let result = [];
    
      for( let i = 0; i < string.length; i++){
      if(!vowels.includes(string[i])){
        result.push(string[i]);
      }
    }
      return result.join('');
    };