// https://leetcode.com/problems/minimum-common-value/description/?envType=daily-question&envId=2024-03-09
// dq 3/8/24

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let onePointer=0
    let twoPointer=0
    while (onePointer<nums1.length && twoPointer<nums2.length){
        if (nums1[onePointer] == nums2[twoPointer]){return nums1[onePointer]}
        if (nums1[onePointer] < nums2[twoPointer]){onePointer++}
        if (nums2[twoPointer] < nums1[onePointer]){twoPointer++}
    }
    return -1
};

// using set:

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const set = new Set(nums1);
    const common = nums2.filter(n => set.has(n)).sort((a,b) => a - b)[0];
    
    return common !== undefined ? common : -1;
};