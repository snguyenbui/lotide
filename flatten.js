const eqArrays = function(firstArray, secondArray) {

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let elem in firstArray) {
    if (firstArray[elem] !== secondArray[elem]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

let flattenOutput = [];
let recursionFlag = false;

const flatten = function(flattenArray) {

  if (!recursionFlag) {
    flattenOutput = [];
  }

  for (let elem of flattenArray) {
    if (!Array.isArray(elem)) {
      flattenOutput.push(elem);
    } else {
      recursionFlag = true;
      flatten(elem);
    }
  }

  recursionFlag = false;
  
  return flattenOutput;
};

assertArraysEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1]), [1]);