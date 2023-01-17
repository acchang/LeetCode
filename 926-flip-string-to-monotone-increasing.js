// https://leetcode.com/problems/flip-string-to-monotone-increasing/

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
// https://www.youtube.com/watch?v=-vZ7LjWSWzY
// EASIEST, starts from index of 0. If there is a 1, count it. 
// if there is a 0 after the 1, then remove from numberOfOnes and add to numberOfFlips

var minFlipsMonoIncr = function(s) {
    let numberOfFlips = 0;
    let numberOfOnes = 0;
    for (let c of s) {
        if (c == '1') {
            numberOfOnes++
        }
        else if (numberOfOnes > 0){
        // if there's a 1 and the current is not a 1, flips increases
            numberOfFlips++;
        // ones decreases too bc if s:0101, then 1 is matched with 0 and cancels out
            --numberOfOnes;

        }
    }
    return numberOfFlips
};


// another solution, MUCH more complicated:

var minFlipsMonoIncr = function(s) {
    let zeros = 0;
    let ones = 0;
    for (let c of s) {if (c === "0") zeros++;}

    let minFlips = Infinity;
    for (let c of s) {
        minFlips = Math.min(minFlips, ones + zeros); 
        if (c === "1") {ones++};
        else zeros--;
    }

// ans is 2
// 0 MF: inf vs 3 (3); z:2,
// 0 MF: 3 vs 2+0 (2); z:1, 
// 1 MF: 2 vs 1+0 (1); o:1, z:1,
// 1 MF: 1 vs 2 (1); o:2, z:1
// 0 MF: 1 vs 3 (1); o:2, z:0
// the zeros count down because they will have to be flipped, or the ones have to be. If all zeros go, then just ones have to be flipped. 

// end:
// 1 vs 2 = 1
// change two ones or one zero

    minFlips = Math.min(minFlips, ones + zeros);
    return minFlips;
};
