/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>b-a)
    return (nums[0]*nums[1]) - (nums[nums.length-1]*nums[nums.length-2])
};

// alt:

Iterate over each num in nums:
If num > biggest:
Update secondBiggest = biggest.
Update biggest = num.
Else:
Update secondBiggest with num if it is larger.
If num < smallest:
Update secondSmallest = smallest.
Update smallest = num.
Else:
Update secondSmallest with num if it is smaller.