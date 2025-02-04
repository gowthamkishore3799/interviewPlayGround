var majorityElement = function(nums) {
    if(nums.length<=2){
        return nums[0];
    }
    let majority = nums[0];
    let counter = 1;


    for(let i=1; i< nums.length; i++){
        if(majority === nums[i]){
            counter++;
        } else{
            counter--;

            if(counter<0){
                majority = nums[i];
                counter++;
            }
        }
    }

    return majority
}

console.log(majorityElement([2,2,1,1,1,2,2]));