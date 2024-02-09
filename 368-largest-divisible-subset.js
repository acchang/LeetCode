// https://www.youtube.com/watch?v=bech4HH44Rs


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=> a-b)
    let dp = []
    for (let i=0; i<nums.length; i++){
        let bracket = []
        for (let j=0; j<i+1; j++){
            if (nums[i]%nums[j]==0){bracket.push(nums[j])}
        }
        dp.push(bracket)
    }
    console.log(dp)
    dp.sort((a,b)=>b.length-a.length)
    return dp[0]
};
