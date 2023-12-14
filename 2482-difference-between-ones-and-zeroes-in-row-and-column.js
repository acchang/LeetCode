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

// not my solution, slower:

var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const res = Array.from({ length: m }, () => Array(n).fill(0));
    const onesRow = grid.map(row => row.filter(val => val === 1).length);
    const onesCol = Array.from({ length: n }, (_, j) => grid.map(row => row[j]).filter(val => val === 1).length);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = onesRow[i] + onesCol[j] - (n - onesRow[i]) - (m - onesCol[j]);
        }
    }

    return res;    
};
