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

This works too but slower: */

var removeElement = function(nums, val) {
    const len = nums.length;
    for(i = 0; i < len; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
      }
    }
    return nums.length;
  };

/*
Runtime
105 ms
Beats
27.62%
Memory
42.5 MB
Beats
9.19%