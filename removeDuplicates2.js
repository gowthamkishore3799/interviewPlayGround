var removeDuplicates = function(nums) {
    let i =0, j= 0; 


    let hashMap = {};


    while(i<nums.length){


        if(!hashMap[nums[i]] || hashMap[nums[i]]< 2){
            hashMap[nums[i]] = (hashMap[nums[i]] ?? 0) + 1;
            nums[j++] = nums[i];
        }
        i++;
    }

    return j
};;

console.log(removeDuplicates([1,1,1,2,2,3]));


