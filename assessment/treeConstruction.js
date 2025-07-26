/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */

    buildBinarySearchTree(preorder, inorder){

        if(preorder.length == 0 || inorder.length == 0){
            return null
        }
        let root = new TreeNode(preorder[0]);

        let index = inorder.indexOf(preorder[0]);


        root.left = this.buildBinarySearchTree(preorder.slice(1, 1+index),inorder.slice(0, index));
        root.right = this.buildBinarySearchTree(preorder.slice(1+index), inorder.slice(index+1))
        return root
    }
    buildTree(preorder, inorder) {
        return this.buildBinarySearchTree(preorder, inorder)

    }
}
