//Description
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//My solution
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

//Other solution
function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }