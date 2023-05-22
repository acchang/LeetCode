// https://leetcode.com/problems/top-k-frequent-elements/

// 30% runtime, 60% memory

var topKFrequent = function(nums, k) {
    let hashobj = {};
    for (num of nums){
        if (hashobj[num]){hashobj[num]++}
        else {hashobj[num] = 1}
    }
    let sortable = [];
    for (obj in hashobj){
        sortable.push([obj, hashobj[obj]]);
    }
    sortable.sort((a, b) => b[1]-a[1])
    let ans = []
    for (let i=0;i<k;i++){
        ans.push(sortable[i][0])
    }
    return ans
};

// similar to mine but 97% speed, 47% memory

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = []
    let numbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++
        } else {
            numbers[nums[i]] = 1
        }
    }
    let array = Object.entries(numbers).sort((a,b) => {
        return a[1] - b[1]
    })
    while(result.length != k) {
        let curr = array.pop()
        result.push(curr[0])
    }
    return result
};

// optimized: 94 speed, 92 memory

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashobj = {};
    for (num of nums){
        if (hashobj[num]){hashobj[num]++}
        else {hashobj[num] = 1}
    }
    let array = Object.entries(hashobj)
    array.sort((a,b) => b[1] - a[1])
    // Object.entries is faster than a for loop to make an array or `for (obj in hashobj){sortable.push([obj, hashobj[obj]]);}
    let ans = []
    for (let i=0;i<k;i++){ans.push(array[i][0])}
    return ans
};

// also using pop/shift at end, but gets 29% speed, 75% memory.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashobj = {};
    for (num of nums){
        if (hashobj[num]){hashobj[num]++}
        else {hashobj[num] = 1}
    }
    let array = Object.entries(hashobj)
    array.sort((a,b) => b[1] - a[1])
    // Object.entries is faster than a for loop to make an array or `for (obj in hashobj){sortable.push([obj, hashobj[obj]]);}
    let ans = []
    while(ans.length != k) {
        let curr = array.shift()
        ans.push(curr[0])}
    return ans
};




