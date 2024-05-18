class alernateMedianFinder {

    minHeap: number[] = [];
    maxHeap: number[] =[];
    constructor() {    
    }


    balanceHeap(){
        let diff = this.maxHeap.length - this.minHeap.length;

        if(diff >=0){
            return;
        } else {

            if(this.maxHeap.length > this.minHeap.length){
                this.heapifyMaxHeap();
            } else {
                this.heapifyMinHeap();
            }
        }
    }

    addNum(num: number): void {


        if(this.minHeap.length == 0 || this.minHeap[0] > num){
            this.minHeap.splice(0, 0, num);
        } else{
            this.minHeap.splice(0,0, num);
        }

        this.balanceHeap();
    }

    findMedian(): number {


        return 1;
    }
}