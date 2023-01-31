/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPoint = prices[0];
    let currProfit = 0;
    let totalProfit = 0;

    for (let i=1; i<prices.length; i++){
        currProfit = prices[i]-buyPoint;
        if (currProfit > totalProfit){totalProfit = currProfit}
        if (currProfit < 0) {buyPoint = prices[i]}
    }
    return totalProfit
};

/*
The key is the buyPoint doesn't move unless currProfit goes negative
If current profit goes negative that means buy is higher than sell and it's better to start anew bc everything after will be higher.

[7,1,5,3,6,4]
cp = 1-7 = -6; No tp =0; bp = 1
cp = 5-1 = 4; tp =4; No
cp = 3-1 = 2; No tp =4; No
cp = 6-1 = 5; tp =5; No
cp = 4-1 = 3; No tp =5; No
*/



// Not working:
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currProfit = 0;
    let maxProfit = 0;

    for (let i=1; i<prices.length; i++){
        currProfit = Math.max(0, maxProfit += prices[i] - prices[i-1]);
        maxProfit = Math.max(currProfit, maxProfit)
    }
    return maxProfit;
};