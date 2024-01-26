// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = Array(nums.length*2).fill(0)
    for (let i=0; i<nums.length; i++){
        ans[i] = nums[i]
        ans[i+nums.length] = nums[i]
        }
    return ans
};
