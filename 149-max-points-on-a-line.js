//https://leetcode.com/problems/max-points-on-a-line/description/

/**
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function(points) {
    if (points.length == 1){return 1}
    let answerMax = 0
    let slopesObject = {}
    for (let i=0; i<points.length; i++){
        for (let j=0; j<points.length; j++){
            slopesProp = getSlope(points[i], points[j])
            if (slopesProp in slopesObject){slopesObject[slopesProp] += 1} else {slopesObject[slopesProp] = 1};
        }
    let latestMax = Math.max(...(Object.values(slopesObject))) + 1
    if (latestMax > answerMax){answerMax = latestMax}
    slopesObject = {}
    }
    return answerMax
};

function getSlope(a,b){
    return ((b[0]-a[0])/(b[1]-a[1]))
}