/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // another binary search problem settling on output
    // one end, rate of quickest eat is max of piles
    // other is 1, which will not fulfill eating all
    // find the number that fulfills less than max of piles
};

var minEatingSpeed = function(piles, h) {
    let slow = 1
    let fast = Math.max(...piles)
// is the time enough to eat the pile?

    while (fast>slow){
        let mid = Math.floor((slow+fast)/2)
        let time = piles.reduce((acc, cur)=> acc + Math.ceil(cur/mid), 0)
        if (time>=h){fast = mid}
        if (time<h){slow = mid + 1}
    }
return fast, slow
};
