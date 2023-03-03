https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i=0; i<haystack.length-needle.length-1; i++){
        if (haystack.slice(i,needle.length) === needle){
            return i
        }
    }
    return -1
};

