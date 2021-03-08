const findKey = function(obj, callback) {
  for (let elem in obj) {
    if (callback(obj[elem])) {
      return elem;
    }
  }
};

module.exports = findKey;