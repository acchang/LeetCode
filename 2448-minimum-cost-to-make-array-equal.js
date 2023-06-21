// https://leetcode.com/problems/minimum-cost-to-make-array-equal/editorial/
// idea is not mine but execution is, prefix sum

/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    let numsCostObj = {}
    for (let i=0; i<nums.length;i++){
        numsCostObj[nums[i]] = cost[i]
    }
    let sortedNums = nums.sort((a,b) => a - b)
    let sortedCosts = Object.values(numsCostObj)
    let temp = sortedNums.map((x,i) => (x-sortedNums[0])*numsCostObj[sortedNums[i]]).reduce((a,c) => a + c, 0)
    let answer = temp
    for (let i=1; i<sortedNums.length;i++){
            let delta = sortedNums[i]-sortedNums[i-1]
            let left = (sortedCosts.slice(0,i).reduce((a,c) => a + c, 0)) * delta
            console.log(i, left)
            let right = (sortedCosts.slice(i).reduce((a,c) => a + c, 0)) * delta * -1
            console.log(i, right)
            temp = temp + left + right
            console.log(temp, answer)
            if (temp < answer){answer = temp}
    }
    return answer
};

/* step 2
total goes from 1 to 2 so delta is 1

difference of next step 
now equalize to 2
1 to go to 2 needs 1 unit * 2 cost = 2 + 24 sum = 26
2 to go to 2 needs 1 unit * 14 cost = -14 + 26 = 12
3 to go to 2 needs 1 unit * 3 cost = -3 + 12 sum = 9
4th to got 2 need 1 unit * 1 cost = -1 + 9 sum = 8
*/