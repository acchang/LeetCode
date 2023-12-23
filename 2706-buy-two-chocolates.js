/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let lowest = Infinity
    let second = Infinity
    for (price of prices){
        if (price<lowest){second=lowest; lowest=price} 
        else if (price<second){second=price};
    }
    let result = money - (lowest+second)
    return result > -1 ? result : money
};


/// added counting sort solution:

var buyChoco = function(prices, money) {
    // Array to store frequency of prices
    let freq = new Array(101).fill(0);
    for (let p of prices) {
        freq[p]++;
    }
    // so freq is already sorted and freq[p] is often that number appears

    // Assume minimum and second minimum to be zero.
    // Since prices[i] cannot be 0, the 0 value implies
    //They haven't been computed yet.
    let minimum = 0;
    let secondMinimum = 0;
    for (let price = 1; price <= 100; price++) {
        if (freq[price] > 1) {
    // now we can go 1 through 100 as the price
    // the numbers are sorted, so you take the first which appears more than once and that's the min and secondMin, and break
                minimum = price;
            secondMinimum = price;
            break;
        } else if (freq[price] == 1) {
            minimum = price;
// if it only appears once, then that's your min
            break;
        }
    }


    // If the second minimum is not found, then find it
    if (secondMinimum == 0) {
        for (let price = minimum + 1; price <= 100; price++) {
    // start at the point after the first minimum
            if (freq[price] > 0) {
                secondMinimum = price;
                break;
            }
        }
    }

    // Minimum Cost
    let minCost = minimum + secondMinimum;

    // We can buy chocolates only if we have enough money
    if (minCost <= money) {
        // Return the Amount of Money Left
        return money - minCost;
    }

    // We cannot buy chocolates. Return the initial amount of money
    return money;
};
