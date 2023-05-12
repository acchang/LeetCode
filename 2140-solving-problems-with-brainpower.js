/**
 * @param {number[][]} questions
 * @return {number}
 */

// 65% time, 70% memory

var mostPoints = function(questions) {
    let dp = {}
    let addOn = 0
    let qBefore = 0
    for (let i=questions.length-1; i>-1; i--){
    // go backwards through the array, works kind of like kadane's
        dp[i+1+questions[i][1]] ? addOn = dp[i+1+questions[i][1]] : addOn = 0
    // does the pair with the jump exist, if so, add it, and put it in the hash map
        dp[i+1] ? qBefore = dp[i+1] : qBefore = 0
    // take the pair of the plot to the right or the current pair, having moved backwards
    // this works bc if the plot backwards is bigger than the one to the right, the one to the right will never be as big
        dp[i] = Math.max( (questions[i][0] +  addOn), qBefore)
    }
    return dp[0]
    // return the last pair
};

// recursive solution:

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let dp = {}
    function dfs(i){
        if (i>questions.length){return 0}
        if (dp[i]){return dp[i]}
        dp[i] = Math.max(
            dfs(i+1), 
            questions[i][0] + dfs(i + 1 + questions[i][1])  )
        return dp[i]
    }
    return dfs(0)
};


var mostPoints = function(questions) {
    // let map = new Map();
    let dp = {}
    function dfs(i){
        if (i >= questions.length) {return 0;}          
        // if (map.has(i)){return map.get(i)}
        if (dp[i]){return dp[i]} else {dp[i] = Math.max(dfs(i + 1), questions[i][0] + dfs(i + questions[i][1] + 1));}
        // let res = Math.max(dfs(i + 1), questions[i][0] + dfs(i + questions[i][1] + 1));
        // map.set(i, res);
        return dp[i]
    }
    return dfs(0);
}