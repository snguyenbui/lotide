const takeUntil = function(array, callback) {
  const takenArray = [];
  for (let elem of array) {
    if (!callback(elem)) {
      takenArray.push(elem);
    } else {
      return takenArray;
    }
  }
  return takenArray;
};

module.exports = takeUntil;