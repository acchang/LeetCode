// https://www.youtube.com/watch?v=-4CPPqI1-nA
// https://leetcode.com/problems/decode-ways/solutions/4454298/beats-100-explained-with-video-c-java-python-js-tabulation-dp/?envType=daily-question&envId=2023-12-25


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    const dp = new Array(s.length +1).fill(0);
    const dp = []
    dp[s.length] = 1;

    for(let i = s.length -1; i >= 0 ; i--){
        if(s[i] == 0) continue;
        dp[i]  = dp[i+1];
        if(s[i] + s[i+1] <= 26) dp[i] += dp[i+2];
    }

    return dp[0];
};