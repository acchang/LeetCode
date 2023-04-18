// https://leetcode.com/problems/merge-strings-alternately/


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = ""
    let remainder
    let shorter = Math.min(word1.length, word2.length)
    for (let i=0; i<shorter; i++){
        answer += word1[i] + word2[i]
    }
    word1.slice(shorter) ? remainder = word1.slice(shorter) : remainder = word2.slice(shorter)
    return answer + remainder
};

