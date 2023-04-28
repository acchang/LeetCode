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

// recursive

var inorderTraversal = function(root) {
    let res = []
    function inorder(root){
        if (!root){return} else {inorder(root.left); res.push(root.val); inorder(root.right)}
    }
    inorder(root)
    return res
};


// iterative
// see https://www.youtube.com/watch?v=g_S5WuasWUE

var inorderTraversal = function(root) {
    let stack = [];
    let result = [];
    let currentNode = root;

while (currentNode || stack.length) {
    if(currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
    } else {
    currentNode = stack.pop()
    result.push(currentNode.val);
    currentNode = currentNode.right;
    }            
}
return result;
};