
// 230118 Daily Question

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    for (let i=matrix.length-2; i>-1;i--){
        for (let j=0; j<matrix[i].length; j++){
            let candidates = []
            for (let k=-1; k<2; k++){
                if (matrix[i+1][j+k] != undefined){
                    candidates.push(matrix[i+1][j+k])}
            }
            matrix[i][j] = matrix[i][j] + (Math.min(...candidates))
        }
    }
    return Math.min(...matrix[0])
};


/////////////////////// old attempt

/**
 * @param {number[][]} matrix
 * @return {number}
 */

// https://leetcode.com/problems/minimum-falling-path-sum/solutions/2906130/javascript-iteration-recursion-dynamic-programming-memoization/

// https://www.youtube.com/watch?v=OPwU0D0z1r4

var minFallingPathSum = function(matrix) {
    let n = matrix.length;

    // redraws the matrix as dp
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [...matrix[i]]
    }

    // starts from bottom n-1 is last row, n-2 is second from last
    for (let i = n - 2; i >= 0; i--) {
        minSum = Infinity;
    
    // look at each entry
        for (let j = 0; j < n; j++) {
    // for that row, add the one below it to it.
            dp[i][j] += dp[i+1][j];
    // if the space is the right-most 2, compare current vs the left
            if (j > 0) dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i+1][j-1]);
    // if the space is the left-most 2, compare current vs the right
            if (j < n-1) dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i+1][j+1]);
    // minSum is recalculated for each square of the matrix
            minSum = Math.min(minSum, dp[i][j])
        }
    }
    // if the matrix is greater than one square, then take the minSum
    return matrix.length > 1 ? minSum : matrix[0][0];
};

// try to replicate from bottom up with reverse... failed, needlessly complicated. failed on [[100,-42,-46,-41],[31,97,10,-10],[-58,-51,82,89],[51,81,69,-51]]

// the issue is when you reverse instead of bottom up, the ways one number feeds into another is still the same. So from bottom up it's row plus all the potentials of above row or antecedents

// with reverse, it's top down, so it's about how each row below fits everything of each element above. 




var minFallingPathSum = function(matrix) {
    let n = matrix.length;

    let reversed = matrix.reverse()
    let dp =  new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [...reversed [i]]
    }

    for (let i = 0; i < n-1; i++) {
        minSum = Infinity;
        for (let j = 0; j < n; j++) {
            console.log(i, j)
            dp[i+1][j] += dp[i][j];
            if (j > 0) {dp[i+1][j] = Math.min(dp[i+1][j], reversed[i][j] + dp[i+1][j-1])};
            if (j < n-1) {dp[i+1][j] = Math.min(dp[i][j], reversed[i][j] + dp[i+1][j+1])};
            minSum = Math.min(minSum, dp[i][j])
        }
    }
    return matrix.length > 1 ? minSum : matrix[0][0];
};


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let n = matrix.length;

    let reversed = matrix.reverse()
    let dp =  new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [...reversed [i]]
    }
console.log(dp)

    for (let i = 1; i < n; i++) {
        minSum = Infinity;
        for (let j = 0; j < n; j++) {
            dp[i][j] += dp[i-1][j];
            if (j > 0) {dp[i][j] = Math.min(dp[i][j], dp[i][j] - dp[i-1][j] + dp[i-1][j-1])};
            if (j < n-1) {dp[i][j] = Math.min(dp[i][j], dp[i][j] - dp[i-1][j] + dp[i-1][j+1])};
            minSum = Math.min(minSum, dp[i][j])
                    console.log(dp)
        }
    }
    return matrix.length > 1 ? minSum : matrix[0][0];
};