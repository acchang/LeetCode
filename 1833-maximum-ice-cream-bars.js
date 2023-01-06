/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    if (costs.reduce((a,c)=>(a+c)) < coins){return costs.length}
    let ordered = costs.sort((a,b)=>a-b);
    if (ordered[0] > coins) {return 0};
    for (let i=0; i<ordered.length; i++){
        if (ordered[i]<=coins){coins -= ordered[i]} 
        else {return i};
    }
};

// this one is pretty good, slower but better memory

var maxIceCream = function (costs, coins) {
    let i = 0, count = 0;
    costs.sort((a, b) => a - b);
    while (i <= costs.length) {
        if (costs[i] <= coins) {
            coins -= costs[i];
            count++;
        }
        i++;
    }
    return count;
};