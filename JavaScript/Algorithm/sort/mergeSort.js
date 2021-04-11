Array.prototype.mergeSort = function() {
    const rec = (arr) => {
        // 递归终止条件
        if (arr.length === 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const leftSorted = rec(left);
        const rightSorted = rec(right);

        const merge = [];
        while (leftSorted.length && rightSorted.length) {
            merge.push(leftSorted[0] < rightSorted[0] ? leftSorted.shift() : rightSorted.shift());
        }
        while (leftSorted.length) {
            merge.push(leftSorted.shift());
        }
        while (rightSorted.length) {
            merge.push(rightSorted.shift());
        }
        return merge;
    }
    const result = rec(this);
    result.forEach((value, index) => {
        this[index] = value;
    })
}

const arr = [2, 4, 5, 3, 1];
arr.mergeSort();
console.log(arr);
