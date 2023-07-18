// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/description/

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let dp = {}
    let before_a = 0
    let answer
    for (let i=0; i<arr.length; i++){
        if (dp[arr[i]]){before_a = dp[arr[i]-difference]} else before_a = 0;
        console.log(before_a )
        dp[arr[i]] = before_a + 1;
        answer = Math.max(answer, dp[arr[i]])
        }
        return answer
};
