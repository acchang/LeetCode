/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    // see if there are two ends in the word
    // count the number of unique letters between the ends
    // taking the first and last instance will not repeat ends
    // create set to prevent repeats and use size to count
    let ans = 0
    for (let i=0; i<s.length; i++){
        if (i == s.indexOf(s[i]) && s.indexOf(s[i])<s.lastIndexOf(s[i])){
            ans += new Set(s.slice(s.indexOf(s[i])+1, s.lastIndexOf(s[i])).split("")).size
        }else {continue}
    }
    return ans
};