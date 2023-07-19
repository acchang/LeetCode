/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let res = 0
    intervals.sort((a, b) => a[0] - b[0])
    for (let i=1; i<intervals.length; i++){
        if (intervals[i][0]>=intervals[i-1][1]){continue}
        if (intervals[i][0]<intervals[i-1][1]){res++}
    }
};