/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let result
    if (n<=2){result=1} else {result = fib(n-1)+fib(n-2)}
    return result
};