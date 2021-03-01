// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  /* if (actual === expected) {
     console.log("✅  Assertion Passed: " + actual + " === " + expected);
   } else {
     console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
   }*/
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};
 
const tail = function(array) {
  let arrayTail = [];
  for (let x = 0; x < array.length - 1; x++) {
    arrayTail[x] = array[x + 1];
  }
  return arrayTail;
};

// TEST CODE
/*
 assertEqual("Lighthouse Labs", "Bootcamp");
 assertEqual(1, 1);
 assertEqual("Foobar", "Foobar");
 assertEqual(1, 0);
 assertEqual('1', 1);
 */

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

let testCode1 = tail([1]);
console.log(testCode1);
assertEqual(testCode1[0], undefined);

let testCode2 = tail([]);
console.log(testCode2);
assertEqual(testCode2[0], undefined);