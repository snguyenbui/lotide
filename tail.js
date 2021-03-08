const tail = function(array) {
  let arrayTail = [];
  for (let x = 0; x < array.length - 1; x++) {
    arrayTail[x] = array[x + 1];
  }
  return arrayTail;
};

module.exports = tail;