// https://leetcode.com/problems/search-in-a-binary-search-tree/description/


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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    function traverse(r){
        if (!r){return}
        if (r.val == val){return r}
        return traverse(r.left) || traverse(r.right)
    }

    return traverse(root) || null
};