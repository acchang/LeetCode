https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i=0; i<haystack.length; i++){
        // console.log(i, haystack.slice(i,i+needle.length), needle)
        if (haystack.slice(i,i+needle.length) === needle){
            return i
        }
    }
    return -1
};


