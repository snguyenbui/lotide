const letterPositions = function(sentence) {
  const results = {};
  let positionCounter = 0;
  for (const letter of sentence) {
    if (sentence[letter] !== ' ') {
      if (results[letter]) {
        results[letter].push(positionCounter);
      } else {
        results[letter] = [positionCounter];
      }
    }
    positionCounter++;
  }
  return results;
};

module.exports = letterPositions;