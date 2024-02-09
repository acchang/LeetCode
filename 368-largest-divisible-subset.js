
// solved using ideas here:
// https://www.youtube.com/watch?v=bech4HH44Rs
// beats 55% over 15% by eliminating second sort and getting max as you go.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=> a-b)
    let dp = [...Array(nums.length)].map(() => [])
    dp[0] = [nums[0]]
    let maxVal = dp[0]
    for (let i=1; i<nums.length; i++){
        dp[i].push(nums[i])
        let temp = []
        for (let j=i-1; j>-1; j--){
            if ((nums[i]%nums[j]==0) && dp[j].length>=temp.length){
                temp = dp[j];
                }
        }
        dp[i].push(...temp)
        if (dp[i].length > maxVal.length){maxVal=dp[i]}
    }
    return maxVal
};
