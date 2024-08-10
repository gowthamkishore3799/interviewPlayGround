var removeDuplicates = function(nums) {
    


    let i =0, j = 0, hashMap = {};


    while(i<nums.length){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = true;
            nums[j++] = nums[i++];
           
        } else {
            i++;
        }
    }

    return j;
};


console.log(removeDuplicates([1,2]))