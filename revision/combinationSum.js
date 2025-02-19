var combinationSum = function(candidates, target) {


    let combinations = []


    var dfs = function(target, result, index){

        if(target == 0){
            hashmap[result.join("$")] = true;
            combinations.push(result)
            return;
        }

        if(target<0){
            return;
        }


        for(let i=index; i<candidates.length;i++){

            if(target-candidates[i]>=0){
                dfs(target-candidates[i], [...result, candidates[i]], i);
            }
        }
    }


    for(let i=0; i<candidates.length; i++){
        dfs(target-candidates[i], [candidates[i]], i);
    }

    return combinations
};


console.log(combinationSum([2,3,5], 8))