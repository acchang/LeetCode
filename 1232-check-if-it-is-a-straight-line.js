https://leetcode.com/problems/check-if-it-is-a-straight-line/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coords) {
    let gaps = []
    for (let i=0; i<coords.length-1; i++){
        let difY = coords[i][0]-coords[i+1][0]
        let difX = coords[i][1]-coords[i+1][1]
        gaps.push([difY,difX])
    }
    return gaps.every((pair) => pair.every((val, index) => val === gaps[0][index]))
    ? true : false
};