//Description
//Write a function that doubles every second integer in a list, starting from the left.

//My solution
function doubleEveryOther(a) {
    return a.map((c,i) => i % 2 === 0 ? c : c*2)
     }

//Other solutions
function doubleEveryOther(a) {
    for(let i = 1; i < a.length; i += 2) {
         a[i] *= 2;
    }
    return a;
    }