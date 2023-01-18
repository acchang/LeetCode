// https://leetcode.com/problems/maximum-sum-circular-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let doubled = [...nums, ...nums];
    let curMax = -Number.MAX_VALUE
    let globalMax = -Number.MAX_VALUE
    for (let i=0; i<doubled.length; i++){
        curMax = Math.max(doubled[i], curMax+doubled[i])
        if (curMax>globalMax){globalMax=curMax}
        }
    return globalMax
};