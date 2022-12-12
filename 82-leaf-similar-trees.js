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
    let r1 = getLeafNodes(root1);
    let r2 = getLeafNodes(root2);
    return (r1.length === r2.length && r1.every((item, i) => item === r2[i]));
};

var getLeafNodes = function (root) {
    let range = [];
    const traverse = (root) => {
        if (root.left == null && root.right == null) range.push(root.val);
        if (root.left !== null) traverse(root.left);
        if (root.right !== null) traverse(root.right);
    }
    traverse(root);
    return range;
}

// https://leetcode.com/problems/leaf-similar-trees/submissions/858393280/

/*
Runtime
102 ms
Beats
49.70%
Memory
44.6 MB
Beats
49.91%
