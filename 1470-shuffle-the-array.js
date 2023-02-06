// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let answer = [];
    for (let i=0; i<n; i++){
        answer.push(nums[i],nums[i+n])
    }
    return answer
};

