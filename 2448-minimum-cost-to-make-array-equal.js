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

// alt solution, no BigInt needed:

function minCost (nums, costs) {
    const n = nums.length
    let bank = 0

    for (let i = n - 1; i > -1; --i) {
        nums[i] = [nums[i], costs[i]]
        bank += costs[i]
    }

    nums.sort((b, a) => a[0] - b[0])    
// create 2D array, sort it
// bank is what it cost to move everthing by 1

    let minCost = 0

    const base = nums[nums.length - 1][0]

// base is the biggest num

    for (let i = n - 1; i > -1; --i) {
        // console.log(i, nums[i][0], "minus", base, "times", nums[i][1])
        minCost += (nums[i][0] - base) * nums[i][1]
        // console.log(minCost)
    }
// move backward through array nums, 
// mincost is the current minus the smallest num times the cost of each

    let prevCost = minCost

// mincCost is now prevCost

    let left = bank
// bank is as if all nums needs to go up by 1
    let right = 0
// and right is zero

console.log(nums)
    for (let i = n - 2; i > -1; --i) {
// from the second lowest going up
        const prev = nums[i + 1]
console.log("final loop", i, prev)
        right += prev[1]
        left -= prev[1]
console.log("right:", right, "left:", left)
// I don't need to sum again bc I got prefix and suffix at nums -1
// whenever the nums change, then the delta changes
/* at zero, the first layer is 20
/* at 1, the first layer adds on 20 again, but 

5 3 2  1
1 3 14 2

*/
        const delta = nums[i][0] - prev[0]
        prevCost += delta * (right - left)
    
        if (prevCost < minCost) minCost = prevCost
    }

    return minCost
}
