/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let ans = []

    let counter = 0
    while (counter<matrix[0].length){
        ans.push([])
        counter++
    }
    // why matrix[0].length and not matrix.length? same thing.
    // for(let k=0;k<matrix[0].length;k++)ans.push([])

    for (let i=0; i<matrix.length;i++){
        for (let j=0; j<matrix[i].length;j++){
                ans[j][i]= matrix[i][j]
            }
        }
    return ans
};