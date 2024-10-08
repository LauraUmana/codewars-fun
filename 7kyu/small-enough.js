//Description
//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//You can assume all values in the array are numbers.

//My solution
function smallEnough(a, limit){
    const numberArr = a.filter( (number) => number <= limit )
    return (numberArr.length === a.length)
  }

  //Other solutions
  function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

  function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}