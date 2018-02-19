// Based on https://www.freecodecamp.org/challenges/arguments-optional FreeCodeCamp exercise

/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object

*/

/*
    addTogether(2, 3) should return 5.
    addTogether(2)(3) should return 5.
    addTogether("http://bit.ly/IqT6zt") should return undefined.
    addTogether(2, "3") should return undefined.
    addTogether(2)([3]) should return undefined.
*/

function addTogether(...args) {
  if (!args.length || args.some(arg => typeof arg !== 'number'))
    return undefined;
  else if (args.length === 2 && args.every(arg => typeof arg === 'number'))
    return args[0] + args[1];
  else return arg => typeof arg === 'number' ? args[0] + arg : undefined;
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
