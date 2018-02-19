// Based on https://www.freecodecamp.org/challenges/pig-latin FreeCodeCamp exercise

/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()

*/

/*
    translatePigLatin("california") should return "aliforniacay".
    translatePigLatin("paragraphs") should return "aragraphspay".
    translatePigLatin("glove") should return "oveglay".
    translatePigLatin("algorithm") should return "algorithmway".
    translatePigLatin("eight") should return "eightway".
*/

function translatePigLatin(str) {
  str = str.split('');
  let suffix = 'ay';
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const consonants = [];
  while (!vowels.includes(str[0])) {
    consonants.push(str[0]);
    str = str.slice(1)
  }
  suffix = consonants.length ? consonants.join('') + suffix : 'w' + suffix;
  return str.join('') + suffix;
}

console.log(translatePigLatin('eight'));
