// Based on https://www.freecodecamp.org/challenges/smallest-common-multiple FreeCodeCamp exercise

/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

*/

/*
    smallestCommons([1, 5]) should return a number.
    smallestCommons([1, 5]) should return 60.
    smallestCommons([5, 1]) should return 60.
    smallestCommons([1, 13]) should return 360360.
    smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  function range(min, max) {
    var arr = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  var multiple = Math.min(...arr);
  range(Math.min(...arr), Math.max(...arr)).forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}

console.log([1, 5], smallestCommons([1, 5]));
console.log([5, 1], smallestCommons([5, 1]));
console.log([1, 13], smallestCommons([1, 13]));
console.log([23, 18], smallestCommons([23, 18]));
