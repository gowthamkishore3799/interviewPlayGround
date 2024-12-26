class MaxHeap{
    constructor(){
        this.heap = [];
    }


    parent(index){

        return Math.floor((index-1)/2)

    }


    heapfiyUp(){
        let index = this.heap.length-1

        while(index>0){
            const parentIndex = this.parent(index);
            if(this.heap[parentIndex]> this.heap[index]){
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }


    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }


    insert(element){
        this.heap.push(element);
        this.heapfiyUp();
    }

    bubbleDown(){
        let index = 0;


        while(index< this.heap.length){
            let leftIndex = this.leftChildIndex(index);
            let rightIndex = this.rightChildIndex(index);
            let largest = index;


            if(leftIndex< this.heap.length && this.heap[leftIndex]> this.heap[index]){
                largest = leftIndex
            }
            if (rightIndex < this.heap.length  && this.heap[rightIndex] > this.heap[this.heap.length ]) {
                largest = rightIndex;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;

        }
    }

    extractMaxElement(){
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);

console.log(heap.extractMaxElement()); // 30
console.log(heap.extractMaxElement()); // 20
// console.log(heap.heap);  


