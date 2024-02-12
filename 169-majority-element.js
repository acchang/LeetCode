// New attempt 2/11/24
// https://leetcode.com/problems/majority-element/?envType=daily-question&envId=2024-02-12
// beats 62%

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashMap = {}
    let target = nums.length/2
    for (num of nums){
        if (hashMap[num]){hashMap[num]++}
        else (hashMap[num] = 1)
        if (hashMap[num] > target){return num}
    }
};




//////////////
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const Numbers = {};
    for (num of nums){
        if (!Numbers[num]) {Numbers[num]=1}
        else {Numbers[num] ++}
    }
    return Object.keys(Numbers).find(key => Numbers[key] > nums.length/2);
};

