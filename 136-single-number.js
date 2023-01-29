// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const Numbers = new Map();
    for (let i=0; i<nums.length;i++){
        Numbers.set(i, 1);
    }
    console.log(Numbers)
};
