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
    const result = [];
    var dfs = (root, index) =>{
        if(!root){
            return null;
        }

        Array.isArray(result[index]) ? result[index].push(root.val) : result[index] = [root.val];

        index++;

        dfs(root.left, index);
        dfs(root.right, index);
    };
    let index = 0;
    dfs(root, index)

    return result

};