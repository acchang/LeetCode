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
var isEvenOddTree = function(root) {
    const prev = []
    let noViolations = true
    dfs(root, 0)
    return noViolations == false ? false : true
    
    function dfs (node, depth){
        if (!node){return}
        if ((node.val + depth)%2==0){noViolations = false}
        if (depth%2 == 0 && (prev[depth] >= node.val)){noViolations = false}
        if (depth%2 != 0 && (prev[depth] <= node.val)){noViolations = false}
        prev[depth] = node.val
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
};


// Prev:
// returning does not stop the recursion: https://stackoverflow.com/questions/74974286/returning-from-a-recursive-void-method-doesnt-exit-the-recursion

var isEvenOddTree = function(root) {
    const prev = []
    dfs(root, 0)
    return true
    
    function dfs (node, depth){
        if (node){console.log(node.val, depth)}
        if (!node){return}
        if ((node.val + depth)%2==0){return false}
        if (depth%2 == 0 && (prev[depth] <= node.val)){console.log(false); return false}
        else {console.log(true)}
        if (depth%2 != 0 && (prev[depth] >= node.val)){console.log(false);return false}
        else {console.log(true)}
        prev[depth] = node.val
        console.log("prev", prev)
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
};
