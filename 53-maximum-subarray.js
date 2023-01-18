// Kadane's Algo: https://www.youtube.com/watch?v=86CQq3pKSUw

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curMax = -Number.MAX_VALUE
    let globalMax = -Number.MAX_VALUE
    for (let num of nums){
        curMax = Math.max(num, curMax+num)
        // the max is either a chain of everything before it, or just the current.
        if (curMax>globalMax){globalMax=curMax}
        }
    return globalMax
    }
