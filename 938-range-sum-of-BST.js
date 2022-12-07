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
    for (let i=0; i<root.length; i++){
        let output = 0
        if (root[i]>=low && root[i]<=high){
            console.log(root[i])
            output += root [i]
        }
        return root
    }
};