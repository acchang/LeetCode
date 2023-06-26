/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let results = 0
    let lowest
    for (let j=0; j<k; j++){
        let sessionGroup = []
        for (let i=0; i<candidates;i++){
            if (costs[i]){sessionGroup.push(costs[i])}
            if (costs[costs.length-1-i]){sessionGroup.push(costs[costs.length-1-i])}
        }
        lowest = Math.min(...sessionGroup)
        results += lowest
        costs.splice(costs.indexOf(lowest),1)
    }
    return results
};