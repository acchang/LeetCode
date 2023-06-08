// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// easy done in 2 min

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let counter = 0
    for (const m of grid){
        for (const n of m){
            if (n<0){counter++}
        }
    }
    return counter
};

