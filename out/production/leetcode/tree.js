const maxLength = function(root){


    let max = Number.MIN_SAFE_INTEGER;

    function dfs(root, preVal){
        if(!root){
            return 0;
        }
    
    
        if(preVal !=null && root?.val != preVal){
            return 0;
        }
    
    
    
    
        let leftSubTree = 1+ dfs(root?.left, root.val);
        let rightSubTree = 1+ dfs(root?.right, root.val);

        max = Math.max(leftSubTree, rightSubTree, leftSubTree+rightSubTree);
        return Math.max(leftSubTree, rightSubTree)
    }

    dfs(root);
    return max;
}
