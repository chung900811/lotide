const assertEqual = require("./assertEqual");

const findKey = function(object, callback) {
  let result;
  for (const item in object) {
    if (callback(object[item])) {
      result = item;
      break;
    }
  }
  return result;
};

	module.exports = findKey
