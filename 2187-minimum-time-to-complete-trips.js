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
        let mid = Math.floor((low+high)/2)
        let time = piles.reduce((acc, cur)=> acc + Math.ceil(cur/mid), 0)
        console.log("m", mid, "t", time)
        if (time > h){low = mid + 1}
        if (time <= h){high = mid}
    }
return low
};

// passed initial tests
// error of time limit exceeded was happening because first test passed but second test went over and the tests are not separated.
// second test was failing because I had `math.ceil` in `let mid = Math.floor((low+high)/2)`
// Math.ceil would not work because there would never be an end condition. When mid became the higher number, then high became mid, it would always be more and loop forever.
