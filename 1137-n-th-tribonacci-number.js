/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function(n) {
    let tribo = [0, 1, 1]
    for (let i=3; i<n+1; i++){
        tribo.push(tribo[i-3]+tribo[i-2]+tribo[i-1])
    }
    return tribo[n]
};

// https://leetcode.com/problems/n-th-tribonacci-number/submissions/858578630/
/* 
Runtime
82 ms
Beats
69.51%
Memory
42.1 MB
Beats
16.53%
*/
