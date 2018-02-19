// Based on https://www.freecodecamp.org/challenges/dna-pairing FreeCodeCamp exercise

/*

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()

*/

/*
    pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
    pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
    pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
  const dna = [
    ['A', 'T'],
    ['C', 'G']
  ];
  return str
    .split('')
    .map(element =>
      dna
        .find(pairing => pairing.includes(element))
        .reduce(
          (acc, e) =>
            e !== element
              ? [...acc, e]
              : acc, [element]
        )
    );
}

console.log("ATCGA", pairElement("ATCGA"));
console.log("TTGAG", pairElement("TTGAG"));
console.log("CTCTA", pairElement("CTCTA"));
