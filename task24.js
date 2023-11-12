// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
// Tests using the lower case function
var text = 'Hello World';
console.log("Is text.toLowerCase() === 'hello world'? I predict True.");
console.log(text.toLowerCase() === 'hello world');
// Numerical tests
var number1 = 20;
var number2 = 30;
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);
console.log("Is number1 === number2? I predict False.");
console.log(number1 === number2);
console.log("Is number1 >= 20? I predict True.");
console.log(number1 >= 20);
console.log("Is number2 <= 40? I predict True.");
console.log(number2 <= 40);
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log("Is x > 3 and y < 15? I predict True.");
console.log(x > 3 && y < 15);
console.log("Is x > 7 or y < 5? I predict True.");
console.log(x > 7 || y < 5);
// Test whether an item is in an array
var colors = ['red', 'green', 'blue'];
console.log("Is 'green' in colors? I predict True.");
console.log(colors.includes('green'));
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow'));
