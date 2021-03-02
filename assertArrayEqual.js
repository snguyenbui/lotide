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

const assertArrayEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);