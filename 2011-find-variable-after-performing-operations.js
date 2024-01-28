// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/1158706152/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let ans = 0
    for (op of operations){
        if (op == "++X" || op == "X++"){ans++}
        if (op == "--X" || op == "X--"){ans--}
    }
    return ans
};

/// this also works, but must bc --acc not acc--

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc, cV) => cV[1] === "+" ? ++acc : --acc, 0)
};

/*
https://stackoverflow.com/questions/6867876/javascript-i-vs-i

++variable increments the variable, returning the new value.

variable++ increments the variable, but returns the old value.

--variable decrements the variable, returning the new value.

variable-- decrements the variable, but returns the old value.

For example:

a = 5;
b = 5;
c = ++a;
d = b++;
a is 6, b is 6, c is 6 and d is 5.

If you're not using the result, the prefix operators work equally to the postfix operators.
*/