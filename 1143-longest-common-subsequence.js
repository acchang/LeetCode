/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/* 
Google intvu q: https://www.youtube.com/watch?v=10WnvBk9sZc
video: https://www.youtube.com/watch?v=Ua0GhsJSlWM
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
0   
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



