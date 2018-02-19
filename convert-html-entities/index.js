// Based on https://www.freecodecamp.org/challenges/sorted-union FreeCodeCamp exercise

/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()

*/

/*
    convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
    convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
    convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
    convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
    convertHTML("Shindler's List") should return Shindler&​apos;s List.
    convertHTML("<>") should return &​lt;&​gt;.
    convertHTML("abc") should return abc.
*/

const correspondances = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&apos;'
};

const convertHTML = str => String(str).replace(/(&|<|>|'|")/gi, corr => correspondances[corr]);

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Shindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));


