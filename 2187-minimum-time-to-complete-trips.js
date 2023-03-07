/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let currentTrips = 0
    let currentTime = 0

    while (currentTrips < totalTrips){
        currentTime ++
        currentTrips = time.reduce((acc,cV) => acc + Math.floor(currentTime*(1/cV)), 0)
        console.log(currentTrips)
        }
        return currentTime
};