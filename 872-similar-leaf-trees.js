// https://leetcode.com/problems/leaf-similar-trees/?envType=daily-question&envId=2024-01-09

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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leaf1 = []
    let leaf2 = []

    function dfs(node, leaf){
        if (!node){return}
        // if the node exists
        if (!node.left && !node.right){
            leaf.push(node.val)
            return
        }
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root1, leaf1);
    dfs(root2, leaf2);

    return leaf1.join("-") == leaf2.join("-") 
};