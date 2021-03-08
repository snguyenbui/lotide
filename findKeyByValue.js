const findKeyByValue = function(keyValuePairs, targetValue) {
  for (let item in keyValuePairs) {
    if (keyValuePairs[item] === targetValue) {
      return item;
    }
  }
};

module.exports = findKeyByValue;