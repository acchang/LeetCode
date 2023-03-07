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
    // take the midpoint between the highest and lowest. Floor and not ceil bc you want to come down from the high and ceil would not do that. low is also adding up. 
        let trips = time.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)
    // calculate the real amount of trips resulting from the midpoint
        if (trips >= totalTrips){high = mid }
    // if the amount of trips (midpoint) is more than the total, then take that as the high
        else low = mid + 1
    // if the amount of trips (midpoint) is less than the total, raise the low
    }
return high
    // when the first time low is greater than the high, this is your answer.
};

// also the same:

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 1
    let high = Math.min(...time) * totalTrips

    while (high>low){
        let mid = Math.floor((low+high)/2)
        let trips = time.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)
        if (trips >= totalTrips){high = mid }
        if (trips < totalTrips) {low = mid + 1}
    }
return low
};


