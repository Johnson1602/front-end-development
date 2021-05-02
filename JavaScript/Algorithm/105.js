function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
    const map = new Map();
    inorder.forEach((item, index) => {
        map.set(item, index);
    })
    const myBuildTree = (pStart, pEnd, iStart, iEnd) => {
        if (pStart > pEnd) return null;
        let root = preorder[pStart];
        let mid = map.get(root);
        let leftNodes = mid - iStart;
        return new TreeNode(
            root,
            myBuildTree(pStart + 1, pStart + leftNodes, iStart, mid - 1),
            myBuildTree(pStart + leftNodes + 1, pEnd, mid + 1, iEnd)
        )
    }
    return myBuildTree(0, preorder.length - 1, 0, inorder.length - 1);
};

buildTree([3,9,20,15,7], [9,3,15,20,7]);
