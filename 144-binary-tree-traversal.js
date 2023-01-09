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
    if(!root) return [];
    const stack = [root];
    const result = [];
    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};

// from: https://www.youtube.com/watch?v=LK0ws89S78E&t=343s
// video shows pre-order traversal
// explanation of how parameteris written: https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-

var preorderTraversal = function(root) {
    if (!root) return []; 
    const result = []
    const preorder = (node) => {
        if (!node) return null;
        result.push(node.val);
        if(node.left) preorder(node.left);
        if (node.right) preorder(node.right);
    }
    preorder(root);
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