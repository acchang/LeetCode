/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals = intervals.sort((a,b) => a[0]-b[0]);
    let answer = [];
    for (interval of intervals){
        const last = answer.at(-1);
        if (!answer.length || interval[0] > last[1]){answer.push(interval)}
        else (last[1] =  Math.max(last[1], interval[1]))
    }
    return answer
};
