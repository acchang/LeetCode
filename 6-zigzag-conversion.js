// https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 51% run, 82% memory.

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
// 5% run, 5% memory

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

// also book solution, faster:
// 95% run 65% memory

let convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    let answer = "";
    let n = s.length;
    let charsInSection = 2 * (numRows - 1);
    
    for (let currRow = 0; currRow < numRows; ++currRow) {
        let index = currRow;

        while (index < n) {
            answer += s[index];

            // If current row is not first or last,
            // then we have to add one more character of current section.
            if (currRow != 0 && currRow != numRows - 1) {
                let charsInBetween = charsInSection - 2 * currRow;
                let secondIndex = index + charsInBetween;

                if (secondIndex < n) {
                    answer += s[secondIndex];
                }
            }
            // Jump to same row's first character of next section.
            index += charsInSection;
        }
    }
    
    return answer;
};
