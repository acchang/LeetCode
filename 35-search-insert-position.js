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

This one is very clever, log search:
Runtime
92 ms
Beats
54.34%
Memory
42.1 MB
Beats
69.64%*/

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start < end){
        let mid = Math.floor((start+end)/2);
        if (nums[mid] === target) return mid;
        nums[mid] > target ? end = mid : start = mid + 1;
    }
    if (start === end){
        return target <= nums[start] ? start : start + 1;
    }
};

/* very simple but slow: Runtime
111 ms
Beats
12.71%
Memory
42.5 MB
Beats
21.16% 
*/

var searchInsert = function(nums, target) {
    let i = 0;
    while (nums[i] < target) { i++ };
    return i  
};


