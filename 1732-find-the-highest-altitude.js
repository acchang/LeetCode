// https://leetcode.com/problems/find-the-highest-altitude/solutions/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = [0]
    for (change of gain){
        altitude.push(altitude[altitude.length-1] + change)
    }
    return Math.max(...altitude)
};

// one pass, better:

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0
    let currAlt = 0
    for (change of gain){
        currAlt = currAlt + change
        if (currAlt > highest){highest=currAlt}
    }
    return highest
};
