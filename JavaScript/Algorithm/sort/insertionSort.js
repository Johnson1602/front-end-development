Array.prototype.insertionSort = function() {
    for (let i = 1; i < this.length; i++) {
        let current = this[i];
        let j = i;
        for (j; j > 0; j--) {
            if (this[j - 1] > current) {
                this[j] = this[j - 1];
            } else {
                break;
            }
        }
        this[j] = current;
    }
}

const arr = [2, 4, 5, 3, 1];
arr.insertionSort();
console.log(arr);