// Based on https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers FreeCodeCamp exercise

/*

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

*/

/*
    sumFibs(1) should return a number.
    sumFibs(1000) should return 1785.
    sumFibs(4000000) should return 4613732.
    sumFibs(4) should return 5.
    sumFibs(75024) should return 60696.
    sumFibs(75025) should return 135721.
*/

const isOdd = num => num % 2 !== 0;

function sumFibs(num) {
  const arr = [1, 1];

  for (let i = 1, j = num; i <= j; i++) {
    const length = arr.length;
    const newNumber = arr[length - 1] + arr[length - 2];
    if (newNumber > num) break;
    arr.push(newNumber);
  }

  return arr
    .filter(isOdd)
    .reduce((acc, number) => acc + number, 0);
}

console.log(sumFibs(1000));
