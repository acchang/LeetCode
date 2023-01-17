// https://leetcode.com/problems/flip-string-to-monotone-increasing/

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // min flips to go all 1, all 0 or 01
    // look at zeroes from the start or ones from the end
    // find the turning point
    // from the end, how many 0 to become 1 
    // from the front, how many 1 to become 0
    // do some kind of recursion
};



var minFlipsMonoIncr = function(s) {
    const n = s.length;
    let zeros = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        if (s.charAt(i) === "0") zeros++;
    }
    
    let minFlips = Number.MAX_SAFE_INTEGER;
    let ones = 0;
    
    for (let i = 0; i < n; i++) {
        const digit = s.charAt(i);

        minFlips = Math.min(minFlips, ones + zeros);

        if (digit === "1") ones++;
        else zeros--;
    }
   
    minFlips = Math.min(minFlips, ones + zeros);
    
    return minFlips;
};
