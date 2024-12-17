/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isMirror(leftSub, rightSub) {

    // Both are null, so they are mirror images
    if (leftSub === null && rightSub === null) {
        return true;
    }

    // One of them is null, so they aren't mirror images
    if (leftSub === null || rightSub === null) {
        return false;
    }

    // Check if the current nodes are equal and 
    // their subtrees are mirrors
    return (leftSub.val === rightSub.val) &&
           isMirror(leftSub.left, rightSub.right) &&
           isMirror(leftSub.right, rightSub.left);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }

    // Check if the left and right subtrees 
    // are mirrors of each other
    return isMirror(root.left, root.right);
};