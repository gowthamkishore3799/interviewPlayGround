class MaxPriorityQueue {
    constructor(){
        this.queue = [];
    }


    __parent(index){
        return Math.floor((index-1)/2)
    }



    bubbleUp(){
        let index = this.queue.length-1;


        while(index>0){
            let parent = this.__parent(index);
            if(this.queue[index] > this.queue[parent]){
                [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]]
            } 
            index = parent;
        }
    }

    __leftChild(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child node
    __rightChild(index) {
        return 2 * index + 2;
    }


    bubbleDown(){
        let index = 0;

        while(true){
            let leftChild = this.__leftChild(index);
            let rightChild = this.__rightChild(index);
            let largest = index;

            // Check if the left child is larger
            if (leftChild < this.queue.length && this.queue[leftChild] > this.queue[largest]) {
                largest = leftChild;
            }

            // Check if the right child is larger
            if (rightChild < this.queue.length && this.queue[rightChild] > this.queue[largest]) {
                largest = rightChild;
            }

            // If the largest is not the current node, swap and continue
            if (largest !== index) {
                [this.queue[index], this.queue[largest]] = [this.queue[largest], this.queue[index]];
                index = largest; // Move down to the largest child's index
            } else {
                break;
            }
        }
    }

    dequeue(){
        this.queue.shift();
        this.bubbleDown();

        console.log(this.queue)
    }

    enqueue(val){
        this.queue.push(val);
        if(this.queue.length>0){
            this.bubbleUp();
        }

        console.log(this.queue)
    }
}

var findKthLargest = function() {
    const queue = new MaxPriorityQueue();


    queue.enqueue(3);
    queue.enqueue(10);
    queue.enqueue(1);
    queue.enqueue(40);

    queue.dequeue();
    queue.dequeue();




};

findKthLargest([1])