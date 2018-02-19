// Based on https://www.freecodecamp.org/challenges/missing-letters FreeCodeCamp exercise

/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

*/

/*
    fearNotLetter("abce") should return "d".
    fearNotLetter("abcdefghjklmno") should return "i".
    fearNotLetter("bcd") should return undefined.
    fearNotLetter("yz") should return undefined.
*/

function fearNotLetter(str) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let missing;
  const alphabetIndex = alphabet.indexOf(str[0]);
  let strIndex = 0;
  for (let i = alphabetIndex, j = alphabetIndex + str.length; i < j; i++) {
    if (str.charCodeAt([strIndex++]) !== alphabet[i].charCodeAt(0)) {
      missing = !missing ? alphabet[i] : missing + alphabet[i];
      strIndex--;
    }
  }
  return missing;
}

console.log('abce', fearNotLetter("abce"));
console.log('abcdefghjklmno', fearNotLetter("abcdefghjklmno"));
console.log('bcd', fearNotLetter("bcd"));
console.log('yz', fearNotLetter("yz"));

