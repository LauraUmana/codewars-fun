//Description
//Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//My solution
function nameShuffler(str){
    let arr = [];
    const str2Arr = str.split(" ")
    arr.push(str2Arr[1])
    arr.push(str2Arr[0])
    return arr.join(" ")
    
  }

  //Other Solution
  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }