/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b)=>b[0]-a[0])
    let ans = 0
    for (let i=1; i<points.length; i++){
        if (points[i-1][0]-points[i][0]>ans){ans=points[i-1][0]-points[i][0]}
    }    
    return ans
};
