// Jan 24 2024 daily question
// https://leetcode.com/problems/longest-common-subsequence/description/?envType=daily-question&envId=2024-01-25
// https://leetcode.com/problems/longest-common-subsequence/solutions/598743/javascript-solution/?envType=daily-question&envId=2024-01-25

// https://www.youtube.com/watch?v=Ua0GhsJSlWM

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const matrix = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0));
    for (let i=matrix.length-2; i>-1;i--){
        for (let j=matrix[0].length-2; j>-1; j--){
            if (text1[i] == text2[j]){
                matrix[i][j] = (matrix[i+1][j+1])+1
                }
            else {matrix[i][j] = Math.max((matrix[i+1][j]), (matrix[i][j+1]))}
        }
    }
    return matrix[0][0] 
};

// easy with the formula. 
// build matrix, start from lower right corner. If match, add diagonally to the right.
// if not match, take the greater of the one right or the one below.
// answer is at upper left

/*
[   a. c  e
a  [ M, 2, 2, 0 ],
b  [ 2, 2, 2, 0 ],
c  [ 2, M, 1, 0 ],
d  [ 1, 1, 1, 0 ],
e  [ 1, 1, M, 0 ],
  [ 0, 0, 0, 0 ]
]

for every element in the column, matching to row
when there is a match, you add it to the one before

you take the bigger one to the left or below because that signifies at that point, which ever gets more matches between same column or same row

you take diagonal when matched because that assumes parity (ex: a and a match and this assumes the number at ce and bcde is the correct matches for that subproblem)

*/









// below is a failed (0)n^3 solution
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
                                stopPoint = j+1
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

// The below passes 20/47 but it's getting too complicated with three loops
// abandon this line of pursuit
// "abcba" and "abcbcba" yields ans 6 but should be 5
// it can work, I just need to get the coordination right
// 22 / 47 outputs 3 but it should be 2. I'm just 1 off.
// I'm confusing myself and this is not the right way anyway... do DP or recursive.

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
// marks where if you reach the end of one letter matching, restart from here
                                j++
                                break}
            j++
            if (j==short.length){j=stopPoint; break}
// if at the end of the larget word, restart at the stopPoint
        }
    }
}
    return longest
};

// above fails on text1 = "ylqpejqbalahwr", text2 = "yrkzavgdmdgtqpg"
// resets at y and r
// it outputs 2 but it should be 3
// bc yqp works
// but it would have to know not to match for the r at the second index from "yrkzavgdmdgtqpg"
// right now it just matches "yr" and if that's it, it starts again at "k"
// it would require many more permutations.




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