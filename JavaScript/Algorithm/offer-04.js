var findNumberIn2DArray = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    const rec = function(x, y) {
        if (x >= rows || y >= columns) {
            return false;
        }
        if (matrix[x][y] > target) {
            return false;
        }
        if (matrix[x][y] === target) {
            return true;
        }
        return rec(x + 1, y) || rec(x, y+ 1);
    }
    return rec(0, 0);
};

matrix = [[1,1]];
target = 2;

result = findNumberIn2DArray(matrix, target);