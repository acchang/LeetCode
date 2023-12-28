/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0){return 0}
    else if (n<=2){return 1} 
    else {return fib(n-1)+fib(n-2)}
};


// using DP:

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = {}
    let result
    for(let i = 0; i<n+1; i++){
        if (i<2){result=i}
        else {result = memo[i-1] + memo [i-2]}
        memo[i]=result
        console.log(memo)
    }
    return memo[n]
};
