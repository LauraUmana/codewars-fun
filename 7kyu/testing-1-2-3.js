//Description
//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

//Write a function which takes a list of strings and returns each line prepended by the correct number.

//The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//Earlier solution I thought of
var number = function (arr) {
  let numberArr = [];

  for (let i = 1; i <= arr.length; i++) {
    numberArr.push(`${i}: ${arr[i - 1]}`);
  }
  return numberArr;
};

//I thought how I could streamline it a bit more and wrote my solution
let number = (arr) => arr.map((x, i) => `${i + 1}: ${arr[i]}`);
