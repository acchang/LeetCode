/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

//88% run, 62% memory

var countOdds = function(low, high) {
    let output = 0
    if (low%2!=0 && high%2!=0){output = ((high-low)/2) +1} else 
    {output = (high-low)/2}
    return output
};


// alt method: check if low is odd; if not, we can just increment it
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2957338/count-odd-numbers-in-an-interval-range/?orderBy=most_relevant

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if (low%2==0){low = low+1}
    return low > high? 0 : Math.floor((high-low)/2) +1 
};

// only 74% run, 72% memory


