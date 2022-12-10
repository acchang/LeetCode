/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 /* params all numbers, returns just the val, examples, psuedocode...) */
 var removeElement = function(nums, val) {
    while (nums.indexOf(val) != -1 ){nums.splice(nums.indexOf(val), 1)}
    return nums.length
}

/* 
https://leetcode.com/problems/remove-element/submissions/857575909/

unusually easy!

Runtime
81 ms
Beats
74.66%
Memory
42.2 MB
Beats
43.97%