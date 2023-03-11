// https://leetcode.com/problems/longest-palindromic-substring/description/

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