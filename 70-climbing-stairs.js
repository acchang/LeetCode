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