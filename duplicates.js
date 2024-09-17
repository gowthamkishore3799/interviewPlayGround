var containsDuplicate = function(nums) {
    let numberWithoutDuplicates = new Set(nums);

    console.log(numberWithoutDuplicates)


    return (numberWithoutDuplicates.size != nums.length)
};


console.log(containsDuplicate([1,2,3,4]))


/**
 * First approach is adding, all the elements in hashmap, if its already present return true;
 * 
 * 
 * 
 */