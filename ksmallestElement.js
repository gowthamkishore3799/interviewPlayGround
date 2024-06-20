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
 * @param {number} k
 * @return {number}
 */
var treeTraversal = function(root){

    if(!root){
        return [];
    }
    const lefttree = treeTraversal(root.left);
    const rightTree = treeTraversal(root.right);

    const result = [...lefttree, root.val, ...rightTree]
    return result;
}


var kthSmallest = function(root, k) {
    const lefttree = treeTraversal(root.left);
    const rightTree = treeTraversal(root.right);
    const result = [...lefttree, root.val, ...rightTree]
    return result[k-1];
};