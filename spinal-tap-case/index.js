// Based on https://www.freecodecamp.org/challenges/spinal-tap-case FreeCodeCamp exercise

/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()

*/

/*
    spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
    spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
    spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
    spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
    spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str
    .replace(/\s/g, '-')
    .replace(/\_/g, '')
    .replace(/\w/g, function (corr, gap, chain) {
      if (corr.toUpperCase() === corr) {
        if (gap === 0) {
          return corr.toLowerCase();
        } else if (chain[gap - 1] !== '-') {
          return `-${corr.toLowerCase()}`;
        } else {
          return corr.toLowerCase();
        }
      }
      return corr;
    });
}

console.log(spinalCase('The_Andy_Griffith_Show'));


