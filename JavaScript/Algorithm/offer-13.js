var movingCount = function(m, n, k) {
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));

    let count = 0;

    const rec = (x, y) => {
        if (x >= m || y >= n || visited[x][y]) {
            return;
        }
        // 是否大于 k
        sumX = Math.floor(x / 100) + Math.floor(x / 10) + Math.floor(x % 10);
        sumY = Math.floor(y / 100) + Math.floor(y / 10) + Math.floor(y % 10);
        if (sumX + sumY > k) {
            return;
        }
        count++;
        visited[x][y] = true;
        rec(x, y + 1);
        rec(x + 1, y);
    }
    rec(0, 0);

    return count;
};

const m = 1, n = 2, k = 1;
movingCount(1, 2, 1);