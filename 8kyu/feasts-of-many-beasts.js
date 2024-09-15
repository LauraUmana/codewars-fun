//Description
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//My solution
function feast(beast, dish) {
    //get the first and last letter of the beast name
    //get the first and last letter of the dish 
      //compare both sets
      const firstBeast = beast[0]
      const lastBeast = beast[beast.length - 1]
      const firstDish = dish[0]
      const lastDish = dish[dish.length - 1]
      return (firstBeast === firstDish) && (lastBeast === lastDish)
    }

//Other solutions
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}