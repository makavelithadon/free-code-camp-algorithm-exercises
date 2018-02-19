// Based on https://www.freecodecamp.org/challenges/finders-keepers FreeCodeCamp exercise

/*

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.shift()
Array.prototype.slice()

*/

/*
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
    dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
    dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
    dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
    dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
    dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/

function dropElements(arr, func) {
  // Drop them elements.
  const arr2 = [...arr];
  for (let i = 0, j = arr2.length; i < j; i++) {
    if (func(arr2[i])) {
      arr = arr2.slice(i);
      break;
    }
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));
