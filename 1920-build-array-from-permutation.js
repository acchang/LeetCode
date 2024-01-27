/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = Array(nums.length).fill(0)
    for (let i=0; i<nums.length; i++){
        ans[nums[i]] = i
// ans[i] = nums[nums[i]] 
    }
    return ans
};