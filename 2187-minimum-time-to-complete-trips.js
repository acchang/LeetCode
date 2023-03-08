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
var minEatingSpeed = function(piles, h) {
    let slow = 1
    let fast = Math.max(...piles)

    while (fast>slow){
        console.log("f", fast, "s", slow)
        let mid = Math.ceil((slow+fast)/2)
        let time = piles.reduce((acc, cur)=> acc + Math.ceil(cur/mid), 0)
        console.log("m", mid, "t", time)
        if (time>=h){fast = mid}
        if (time<h){slow = mid + 1}
    }
return slow
};

f 11 s 1
m 12/2=6 t 6 ok 

f 11 s 7 (6<h)
m 9 t 5 (9 is too fast, 5<h of 8) ok

f 11 s 10 ok
m 11 t 4


f 30 s 1
m 16 t 8


