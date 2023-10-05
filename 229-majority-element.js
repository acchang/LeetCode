/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let ans = []
    let hashTable = {}
    let appearTime = nums.length/3
    for (num of nums){
        if (!hashTable[num]){hashTable[num]=1}
        else if (hashTable[num]){hashTable[num]++}
        if (hashTable[num] > appearTime && !ans.includes(num)){ans.push(num)}
    }
    return ans
};