# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @snguyenbui/lotide`

**Require it:**

`const _ = require('@snguyenbui/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters("sentence", () => {})`: counts every letter of a given sentence and returns an object containing that count
* `countOnly([array], obj{elem: true, elem1: false, ...})`: counts desired elements from an object in an array and returns the counts as an object {key: count, ...}
* `findKeyByValue(obj{key: value, ...}, "value")`: finds the first key that has the desired value
* `findKey(obj{key: value, ...}, callback())`: finds the first key that matches the callback function
* `flatten([array])`: turns a given array to a single-level array
* `head([array])`: returns the first element of the array
* `letterPositions("string")`: takes a single string and returns an object {'char': [indexes of char], ...}
* `map([array], callback())`: takes an array and returns an array with the callback function applied to each element of the initial array
* `middle([array])`: returns the middle element of an array if the array is longer than 3. Returns an empty array if length is less than 2. Even length arrays return a 2 element array
* `tail([array])`: returns a copy of the array without the first element
* `takeUntil([array], callback())`: returns an array that has each element of the given array until the callback function is false
* `without([baseArray], [removalArray])`: removes an element from the removal array from the base array and returns the base array
