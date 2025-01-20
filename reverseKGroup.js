var reverseKGroup = function (head, k) {
    let nodes = 0;

    let iter = head;

    while (iter) {
        nodes++;
        iter = iter.next;
    }


    console.log(nodes)


};

/**
 * Find length
 * 
 * 
 * if length %k == 0: proper swapping, else not
 * 
 * slowpointer = head
 * fastpointer = slowpointer.next
 * let index =0
 * 
 * while(i<length-2){
 * 
 * temp=fastpointer.next;
 * fastpointer.next = slowpointer;
 * 
 * if(i %k ==0                        ){
 * tail = slowpointer}
 * 
 * 
 * 
 * index++;
 * 
 * 
 * if(i+2 %k ==0){
 * tail.next == temp;
 * 
 * if(i<k){
 * fastpointer = head;
 * }
 * slowpointer = temp
 * fastpointer = slowpointer.next;
 * index = index+2; 
 * } else{
 * slowpointer = fastpointer
 * fastpointer = temp
 * }
 * 
 * if(i+1 = k-1)
 * 
 * }
 */