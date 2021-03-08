const middle = function(dataArray) {
  
  let isEven = isOddOrEven(dataArray.length);
  
  if (isEven === null) {
    return [];
  }

  if (isEven) {
    return [dataArray[dataArray.length / 2 - 1], dataArray[dataArray.length / 2]];
  } else {
    return [dataArray[Math.floor(dataArray.length / 2)]];
  }
};

const isOddOrEven = function(arrayLength) {
  if (arrayLength <= 2) {
    return null;
  } else if (arrayLength % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = middle;