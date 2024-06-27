var isValidBinarySearchTree = (root, min = -Infinity, max= Infinity) =>{

    if(root == null){
        return true;
    }


    if(root.val <= min || root.val >= max){
        return false;
    }

    return isValidBinarySearchTree(root.left, min, root.val) && isValidBinarySearchTree(root.right, root.val, max)
}
var isValidBST = function(root) {
    return isValidBinarySearchTree(root, undefined, undefined);
};