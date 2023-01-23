// Jan 21 2023: https://leetcode.com/problems/palindrome-partitioning/
// https://www.youtube.com/watch?v=cWNEl4HE2OE

/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (s, start, end) => {
    while(start < end) {
        if (s[start] !== s[end]) return false;
        start++
        end--
    }
    return true
}

var partition = function(s) {
    let result = []

    const dfs = (i, s, slate) => {
        if (i === s.length){
            result.push(slate.slice())
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)){
                slate.push(s.slice(i, j+1));
                dfs(j+1, s, slate)
                slate.pop(); 
            }
        }
    }
    dfs(0, s, []);
    return result
}






// run depth first search
// partition first, evaluate, eliminate
// partition again, 

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
