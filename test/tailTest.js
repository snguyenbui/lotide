const assert = require('chai').assert;
const tail = require('../tail');

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