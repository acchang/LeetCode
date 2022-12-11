/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let less
    if (nums.includes(target)){return nums.indexOf(target)}
    else {less = nums.filter(int => int < target)}
    return less.length
};

/* 
https://leetcode.com/problems/search-insert-position/submissions/857963199/

Runtime
89 ms
Beats
61.20%
Memory
42.6 MB
Beats
21.16%


