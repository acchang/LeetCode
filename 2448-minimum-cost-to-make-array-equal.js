// https://leetcode.com/problems/minimum-cost-to-make-array-equal/editorial/
// idea is not mine but execution is, prefix sum

// some discussion:
// https://discord.com/channels/735923219315425401/1084551836817698906/threads/1121237314283249695


// BEST:

var minCost = function(nums, cost) {
    let numsCostLinked = []
    for (let i=0; i<nums.length;i++){
        let pair = []
        pair.push(nums[i])
        pair.push(cost[i])
        numsCostLinked.push(pair)
    }
    numsCostLinked.sort((a,b) => a[0] - b[0])

    let temp = numsCostLinked.map((x,i) => (x[0]-numsCostLinked[0][0])*numsCostLinked[i][1]).reduce((a,c) => a + c, 0)

    let answer = temp

    let sortedCosts = []
    for (let i=0;i<numsCostLinked.length;i++){
        sortedCosts.push(numsCostLinked[i][1])
    }

    let totalLine = sortedCosts.reduce((a,b) => a+b)
    let left = 0
    let right = totalLine

    for (let i=1; i<numsCostLinked.length;i++){
            let delta = numsCostLinked[i][0]-numsCostLinked[i-1][0]
            left += sortedCosts[i-1]
            right -= sortedCosts[i-1]
            temp = delta * (left-right)+ temp
            if (temp < answer){answer = temp}
    }
    return answer
};


// fails bc I use object:

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

// removed the object, made it a 2D array bc if nums repeat, using an object will eliminate repeats:

var minCost = function(nums, cost) {
    let numsCostLinked = []
    for (let i=0; i<nums.length;i++){
        let pair = []
        pair.push(nums[i])
        pair.push(cost[i])
        numsCostLinked.push(pair)
    }
    numsCostLinked.sort((a,b) => a[0] - b[0])

    let temp = numsCostLinked.map((x,i) => (x[0]-numsCostLinked[0][0])*numsCostLinked[i][1]).reduce((a,c) => a + c, 0)

    let answer = temp

    let sortedCosts = []
    for (let i=0;i<numsCostLinked.length;i++){
        sortedCosts.push(numsCostLinked[i][1])
    }

    for (let i=1; i<numsCostLinked.length;i++){
            let delta = numsCostLinked[i][0]-numsCostLinked[i-1][0]
            let left = sortedCosts.slice(0,i).reduce((a,c) => a + c, 0)
            console.log(left)
         
            let right = sortedCosts.slice(i).reduce((a,c) => a + c, 0)
            console.log(right)
            
            temp = delta*(left-right)+temp

            console.log(i, temp)
            if (temp < answer){answer = temp}
    }
    return answer
};




// alt solution, no BigInt needed:
// from https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3664704/js-o-n-log-n-solution-with-sorting/





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
    }
        console.log("minCost", minCost)

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
        console.log("right:", right, "left:", left)
// from the second lowest going up
        const prev = nums[i + 1]
console.log("loop", "at i=", i, "prev is", prev)
        right += prev[1]
        left -= prev[1]
console.log("right", right, "plus prev[1] or", prev[1], "left:", left, "minus", prev[1])

// instead of summing on both sides, realize that the total row is always the same number so you just need to add and subtract on each side of that number

        const delta = nums[i][0] - prev[0]
        console.log("delta", delta, "times", right, "minus", left)
        console.log("factor", delta * (right - left))
        prevCost += delta * (right - left)
        console.log(prevCost)
        if (prevCost < minCost) minCost = prevCost
    }

    return minCost
}
/*
at
[ [ 5, 1 ], [ 3, 3 ], [ 2, 14 ], [ 1, 2 ] ]
start with left is 20, right is 0 
at level 1, 2 is the main number, so left is 18 and right is 2
delta is 1
prevcost = 2-18 * delta = -16
*/
