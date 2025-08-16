const twoSum = function(nums, target){


    /**
     * Two number add up to target
     */

    const map = new Map();

    for(let i=0; i< nums.length ; i++){


        let diff = target-nums[i];

        if(map.has(diff)){
            return [diff, nums[i]]
        }


        map.set(nums[i], true)
    }


}

const result = twoSum([2,5,7,9], 9)
console.log(result, "Result")