var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    const result = [];
    const hashmap = {};

    
    for(let i =0; i< nums.length-2; i++){


        let j = i+1;
        let k = nums.length-1;


        while(j<k){
            let sum = nums[i]+ nums[j] + nums[k]
            if(sum==0 && !hashmap[`${nums[i]}, ${nums[j]},  ${nums[k]}`]){
                result.push([nums[i], nums[j],  nums[k]]);
                hashmap[`${nums[i]}, ${nums[j]},  ${nums[k]}`] = true;
                j++;
                k--;
            } else if(sum>0){
                k--;
            } else {
                j++
            }
        }
    }

    return result;
};