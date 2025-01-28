var removeElement = function(nums, val) {
    let i = 0, j = 0;


    while(i<nums.length){
        if(nums[i]!= val){
            nums[j] = nums[i];
            j++
        }

        i++;
    }

    return j


};


console.log(removeElement([3,2,2,3],10))