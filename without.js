const without = function(source, itemsToRemove) {

  let outputArray = [];
  for (let sourceIndex = 0; sourceIndex < source.length; sourceIndex++) {
    let validItem = true;
    for (let itemIndex = 0; itemIndex < itemsToRemove.length; itemIndex++) {
      if (itemsToRemove[itemIndex] === source[sourceIndex]) {
        validItem = false;
      }
    }
    if (validItem) {
      outputArray.push(source[sourceIndex]);
    }
  }
  return outputArray;
};

module.exports = without;