// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    while(n--) {
        nums1[m+n] = nums2.pop()
    };
    nums1.sort((a,b) => a-b)
};

// OR

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i=0; i<nums2.length; i++){
        nums1[m+i] = nums2[i]
    }
    return nums1.sort((a,b) => a-b)
};