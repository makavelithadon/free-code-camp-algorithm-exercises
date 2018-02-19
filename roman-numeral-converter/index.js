// Based on https://www.freecodecamp.org/challenges/roman-numeral-converter FreeCodeCamp exercise

/*

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()

*/

/*
          convertToRoman(4) should return "IV".
          convertToRoman(5) should return "V".
          convertToRoman(9) should return "IX".
          convertToRoman(12) should return "XII".
          convertToRoman(16) should return "XVI".
          convertToRoman(29) should return "XXIX".
          convertToRoman(44) should return "XLIV".
          convertToRoman(45) should return "XLV"
          convertToRoman(68) should return "LXVIII"
          convertToRoman(83) should return "LXXXIII"
          convertToRoman(97) should return "XCVII"
          convertToRoman(99) should return "XCIX"
          convertToRoman(500) should return "D"
          convertToRoman(501) should return "DI"
          convertToRoman(649) should return "DCXLIX"
          convertToRoman(798) should return "DCCXCVIII"
          convertToRoman(891) should return "DCCCXCI"
          convertToRoman(1000) should return "M"
          convertToRoman(1004) should return "MIV"
          convertToRoman(1006) should return "MVI"
          convertToRoman(1023) should return "MXXIII"
          convertToRoman(2014) should return "MMXIV"
          convertToRoman(3999) should return "MMMCMXCIX"
    */

function convertToRoman(num) {
  num = num.toString();
  const correspondances = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM', 'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM']
  ];
  return num
    .split('')
    .reduce(
      (acc, number, index) => [...acc, correspondances[num.length - index - 1][num[index] - 1]], [])
    .join('');
}

console.log(4, convertToRoman(4));
console.log(5, convertToRoman(5));
console.log(9, convertToRoman(9));
console.log(12, convertToRoman(12));
console.log(16, convertToRoman(16));
console.log(29, convertToRoman(29));
console.log(44, convertToRoman(44));
console.log(45, convertToRoman(45));
console.log(68, convertToRoman(68));
console.log(83, convertToRoman(83));
console.log(97, convertToRoman(97));
console.log(99, convertToRoman(99));
console.log(500, convertToRoman(500));
console.log(501, convertToRoman(501));
console.log(649, convertToRoman(649));
console.log(798, convertToRoman(798));
console.log(891, convertToRoman(891));
console.log(1000, convertToRoman(1000));
console.log(1004, convertToRoman(1004));
console.log(1006, convertToRoman(1006));
console.log(1023, convertToRoman(1023));
console.log(2014, convertToRoman(2014));
console.log(3999, convertToRoman(3999));

  // MMMCMXCIX
