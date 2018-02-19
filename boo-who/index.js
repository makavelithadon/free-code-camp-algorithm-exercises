// Based on https://www.freecodecamp.org/challenges/boo-who FreeCodeCamp exercise

/*

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects

*/

/*
    booWho(true) should return true.
    booWho(false) should return true.
    booWho([1, 2, 3]) should return false.
    booWho([].slice) should return false.
    booWho({ "a": 1 }) should return false.
    booWho(1) should return false.
    booWho(NaN) should return false.
    booWho("a") should return false.
    booWho("true") should return false.
    booWho("false") should return false.
*/

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === typeof true;
}

console.log(true, booWho(true));
console.log(false, booWho(false));
console.log([1, 2, 3], booWho([1, 2, 3]));
console.log([].slice, booWho([].slice));
console.log({ "a": 1 }, booWho({ "a": 1 }));
console.log(1, booWho(1));
console.log(NaN, booWho(NaN));
console.log("a", booWho("a"));
console.log("true", booWho("true"));
console.log("false", booWho("false"));

