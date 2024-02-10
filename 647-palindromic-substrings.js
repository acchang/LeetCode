// https://leetcode.com/problems/palindromic-substrings/description/?envType=daily-question&envId=2024-02-10
// https://www.youtube.com/watch?v=4RACzI5-du8&t=2s


/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0
    for (let i = 0; i<s.length; i++){
        for (let left = i, right = i; left > -1 && right <s.length; left--, right++){
            if (s[left] == s[right]){res++} else break
        }
    }
    
    for (let j = 0; j<s.length; j++){
        for (let left = j, right = j+1; left > -1 && right <s.length; left--, right++){
            if (s[left] == s[right]){res++} else break
        }
    }
    return res
};