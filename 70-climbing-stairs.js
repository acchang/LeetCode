// 24 Jan 17

// Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// https://www.youtube.com/watch?v=Y0lT9Fck7qI

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    var dp = new Array(45)
    dp[1] = 1;
    dp[2] = 2;

    for (let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};




/////////////////
/**
 * @param {number} n
 * @return {number}
 */
// pretty easy as soon as I figured out fibonacci
// https://leetcode.com/problems/climbing-stairs/submissions/858575018/
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
/* Runtime
Runtime
58 ms
Beats
96.31%
Memory
42 MB
Beats
31.39% */


var climbStairs = function(n) {
    let fibo = [1, 2]
    for (let i=3; i<n+1; i++){
        fibo.push(fibo[i-2]+fibo[i-3])
    }
    return fibo[n-1]
};