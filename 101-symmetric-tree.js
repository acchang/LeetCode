// https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */

var isSymmetric = function(root) {
    if (root == null) return true;
    // immediate end condition, if root doesn't exist,
    return isMirror(root.left, root.right);
    // otherwise recurse the function

    function isMirror(leftNode, rightNode) {
        if (leftNode == null && rightNode == null) return true;
        if (leftNode == null || rightNode == null) return false;
        // these are end conditions, if both nodes are true, if one is null and both are not null, then one is uneven and false.
        return leftNode.val === rightNode.val &&
        // then you look at each node on the left and right and their children (mirror values)
            isMirror(leftNode.left, rightNode.right) &&
            isMirror(leftNode.right, rightNode.left);
    }
};

// iterative

var isSymmetric = function (root) {
    if (root == null) return true;
    let queue = [root.left, root.right];
    while (queue.length > 0) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if (leftNode == null && rightNode == null) continue;
        if (leftNode == null ||
            rightNode == null ||
            leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left, rightNode.right);
        queue.push(leftNode.right, rightNode.left);
    }
    return true;
}