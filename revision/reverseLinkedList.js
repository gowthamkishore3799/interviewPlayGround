var reverseList = function(head) {
    let slowpointer = null;
    let fastpointer = head;

    while (fastpointer != null) {
        let temp = fastpointer.next;
        fastpointer.next = slowpointer;
        slowpointer = fastpointer;
        fastpointer = temp;
    }

    return slowpointer;
};