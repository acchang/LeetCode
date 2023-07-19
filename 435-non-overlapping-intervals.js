/**
 * @param {number[][]} intervals
 * @return {number}
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let res = 0
    let endValue = intervals[0][1];
    intervals.sort((a, b) => a[0] - b[0])
    console.log(intervals)
    for (let i=1; i<intervals.length; i++){
        if (intervals[i][0]<endValue && ){res++} else {endValue=intervals[i][1]}
        console.log(endValue, res)
    }
    return res
};