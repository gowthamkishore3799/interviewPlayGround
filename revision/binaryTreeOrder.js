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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if(!root){
        return [];
    }


    let queue = [[root]]

    let result = [];


    while(queue.length>0){
        let nodes = queue.shift();

        let currentNodeValues = [];
        let nextNodeValues = [];

        for(let node of nodes){

            if(node){
                currentNodeValues.push(node.val);

                if(node.left){
                    nextNodeValues.push(node.left)
                }


                if(node.right){
                    nextNodeValues.push(node.right);
                }  
            }
            
        }

        result.push(currentNodeValues);


        if(nextNodeValues.length>0){
            queue.push(nextNodeValues)
        }
        
    }

    return result
}