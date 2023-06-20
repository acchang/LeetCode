// https://leetcode.com/problems/k-radius-subarray-averages/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let ans = new Array(nums.length).fill(-1)
    if (2*k+1>ans.length){return ans}
    let initSubarray = nums.slice(0,2*k+1)
    let summedArray = initSubarray.reduce((a, cV) => a+cV, 0)
    ans[k] = processedNum(summedArray, k)

    for (let i=k+1; i<nums.length-k; i++){
        summedArray = summedArray - nums[i-k-1] + nums[i+k]
        ans[i] = processedNum(summedArray, k)
    }
    return ans
};

function processedNum(array, radius){
    return Math.floor(array/(2*radius+1))
    }