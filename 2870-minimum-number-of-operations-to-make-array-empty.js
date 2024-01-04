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

// fails on Map(2) { 14 => 10, 12 => 9 }
// [ 10, 9 ]
// I get 8, (5 pairs and 3 triples) but the answer is supposed to be 7?
// bc 10 can be 3+3+2+2
// the below is better but requires insight that "count elements of a given kind is represented by the expression ceil(count / 3), where the ceil method rounds up the decimal result of count / 3"
// or for every number divisible by 3, the two ahead can also be divisible by 2 so the operations are the same
// 6 is 3+3
// 7 is 2+2+3 (3)
// 8 is 3+3+2 (3)
// 9 is 3+3+3 (3)

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
    counter = 0
    for (const c of hashMap.values()){
        if (c === 1){return -1}
        counter += Math.ceil(c/3)
    }
    return counter
};



