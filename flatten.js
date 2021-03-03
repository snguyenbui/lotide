
const flatten = function(flattenArray) {
  
  let flattenOutput = [];
  for (flattenIndex = 0; flattenIndex < flattenArray.length; flattenIndex++) {
 
  let nestedArrays = [];

    if(!Array.isArray(flattenArray[flattenIndex])){
      flattenOutput.push(flattenArray[flattenIndex]);
    } else if (Array.isArray(flattenArray[flattenIndex])) {
      nestedArrays = flattenArray[flattenIndex];
      for (nestedIndex = 0; nestedIndex < nestedArrays.length; nestedIndex++) {
        flattenOutput.push(nestedArrays[nestedIndex]);
      }
    }
  }
  console.log(flattenOutput);
}

flatten([1, 2, [3, 4], 5, [6]]);