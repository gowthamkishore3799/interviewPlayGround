/**
 * Kandane Algorithm
 * 
 */


var maxProduct = function(nums) {

    let local_max = nums[0];
    let local_min = nums[0];
    let globalMax = nums[0];




    for(let i=1; i< nums.length; i++){


        if(nums[i]<0){
            [local_max, local_min] = [local_min, local_max]
        }
 
        local_max = Math.max(nums[i], nums[i] *local_max)
        local_min = Math.min(nums[i], nums[i]*local_min);


        globalMax = Math.max(local_max, globalMax);

    }

    return globalMax;
};


console.log(maxProduct([-2,3, 1]))