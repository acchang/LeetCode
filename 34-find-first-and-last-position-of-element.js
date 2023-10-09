/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = nums.sort((a,b) => a-b)
    return [ans.indexOf(target), ans.lastIndexOf(target)]
    };
    