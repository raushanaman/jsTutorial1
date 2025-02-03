const name = "Aman Raushan"
const age = 20

console.log(`My name is ${name} and my age is ${age}`)

// learn string functions for various operation performed on screen online

console.log(name.charAt(2));
console.log(name.indexOf('R'));
console.log(name.toLowerCase());
console.log(name.toUpperCase())

const subString = name.substring(1,6)//it exclude the character present at 6th index
console.log(subString);
//slicing operator works on negative index also which traverse from last index

//example:
const sli = name.slice(-9, 4)
console.log(sli);



