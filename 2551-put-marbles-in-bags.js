/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    if (weights.length === k || k === 1){return 0}
    let cuts = []
    for (let i=0; i<weights.length-1; i++){
        cuts.push(weights[i]+weights[i+1])
    }
    cuts.sort((a,b) => a-b)
    let minCuts = cuts.splice(0,k-1).reduce((a,cV)=> a + cV, 0)
    let maxCuts = cuts.splice(-k+1).reduce((a,cV)=> a + cV, 0)
    return maxCuts - minCuts
};