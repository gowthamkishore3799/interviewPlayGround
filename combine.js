var combine = function(n, k) {
    let result = [];


    var dfs = function(path, index){


        if(path.length == k){
            result.push(path)
            return;
        }
        // 
        for(let i=index; i<=n;i++){
            dfs([...path, i], i+1)
        }
    }


    dfs([], 1)

    return result;
};



console.log(combine(4,2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]