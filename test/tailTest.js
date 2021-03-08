const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// let testCode1 = tail([1,2]);
// console.log(testCode1);
// assertEqual(testCode1.length, 1);

// let testCode2 = tail([]);
// console.log(testCode2);
// assertEqual(testCode2[0], undefined);

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [2] for [1, 2]', () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});