var heapSort = (nums) => {
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        heapify(nums, nums.length, i);
    }

    for (let i = nums.length - 1; i > 0; i--) {
        // Move current root to end
        [nums[0], nums[i]] = [nums[i], nums[0]]; // Swap

        // call max heapify on the reduced heap
        heapify(nums, i, 0);
    }

    return nums;
}

var heapify = (nums, n, i) => {
    var root = i;
    var leftChild = 2 * i + 1;
    var rightChild = 2 * i + 2;

    let largestIndex = root;
    if (leftChild < n && nums[leftChild] > nums[largestIndex]) {
        largestIndex = leftChild;
    }

    if (rightChild < n && nums[rightChild] > nums[largestIndex]) {
        largestIndex = rightChild;
    }

    if (largestIndex != root) {
        [nums[root], nums[largestIndex]] = [nums[largestIndex], nums[root]]; // Swap

        // Recursively heapify the affected sub-tree
        heapify(nums, n, largestIndex);
    }
}

console.log(heapSort([12, 11, 13, 5, 6, 7]));
