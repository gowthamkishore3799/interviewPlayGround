const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var findKthLargest = function(nums, k) {
    // Create a MaxPriorityQueue with a priority extractor callback
    const queue = new MaxPriorityQueue({ priority: (x) => x });

    // Enqueue all numbers
    for (let num of nums) {
        queue.enqueue(num);
    }

    // Dequeue k-1 largest elements to find the kth largest
    let kthLargest;
    for (let i = 0; i < k; i++) {
        kthLargest = queue.dequeue().element;
    }

    return kthLargest;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Expected output: 5
