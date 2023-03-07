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
        currentTrips = time.map(e => Math.floor(currentTime*1/e)).reduce((acc, cV) => acc + cV)
        }
        return currentTime
};