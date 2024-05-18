/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numHashMap = new Map();

    for(let i =0; i<nums.length; i++){
        let diff = target-nums[i];
        if(numHashMap.has(diff)){
            return [numHashMap.get(diff), i]
        }

        numHashMap.set(nums[i], i);
    }
    return [-1, -1]
};



console.log(twoSum([3,2,4], 6))