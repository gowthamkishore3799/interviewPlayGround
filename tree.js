class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.nodes = new Map(); // HashMap to store nodes
      this.root = null;
    }
  
    // Insert nodes using HashMap
    insert(parentValue, childValue, isLeft) {
      if (!this.nodes.has(parentValue)) {
        this.nodes.set(parentValue, new TreeNode(parentValue));
      }
      if (!this.nodes.has(childValue)) {
        this.nodes.set(childValue, new TreeNode(childValue));
      }
  
      let parent = this.nodes.get(parentValue);
      let child = this.nodes.get(childValue);
  
      if (isLeft) {
        parent.left = child;
      } else {
        parent.right = child;
      }
  
      if (!this.root) {
        this.root = parent;
      }
    }
  
    // In-order traversal (Left, Root, Right)
    inOrder(node = this.root) {
      if (node) {
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
      }
    }
  
    // Level-order (BFS) traversal
    levelOrder() {
      if (!this.root) return;
      let queue = [this.root];
      while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    returnRoot(){
      return this.root;
    }


    
  }



  export function buildTreeForCode(){
    const tree = new BinaryTree();
  tree.insert(1, 2, true);  // 2 is left child of 1
  tree.insert(1, 3, false); // 3 is right child of 1
  tree.insert(2, 4, true);  // 4 is left child of 2
  tree.insert(2, 5, false); // 5 is right child of 2
  tree.insert(3, 6, true);  // 6 is left child of 3
  tree.insert(3, 7, false); // 7 is right child of 3

  tree.insert(4, 8, true);  // 8 is left child of 4
tree.insert(4, 9, false); // 9 is right child of 4
tree.insert(5, 10, true); // 10 is left child of 5
tree.insert(5, 11, false); // 11 is right child of 5
tree.insert(6, 12, true); // 12 is left child of 6
tree.insert(6, 13, false); // 13 is right child of 6
tree.insert(7, 14, true); // 14 is left child of 7
tree.insert(7, 15, false); // 15 is right child of 7


  console.log(tree.returnRoot())


  return tree.returnRoot();
  }
  

  // Example usage:
  