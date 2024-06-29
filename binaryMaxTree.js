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
 * @return {number}
 */



var maxPathSum = function (root) {
    let max = Number.MIN_SAFE_INTEGER
    var FindMaxPath = function (root) {
        if(!root){
            return Number.MIN_SAFE_INTEGER;
        }
        
        let LeftMax = FindMaxPath(root?.left);
        let RightMax = FindMaxPath(root?.right);

        let closedPath = Math.max(root?.val, root?.val+LeftMax, root?.val+RightMax, root?.val+LeftMax+RightMax);
        let PartofPath = root?.val + Math.max(LeftMax, RightMax)

        max = Math.max(closedPath, PartofPath, max)

        return Math.max(PartofPath,root.val)
    }

    FindMaxPath(root);
    return max;
};