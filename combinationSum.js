var combinationSum = function(candidates, target) {
    let result = [];


    var dfs = function(path, target, index){
        if(target == 0){
            result.push(path);
            return;
        }


        if(target<0){
            return;
        }

        for(let i=index; i< candidates.length; i++){
            dfs([...path, candidates[i]], target-candidates[i], i)
        }
    }


    dfs([], 7, 0)


    console.log(result);
};

console.log(combinationSum([2,3,6,7], 7))