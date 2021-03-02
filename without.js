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

const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (source, itemsToRemove) {

  let outputArray = [];
  for (let sourceIndex = 0; sourceIndex < source.length; sourceIndex++)
  {
    let validItem = true;
    for (let itemIndex = 0; itemIndex < itemsToRemove.length; itemIndex++){
      if (itemsToRemove[itemIndex] === source[sourceIndex]){
        validItem = false;
      }
    }
    if (validItem) {
      outputArray.push(source[sourceIndex]);
    }
  }
  return outputArray;
};

assertArraysEqual(without(["1", "2", "3", '3', '3'], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without([1, 2, "3"], [1, 2, "3"]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
