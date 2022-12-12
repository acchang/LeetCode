/**
 * @param {number} n
 * @return {number}
 */
// pretty easy as soon as I figured out fibonacci
// https://leetcode.com/problems/climbing-stairs/submissions/858575018/
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
/* Runtime
60 ms
Beats
94.10%
Memory
42.6 MB
Beats
7.90% */


var climbStairs = function(n) {
    let fibo = [1, 2]
    for (let i=3; i<n+1; i++){
        fibo.push(fibo[i-2]+fibo[i-3])
    }
    console.log(fibo)
    console.log(fibo[n-1])
    return fibo[n-1]
};