/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = Array(nums.length).fill(0)
    for (let i=0; i<nums.length; i++){
        ans[i] = nums[nums[i]]
    }
    return ans
};


// simpler:

var buildArray = function(nums) {
    let results = [];
    for(let i=0; i<nums.length; i++){
        results.push(nums[nums[i]])
    }
    return results
};