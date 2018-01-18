// Write a function called add7 that takes one number and returns that number + 7.
function add7(x) {
  return x + 7
}
console.log( add7(5) ) // => 12

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(x, y) {
  return x * y
}
console.log( multiply(3, 4) ) // => 12

// Write a function called capitalize that takes a string and returns that 
// string with only the first letter capitalized. Make sure that it can take 
// strings that are lowercase, UPPERCASE or BoTh.

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log( capitalize("odin") ) // => "Odin"
console.log( capitalize("ODIN") ) // => "ODIN"
console.log( capitalize("oDiN") ) // => "ODiN"

// Write a function called lastLetter that takes a string and returns the very 
// last letter of that string:

function lastLetter(str) {
  const strLength = str.length
  return str.slice(strLength - 1)
}
console.log( lastLetter("ABCD") ) // => "D"
console.log( lastLetter("EFGH") ) // => "H"