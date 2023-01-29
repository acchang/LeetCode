// https://leetcode.com/problems/single-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const Numbers = {};
    for (let i=0; i<nums.length;i++){
        if (!Numbers[nums[i]]) {Numbers[nums[i]]=1}
        else {Numbers[nums[i]] ++}
    }
    return Object.keys(Numbers).find(key => Numbers[key] === 1);
};
