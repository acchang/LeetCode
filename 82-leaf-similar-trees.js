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

// https://leetcode.com/problems/range-sum-of-bst/description/



var leafSimilar = function(root1, root2) {
      
    function eval(node){
    let total = 0;
    if (this.left == null && this.right == null){total += this.val}
    else {eval(node)}
    return total
    }

    return  eval(root1) = eval(root2)
};


var getLeafNodes = function (root) {
    let range = [];
    const traverse = (root) => {
        if (root.left >= L && root.val <= R) sum += root.val;
        if (root.left !== null) traverse(root.left);
        if (root.right !== null) traverse(root.right);
    }
    traverse(root);
    return sum;

}


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




var leafSimilar = function(root1, root2) {
    let r1 = getLeafNodes(root1);
    let r2 = getLeafNodes(root2);
    return (r1.length === r2.length && r1.every((item, i) => item === r2[i]));
};

var getLeafNodes = function(root){
    var stack = [root];
    let result = [];
    while(stack.length){
        let curr = stack.pop();
        if(curr.left)
            stack.push(curr.left);
        if(curr.right)
            stack.push(curr.right);
        if(!curr.left && !curr.right)
            result.push(curr.val);
    }
    return result;
}