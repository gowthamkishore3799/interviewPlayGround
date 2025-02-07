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
var maxDepth = function(root) {

    var dfs = function (root) {
        if (!root) {
            return 0;
        }

        const leftTreeHeight = dfs(root.left);
        const rightTreeHeight = dfs(root.right)

        return 1+Math.max(leftTreeHeight, rightTreeHeight)
    }


    return dfs(root);

}