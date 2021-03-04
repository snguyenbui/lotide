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

const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {

}

// for (elem of array)
// if(callback(elem)) {return someArray}
// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array. 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

