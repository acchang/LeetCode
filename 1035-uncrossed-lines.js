// https://leetcode.com/problems/uncrossed-lines/submissions/948430189/
// Just repurposed solution for 1143
// https://www.youtube.com/watch?v=4w7M2EHfvpo

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
// };
// var longestCommonSubsequence = function(a, b) {
    const matrix = Array(nums1.length + 1).fill().map(() => Array(nums2.length + 1).fill(0));
    // create a matrix of a.length + 1
    // for all those spaces, it will be b.length + 1

for(let i = 1; i < nums1.length + 1; i++) {
    // skip first row, start on down
    for(let j = 1; j < nums2.length + 1; j++) {
    // skip first slow, go across
        if(nums1[i-1] === nums2[j-1]) {
    // if first a is the same as first b
            matrix[i][j] = 1 + matrix[i-1][j-1];
    // then that plot get a 1 added to the total
        } else {
    // otherwise that plot is the maximum of the one above and to the left
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
        }
    }
}
// return the last plot
return matrix[nums1.length][nums2.length].length;
}