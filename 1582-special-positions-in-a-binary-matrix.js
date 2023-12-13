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

    for (let j=0;j<mat.length;j++){
        for (let k=0;k<mat.length;k++){
            columnParts.push(mat[k][j])
        }
        column.push(columnParts.reduce((acc,cV) => acc + cV,0))
        columnParts=[]
    }
    
    for (let l=0;l<mat.length;l++){
        for (let m=0;m<mat.length;m++){
            console.log(mat[l][m])
            if (mat[l][m]==1 && row[l]==1 && column[m]==1){
                ans++
            }
        }
    }
    return ans
};