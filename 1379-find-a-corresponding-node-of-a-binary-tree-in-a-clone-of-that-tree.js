// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    function traverse(orig, clon){
        if (!orig){return};
        if (orig == target){return clon}
        return traverse(orig.left, clon.left) || traverse(orig.right,clon.right);
    }
    return traverse(original, cloned)
};

