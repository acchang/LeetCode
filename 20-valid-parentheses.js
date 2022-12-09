/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s === ""){return true}
    if ( (s.length > 0) && (!s.includes("()")) && (!s.includes("[]")) && (!s.includes("{}")) ){return false}
    let newParens = s.replace('()','').replace('[]','').replace('{}','')
    return isValid(newParens)
};

/* https://leetcode.com/problems/valid-parentheses/
parameters - only brackets
returns - true or false
examples
psuedo code



