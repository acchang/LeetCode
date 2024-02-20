// https://leetcode.com/problems/missing-number/description/?envType=daily-question&envId=2024-02-20
// DQ 2/19/24

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    for (let i=0;i<nums.length;i++){
        if (i != nums[i]){return i}
    }
    return nums.length
};


