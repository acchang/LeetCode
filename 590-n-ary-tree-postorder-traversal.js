// https://algo.monster/liteproblems/590
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let ans = []
    if (!root){return ans}
    let stack = []
    stack.push(root)
// creates a stack with the root
    while (stk.length>0){
        let popped = stack.pop()
        ans.push(popped.val)
// pops the first element and puts it in the ans
        stack.push(...popped.children)
// then puts what's remaining in the stack
    }
    return ans.reverse()
// then reverses it
};
