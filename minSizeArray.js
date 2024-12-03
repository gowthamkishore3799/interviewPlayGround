var minSubArrayLen = function(target, nums) {
    let minLen = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let i =0, j = 0;


    while(j< nums.length){

        if(nums[j] == target){
            return 1;
        }

        if(sum + nums[j] == target){
            minLen = Math.min(minLen, j-i+1)
            sum = sum+ nums[j]
            j++;
        } else if(sum + nums[j] < target){
            sum = sum + nums[j];
            j++;
        } else{
            minLen = Math.min(minLen, j-i+1)
            sum = sum - nums[i];
            i++;
        }

    }

    return minLen != Number.MAX_SAFE_INTEGER ? minLen : 0;
};

console.log(minSubArrayLen(11,[1,2,3,4,5]))


/**
 * first if the sum is less 
 * 
 * inc right, 
 * 
 * if high, inc the left
 * 
 * 
 * if number == target , break with len =1
 */