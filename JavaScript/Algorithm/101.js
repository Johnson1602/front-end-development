var isSymmetric = function(root) {
    let check = (left, right) => {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null) {
            return false;
        }
        return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);      
    }
    return check(root, root);
};

let root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            rigth: null
        }
    }
};

isSymmetric(root);