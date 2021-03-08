const assert = require('chai').assert;
const countOnly = require('../countOnly');

const input = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const key = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false };

const expected = {
  "Jason": 1,
  "Fang": 2,
};

describe('#countLetters', () => {
  it(`returns { "Jason": 1, "Fang": 2, } for ([${input}], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })`, () => {
    assert.deepEqual(countOnly(input, key), expected);
  });
});