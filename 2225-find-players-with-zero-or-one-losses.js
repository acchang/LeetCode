// https://leetcode.com/problems/find-players-with-zero-or-one-losses/?envType=daily-question&envId=2024-01-15
// 79.75%


/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

var findWinners = function(matches) {
    const lossesMap = new Map();

    for (let i=0; i<matches.length; i++){
        if (lossesMap.has(matches[i][0])){
            lossesMap.set(matches[i][0], lossesMap.get(matches[i][0])+0)}
        else {lossesMap.set(matches[i][0], 0)}

        if (lossesMap.has(matches[i][1])){
            lossesMap.set(matches[i][1], lossesMap.get(matches[i][1])+1)}
        else {lossesMap.set(matches[i][1], 1)}
    }
   
    let undefeated = []
    let oneLoss = []

    for (let [key, value] of lossesMap.entries()) {
          if (value === 0){undefeated.push(key)}
          else if (value == 1){oneLoss.push(key)}
         }

    return [undefeated.sort((a,b)=>(a-b)),oneLoss.sort((a,b)=>(a-b))]

};

// 96% solution uses Sets, "collections of unique values"
// better to use set than array or object bc can just use "has" instead of indexing to delete
// https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4566935/beats-98-22-users-c-java-python-javascript-explained/?envType=daily-question&envId=2024-01-15

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let zeroLoss = new Set();
    let oneLoss = new Set();
    let moreLoss = new Set();

    for (let match of matches) {
        let winner = match[0];
        let loser = match[1];

        // Add winner.
        if (!oneLoss.has(winner) && !moreLoss.has(winner)) {
            zeroLoss.add(winner);
        }

        // Add or move loser.
        if (zeroLoss.has(loser)) {
            zeroLoss.delete(loser);
            oneLoss.add(loser);
        } else if (oneLoss.has(loser)) {
            oneLoss.delete(loser);
            moreLoss.add(loser);
        } else if (moreLoss.has(loser)) {
            continue;
        } else {
            oneLoss.add(loser);
        }
    }

    let answer = [
        Array.from(zeroLoss).sort((a, b) => a - b),
        Array.from(oneLoss).sort((a, b) => a - b)
    ];
    
    return answer;
};


