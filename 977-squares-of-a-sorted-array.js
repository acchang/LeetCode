// https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=daily-question&envId=2024-03-02
// DQ 3/1/24

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans = []
    for (num of nums){ans.push(num**2)}
    return ans.sort((a,b)=>(a-b))
};