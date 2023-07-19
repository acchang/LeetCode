// https://leetcode.com/problems/non-overlapping-intervals/submissions/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = 0
    let endValue = intervals[0][1];
    for (let i=1; i<intervals.length; i++){
        if (intervals[i][0]<endValue && intervals[i][1]>endValue){res++}
        else if (intervals[i][0]<endValue && intervals[i][1]<=endValue){;res++; endValue=intervals[i][1]}
        else {endValue=intervals[i][1]}
    }
    return res
};