// https://leetcode.com/problems/find-bottom-left-tree-value/editorial/?envType=daily-question&envId=2024-02-28
// daily q 02-27-24

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
var findBottomLeftValue = function(root) {
    let maxDepth = -1
    let bottomLeftValue = 0
    dfs(root, 0)
    return bottomLeftValue

    function dfs (node, depth){
        if (!node){return}
        if (depth > maxDepth){maxDepth = depth; bottomLeftValue = node.val}
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
};

// No need to specify bc we visit nodes to the left first, so we know this is the leftmost node in this level