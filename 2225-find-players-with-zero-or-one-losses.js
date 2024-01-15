// https://leetcode.com/problems/find-players-with-zero-or-one-losses/?envType=daily-question&envId=2024-01-15

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