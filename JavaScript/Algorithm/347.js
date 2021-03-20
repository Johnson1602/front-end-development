class MinHeap {
    // 构造函数
    constructor() {
        this.heap = [];
    }

    // 获取节点 index
    getParentIndex(child) {
        return (child - 1) >> 1;
    }
    getLeftIndex(parent) {
        return parent * 2 + 1;
    }
    getRightIndex(parent) {
        return parent * 2 + 2;
    }

    // 交换两个节点的值
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // 元素上浮
    shiftUp(index) {
        if (index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        // 如果比父节点小，那就交换值，并对父节点进行递归上浮
        if (this.heap[index].value < this.heap[parentIndex].value) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    // 元素下沉
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        let smallerIndex = index;
        if (leftIndex < this.heap.length && this.heap[leftIndex].value < this.heap[index].value) {
            smallerIndex = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex].value < this.heap[index].value) {
            smallerIndex = rightIndex;
        }
        // 如果子元素比父元素小，那就交换值
        if (smallerIndex != index) {
            this.swap(smallerIndex, index);
            this.shiftDown(smallerIndex);
        }
    }

    // 添加元素
    insert(value) {
        this.heap.push(value);
        // shiftup
        this.shiftUp(this.heap.length - 1);
    }

    // 删除根节点
    pop() {
        // 用最后一个节点的值替换根节点，并从根节点开始下沉
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    // 查看堆大小
    size() {
        return this.heap.length;
    }

    // 查看最小元素
    peek() {
        return this.heap[0];
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 建立一个字典用来存储元素和频率
    const map = new Map();
    nums.forEach(num => {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    })
    console.log(map);
    // 建立一个最小堆来存储前 k 高频元素
    const minHeap = new MinHeap();
    map.forEach((value, key) => {
        minHeap.insert({ value, key });
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    })
    console.log(minHeap);
    return minHeap.heap.map(item => item.key);
};

topKFrequent([5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5], 7)