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
var evaluateTree = function(root) {
    let stack =[]

    function dfs(node){
        if (!node){return}
        console.log("node", node)
        // console.log("val", node.val, node.left, node.right)
    if (!node.left && !node.right){stack.push(node.val == 1 ? true : false)}
    // if (stack.length == 2){
    //     if (node.val == 2 OR){node.val == stack[0] || stack[1] }
    //     if (node.val == 3 AND){node.val == }
    // }
    dfs(node.left)
    dfs(node.right)
    }

    dfs(root)
    console.log("s", stack)
    return stack
};