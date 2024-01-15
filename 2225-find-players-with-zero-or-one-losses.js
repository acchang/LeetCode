// https://leetcode.com/problems/find-players-with-zero-or-one-losses/?envType=daily-question&envId=2024-01-15

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

var findWinners = function(matches) {
    // of winners, who did not show in losers
    // who showed in losers once
    // O(n) 
    // hashmap, count losses
    // winner is zero, loser is 1
    // anyone with a zero is in one group
    // anyone with a 1 is in the other
    const lossesMap = new Map();

    for (let i=0; i<matches.length; i++){
        if (lossesMap.has(matches[i][0])){
            lossesMap.set(matches[i][0], lossesMap.get(matches[i][0])+0)}
        else {lossesMap.set(matches[i][0], 0)}

        if (lossesMap.has(matches[i][1])){
            lossesMap.set(matches[i][1], lossesMap.get(matches[i][1])+1)}
        else {lossesMap.set(matches[i][1], 1)}
    }
   
    console.log(lossesMap)

    let undefeated = []
    let oneLoss = []

};