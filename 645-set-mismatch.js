
// https://leetcode.com/problems/set-mismatch/solutions/2743032/js-99-100-with-explanation/?source=submission-noac
// 94%

// Now, passing through the array, we kind of sort it, so that our number from the nums array would be in the new array at the appropriate index ("- 1" - correction for the index). If this index already has a number from our array, then we got a duplicate, and write it to a variable, otherwise we put the number in place and subtract it from the sum.

//  n(n+1)/2 is the formula to calculate sum of 'n' natural numbers, which is the sum of 1 to n.


var findErrorNums = function(nums) {
    let sum = (nums.length * (nums.length + 1)) / 2;
    let dup = 0;
    let arr = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i] - 1] === nums[i]) dup = nums[i];
        else {
            arr[nums[i] - 1] = nums[i];
            sum -= nums[i];
        }
    }

    return [dup, sum];
};

// also, without knowing the formula, get 88.20%

var findErrorNums = function(nums) {
    let dup = 0;
    let arr = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i] - 1] === nums[i]) dup = nums[i];
        else {
            arr[nums[i] - 1] = nums[i];
        }
    }
    
    return [dup, arr.indexOf(0)+1]
};



/// this is 10%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let missing
    let dupe = nums.filter((val, idx)=> nums.indexOf(val) != idx)
    let arrayGuide = Array(nums.length).fill(0)
    nums.sort((a,b)=> a-b)
    let numsSet = new Set (nums)
    numsSet = Array.from(numsSet)
    for (let i=0; i<arrayGuide.length; i++){
        arrayGuide[i] = i+1;
        if (arrayGuide[i] != numsSet[i]){
            missing = arrayGuide[i];
            return [dupe, missing]}
        }
};