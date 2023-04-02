// https://leetcode.com/problems/minimum-time-to-complete-trips/description/

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

/*
4/1 revisted
https://discord.com/channels/735923219315425401/1082710949192028170/1083131425206845502
+1 and -1 are good to consider:
https://stackoverflow.com/questions/27655955/why-does-binary-search-algorithm-use-floor-and-not-ceiling-not-in-an-half-open
and why adding is necessary:
https://stackoverflow.com/questions/47256647/binary-search-python-why-do-we-use-mid-1-or-mid-1

*/

var minimumTime = function(time, totalTrips) {
    let low = 1
    let high = Math.min(...time) * totalTrips

    while (low<high){
        let mid = Math.ceil((low+high)/2)
        let trips = time.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)
        if (trips > totalTrips){console.log("bigger"), high = mid - 1 }
        if (trips <= totalTrips) {console.log("lesser"), low = mid }
    }
     return high
}