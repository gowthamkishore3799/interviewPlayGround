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


var diameterOfBinaryTree = function (root) {
    let maxLength = 0;

    var findHeight = function (root) {
            if (!root) { // Corrected the check to ensure root itself is checked, not root.val
            return 0;
        }
        let leftTreeHeight = findHeight(root?.left);
        let rightTreeHeight = findHeight(root?.right);
        maxLength = Math.max(maxLength, leftTreeHeight+rightTreeHeight);
        return 1 + Math.max(leftTreeHeight, rightTreeHeight);
    }
    findHeight(root);
    return maxLength;
};