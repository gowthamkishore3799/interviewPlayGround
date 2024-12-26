var lastStoneWeight = (stones) => {

    const heap = new MaxPriorityQueue();
    for(let value of stones) {
         heap.enqueue(value);
     }
 
     while(heap.size()>1) {
         let diff = heap.dequeue().element - heap.dequeue().element;
         if(diff > 0) {
             heap.enqueue(diff);
         }
     }
     return heap.size() === 0 ? 0: heap.front().element;
 };