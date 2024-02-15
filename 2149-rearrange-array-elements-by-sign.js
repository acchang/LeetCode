// https://leetcode.com/problems/rearrange-array-elements-by-sign/submissions/1174650719/?envType=daily-question&envId=2024-02-14
// daily question 2024 Feb 13
// only ranks 23%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const n = nums.length
    let ans = new Array(n).fill(0)
    let positive = 0, negative = 1
    for (let i=0; i<n; i++){
        if (nums[i]>0){ans[positive]=nums[i]; positive +=2}
        else {ans[negative]=nums[i]; negative +=2}
    }
    return ans
};

// book solution is 53%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const n = nums.length;

    // Initializing an answer array of size n
    const ans = new Array(n).fill(0);

    // Initializing two pointers to track even and
    // odd indices for positive and negative integers respectively
    let posIndex = 0, negIndex = 1;

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            // Placing the positive integer at the
            // desired index in ans and incrementing posIndex by 2
            ans[posIndex] = nums[i];
            posIndex += 2;
        } else {
            // Placing the negative integer at the
            // desired index in ans and incrementing negIndex by 2
            ans[negIndex] = nums[i];
            negIndex += 2;
        }
    }

    return ans;
};
