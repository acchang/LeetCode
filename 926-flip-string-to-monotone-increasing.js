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


// another solution, MUCH more complicated. 

var minFlipsMonoIncr = function(s) {
    let zeros = 0;
    let ones = 0;
    for (let c of s) {if (c === "0") zeros++;}
    // essentially count the zeroes

    let minFlips = Infinity;
    for (let c of s) {
        minFlips = Math.min(minFlips, ones + zeros); 
            if (c === "1") {ones++}
        // upon the first character, if it's a one, then one gets incremented
            else zeros--;
        // if it's a zero, it gets decremented.

        // a one may have to change if zeros follow. A zero doesn't have to change, so it disappears. If you start with all zeroes (00000), infinity or 4, then reduce to zero. If 0001001 you get o1, z2

        // 00100 inf or 4; 4; z3 o0
        // 0100 4 or 3; 3; z2 o0 
        // 100 3 or 2; 2; z2 o1
        // 00 2 or 3; 2; z1 o1
        // 0 2 or 2; 2; z1 o1
        // 1 or 2 = 1

        // the appearance of a "one" means minFlips increases, "zero" means decreases.
        
        // minflips is the minimum of ones + zeros now or previously
        // 0010 (1) either flips
        // 00100 (1) one flips (this is the last one)
        // 0010011( 2 zeros or 3 ones)
        // 001001 (1) one flips
        // 01011 (1) either flips; 011011, zero flips
        // the minimum is essentially how many ones before all zeros are out of the way? 

        // 0010011 inf vs 4z; 4; 0o 3z -- 4 is how many zeros to make all ones
        // 010011 4 vs 3z; 3; 0o 2z 
        // 10011 3 vs 2z; 2; 1o 2z -- 1 gets added bc its a flip before zeros
        // 0011 2 vs 3; 2; 1o 1z
        // 011 2 vs 2; 2; 0o 1z
        // 11 2 vs 1; 1;
        // 1 1 vs 1; 1 


        // 001 inf/ 2z; 2; 0o 1z
        // 01 2/ 1; 1; 0o 0z
        // 0 1/ 0; 0; 1o 0z
        // 0!


        // when all zeroes flipped then it's just the ones
        // if ones are flipped then 
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
