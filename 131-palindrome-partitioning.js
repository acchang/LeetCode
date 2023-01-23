// Jan 21 2023: https://leetcode.com/problems/palindrome-partitioning/
// https://www.youtube.com/watch?v=cWNEl4HE2OE

/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
    let result = []
    const dfs = (i, s, stack) => {
        if (i === s.length){
            result.push(stack.slice())
            return;
        }
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)){
                stack.push(s.slice(i, j+1));
                console.log("1", stack)
                dfs(j+1, s, stack)
                    // after stack = ['a' ], then stack = ['a','a'], then [ 'a', 'a', 'b' ]
                stack.pop();
                    // last dfs call ends so stack is now [ 'a', 'a' ], then [ 'a' ] to []
            }
            // then i moves on to next, ie ['aa']
        }
    }
    dfs(0, s, []);
    return result
}

const isPalindrome = (s, start, end) => {
    while(start < end) {
        if (s[start] !== s[end]) return false;
        start++
        end--
    }
    return true
}


// run depth first search
// partition first, evaluate, eliminate
// partition again, 

var isPalindrome = function(word) {
for (let i=0; i<Math.floor(word.length/2); i++){
    if (word[i] === word[word.length-1-i]){
        continue
    } else break
    }
return word
}
