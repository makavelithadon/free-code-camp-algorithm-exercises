// Based on https://www.freecodecamp.org/challenges/sum-all-primes FreeCodeCamp exercise

/*

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()

*/

/*
    sumPrimes(10) should return a number.
    sumPrimes(10) should return 17.
    sumPrimes(977) should return 73156.
*/

const isOdd = num => num % 2 !== 0;

function sumPrimes(num) {
  let numbers = [];
  const primeNumbers = [];
  for (let i = 2, j = num; i <= j; i++) {
    numbers.push(i);
  }
  while (numbers.length) {
    numbers = [numbers[0], ...numbers.filter(number => number % numbers[0] !== 0)];
    primeNumbers.push(numbers.shift());
  }
  //console.log(primeNumbers);
  return primeNumbers.reduce((acc, number) => acc + number, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
