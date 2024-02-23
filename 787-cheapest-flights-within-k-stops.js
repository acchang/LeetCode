// https://leetcode.com/problems/cheapest-flights-within-k-stops/?envType=daily-question&envId=2024-02-23
// https://www.youtube.com/watch?v=5eIK3zUdYmE&t=1213s

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = {}
    prices[src] = 0
    let counter = 0

    while (counter < k+ 2){
        const tempPrices = {...prices}
        for (src, d, p in flights){
            if (prices[src] == Infinity){continue}
            if (prices[src]+ p < tempPrices[d]){tempPrices[d] = prices[src]+ p}
        }
    }

    prices = tempPrices

    if (prices[dst] == Infinity){return -1} else {return prices[dst]}

};