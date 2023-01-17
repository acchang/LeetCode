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
    let answer = 0
    let onesCounted = 0
    for (let c of s) {
        if (c == '0') {
            answer = Math.min(onesCounted, answer + 1)
            /* starting from the left, then the answer is the lesser of the onesCounted and answer+1 because:
            - onesCounted is the overall number of ones in the string. if the string never gets a 1 then no changes needed
            - if there is a 1, then OC goes to 1 (or 1 is flippable)
            - but answer is still 0 since it's lower (s: 001)
            - if another 0 follows, then OC is no longer 0 (OC is # flippable); answer gets 1 added to it. So OC=1 (flip the 1) or ans=1 (flip the 0) (s:0010). 
            - if s: 00101, OC = 2 and ans stays at 1, so flip the 0
            - if s: 00100, OC = 1 and ans then is 2, so flip the 1
            - in other words, after 1, the 0s start accumulating.
            */
        }
        else onesCounted++
    }
    return answer
};

/* writing it out:
if it's a 0 in the string, then the answer is the lesser of 0 or answer plus 1. 
try 00110
start at 0, if 0 then either you flip it once, which makes ans = 1, or not at all, which is less, so ans = 0
0 : oC is 0; ans 0+1 : ans is 0
0 : oC is 0; ans 0+1 : ans is 0
1 : oC is 1; ans stays at 0 bc 001
1 : oc is 2; ans stays at 0 bc 0011
0 : oC is 2; ans 0+1: ans is 1 00110
oC is 2, flip 2 ones
or flip one zero
--- let's continue
1 : oC is 3; ans stays at 1
*/

// another solution:


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
        // first go is 0 (ones) + zeros from the end
        // 00011000
        // 6, 2
        // 2 is the answer, zeroes go to 0
        // 010110
        // z=3, look at minFlips
        if (s.charAt(i) === "1") ones++;
        else zeros--;
    }

    minFlips = Math.min(minFlips, ones + zeros);
    return minFlips;
};