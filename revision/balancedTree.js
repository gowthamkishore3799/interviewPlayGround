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


var isBalancedTree = function(root){
    if(!root){
        return 0;
    }

    let leftTreeHeight = isBalancedTree(root?.left);
    let rightTreeHeight = isBalancedTree(root?.right);


    if(leftTreeHeight == -1 || rightTreeHeight == -1){
        return -1;
    }

    if(Math.abs(leftTreeHeight-rightTreeHeight)>1){
        return -1;
    }

    return 1+Math.max(leftTreeHeight, rightTreeHeight);
}


var isBalanced = function(root) {

const response = isBalancedTree(root);

return response == -1 ? false : true;
    
};