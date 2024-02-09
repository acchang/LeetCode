
// solved using ideas here:
// https://www.youtube.com/watch?v=bech4HH44Rs
// beats 15%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
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
        let temp = []
        for (let j=i-1; j>-1; j--){
            if ((nums[i]%nums[j]==0) && dp[j].length>=temp.length){
                temp = dp[j];
                }
        }
        dp[i].push(...temp)
    }
    dp.sort((a,b)=>b.length-a.length)
    return dp[0]
};
