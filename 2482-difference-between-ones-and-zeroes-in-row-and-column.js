/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let onesRow = []
    let onesCol = []
    let zerosRow = []
    let zerosCol = []
    let diff = []
    let diffRow
    let oneColSum 
    let zeroColSum 
    for (let i=0;i<grid.length;i++){
        onesRow.push(grid[i].filter((x) => x == 1).length)
        zerosRow.push(grid[i].filter((x) => x == 0).length)
    }
    for (let j=0;j<grid[0].length;j++){
            oneColSum = 0
            zeroColSum = 0
        for (let k=0;k<grid.length;k++){
            if (grid[k][j] == 1){oneColSum++} else {zeroColSum++}
        }
        onesCol.push(oneColSum)
        zerosCol.push(zeroColSum)
    }

    for (let l=0;l<grid.length;l++){
        diffRow = []
        for (let m=0;m<grid[0].length;m++){
            diffRow.push(onesRow[l] + onesCol[m] - zerosRow[l] - zerosCol[m])
        }
        diff.push(diffRow)
    }

    return diff

};