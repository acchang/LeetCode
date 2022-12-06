/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    console.log(nums,target)
    let matches = []
    let pair = []
    for (i=0;i<nums.length;i++){
        let diff = target-nums[i]
        pair.push(nums[i], diff)
        matches.push(pair)
        pair = []
    }
    return matches
};