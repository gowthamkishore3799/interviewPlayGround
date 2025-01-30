var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){


        let diff = target -nums[i];
        let j = nums.lastIndexOf(diff)

        if(j != -1 &&  j!=i){
            return [i,j]
        }
    }
    return -1
};


console.log(twoSum([2,7,11,15], 9))