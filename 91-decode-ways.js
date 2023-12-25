// https://www.youtube.com/watch?v=-4CPPqI1-nA
// https://leetcode.com/problems/decode-ways/solutions/4454298/beats-100-explained-with-video-c-java-python-js-tabulation-dp/?envType=daily-question&envId=2023-12-25

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = new Array(s.length +1).fill(0);
       dp[s.length] = 1;
       for(let i = s.length -1; i >= 0 ; i--){
           if(s[i] == 0) continue;
           // the current character is zero, do nothing
           dp[i]  = dp[i+1];
           // moving right to left, backwards, take the one to the right
           // 2202 [0,0,0,0,0,] ... length of 4 + 1 = 5 zeroes
           // [00001] set length or 4 to 1
           // [00011] first is 2 so it gets a 1 bc to the right is 1
           // [00011] next is zero so nothing happens
           // next is 2 and the one to the right is 0, so still zero
           if(s[i] + s[i+1] <= 26) {dp[i] += dp[i+2]}
           // if the current and after are in range, add two to the right [01011] 
           // finally, last 2 makes [11011]
           // current plus next is 22 but two to the right is 0 so nothing is added 
           console.log([dp])
       }
       return dp[0];
   };
   