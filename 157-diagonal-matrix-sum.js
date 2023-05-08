// https://leetcode.com/problems/matrix-diagonal-sum/description/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let answer = 0
    for (let i = 0; i<mat.length; i++){
        answer += mat[i][i] + mat[i][mat.length-1-i]
    }
    let center = mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
    return mat.length%2 == 0 ? answer : answer - center
};