// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/description/

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    // one pass
    // hash table?
    // if diff positive, start from min, add, see if it exist
    // if diff negative, start from max, add diff, see if exists
    // this would be O(n)2
    // so sort?
};