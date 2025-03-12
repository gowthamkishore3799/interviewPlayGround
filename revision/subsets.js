/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let finalResult = [[]]


    var dfs = function(index, result = []){
        if(index>= nums.length){
            return;
        }

        while(index<nums.length){
            finalResult.push([...result, nums[index]])
            dfs(index+1, [...result, nums[index]]);
            index++;
        }
    }


    dfs(0)

    return finalResult;
};
