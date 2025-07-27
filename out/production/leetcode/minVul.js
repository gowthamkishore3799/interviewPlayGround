class MaxHeap{
    nums = []
    noOfChanges = 0;
    heap = [];
    constructor(nums, noOfChanges){
        this.nums = nums;
        this.heap = [];
        this.noOfChanges = noOfChanges;
    }
    
    
    #parent(index){
        return Math.floor((index-1)/2);
    }

    
    
    gcd(a,b){
        while(b!=0){
        
            let temp = b;
            b = a%b;
            a = temp
        }
        return a;
    }
    
    heapifyUp(){
        
        if(this.heap.length<=1){
            return;
        }
    
        
        let index = this.heap.length-1
    
        
        while(index !=0 ){
            let parent = this.#parent(index)
            if(this.heap[parent]?.len > this.heap[index]?.len){
                break;
            }
            
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent;
        }
    }
    
    insert(gcd, start, end, len){
        if(gcd == 1){
            return;
        }
        
        
        let obj = {len, gcd, start, end}
        this.heap.push(obj);
        this.heapifyUp()
    }
    
    
    findGCD(start, end){
        
        if(start> end){
            end = start
        }
        let i = start;
        let j = i;
        let maxLen = 0;
        let currentGCD = this.nums[start];
        let maxGCD = this.nums[start];
        while(j <= end){
            if(i == j){
                currentGCD = this.nums[j];
                maxGCD = this.nums[j];
                j++;
            } else{
                currentGCD = this.gcd(currentGCD, this.nums[j])
                if(currentGCD>1){
                    maxGCD = currentGCD;
                    j++;
                } else{
                    let len = j-i;
                    this.insert(maxGCD, i, j-1, j-i);
                    i = j;
                    maxGCD = this.nums[j];  
                }
            }
        }
        
        this.insert(maxGCD, i, j-1, j-i);
    }
    
    #leftChild(i){
        return (2*i)+1
    }
    
    #rightchild(i){
        return (2*i)+2;
    }
    
    #heapifyDown(){
        
        let index = 0;
        let currentIndex;
        
        while(index != currentIndex){
            currentIndex = index;
            let leftChild = this.#leftChild(index);
            
        
            
            if(leftChild < this.heap.length && this.heap[leftChild]?.len > this.heap[currentIndex]?.len){
                currentIndex = leftChild
            }

            let rightChild = this.#rightchild(index)

            if(rightChild < this.heap.length && this.heap[rightChild].len > this.heap[currentIndex].len){
                currentIndex = rightChild
            }
            
            
            if(index == currentIndex){
                break
            }
            
            [this.heap[index], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[index]];
            index = currentIndex;
        }
    }
    
    #getTopElement(){
        
        if(this.heap.length<=0){
            return -1;
        }
        
        let top = this.heap[0];
        
        if(this.heap.length == 1){
            this.heap.shift();
        } else{
            let lastElement = this.heap[this.heap.length-1];
            this.heap[0] = lastElement;
            this.heap.pop();
            this.#heapifyDown();
        }
       
        return top;
    }
    
    
    findMinVulnerability(){
        if(this.noOfChanges <= 0){
            return this.heap[0];
        }
        
        
        let counter = 0;

        console.log(this.heap, "Heao")
        
         while(counter < this.noOfChanges){
            let topElement = this.#getTopElement();
            
            if(topElement == -1) break;
            
            
            let {len, start, end} = topElement;
            
            if(len <= 1){
                break;
            }
            
            let mid = Math.floor((start+end)/2);
            this.findGCD(start, mid-1);
            this.findGCD(mid+1, end);
            if( start != mid){
                this.findGCD(mid, mid);
            }
            counter++;
        }
        console.log(this.heap)
    }
    
    
}




function minVulnerability(nums, change){
    
    const heap = new MaxHeap(nums, change);
    const maxheap=  heap.findGCD(0, nums.length-1);
    const minVul = heap.findMinVulnerability();
    
    
    
    
}



minVulnerability([2, 4, 9, 6], 1)