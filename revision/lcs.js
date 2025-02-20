var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root.val === p.val|| root.val === q.val) {
        return root;
    }
    var left = lowestCommonAncestor(root.left, p, q)
    var right = lowestCommonAncestor(root.right, p, q)

    if(left === null) {
        return right;
    }
    if(right === null) {
        return left;
    }

    return root;
};