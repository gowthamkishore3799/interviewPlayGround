function hasTwoSum(nums, target) {
    // Your logic here

    const visitedNum = new Map();

    for(let num of nums){

        let diff = target-num;

        if(visitedNum.has(diff)) return true;
        else visitedNum.set(num, true)
    }
    return false
}


console.log(hasTwoSum([4,-3,4,5], 1))