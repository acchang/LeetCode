// Jan 24 2024 daily question
// https://leetcode.com/problems/longest-common-subsequence/description/?envType=daily-question&envId=2024-01-25
// https://leetcode.com/problems/longest-common-subsequence/solutions/598743/javascript-solution/?envType=daily-question&envId=2024-01-25


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1.length > text2.length){
        long = text1
        short = text2
    } else (long=text2, short=text1)
    let dp = Array(text2.length).fill("")
    console.log(text1, text2, dp)
/* use pointers? go through the shortest word with each letter of longer word
first match raises count, then break
move to second letter of longer word from everything after first match*/


// while (shortStart < short.length && longStart < long.length){
    let counter = 0
    let longest = 0
    let j=0
    let stopPoint

    for (let i=0; i<long.length; i++){
        console.log("i", i, long[i], j)
        if (counter==0){j=0}
        while (j<short.length){
            console.log("compare long", i, long[i], "short", j, short[j])
            if (short[j]==long[i]){counter++;
                                console.log("counter", counter)
                                stopPoint = j
                                j++
                                break}
            j++
            if (j==short.length){console.log("brk"); j=stopPoint; break}
            if (counter > longest)(longest=counter)
        }
    }
    return counter
};

/*  this passes initial test but fails on 18/47

text1 =
"oxcpqrsvwf"
text2 =
"shmtulqrypy"

if you start with s, there is only one match from text2 after svwf
but then you don't know if "hm" from "shmtulqrypy" matches before the "s" in "oxcpqrsvwf"
so you have to run a search starting with every letter in "shmtulqrypy" to see if any combos match "oxcpqrsvwf", which would be huge.
In this case there's a "qr" near the end of "shmtulqrypy" that matches with "oxcpqrsvwf"
So I could implement some sort of while loop for the longer word but it would be inefficient.
*/

// The below passes 20/47 but it's getting too complicated, abandon this line of pursuit

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1.length > text2.length){
        long = text1
        short = text2
    } else (long=text2, short=text1)

    let counter = 0
    let longest = 0
    let j=0
    let stopPoint

for (let k=0; k<long.length; k++){
    if (counter > longest)(longest=counter)
    startLong = k 
    counter = 0
    for (let i=startLong; i<long.length; i++){
        if (counter==0){j=0}
        while (j<short.length){
            if (short[j]==long[i]){counter++;
                                stopPoint = j
                                j++
                                break}
            j++
            if (j==short.length){j=stopPoint; break}
        }
    }
}
    return longest
};






//////////// old solution

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/* 
Google intvu q: https://www.youtube.com/watch?v=10WnvBk9sZc
video: https://www.youtube.com/watch?v=Ua0GhsJSlWM
from: https://stackoverflow.com/questions/59925509/javascript-longest-common-subsequence

*/

var longestCommonSubsequence = function(a, b) {
    const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
    // create a matrix of a.length + 1
    // for all those spaces, it will be b.length + 1

for(let i = 1; i < a.length + 1; i++) {
    // skip first row, start on down
    for(let j = 1; j < b.length + 1; j++) {
    // skip first slow, go across
        if(a[i-1] === b[j-1]) {
    // if first a is the same as first b
            matrix[i][j] = 1 + matrix[i-1][j-1];
    // then that plot get a 1 added to the total
        } else {
    // otherwise that plot is the maximum of the one above and to the left
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
        }
    }
}
// return the last plot
return matrix[a.length][b.length];
}

/* this is how it outputs:
"abcde", "ace"

0 1 2 3 
    0 a c e
0     0 0 0
a   0 1 1 1
b   0 1 1 1
c   0 1 2 2
d   0 2 2 2
e   0 2 2 3

the idea is you are methodically going through every letter in one word and seeing if it appears in the other. ie:
"Is 'a' in 'ace'"
"Is 'b' " and so on. 
It doesn't matter if b appears first b you were first checking all for `a` and once that was ok then all for `b`.
The order matters mainly for checking, and it's just going row for row.
The zeros are needed to allow for the step before and step above

This is a similar way but bottom up:
https://www.youtube.com/watch?v=Ua0GhsJSlWM
good explanation on how it keeps reducing the compared words