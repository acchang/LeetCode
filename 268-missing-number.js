// https://leetcode.com/problems/missing-number/description/?envType=daily-question&envId=2024-02-20
// DQ 2/19/24

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    for (let i=0;i<nums.length;i++){
        if (i != nums[i]){return i}
    }
    return nums.length
};

// Math formula solution, fastest, 60%

var missingNumber = function(nums) {
    let n = nums.length
    let sum = n*(n+1)/2
    let arraysum = nums.reduce((acc, cv)=>acc+cv)
    return sum - arraysum
};

// hash table solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const map1 = new Map();
    for (num of nums){
        map1.set(num, nums.indexOf(num))
    }
    for (let i=0; i<nums.length; i++){
        if (map1.get(i) == null){return i}
    }
    return nums.length
};

