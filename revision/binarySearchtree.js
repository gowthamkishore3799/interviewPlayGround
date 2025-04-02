


function isBinarySearchTree(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
    if(!root){
        return true;
    }


    if(root?.val >= max || root?.val <= min){
        return false;
    }
   


    return isBinarySearchTree(root?.left, min, root.val) && isBinarySearchTree(root?.right, root.val, max)
}
