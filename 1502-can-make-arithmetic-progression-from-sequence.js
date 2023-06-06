// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

// 29% speed, 55% memory

var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>b-a)
    let firstGap = arr[0]-arr[1]
    for (i=1; i<arr.length-1; i++){
        if (Math.abs(arr[i]-arr[i+1]) != firstGap){return false}
    }
    return true
}

// no better solutions
