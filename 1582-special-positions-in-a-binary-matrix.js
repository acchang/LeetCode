/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let horiz = 0
    for (let i=0;i<mat.length;i++){
        if (mat.reduce((acc,cV) => acc + cV,0) == 1){horiz++}
        }
    console.log(horiz)
    let columnParts = []
    let vertical = 0
    for (let j=0;j<mat.length;j++){
        for (let k=0;k<mat.length;k++){
            columnParts.push(mat[k][j])
        }
        if (columnParts.reduce((acc,cV) => acc + cV,0) == 1){vertical++}
        columnParts=[]   
    }
    console.log(vertical)
    return Math.max(horiz,vertical)
};

