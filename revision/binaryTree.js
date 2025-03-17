var buildTree = function(preorder, inorder) {
    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    function buildTree(preStart, start, end) {
        if (start > end) {
            return null;
        }

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const inorderRootIndex = inorderMap.get(rootVal);

        root.left = buildTree(preStart + 1, start, inorderRootIndex - 1);
        root.right = buildTree(preStart + (inorderRootIndex - start) + 1, inorderRootIndex + 1, end);

        return root;
    };

    return buildTree(0, 0, inorder.length - 1);
};