/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n<=2){return 1} else {return fib(n-1)+fib(n-2)}
};