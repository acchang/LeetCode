/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    let low = 1
    let high = Math.max(...piles)

    while (high>low){
        console.log("h", high, "l", low)
        let mid = Math.ceil((low+high)/2)
        let time = piles.reduce((acc, cur)=> acc + Math.ceil(cur/mid), 0)
        console.log("m", mid, "t", time)
        if (time > h){low = mid + 1}
        if (time < h){high = mid}
        if (time === h){return mid}
    }
// return low
};