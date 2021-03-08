const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;