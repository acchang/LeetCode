// https://leetcode.com/problems/cheapest-flights-within-k-stops/?envType=daily-question&envId=2024-02-23
// https://www.youtube.com/watch?v=rPuNr0D97hg

var findCheapestPrice = function(n, flights, src, dst, k) {
    let adj = new Array(n)
    for (let i=0; i<n; i++){
        adj[i] = new Array
    }
    for (let [from, to, price] of flights){
        adj[from].push([to,price])
    }

console.log("adj", adj)

let memo = new Array(n).fill(Infinity)
let queue = [[src, 0]]
// queue has node and price

while (queue.length && k> -1){
    console.log("queue", queue)
// while there's still stuff in the queue and k hasn't dropped below zero
    let sz = queue.length
    while (sz--) {
        let [node, price] = queue.shift()
        console.log("qs", [node, price])
    // remove first element from queue array and call it node, price
        for (let [neighbor, cost] of adj[node]){
    // examine the adjacency array of that node and look at [to, cost]
            if (memo[neighbor] < price + cost) {console.log("no update"); continue}
    // memo is the destination, it currently starts at Infinity
    // price comes from the queue, cost comes from the adjacency array
    // if the price plus cost is greater than memo of the destination, ignore
    // if it's less then that's the new memo of the destination
            memo[neighbor] = price + cost
            console.log("update memo", memo)
            queue.push([neighbor, memo[neighbor]])
    // push into the queue the destination and cost
        }
    }
    k--
    // reduce the stops
}

// in the end you get a memo array with the costs of each destination
return memo[dst] == Infinity ? -1: memo[dst]
}





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