/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


var buildBinaryTree = function(preorder, inorder) {

    console.log(preorder, preorder.length)
    if(preorder.length <=0){
        console.log("returned null")
        return null;
    }
    let newVal = preorder[0];

    
    let root = new TreeNode(newVal);

    let index = inorder.indexOf(newVal);

    let leftPreorderTree = preorder.slice(1, index+1);  
    let leftInorderTree = inorder.slice(0, index);

    let rightPreorderTree = preorder.slice(index+1);
    let rightinOrderTree = inorder.slice(index+1)


    console.log(root)

    root.left = buildBinaryTree(leftPreorderTree, leftInorderTree);
    root.right = buildBinaryTree(rightPreorderTree, rightinOrderTree);

    return root;
}


var buildTree = function(preorder, inorder) {
    return buildBinaryTree(preorder, inorder)
};