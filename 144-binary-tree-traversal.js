// https://leetcode.com/problems/binary-tree-preorder-traversal/

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return null;
    const stack = [root];
    const result = [];

    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.eft);
    }
    return result;
};


var preorderTraversal = function(node) {
    let stack = [];
    let output = [];
    while (stack.length || node !== null) {
        if (node !== null) {
            output.push(node.val);
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop().right;
        }
        
    }
    return output;
};