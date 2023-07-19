// https://leetcode.com/problems/non-overlapping-intervals/submissions/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    // sort it
    let res = 0
    let endValue = intervals[0][1];
    for (let i=1; i<intervals.length; i++){
    // go from left to right
        if (intervals[i][0]<endValue && intervals[i][1]>endValue){res++}
    // if the first of the current is less than last of the previous and last of previous is more then remove the CURRENT
    // *---*
    //   *----*
        else if (intervals[i][0]<endValue && intervals[i][1]<=endValue){res++; endValue=intervals[i][1]}
    // if the if the first of the current is less than last of the previous and last of current is less than the last of the previous, then remove the PREVIOUS, because you want to remove as few as possible, remove the longer one and update end point to the current
    // *--------*
    //   *---*
        else {endValue=intervals[i][1]}
    // else just update endValue
    }
    return res
};