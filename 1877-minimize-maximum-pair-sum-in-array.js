/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let pairs = []
    nums.sort((a,b)=>a-b)
    for (let i=0; i<nums.length/2; i++){
        pairs.push(nums[i] + nums[nums.length-1-i])
    }
    return Math.max(...pairs)
};

// a little less on memory, a little more on runtime

var minPairSum = function(nums) {
    let ans = 0
    nums.sort((a,b)=>a-b)
    for (let i=0; i<nums.length/2; i++){
        let pair = (nums[i] + nums[nums.length-1-i])
        if (pair > ans){ans = pair}
    }
    return ans
};

