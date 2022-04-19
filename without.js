const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

const without = function (array, itemsRemove) {
  return array.filter(function (item) {
    for (let x = 0; x < itemsRemove.length; x++) {
      if (item === itemsRemove[x]) {
        return false
      }
    }
    return true
  })
}
	module.exports = without
