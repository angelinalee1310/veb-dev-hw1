/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  var s = n
  return function() {
      let nc = n
      n += 1
      return nc
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/