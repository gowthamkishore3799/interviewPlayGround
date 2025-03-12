/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let queue = [[root]]
    let rightSideTree = [];


    while(queue.length){
        let elements = queue.pop();
        let newSubTree = [];
        let val = undefined

        for(let element of elements){

            if(element?.val != null){
                val = element.val
            }


            if(element?.left){
                newSubTree.push(element.left);
            }


            if(element?.right){
                newSubTree.push(element.right)
            }
        }

        if(val != undefined){
            rightSideTree.push(val)
        }



        if(newSubTree.length){
            queue.push(newSubTree);
        }
        
    }


    return rightSideTree
};