// https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rowArray = new Array(numRows);
    let chunkLength = 2*numRows-2

    for (let i=0;i<s.length;i++){
        if (i%chunkLength === 0){s.split()}


    }

    // add 1 to each numrows
    // skip first then put in each numRows again
    


    //rows is how many down
    //down is how many across
    
};



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