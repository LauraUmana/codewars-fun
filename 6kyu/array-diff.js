//Description
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//My solution
function arrayDiff(a, b) {
  
    return a.filter( number => {
      const isNumberInTheArray = b.includes(number)
      return !isNumberInTheArray
    })
   }

//Other solutions
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  function arrayDiff(a, b) {
    return a.filter(x => b.indexOf(x) == -1 );
  }

  function arrayDiff(a, b) {
    if(b.length==0 || a.length==0)
      return a;
    for(let i =0;i<a.length;i++){
      for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
          a.splice(i,1);
          i--;
        }
      }
    }
    return a;
  }