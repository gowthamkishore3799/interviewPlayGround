// var reverseKGroup = function (k) {
//     let nodeCount = 0;



//     console.log(nodes)


// };


class Node{
    val = null;
    next = null;
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }


    add(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = node;
        }
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    findLinkedListLength(){
        let current = this.head;
        let count = 0;

        while(current){
            count++;
            current= current.next;
        }

        return count;
    }

    reverseKGroup(k){

        if(k==1){
            return head;
        }
    
        let linkedListNodeLength = this.findLinkedListLength(); // To find the count;

    
    
        if(linkedListNodeLength < k){
            return this.head;
        }
    
    
        let slowpointer = this.head;
        let fastpointer = this.head;
    
        let currentPrev = null, previousPrev = null;
    
    
        for(let i=0; i<Math.floor(linkedListNodeLength/k); i++){ // check the condition again related to increement 
    
            slowpointer = fastpointer;
            fastpointer = fastpointer.next
    
            currentPrev = slowpointer; // To store the initial Node for the chaining;
            let reverseCounter = 1;
            let temp = null
    
            while(reverseCounter < k){ // reversing k node
                temp = fastpointer.next;
                fastpointer.next = slowpointer;
                slowpointer = fastpointer;
                fastpointer =temp 
                reverseCounter = reverseCounter+1;
            }
    
    
            /** 1. First make sure the current prev and previous prev are chained together
            * 2. If its first swap, have the node as head;
            * update the i based on swapping
             */
    
    
            if(i == 0){ // If its first swap, this becomes head;
                this.head = slowpointer;
            }

            if(previousPrev){
                previousPrev.next = slowpointer
            }
           
            previousPrev = currentPrev;
        }
    
    
        if(linkedListNodeLength%k != 0){
            previousPrev.next = fastpointer;
        } else {
            previousPrev.next = null
        }
        return this.head;
    
    }
}


let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

// ll.add(7);


ll.reverseKGroup(3)

ll.display()