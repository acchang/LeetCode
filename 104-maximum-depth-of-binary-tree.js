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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null)  return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

// clever:
var maxDepth = function(root) {
    let depth = 0
    depthTraverse(root)
    function depthTraverse(root,nodeDepth = 1){
        if (!root){return}
        if (nodeDepth>depth){depth=nodeDepth}
// solution hinges on if nodeDepth>depth, only does it for one level
        depthTraverse(root.left,nodeDepth+1)
        depthTraverse(root.right,nodeDepth+1)
    }
    return depth  
};