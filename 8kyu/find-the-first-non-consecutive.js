//Description
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
//The numbers could be positive or negative and the first non-consecutive could be either too!

//My solution
function firstNonConsecutive (arr) {
    let stray;
    for(let i = 0; i < arr.length-1; i++) {
      let firstNumber = arr[i] + 1;
    let nextNumber = arr[i + 1]
      if(firstNumber !== nextNumber) {
         return stray = nextNumber;
      }
    } if (!stray) return null
    
  }

  //Other solutions
  function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

  function firstNonConsecutive (arr) {
    for (var i = 1; i < arr.length; i++) {
      var cur = arr[i];
      var prev = arr[i-1];
      
      if (cur - prev > 1) {
        return cur;
      }
    }
    return null;
  }