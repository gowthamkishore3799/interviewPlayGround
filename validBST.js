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

var isValidBinarySearchTree = (root, min = -Infinity, max= Infinity) =>{

    if(root == null){
        return true;
    }


    if(root.val <= min || root.val >= max){
        return false;
    }å

    return isValidBinarySearchTree(root.left, min, root.val) && isValidBinarySearchTree(root.right, root.val, max)
}
var isValidBST = function(root) {
    return isValidBinarySearchTree(root, undefined, undefined);
};