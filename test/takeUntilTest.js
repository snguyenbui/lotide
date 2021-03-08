const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeUntil', () => {
  it(`returns [1, 2, 5, 7, 2] for [${data1}],  x => x < 0`, () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it(`returns ['I've', 'been', 'to', 'Hollywood'] for [${data2}],  x => x === ','`, () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});