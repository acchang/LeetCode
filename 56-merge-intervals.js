/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// [[1,4],[4,5]] OK
// [[1,4],[2,3]] NO

var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0]-b[0])
    for (let i=1; i<intervals.length; i++){
        if (intervals[i][0] <= intervals[i-1][1] && intervals[i][1] <= intervals[i-1][1]) {
            intervals.splice(i, 1);
            continue
            };
        if (intervals[i][0] <= intervals[i-1][1]){
            intervals[i-1][1] = intervals[i][1];
            intervals.splice(i, 1) 
        }
    }
    return intervals
};