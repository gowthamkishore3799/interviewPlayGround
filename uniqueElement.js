var removeDuplicates = function(nums) {
    let k = 1;


    if(nums.length<=1){
        return 1
    }


    for(let i =1; i<nums.length; i++){
        if(nums[i] != nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

console.log(removeDuplicates([1,1,2,2,2,3]))