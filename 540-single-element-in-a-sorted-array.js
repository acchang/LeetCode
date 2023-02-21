https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let sum = 0
    for (let i=0;i<nums.length;i++){
        if (i%2 != 0){sum = (nums[i]*-1) + sum} else {sum = nums[i] + sum}
    }
    return sum
};

