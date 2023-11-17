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
