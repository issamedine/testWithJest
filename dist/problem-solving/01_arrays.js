"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */
var sum = exports.sum = function sum(array) {
  var reducer = function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  };

  return array.reduce(reducer);
};
sum([1, 2, 3, 4]);