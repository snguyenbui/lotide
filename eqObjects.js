const eqArrays = require('./eqArrays')

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const item in object1) {
    if (typeof (object1[item]) === 'object' || object2[item] === 'object') {
      if (!eqObjects(object1[item], object2[item])){
        return false;
      };
    } else {
      if (Array.isArray(object1[item])) {
        if (!eqArrays(object1[item], object2[item])) {
          return false;
        }
      } else {
        if (object1[item] !== object2[item]) {
          return false;
        }
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: {c:2}})) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: { c: 4 }, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
// console.log(eqObjects({ a: { y: { c: 4 }, z: 1 }, b: 2 }, { a: { y: { c: 4 }, z: 1 }, b: 2 })) // => true
