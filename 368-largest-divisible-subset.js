// https://www.youtube.com/watch?v=bech4HH44Rs

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=> a-b)
    let dp = [...Array(nums.length)].map(() => [])
    dp[0] = [nums[0]]
    for (let i=1; i<nums.length; i++){
        dp[i].push(nums[i])
        for (let j=i-1; j>-1; j--){
            if (nums[i]%nums[j]==0){
                dp[i].push(...dp[j]);
                break
                }
        }
    }
    dp.sort((a,b)=>b.length-a.length)
    return dp[0]
};
