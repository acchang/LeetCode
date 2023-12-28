/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n, total = 1) {
    console.log(n-total)
    console.log("total:", total, "n-t", n-total, (n-total) == 0)
    // if ((n-total) == 0){return true} else if ((n-total) < 0){return false}
    if (n-total <= 0){return ((n-total) == 0)}
    total += total
    console.log(total)
    isPowerOfTwo(n, total)
};

// I keep getting undefined. why?
