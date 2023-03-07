/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 1
    let high = Math.min(...time) * totalTrips

    while (low<high){
        let mid = Math.floor((low+high)/2)
        let trips = time.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)
        if (trips >= totalTrips){high = mid }
        else low = mid + 1
    }
return high
};

