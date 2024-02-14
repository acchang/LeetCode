/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ans = new Array(nums.length).fill(0)
    let positive = 0
    let negative = 1
    for (let i=0; i<nums.length; i++){
        if (nums[i]>-1){ans[positive]=nums[i]; positive +=2}
        if (nums[i]<0){ans[negative]=nums[i]; negative +=2}
    }
    return ans
};