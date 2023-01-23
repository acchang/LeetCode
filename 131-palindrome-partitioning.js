// Jan 21 2023: https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
    let answer = []
    let part = []
    if (i === s.length){
        answer.push(part)
    }
    
    return answer
}

var isPalindrome = function(word) {
for (let i=0; i<Math.floor(word.length/2); i++){
    if (word[i] === word[word.length-1-i]){
        continue
    } else break
    }
return word
}


// EVERY substring is a palindrome
// uses backtracking, try to solve previous

// divide in half and keep doing so, and put in answer if correct
    // if odd then ignore the middle character, or take for end, and match
