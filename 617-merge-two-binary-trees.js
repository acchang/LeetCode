// https://leetcode.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // base case: if one is null then return the other.
    if (!root1 || !root2) return root1 || root2

    let node = new TreeNode(root1.val + root2.val)

    node.left = mergeTrees(root1.left, root2.left)
    node.right = mergeTrees(root1.right, root2.right)
    console.log(node)
    
    return node
};

