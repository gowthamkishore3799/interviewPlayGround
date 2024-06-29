/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];

    var PreOrderTraversal = (root)=>{

        if(!root){
            result.push("end");
            return;
        }

        result.push(root?.val);

        PreOrderTraversal(root?.left);
        PreOrderTraversal(root?.right);
    }

    PreOrderTraversal(root)
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let i = 0;
    const result = data.split(",")
    console.log(result)
    var constructTreeFromPreOrder = () => {
        if (result[i] == "end") {
            i++;
            return null;
        } else {
            const node = new TreeNode(Number(result[i]));
            i++;
            node.left = constructTreeFromPreOrder();
            node.right = constructTreeFromPreOrder();
            return node;
        }
    }

    return constructTreeFromPreOrder();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */