// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅ Assertion Passed: + ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: + ${actual} !== ${expected}`);
  }
};
 
 
const eqArrays = function(firstArray, secondArray) {

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let arrayIndex = 0; arrayIndex < firstArray.length; arrayIndex++) {
    if (firstArray[arrayIndex] !== secondArray[arrayIndex]) {
      return false;
    }
  }

  return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);