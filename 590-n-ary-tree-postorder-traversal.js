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
    let stk = []
    stk.push(root)
    while (stk.length>0){
        let popped = stk.pop()
        ans.push(popped.val)
        stk.push(...popped.children)
    }
    return ans.reverse()
};
