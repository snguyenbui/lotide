// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: + ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: + ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  letterCount = {};
  for (const letter in sentence) {
    if (letterCount[letter]){
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
}