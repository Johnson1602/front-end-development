// 冒泡排序每一趟能确定一个元素的位置
// 一共有 length 个元素，排好了前 length - 1 个，就相当于全部排好了，因为最后一个只有那一个位置了
// 所以外层循环的作用是 跑几趟
// 内层循环是挨个比较相邻元素的大小

Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
}

const arr = [5, 4, 3, 2, 1];
// console.log(arr);
arr.bubbleSort()
console.log(arr);