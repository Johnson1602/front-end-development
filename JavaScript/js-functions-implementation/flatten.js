function flatten(arr) {
    const result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // 如果这一项是数组，就递归调用 flatten
            result.push(...flatten(item));
        } else {
            // 否则就直接添加到 result
            result.push(item);
        }
    })
    return result;
}

const arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(arr));

// function flatten(array) {
//     if (!Array.isArray(array)) {
//         return array;
//     }
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         // 这里一定要用 concat，因为递归结束返回的是一个数组，要将这个数组拼到结果数组后面
//         // 不能直接 push，直接 push 的是一个数组，结果会变成 [ 1, [ 2, [ 3, 4 ] ] ]
//         result = result.concat(flatten(array[i]));
//     }
//     return result;
// }
