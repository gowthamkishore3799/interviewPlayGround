

var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = nums[0];

    for(let i=1; i< nums.length; i++){
        sum += nums[i]
        if(nums[i]> sum){
            sum = nums[i];
        } 


        max = Math.max(sum, max);
    }

    return max;
};


console.log(maxSubArray([5,4,-1,7,8]))