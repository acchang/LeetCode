/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n, total = 1) {
    // console.log(n-total)
    // console.log("total:", total, "n-t", n-total, total === n, total > n)
    // if ((n-total) == 0){return true} else if ((n-total) < 0){return false}
    // if (n-total <= 0){return ((n-total) == 0)}
    // if (total === n ){return true}
    // else if (total > n){return false}
    if (total === n ){return true} else if (total > n){return false}
    total += total
    return isPowerOfTwo(n, total)
};

// Will keep getting undefined unless you return the recursive statement.

// this is also good and more straightforward:
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1){return true} else if (n%2 !=0 || n==0){return false}
     return isPowerOfTwo(n/2)
 };
 