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

// also:

// from: https://leetcode.com/problems/range-sum-of-bst/solutions/4525845/beats-100-depth-first-search-explained-with-video-c-java-python-js/?envType=daily-question&envId=2024-01-08

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

var rangeSumBST = function(root, low, high) {
    if (root === null) {
    return 0;
}

if (root.val>=low && root.val <=high){
    return root.val + rangeSumBST(root.left,low,high)+ rangeSumBST(root.right,low,high)
} else if (root.val>high){
// if greater than high, only have to explore left.
    return rangeSumBST(root.left, low, high) 
    }
else {return rangeSumBST(root.right, low, high)}
// otherwise it's lower than low, and explore right.
};

