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

var InvertTree = function(root){
    if(!root){
        return null;
    }

    var temp = root.left;
    root.left = root.right
    root.right = temp;

    InvertTree(root.left);
    InvertTree(root.right);

    return root;
}
var invertTree = function(root) {
    return InvertTree(root);
};