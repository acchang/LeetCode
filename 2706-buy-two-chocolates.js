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