// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// easy done in 2 min

/**
 * @param {number[][]} grid
 * @return {number}
 */

//69% speed, 30% memory

var countNegatives = function(grid) {
    let counter = 0
    for (const m of grid){
        for (const n of m){
            if (n<0){counter++}
        }
    }
    return counter
};

// try to use sorting: 23% speed; 30% memory

var countNegatives = function(grid) {
    let counter = 0
    for (const m of grid){
        for (let i=m.length-1; i>-1; i--){
            if (m[i]>=0){break}
            counter++ 
        }
    }
    return counter
};

// binary search: 97% speed, 58% memory
// *sorted in non-increasing order both row-wise and column-wise*

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    const n = grid[0].length;
    // Iterate on all rows of the matrix one by one.
    for (const row of grid) {
        // Using binary search find the index
        // which has the first negative element.
        let left = 0, right = n - 1;
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            if (row[mid] < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // 'left' points to the first negative element,
        // which means 'n - left' is the number of all negative elements.
        count += n - left;
    }
    return count;
};




// try to use sorting: 59% speed; 30% memory

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let counter = 0
    let rowlength = grid[0].length
    for (const row of grid){
        let left = 0, right = rowlength-1;
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            if (row[mid] < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        counter += rowlength-left
    }
    return counter
};