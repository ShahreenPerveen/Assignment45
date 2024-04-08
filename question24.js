//1.Tests for equality and inequality with strings:
// True
console.log("apple" === "apple"); // Equality
// False
console.log("apple" !== "apple"); // Inequality
//2.Tests using the lower case function:
// True
console.log("HELLO".toLowerCase() === "hello"); // Lower case equality
// False
console.log("WORLD".toLowerCase() === "hello"); // Lower case inequality
//3.Numerical tests:
// True
console.log(5 > 3); // Greater than
console.log(5 >= 5); // Greater than or equal to
console.log(3 < 5); // Less than
console.log(3 <= 3); // Less than or equal to
// False
console.log(2 === 2); // Equality
console.log(2 !== 2); // Inequality
//4.Tests using "and" and "or" operators:
// True
console.log(5 > 3 && 10 < 20); // AND
console.log(5 > 3 || 10 < 5); // OR
// False
console.log(2 === 2 && 10 < 5); // AND
console.log(2 !== 2 || 10 < 5); // OR
//5.Test whether an item is in an array:
var myArray = [1, 2, 3, 4, 5];
// True
console.log(!myArray.includes(6)); // Not in array
//6.Test whether an item is not in an array:
var anotherArray = [1, 2, 3, 4, 5];
// True
console.log(!anotherArray.includes(6)); // Not in array
// False
console.log(!anotherArray.includes(3)); // In array
