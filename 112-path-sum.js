// https://leetcode.com/problems/path-sum/description/


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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    function dfs(node, curSum){
        if (!node){return false}
        curSum += node.val
        if (!node.right & !node.left){return curSum == targetSum}

        return dfs(node.left) || dfs(node.right)
    }

    dfs(root, curSum=0)
};


////

var hasPathSum = function(root, targetSum) {
    function helper(root, target){
        if(!root)
            return false;
        
        if(!root.right && !root.left && root.val == target)
            return true;

        let left = helper(root.left, target-root.val);
        let right = helper(root.right, target-root.val);

        return left || right;
    }

    return helper(root, targetSum);
};