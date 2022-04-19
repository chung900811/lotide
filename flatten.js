const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array) {
  let flatArray = [];
  array.forEach(function(element) {
    if (!Array.isArray(element)) {
      flatArray.push(element);
    } else {
      element.forEach(function(innerElement) {
        flatArray.push(innerElement);
      });
    }
  });
  return flatArray;
  
};

	module.exports = flatten;
