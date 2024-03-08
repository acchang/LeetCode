// https://leetcode.com/problems/count-elements-with-maximum-frequency/?envType=daily-question&envId=2024-03-08
// Daily Q 3/7/2024

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) { 
    const map1 = new Map();
    for (num of nums){
        if(!map1.get(num)){map1.set(num, 1)} else {map1.set(num, map1.get(num)+1)}
    }
    console.log(map1)
};


// use Object bc Map less iterable, 26%

var maxFrequencyElements = function(nums) { 
    let ans = 0
    const hashObject = {};
    for (num of nums){
        if(!hashObject[num]){hashObject[num]=1} else {hashObject[num]++}
    }
    let maxFreq = Math.max(...Object.values(hashObject))
    for (const [key, value] of Object.entries(hashObject)) {
        if (value == maxFreq){
            ans += maxFreq}
      }
    return ans
};

// update instead of count maxfreq: 87%

var maxFrequencyElements = function(nums) { 
    let ans = 0
    let maxFreq = 0
    const hashObject = {};
    for (num of nums){
        if(!hashObject[num]){hashObject[num]=1} else {hashObject[num]++}
        if (hashObject[num] > maxFreq){maxFreq = hashObject[num]}
    }
    for (const [key, value] of Object.entries(hashObject)) {
        if (value == maxFreq){
            ans += maxFreq}
      }
    return ans
};

// scan object values instead of entries 39%

var maxFrequencyElements = function(nums) { 
    let ans = 0
    let maxFreq = 0
    const hashObject = {};
    for (num of nums){
        if(!hashObject[num]){hashObject[num]=1} else {hashObject[num]++}
        if (hashObject[num] > maxFreq){maxFreq = hashObject[num]}
    }
    for (const value of Object.values(hashObject)) {
        if (value == maxFreq){ans += maxFreq}}
    return ans
};

// one pass, 45%

var maxFrequencyElements = function(nums) { 
    let maxFreq = 0
    let totalFreq = 0
    const hashObject = {};
    for (num of nums){
        if(!hashObject[num]){hashObject[num]=1} else {hashObject[num]++}
        if (hashObject[num] > maxFreq){maxFreq = hashObject[num]; totalFreq = maxFreq}
        else if (hashObject[num] == maxFreq){totalFreq += maxFreq}
        }
    return totalFreq
};