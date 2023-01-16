/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// [[1,4],[4,5]] OK
// [[1,4],[2,3]] OK
// fails on 
// [[1,4],[0,2],[3,5]]
// [[0,4],[3,5]]
// Expected
// [[0,5]]

var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0]-b[0])
    let answer = []
    for (let i=0; i<intervals.length; i++){
        const last = answer.at(-1);
        if (!answer.length || intervals[i][0] > last[1]){answer.push(intervals[i])}
        else (last[1] =  Math.max(last[1], intervals[i][1]))
    }
    return answer
};


// working through this solution: https://leetcode.com/problems/merge-intervals/solutions/2105757/

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const results = [];
    // use the results to compare
    for(let interval of intervals) {
        const prev = results.at(-1);
        if (!results.length || prev[1] < interval[0]) {
    // if the holder has nothing or the end of what's in there is less than the new one, just put a new one in
            results.push(interval);
        } else {
            prev[1] = Math.max(prev[1], interval[1])
    // otherwise if the end of what's in there is greater, then the end of what's in there is the greater of what's in there or the new one
        }
    }
    return results;
};