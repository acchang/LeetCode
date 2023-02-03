// https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

let convert = function(s, numRows) {
    if (numRows == 1) {return s;} 

    let rowArray = new Array(numRows).fill("")
    let chunkLength = 2*numRows-2
    let chunkArray = []
    let position
    for (let i = 0; i < s.length; i += chunkLength) {
    chunkArray.push(s.slice(i, i + chunkLength))
    }

    for (let i=0; i<chunkArray.length; i++){
        for (let j=0; j<chunkArray[i].length; j++) {
        j < numRows ? position = j : position = numRows - (j%numRows) -2
        rowArray[position] = rowArray[position].concat(chunkArray[i][j])
        }
    }
    
    return rowArray.join("")
}



// official solution:
// https://leetcode.com/problems/zigzag-conversion/solutions/2868537/zigzag-conversion/?orderBy=most_relevant


let convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    let n = s.length;
    let sections = Math.ceil(n / (2 * numRows - 2.0));
    let numCols = sections * (numRows - 1);

    let matrix = new Array(numRows).fill(0).map(() => new Array(numCols).fill(' '));
    
    let currRow = 0, currCol = 0;
    let currStringIndex = 0;

    // Iterate in zig-zag pattern on matrix and fill it with string characters.
    while (currStringIndex < n) {
        // Move down.
        while (currRow < numRows && currStringIndex < n) {
            matrix[currRow][currCol] = s[currStringIndex];
            currRow++;
            currStringIndex++;
        }

        currRow -= 2;
        currCol++;

        // Move up (with moving right also).
        while (currRow > 0 && currCol < numCols && currStringIndex < n) {
            matrix[currRow][currCol] = s[currStringIndex];
            currRow--;
            currCol++;
            currStringIndex++;
        }
    }

    let answer = matrix.map(row => row.join('')).join('');
    return answer.replaceAll(' ', '');
};