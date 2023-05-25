// https://leetcode.com/problems/new-21-game/description/
// helpful video: https://www.youtube.com/watch?v=2wCShtvcP0Q
// https://leetcode.com/problems/new-21-game/solutions/3560531/easy-and-simple-solution-in-javascript-almost-like-editorial-but-in-js/

// I understand this dp problem somewhat, but I don't have a mastery of the probability, so did not claim.

/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(target, thresh, maxPts) {
    let dp = new Array(target+1);
    dp[0] = 1;
    s = thresh > 0 ? 1 : 0;
    // if threshhold is 0 then numerator s in the array dp is 0
    for (let i = 1; i <= target; i++) {
    // build a series of probabilities in dp array
        dp[i] = s / maxPts;
        // for the dp array, each slot up to target has probability is 1/maxPts
        if (i < thresh) {
            s += dp[i];
        // if i is less than threshhold, s accumulates the probability
        }
        if (i - maxPts >= 0 && i - maxPts < thresh) {
            s -= dp[i - maxPts];
        // if i is greater than maxpoints and threshold is greater than maxpoints minus 1
        // subtract maxpoints from i and use that dp as the numerator
        }
    }
    let ans = 0;
    for (let i = thresh; i <= target; i++) {
        ans += dp[i];
    // sum up dp
    }
    return ans;
}