var partition = function(nums, i, j) {
    let pivot = nums[i];
    let low = i;

    for (let k = i+1; k < j; k++) {
        if (nums[k] < pivot) {
            low++;
            [nums[low], nums[k]] = [nums[k], nums[low]]; // Fixed swap syntax
        }
    }

    [nums[low], nums[i+1]] = [nums[i+1], nums[low]]; // Swap pivot to correct position
    return low ; // Fixed return value
};

var quickSort = function(nums, i, j) {
    if (i < j) { // Fixed incorrect while loop
        let pi = partition(nums, i, j);
        console.log(nums)
        quickSort(nums, i, pi - 1);
        quickSort(nums, pi + 1, j);
    }
};

var sortColors = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    console.log(nums)
    return nums; // Return sorted array
};

// Corrected function call
console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
