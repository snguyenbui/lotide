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

const middle = function (dataArray) {
  
  let isEven = isOddOrEven(dataArray.length);
  
  if (isEven === null) {
    return [];
  }

  if (isEven) {
    return [dataArray[dataArray.length/2 - 1], dataArray[dataArray.length/2]];
  } else {
    return [dataArray[Math.floor(dataArray.length/2)]];
  }
}

const isOddOrEven = function (arrayLength) {
  if (arrayLength <= 2) { 
    return null;
  } else if (arrayLength % 2 === 0){
    return true;
  } else {
    return false;
  }
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
