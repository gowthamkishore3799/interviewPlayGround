var lengthOfLIS = function(nums) {
    

    let dp = new Array(nums.length).fill(1);

    if(nums.length<0){
        return 0;
    }
    let max = dp[0];


    for(let i=1;i<dp.length;i++){
        for(let j=0; j<i; j++){
            if(nums[i]>nums[j]){
                dp[i]= Math.max(dp[i], dp[j]+1)
                
            }
        }
        console.log(dp[i], "I")
        max = Math.max(max, dp[i])
    }
    return max;
};


console.log(lengthOfLIS( [0]))