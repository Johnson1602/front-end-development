var pacificAtlantic = function(matrix) {
    if (!matrix || !matrix[0]) {
        return [];
    }
    // 使用深度优先遍历，从两条海岸线逆流而上，记录能够访问到的位置
    // 使用两个矩阵分别记录能够到达太平洋和大西洋的位置

    // 获取输入数组的长和宽
    const rows = matrix.length;
    const columns = matrix[0].length;
    // 为两个大洋建立数组
    const pacific = Array.from({ length: rows }, () => new Array(columns).fill(false));
    const atlantic = Array.from({ length: rows }, () => new Array(columns).fill(false));

    // dfs 算法，传入的参数为：遍历起点的横纵坐标，起点的大洋
    const dfs = (row, column, ocean) => {
        // 将当前节点标记为可到达
        ocean[row][column] = true;
        // 对每个相邻的未访问过的节点进行 dfs
        [[row-1, column], [row+1, column], [row, column-1], [row, column+1]].forEach(([nrow, ncolumn]) => {
            if (
                // 没访问过
                ocean[nrow][ncolumn] === false &&
                // 且横纵坐标都在矩阵内
                nrow >= 0 && nrow < rows && 
                ncolumn >= 0 && ncolumn < columns &&
                ocean[nrow][ncolumn] >= ocean[row][column]
            ) {
                // 那么就 dfs
                dfs(nrow, ncolumn, ocean);
            }
        })
    }

    // 从海岸线的每个节点开始 dfs
    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pacific);
        dfs(i, columns - 1, atlantic);
    }
    for (let i = 0; i < columns; i++) {
        dfs(0, i, pacific);
        dfs(rows - 1, i, atlantic);
    }

    console.log(pacific, atlantic);
};

pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]);