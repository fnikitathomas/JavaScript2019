/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */

 /**
  * Research into performance amongst the 3 for loops has led me to continue using the humble for.
  * See - http://jsben.ch/BQhED  for a test on simple assignment. Note that for array usage it is
  * best to cache the array length for use in the loop.
  */
const forEach = (arr, callback) => {
  let length = arr.length // caching the array length
  for(var i = 0;i < length;i++){
    callback(arr[i],i,arr)
  }
};

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
const showFirstAndLast = arr => {
  let a0 = []
  arr.forEach(str => a0.push(str[0] + str[str.length - 1])) // Big performance boost using string index
  return a0
};

module.exports = {
  forEach,
  showFirstAndLast
};
