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
        if (coins>ordered[i]){coins -= ordered[i]} else {return i+1};
    }
};