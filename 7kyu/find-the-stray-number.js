//Description
//You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//Complete the method which accepts such an array, and returns that single different number.

//The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//My solution
function stray(numbers) {
    //There will only be 2 different numnbers
    //So we can sort it and then compare
    
    let a = numbers.sort();
      
    //if the first 2 numbers are not different, then the diff number needs 
    //to be at the end of the arr
    if(a[0] !== a[1]) {
      return a[0]
    } 
    return a[a.length-1]
    
  }

  //Other solutions
  const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

  const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]