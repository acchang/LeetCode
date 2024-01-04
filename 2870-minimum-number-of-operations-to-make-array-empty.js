// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/?envType=daily-question&envId=2024-01-04

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let hashMap = new Map();
    for (let i=0; i<nums.length; i++){
        if (hashMap.has(nums[i])){
            hashMap.set(nums[i], hashMap.get(nums[i])+1)}
            // ans = Math.max(ans, i - firstIndex.get(s[i]) - 1)} 
        else {hashMap.set(nums[i], 1)}
    }
    const hashMapvalues = [...hashMap.values()]
    counter = 0
    for (c of hashMapvalues){
        if (c % 3 === 0){counter += c/3}
        else if (c % 2 === 0){counter += c/2}
        else return -1
    }
    return counter
};