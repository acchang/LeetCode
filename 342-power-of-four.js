/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let exponent = 0
    while (4**exponent<=n){
        if (n - (4**exponent) == 0){return true}
        else exponent++
    }
    return false
};