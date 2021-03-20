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
        if (this.heap[index].val < this.heap[parentIndex].val) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    // 元素下沉
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        let smallerIndex = index;
        if (leftIndex < this.heap.length && this.heap[leftIndex].val < this.heap[index].val) {
            smallerIndex = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex].val < this.heap[smallerIndex].val) {
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
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        // 先保留最小元素
        const min = this.heap[0];
        // 用最后一个节点的值替换根节点，并从根节点开始下沉
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return min;
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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const result = new ListNode();
    let p = result;
    const minHeap = new MinHeap();
    // 先将每个链表的头节点存储到最小堆中
    lists.forEach(list => {
        if (list) {
            minHeap.insert(list);
        }
    })
    // 每次都将堆中最小节点取出，链接在 result 链表上，更新 p 指针指向的位置
    // 并将取出的节点所在链表的下一个节点插入最小堆
    while (minHeap.size()) {
        const min = minHeap.pop();
        p.next = min;
        p = p.next;
        if (min.next) {
            minHeap.insert(min.next);
        }
    }
    return result.next;
};

const arr = [[1,4,5],[1,3,4],[2,6]];
const lists = [];

arr.forEach(list => {
    const thisList = new ListNode();
    let p = thisList;
    list.forEach(num => {
        p.next = new ListNode(num);
        p = p.next;
    })
    lists.push(thisList.next);
})

const result = mergeKLists(lists);
const tst = 111;
console.log(tst);
console.log(result);
console.log(result);