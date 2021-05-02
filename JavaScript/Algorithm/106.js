var buildTree = function(inorder, postorder) {
    const map = new Map();
    inorder.forEach((item, index) => {
        map.set(item, index);
    })
    const myBuildTree = (iStart, iEnd, pStart, pEnd) => {
        if (iStart > iEnd) return null;
        let root = postorder[pEnd];
        let mid = map.get(root);
        let leftNodes = mid - iStart;
        return new TreeNode(
            root,
            myBuildTree(iStart, mid - 1 , pStart, pStart + leftNodes - 1),
            myBuildTree(mid + 1, iEnd, pStart + leftNodes, pEnd - 1)
        )
    }
    return myBuildTree(0, inorder.length - 1, 0, postorder.length - 1);
};
