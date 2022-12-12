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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, L, R) => {
    let sum = 0;
    const traverse = (root) => {
        if (root.val >= L && root.val <= R) sum += root.val;
        if (root.left !== null) traverse(root.left);
        if (root.right !== null) traverse(root.right);
    }
    traverse(root);
    return sum;
};

/* https://leetcode.com/problems/range-sum-of-bst/submissions/858353513/

Runtime
234 ms
Beats
82.45%
Memory
73.2 MB
Beats
94.62%

