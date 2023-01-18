// https://www.youtube.com/watch?v=86CQq3pKSUw

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curMax = 0
    let globalMax = 0
    for (let num of nums){
        curMax = Math.max(num, curMax+num)
        if (curMax>globalMax){globalMax=curMax}
        }
    return globalMax
    }
