// https://algo.monster/liteproblems/2331
// https://leetcode.com/problems/evaluate-boolean-binary-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function dfs(node){
    if (!node){return}
    if (!node.left && !node.right){return node.val}
    else {
        return node.val == 2 ? dfs(node.left)  || dfs(node.right) : 
        dfs(node.left) && dfs(node.right)
        }
    }
    return dfs(root)
};