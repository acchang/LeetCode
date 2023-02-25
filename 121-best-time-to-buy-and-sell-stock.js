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

Translated from Python:
https://medium.com/swlh/crack-leetcode-121-best-time-to-buy-and-sell-stock-f0f53be4e36c

*/

// mess with Kadane's
// tried: https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
// kadane's algo JS: https://www.youtube.com/watch?v=edDqVOOEAYU
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/1094656/javascript-kadane-s-algorithm-all-solutions/?q=kadane+javascript&orderBy=most_relevant

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentProfit = 0;
    let globalProfit = 0;
    let buy = prices[0];
    let sell = 0;
        
    for(let i = 1 ; i < prices.length ; i++){
        sell = prices[i];
        currentProfit = sell - buy;
        
        if(currentProfit > globalProfit){globalProfit = currentProfit}
        if(prices[i] < buy){buy = prices[i]}
    }
    
    if(globalProfit < 0){return 0} else {return globalProfit}
}