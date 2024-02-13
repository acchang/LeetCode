// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/?source=submission-ac
// Feb 12, 2024
// 31%

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (word of words){
        let test = word.split("").reverse().join("")
        if (test === word){return word}
    }
    return ""
};

// also pointers:

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    function isPalindrome(string){
        for (let start = 0, end = string.length-1; start<end; start++, end--)
            {if (string[start] != string[end]){return false}}
        return true
    }
    
    for (word of words){
        if (isPalindrome(word)){return word}
    }
    return ""
};
