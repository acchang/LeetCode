/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let row = []
    let column = []
    let columnParts = []
    let ans = 0
    
    for (let i=0;i<mat.length;i++){
        row.push(mat[i].reduce((acc,cV) => acc + cV,0))
        }

    for (let j=0;j<mat[0].length;j++){
        for (let k=0;k<mat.length;k++){
            columnParts.push(mat[k][j])
        }
        column.push(columnParts.reduce((acc,cV) => acc + cV,0))
        columnParts=[]
    }

    for (let l=0;l<mat.length;l++){
        for (let m=0;m<mat[0].length;m++){
            if (mat[l][m]==1 && row[l]==1 && column[m]==1){
                ans++
            }
        }
    }
    return ans
};


// faster and slicker solution:


var numSpecial = function(mat) {
    function getColumnSum(colIdx) {
        return mat.reduce((sum, row) => sum + row[colIdx], 0);
    }
    // helper function that reduces a column

    let special = 0;
    for (let row of mat) {
    // go thru each row
        if (row.reduce((acc, val) => acc + val, 0) === 1) {
    // if row reduced is 1
            const colIdx = row.indexOf(1);
    // get the index of the 1
            special += getColumnSum(colIdx) === 1;
    // add to special if the sum of the column is 1
        }
    }

    return special;    
};

