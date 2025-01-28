class MaxPriorityQueue {
    constructor() {
        this.queue = [];
    }

    __parent(index) {
        return Math.floor((index - 1) / 2);
    }

    __leftChild(index) {
        return 2 * index + 1;
    }

    __rightChild(index) {
        return 2 * index + 2;
    }

    bubbleUp() {
        let index = this.queue.length - 1;

        while (index > 0) {
            let parent = this.__parent(index);
            if (this.queue[index] > this.queue[parent]) {
                [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            let leftChild = this.__leftChild(index);
            let rightChild = this.__rightChild(index);
            let largest = index;

            if (leftChild < this.queue.length && this.queue[leftChild] > this.queue[largest]) {
                largest = leftChild;
            }

            if (rightChild < this.queue.length && this.queue[rightChild] > this.queue[largest]) {
                largest = rightChild;
            }

            if (largest !== index) {
                [this.queue[index], this.queue[largest]] = [this.queue[largest], this.queue[index]];
                index = largest;
            } else {
                break;
            }
        }
    }

    enqueue(val) {
        this.queue.push(val);
        this.bubbleUp();
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        const root = this.queue[0];
        const last = this.queue.pop();

        if (this.queue.length > 0) {
            this.queue[0] = last;
            this.bubbleDown();
        }

        return root;
    }
}

// Optimized findKthLargest using a min-heap
class MinPriorityQueue extends MaxPriorityQueue {
    bubbleUp() {
        let index = this.queue.length - 1;

        while (index > 0) {
            let parent = this.__parent(index);
            if (this.queue[index] < this.queue[parent]) {
                [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            let leftChild = this.__leftChild(index);
            let rightChild = this.__rightChild(index);
            let smallest = index;

            if (leftChild < this.queue.length && this.queue[leftChild] < this.queue[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < this.queue.length && this.queue[rightChild] < this.queue[smallest]) {
                smallest = rightChild;
            }

            if (smallest !== index) {
                [this.queue[index], this.queue[smallest]] = [this.queue[smallest], this.queue[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

var findKthLargest = function (nums, k) {
    const queue = new MinPriorityQueue();

    for (let num of nums) {
        queue.enqueue(num);
        if (queue.queue.length > k) {
            queue.dequeue();
        }
    }

    return queue.dequeue();
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 20));
