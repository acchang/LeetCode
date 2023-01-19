// https://leetcode.com/problems/maximum-sum-circular-subarray/
// from: https://www.youtube.com/watch?v=fxT9KjakYPM&t=569s

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let globalMax = nums[0]
    let globalMin = nums[0]
    let curMax = 0
    let curMin = 0
    let total = 0
    for (num of nums){
        curMax = Math.max(curMax+num, num);
        curMin = Math.min(curMin+num, num);
        total += num;
        globalMax = Math.max(globalMax,curMax);
        globalMin = Math.min(globalMin,curMin);
        // go through with Kadane's algorithm and get the total and the global MaxSum and global MinSum.
    }
    if (globalMax > 0) {
        // if the globalMax is not negative subtract from total, otherwise just use globalMax
        return Math.max(globalMax, total - globalMin)
    }
      else {return globalMax};
};


