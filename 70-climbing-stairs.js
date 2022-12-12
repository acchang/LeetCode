/**
 * @param {number} n
 * @return {number}
 */
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

var climbStairs = function(n) {
    let fibo = [1, 2]
    for (let i=3; i<n+1; i++){
        fibo.push(fibo[i-1]+fibo[i-2])
    }
    console.log(fibo)
    console.log(fibo[n-1])
    return fibo[n-1]
};