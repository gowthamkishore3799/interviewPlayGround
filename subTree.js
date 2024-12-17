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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isValidSubTree =(root, subRoot) => {


    if(!subRoot && !root){
        return true;
    }

    if(!subRoot || !root){
        return false
    }


    if(root?.val != subRoot?.val){
        return false;
    }


    return isValidSubTree(root?.left, subRoot?.left) && isValidSubTree(root?.right, subRoot?.right);
    
}
var isSubtree = function(root, subRoot) {
    if(!root){
        return false
    }
    return isValidSubTree(root, subRoot) || isSubtree(root?.left, subRoot) || isSubtree(root?.right, subRoot);
};