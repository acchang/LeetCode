https://leetcode.com/problems/check-if-it-is-a-straight-line/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coords) {
    coords.sort((a, b) => b[0] - a[0])
    let gaps = []
    for (let i=0; i<coords.length-1; i++){
        let difX = coords[i][0]-coords[i+1][0]
        let difY = coords[i][1]-coords[i+1][1]
        gaps.push(Math.abs(difX/difY))
    }
    return gaps.every((num) => num === gaps[0]) ? true : false
};

// better, faster, to eliminate when slope has a zero denominator (vertical line)

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function (coordinates) {
    const findDiff = (c1, c2) => {
        if((coordinates[0][0]-coordinates[1][0])===0){
// compares x coord of two points, if they are the same, it's a vertical line
        return  (c2[0] - c1[0])/(c2[1] - c1[1])}
// so return dx/dy
// it's not just 0 because it needs to check everything else
// but vertical line need to be set bc slope of a vertical line is infinity or undefined as it has no y-intercept and the denominator in the slope formula is zero
// and slope of horizontal line would also be zero but the x coords difference would not be zero
        else
        return (c2[1] - c1[1]) / (c2[0] - c1[0])
// otherwise return dy/dx
    }

    const diff =  findDiff(coordinates[0], coordinates[1])
    
// put each coordinate through the function
    for (let i = 0; i < coordinates.length - 1; i++) {
        if (diff !== findDiff(coordinates[i], coordinates[i + 1]))
            return false
    }

    return true
};

