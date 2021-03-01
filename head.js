// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
   if (actual === expected) {
     console.log(`✅  Assertion Passed: + ${actual} === ${expected}`);
   } else {
     console.log(`🛑 Assertion Passed: + ${actual} === ${expected}`);
   }
 };
 
 const head = function(array) {
   return array[0];
 }

 // TEST CODE
 /*
 assertEqual("Lighthouse Labs", "Bootcamp");
 assertEqual(1, 1);
 assertEqual("Foobar", "Foobar");
 assertEqual(1, 0);
 assertEqual('1', 1);
 */

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], undefined));
assertEqual(head(["Hello"]), "Hello");