/**
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function(points) {
    let answerMax = 0
    const slopesObject = {}
    for (let i=0; i<points.length; i++){
        for (let j=0; j<points.length; j++){
            slopesProp = getSlope(points[i], points[j])
            console.log("slope:" + slopesProp)
            if (slopesProp in slopesObject){slopesObject[slopesProp] += 1} else {slopesObject[slopesProp] = 1};
    console.log(j, slopesObject)
        }
    let latestMax = Math.max(slopesObject[slopesProp])
    // max = maximum of the slopesObject[slopesProp], if newm
    if (latestMax > answerMax){answerMax = latestMax}
    }
    return answerMax
};

function getSlope(a,b){
    return ((b[0]-a[0])/(b[1]-a[1]))
}





            // get slope for every pair of points
            // create only one hashmap: if new, slope, hash 1; if not, add 1
            // when i = j, slope wil be 0
            // store max recorded value
            // move on to next in outer loop
            // if denom is zero, slope is infinity
            // if they key is present, take assoc value + 1
            // hold the max as a global maximum, max is number of points with that one point in same line