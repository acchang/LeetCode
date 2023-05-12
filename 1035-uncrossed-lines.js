// https://leetcode.com/problems/uncrossed-lines/submissions/948430189/
// Just repurposed solution for 1143
// https://www.youtube.com/watch?v=4w7M2EHfvpo
// also look: https://www.youtube.com/watch?v=ASoaQq66foQ


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const matrix = Array(nums1.length + 1).fill().map(() => Array(nums2.length + 1).fill(0));

for(let i = 1; i < nums1.length + 1; i++) {
    // skip first row, start on down
    for(let j = 1; j < nums2.length + 1; j++) {
    // skip first slow, go across
        if(nums1[i-1] === nums2[j-1]) {
    // if first nums1 is the same as first nums2
            matrix[i][j] = 1 + matrix[i-1][j-1];
    // then that plot get a 1 added to the total
        } else {
    // otherwise that plot is the maximum of the one above and to the left
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
        }
    }
}
// return the last plot
return matrix[nums1.length][nums2.length];
}