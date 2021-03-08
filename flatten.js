let flattenOutput = [];
let recursionFlag = false;

const flatten = function(flattenArray) {

  if (!recursionFlag) {
    flattenOutput = [];
  }

  for (let elem of flattenArray) {
    if (!Array.isArray(elem)) {
      flattenOutput.push(elem);
    } else {
      recursionFlag = true;
      flatten(elem);
    }
  }

  recursionFlag = false;

  return flattenOutput;
};

module.exports = flatten;