const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let elem in firstArray) {
    console.log(firstArray[elem], secondArray[elem])
    if (Array.isArray(firstArray[elem]) || Array.isArray(secondArray[elem])) {
      if (!eqArrays(firstArray[elem], secondArray[elem])) {
        return false;
      }
    } else {
      if (firstArray[elem] !== secondArray[elem]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqArrays;

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
