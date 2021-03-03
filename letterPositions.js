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

const letterPositions = function(sentence) {
  const results = {};
  let positionCounter = 0;
  for (const letter of sentence) {
    if (sentence[letter] !== ' '){
      if (results[letter]){
        results[letter].push(positionCounter);
      } else {
        results[letter] = [positionCounter];
      }
    }
    positionCounter++;
  }
  return results;
};

test = letterPositions('hello')
console.log(test);
assertArraysEqual(test.h, [0]);