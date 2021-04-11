Array.prototype.binarySearch = function(item) {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (this[middle] === item) {
            return middle;
        } else if (this[middle] > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5];
// const index = arr.binarySearch(6);
// console.log(index);

// 也可以单拿出来写一个方法
// 从 arr 中查找 num，如果找到则返回 num 的索引，否则返回 -1
function binarySearch(arr, num) {
    let l = 0,
        r = arr.length - 1;
    // 从 [l...r] 的区间查找 i
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let midNum = arr[mid];
        if (midNum === num) {
            return mid;
        }
        if (midNum < num) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 7));