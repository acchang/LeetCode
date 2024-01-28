// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/1158706152/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let ans = 0
    for (op of operations){
        if (op == "++X" || op == "X++"){ans++}
        if (op == "--X" || op == "X--"){ans++}
    }
    return ans
};