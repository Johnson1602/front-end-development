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
const index = arr.binarySearch(6);
console.log(index);