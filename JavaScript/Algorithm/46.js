var permute = function(nums) {
    const result = [];
    const backtrack = (path) => {
        if (path.length === nums.length) {
            result.push(path);
            return;
        }
        nums.forEach(num => {
            if (!path.includes(num)) {
                path.push(num);
                backtrack(path);
            } else {
                return;
            }
        })
    }
    backtrack([]);
    return result;
};

permute([1,2,3])