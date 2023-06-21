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
    let answer = sortedNums.map((x,i) => (x-sortedNums[0])*numsCostObj[sortedNums[i]]).reduce((a,c) => a + c, 0)
    for (let i=1; i<sortedNums.length;i++){
            let multiplier = sortedNums[i]-sortedNums[i-1]
            let left =             
            left * multiplier positive
            right * muliplier negative
            let temp = answer + left + right
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