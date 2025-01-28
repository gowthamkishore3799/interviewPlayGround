var jump = function(nums) {
    let jumps = 0;
    let curMaxReach = 0;
    let nextMaxReach = 0;
    
    for (let i = 0; i < nums.length - 1; ++i) {
        nextMaxReach = Math.max(nextMaxReach, i + nums[i]);
        if (i === curMaxReach) {
            jumps++;
            curMaxReach = nextMaxReach;

            
        }
    }
    
    return jumps;
};


console.log(jump([2,3,1,1,4]))