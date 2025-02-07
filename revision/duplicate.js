var containsDuplicate = function(nums) {
    let numberWithoutDuplicates = new Set(nums);

    return (numberWithoutDuplicates.size != nums.length)
};
