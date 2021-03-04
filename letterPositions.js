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

const letterPositions = function(sentence) {
  const results = {};
  let positionCounter = 0;
  for (const letter of sentence) {
    if (sentence[letter] !== ' ') {
      if (results[letter]) {
        results[letter].push(positionCounter);
      } else {
        results[letter] = [positionCounter];
      }
    }
    positionCounter++;
  }
  return results;
};

const test = letterPositions('hello');
console.log(test);
assertArraysEqual(test.h, [0]);