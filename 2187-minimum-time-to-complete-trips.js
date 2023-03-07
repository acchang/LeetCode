/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let tripsInOne = time.map(e => 1/e)
    let currentTrips = 0
    let currentTime = 0

    while (currentTrips < totalTrips){
        currentTime ++
        currentTrips = tripsInOne.map(e => Math.floor(currentTime*e)).reduce((acc, cV) => acc + cV)
        }
        return currentTime
};