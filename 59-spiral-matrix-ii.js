/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let output = Array(n).fill().map(()=>Array(n).fill())
    let counter = 1
    let left = 0, right = n, top = 0, bottom = n;
    while (left<right && top<bottom){
// top row
         for (let i=left; i<right; i++){(output[top][i])}
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
};  
