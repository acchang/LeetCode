/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */

/* Not sure why above didn't work for 
122 / 160 testcases passed

costs =
[50,80,34,9,86,20,67,94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58]
k =
7
candidates =
12
Output
86
Expected
95
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
        console.log("s:", sessionGroup)
        console.log("costs:", costs)
        lowest = Math.min(...sessionGroup)
        results += lowest
        console.log("res:", results)
        costs.splice(costs.indexOf(lowest),1)
    }
    return results
};



/* priorityQueue without heaps, trips up on 62/160:

costs =
[28,35,21,13,21,72,35,52,74,92,25,65,77,1,73,32,43,68,8,100,84,80,14,88,42,53,98,69,64,40,60,23,99,83,5,21,76,34]
k =
32
candidates =
12
Use Testcase
Output
1404
Expected
1407
*/

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let results = 0
    let head = []
    let tail = []
    let headPointer = candidates-1
    let tailPointer = costs.length-candidates

    for (let i=0;i<candidates;i++){
        head.push(costs[i])
        tail.push(costs[costs.length-candidates+i])
    }

    for (let j=0;j<k;j++){
        let lowestHead = Math.min(...head)
        let lowestTail = Math.min(...tail)
        if (lowestHead === lowestTail){
            results += lowestHead
            head.splice(head.indexOf(lowestHead),1)
            if (tailPointer>headPointer){
                headPointer++
                head.push(costs[headPointer])
            }
        }
        else if (lowestTail < lowestHead){
        results += lowestTail
        tail.splice(tail.indexOf(lowestTail),1)
        if (tailPointer>headPointer){
            tailPointer--
            tail.unshift(costs[tailPointer])
            }
        }
        else if (lowestHead < lowestTail){
        results += lowestHead
        head.splice(head.indexOf(lowestHead),1)
            if (tailPointer>headPointer){
                headPointer++
                head.push(costs[headPointer])
            }
        }
    }
    return results
};



