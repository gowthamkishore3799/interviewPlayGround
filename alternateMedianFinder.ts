class MedianFinder {
    leftMaxHeap = [];
    rightMinHeap = [];
    constructor() {
        
    }

    swap(i,j,heap) {
        const c = heap[i];
        heap[i] = heap[j];
        heap[j] = c;
    }

    insertInMaxHeap(value) {
        this.leftMaxHeap.push(value);
        let j = this.leftMaxHeap.length - 1
        let parentIndex = Math.ceil(j/2) - 1;
        while(j>0 && parentIndex>=0 && this.leftMaxHeap[parentIndex] < this.leftMaxHeap[j]) {
            this.swap(parentIndex,j,this.leftMaxHeap);
            j = parentIndex;
            parentIndex = Math.ceil(j/2) - 1;
        }
    }

    insertInMinHeap(value) {
        this.rightMinHeap.push(value);
        let j = this.rightMinHeap.length - 1
        let parentIndex = Math.ceil(j/2) - 1;
        while(j>0 && parentIndex>=0 && this.rightMinHeap[parentIndex] > this.rightMinHeap[j]) {
            this.swap(parentIndex,j,this.rightMinHeap);
            j = parentIndex;
            parentIndex = Math.ceil(j/2) - 1;
        }
    }

    maxHeapify(i){
        const leftIndex = 2*i + 1;
        const rightIndex = 2*i + 2;
        if(rightIndex< this.leftMaxHeap.length && this.leftMaxHeap[rightIndex] > this.leftMaxHeap[i] && this.leftMaxHeap[rightIndex] > this.leftMaxHeap[leftIndex]) {
            this.swap(i, rightIndex, this.leftMaxHeap);
            this.maxHeapify(rightIndex);
        }else if (leftIndex< this.leftMaxHeap.length && this.leftMaxHeap[leftIndex] > this.leftMaxHeap[i]){
            this.swap(i, leftIndex, this.leftMaxHeap);
            this.maxHeapify(leftIndex);
        }
    }

    minHeapify(i){
        const leftIndex = 2*i + 1;
        const rightIndex = 2*i + 2;
        if(rightIndex< this.rightMinHeap.length && this.rightMinHeap[rightIndex] < this.rightMinHeap[i] && this.rightMinHeap[rightIndex] < this.rightMinHeap[leftIndex]) {
            this.swap(i, rightIndex, this.rightMinHeap);
            this.minHeapify(rightIndex);
        }else if (leftIndex< this.rightMinHeap.length && this.rightMinHeap[leftIndex] < this.rightMinHeap[i]){
            this.swap(i, leftIndex, this.rightMinHeap);
            this.minHeapify(leftIndex);
        }
    }

    extractMaxHeap() {
        const res = this.leftMaxHeap[0];
        if(this.leftMaxHeap.length>1) {
            this.swap(0,this.leftMaxHeap.length-1, this.leftMaxHeap);
            this.leftMaxHeap.pop();
            this.maxHeapify(0);
        }
        return res;
    }

    extractMinHeap() {
        const res = this.rightMinHeap[0];
        if(this.rightMinHeap.length>1) {
            this.swap(0,this.rightMinHeap.length-1, this.rightMinHeap);
            this.rightMinHeap.pop();
            this.minHeapify(0);
        }
        return res;
    }

    balananceHeight(){
        const diff = this.leftMaxHeap.length - this.rightMinHeap.length;
        if(diff === 0 || diff === 1) return;
        if(this.leftMaxHeap.length > this.rightMinHeap.length) {
            const max = this.extractMaxHeap();
            this.insertInMinHeap(max);
        }else {
            const min = this.extractMinHeap();
            this.insertInMaxHeap(min);
        }
    }

    addNum(num: number): void {
        if(this.leftMaxHeap.length === 0 || num <= this.leftMaxHeap[0]){
            this.insertInMaxHeap(num);
        }else {
            this.insertInMinHeap(num);
        }
        this.balananceHeight();
    }

    findMedian(): number {
        if(this.leftMaxHeap.length === this.rightMinHeap.length){
            return (this.leftMaxHeap[0] + this.rightMinHeap[0])/2
        }
        return this.leftMaxHeap[0];
    }
}