Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArr, currentVal, index, array) {
        mappedArr[index] = callback.call(thisArg, currentVal, index, array);
        return mappedArr;
    }, []);
};

const arr = [1, 2, , 3];
const result = arr.mapUsingReduce((item, index, arr) => item + index + arr.length); // [5, 7, , 10]
console.log(result);
