Array.prototype.mergeSort = function() {
    const rec = (arr) => {
        // 递归终止条件
        if (arr.length === 1) {
            return arr;
        }
        const partitionIndex = Math.floor(arr.length / 2);
        const leftArr = arr.slice(0, partitionIndex);
        const rightArr = arr.slice(partitionIndex, arr.length);
        const sortedLeftArr = rec(leftArr);
        const sortedRightArr = rec(rightArr);
        
        // merge
        const mergeArr = [];
        while (sortedLeftArr.length || sortedRightArr.length) {
            if (sortedLeftArr.length && sortedRightArr.length) {
                mergeArr.push(sortedLeftArr[0] < sortedRightArr[0] ? sortedLeftArr.shift() : sortedRightArr.shift());
            } else if (!sortedLeftArr.length && sortedRightArr.length) {
                mergeArr.push(sortedRightArr.shift());
            } else if (sortedLeftArr.length && !sortedRightArr.length) {
                mergeArr.push(sortedLeftArr.shift());
            }
        }
        return mergeArr;
    }
    const result = rec(this);
    result.forEach((value, index) => {
        this[index] = value;
    })
}

const arr = [2, 4, 5, 3, 1];
arr.mergeSort();
console.log(arr);