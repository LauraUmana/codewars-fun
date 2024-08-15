//Description
// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

//My solution
function boredom(staff){
    let sumBoredom = 0;
    let arrStaff = Object.values(staff);
    
    for(let i = 0; i < arrStaff.length; i++) {
      if( arrStaff[i] === 'accounts') {
        sumBoredom += 1
      } else if (arrStaff[i] === 'finance') {
        sumBoredom += 2
      }else if (arrStaff[i] === 'canteen') {
        sumBoredom += 10
      }else if (arrStaff[i] === 'regulation') {
        sumBoredom += 3
      } else if (arrStaff[i] === 'trading') {
        sumBoredom += 6
      } else if (arrStaff[i] === 'change') {
        sumBoredom += 6
      } else if (arrStaff[i] === 'IS') {
        sumBoredom += 8
      } else if (arrStaff[i] === 'retail') {
        sumBoredom += 5
      } else if (arrStaff[i] === 'cleaning') {
        sumBoredom += 4
      } else if (arrStaff[i] === 'pissing about') {
        sumBoredom += 25
      }
    }
    
    if (sumBoredom <= 80) {
      return 'kill me now'
    } else if ( sumBoredom > 80 && sumBoredom < 100) {
      return 'i can handle this'
    } else {
      return 'party time!!'
    }
  }

  //Other solution
  function boredom(staff){
    var map = {
      accounts:1,
      finance:2,
      canteen:10,
      regulation:3,
      trading: 6,
      change:6,
      IS:8,
      retail:5,
      cleaning:4,
      'pissing about':25
    };
    
    var score = Object.keys(staff).reduce(
      function(a,b){       
        return a+map[staff[b]]
     },0); 
    
    return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
 }