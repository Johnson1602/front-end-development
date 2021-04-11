var maxDepth = function(root) {
    let maxD = 0;
    function dfs(node, depth) {
        if (node == null) {
            return;
        }
        depth++;
        if (node.left == null && node.right == null) {
            maxD = Math.max(maxD, depth);
        }
        dfs(node.left, depth);
        dfs(node.right, depth);
    }
    dfs(root, 0);
    return maxD;
};

let root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: null,
        right: null
    }
}

maxDepth(root);