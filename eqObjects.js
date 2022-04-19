const assertEqual = require("./assertEqual");
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const objectKey1 = Object.keys(object1)
  const objectKey2 = Object.keys(object2)
   if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
   }
   for (let x of objectKey1) {
     if (Array.isArray(objectKey1[x]) && Array.isArray(objectKey2[values])) {
       if (!eqArrays(objectKey1, objectKey2)) {
         return false;
       } else {
         if (objectKey1 !== objectKey2) {
           return false;
          }
        }
      }
    }
    return true;
  }
  
  module.exports = eqObjects
