// https://leetcode.com/problems/flip-string-to-monotone-increasing/

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const n = s.length;
    let zeros = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        if (s.charAt(i) === "0") zeros++;
    }
    // count the zeros from the end
    console.log(zeros)
    let minFlips = Infinity;
    let ones = 0;
    
    for (let i = 0; i < n; i++) {
        minFlips = Math.min(minFlips, ones + zeros);
        console.log("loop", minFlips, ones + zeros)
        // first go is 0 (ones) + zeros from the end
        // 00011000
        // 6, 2
        // 2 is the answer, zeroes go to 0
        // 010110
        // z=3, look at minFlips


        if (s.charAt(i) === "1") ones++;
        else zeros--;
    }
   
   console.log("end1", minFlips, ones, zeros)
    minFlips = Math.min(minFlips, ones + zeros);
    console.log("end", minFlips)
    return minFlips;
};