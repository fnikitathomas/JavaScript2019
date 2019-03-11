const { departmentStores } = require('./recursion-departmentStores-data');
const { tree } = require('./recursion-tree-data');

/**
 * Using recursion, find the object in the node tree that has a given id.
 * You will be looping through the data in *recursion-find-id-data.json*.
 *
 * @param {number} id
 * @returns {Object} the object that the id is in
 *
 * @example
 * findId(1234);
 * // This should return:
 * {
 *    id: 567897,
 *    name: 'Consultants, Reviewers, and National Geographic Exploration',
 *    activityId: 'ZNRAE749BSD0CTGHY888SSSZ',
 *    nodeType: 'activity',
 *    suppressed: false,
 *    hidden: false
 * }
 */

/**
 * The value on the right hand-side of a for...of statement must be
 * an iterable object or you will generate a TypeError, the problem
 * being as the loop traverses the array: the values of `data` are
 * varying with each iteration as either an object or an array. The
 * short circuit evaluation ensures that if `data` is really not an
 * array evaluation will continue with the empty array because it's
 * both truthy and iterable.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
 */

const findId = (data, id) => {
  for(let obj of data || []){
    if(obj.id === id) return obj
    let f = findId(obj.children, id)
    if(f) return f
  }
}

/**
 * Using recursion, remove the object from the node tree that has a given id.
 * You will be looping through the data in *recursion-delete-store.json*
 *
 * @param {number} id
 * @returns {Object} the entire data source, except it won't have the
 * object with the matching id
 *
 * @example
 * //deleteStore(567897);
 * // This should return:
 * {
 *   id: 1234567,
 *   store: 'Walmart',
 *   // ...
 * },
 * {
 *   branches: [
 *     // This branch is removed because it has id 567897
 *     {
 *       id: 567890,
 *       store: 'Walmart',
 *       // ...
 *     }
 *   ]
 * }
 */

const deleteStore = (stores, id) => {
  for(let obj of stores || []){
    if(obj.id === id) return obj
    let f = deleteStore(obj.branches, id)
    if(f){
      obj.branches.splice(obj.branches.findIndex((e) => e.id === id),1) // splice mutates original!
      return stores
    }
  }
}

module.exports = {
  findId,
  deleteStore
};
