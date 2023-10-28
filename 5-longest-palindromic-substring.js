// https://leetcode.com/problems/longest-palindromic-substring/description/
// inspired by https://www.youtube.com/watch?v=XYQecbcd6_c


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // odd
    let finalAnswer = ""
    for (let i=0; i<s.length; i++){
        let currentAnswer = s[i]
        for (let j=1; j<(s.length/2); j++){
            if (s[i-j] === s[i+j]){currentAnswer = s[i-j]+currentAnswer+s[i+j]} else {break}
            }
        if (currentAnswer.length > finalAnswer.length){finalAnswer = currentAnswer}
    }
  
    // even
    for (let i=0; i<s.length-1; i++){
        if (s[i] != s[i+1]){continue}
        let currentAnswer = s[i]+s[i+1]
        for (let j=1; j<(s.length/2); j++){
            if (s[i+j+1] === s[i-j]){currentAnswer = s[i-j] + currentAnswer + s[i+j+1]} else {break}
            }          
        if (currentAnswer.length > finalAnswer.length){finalAnswer = currentAnswer}
    }

return finalAnswer
}

/*  Most popular answer is not better. It goes through every possible substring. It just does it in reverse to get biggest first and still times out.

abcdef
bcdef
cdef
ef
Then
abcde
bcde
bcd
bc
and so on
*/

var longestPalindrome = function(s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        console.log(c)
      for (let i = 0; i <= s.length - c; i++) {
        var check = s.substring(i, c);
        console.log(check)
        if (check === check.split("").reverse().join("")) return check;
      }
    }
  }

/* both solutions are O(n^2), no?
so why does one time out?
it's bc this shouldn't even work. With "abb" it returns
3
abb
2
ab
b
It doesn't get at "bb" when reducing from the front
*/

// for dp:
https://www.youtube.com/watch?v=UflHuQj6MVA