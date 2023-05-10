/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// https://leetcode.com/problems/spiral-matrix/
// inspired by https://www.youtube.com/watch?v=BJnMZNwUk1M
// uses pointers and update; python solution.


var spiralOrder = function(matrix) {
    let output = [];
    let left = 0, right = matrix[0].length, top = 0, bottom = matrix.length;
    while (left<right && top<bottom){
// top row
         for (let i=left; i<right; i++){output.push(matrix[top][i])}
         top++
// right column
        for (let j=top; j<bottom;j++){output.push(matrix[j][right-1])}
        right--
        if (left>=right || top>=bottom){break} 
// bottom row
        for (let k=right-1; k>left-1; k--){output.push(matrix[bottom-1][k])}
        bottom--
// left column
        for (let l=bottom-1; l>top-1; l--){console.log(l, left), output.push(matrix[l][left])}
        left++
    }
    return output
};