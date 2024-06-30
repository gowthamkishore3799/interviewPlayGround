var isSameTree = function(p, q) {

    if((!q && p) || (!p && q )){
        return false;
    }


    if(!q && !p){
        return true;
    }

    if(p.val != q.val){
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};