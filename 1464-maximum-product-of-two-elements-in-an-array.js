/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b)=>b-a)
    return (nums[0]-1)*(nums[1]-1)
};

// also:

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let biggest = 0
    let secondBiggest = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i]>biggest){
            secondBiggest = biggest;
            biggest = nums[i]
        } else {
            secondBiggest = Math.max(secondBiggest, nums[i])
        }
    }
    return (biggest-1)*(secondBiggest-1)
};