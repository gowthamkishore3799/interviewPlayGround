isSubtree(root, subRoot) {

    function match(p,q){

        if(!p && !q){
            return true;
        }

        if((p?.val != q?.val) || !p || !q){
            return false 

        }

        let result = match(p.left, q.left) && match(p.right, q.right);
        return result;
    }









    function dfs(p, q){
        if(!p || !q){
            return false
        }
        if(p.val == q.val){
            let result = match(p, q)

            if(result){
                return true;
            }
        }

        let result = dfs(p.left, q) || dfs(p.right, q);
        if(result){
            return true;
        }
    }

    return dfs(root, subRoot) || false
}