/**
 * @param {number[][]} matrix
 * @return {number}
 */

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