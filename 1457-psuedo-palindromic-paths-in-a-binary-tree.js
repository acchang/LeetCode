// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2573133/javascript-solution/?envType=daily-question&envId=2024-01-24

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
var pseudoPalindromicPaths  = function(root) {
    let res = { count : 0 };
    let counter = new Array(10).fill(0);
	
    dfs(root, res, counter);
    return res.count;
};

const isValid = (nums) => {
    let odd = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 === 1)
            odd++;
    }
    return odd < 2;
}

const dfs = (root, res, counter) => {
    if (!root) return;
    
    counter[root.val]++;
    
    if (!root.left && !root.right) {
        if (isValid(counter)) res.count += 1;
        return;
    }
    
    dfs(root.left, res, counter);
    root.left && counter[root.left.val]--;
    
    dfs(root.right, res, counter);
    root.right && counter[root.right.val]--;
};
