// https://leetcode.com/problems/maximum-sum-circular-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let doubled = [...nums, ...nums];
    let curMax = 0
    let globalMax = nums[0]
    for (let i=0; i<doubled.length; i++){
        curMax = Math.max(nums[i], nums[i]+nums[i-1])

        if (doubled[i] > globalMax){
            doubled[i] = curMax
        }

             
    }
    
};