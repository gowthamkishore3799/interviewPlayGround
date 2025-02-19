var permute = function(nums) {
    let result = [];



    var dfs = function(path){


        if(path.length == nums.length){
            result.push(path)
            return;
        }

        for(let i=0; i<nums.length; i++){
            if(path.length == new Set([...path, nums[i]]).size)
            {
                continue;
            }


            dfs([...path, nums[i]])
        }
    }


    dfs([]);
    return result
};