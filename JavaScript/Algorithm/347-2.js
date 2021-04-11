class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(entry) {
        this.heap.push(entry);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        const entry = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.shiftDown(0);
        }
        return entry;
    }

    top() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    shiftUp(i) {
        if (i === 0) return;
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[parent][1] > this.heap[i][1]) {
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            this.shiftUp(parent);
        }
    }

    shiftDown(i) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let small = i;
        if (left < this.heap.length && this.heap[left][1] < this.heap[small][1]) small = left;
        if (right < this.heap.length && this.heap[right][1] < this.heap[small][1]) small = right;
        if (small !== i) {
            [this.heap[small], this.heap[i]] = [this.heap[i], this.heap[small]];
            this.shiftDown(small);
        }
    }
}

var topKFrequent = function(nums, k) {
    // 堆中存放 [num, freq]
    // 先用 map 计算所有 nums 的频率
    // 然后逐个加入最小堆中
    // 最后取出堆中的所有元素的 key 并返回
    const map = new Map();
    nums.forEach(item => {
        map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    })

    const minHeap = new MinHeap();
    for (const entry of map) {
        if (minHeap.size() === k) {
            if (minHeap.top()[1] < entry[1]) {
                minHeap.pop();
                minHeap.push(entry);
            }
        } else {
            minHeap.push(entry);
        }
    }

    const result = [];
    while (!minHeap.isEmpty()) {
        result.push(minHeap.pop()[0]);
    }

    return result;
};

topKFrequent([1,1,1,2,2,3], 2);