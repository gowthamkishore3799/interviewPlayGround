function getLength(node) {
    let len = 0;
    while (node) {
        len++;
        node = node.next;
    }
    return len;
}

function padList(node, padCount) {
    while (padCount > 0) {
        let newNode = new ListNode(0);
        newNode.next = node;
        node = newNode;
        padCount--;
    }
    return node;
}

function addLists(l1, l2) {
    if (!l1 && !l2) return { carry: 0, node: null };

    let { carry, node } = addLists(l1.next, l2.next);

    let sum = l1.val + l2.val + carry;
    let newNode = new ListNode(sum % 10);
    newNode.next = node;

    return { carry: Math.floor(sum / 10), node: newNode };
}

var addTwoNumbers = function(l1, l2) {
    let len1 = getLength(l1);
    let len2 = getLength(l2);

    if (len1 < len2) l1 = padList(l1, len2 - len1);
    else l2 = padList(l2, len1 - len2);

    let { carry, node } = addLists(l1, l2);

    if (carry > 0) {
        let head = new ListNode(carry);
        head.next = node;
        return head;
    }

    return node;
};
