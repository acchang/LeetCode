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


// for shorter, O(n), use boyer-moore algorithm
// shift the test for each charcter
// https://www.youtube.com/watch?v=hXqRLILcC1k


var majorityElement = function(nums) {
    let candidate1 = null, candidate2 = null, count1 = 0, count2 = 0;
    
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
        console.log(candidate1, candidate2, count1, count2)
    }
    
    count1 = count2 = 0;
    console.log(candidate1, candidate2, count1, count2)
    // this is bc at most only 2 numbers can appear more than n/3 times.
    // any number that appears more than n/k times will have at most k-1 numbers
    // 1 1 1 1 2 2 2 2 3
    // only two numbers at most can take up more than n/3 of the slots
    // only 3 numbers can take up more than n/4 of the slots
    // got it, proportions

    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }
    console.log(candidate1, candidate2, count1, count2)

    const threshold = Math.floor(nums.length / 3);
    const result = [];
    
    if (count1 > threshold) result.push(candidate1);
    if (count2 > threshold) result.push(candidate2);
    
    return result;
};