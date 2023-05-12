/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let dp = {}
    let addOn = 0
    let qBefore = 0
    for (let i=questions.length-1; i>-1; i--){
        dp[i+1+questions[i][1]] ? addOn = dp[i+1+questions[i][1]] : addOn = 0
        dp[i+1] ? qBefore = dp[i+1] : qBefore = 0
        dp[i] = Math.max( (questions[i][0] +  addOn), qBefore)
    }
    return dp[0]
};