/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    function getOutcome(t) {
        return time.reduce((acc, cur) => acc + Math.floor(t / cur), 0)
    }
    const minTime = Math.min(...time)
    // minTime is the minimum of the array time (or the fastest)

    let low = 1, high = totalTrips * minTime
    // high boundary is fastest * trips, low is 1

    // find earliest high such that getOutcome(high) >= totalTrips --- ??

    while (low < high) {
    // while the low is less than highest possible

        const mid = Math.floor((low + high) / 2)
// take the mid point, which is (1 + 5)/2 = 3

        const outcome = getOutcome(mid)
// does time of 3 get you more than total trips

        if (outcome >= totalTrips)  high = mid
// if not, then narrow it one way

        else low = mid + 1
// then the other
    }
    return high
};


