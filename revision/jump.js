var canJump = function(nums) {
    let dp = Array.from({length: nums.length}).fill(0)

    dp[0] = 1;


    for(let i=0; i<nums.length; i++){


        if(dp[i] == 1){
            for(let j=1; j<=nums[i] && i+j< nums.length; j++){

                dp[i+j] = 1
            }
        }
        
    }

    return dp[nums.length-1] == 1;
};


console.log(canJump([2,3,1,1,4]))