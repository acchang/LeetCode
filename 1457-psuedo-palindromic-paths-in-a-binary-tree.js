// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2573133/javascript-solution/?envType=daily-question&envId=2024-01-24
// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/editorial/?envType=daily-question&envId=2024-01-24

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
    // set your result to be an object with count : 0
    let counter = new Array(10).fill(0);
	// create an Array of 10 and fill it with zeroes
    // this is bc 1 <= Node.val <= 9

    dfs(root, res, counter);
    return res.count;
};

// function will take in counter
const isValid = (nums) => {
    let odd = 0;
    for (let n of nums) {
// for each element in the counter that's odd will be remembered
// counter records frequency, looking for odd frequencies
        if (n > 0 && n % 2 === 1)
            odd++;
    }
    return odd < 2;
// But only ONE bc "path is pseudo-palindromic if it has at most one digit with an odd frequency."
}

const dfs = (root, res, counter) => {
    if (!root) return;
    // if it's not root then return

    
    if (!root.left && !root.right) {
        if (isValid(counter)) res.count += 1;
// if (isValid(counter) is true, res increments
        return;
    }
    
    dfs(root.left, res, counter);
// dfs (root left)
    root.left && counter[root.left.val]--;
    
    dfs(root.right, res, counter);
    root.right && counter[root.right.val]--;
};
