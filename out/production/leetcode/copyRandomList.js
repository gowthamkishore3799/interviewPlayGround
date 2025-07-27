function copyRandomList(head) {
    // Your implementation here
}

/**
 * Create the entire copy
 * 
 * 
 * let root = head;
 * let newHead = null;
 * let curr = newHead;
 * let createdNodes = {};
 * 
 * 
 * 
 * while(root?.next){
 * 
 * 
 * 
 * let newNode = new Node(root.val, null, null)
 * 
 * if(curr){
 *  curr.next = newNode;
 * }
 * 
 * curr = current.next;
 * 
 * createdNodes(root, newNode)
 * root = root.next;
 * }
 * let root = head;
 * let curr = newHead
 * while(root?.next){
 * 
 * curr.random = createdNodes[root.random]
 * curr = curr.next
 * root = root.next;
 * }
 * 
 * 
 * function copyRandomList(head) {
 * 
 * let createdNodes = new Map();
 * 
 * 
 * function dfs(current){
 * 
 * if(!current){
 * return null
 * }
 * 
 * let newNode = newNode(current.val, null, null);
 * newNode.next = dfs(current.next);
 * newNode.random = dfs(current.random)
 * }
 * let current = dfs(head);
 * 
 * return current;
 * }
 * 
 * 
 * 
 */