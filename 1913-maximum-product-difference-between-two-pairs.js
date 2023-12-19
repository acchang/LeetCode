/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>b-a)
    return (nums[0]*nums[1]) - (nums[nums.length-1]*nums[nums.length-2])
};

// alt:

var maxProductDifference = function(nums) {
    let biggest = 0
    let secondBig = 0
    let smallest = Infinity
    let secondSmall = Infinity
    for (num of nums){
        if (num>biggest){secondBig = biggest; biggest = num}
        // have to do it this way or else secondBig also is num
        else if (num>secondBig){secondBig = num}
        // needs else or it would update secondBig too
        if (num<smallest){secondSmall=smallest; smallest = num}
        else if (num<secondSmall){secondSmall = num}
   }
   return (biggest*secondBig) - (smallest*secondSmall)
};


// Iterate over each num in nums:
// If num > biggest:
// Update secondBiggest = biggest.
// Update biggest = num.
// Else:
// Update secondBiggest with num if it is larger.
// If num < smallest:
// Update secondSmallest = smallest.
// Update smallest = num.
// Else:
// Update secondSmallest with num if it is smaller.