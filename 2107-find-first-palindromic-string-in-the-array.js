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