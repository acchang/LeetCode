// https://leetcode.com/problems/increasing-order-search-tree/description/

// from: https://www.youtube.com/watch?v=ims-mvNl-jo
// 40%

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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let head = new TreeNode('dummy')
    let cursor = head

    function inorder(node){
        if (!node){return}
        
        inorder(node.left)
        cursor.right = new TreeNode(node.val)
        // cursor is head and head is null, set cursor.right with the value of the leftmost
        cursor = cursor.right
        // move the pointer to cursor,right (which is right of head)
        // then look at what's to the right of node
        inorder(node.right)
        // and the recursion starts going back up
    }

    inorder(root)
    return head.right
    }






// https://algo.monster/liteproblems/897
// using java model:

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
 * @return {TreeNode}
 */
var increasingBST = function(root) {

    let dummyNode = new TreeNode();
    let previousNode = dummyNode;

function inorderTraversal(node) {
    // If the current node is 'null', we have reached the end and should return.
    if (node == null) {
        return;
    }  
    // Recurse on the left subtree.
    inorderTraversal(node.left);
    // During the inorder traversal, we reassign the rights of the 'previousNode' to the current 'node'
    // and nullify the left child to adhere to increasing BST rules.
    previousNode.right = node;
    node.left = null;
    // Update 'previousNode' to the current node.
    previousNode = node;
    // Recurse on the right subtree.
    inorderTraversal(node.right);
}
    // Perform the 'inorder' traversal starting from the root.
    inorderTraversal(root); 
    // Return the right child of the dummy node, which is the real root of the increasing BST.
    return dummyNode.right;
}







/// from solutions:
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let rghtRoot = new TreeNode();
    let auxPointer = rghtRoot;
    function inorder(root){
        if(!root) return;
        inorder(root.left);
        auxPointer.right = new TreeNode(root.val);
        console.log(auxPointer.right)
        auxPointer = auxPointer.right;
        console.log(auxPointer)
        inorder(root.right);
    };
    inorder(root);
    return rghtRoot.right;
};




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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let rghtRoot = new TreeNode();
    let auxPointer = rghtRoot;
    function inorder(root){
        if(!root) return;
        inorder(root.left);
        auxPointer.right = new TreeNode(root.val);
        console.log(auxPointer.right)
        auxPointer = auxPointer.right;
        console.log(auxPointer)
        inorder(root.right);
    };
    inorder(root);
    return rghtRoot.right;
};

