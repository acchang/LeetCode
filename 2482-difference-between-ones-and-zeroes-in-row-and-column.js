/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let totalRow = []
    let totalCol = []
    let diff = []
    let diffRow
    let totalColSum 
    for (let i=0;i<grid.length;i++){
        totalRow.push(
            (grid[i].filter((x) => x == 1).length) - 
            (grid[i].filter((x) => x == 0).length)
        )
    }
    for (let j=0;j<grid[0].length;j++){
            totalColSum = 0
        for (let k=0;k<grid.length;k++){
            if (grid[k][j] == 1){totalColSum++} else {totalColSum--}
        }
        totalCol.push(totalColSum)
    }

    for (let l=0;l<grid.length;l++){
        diffRow = []
        for (let m=0;m<grid[0].length;m++){
            diffRow.push(totalRow[l] + totalCol[m])
        }
        diff.push(diffRow)
    }

    return diff

};